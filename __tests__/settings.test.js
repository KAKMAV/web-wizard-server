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

  it('finds all settngs via GET', async () => {
    const calvin = await Setting.insert({
      userId: 'calvin',
      pageUrl: 'calvin.com',
      backgroundColor: 'green',
      elementColor: 'blue',
      fontFamily: 'cursive',
      fontSize: '14',
      elementSize: '45'
    });

    const scarlet = await Setting.insert({
      userId: 'scarlet',
      pageUrl: 'scarlet.com',
      backgroundColor: 'pink',
      elementColor: 'purple',
      fontFamily: 'times new roman',
      fontSize: '12',
      elementSize: '30'

    });

    const matt = await Setting.insert({
      userId: 'matt',
      pageUrl: 'matt.com',
      backgroundColor: 'turquoise',
      elementColor: 'yellow',
      fontFamily: 'sans sarif',
      fontSize: '11',
      elementSize: '75'
    });

    const res = await request(app)
      .get('/api/v1/settings');

    expect(res.body).toEqual([calvin, scarlet, matt]);
  });

  it('fid a setting via Get id', async () => {
    const setting = await Setting.insert({
      userId: 'kalan',
      pageUrl: 'kalan.com',
      backgroundColor: 'red',
      elementColor: 'pink',
      fontFamily: 'cursive',
      fontSize: '12',
      elementSize: '30'
    });

    const res = await request(app)
      .get(`/api/v1/settings/${setting.id}`);

    expect(res.body).toEqual(setting);
  });
});
