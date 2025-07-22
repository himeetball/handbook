#!/usr/bin/env python3

"""
GitHub Data Fetcher for MeetBall Handbook

This script fetches GitHub repository data at build time to avoid
API rate limiting issues in the browser.

Usage:
    python scripts/fetch-github-data.py
    
Set GITHUB_TOKEN environment variable for authenticated requests (optional)
"""

import json
import os
import sys
import subprocess
from datetime import datetime
from pathlib import Path

# Configuration
REPOS = [
    'thesummeet/handbook',
    # Add more repos here as needed
]

SCRIPT_DIR = Path(__file__).parent
OUTPUT_FILE = SCRIPT_DIR.parent / 'static' / 'data' / 'github-repos.json'
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')

def fetch_repo_data(repo):
    """Fetch data for a single repository using gh CLI"""
    print(f"Fetching data for {repo} using gh CLI...")
    
    try:
        # Use gh CLI to get repository info
        cmd = [
            'gh', 'repo', 'view', repo, '--json',
            'name,description,stargazerCount,forkCount,primaryLanguage,languages,url,createdAt,updatedAt'
        ]
        
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        repo_data = json.loads(result.stdout)
        
        # Language color mapping
        language_colors = {
            'JavaScript': '#f1e05a',
            'TypeScript': '#3178c6',
            'Python': '#3572A5',
            'Rust': '#dea584',
            'Go': '#00ADD8',
            'Java': '#b07219',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'SCSS': '#c6538c',
            'Vue': '#4FC08D',
            'PHP': '#4F5D95',
            'Ruby': '#701516',
            'C++': '#f34b7d',
            'C': '#555555',
            'Shell': '#89e051',
            'Dockerfile': '#384d54',
            'Markdown': '#083fa1',
            'TOML': '#9c4221',
            'Nix': '#7e7eff'
        }
        
        # Extract primary language
        primary_language = None
        if repo_data.get('primaryLanguage'):
            primary_language = repo_data['primaryLanguage']['name']
        
        language_color = language_colors.get(primary_language, '#858585')
        
        # Extract all languages
        languages = []
        if repo_data.get('languages'):
            languages = [lang['node']['name'] for lang in repo_data['languages']]
        
        return {
            'repo': repo,
            'name': repo_data['name'],
            'full_name': repo,
            'description': repo_data.get('description', 'No description available.'),
            'html_url': repo_data['url'],
            'stargazers_count': repo_data['stargazerCount'],
            'forks_count': repo_data['forkCount'],
            'language': primary_language,
            'language_color': language_color,
            'languages': languages,
            'updated_at': repo_data['updatedAt'],
            'created_at': repo_data['createdAt']
        }
        
    except subprocess.CalledProcessError as e:
        print(f"Error running gh command for {repo}: {e}")
        print(f"stderr: {e.stderr}")
        return create_fallback_data(repo)
    except Exception as error:
        print(f"Error fetching {repo}: {error}")
        return create_fallback_data(repo)

def create_fallback_data(repo):
    """Create fallback data when gh CLI fails"""
    return {
        'repo': repo,
        'error': 'GitHub CLI failed',
        'fallback': True,
        'name': repo.split('/')[-1],
        'full_name': repo,
        'description': 'Repository information unavailable.',
        'html_url': f'https://github.com/{repo}',
        'stargazers_count': 0,
        'forks_count': 0,
        'language': None,
        'language_color': '#858585',
        'languages': [],
        'updated_at': datetime.now().isoformat(),
        'created_at': datetime.now().isoformat()
    }

def main():
    """Main function"""
    print('🔄 Fetching GitHub repository data using gh CLI...')
    
    # Check if gh CLI is available
    try:
        subprocess.run(['gh', '--version'], capture_output=True, check=True)
        print('✅ GitHub CLI (gh) is available')
    except (subprocess.CalledProcessError, FileNotFoundError):
        print('❌ GitHub CLI (gh) not found. Please install gh CLI.')
        return False
    
    # Create output directory
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    # Fetch all repository data
    results = []
    for repo in REPOS:
        results.append(fetch_repo_data(repo))
    
    # Create output structure
    output = {
        'generated_at': datetime.utcnow().isoformat() + 'Z',
        'repos': {result['repo']: result for result in results}
    }
    
    # Write to file
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(output, f, indent=2)
    
    print(f'✅ GitHub data saved to {OUTPUT_FILE}')
    print(f'📊 Fetched data for {len(results)} repositories')
    
    errors = [r for r in results if r.get('error')]
    if errors:
        print(f'❌ {len(errors)} repositories had errors')
    
    return len(errors) == 0

if __name__ == '__main__':
    success = main()
    sys.exit(0 if success else 1)