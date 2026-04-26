import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';

import app from '../src/app.js';

let server;
let baseUrl;

before(async () => {
  server = app.listen(0);
  await new Promise((resolve) => server.once('listening', resolve));

  const { port } = server.address();
  baseUrl = `http://127.0.0.1:${port}`;
});

after(async () => {
  if (!server) {
    return;
  }

  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
});

describe('GET /hello', () => {
  it('returns HTTP 200 with the exact hello payload', async () => {
    const response = await fetch(`${baseUrl}/hello`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.deepEqual(body, { message: 'Hello World!' });
  });
});

describe('GET /hello2', () => {
  it('returns HTTP 200 with the exact hello2 payload', async () => {
    const response = await fetch(`${baseUrl}/hello2`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.deepEqual(body, { message: 'Hello World 2!' });
  });
});

describe('GET /hello3', () => {
  it('returns HTTP 200 with the exact hello3 payload', async () => {
    const response = await fetch(`${baseUrl}/hello3`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.deepEqual(body, { message: 'Hello World 3!' });
  });
});

describe('GET /hello/health', () => {
  it('returns HTTP 200 with a compliant health payload', async () => {
    const response = await fetch(`${baseUrl}/hello/health`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.status, 'ok');
    assert.equal(body.service, 'hello');
    assert.match(body.timestamp, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
    assert.deepEqual(body.checks.endpoint, {
      status: 'ok',
      method: 'GET',
      path: '/hello'
    });
    assert.ok(!('credentials' in body));
    assert.ok(!('stack' in body));
  });

  it('does not require a request body', async () => {
    const response = await fetch(`${baseUrl}/hello/health`, {
      method: 'GET'
    });

    assert.equal(response.status, 200);
  });
});

describe('GET /hello3/health', () => {
  it('returns HTTP 200 with a compliant health payload tied to /hello3', async () => {
    const response = await fetch(`${baseUrl}/hello3/health`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.status, 'ok');
    assert.equal(body.service, 'hello3');
    assert.match(body.timestamp, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
    assert.deepEqual(body.checks.endpoint, {
      status: 'ok',
      method: 'GET',
      path: '/hello3'
    });
    assert.ok(!('credentials' in body));
    assert.ok(!('stack' in body));
  });

  it('does not require a request body', async () => {
    const response = await fetch(`${baseUrl}/hello3/health`, {
      method: 'GET'
    });

    assert.equal(response.status, 200);
  });
});

describe('GET /hello2/health', () => {
  it('returns HTTP 200 with a compliant health payload tied to /hello2', async () => {
    const response = await fetch(`${baseUrl}/hello2/health`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.status, 'ok');
    assert.equal(body.service, 'hello2');
    assert.match(body.timestamp, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
    assert.deepEqual(body.checks.endpoint, {
      status: 'ok',
      method: 'GET',
      path: '/hello2'
    });
    assert.ok(!('credentials' in body));
    assert.ok(!('stack' in body));
  });

  it('does not require a request body', async () => {
    const response = await fetch(`${baseUrl}/hello2/health`, {
      method: 'GET'
    });

    assert.equal(response.status, 200);
  });
});
