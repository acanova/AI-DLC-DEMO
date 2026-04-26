# Performance Test Instructions

## Purpose

Formal performance testing is not required for the initial implementation because no explicit load, latency, throughput, or concurrency targets were defined.

## Performance Requirements

- Health endpoint execution must remain lightweight and bounded.
- Route handlers must avoid blocking I/O, expensive computation, and unbounded external calls.

## Optional Manual Smoke Check

Start the service:

```bash
npm start
```

Call the endpoints:

```bash
curl http://localhost:3000/hello
curl http://localhost:3000/hello/health
```

## Status

Performance testing is N/A for the current scope.
