import { Router } from 'express';
import UserController from './app/controllers/UserController';
import User from './app/models/User';

const route = Router();

route.post('/users', UserController.store);

route.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Douglas Morais Souza',
    email: 'douglas@uol.com.br',
    password_hash: '12345678',
  });

  return res.json(user);
});

export default route;
