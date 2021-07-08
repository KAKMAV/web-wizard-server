import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

const agent = request.agent(app);

//   we will want all CRUD routes in the settings model

describe('Routes to adjust user settings in chrome extention', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('posts a setting for the user, via .POST', async () => {
    const res = await request(app)
      .post('/api/v1/settings')
      .send({
        userId: 'admin',
        pageUrl: 'mySettings.com',
        backgroundColor: 'teal',
        elementColor: 'orange',
        fontFamily: 'courier',
        fontSize: '12',
        elementSize: '7'
      });

    expect(res.body).toEqual({
      id: '1',
      userId: 'admin',
      pageUrl: 'mySettings.com',
      backgroundColor: 'teal',
      elementColor: 'orange',
      fontFamily: 'courier',
      fontSize: '12',
      elementSize: '7'
    });
  });



});
