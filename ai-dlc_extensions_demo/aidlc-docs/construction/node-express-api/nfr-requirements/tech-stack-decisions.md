# Tech Stack Decisions - node-express-api

## Runtime

- **Node.js**: JavaScript runtime for the API service.
- **Module format**: ECMAScript modules via `"type": "module"`.
- **Language**: Pure JavaScript.

## Runtime Dependencies

- **Express**: HTTP server and routing framework.

Decision:
- Express is the only runtime package dependency.

Rationale:
- The requested API surface is small and fits Express directly.
- No additional runtime middleware is required.
- The Security Baseline extension was disabled, so no security middleware is mandated by enabled extension rules.

## Development and Test Tooling

- **Node.js built-in test runner**: Preferred example-based test runner.
- **Node.js built-in `fetch`**: Preferred HTTP client for route tests when running the app on an ephemeral local port.
- **fast-check**: Selected JavaScript property-based testing framework if PBT-applicable code is introduced.

Decision:
- Do not add `fast-check` unless code generation introduces a function or transformation that triggers PBT-02 or PBT-03.
- If added, `fast-check` must be a development dependency, not a runtime dependency.

Rationale:
- Partial PBT mode enforces framework selection but no current route behavior has a round-trip property or invariant-bearing transformation.
- Avoiding unnecessary test-only dependencies keeps the initial project minimal while preserving a compliant PBT decision.

## Health Check Contract

The health endpoint must be implemented at `GET /hello/health` and return structured JSON with:

- `status`: expected initial value `ok`
- `service`: stable route group identifier, expected `hello`
- `timestamp`: ISO 8601 timestamp generated per response

Exposure mode:
- Public liveness check with non-sensitive response content.

## Rejected Options

- **Additional runtime middleware**: Rejected because Express alone satisfies the approved requirements.
- **Supertest**: Rejected initially because Node's built-in test runner and `fetch` can test this small service without adding a development dependency.
- **Jest or Vitest**: Rejected initially because the Node built-in test runner is enough for this scope.
