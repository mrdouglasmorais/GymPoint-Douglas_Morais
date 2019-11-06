import express from 'express';
import route from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();

    this.route();
  }

  middlewares() {
    this.server.use(express.json());
  }

  route() {
    this.server.use(route);
  }
}

export default new App().server;
