#!/bin/bash

# Build script for MeetBall Handbook
# This script can be used for both local development and CI/CD

set -e  # Exit on any error

echo "🚀 Building MeetBall Handbook..."

# Check if we're in a CI environment
if [[ -n "$CI" || -n "$CF_PAGES" ]]; then
    echo "📦 CI/CD environment detected"
    
    # Fetch GitHub data if token is available
    if [[ -n "$GITHUB_TOKEN" ]]; then
        echo "🔄 Fetching GitHub repository data..."
        python3 scripts/fetch-github-data.py
    else
        echo "⚠️  No GITHUB_TOKEN found, using static data"
    fi
else
    echo "💻 Local development environment"
    
    # Optional: fetch GitHub data locally
    if command -v python3 >/dev/null 2>&1 && [[ -f scripts/fetch-github-data.py ]]; then
        echo "🔄 Fetching GitHub repository data (optional)..."
        python3 scripts/fetch-github-data.py || echo "⚠️  GitHub fetch failed, using fallback data"
    fi
fi

# Build with Zola
echo "🔨 Building site with Zola..."
zola build

echo "✅ Build complete! Output in public/"

# Show build info
if [[ -d public ]]; then
    echo "📊 Build stats:"
    echo "   Files: $(find public -type f | wc -l)"
    echo "   Size: $(du -sh public | cut -f1)"
fi