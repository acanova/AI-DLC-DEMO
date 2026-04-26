# Integration Test Instructions

## Purpose

This project has one service and no external dependencies, so separate cross-service integration tests are not applicable.

The generated route tests exercise the Express app through HTTP requests against an ephemeral local server. For this scope, those tests provide the relevant service integration coverage.

## Test Scenarios

### Scenario 1: HTTP Route Integration

- **Description**: Validate that the Express app registers and serves the `/hello` and `/hello/health` routes.
- **Setup**: Run `npm install`.
- **Test Steps**: Run `npm test`.
- **Expected Results**: All route tests pass.
- **Cleanup**: The test suite closes the ephemeral local server automatically.

## Run Integration-Equivalent Tests

```bash
npm test
```

## Cleanup

No manual cleanup is required.
