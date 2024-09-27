import express from 'express';
import cors from 'cors';
import { env } from './utils/env.js';
import router from './routers/contacts.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';
import loggerHandler from './middlewares/loggerHandler.js';
import authRouter from './routers/auth.js';
import cookieParser from 'cookie-parser';

export const setupServer = () => {
  const app = express();
  app.use(loggerHandler);
  app.use(cors());
  app.use(express.json());
  app.use('/contacts', router);
  app.use('/auth', authRouter);
  app.use(cookieParser());

  //routes

  app.use(notFoundHandler);
  app.use(errorHandler);
  const port = Number(env('PORT', 3000));
  app.listen(port, () => console.log('Server is running on port 3000 {PORT}'));
};
