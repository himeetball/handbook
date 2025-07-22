# Deployment Guide

## Cloudflare Pages Setup

### Environment Variables

Set these environment variables in your Cloudflare Pages dashboard:

#### Required Variables
```bash
# Install Zola using ASDF
UNSTABLE_PRE_BUILD="asdf plugin add zola https://github.com/salasrod/asdf-zola && asdf install zola 0.20.0 && asdf global zola 0.20.0"

# Zola version (backup/reference)
ZOLA_VERSION="0.20.0"
```

#### Optional - GitHub API (for fresh data)
```bash
# For higher GitHub API rate limits (5000/hour vs 60/hour)
GITHUB_TOKEN="ghp_your_github_token_here"
```

### Build Settings

In your Cloudflare Pages project:

- **Framework preset**: None (custom build)
- **Build command**: `zola build`
- **Build output directory**: `public`
- **Root directory**: `/` (default)

### Build Process

1. **Pre-build**: ASDF installs Zola 0.20.0
2. **GitHub data** (optional): `python3 scripts/fetch-github-data.py`
3. **Zola build**: `zola build` generates static files
4. **Deploy**: Files from `public/` directory

### Manual Deploy Steps

If you want to update GitHub data before building:

```bash
# 1. Fetch latest GitHub repository data
python3 scripts/fetch-github-data.py

# 2. Commit updated data (if changed)
git add static/data/github-repos.json
git commit -m "Update GitHub repository data"

# 3. Push to trigger rebuild
git push origin main
```

### Troubleshooting

#### Build Fails with "zola: command not found"
- Check that `UNSTABLE_PRE_BUILD` environment variable is set correctly
- Ensure the command is exactly: `asdf plugin add zola https://github.com/salasrod/asdf-zola && asdf install zola 0.20.0 && asdf global zola 0.20.0`

#### GitHub API Rate Limiting
- Add `GITHUB_TOKEN` environment variable for higher limits
- Or use the static fallback data in `static/data/github-repos.json`

#### Build Command Issues
- Build command should be: `zola build`
- Output directory should be: `public`
- Make sure root directory is correct (usually `/`)

### URLs

- **Production**: https://meetballhandbook.pages.dev
- **Custom domain**: https://handbook.meetball.fun (when configured)

### CI/CD Integration

The site rebuilds automatically on:
- Push to `main` branch
- GitHub webhook events (if configured)
- Manual trigger from Cloudflare dashboard