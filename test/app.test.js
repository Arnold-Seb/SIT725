// test/app.test.js
const request = require('supertest');
const { expect } = require('chai');
const app = require('../app'); // no DB connection here

describe('SIT725 App (static & health)', () => {
  it('GET /health -> 200 + JSON {status:"ok"}', async () => {
    const res = await request(app).get('/health');
    expect(res.status).to.equal(200);
    expect(res.headers['content-type']).to.match(/application\/json/);
    expect(res.body).to.deep.equal({ status: 'ok' });
  });

  it('GET / serves index.html (status 200)', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.headers['content-type']).to.match(/text\/html/);
  });

  it('GET /totally-unknown -> 404 or SPA-fallback 200', async () => {
    const res = await request(app).get('/totally-unknown');
    // If you ever add SPA fallback to index.html, this won’t fail.
    expect([404, 200]).to.include(res.status);
  });
});
