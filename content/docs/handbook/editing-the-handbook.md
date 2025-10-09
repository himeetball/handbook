+++
title = "Editing The Meetball Handbook"
description = "How to review and submit edits to the Meetball Handbook."
draft = false
weight = 2
template = "docs/page.html"

[extra]
lead = "Making sure our handbook stays awesome through good pull request practices."
toc = true
top = false
+++

## DRAFT
This page is in *DRAFT*, we need to agree on a methodology based on Gitlab's [Editing the handbook](https://handbook.gitlab.com/handbook/about/editing-handbook/) page, and edit the below accordingly - 

Contribute to Meetball HandbookMeetball Handbook repository on [Github](https://github.com/himeetball/handbook)

### Suggest an Improvement 

- [Report a Handbook Error](https://github.com/himeetball/handbook/issues/new) - Raise an Issue here!
- [New Handbook Page request](https://github.com/himeetball/handbook/issues/new) - Got an idea or need a new page? 

Or suggest your change by making the edit and submitting it for revision by the Page Maintainer as follows:

Note: We are setting up the Handbook Repo so it's currently access restricted. Will be open soon. In the meantime please send a message to Stuart to suggest/ask for pages.## Improve documentation👉 The documentation lives in [`./content/docs/`]

How we work on code:
- Follow the [GitHub flow](https://guides.github.com/introduction/flow/)
- Follow the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/).

Note: Github Flow may be overkill for a text handbook, if you can suggest a simplified approach, do so.
Also, the beow may be redundan if we just follow the above flows:

## Submitting a PR

### 1. Create Your Branch
```bash
git checkout -b add-awesome-feature
# or
git checkout -b fix-typo-in-faq
# or  
git checkout -b translate-to-spanish
```

Use descriptive branch names that explain what you're doing.

### 2. Make Your Changes
- Write in our casual, friendly tone
- Test locally with `zola serve` 
- Check that images load properly
- Make sure internal links work

### 3. Commit Your Changes
```bash
git add .
git commit -m "Add guide for setting up local development

Explains how to install Zola and run the handbook locally.
Includes troubleshooting for common issues."
```

Write commit messages that explain **why**, not just what.

### 4. Push and Open PR
```bash
git push origin add-awesome-feature
```

Then open a PR on {{ github(repo="himeetball/handbook") }}.

## PR Template

When opening a PR, include:

```markdown
## What's this about?
Brief explanation of what you changed and why.

## Type of change
- [ ] New content/documentation  
- [ ] Fix typos or errors
- [ ] Translation
- [ ] Design/layout changes
- [ ] Configuration changes

## Testing
- [ ] Ran `zola serve` locally
- [ ] Checked all links work  
- [ ] Verified images load
- [ ] Tested on mobile (browser dev tools)

## Screenshots (if relevant)
Before/after screenshots for visual changes.
```

## Reviewing PRs

When reviewing someone else's PR:

### ✅ What to Check

**Content Quality**
- [ ] Follows our casual, friendly tone
- [ ] Uses "you" instead of "the user"
- [ ] Explains things clearly
- [ ] Includes examples where helpful

**Technical Stuff**  
- [ ] All links work (internal and external)
- [ ] Images load and have alt text
- [ ] Code blocks have proper syntax highlighting
- [ ] Front matter is correct

**Multi-language PRs**
- [ ] Uses authentic cultural expressions (not Google Translate)
- [ ] Includes "(Meetball Handbook)" after translated titles
- [ ] Uses informal "you" form (tu/tu/tu)
- [ ] Sounds like how people actually talk

**Structure**
- [ ] Clear headings and sections
- [ ] Good use of lists and formatting
- [ ] Not too long (break up big walls of text)

### 💬 How to Give Feedback

**Be Specific**
```
✅ "This section could use an example showing how to..."
❌ "This is confusing"
```

**Be Encouraging**  
```
✅ "Great explanation! Maybe add a screenshot here to make it even clearer?"
❌ "This is wrong"
```

**Suggest Solutions**
```  
✅ "Could we change 'users should' to 'you can' to match our tone?"
❌ "Wrong tone"
```

## Review Process

1. **Author opens PR**
2. **Automated checks run** (build test, link checking)
3. **Team member reviews** (ideally within 24 hours)
4. **Address feedback** if any
5. **Merge when approved**
6. **Auto-deploy** to handbook.meetball.fun

## Common PR Issues

### Build Failures
Usually caused by:
- Syntax errors in front matter
- Broken internal links  
- Missing images
- Invalid markdown

Check the build logs in GitHub Actions.

### Merge Conflicts
If `main` branch changed while you were working:
```bash
git checkout main
git pull origin main
git checkout your-branch
git rebase main
# Fix any conflicts
git push --force-with-lease origin your-branch
```

### Large Changes
For big changes (new sections, major rewrites):
- Open a draft PR early to discuss approach
- Break into smaller PRs if possible
- Tag relevant team members for review

## Translation PR Tips

### For Translators
- Include native speaker review if possible
- Test how longer text looks on mobile
- Keep the same friendly, casual vibe as English
- Ask questions if cultural context isn't clear

### For Reviewers
- Focus on tone and cultural appropriateness  
- Check that technical terms are handled well
- Verify navigation and buttons are translated
- Don't worry about perfect grammar if tone is right

## Approval Guidelines

**Auto-merge OK for:**
- Typo fixes
- Small content additions
- Image updates
- Translation updates by native speakers

**Needs review for:**
- New sections or pages
- Configuration changes  
- Major content restructuring
- First-time translations

Remember: We're building in the open and helping each other make things better! 🚀
