# Health Check Rules

## Overview

These health-check rules are cross-cutting constraints that apply to every AI-DLC interaction and phase that discovers, designs, modifies, generates, documents, or tests API routes, including existing, modified, and newly created routes.

The goal is to ensure every API route group has a lightweight, reliable health endpoint that can be used by developers, monitors, load balancers, deployment checks, and incident responders.

**Enforcement**: At each applicable interaction or stage, the model MUST verify compliance with these rules before presenting the stage completion message to the user.

When the Health Check extension is enabled in `aidlc-docs/aidlc-state.md`, the model MUST load this rules file and enforce it even for lightweight increments, resumed projects, brownfield code changes, documentation-only API changes, and Build and Test updates. The extension is not limited to initial Requirements Analysis.

### Blocking Health Check Finding Behavior

A **blocking health-check finding** means:
1. The finding MUST be listed in the stage completion message under a "Health Check Findings" section with the HEALTH rule ID and description
2. The stage MUST NOT present the "Continue to Next Stage" option until all blocking findings are resolved
3. The model MUST present only the "Request Changes" option with a clear explanation of what needs to change
4. The finding MUST be logged in `aidlc-docs/audit.md` with the HEALTH rule ID, description, and stage context

If a HEALTH rule is not applicable to the current project or unit (for example, no API routes exist in scope), mark it as **N/A** in the compliance summary. This is not a blocking finding.

### Default Enforcement

All rules in this document are **blocking** by default when the Health Check extension is enabled. If any applicable rule's verification criteria are not met, it is a blocking health-check finding.

### API Route Group Definition

For these rules, an API route group is the stable base path used to organize related endpoints.

Examples:
- `/users`
- `/orders`
- `/payments`
- `/admin/reports`

The required health endpoint for an API route group is:

```text
GET /<api-name>/health
```

Examples:
- `GET /users/health`
- `GET /orders/health`
- `GET /payments/health`
- `GET /admin/reports/health`

---

## Rule HEALTH-01: Mandatory Health Endpoint Per API Route Group

**Rule**: Every API route group in scope for the project MUST include a health endpoint at `GET /<api-name>/health`.

This includes:
- Pre-existing API route groups discovered during brownfield analysis
- API route groups modified by the current project
- API route groups newly created by the current project

The health endpoint MUST:
- Use the same route group prefix as the API it checks
- Use the HTTP `GET` method
- Return a successful status code when the route group is operational
- Literally evaluate the corresponding API route group's operational contract, not merely return a static health payload
- Avoid mutating state
- Avoid requiring request body content

**Verification**:
- Every API route group has a corresponding `GET /<api-name>/health` endpoint
- Brownfield projects inventory existing API route groups before compliance is marked complete
- No existing, modified, or newly created route group is accepted without a health endpoint
- Health endpoints are registered in the same routing framework as the related API routes
- Health endpoint tests prove the health response is tied to the corresponding API endpoint or route contract
- Health endpoints are included in API documentation when API documentation is generated

---

## Rule HEALTH-02: Health Response Contract

**Rule**: Every health endpoint MUST return a consistent machine-readable response body.

The response SHOULD include:
- `status`: `ok`, `degraded`, or `unhealthy`
- `service`: stable API route group or service identifier
- `timestamp`: response generation timestamp in ISO 8601 format

If dependency checks are included, the response SHOULD include a `checks` object with per-dependency status values.

**Verification**:
- The endpoint returns structured JSON or the project's documented equivalent response format
- The response includes at least `status`, `service`, and `timestamp`
- Status values are documented and consistently used
- Dependency check output does not expose secrets, credentials, stack traces, or sensitive infrastructure details

---

## Rule HEALTH-03: Lightweight and Bounded Execution

**Rule**: Health endpoints MUST be lightweight and bounded so they can be called frequently by monitoring systems.

Health endpoints MUST NOT:
- Perform expensive business transactions
- Mutate application state
- Trigger asynchronous jobs
- Depend on unbounded external calls
- Return large payloads

Dependency checks, when needed, MUST use short timeouts and fail gracefully.

**Verification**:
- Health handlers perform only readiness or liveness checks
- Any dependency checks have explicit timeout behavior
- Health responses remain small and deterministic
- Health endpoints do not reuse business transaction handlers for health reporting

---

## Rule HEALTH-04: Test Coverage for Health Endpoints

**Rule**: Every mandatory health endpoint MUST have automated test coverage.

Tests MUST verify:
- `GET /<api-name>/health` is registered
- The endpoint returns a successful response for a healthy route group
- The response follows the documented health response contract
- The endpoint does not require a request body

If degraded or unhealthy states are implemented, tests SHOULD cover those states.

**Verification**:
- Each existing, modified, or newly created route group in scope has a health endpoint test
- Tests assert method, path, status code, and response body shape
- Build and test instructions include commands that run health endpoint tests

---

## Rule HEALTH-05: Authentication and Exposure Decision

**Rule**: Each health endpoint MUST have an explicit exposure decision documented during design or code generation.

Allowed exposure modes:
- Public liveness check with non-sensitive response
- Authenticated readiness check for internal operators
- Internal-only endpoint restricted by network, gateway, service mesh, or deployment platform

Health endpoints MUST NOT expose sensitive dependency names, credentials, internal URLs, stack traces, or detailed infrastructure topology to unauthenticated callers.

**Verification**:
- Each health endpoint documents its exposure mode
- Public health responses contain only non-sensitive information
- Authenticated or internal-only health checks have access control or routing restrictions
- API documentation reflects the intended exposure mode

---

## Enforcement Integration

These rules apply to the following AI-DLC stages when the Health Check extension is enabled:

| Stage | Applicable Rules | Enforcement |
|---|---|---|
| Reverse Engineering | HEALTH-01, HEALTH-04, HEALTH-05 | Brownfield analysis must inventory existing API route groups, identify missing health endpoints, and document compliance gaps |
| Requirements Analysis | HEALTH-01, HEALTH-05 | Requirements must capture health endpoint expectations for all API routes in scope and exposure mode preferences |
| Application Design | HEALTH-01, HEALTH-02, HEALTH-03, HEALTH-05 | API designs must include health endpoints, response contract, execution boundaries, and exposure decisions for existing, modified, and newly created route groups |
| Functional Design | HEALTH-02, HEALTH-03, HEALTH-05 | Health handler behavior and dependency checks must be documented where route behavior is designed |
| Code Generation (Planning) | HEALTH-01 through HEALTH-05 | Code generation plans must include health endpoint implementation and tests for each existing, modified, or newly created API route group in scope |
| Code Generation (Generation) | HEALTH-01 through HEALTH-05 | Generated code must include compliant health endpoints and tests |
| Build and Test | HEALTH-04 | Build and test instructions must include health endpoint test execution |
