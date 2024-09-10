import dotenv from 'dotenv';

dotenv.config();

// const port = Number(process.env.PORT) || 3000;

export const env = (name, defaultValue) => {
  const value = process.env[name];
  if (value) return value;
  if (defaultValue) return defaultValue;
  throw new Error(process.env[`Missing process.env ${name}`]);
};
