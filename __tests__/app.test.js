import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import supertest from 'supertest';
import app from '../lib/app.js';

const request = supertest(app);

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('is a dummy test', () => {
    expect('').toEqual('');
  });
});
