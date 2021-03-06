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
  })

  .get('/api/v1/settings/:id', async (req, res) => {
    try {
      const setting = await Setting.findById(req.params.id);
    
      res.send(setting);

    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .put('/api/v1/settings/:id', async (req, res) => {
    try {
      const setting = await Setting.update(req.body, req.params.id);
      res.send(setting);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .delete('/api/v1/settings/:id', async (req, res) => {
    try {
      const setting = await Setting.delete(req.params.id);
      res.send(setting);
    } catch (err) {
      res.status(500).send({ error: err.message });
  
    }
  });


