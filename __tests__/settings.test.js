import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Setting from '../lib/models/Setting.js';

describe('setting routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a setting via POST', async () => {
    const res = await request(app)
      .post('/api/v1/settings')
      .send({
        userId: 'admin',
        pageUrl: 'admin.com',
        backgroundColor: 'teal',
        elementColor: 'orange', 
        fontFamily: 'times new roman',
        fontSize:'12',
        elementSize: '12',
      });

    expect(res.body).toEqual({
      id: '1',
      userId: 'admin',
      pageUrl: 'admin.com',
      backgroundColor: 'teal',
      elementColor: 'orange', 
      fontFamily: 'times new roman',
      fontSize:'12',
      elementSize: '12',
    });
  });
});
