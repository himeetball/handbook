+++
title = "Organizational Memory"
description = "How Meetball captures, organises, and grows its collective knowledge: from a raw conversation to a guiding principle"
date = 2026-06-10
updated = 2026-06-10
draft = false
weight = 7
template = "docs/page.html"

[extra]
lead = "From a captured conversation to a guiding principle: how Meetball turns daily work into collective intelligence"
toc = true
top = false
+++

When a group of people work on Meetball together, they need shared context. Anyone writing a social post, designing an app screen, or drafting community comms should be able to access the same brand, tone, product understanding, and terminology, without asking Stuart. What they produce gets captured into the system. Over time, that captured material compounds into Meetball's collective intelligence.

This page describes how that works.

---

## The core idea

Context can become Knowledge. Knowledge can become a Skill. A Skill can become part of the Foundation. Graduation is deliberate, not automatic. Someone has to recognise the pattern and make the call.

Authority flows the other direction: when things conflict, the higher layer wins. When new evidence challenges a higher layer, it triggers a review. It doesn't automatically override. That review process is how the Foundation and Skills evolve over time.

---

## The layers

| # | Layer | |
|---|-------|-|
| 0 | **Personal** | How each person works |
| 1 | **Foundation** | What Meetball believes |
| 2 | **Registers** | What Meetball currently calls things |
| 3 | **Skills** | How Meetball does things |
| 4 | **Knowledge** | What Meetball has learned |
| 5 | **Context** | What Meetball has captured |

When things conflict, the higher layer wins. A social post doesn't override brand guidelines. A meeting note doesn't override a decision. A decision doesn't override a skill. A skill doesn't override the Foundation.

---

## Foundation: What Meetball believes

The Foundation holds the documents that change rarely and represent the official position of Meetball. If everything else disappeared, these are the documents recreated first.

Mission, values, brand guidelines, governance, dynamic equity model, contribution criteria.

The Foundation is public. It is the entry point for anyone joining Meetball: as a team member, contributor, or community participant.

---

## Registers: What Meetball currently calls things

Registers are structured, authoritative reference data. They define the current state of specific domains. They are not skills: they don't tell you how to do something. They are not knowledge: they aren't insights. They are the source of truth for a bounded set of facts that the whole team and all AI agents read from.

Examples: notification register, terminology register, ICP register, journey definitions, brand assets register, content register.

Registers are owned (one DRI per register), versioned, and updated on a defined schedule. Skills and knowledge reference them. Foundation defines what categories of registers exist.

---

## Skills: How Meetball does things

Skills are reusable, executable instructions. They tell a person or AI agent how to do a specific type of work consistently: community outreach, writing a notification, running a user interview, onboarding a space host.

Each skill has a clear trigger (when to use it), a process, and a quality bar. Skills reference the Library for examples and templates, and reference Registers for current terminology and data.

---

## Knowledge: What Meetball has learned

Knowledge holds everything the team has learned: research, user interviews, community feedback, competitive analysis, and decisions.

Decisions are a structured subtype within Knowledge, not a separate layer. What distinguishes them is schema, not status. A decision record has fixed fields:

```
date
decision
context
options considered
why
owner
review trigger
```

Other knowledge (research notes, interview insights, learnings) is freeform. The distinction is in how things are written and retrieved, not where they live.

**Not every decision gets recorded.** The bar is: would a new team member in six months benefit from knowing why this was decided? Naming calls, strategic pivots, process changes, vendor choices qualify. Routine operational choices do not.

- **Who records it:** the person who made the call
- **When:** at the moment of decision, or within 24 hours
- **How:** Claude drafts the record from the conversation. Friction is near zero. The discipline is knowing which decisions qualify.

---

## Context: What Meetball has captured

Context is the raw material produced by working: emails, call transcripts, social posts, meeting notes, drafts, outputs. It is not curated. It is not authoritative. It is evidence: the ambient record of how Meetball operates day to day.

Context enters the system in two modes:

**Retroactive:** pulling in content that already exists. Past social posts, proposals sent, published articles. Handled by ingestion agents or manual import.

**Proactive:** entering content at the moment of creation. A call transcript right after a call, a social post as it's drafted, a decision immediately after it's made. Handled by lightweight integrations and habit.

Context is where the progression begins. Most of it stays as context. Some of it becomes knowledge. The curation is the work.

---

## The Library: canonical reusable material

The Library holds canonical reusable material that skills and people draw from: copy, templates, prompts, examples, and reference assets.

It is not knowledge (it doesn't capture what was learned) and not a skill (it doesn't explain how to do something). It is the reference shelf: the approved examples and starting points that ensure consistency across everything Meetball produces.

---

## How information graduates

The progression from Context to Knowledge to Skill to Foundation is the governing philosophy. The formal governance (who decides when something graduates, by what criteria, and through what process) will be defined separately once the system has been operating long enough to know what actually works. Defining it prematurely creates process for its own sake.

What is clear: graduation is deliberate, not automatic. Someone has to recognise the pattern, distil it, and make the call. The system makes that possible. The people make it happen.

---

## How everything is stored: gbrain

gbrain is the single infrastructure layer. Everything flows through it.

Every page in gbrain is a markdown file in a git repo, synced to a Postgres database. Two tiers control what gets version-controlled:

```yaml
storage:
  db_tracked:           # committed to git — version-controlled
    - foundation/
    - registers/
    - skills/
    - knowledge/
    - library/

  db_only:              # database only — not committed to git
    - captures/emails/
    - captures/calls/
    - captures/social/
```

`db_tracked` content has full git history. Skills, registers, decisions, and canonical copy are version-controlled because they're authoritative. `db_only` content (raw captures) lives in the database for retrieval without bloating git.

Each domain is a separate git repo (called a source in gbrain) synced into the same brain:

```
meetball-foundation     (public)
meetball-registers      (private)
meetball-skills         (private)
meetball-captures       (private, db_only)
team/stuart             (personal)
team/darina             (personal)
```

Each team member connects their AI client to the gbrain MCP server. OAuth scoping at the database layer controls what each person can read and write. Designed for 10 to 50 person companies, under $100/month on Postgres/Supabase.

---

## Tools

| Tool | Role |
|------|------|
| **gbrain** | The brain: storage, retrieval, knowledge graph, skills, synthesis, company brain |
| **Postgres / Supabase** | Database backend managed by gbrain |
| **Git repos** | Source files for db_tracked content, versioned and hosted on GitHub |
| **gbrain MCP server** | How every AI client connects to the brain |
| **Claude Code** | Stuart, developers: full skill and memory access |
| **Claude Desktop** | Darina, marketing: natural language access, no git required |
| **Capture pipelines** | Ingestion for raw context: calls, emails, social posts |

Non-technical access works like this: a marketing person never touches git. They open Claude Desktop, say "update the notification copy for X," and the MCP tool writes the file. Version control happens automatically underneath.

---

## What goes where

| Content | Source | Storage tier | Access |
|---------|--------|-------------|--------|
| Mission, values, brand, governance | meetball-foundation | db_tracked | Public |
| Contribution criteria | meetball-foundation | db_tracked | Public |
| Notification register, ICPs, terminology | meetball-registers | db_tracked | Core team |
| Skills, playbooks, AI skills | meetball-skills | db_tracked | Core team |
| Library (copy, templates, prompts, examples) | meetball-skills | db_tracked | Core team |
| Decisions, research, learnings | meetball-skills/knowledge/ | db_tracked | Core team |
| Stuart's emails, calls, social posts | team/stuart | db_only | Stuart only |
| Team call transcripts | meetball-captures | db_only | Core team |
| Team outputs (drafts, posts, copy) | meetball-captures | db_only | Core team |

---

## How a team uses this

**Stuart drafts new onboarding copy:**
Personal context and brand skill load automatically. Registers confirm the right terminology. gbrain surfaces prior onboarding decisions and relevant past emails. Copy drafted, saved to library/, version-controlled. Decision recorded in knowledge/ and available to the whole team immediately.

**Darina writes a community update email:**
Personal context and tone of voice skill load. ICP register confirms the audience. gbrain surfaces recent community feedback and past emails for consistency. Email sent, saved to captures, queryable context for the next community decision.

**A new team member joins:**
Reads the Foundation (public) and understands mission, values, and brand in one session. Gets access to meetball-skills and reads registers, skills, library, and knowledge including past decisions. Productive in hours, not weeks. No Stuart briefing required.

**Someone asks "why do we say Spaces not Events?":**
`gbrain think "why spaces not events"` returns a synthesised answer with citations to the decision record and any relevant context. Thirty seconds.

---

## As the team grows

gbrain's company brain scales to 50 people on the same Postgres backend. Each new person gets their own source, their own access scope, and their own AI client pointing at the same server. The shared sources remain the shared context layer. Personal sources remain private. The architecture doesn't change. It adds people.

---

## Contribution model

_To be designed separately._

The architecture above works without a contribution model. When contributors are added, their submissions enter at the Context layer and progress through the same hierarchy. The graduation model is already in place. Contribution criteria will live in meetball-foundation.

---

_This page describes the intended architecture. Implementation is in progress. Suggestions welcome._
