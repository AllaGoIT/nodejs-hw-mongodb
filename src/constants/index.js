import path from 'node:path';

export const SORT_ORDER = ['asc', 'desc'];
export const TEMPLATES_DIR = path.resolve('src', 'templates');
export const TEMP_UPLOAD_DIR = path.resolve('temp');
export const UPLOAD_DIR = path.resolve('upload');
export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');
