# NFR Requirements - node-express-api

## Scope

This NFR assessment applies to the single Node.js Express API service that will expose:

- `GET /hello`
- `GET /hello/health`

## Scalability

- The service is stateless.
- No database, cache, queue, or external service dependency is required.
- Horizontal scaling is possible because route handlers do not depend on local mutable state.
- No explicit capacity target is required for the initial implementation.

## Performance

- `GET /hello` must return a small fixed JSON response.
- `GET /hello/health` must return a small health JSON response.
- Route handlers must avoid blocking I/O, expensive computation, and unbounded external calls.
- Health-check execution must remain lightweight and deterministic.

## Availability and Reliability

- The service must expose a health endpoint for the `/hello` route group at `GET /hello/health`.
- The health endpoint must return a successful status when the route group is operational.
- The health endpoint must not require a request body.
- The health endpoint must not mutate state.
- The health response must include at least:
  - `status`
  - `service`
  - `timestamp`

## Security

- Security Baseline extension rules are disabled by user opt-out.
- The health endpoint exposure mode is public liveness check with non-sensitive response content.
- The health response must not expose credentials, stack traces, internal URLs, or detailed infrastructure topology.
- No authentication or authorization requirement is in scope.

## Maintainability

- Use pure JavaScript with ECMAScript modules.
- Keep route handlers small and directly testable.
- Export the Express app separately from server startup so tests can exercise routes without binding a network port.
- Keep runtime dependencies limited to Express.

## Testability

- Automated tests must cover:
  - `GET /hello` status code.
  - `GET /hello` exact JSON body.
  - `GET /hello/health` status code.
  - `GET /hello/health` response shape.
  - `GET /hello/health` behavior without request body content.

## Property-Based Testing Assessment

Partial PBT mode enforces PBT-02, PBT-03, PBT-07, PBT-08, and PBT-09 only.

- **PBT-02 Round-trip Properties**: N/A. No serialization/deserialization, encoding/decoding, or parsing/formatting pair is required.
- **PBT-03 Invariant Properties**: N/A for the planned implementation unless reusable response-shaping helpers with invariants are introduced during code generation.
- **PBT-07 Generator Quality**: N/A unless PBT tests are added.
- **PBT-08 Shrinking and Reproducibility**: N/A unless PBT tests are added.
- **PBT-09 Framework Selection**: Compliant. `fast-check` is selected as the JavaScript PBT framework if PBT-applicable code is introduced. It will be added only as a development dependency if needed.

## Extension Compliance Summary

| Extension Rule | Status | Rationale |
|---|---|---|
| HEALTH-01 | Compliant | NFRs require `GET /hello/health` for the `/hello` route group. |
| HEALTH-02 | Compliant | NFRs require `status`, `service`, and `timestamp` in the health response. |
| HEALTH-03 | Compliant | NFRs require lightweight bounded health execution. |
| HEALTH-04 | Compliant | NFRs require automated test coverage for the health endpoint. |
| HEALTH-05 | Compliant | NFRs document public non-sensitive liveness exposure. |
| Security Baseline | N/A | Disabled by user opt-out. |
| PBT-02 | N/A | No inverse operation exists in scope. |
| PBT-03 | N/A | No invariant-bearing transformation exists in scope. |
| PBT-07 | N/A | No PBT generators are required without PBT-applicable code. |
| PBT-08 | N/A | No PBT execution is required without PBT-applicable code. |
| PBT-09 | Compliant | `fast-check` is selected if PBT-applicable code is introduced. |
