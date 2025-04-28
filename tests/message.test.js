const request = require('supertest');
const app = require('../app');
let token;

beforeAll(async () => {
  // Login and get token first
  const loginRes = await request(app)
    .post('/api/auth/login')
    .send({ email: process.env.TEST_USER_EMAIL, password: process.env.TEST_USER_PASSWORD });
  token = loginRes.body.token;
});

describe('Message Endpoints', () => {
  it('should fetch chat history', async () => {
    const res = await request(app)
      .get('/api/messages/history')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should send a message', async () => {
    const res = await request(app)
      .post('/api/messages/send')
      .set('Authorization', `Bearer ${token}`)
      .send({ sender: 'User', content: 'Hello AI!' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('userMessage');
    expect(res.body).toHaveProperty('aiMessage');
  });
});