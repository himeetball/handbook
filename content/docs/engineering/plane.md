+++
title = "Plane — Project Management"
description = "How we use Plane for task management, sprint planning, and project tracking at Meetball"
date = 2026-05-14
updated = 2026-05-14
draft = false
weight = 4
template = "docs/page.html"

[extra]
lead = "How we run projects and track work in Plane"
toc = true
top = false
+++

[Plane](https://plane.murumb.dev/meetball/) is our project management tool for task tracking, sprint planning, and keeping work visible across the team.

It's self-hosted on Eric's server for now — we'll move it to our own VPS when the time is right.

---

## Why Plane

Plane is open-source, self-hostable, and built for teams that don't want to hand their data or their money to tools that don't share their values. It does everything we need — issues, cycles (sprints), modules (projects), and views — without the bloat.

---

## How We Use It

### Issues

An issue is any piece of work — a feature, a bug, a task, a question that needs answering. Every issue should have:

- A clear title (what, not how)
- A description with enough context for anyone to pick it up cold
- A priority, assignee, and estimated effort where relevant
- Labels to make filtering and reporting useful

### Cycles

Cycles are our sprints. We use them to time-box work and make commitments as a team. A cycle has a start and end date, a goal, and a set of issues pulled from the backlog.

Don't over-pack a cycle. A short list you actually finish beats a long list you mostly defer.

### Modules

Modules group issues by feature or initiative rather than time. If a Cycle is "what are we doing this week", a Module is "everything related to the notification system". Use them to track the full scope of a feature across multiple cycles.

### Views

Views let you filter and slice the issue list any way you need — by assignee, label, priority, or status. Set up personal views for your own focus, and team views for shared dashboards.

---

## Our Workflow

1. New work goes into the **Backlog** first — unscheduled, unassigned
2. At the start of a cycle, the team pulls issues into the **Current Cycle** and assigns them
3. Work moves through: **Backlog → In Progress → In Review → Done**
4. At the end of a cycle, anything unfinished is either pushed to the next cycle or returned to the backlog with a note on why

---

## Access

URL: [plane.murumb.dev/meetball](https://plane.murumb.dev/meetball/)

Ask Stuart or your team lead to get added. DRI: Product Team.

---

## Tips

- Keep issue titles short and action-oriented: "Add email confirmation to signup" not "Email"
- Close issues when they're done, not when they're merged — done means working in production
- If an issue is blocked, say so in the description and tag whoever is blocking it
- Don't let the backlog become a graveyard — if an issue has been sitting untouched for 3 months, either prioritise it or delete it
