# Staged: labeled issue → draft PR automation (spec, not enabled)

**Status: staged for the automated horizon.** See [`SOFTWARE_FACTORY.md`](SOFTWARE_FACTORY.md) for
where this sits in the line. During the pilot, `/first-contribution` stays **human-invoked**: the
joiner learns the repository by driving it, and the plan-approval gate is the point. This
automation earns its place only when a **class** of issues has shown a repeatable acceptance rate
in the foreground workflow — not on day one, and not for issue types nobody has run manually yet.

## Job

A human labels an issue `agent-ready`. A cloud agent runs this repository's own
[`/first-contribution`](../commands/first-contribution.md) contract against it, grounded in the
same [rules](../rules/) a human would get, and opens a **draft** PR whose description carries the
plan it followed and the verification it ran. A human reviews the plan and the diff together, then
takes it forward or closes it.

The intent is not "the agent does the work." It is **the boring first 40 minutes** — locating the
right sibling implementation, wiring the change through the layers this repo expects, placing the
test in the right project — arriving already done and already convention-checked, so the human
starts at review instead of at orientation.

## The one design decision that matters

The foreground workflow gates on the plan **before** any code is written. An automation cannot
stop mid-run and wait for a human. So this design moves the gate: the plan is written into the
draft PR body and reviewed **with** the diff, before merge.

That is a real weakening, and it bounds what may carry the `agent-ready` label:

| Qualifies | Does not qualify |
|---|---|
| A behavior described precisely enough that a wrong plan is obvious in review | Anything where "what should this do?" is the actual work |
| Change classes already run manually with a known acceptance rate | A class no human has run through `/first-contribution` yet |
| Bounded blast radius — one area, existing patterns, tests exist to extend | Public API surface, provider-specific behavior, anything touching the API baseline |
| Failure is cheap: close the draft, no one is misled | Security, auth, data migration, or anything where a plausible-looking wrong plan is expensive |

Nina owns this list. The label is applied by a human, and applying it is the decision that this
issue is in-class — which makes labeling, not the agent, the first control.

## Implementation — two paths (Acme picks one at the gate)

### Path A: Cursor Automation (preferred to start)

Configured at `cursor.com/automations`; no infrastructure for Acme to run.

| Setting | Value |
|---|---|
| Trigger | GitHub **Issue label changed** → label `agent-ready` added |
| Scope | **Team Owned** — team admins manage it; runs under the team identity and team billing, not an individual's |
| Repository | This repository only |
| Instructions | "Follow `.cursor/commands/first-contribution.md`. Post the plan as the PR description before the diff summary. Open the PR as a **draft** titled `[agent-draft] <issue title>`, labeled `agent-authored`. If the issue is underspecified or out of class per `.cursor/staged/agent-pr-policy.md`, open no PR — comment what is missing and stop." |
| Tools | Repository read/write on branches; PR create. No merge, no deploy, no issue-write beyond one comment |
| Spend | Team spend limit set by Marcus before enable |

Cursor's `/automate` skill can scaffold this from a plain-language description; the resulting
configuration is still reviewed by Marcus before it is saved as Team Owned. GitHub Automation
triggers verified against Cursor docs 2026-07-26 (`Issue label changed`, `Issue comment`,
`CI completed`, `Workflow run completed`, plus the core PR triggers).

### Path B: Acme-triggered via the Cloud Agents API

Use when Acme wants the trigger logic in their own CI, auditable in their own logs, or when the
label policy needs to consult systems Cursor cannot see. Same behavior, Acme-owned trigger:
[`workflows/issue-to-draft-pr.yml`](workflows/issue-to-draft-pr.yml) calls
`POST https://api.cursor.com/v1/agents` with `prompt.text`, `repos[0].url`, `repos[0].startingRef`,
`model.id`, and `autoCreatePR` (API shape verified 2026-07-26 — treat as a
[declared drift surface](../README.md#model-orchestration-policy-as-code) and re-verify at enable
time). The key lives in Acme's GitHub secrets, not in this repository.

Path B costs Acme a workflow to maintain. It buys trigger logic they own and audit. Marcus decides
which trade he wants; both paths land on the same reviewed draft PR.

## Boundaries (what Marcus and Nina review)

| Boundary | Setting |
|---|---|
| Trigger | Human-applied label only. Never issue-created, never comment-triggered, never every new issue |
| Concurrency | One run per issue; a small cap on open agent drafts, so the queue cannot outrun review |
| Output | **Draft** PR only, `agent-authored` label, no self-merge, no force-push to shared branches |
| Repository access | This repository; write limited to agent branches and its own PR |
| Secrets | Path A: no Acme-held secret. Path B: a scoped Cursor API key in GitHub secrets, owned by Marcus |
| Egress | Repository host and model endpoint only |
| Review | Human review required and authoritative; CI gates unchanged; Bugbot advisory |
| Evidence | Agent drafts counted separately from new-joiner PRs — see [`agent-pr-policy.md`](agent-pr-policy.md) |
| Kill switch | Disable the automation (Path A) or remove the label from the workflow trigger (Path B). Both revert to the human-invoked command with no repository change |

## What this automation is *not*

- **Not a replacement for `/first-contribution`.** The joiner path stays foreground and gated;
  that is where the ramp outcome is measured. This drafts the work nobody is learning from.
- **Not PR review.** Bugbot and Nina review; the automation does not approve its own output.
- **Not a merge path.** No configuration here can merge, and none should be added.
- **Not an evidence source for the renewal.** Agent-drafted PRs are excluded from the ramp
  metrics by label. Mixing them in would answer a question Priya did not ask.

## Failure modes we expect (and the response)

| Failure | Response |
|---|---|
| Plausible-looking wrong plan | Why the plan is in the PR body — a reviewer judges the reasoning, not just the diff. Out-of-class labeling is the root cause; Nina tightens the class list |
| Draft queue nobody reads | Cap open drafts; track human touch time. If it grows, turn the stage off — the bottleneck moved, it did not shrink |
| Acceptance rate falls | Below Nina's threshold the automation is noise. Disable, re-run that class manually, and find out what changed |
| Rules drift and drafts get subtly wrong | `/update-rules` is the paired control; the drift check matters *more* once drafts are automatic |
