import userCollection from '../db/models/User.js';

export const signup = async (payload) => {
  const data = await userCollection.create(payload);
  delete data._doc.password;
  return data._doc;
};
