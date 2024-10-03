import multer from 'multer';
import { TEMP_UPLOAD_DIR } from '../constants/index.js';
import createHttpError from 'http-errors';

const storege = multer.diskStorage({
  //   destination: (reg, file, callback) => {
  //     callback(null, TEMP_UPLOAD_DIR);
  //   }, first method

  destination: TEMP_UPLOAD_DIR,
  filename: (reg, file, callback) => {
    const uniquePreffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniquePreffix}_${file.originalname}`;
    callback(null, filename);
  },
});

const limits = {
  fileSize: 1024 * 1024 * 5,
};

const fileFilter = (reg, file, callback) => {
  const extension = file.originalname.split('.').pop();
  if (extension === 'exe') {
    return callback(createHttpError(400, '.exe not valid extension'));
  }
  callback(null, true);
};

const upload = multer({
  storege,
  limits,
  fileFilter,
});

export default upload;
