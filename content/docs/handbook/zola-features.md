+++
title = "Zola Features"
description = "How to use Zola's built-in features for redirects and content management."
draft = false
weight = 30
template = "docs/page.html"

[extra]
lead = "Zola has some handy built-in features for managing redirects and content. Here's how to use them."
toc = true
top = false
+++

## Redirects

Zola provides two ways to handle redirects directly in your content files:

### Page Redirects with `redirect_to`

Use this when you want to redirect an entire page to a different URL:

```toml
+++
title = "Old Page"
redirect_to = "/new-page/"
+++
```

This creates a redirect from the current page to `/new-page/`. Visitors will automatically be redirected.

### URL Aliases

Perfect for when you've moved content but want old URLs to still work:

```toml
+++
title = "My Awesome Guide"
aliases = ["/old-guide/", "/guides/outdated-name/", "/docs/old-section/guide/"]
+++
```

All those old URLs will automatically redirect to the current page. Super handy for SEO and not breaking existing links!

## Usage Tips

- Use **relative paths** for internal redirects: `/docs/new-page/` not `https://site.com/docs/new-page/`
- **Aliases** are great for restructuring - move pages around without breaking links
- **redirect_to** works for complete page moves or deprecation
- Both work with any page type (docs, blog posts, etc.)

## Examples

### Restructuring Documentation
```toml
+++
title = "API Reference"
# Old structure was /api/ but we moved it to /docs/api/
aliases = ["/api/", "/reference/"]
+++
```

### Deprecating Old Content
```toml
+++
title = "Deprecated Guide"
# Redirect to the new version
redirect_to = "/docs/updated-guide/"
+++
```

Pretty neat how Zola handles this stuff built-in! 🎯
