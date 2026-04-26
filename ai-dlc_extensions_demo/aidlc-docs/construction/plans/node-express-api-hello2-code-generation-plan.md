# Code Generation Plan - node-express-api hello2 increment

## Unit Context

- **Unit**: node-express-api
- **Change type**: Brownfield API enhancement
- **Requested endpoint**: `GET /hello2`
- **Response contract**: `{ "message": "Hello World 2!" }`
- **Existing dependencies**: Express remains the only runtime dependency.
- **Extension status**:
  - Health Check: enabled, `/hello2` requires `GET /hello2/health` and existing health behavior must remain compliant.
  - Security Baseline: disabled.
  - Property-Based Testing: partial mode remains N/A because no invariant-bearing helpers or generated data are introduced.

## Execution Steps

- [x] Step 1: Update `src/app.js` with `GET /hello2`.
- [x] Step 2: Update `tests/app.test.js` with route coverage for `GET /hello2`.
- [x] Step 3: Update `README.md` with the `GET /hello2` API contract.
- [x] Step 4: Update `aidlc-docs/construction/node-express-api/code/code-summary.md` with the new route summary.
- [x] Step 5: Run `npm test` and record the result.
- [x] Step 6: Fix Health Check extension enforcement for `/hello2` by adding `GET /hello2/health`, updating existing health checks to verify route contracts, and documenting the compliance correction.

## Verification Result

- **Command**: `npm test`
- **Status**: Pass
- **Result**: 4 tests passed, 0 failed.
- **Correction result**: 6 tests passed, 0 failed after health-check enforcement fix.

## Story Traceability

- [x] New API route request: expose `GET /hello2` with exact JSON message payload.

## Extension Compliance Summary

| Extension Rule | Status | Rationale |
|---|---|---|
| HEALTH-01 | Compliant | `GET /hello2/health` was added for the new `/hello2` route group; existing `/hello/health` remains registered. |
| HEALTH-02 | Compliant | Health responses include `status`, `service`, `timestamp`, and endpoint check status. |
| HEALTH-03 | Compliant | Health checks are lightweight bounded route-contract checks. |
| HEALTH-04 | Compliant | Tests cover `GET /hello/health` and `GET /hello2/health`. |
| HEALTH-05 | Compliant | Health endpoints are documented as public non-sensitive liveness checks. |
| Security Baseline | N/A | Disabled in `aidlc-docs/aidlc-state.md`. |
| PBT-02 | N/A | No inverse operation is introduced. |
| PBT-03 | N/A | No invariant-bearing helper is introduced. |
| PBT-07 | N/A | No PBT generators are introduced. |
| PBT-08 | N/A | No PBT tests are introduced. |
| PBT-09 | Compliant | No new PBT framework dependency is needed for this direct route response. |
