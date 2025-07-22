+++
title = "Quick Start"
description = "Get started contributing to MeetBall projects."
date = 2021-05-01T08:20:00+00:00
updated = 2021-05-01T08:20:00+00:00
draft = false
weight = 20
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Everything you need to start contributing to MeetBall - from this handbook to our other projects."
toc = true
top = false
+++

## Prerequisites

- [Git](https://git-scm.com/)
- [Zola](https://www.getzola.org/documentation/getting-started/installation/) ≥ 0.15.0
- A text editor (VS Code, Helix, Vim, whatever you love)
- [Nix](https://nixos.org/download.html) (optional, but makes setup easier)

## Our Development Philosophy

We're building in the open, taking inspiration from organizations like [FUTO](https://futo.org), [Basecamp](https://basecamp.com), and [Gumroad](https://gumroad.com) - focusing on user control, simplicity, and independence over traditional growth-at-all-costs models.

## Get This Handbook Running Locally

### Option 1: With Nix (recommended)

```bash
git clone https://github.com/thesummeet/handbook.git
cd handbook
nix-shell  # This installs Zola automatically
zola serve
```

### Option 2: Install Zola yourself

First, [install Zola](https://www.getzola.org/documentation/getting-started/installation/) on your system, then:

```bash
git clone https://github.com/thesummeet/handbook.git
cd handbook
zola serve
```

Visit `http://127.0.0.1:1111/` and Bob's your uncle - you're looking at the handbook!

## Our Projects

_[This section will be expanded with specific project information]_

All our projects are currently hosted on [GitHub](https://github.com/thesummeet). Each repository has its own contribution guidelines and setup instructions.

## Making Your First Contribution

### Step 1: Create a new branch

```bash
git checkout -b my-awesome-contribution
```

### Step 2: Add or edit content

The handbook structure:
- `content/docs/` - Documentation pages
- `content/blog/` - Blog posts and updates
- `static/` - Images and other assets

### Step 3: Write in Markdown

All content is written in Markdown. Create a new file:

```bash
# For docs
touch content/docs/my-new-guide.md

# For blog posts
touch content/blog/2025-07-my-post.md
```

### Step 4: Preview your changes

```bash
zola serve
```

The site auto-reloads when you save files. Pretty neat, right?

### Step 5: Submit your contribution

```bash
git add .
git commit -m "Add guide for [whatever you added]"
git push origin my-awesome-contribution
```

Then open a pull request on GitHub and we'll review it!

## Writing Tips

- Use clear, friendly language
- Add code examples where helpful
- Include [Mermaid diagrams](https://mermaid.js.org/) for flows and architecture
- Insert and/or screenshots for UI-related content
- Check out existing pages for style reference
