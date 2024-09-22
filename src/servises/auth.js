import userCollection from '../db/models/User.js';

export const signup = async (payload) => {
  const { password, ...data } = await userCollection.create(payload);

  return data;
};
