import createHttpError from 'http-errors';
import swaggerUI from 'swagger-ui-express';
import fs from 'node:fs';
import { SWAGGER_PATH } from '../constants/index.js';

const swaggerDocs = () => {
  try {
    const swaggerContent = fs.readFileSync(SWAGGER_PATH, 'utf-8');
    const swaggerData = JSON.parse(swaggerContent);
    return [...swaggerUI.serve, ...swaggerUI.setup(swaggerData)];
  } catch {
    return (req, res, next) =>
      next(createHttpError(500, "Can't load swagger docs"));
  }
};

export default swaggerDocs;
