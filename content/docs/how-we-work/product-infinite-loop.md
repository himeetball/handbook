+++
title = "Product Discovery & Delivery"
description = "How we take Meetball from Ideas to Done"
date = 2025-07-23T18:10:00+00:00
updated = 2025-07-23T18:10:00+00:00
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "The Invinite Loop"
toc = true
top = false
maintainer = "Gale"
dri = "Gale"
+++

**Meetball [Principles](https://recipe.meetball.fun/docs/company/principles/):** 
 - Build What Matters, 
 - Learn and Adapt,  


# The Infinite Loop (L∞P): Product Discovery & Delivery

## Why L∞P? 🌟
Traditional methods like Waterfall and Scrum (when misapplied as mini-waterfalls) create frustration, wasted effort, and rework. Teams struggle with lack of direction and decision making, too many meetings, siloed groups, arbitrary deadlines, and features that don’t deliver value.

**The Infinite Loop (L∞P)** offers a clear alternative:

- **Why:** Reduce waste, build trust, and focus on outcomes, not outputs.  
- **What:** Discovery decides *what* to build (validated features). Delivery decides *how* to build it right (secure, scalable code).  
- **How:** A continuous cycle of learning and building, supported by dual backlogs and cross-functional collaboration.  

---

## The Infinite Loop Framework ♾️
L∞P is built around two interconnected loops:

- **Discovery:** Learn what matters. Identify jobs-to-be-done, map opportunities, test with prototypes.  
  - *Output → Discovery backlog*  
- **Delivery:** Build it right. Implement validated features with quality, CI/CD, and observability.  
  - *Output → Production-ready product*  
  - *Feedback → Discovery*  

👉 Discovery = **what to build**. Delivery = **how to build it right**.  

![Infinite Loop](/images/infinite-loop.png)

---

## Product-Led Growth (PLG) 🚀
L∞P aligns tightly with Product-Led Growth — the product itself drives adoption, retention, and referrals.

- **Why:** Customers expect value quickly.  
- **What:** Discovery ensures features meet real needs; Delivery ensures they work beautifully in production.  
- **How:** Together, Discovery and Delivery fuel the PLG flywheel:  
  - **Activate → Adopt → Adore → Advocate**

---

## Discovery Workflow 🔍
**Purpose:** Decide what to build and reduce uncertainty before investing in code.

### 1. [Jobs-to-be-Done (JTBD)](https://www.productplan.com/glossary/jobs-to-be-done-framework/)
- **Why:** Customers don’t buy products; they “hire” them to do a job.  
- **What:** Capture outcomes as Job Stories: *When [situation], I want to [job], so I can [outcome].*  
- **How:** Conduct user interviews, map jobs, and align the team around unmet needs.  

### 2. [Opportunity Solution Tree (OST)](https://www.productplan.com/glossary/opportunity-solution-tree/)
- **Why:** To avoid jumping straight to features and keep focus on outcomes.  
- **What:** OST connects desired outcomes → opportunities → potential features → experiments.  
- **How:** Define outcomes (e.g., increase retention 15%), populate opportunities from JTBD, brainstorm features, and design lightweight experiments.  

### 3. Event Storming
- **Why:** To uncover process complexity and hotspots across functions.  
- **What:** Collaborative workshops using sticky notes to map domain events, actors, rules, and systems (also supports user stories and acceptance criteria).  
- **How:** Chronologically map events, mark “hotspots,” and identify opportunities tied to OST branches.  

### 4. Prototyping with Vibe Coding
- **Why:** To validate assumptions quickly and cheaply before coding.  
- **What:** AI-assisted, functional prototypes used for user testing. ⚠️ *Not production-ready.*  
- **How:** Generate prototypes with prompts, test with users, and refine based on feedback. 

### 5. Discovery Backlog
- **Why:** To capture and prioritize validated insights and features.  
- **What:** Living repository of job stories, OST branches, event storming outputs, prototype feedback, and open questions.  
- **How:** Only “ready” items (validated, outcome-aligned) move into the Delivery backlog.  

---

## Delivery Workflow 🛠️
**Purpose:** Decide how to build it right — securely, scalably, and maintainably.

### 1. Handoff → Delivery Backlog
- **Why:** To ensure Delivery builds only validated, outcome-aligned features.  
- **What:** Discovery items become user stories with acceptance criteria and supporting context.  
- **How:** Product + BizOps facilitate handoff sessions with Dev, UX, and DevOps.  

### 2. Agile Engineering & Iteration
- Build small, shippable slices of value.  
- Use continuous flow (Kanban-style) instead of rigid sprints.  

### 3. CI/CD Automation
- Every commit tested and deployable.  
- Automated builds, tests, and deployments.  

### 4. Quality Assurance & Testing
- Automated unit, integration, and end-to-end tests.  
- Exploratory testing and feature flags for safe releases.  

### 5. Monitoring & Observability
- Production metrics, logs, and user behavior insights.  
- Use dashboards and alerts for product health.  

⚠️ **Key Guideline:** Do not turn vibe-coded prototypes into production. They lack scalability, security, and maintainability.  

---

## Product Team Disciplines 👥
The Infinite Loop requires a cross-functional product team where each discipline contributes unique value.

### Product
- Focus on what to build and why.  
- Shapes outcomes, manages the Discovery backlog, and ensures the team solves the right problems.  
- Connects customer jobs, business outcomes, and product strategy.  
- Facilitates tough trade-offs: what not to build and what to prioritize.  
- Holds decision authority on product direction (outcome-driven).  
- Strategic role at the intersection of customers, business, and technology.  

### Development (Dev)
Two complementary developer roles in the Infinite Loop:  

#### Product Engineer (Discovery & Prototyping)
- Focuses on Discovery and early validation.  
- Partners with Product and UX to rapidly create vibe-coded prototypes.  
- Ensures prototypes reflect intended flows and desirability (not production code).  
- Bridges technical feasibility with user desirability in early stages.  

#### Software Engineer (Delivery & Production)
- Focuses on Delivery and scalable implementation.  
- Builds clean, secure, maintainable production features.  
- Ensures performance, reliability, and technical excellence.  
- Works closely with DevOps to embed CI/CD and observability.  

### User Experience (UX)
- Leads user research, design, and usability testing.  
- Co-creates prototypes, ensures desirability and usability are validated early.  

### Promotion & Marketing
- Turns product insights into growth loops.  
- Crafts messaging and campaigns grounded in validated user needs and outcomes.  

### Sales (Inbound) & Customer Success
- Guides prospects through the PLG flywheel.  
- Supports customers post-activation to ensure they achieve outcomes.  
- Shares feedback and adoption insights with Product, Dev, UX, and Marketing.  
- Identifies friction points causing churn and works with the team to address them.  
- Fuels both activation and retention in the PLG flywheel.  

### DevOps (Tech Ops)
- Ensures system stability, CI/CD pipelines, and observability.  
- Oversees operational tools and practices (e.g., CI/CD tracking, analytics).  
- Reduces firefighting by embedding reliability and performance into Delivery.  

### BizOps
- Facilitates ceremonies, tracks progress, keeps delivery backlog healthy, and clears blockers.  
- Maintains lightweight planning, budgeting, and forecasting.  
- Bridges Product, Engineering, and Business, ensuring information flows and priorities stay aligned.  
- Provides strategic support and assists with special projects.  

---

## Discipline Leads 🧭
Even though the team is currently volunteer-driven, each discipline (Product, Dev, UX, Promotion & Marketing, Sales & Customer Success, DevOps, and BizOps) can benefit from appointing a Lead:

- Acts as a coordinator and facilitator for volunteers in their discipline.  
- Ensures quality and consistency of contributions within their area.  
- Represents their discipline in cross-functional discussions, decision making, and planning.  
- Supports mentoring and onboarding of new volunteers.  
- Works collaboratively, not hierarchically.  

This structure provides clarity, accountability, and sustainability without creating heavy hierarchy.  

---

## Closing Thought 💭
L∞P helps startups avoid waste and focus on building products people actually love. Discovery tells us what to build (which includes surfacing the Wow features). Delivery ensures we build it right so the product can scale and grow sustainably.
