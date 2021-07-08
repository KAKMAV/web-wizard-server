import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import User from '../lib/models/User';

// const agent = request.agent(app);

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('signs up/creates user via .POST', async () => {
    const res = await request(app)
      .post('/api/v1/users/signup')
      .send({
        username: 'test',
        email: 'test@test.com',
        password: 'password'
      });

    expect(res.body).toEqual({
      id: '1',
      username: 'test',
      email: 'test@test.com',
      password: 'password'
    });

  });
});
