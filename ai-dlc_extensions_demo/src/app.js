import express from 'express';

const app = express();

const helloPayload = () => ({ message: 'Hello World!' });
const hello2Payload = () => ({ message: 'Hello World 2!' });
const hello3Payload = () => ({ message: 'Hello World 3!' });

const createHealthPayload = ({ service, endpoint, expectedMessage, payload }) => ({
  status: payload.message === expectedMessage ? 'ok' : 'unhealthy',
  service,
  timestamp: new Date().toISOString(),
  checks: {
    endpoint: {
      status: payload.message === expectedMessage ? 'ok' : 'unhealthy',
      method: 'GET',
      path: endpoint
    }
  }
});

app.get('/hello', (_req, res) => {
  res.json(helloPayload());
});

app.get('/hello2', (_req, res) => {
  res.json(hello2Payload());
});

app.get('/hello3', (_req, res) => {
  res.json(hello3Payload());
});

app.get('/hello/health', (_req, res) => {
  const payload = helloPayload();

  res
    .status(payload.message === 'Hello World!' ? 200 : 503)
    .json(createHealthPayload({
      service: 'hello',
      endpoint: '/hello',
      expectedMessage: 'Hello World!',
      payload
    }));
});

app.get('/hello2/health', (_req, res) => {
  const payload = hello2Payload();

  res
    .status(payload.message === 'Hello World 2!' ? 200 : 503)
    .json(createHealthPayload({
      service: 'hello2',
      endpoint: '/hello2',
      expectedMessage: 'Hello World 2!',
      payload
    }));
});

app.get('/hello3/health', (_req, res) => {
  const payload = hello3Payload();

  res
    .status(payload.message === 'Hello World 3!' ? 200 : 503)
    .json(createHealthPayload({
      service: 'hello3',
      endpoint: '/hello3',
      expectedMessage: 'Hello World 3!',
      payload
    }));
});

export default app;
