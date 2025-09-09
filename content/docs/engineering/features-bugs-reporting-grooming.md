+++
title = "How to Suggest Features, Report Bugs and Tracking"
description = "How to Suggest Features, Report Bugs and Tracking"
date = 2025-07-23T18:10:00+00:00
updated = 2025-07-23T18:10:00+00:00
draft = false
weight = 4
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "How to Suggest Features, Report Bugs and How they move to Dev"
maintainer = "Gale"
toc = true
top = false
+++

### How we collect and track Ideas, features requests and bugs

Meetball is an open startup. That means **anyone can shape what we’re building**.
Whether you’re an early user, event organizer, or part of the team, you can help us shape what Meetball becomes.
#### 1.  How we Collect Ideas / Feedback:

- We have a Bug/Feature request chat in [Discord](https://discord.com/channels/1379759898971344937/1409777001937506344) for the Meetball Team.
- External Users use the "suggest feature" button on our App (and elsewhere)

We treat those chat/suggestions as _input source_, not a backlog.

_Note: At the moment the "suggest a feature" button is not active so those are LOST: as a minimum they need to go to a mailbox, at best they automatically go to a feature collection system - Direct to Git is overkill for non-tech users, use a system like [Canny](https://canny.io) (used by PostHog, Notion etc). Need ASAP to create a better issue reporting/tracker. Part of our Build in Public journey. I would be happy to use our web app Chat functionality and be able to chat with users suggesting a feature in the early days._

This is how we explain this in the Discord bugs and features channel:

>We’re building Meetball together. Your ideas, bug reports, and feature requests help us make it better every day. Here’s how you can contribute:
>
>##### **🐞 Report a Bug**
>- Found something broken or confusing?
>- Post it in **#bugs** on [Discord](https://discord.com/channels/1379759898971344937/1409777001937506344) _or_ fill out our [Bug Report Form](https://forms.gle/placeholder).
>- Include:
    - What you were trying to do
    - What happened instead
    - Steps to reproduce (if possible)
    - Screenshots are golden!
>
>##### **💡 Suggest a Feature**
>- Have an idea that would make Meetball more useful?
>- Share it in **#feature-requests** on [Discord](https://discord.com/channels/1379759898971344937/1409777001937506344) _or_ use our [Feature Suggestion Form](https://forms.gle/placeholder).
>- Please explain:
    - What problem it solves
    - Why it matters
    - Any inspiration/examples
>
>##### **🔄 What Happens Next**
>1. **You submit feedback** (bug, idea, or feature request).
>2. **We triage weekly** → move into our backlog if actionable.
>3. **Prioritized items** go into our Kanban board → GitHub Issues for dev work.
>4. **Shipped features** get posted back in Discord so you know you made an impact.

#### 2. Triage

Triage is the process of regularly reviewing ideas, bugs and feature suggestions and putting them on backlog for ranking and prioritisation.

We nominate a **Triage Captain** (rotating role) each week to move requests from chat → backlog.

If the idea has merit, move it to one of those Kanban Boards depending on the type:

-  [Idea Board](https://plane.murumb.dev/meetball/projects/710e7204-c511-493a-84d6-48ab31af5fa1/issues/) on **Plane**: For rough / high level ideas, for brainstorming and exploration, something we are not even sure we want to explore: Needs elaboration and not dev-ready. Once created, discussion happens there so cross reference them. Ideas are moved to "In Progress" if they go to any board where work may start (Experiments, Dev or Github as issues).
- These Ideas are also captured in a Miro/? Product discovery map:
_(duplication? perhaps put on Miro only ideas we agreed to explore)_

- [Development](https://plane.murumb.dev/meetball/projects/519ca7bc-0c01-4139-9f1b-57086aee7842/issues/) on **Plane**: This is a Backlog of Dev work that we know we have to do but technical specifications are not good enough for it to be created as an Issue on Github, not dev-ready. Once created, discussion happens there.

- If it’s dev-ready, **add it directly to the Backlog on Github** as Issues, tracked in one of the following projects on Github:
	- [Meetball Web App](https://github.com/orgs/himeetball/projects/4)
	- [Handbook](https://github.com/orgs/himeetball/projects/7)
	- Website (to be created)
	- etc.. (as we start new projects)

This way:
- Chat stays informal,
- Plane is where feature is elaborated before specs are fully defined,
- Github is where the feature is created with full technical specs.

Notes:
- Don’t treat Discord as backlog, it will vanish in the scroll.
- Don’t expect devs to trawl chat for tasks, they should live in GitHub.

---
##### **📊 Vote & Follow Progress**

- We keep a **Public Roadmap** so you can see what’s planned, in progress, or shipped.
- Upvote features you’d love to see → this helps us prioritize. _Need to implement_
- Roadmap link: [Public Roadmap](https://roadmap.meetball.fun)
 ---

#### 3. Backlog Grooming

Add section on how often, who coordinates and who should be on the backlog grooming calls, and how this is passed onto dev team to re-prioritise things.

---

👉 Want to go further than feedback? Join as a [Contributor](https://github.com/himeetball/handbook/blob/main/CONTRIBUTING.md) and help us build the future of real human connection.
