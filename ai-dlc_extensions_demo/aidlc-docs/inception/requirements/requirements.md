# Requirements

## Intent Analysis

- **User request**: Create a new Node.js project using pure JavaScript and Express, exposing a `GET /hello` API route that returns JSON with `message` set to `Hello World!`.
- **Request type**: New Project
- **Scope estimate**: Single service with one primary API route and one health-check route group requirement.
- **Complexity estimate**: Simple
- **Requirements depth**: Minimal, with extension-driven requirements included because Health Check and partial Property-Based Testing were enabled.

## Confirmed Decisions

- Use pure JavaScript.
- Use ECMAScript modules with `"type": "module"`.
- Use Express as the only runtime package dependency.
- Return exactly `{ "message": "Hello World!" }` from `GET /hello`.
- Enforce Health Check extension rules.
- Skip Security Baseline extension rules.
- Enforce Property-Based Testing extension rules in partial mode.

## Functional Requirements

### FR-01: Node.js Express Project

The project must be a Node.js service implemented in pure JavaScript using Express.

### FR-02: Hello API Route

The service must expose a `GET /hello` route.

Acceptance criteria:
- `GET /hello` returns HTTP 200 when the service is healthy.
- The response body is exactly:

```json
{
  "message": "Hello World!"
}
```

### FR-03: Health Endpoint

Because the Health Check extension is enabled, the `/hello` API route group must include a health endpoint at `GET /hello/health`.

Acceptance criteria:
- `GET /hello/health` uses the GET method.
- It returns a successful HTTP status when the route group is operational.
- It does not require a request body.
- It does not mutate application state.
- It returns structured JSON with at least `status`, `service`, and `timestamp`.

## Non-Functional Requirements

### NFR-01: Dependency Scope

Express must be the only runtime package dependency.

Test-only development dependencies may be introduced later only when required to satisfy enabled testing rules. Because partial Property-Based Testing is enabled, the construction plan must decide whether `fast-check` or another PBT-capable JavaScript framework is necessary and document the decision before code generation.

### NFR-02: Lightweight Health Checks

The health endpoint must remain lightweight and bounded.

It must not:
- Perform business transactions.
- Mutate state.
- Trigger asynchronous jobs.
- Depend on unbounded external calls.
- Return large or sensitive payloads.

### NFR-03: Health Endpoint Exposure

The health endpoint exposure mode is public liveness check with a non-sensitive response.

Public response fields must not include credentials, internal URLs, stack traces, or detailed infrastructure topology.

### NFR-04: Testing Expectations

The project must include automated tests for:
- `GET /hello` status code and exact JSON response.
- `GET /hello/health` status code, response shape, and no request body requirement.

Partial PBT enforcement applies to PBT-02, PBT-03, PBT-07, PBT-08, and PBT-09. For this service:
- PBT-02 is N/A unless serialization or parsing helpers are introduced.
- PBT-03 is applicable if reusable response-shaping helpers with documented invariants are introduced.
- PBT-07, PBT-08, and PBT-09 must be considered during construction if PBT tests are added.

## Extension Compliance Summary

| Extension Rule | Status | Rationale |
|---|---|---|
| HEALTH-01 | Compliant | Requirements include mandatory `GET /hello/health` for the `/hello` route group. |
| HEALTH-02 | Compliant | Health response contract requires `status`, `service`, and `timestamp`. |
| HEALTH-03 | Compliant | Requirements define lightweight bounded execution. |
| HEALTH-04 | Compliant | Requirements include automated health endpoint tests. |
| HEALTH-05 | Compliant | Requirements document public non-sensitive liveness exposure. |
| Security Baseline | N/A | User opted out during Requirements Analysis. |
| PBT-02 | N/A | No logical inverse operation is currently required. |
| PBT-03 | N/A at requirements stage | No reusable invariant-bearing helper has been designed yet. Reassess during construction. |
| PBT-07 | N/A at requirements stage | No PBT generators are required until PBT tests are introduced. |
| PBT-08 | N/A at requirements stage | Reproducibility details are construction/build-test concerns if PBT tests are introduced. |
| PBT-09 | Compliant for requirements | Requirements document JavaScript PBT framework selection as a construction planning decision. |

## Out of Scope

- Authentication.
- Database integration.
- Frontend UI.
- Deployment infrastructure.
- Additional API routes beyond `/hello` and `/hello/health`.
