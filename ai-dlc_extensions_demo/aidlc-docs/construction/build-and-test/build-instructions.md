# Build Instructions

## Prerequisites

- **Build Tool**: npm with Node.js 20 or newer
- **Dependencies**: Express runtime package from `package.json`
- **Environment Variables**: None required for build or test
- **System Requirements**: Local shell with Node.js and npm installed

## Build Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

No build-time environment configuration is required.

Optional runtime configuration:

```bash
export PORT=3000
```

### 3. Build All Units

No compile or bundle step is required. This project uses pure JavaScript and runs directly on Node.js.

### 4. Verify Build Success

- **Expected Output**: `npm install` completes successfully and reports 0 vulnerabilities.
- **Build Artifacts**: `node_modules/` and `package-lock.json`
- **Common Warnings**: npm funding notices are acceptable.

## Troubleshooting

### Build Fails with Dependency Errors

- **Cause**: npm registry, lockfile, or local Node/npm installation issue.
- **Solution**: Confirm network access, confirm Node.js 20 or newer, then rerun `npm install`.

### Build Fails with Runtime Compatibility Errors

- **Cause**: Node.js version does not support the APIs used by the tests.
- **Solution**: Upgrade to Node.js 20 or newer and rerun `npm install`.
