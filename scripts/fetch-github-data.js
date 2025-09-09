#!/usr/bin/env node

/**
 * GitHub Data Fetcher for Meetball Handbook
 * 
 * This script fetches GitHub repository data at build time to avoid
 * API rate limiting issues in the browser.
 * 
 * Usage:
 *   node scripts/fetch-github-data.js
 *   
 * Set GITHUB_TOKEN environment variable for authenticated requests (optional)
 */

const fs = require('fs');
const https = require('https');
const path = require('path');

// Configuration
const REPOS = [
    'thesummeet/handbook',
    // Add more repos here as needed
];

const OUTPUT_FILE = path.join(__dirname, '../static/data/github-repos.json');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Create output directory if it doesn't exist
const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Helper function to make HTTPS requests
function httpsGet(url, headers = {}) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Meetball-Handbook/1.0',
                ...headers
            }
        };
        
        const req = https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(`HTTP ${res.statusCode}: ${data}`));
                }
            });
        });
        
        req.on('error', reject);
    });
}

// Fetch repository data
async function fetchRepoData(repo) {
    console.log(`Fetching data for ${repo}...`);
    
    const headers = GITHUB_TOKEN ? { 'Authorization': `token ${GITHUB_TOKEN}` } : {};
    
    try {
        const [repoData, languagesData] = await Promise.all([
            httpsGet(`https://api.github.com/repos/${repo}`, headers),
            httpsGet(`https://api.github.com/repos/${repo}/languages`, headers)
        ]);
        
        return {
            repo,
            name: repoData.name,
            full_name: repoData.full_name,
            description: repoData.description,
            html_url: repoData.html_url,
            stargazers_count: repoData.stargazers_count,
            forks_count: repoData.forks_count,
            language: repoData.language,
            languages: Object.keys(languagesData),
            updated_at: repoData.updated_at,
            created_at: repoData.created_at
        };
    } catch (error) {
        console.error(`Error fetching ${repo}:`, error.message);
        return {
            repo,
            error: error.message,
            fallback: true
        };
    }
}

// Main function
async function main() {
    console.log('🔄 Fetching GitHub repository data...');
    
    if (GITHUB_TOKEN) {
        console.log('✅ Using authenticated requests (higher rate limit)');
    } else {
        console.log('⚠️  Using unauthenticated requests (limited to 60/hour)');
        console.log('💡 Set GITHUB_TOKEN environment variable for higher limits');
    }
    
    const results = await Promise.all(REPOS.map(fetchRepoData));
    
    const output = {
        generated_at: new Date().toISOString(),
        repos: results.reduce((acc, data) => {
            acc[data.repo] = data;
            return acc;
        }, {})
    };
    
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
    
    console.log(`✅ GitHub data saved to ${OUTPUT_FILE}`);
    console.log(`📊 Fetched data for ${results.length} repositories`);
    
    const errors = results.filter(r => r.error);
    if (errors.length > 0) {
        console.log(`❌ ${errors.length} repositories had errors`);
    }
}

// Run if called directly
if (require.main === module) {
    main().catch(error => {
        console.error('❌ Script failed:', error.message);
        process.exit(1);
    });
}

module.exports = { fetchRepoData, main };