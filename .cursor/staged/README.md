# Staged scale steps (inert — nothing here is loaded by Cursor)

Cursor reads `.cursor/rules/`, `.cursor/commands/`, `.cursor/agents/`, and `.cursor/mcp.json`.
GitHub reads `.github/workflows/`. This directory is none of those: it holds the **gate-ready
designs** for the capabilities the pilot deliberately does not enable. Each file is written so the
named reviewer can approve or reject a concrete artifact instead of a slideware promise — "not
enabled" is a decision with a design attached, not a gap.

Start with **[`SOFTWARE_FACTORY.md`](SOFTWARE_FACTORY.md)** — the map of the production line, what
is live today, and which staged step advances which stage of it.

## Connected horizon — context and surface

| Staged artifact | Enable gate (owner) | Precondition |
|---|---|---|
| `mcp.github.json` — read-only GitHub MCP server config | Security review (Marcus) | Least-privilege token issued; foreground workflow trusted for evidence capture |
| `new-joiner-agent.md` — restricted read-only joiner agent (supersedes the custom-mode spec; custom modes were removed in Cursor 2.1) | Team adoption call (Maya + David) | Pilot cohort feedback shows the default surface is too open for week-one joiners |

## Automated horizon — work that starts without a human starting it

| Staged artifact | Enable gate (owner) | Precondition |
|---|---|---|
| `agent-pr-policy.md` — provenance, draft, and evidence rules for agent-authored PRs | Nina (review) + Marcus (enforcement) | **None. Adopt this first** — it is the precondition for everything below it |
| `workflows/agent-pr-guardrails.yml` — the mechanical half of that policy | Marcus | Policy adopted; branch protection can require the check |
| `issue-to-draft-pr.md` — labeled issue → draft PR (Cursor Automation, or Acme-triggered) | Marcus + Nina + David | Guardrails enabled; a change class with an observed acceptance rate exists |
| `workflows/issue-to-draft-pr.yml` — the Acme-triggered variant of that design | Marcus | Scoped `CURSOR_API_KEY` provisioned; spend limit set |
| `drift-automation-spec.md` — scheduled drift-check automation | Security + platform review (Marcus, with Maya) | Workflow rolled out beyond one repository; human-triggered `/update-rules` cadence outgrown |

**Order matters in the automated table.** The enforcer is enabled before the producer; otherwise
the first agent-authored PR arrives under a policy nothing checks.

To enable one: copy or recreate it at its live location (e.g. `mcp.github.json` →
`.cursor/mcp.json`, `workflows/*.yml` → `.github/workflows/`) **after** the gate owner signs off,
and record the decision in the pilot decision log. Do not enable anything from here during the
wedge phase.
