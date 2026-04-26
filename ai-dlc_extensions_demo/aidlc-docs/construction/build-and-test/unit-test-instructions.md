# Unit Test Execution

## Run Unit Tests

### 1. Execute All Unit Tests

```bash
npm test
```

### 2. Review Test Results

- **Expected**: 3 tests pass, 0 failures.
- **Test Coverage**: Coverage reporting is not configured for this small service.
- **Test Report Location**: Console output from Node.js built-in test runner.

### 3. Fix Failing Tests

If tests fail:

1. Review the failing test name and assertion output.
2. Fix the relevant file in `src/` or `tests/`.
3. Rerun `npm test` until all tests pass.

## Covered Behavior

- `GET /hello` returns HTTP 200.
- `GET /hello` returns exactly `{ "message": "Hello World!" }`.
- `GET /hello/health` returns HTTP 200.
- `GET /hello/health` returns `status`, `service`, and ISO timestamp fields.
- `GET /hello/health` does not require a request body.
