# Code Generation Plan - node-express-api

This plan is the single source of truth for Code Generation. Application code will be created in the workspace root, never inside `aidlc-docs/`.

## Unit Context

- **Unit name**: node-express-api
- **Project type**: Greenfield single unit
- **Workspace root**: /Users/canova/Downloads/git/AI-DLC-DEMO/ai-dlc_extensions_demo
- **Runtime**: Node.js with pure JavaScript and ECMAScript modules
- **Runtime dependency**: Express only
- **Routes**:
  - `GET /hello`
  - `GET /hello/health`
- **Dependencies on other units/services**: None
- **Database entities owned**: None
- **Service boundary**: HTTP API service

## Story and Requirement Traceability

- **FR-01**: Node.js Express Project
- **FR-02**: Hello API Route
- **FR-03**: Health Endpoint
- **NFR-01**: Dependency Scope
- **NFR-02**: Lightweight Health Checks
- **NFR-03**: Health Endpoint Exposure
- **NFR-04**: Testing Expectations

## Generation Steps

### Step 1: Project Structure Setup

- [x] Create root `package.json` with ESM configuration, scripts, and Express as the only runtime dependency.
- [x] Create root `.gitignore`.
- [x] Create `src/` and `tests/` directories.

### Step 2: API Layer Generation

- [x] Create `src/app.js` exporting the Express app.
- [x] Implement `GET /hello` returning exactly `{ "message": "Hello World!" }`.
- [x] Implement `GET /hello/health` returning a compliant health response with `status`, `service`, and `timestamp`.
- [x] Ensure health route is lightweight, read-only, and does not require a request body.

### Step 3: Server Startup Generation

- [x] Create `src/server.js` that imports the app and listens on `process.env.PORT || 3000`.
- [x] Keep startup separate from app creation so tests can import the app without binding a port.

### Step 4: API Layer Unit Testing

- [x] Create `tests/app.test.js` using Node's built-in test runner.
- [x] Test `GET /hello` returns HTTP 200.
- [x] Test `GET /hello` returns exactly `{ "message": "Hello World!" }`.
- [x] Test `GET /hello/health` returns HTTP 200.
- [x] Test `GET /hello/health` returns `status`, `service`, and ISO timestamp fields.
- [x] Test `GET /hello/health` works without a request body.

### Step 5: Documentation Generation

- [x] Create root `README.md` with install, run, and test instructions.
- [x] Document the API route contracts for `/hello` and `/hello/health`.

### Step 6: Business Logic Summary

- [x] Create `aidlc-docs/construction/node-express-api/code/code-summary.md`.
- [x] Summarize generated files, route behavior, dependency decisions, and extension compliance.

### Step 7: Generation Verification

- [x] Verify no application code was written inside `aidlc-docs/`.
- [x] Verify Express is the only runtime dependency in `package.json`.
- [x] Verify no PBT-applicable helper was introduced; if one is introduced, add `fast-check` as a development dependency and corresponding PBT coverage.
- [x] Verify all generation steps are marked complete.

## Extension Compliance Targets

| Extension Rule | Generation Target |
|---|---|
| HEALTH-01 | Generate `GET /hello/health`. |
| HEALTH-02 | Include `status`, `service`, and `timestamp` in health response. |
| HEALTH-03 | Keep health handler lightweight and bounded. |
| HEALTH-04 | Generate automated health endpoint tests. |
| HEALTH-05 | Keep public health response non-sensitive. |
| PBT-02 | N/A unless inverse operations are introduced. |
| PBT-03 | N/A unless invariant-bearing helpers are introduced. |
| PBT-07 | N/A unless PBT tests are added. |
| PBT-08 | N/A unless PBT tests are added. |
| PBT-09 | `fast-check` selected if PBT-applicable code is introduced. |
