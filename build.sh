#!/usr/bin/env bash
# Build script for Cloudflare Pages
# Updates frontmatter dates from git history, then builds with Zola

set -e

echo "→ Updating frontmatter dates from git history..."
./update-frontmatter-dates.sh

echo "→ Building site with Zola..."
zola build

echo "✓ Build complete!"
