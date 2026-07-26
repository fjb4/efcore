# Send-ahead engagement email

The greeting addresses Frank by name while the body stays in character as the plan to the ADM —
that reads correctly whether or not he answers in role. Switch to a role name only if the loop
turns out to be played straight.

Written to sound like an email to a colleague, not a one-pager: no bolded section headers, one
rhetorical flourish (the 3x line), plain words for the metrics. Read it out loud before sending;
anything you stumble over is a phrase that got written rather than said.

**To:** Frank Lamprea (hiring manager) — frank.lamprea@anysphere.co
**Cc:** Ally Anderson (recruiter) — ally.anderson@anysphere.co, at her request
**Subject:** John Bush - Challenge - Solution Plan

---

Hey Frank,

Thanks for the context — happy to run point on this one.

Here's what I'd do. Start with the 12-person team, since they're already using Cursor
and they own the ramp problem. Spend 30 days building the workflow with them and
piloting it on real work. That leaves room inside the 90 days to get something in
front of Priya before the renewal conversation starts without us.

What I want to move is how long it takes a new engineer to ship something that
matters. Six weeks today. I think we can get it toward two, but only if rework doesn't
go up, and only if it holds all the way through review, CI, and deploy. I'd rather
test the 3x than promise it.

Week one is baseline and co-design. David defines what counts as a meaningful PR and
signs off on the baseline, which we pull from their own repo history before we touch
anything. Maya builds the workflow with me — she's already written Cursor rules for
this library, so we're building on her work. Nina, Marcus, and Ravi each own a piece of
it and have to change their own piece before we hand off, which is where the software
factory you described actually starts.

Weeks two and three are the pilot. A small cohort takes real backlog work through the
workflow, with a human approving the plan before anything gets built. I'm recording as
we go: timestamps, how many review cycles, where I had to step in, and before/after
artifacts.

From week three I start stepping back. Maya maintains the workflow, a second engineer
runs it end to end without me, and David presents the result to Priya around day 55–60,
not me. If it holds up, that's when we talk about a second team.

For the renewal I want three measures: how long until a new joiner's first meaningful
PR, how much rework their PRs need while ramping, and how long a change takes from
design to deploy. Weekly active seats stays useful for adoption, but it won't answer
Finance's question. I'll be clear throughout about what's measured, what's historical,
and what's a guess.

Two things I'm assuming: we can get three to five people for the cohort inside 30 days,
and Acme can give us six months of git and review history for the baseline. Tell me
early if either is wrong.

What I need from you, maybe five hours across the whole 90 days:

1. Intros and a named commitment from David and Maya, plus two slots with Priya: one
   early to agree what evidence would convince her, one for the readout around day
   55–60.
2. Segmented usage data, what you know about the two teams that stalled, and a read on
   whether Finance is running a price comparison or a consolidation decision. That
   changes when we want the readout to land.
3. Twenty minutes a week. I'll run the technical side and keep the decision log; you
   and the AE shape the commercial story.

If that matches your read, I'll start on the David and Maya intros this week. I'll
bring the working prototype to our session — it's already running against a real repo.

John Bush
