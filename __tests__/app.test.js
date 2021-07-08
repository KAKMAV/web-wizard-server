import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import User from '../lib/models/User.js';

// const agent = request.agent(app);

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

  it('finds users via Get', async () => {
   
    const spot = await User.insert({
      username: 'kirby',
      email: 'kirby@email.com',
      password: 'password'
    });
    const wilma = await User.insert({
      username: 'wilma',
      email: 'wilma@email.com',
      password: 'password'
    });
    const scooby = await User.insert({
      username: 'scooby',
      email: 'scooby@email.com',
      password: 'password'
    });

    const res = await request(app)
      .get('/api/v1/users');

    expect(res.body).toEqual([spot, wilma, scooby]);
  });
});





