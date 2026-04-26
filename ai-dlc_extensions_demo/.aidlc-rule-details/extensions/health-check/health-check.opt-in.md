# Health Check - Opt-In

**Extension**: Health Check

## Opt-In Prompt

The following question is automatically included in the Requirements Analysis clarifying questions when this extension is loaded:

```markdown
## Question: Health Check Extension
Should health-check extension rules be enforced for all API routes in this project, including existing, modified, and newly created route groups?

A) Yes - enforce mandatory health-check endpoints for every existing, modified, and newly created API route group as blocking constraints (recommended for production services and monitored APIs)
B) No - skip health-check rules (suitable for prototypes, static frontends, or projects without API routes)
X) Other (please describe after [Answer]: tag below)

[Answer]: 
```

## Re-Offer and Revalidation Requirement

When an AI-DLC project already has extension configuration, the Health Check extension MUST still be checked on every interaction and phase that discovers, designs, modifies, generates, documents, or tests API routes.

- If Health Check is already enabled in `aidlc-docs/aidlc-state.md`, do not ask the opt-in question again; load and enforce `health-check.md`.
- If Health Check is disabled, skip enforcement and log the skip in `aidlc-docs/audit.md`.
- If no extension configuration exists and the current interaction touches API routes, offer this opt-in prompt during the active Requirements Analysis or equivalent lightweight increment planning gate.
- Existing source code is in scope. Enabled Health Check rules can require fixes to pre-existing API route groups before the current stage is considered complete.
