import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

export const startServer = () => {
  const app = express();
  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });
  app.use(logger);
  app.use(cors());
  app.use(express.json());

  //routes

  app.use((reg, res) => {
    res.status(404).json({
      massege: `${reg.url} not found`,
    });
  });
  app.use((error, res, reg, next) => {
    res.status(500).json({massege.url});
  });
};
