# Staged: restricted "new joiner" agent (spec, not enabled)

**Status: staged.** A deliberate *option*, not a day-one need. The pilot's default posture — the
full agent with the `/first-contribution` plan-then-approve gate — is preferred while the cohort is
paired with Maya. This narrower surface earns adoption only if pilot feedback shows week-one
joiners need less room than pairing provides. Gate: team adoption call (Maya + David).

## Why this is an agent and not a custom mode

This artifact was originally written as a **custom mode** spec, configured in Cursor's settings UI.
**Custom modes were removed in Cursor 2.1** (2025-11-21); the release kept only an export path so
existing modes could be saved as custom commands. The Acme handout still lists custom modes among
Cursor's capabilities, which is the handout trailing the product — not a live surface.

The property that mattered was never the mode picker. It was **a narrower, named surface with a
defined exit**, and the current product expresses that better than the mode ever did:

| What the mode gave | Current-product equivalent | Better or worse |
|---|---|---|
| A named, selectable persona | A subagent in [`.cursor/agents/`](../agents/) | **Better** — versioned in git, reviewed in a PR, not per-user UI state |
| Edit/apply off | `readonly: true` in frontmatter | Same property, declared in the file |
| Terminal off, auto-run off | **Team tool policy (admin)** — there is no per-agent terminal toggle | Weaker as frontmatter, stronger as a control: the admin boundary is enforced, the frontmatter was not |
| Custom instructions | The agent body | Same |
| Discoverable entry point | A command that delegates to it | Same |

Note the honest half of that table: `readonly` is a real constraint on writing; "no terminal" is
**not** something this file can assert. It comes from the team's tool policy, which is Marcus's,
and it is the same distinction the rest of this layer draws — [routing and frontmatter are the
paved road; admin policy and CI are the boundary](../README.md#model-orchestration-policy-as-code).

## The artifact (copy to `.cursor/agents/new-joiner.md` after the gate)

```markdown
---
name: new-joiner
description: Orient an engineer in their first weeks on this repository. Explains where behavior lives and which convention applies; produces a plan and stops. Read-only; never edits, never implements.
model: inherit
readonly: true
---

# New joiner

You assist an engineer in their first weeks on this repository. Start from
[`../rules/conventions-source-of-truth.mdc`](../rules/conventions-source-of-truth.mdc) and
[`../rules/architecture-map.mdc`](../rules/architecture-map.mdc) — the conventions and the repo
geography are the point, not the diff.

Contract:

- **Prefer explaining _where_ behavior lives and _which_ convention applies** over producing code.
  Name the nearest sibling implementation and the rule that governs it.
- **For any change request:** produce a plan and stop. Direct the engineer to
  [`../commands/first-contribution.md`](../commands/first-contribution.md), whose human approval
  gate is the path to an actual change.
- **Never:** edit files, run implementation steps, or approve your own plan.
- **If asked to bypass the plan step:** decline and say why. The gate is the reason a first
  contribution is safe to make in week one.

You run read-only on the inherited model. Being unable to write is the feature: week-one output is
a plan a human reads, not a diff a human inherits.
```

## Adoption

- **Door:** Maya adds a one-line `/orient` command that delegates here, so the joiner has an entry
  point that is discoverable the same way every other workflow in this layer is.
- **Exit criterion:** a joiner stops using it when their first meaningful PR merges. Training
  wheels with a defined end, not a permanent caste. Maya owns the file; David ratifies who uses it.
- **Registry:** if the copied file pins a concrete model instead of `inherit`, add it to the
  [model-orchestration table](../README.md#model-orchestration-policy-as-code) so `/update-rules`
  checks it. That table is the registry of pins.

## Known limit

A read-only agent narrows what week-one output *is*; it does not narrow what a determined engineer
can do in the same workspace by switching agents. This is a paved road for someone learning the
repository, not a containment control. The controls remain the admin tool and model policy, the
human approval gate, and CI.
