import { Router } from 'express';
import Setting from '../models/Setting';

export default Router()
  .post('/api/v1/settings', async (req, res) => {
    try {
      const setting = await Setting.insert(req.body);
      res.send(setting);

    } catch(err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/v1/settings', async (req, res) => {
    try {
      const settings = await Setting.findAll();
      res.send(settings);

    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
