+++
title = "How to Suggest Features, Report Bugs and Tracking"
description = "How to Suggest Features, Report Bugs and Tracking"
date = 2025-07-23T18:10:00+00:00
updated = 2025-10-09T05:41:08+01:00
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

**Community members** use the Meetball app. We have a [Bugs and Feature Requests on the Meetball Community Space](https://app.meetball.fun/communities/meetball-community) — post there and tag your post with the relevant topic (bug, feature request, etc.). This is the primary channel for community feedback.

**Team members** use Slack for internal discussion of bugs and features.

We treat both as _input sources_, not a backlog.

Here’s what to include when reporting:

>##### **Report a Bug**
>- Found something broken or confusing?
>- Post in the **Bugs and Feature Requests** community page in the Meetball app (or in Slack if you’re on the team).
>- Include:
    - What you were trying to do
    - What happened instead
    - Steps to reproduce (if possible)
    - Screenshots help a lot
>
>##### **Suggest a Feature**
>- Have an idea that would make Meetball more useful?
>- Post in the **Bugs and Feature Requests** community page and tag it as a feature request.
>- Please explain:
    - What problem it solves
    - Why it matters
    - Any inspiration or examples
>
>##### **What Happens Next**
>1. **You submit feedback** (bug, idea, or feature request).
>2. **We triage weekly** → move into our backlog if actionable.
>3. **Prioritized items** go into [Plane](/docs/engineering/plane/) for dev work.
>4. **Shipped features** get posted back in the community so you know you made an impact.

#### 2. Triage

Triage is the process of regularly reviewing ideas, bugs and feature suggestions and putting them on backlog for ranking and prioritisation.

We nominate a **Triage Captain** (rotating role) each week to move requests from chat → backlog.

If the idea has merit, move it to one of those Kanban Boards depending on the type:

-  [Idea Board](https://plane.murumb.dev/meetball/projects/710e7204-c511-493a-84d6-48ab31af5fa1/issues/) on **Plane**: For rough / high level ideas, for brainstorming and exploration, something we are not even sure we want to explore: Needs elaboration and not dev-ready. Once created, discussion happens there so cross reference them. Ideas are moved to "In Progress" if they go to any board where work may start (Experiments, Dev or Github as issues).
- These Ideas are also captured in a Miro/? Product discovery map:
_(duplication? perhaps put on Miro only ideas we agreed to explore)_

- [Development](https://plane.murumb.dev/meetball/projects/519ca7bc-0c01-4139-9f1b-57086aee7842/issues/) on **Plane**: This is a Backlog of Dev work that we know we have to do but technical specifications are not good enough for it to be created as an Issue on Github, not dev-ready. Once created, discussion happens there.

- If it’s dev-ready, **add it directly to the Development backlog on [Plane](/docs/engineering/plane/)** with enough context for a dev to pick it up.

This way:
- Community feedback and Slack stay informal,
- Plane is where features are elaborated and tracked through to completion.

Notes:
- Don’t treat Slack as a backlog — it will vanish in the scroll.
- Don’t expect devs to trawl chat for tasks, they should live in Plane.

---
##### **📊 Vote & Follow Progress**

- We're building a **Public Roadmap** so you can see what's planned, in progress, or shipped. _(Coming soon!)_
- Upvote features you'd love to see → this helps us prioritize. _(Coming soon!)_
 ---

#### 3. Backlog Grooming

Add section on how often, who coordinates and who should be on the backlog grooming calls, and how this is passed onto dev team to re-prioritise things.

---

👉 Want to go further than feedback? Join as a [Contributor](https://github.com/himeetball/handbook/blob/main/CONTRIBUTING.md) and help us build the future of real human connection.
