import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from './utils/env.js';
import router from './routers/contacts.js';

export const setupServer = () => {
  const app = express();
  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });
  app.use(logger);
  app.use(cors());
  app.use(express.json());
  app.use('/contacts', router);

  //routes

  app.use((reg, res) => {
    res.status(404).json({
      massege: `${reg.url} not found`,
    });
  });
  app.use((error, res, reg, next) => {
    const { status = 500, massege } = error;
    res.status(status).json({
      massege,
    });
  });
  const port = Number(env('PORT', 3000));
  app.listen(port, () => console.log('Server is running on port 3000 {PORT}'));
};
