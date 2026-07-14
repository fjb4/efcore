---
name: scope-issue
description: Turn a rough feature request or bug report into a well-formed, contribution-ready issue draft
---

# Scope an issue

Turn a rough feature request or bug report into a well-formed, convention-aware GitHub issue for
this repo — correctly placed, triaged for testability and API impact, and ready for a contributor
or `/first-contribution` to pick up. **Produce a drafted issue only. Do not edit code, and do not
open the issue** unless explicitly asked.

**Input:** the plain-language description of the desired behaviour or observed problem typed after
this command (e.g. `/scope-issue Translate DateOnly.AddDays on SQLite`). That trailing text is the
command argument. If none was given, ask for one before doing anything else.

## Step 1 — Classify (bug vs. enhancement)

Following [`.github/CONTRIBUTING.md`](../../.github/CONTRIBUTING.md): is this a **bug** (EF Core doing
something it wasn't designed to) or an **enhancement** (new or changed functionality)? State which,
in one line — it decides the issue template and the reviewer's expectations. If the request is
really several changes, split it and scope the smallest coherent one first.

## Step 2 — Place it (which area / project)

Use `architecture-map` to locate the change: the owning `src/` project and the matching
`.agents/skills/<area>/SKILL.md`. Name both. This is placement guidance for the future contributor,
not a commitment.

## Step 3 — Triage for a *first contribution*

Flag, honestly, how approachable this is — the same filter a first-contribution candidate must pass
(per `contribution-workflow`, `test-conventions`, and `conventions-source-of-truth`):

- **Public-API impact?** Does it need new public surface (new method/option/attribute)? If so, note
  that it triggers the API-baseline process and API review, so it is **not** a good first issue —
  say so. Translating an *existing* BCL/LINQ method to SQL adds no public API and is ideal.
- **Locally testable?** Can it be verified against SQLite (or core) alone, or does it need SQL
  Server / Cosmos? Prefer SQLite-testable work per `test-conventions`.
- **Self-contained?** Provider-local with a nearby sibling to model on is ideal; cross-cutting
  shared-relational or model changes are heavier — label them so expectations are set.
- **Already covered?** Note if an existing issue or open PR may already address it (search is fine
  within the approved context; do not pull the contents of an external PR into a solution).

## Step 4 — Draft the issue

Write it to match the repo's issue templates in
[`.github/ISSUE_TEMPLATE/`](../../.github/ISSUE_TEMPLATE) (feature request vs. bug report):

- **Title** — a precise, searchable summary (mirror the maintainers' "Translate X" / "Query: …"
  phrasing where it fits).
- **Description** — the behaviour today vs. the behaviour wanted; a minimal repro or a code sketch
  of the desired API usage; the concrete expected result (for a query gap, the SQL you'd expect).
- **Scope & placement** — the area/project and skill from Step 2, and the Step 3 triage flags
  (public-API? SQLite-testable? sibling to model on?).
- **Acceptance criteria** — what "done" looks like: the spec-base test plus provider functional
  override that must exist (per `test-conventions`), and that public API stays unchanged.

## Step 5 — Report

Output the drafted issue in a single block the requester can paste, preceded by the one-line
classification and the first-contribution verdict (**good first issue / needs-API-review /
heavier-than-it-looks**). Do not open the issue and do not start implementing — that is
`/first-contribution`'s job, from this issue as its input.

## Guardrails

- **Approved context only** — this repo, its in-repo docs (`docs/`, `.github/`, `.agents/`), and the
  official EF Core documentation. No blogs, Q&A sites, or the contents of an existing PR.
- **Draft, don't act** — this command produces an issue; it never edits code or opens the issue.
- When scoping surfaces a wrong or missing **rule** (e.g. `architecture-map` can't place the area),
  flag the rule so it gets fixed rather than guessing.
