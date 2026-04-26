# Build and Test Summary

## Build Status

- **Build Tool**: npm
- **Build Status**: Success
- **Build Artifacts**: `package-lock.json`, `node_modules/`
- **Build Time**: Less than 1 second in the latest verification run
- **Dependency Audit**: 0 vulnerabilities reported

## Test Execution Summary

### Unit Tests

- **Total Tests**: 3
- **Passed**: 3
- **Failed**: 0
- **Coverage**: Not configured
- **Status**: Pass

### Integration Tests

- **Test Scenarios**: 1 integration-equivalent HTTP route scenario through the generated route tests
- **Passed**: 1
- **Failed**: 0
- **Status**: Pass

### Performance Tests

- **Response Time**: No explicit target defined
- **Throughput**: No explicit target defined
- **Error Rate**: 0 test failures
- **Status**: N/A

### Additional Tests

- **Contract Tests**: N/A
- **Security Tests**: N/A because Security Baseline was disabled by user opt-out
- **E2E Tests**: N/A
- **Property-Based Tests**: N/A because no PBT-applicable operation was introduced

## Latest Commands Run

```bash
npm install
npm test
```

## Overall Status

- **Build**: Success
- **All Tests**: Pass
- **Ready for Operations**: Yes

## Extension Compliance Summary

| Extension Rule | Status | Rationale |
|---|---|---|
| HEALTH-04 | Compliant | Health endpoint tests are included in `tests/app.test.js` and pass. |
| Security Baseline | N/A | Disabled by user opt-out. |
| PBT-08 | N/A | No PBT tests are required because no PBT-applicable operation was introduced. |
