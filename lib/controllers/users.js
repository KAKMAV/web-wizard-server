import { Router } from 'express';
import User from '../models/User.js';

export default Router()
  .post('/api/v1/users/signup',  async (req, res) => {
    // console.log(req.body);
    try {
      const user = await User.insert(req.body);
      res.send(user);

    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/v1/users', async (req, res) => {
    try {
      const users = await User.findAll();
      res.send(users);

    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

 

  .get('/api/v1/users', async (req, res) => {
    try {
      const users = await User.findAll();
      res.send(users);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
