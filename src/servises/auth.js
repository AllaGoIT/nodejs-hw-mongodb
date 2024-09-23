import createHttpError from 'http-errors';
import userCollection from '../db/models/User.js';

export const signup = async (payload) => {
  const { email } = payload;
  const user = await userCollection.findOne({ email });
  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  const data = await userCollection.create(payload);
  delete data._doc.password;
  return data._doc;
};
