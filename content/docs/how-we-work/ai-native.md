+++
title = "AI-Native at Meetball"
description = "How and why Meetball embraces AI across every part of its work — and the skills system that makes it practical"
date = 2026-05-21
updated = 2026-05-21
draft = false
weight = 6
template = "docs/page.html"

[extra]
lead = "Human-first, AI-enabled — if it improves our ability to ship good work and realise our mission, we embrace it"
toc = true
top = false
+++

Meetball is building toward being an AI-native company. Not in the sense of replacing people — this is a human-first mission and always will be. But if something can be done with AI that improves our ability to ship good work and move the mission forward, we want to know about it and embrace it.

The way we make this practical is through **skills** — documented, executable AI instructions that cover every repeatable part of how we work. How we write copy, how we design a notification, how we run a sprint, how we review a PR, how we write a handbook page. Each of those gets documented as a skill, which turns institutional knowledge into something Claude can read and apply.

This is bigger than tone of voice. Skills cover the full breadth of how Meetball operates: strategy, marketing, product, design, engineering. Each one is a piece of a documented, reusable process. Together, they're how a small team ships like a bigger one — without losing coherence, without constantly reinventing decisions already made.

One important outcome of this is contributor alignment. Meetball is built by people from across the world who show up and offer help. With a distributed community spanning many disciplines, it's easy for good work to pull in different directions. Skills change that. Anyone can jump in — write a page, draft a notification, propose a feature — and Claude will help them do it in a way that fits Meetball from the start. No long onboarding. No waiting for someone senior to sign off on every decision.

And if a skill is wrong or out of date, anyone can improve it. The skills get better as more people use them and push back on what doesn't work. That's the flywheel: better processes, documented as skills, used by contributors, refined over time.

---

## What a Skill Is

A skill is a file of instructions that Claude reads when it's relevant to the task. Each skill covers one specific domain of work — not just tone of voice, but actual processes: how to run a notifications brainstorm, how to audit a design against our UI guidelines, how to write and deploy an email template, how to structure a spike document.

When you open a Meetball project in Claude Code, the right skills load automatically based on what you're working on. Claude arrives with context — who we are, what we're building, how we do things — without you having to explain it each time.

---

## What Skills Cover

Skills span every department. A few examples of what's in the library:

**Shared (cross-team)**
- Company context — what Meetball is, the core mechanic, user types, business model
- Tone of voice — how we write, what we sound like, what we avoid
- ICP profiles — members, hosts, brands, investors — who we're building for and why
- Handbook authoring — how to edit and extend this handbook
- Skill authoring — how to create new skills

**Marketing**
- Copywriting, email sequences, email copy standards, onboarding CRO, churn prevention, and psychological models applied to marketing decisions

**Product**
- The full notifications system end-to-end: strategy, copy, register, brainstorming, benchmarking

**Engineering**
- Email template design and deployment, push and in-app copy PRs

**Design**
- Design system, UX audit process, web interface guidelines

The full list lives in `VERSIONS.md` in the skills repo and grows as we document more processes.

---

## How Skills Connect

Skills aren't isolated — they build on each other. The notifications work is a good example of how a full end-to-end process gets documented:

```
Strategy → Brainstorm → Register → Copy → Email design → Deploy
                                        → Push/in-app PR → Backend
                                   ↕
                              Sync audit
```

Each step is a skill. You can run them in sequence for a full workflow, or drop into any one independently. Agents (automated multi-step workflows) coordinate the full pipeline when you need to go from idea to production in one go.

---

## Maintainers

Every skill has a [DRI](/docs/how-we-work/how-we-work/#directly-responsible-individual-dri) — the person responsible for keeping it accurate. When Meetball's strategy shifts, a new product feature lands, or our tone evolves, the DRI updates the relevant skill so Claude's knowledge stays current.

If a skill is giving Claude wrong or outdated information, flag it to the DRI or open a PR directly.

---

## The Skills Repo

All Meetball skills live in a private GitHub repository: **`himeetball/meetball-skills`**

It's private because skills contain internal knowledge that isn't ready for public release — brand strategy, product positioning, process detail. To request access, ask Stuart or your team lead.

**A note on access and security:** The handbook itself is public, and its configuration points to the meetball-skills plugin. But since the skills repo is private, Claude Code can only install the plugin for people who already have GitHub access to that repo. External contributors get Claude without Meetball-specific skills — which is fine. GitHub repo access is the access control.

---

## Adding a Skill

If you've figured out a repeatable process and want to document it as a skill:

1. Get access to `himeetball/meetball-skills`
2. Read the `shared-skill-authoring` skill — it walks through everything
3. Create `skills/<prefix-name>/SKILL.md`
4. Write the frontmatter description and skill body
5. Update `VERSIONS.md`, run `./validate-skills.sh`, open a PR

The best skills are written by the people who do the work. If you run marketing, you know what Claude needs to know about how we market. Write that down.

---

## Why This Matters

Every team documents how it works. Most of that documentation sits in Notion or Google Docs — readable by humans, invisible to AI.

Skills are documentation that works both ways. A human reads them to understand how we do things. Claude reads them to actually do those things. The same process knowledge, made executable.

As the skills library grows, every new contributor — and every AI session — starts from the same foundation. That's how a distributed team across 20+ countries builds something coherent together.
