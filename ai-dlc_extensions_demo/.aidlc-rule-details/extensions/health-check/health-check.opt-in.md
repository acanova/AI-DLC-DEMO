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
