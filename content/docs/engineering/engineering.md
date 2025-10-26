+++
title = "Software Engineering"
description = "How we do software engineering at Meetball"
date = 2025-07-23T18:10:00+00:00
updated = 2025-07-23T18:10:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "How we do software engineering at Meetball"
toc = true
top = false
+++

**Meetball [Principles](https://recipe.meetball.fun/docs/company/principles/):** 
 - Build What Matters, 
 - Learn and Adapt,  
 - Ask for Help, 
 - Open Collaboration


This is a starting document, a first draft to help us align. It’s not perfect, and it’s final. Everyone here is invited to improve it so that together we shape how Meetball builds.

I’m not a technical founder, so I'm mostly sharing principles and where I add specifics, it may be totalyl flawed. This page needs a DRI who shapes how we work to realsie our mission:
## Principles for how we work on DEV:

- **Commitment Clarity:** Distinguish between volunteer contributors (can help, may not show up), and committed Core team members (**Directly Responsible Individuals** for specific projects, clear availability).

- **Speed > Perfection**: The goal is: _ship fast to test features, fix fast, keep learnign and moving forward_.

- **User Feedback Integration:** Regular testing to validate assumptions and discover user needs. Expect pivots based on user feedback to change long-term roadmap.

- **Parallel Tracks:** **Stable development** process with planning and weekly sprints for what we know we need, and **Vibe Coding** for rapid user feedback/experiments ideas that need validation.

- **Stable Dev follows User Story Structure:** Product Requirements → Formal user stories → sprint planning → release cycles

- Vibe Code Dev follows Vibe checking of opportunity!

- **Written Everything:** Requirements, Decisions, and processes must be explicitly documented.

- **Enforced Process:** Having processes means nothing if they're not actually followed.

- **Market controls timeline, but Engineering tells us what's realistic:** Development team sets ambitious but realistic deadlines.

- **Implementation:** Define roles/availability, this page becomes playbook for how we work.

## 1. Your Mastery

To align dev expectations, we use the **Basecamp levels of Mastery** for Programmers as a reference point. The first thing to do when you join is tell the team where you believe you fit on this scale:

[Basecamp Handbook](https://github.com/basecamp/handbook/blob/master/titles-for-programmers.md)
| Junior | Programmer | Senior | Lead | Principal |
_(Internal note: we may switch to_ [_Career Ladders_](https://github.com/sdras/career-ladders) _in future.)_

What you say is just a **starting point**. What matters is how your teammates perceive your work: 

**What can the team count on you for, right now?** based on your experience and time commitment to this project.

## 2. Your Availability and Skill = Your Roles
To define Roles and realistic Goals for a Sprint and Cycle, we need to know your Time commitment and Availability.

Team Availability for planning sprints is [here: ](https://docs.google.com/spreadsheets/d/163el1Fa-ybXR1AnQFaEAgLLh7J1_h51q-eZT0YReVdY/edit?usp=sharing) (This spreadsheet needs a DRI).

Roles are dynamic and based on merit - we prioritize the right person for each role over hierarchy or tenure. Ego aside, just one question: what gets us closer to realising our mission. For each chapter and sprint we define roles.   

---

## 3. How We Work

- **Business Requirements First:** Need clear business requirements document before any development begins
- Defined User Stories
- **Sprint System:** 1 week sprints (Tuesday to Tuesday) with proper planning and retrospectives (add details) 
- **Technical Contracts:** Frontend/backend developers agree on API contracts before starting work
- **Availability Transparency:** Developers commit to specific hours per sprint based on real availability.
- **Tool Consolidation:** All issues prioritised on Github Project, used for Sprint planning. 
- **Backlog Grooming:** Refine and prioritize tasks before sprint planning begins

#### Dev Team calls (Each with specific agenda)
	Planning calls
	Refinement calls 
	Feature calls 
	Engineering calls: Dedicated technical calls for developers to align on implementation approaches

**Demo Cycles:** Regular demos for company and marketing, recorded for reuse

#### Rituals and Cadence Calendar:

(For each of the above add Owner and Scheduled Date) 
Then make a simple board visual.

-----

## 4. **How We Make Changes to Code**

Startup DevOps = the minimum we need to ship confidently without wasting time.

We follow [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow):

1. **Create Branch** → one branch per unrelated set of changes    
2. **Make Changes**
3. **Create Pull Request**
    - Each commit = one isolated, complete change
    - Link issue for reference
    
4. **Address Review Comments**
5. **Merge Pull Request** → once approved, merge

---

## 5. **Code Review Policy**

 **Code Review Standards:** Proper review process for all deployments, no single-person code pushes.
### **Review Principles**

- Reviews focus on **clarity, correctness, maintainability, and mission alignment**, not nitpicking style.
- Code should be **self-explanatory**: clear commits, tests, linked issues.
- Reviewers share responsibility for outcomes: **if you approve it, you own it too**.
### **Startup Mode (MVP Phase)**

- **Juniors** → always need a review before merging.
- **Everyone else** → one teammate review is enough (doesn’t need to be more senior, unless it’s critical code).
- **Critical code** (auth, payments, migrations, infra) → review by a Senior and ideally 2 reviewers.
- **Hotfixes** → can merge without review, but must be retro-reviewed within 24h.
- **Max wait time** → if a review takes more than a day, ship and notify.

**If you merge it, you own it.**

**These Repos enforce stricter rules**: 
- Define branch protection rules for critical branches/repos: 

---
### **Scalable Mode (Post-MVP / Growth Phase)**

Once speed is less critical than stability, we’ll move closer to state-of-the-art:

- **Minimum 1 review** for all PRs.    
- **Critical features** require **2 reviews** from Senior (L3+) or above.
- Reviews within 24h of request.
- Urgent security/outage fixes can still bypass, but must be retro-reviewed.
 ----
 
## 6. Coding with AI / Vibe-Coding
AI gives a good developer superpowers and this is just gettign started. So using AI is encouraged, but please make sure the code meets the quality standard and is maintainable/scalable. 

Primciple: Use AI but be responsible for the quality of code you submit and mark it as:

- **Prototype** - Demo is an alternative to traditional wireframing. You build a working prototype that serves as reference for buildign the real fature. Done to show and test feature, but code may be junk and not usable for our production.

- **Good Code** - You looked at the code and it meets our standard, Submit PR.

- **Refactoring** - Comparable to Junior dev standard, the feature works, the may be ok to be refactored faster than building from scratch. The Reviewer (FE, BE etc) makes the call on wether to refactor or build from scratch.  The principle is simple: Don't push code that will waste more time to refactor than it would to build from scratch.

Vibe coding captures user vibes, their issues, needs, and wants, and turns them into interactive prototypes. These prototypes validate with users, showing them we’ve heard their signals. The mix of quantitative analytics and qualitative feedback forms the backbone of our product specs. From there, the backlog is triaged on effort vs. value and prioritized for sprint planning.
### Development Practices and Standards

We Maintain a clear "Development practices/guildelines document" (Add URL)  for humans and embed it in the relevant AI tool prompting document (such as [Claude.md](https://github.com/himeetball/webapp/blob/dev/CLAUDE.md) so code is consistent. 

---

Misc thoughts:

**Bias Toward Simplicity**    
    - Use managed services Vs rolling our own infra, unless we have someone who is experienced with it and super low friction (Plane is an example).
    - Automate only what repeatedly slows us down. Don’t over-optimize.

3. **CI/CD (Continuous Deployment)**
    - At minimum: automatic testing + deploys from main branch.
    - GitHub Actions/GitLab CI/Bitbucket Pipelines are usually enough ? 

Monitoring and Logging
- Metrics that matter, make sure we know if something is braking before it does!

**Secrets & Config**
Critical even at this phase. We use 1Password, Stuart and Sara have full access and keeps track of who has access rights (user/ admin) to each tool on a spreadsheet. Admins of specific tools are given passwords rights as needed. Do we need other tools? GitHub Secrets?

Backups
Automatic backups for database, Test that we can restore

**Security & Access**    
    - Least privilege: give people the least access they need to work. Noone should be doing day to day work off admin accounts that risk deleting stuff? 
    - 2FA everywhere, access logging

-----

