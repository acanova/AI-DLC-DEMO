# AI-DLC Extensions Demo

Minimal Node.js Express API generated with AI-DLC.

## Requirements

- Node.js 20 or newer

## Install

```sh
npm install
```

## Run

```sh
npm start
```

The server listens on `PORT` when set, otherwise `3000`.

## Test

```sh
npm test
```

## API

### `GET /hello`

Returns:

```json
{
  "message": "Hello World!"
}
```

### `GET /hello2`

Returns:

```json
{
  "message": "Hello World 2!"
}
```

### `GET /hello3`

Returns:

```json
{
  "message": "Hello World 3!"
}
```

### `GET /hello/health`

Returns public, non-sensitive liveness status for the `hello` route group.

Example response:

```json
{
  "status": "ok",
  "service": "hello",
  "timestamp": "2026-04-26T21:20:28.000Z",
  "checks": {
    "endpoint": {
      "status": "ok",
      "method": "GET",
      "path": "/hello"
    }
  }
}
```

### `GET /hello3/health`

Returns public, non-sensitive liveness status for the `hello3` route group and checks the `/hello3` endpoint contract.

Example response:

```json
{
  "status": "ok",
  "service": "hello3",
  "timestamp": "2026-04-26T21:47:00.000Z",
  "checks": {
    "endpoint": {
      "status": "ok",
      "method": "GET",
      "path": "/hello3"
    }
  }
}
```

### `GET /hello2/health`

Returns public, non-sensitive liveness status for the `hello2` route group and checks the `/hello2` endpoint contract.

Example response:

```json
{
  "status": "ok",
  "service": "hello2",
  "timestamp": "2026-04-26T21:40:54.000Z",
  "checks": {
    "endpoint": {
      "status": "ok",
      "method": "GET",
      "path": "/hello2"
    }
  }
}
```
