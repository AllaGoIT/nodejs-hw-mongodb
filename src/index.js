import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';
import createIfNotExists from './utils/createDirIfNotExists.js';

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
  await createIfNotExists(TEMP_UPLOAD_DIR);
  await createIfNotExists(UPLOAD_DIR);
};
bootstrap();
