---
name: update-rules
description: Diff the Cursor onboarding layer against its sources of truth and report drift (read-only)
---

# Update rules (drift check)

Check the onboarding layer (`.cursor/rules/`, `.cursor/commands/`, `.cursor/agents/`,
`.cursor/README.md`) against
the sources of truth it points at, and report where the layer has drifted. The layer's design is
*point, don't copy* — so the only things that can rot are the pointers and the deltas. This
command finds both. Produce a report — **do not edit, create, or delete any files** unless
explicitly asked to apply a fix. Intended cadence: monthly, or after any repo-layout or
conventions change; owned by the layer's maintainer, not its original author.

**Input:** optional trailing text naming a scope — a single rule or command (e.g.
`/update-rules test-conventions` or `/update-rules commands/pre-review.md`). If none was given,
check the whole layer.

## Step 1 — Inventory the layer

List every rule (with its frontmatter: `alwaysApply` or `globs`), every command, and every
subagent under `.cursor/agents/` (with its frontmatter: `model`, `readonly`) in scope, plus
the `.cursor/README.md` table. Note which sources of truth each one points at — the maintainer
conventions doc (`.github/copilot-instructions.md`), the area skills (`.agents/skills/`),
`.github/CONTRIBUTING.md`, and the issue templates.

## Step 2 — Verify the pointers

For every relative link and every named reference in the layer (rules, commands, README):

- Does the target file still exist at that path?
- Do referenced anchors/sections still exist in the target?
- Do commands cite only rules that exist, and rules reference only skills that exist under
  `.agents/skills/<area>/SKILL.md`?

A broken pointer is the worst drift this design allows — the layer silently stops self-healing.

## Step 3 — Diff the deltas against their sources

For each rule, re-read the source(s) it points at and check every **delta** statement (the content
the rule adds beyond pointing):

- **Contradicted** — the source now says something different (e.g. the conventions doc changed a
  style rule the delta restates differently). The delta must change.
- **Duplicated** — the source now covers what the delta says. The delta should be deleted and
  replaced by a pointer (per the layer's own extension guidance in `.cursor/README.md`).
- **Orphaned** — the delta references repo facts that no longer hold (see Step 4).

## Step 4 — Check the layer against the current repo shape

- **Globs:** does every `globs:` pattern still match at least one file? Do new top-level source or
  test areas fall outside all scoped rules when they shouldn't?
- **`architecture-map`:** do the named projects, dependency directions, and test-layout claims
  still match `src/`, `test/`, and the `.slnf`/`.slnx` files?
- **CI mirror:** do `/pre-review`'s checks still mirror the gates in
  `.github/workflows/cursor-onboarding-checks.yml` (format, analyzers, API baseline, focused
  tests)? A gate added to one side but not the other breaks "agent suggests, CI enforces".
- **Command wiring:** do commands that hand off to each other (`/scope-issue` →
  `/first-contribution` → `/pre-review`; `/start-onboarding-pilot` → `/renewal-evidence`) still
  describe each other's inputs and outputs accurately? Do commands delegate only to subagents that
  exist under `.cursor/agents/`, and does every agent's pointer to the command steps it executes
  still resolve? Does the README table list every command, rule, and agent that exists — and
  nothing that doesn't?
- **Model-policy mirror:** do the subagent frontmatter fields still match the model-orchestration
  table in `.cursor/README.md` — planner and reviewer `model: inherit` + `readonly: true`,
  implementer pinned to the fast-tier ID the table names? The pinned ID is a declared drift
  surface: if it no longer exists, is no longer the sensible fast tier, or diverges from the
  table, that is drift. So is a frontmatter edit that departs from the documented policy, or a
  command that silently stops delegating to its subagent.

## Step 5 — Report

Output findings grouped by severity, most serious first, each with the file, the kind of drift
(**broken pointer / contradicted delta / duplicated delta / stale glob / stale map / CI-mirror
gap / wiring gap / model-policy gap**), the evidence (what the source or repo says now), and the minimal proposed
fix:

- **Blocking** — broken pointers and contradicted deltas: the layer is actively giving wrong
  guidance.
- **Should-fix** — duplicated deltas, stale globs/map entries, CI-mirror and wiring gaps.
- **Nit** — wording drift with no behavioural effect.

End with a one-line verdict: **layer is current**, or the shortlist of Blocking items. Only apply
fixes if asked — and when applying, keep every fix a *delta and a pointer*, never a restatement.

## Guardrails

- **Read-only by default** — this command reports; it does not repair unless explicitly asked.
- **Approved context only** — this repo and its in-repo docs. The sources of truth win: when a
  delta and its source disagree, the source is right and the delta is the bug.
- **Never "fix" a source of truth** — the maintainer conventions doc, skills, and templates belong
  to the maintainers. If one looks wrong, flag it for a human; do not edit it to match the layer.
- Drift in this command's own checklist counts too: if the layer gains a new kind of asset this
  command doesn't know about, that is a Should-fix finding against `update-rules` itself.
