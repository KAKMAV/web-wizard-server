import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import User from '../lib/models/User.js';

const agent = request.agent(app);

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('signs up a user via POST', async () => {
    const res = await request(app)
      .post('/api/v1/users/signup')
      .send({
        // id: '1',
        username: 'Angel',
        email: 'angel@test.com',
        password: 'password'
      });

    expect(res.body).toEqual({
      id: '1',
      username: 'Angel',
      email: 'angel@test.com',
      password: 'password'

    });
  });
});
