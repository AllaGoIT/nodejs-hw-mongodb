import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from './utils/env.js';
import * as contactServises from './servises/contacts.js';

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
  app.get('/contacts', async (reg, res) => {
    const data = await contactServises.getAllContacts();
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data,
    });
  });

  app.get('/contacts/:id', async (reg, res) => {
    const { id } = reg.params;
    const data = await contactServises.getContactById(id);

    if (!data) {
      return res.status(404).json({
        message: `Contact with id=${id} not found`,
      });
    }
    res.json({
      status: 200,
      message: `Successfully found contact with ${id} {contactId}!`,
      data,
    });
  });

  //routes

  app.use((reg, res) => {
    res.status(404).json({
      massege: `${reg.url} not found`,
    });
  });
  app.use((error, res, reg, next) => {
    res.status(500).json({
      massege: error.massege,
    });
  });
  const port = Number(env('PORT', 3000));
  app.listen(port, () => console.log('Server is running on port 3000 {PORT}'));
};
