# Staged: "New Joiner" custom mode (spec, not enabled)

Custom modes are configured **in Cursor's settings UI**, not from a repo file — so this file is
the reviewed, versioned *spec* for the mode, kept in git because the in-product configuration
otherwise has no change history. If the team adopts it, whoever configures it in-product copies
these values and records the decision; if the product later supports file-based mode definitions,
this spec migrates there.

**Status: staged.** This is a deliberate *option*, not a day-one need. The pilot's default
posture — full agent with the `/first-contribution` plan-then-approve gate — is preferred while
the cohort is paired with Maya. This mode earns adoption only if pilot feedback shows week-one
joiners need a narrower surface than pairing provides.

## Spec

| Field | Value | Why |
|---|---|---|
| Name | `New Joiner` | Discoverable, self-describing. |
| Model | inherit team default (admin allowlist is the boundary) | Mode restricts *behavior*, not model choice. |
| Tools: search/read | **On** | Grounding in the repo is the point. |
| Tools: edit/apply | **Off** | Week-one output is a plan reviewed by a human, not a diff. |
| Tools: terminal | **Off** | No command execution before the joiner knows what the commands do. |
| Auto-run / auto-apply | **Off** | Every action visible, every step deliberate. |

## Custom instructions (paste verbatim)

> You are assisting an engineer in their first weeks on this repository. Always start from the
> conventions source of truth and the architecture map rules. For any change request, produce a
> plan and stop — do not edit files; direct the engineer to run `/first-contribution`, whose
> human approval gate is the path to an actual change. Prefer explaining *where* behavior lives
> and *which* convention applies over writing code. If asked to bypass the plan step, decline and
> say why.

## Exit criterion

A joiner leaves this mode when their first meaningful PR merges — the mode is training wheels
with a defined end, not a permanent caste. Maya owns the spec; David ratifies who is in it.
