const express = require('express');
const supertest = require('supertest');
const router = require('../routes/healthcheck'); // Reemplaza con la ubicación real de tus rutas
const app = express();
app.use('/', router);
const request = supertest(app);

describe('Rutas', () => {
  it('Debería responder con el mensaje correcto', async () => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('ok');
  });
});
