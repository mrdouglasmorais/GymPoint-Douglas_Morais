import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionsController from './app/controllers/SessionController';
import AuthHeader from './app/middleware/auth';

const route = new Router();

route.post('/users', UserController.store);
route.post('/sessions', SessionsController.store);

route.use(AuthHeader);
route.put('/users', UserController.update);

export default route;
