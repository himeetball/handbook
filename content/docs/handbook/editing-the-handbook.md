+++
updated = 2025-10-09T05:41:08+01:00
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

## Local Setup

To edit the handbook locally you need two repos, cloned as siblings inside the same parent folder:

```
Meetball Code/
├── handbook/          ← this repo
└── meetball-skills/   ← himeetball/meetball-skills
```

The sibling structure matters. The handbook's Claude Code config points to `../meetball-skills` to load the Meetball skill set automatically. If the repos are in different locations, the skills won't load.

```bash
git clone git@github.com:himeetball/handbook.git
git clone git@github.com:himeetball/meetball-skills.git
```

### Running locally

```bash
cd handbook
zola serve   # preview at http://127.0.0.1:1111
```

Always run `zola check` before committing to catch broken links and template errors.

### Working with Claude Code

Open the `handbook/` folder in Claude Code. On first open you'll be prompted to trust the workspace and install the meetball-skills plugin — accept both. After that, Claude has access to all Meetball skills (brand voice, company context, tone of voice, and the handbook authoring skill) automatically in every session.

Skills update automatically from the meetball-skills repo whenever new ones are pushed, so you don't need to do anything to stay current.

---

## Using Claude to Edit the Handbook

You don't need to be technical to contribute using Claude. If you can describe what you want, Claude can do the work — writing, editing, translating, creating new pages, fixing links — and you review it before anything goes live.

### What Claude can do for you

- **Write or rewrite a page** — describe what it should cover and Claude drafts it in the right tone and format
- **Add a new page** — tell Claude the topic, where it should live, and any key points; it creates the file with the correct frontmatter and structure
- **Edit existing content** — ask Claude to update, shorten, improve, or restructure any page
- **Translate a page** — Claude knows Meetball's tone rules for Portuguese, French, and Italian and will write authentic translations, not just literal ones
- **Check for errors** — Claude runs `zola check` after every change to catch broken links and template issues before you commit
- **Commit and push** — Claude handles git so you don't have to

### How to work with Claude

Just describe what you want in plain language. A few examples:

> "Add a new page under the Engineering section about how we do code reviews."

> "Update the values page — we now have a fifth value, add it in."

> "Translate the onboarding page into Portuguese."

> "The Plane page feels too long, can you tighten it up?"

Claude will show you what it's doing and ask before committing anything. Review the changes, and if they look good, tell Claude to go ahead.

### What the skills do

When you open the handbook in Claude Code, a set of Meetball skills loads automatically in the background. These give Claude context it needs to do good work — Meetball's brand voice, tone rules, product concepts, multi-language conventions, and how the handbook is structured. You don't need to explain any of this each session; the skills handle it.

See [AI-Native at Meetball](/docs/how-we-work/ai-native/) for more on how skills work and who maintains them.

### A note on AI and quality

Claude is a collaborator, not a publisher. Everything it writes should be reviewed by a human before it goes live. Use your judgement — if something doesn't sound right, ask Claude to adjust it or edit it yourself. The goal is good content, not fast content.

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
