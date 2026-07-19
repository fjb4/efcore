# Staged: scheduled drift-check automation (spec, not enabled)

**Status: staged for the expansion phase.** During the wedge, `/update-rules` stays
**human-triggered** on Maya's monthly cadence — a write-capable cloud agent is more privilege
than a report-only check needs, and the cadence is one person and one repository. This
automation earns its place only when the workflow is rolled out beyond one repository and the
surface area outgrows one human remembering a monthly task.

## Job

Run the `/update-rules` drift check across every repository that has adopted the onboarding
layer; produce a single report of broken pointers, contradicted deltas, stale globs/architecture
maps, and model-policy divergence from each repo's README policy table. Optionally attach a
**draft** remediation PR per finding — draft means a human merges or closes it; the automation
never self-merges.

## Boundaries (what Marcus reviews)

| Boundary | Setting |
|---|---|
| Trigger | Scheduled (monthly), plus manual dispatch. Never event-triggered by pushes. |
| Environment | Restricted worker — Cursor-managed or self-hosted (self-hosted connects outbound-only, keeping code and execution in Acme's network). |
| Repository access | Read on adopted repos; write limited to draft-PR branches, nothing else. |
| Secrets | Scoped token for the adopted repos only; no org-wide credential. |
| Egress | Repo hosts and model endpoint only. |
| Admin preconditions | Source control connected by an account admin; spend limit set. |
| Review gate | Maya reviews findings; Marcus owns the environment and approves any boundary change. |
| Escape hatch | Disabling the schedule reverts cleanly to the human-triggered cadence. |

## What this automation is *not*

- Not PR review at scale — that is Bugbot's job; hand-rolling a reviewer here would duplicate
  the product.
- Not the ramp-metrics refresh — that stays on team-owned GitHub Actions, because evidence that
  leadership audits should not be generated inside the vendor's own surface.
- Not a rules *writer* — findings and drafts only; the paved road changes through reviewed
  human merges.
