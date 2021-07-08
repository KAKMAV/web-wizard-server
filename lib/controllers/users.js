import { Router } from 'express';
import User from '../models/User.js';




export default Router()

  .post('/api/v1/users/signup', async (req, res) => {
    try {
      const user = await User.insert(req.body);
      res.send(user);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
