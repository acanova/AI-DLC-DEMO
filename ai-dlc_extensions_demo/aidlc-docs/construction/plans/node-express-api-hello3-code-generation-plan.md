# Code Generation Plan - node-express-api hello3 Increment

## Unit Context

- **Unit**: node-express-api
- **Increment**: Add `GET /hello3`
- **Workspace Root**: `/Users/canova/Downloads/git/AI-DLC-DEMO/ai-dlc_extensions_demo`
- **Application Code Location**: Workspace root only
- **Documentation Location**: `aidlc-docs/`
- **Dependencies**: Existing Express app in `src/app.js`

## Story Traceability

- [x] User request: Add a new `GET /hello3` endpoint returning JSON with `message` equal to `Hello World 3!`.
- [x] Enabled Health Check extension: Add and test a corresponding `GET /hello3/health` endpoint for the new route group.

## Execution Steps

### Step 1: API Layer Generation

- [x] Modify `src/app.js` in place.
- [x] Add a `hello3Payload` helper returning `{ message: 'Hello World 3!' }`.
- [x] Register `GET /hello3`.
- [x] Register `GET /hello3/health` using the existing bounded route-contract health payload pattern.

### Step 2: API Layer Unit Testing

- [x] Modify `tests/app.test.js` in place.
- [x] Add coverage for `GET /hello3` exact status and response contract.
- [x] Add coverage for `GET /hello3/health` status, response shape, endpoint check, and no-body behavior.

### Step 3: Documentation Generation

- [x] Update `README.md` with `GET /hello3` and `GET /hello3/health`.
- [x] Update `aidlc-docs/construction/node-express-api/code/code-summary.md` with the increment and extension compliance.

### Step 4: Build and Test

- [x] Run `npm test`.
- [x] Record test results in `aidlc-docs/audit.md`.

## Extension Compliance Plan

| Extension Rule | Expected Status | Rationale |
|---|---|---|
| HEALTH-01 | Compliant | Add `GET /hello3/health` for the new `/hello3` route group. |
| HEALTH-02 | Compliant | Use existing structured health response with `status`, `service`, and `timestamp`. |
| HEALTH-03 | Compliant | Keep health check lightweight, read-only, and bounded to an in-process route contract. |
| HEALTH-04 | Compliant | Add automated health endpoint tests. |
| HEALTH-05 | Compliant | Document health endpoint as public and non-sensitive. |
| Security Baseline | N/A | Disabled in `aidlc-state.md`. |
| PBT-02 | N/A | No inverse operation is introduced. |
| PBT-03 | N/A | No invariant-bearing transformation is introduced. |
| PBT-07 | N/A | No PBT generator is required. |
| PBT-08 | N/A | No PBT test is required. |
| PBT-09 | Compliant | No new PBT framework decision is needed. |
