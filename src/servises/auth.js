import createHttpError from 'http-errors';
import userCollection from '../db/models/User.js';
import SessionCollection from '../db/models/Session.js';
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';

import {
  accessTokenLifeTime,
  refreshTokenLifeTime,
} from '../constants/users.js';

const createSession = () => {
  const accessToken = randomBytes(30).toString('base64');
  const refreshToken = randomBytes(30).toString('base64');
  const accessTokenValidUntil = new Date(Date.now() + accessTokenLifeTime);
  const refreshTokenValidUntil = new Date(Date.now() + refreshTokenLifeTime);

  return {
    accessToken,
    refreshToken,
    accessTokenValidUntil,
    refreshTokenValidUntil,
  };
};

export const register = async (payload) => {
  const { email, password } = payload;
  const user = await userCollection.findOne({ email });
  if (user) {
    throw createHttpError(409, 'Email in use');
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const data = await userCollection.create({
    ...payload,
    password: hashPassword,
  });
  delete data._doc.password;
  return data._doc;
};

export const login = async (payload) => {
  const { email, password } = payload;
  const user = await userCollection.findOne({ email });
  if (!user) {
    throw createHttpError(401, 'Error or password invalid');
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw createHttpError(401, 'Error or password invalid');
  }
  await SessionCollection.deleteOne({ userId: user._id });

  const newSession = createSession();

  const userSession = await SessionCollection.create({
    userId: user._id,
    ...newSession,
  });
  return userSession;
};

export const findSessionByAccessToken = (accessToken) =>
  SessionCollection.findOne({ accessToken });

export const refreshSession = async ({ refreshToken, sessionId }) => {
  const oldSession = await SessionCollection.findOne({
    _id: sessionId,
    refreshToken,
  });

  if (!oldSession) {
    throw createHttpError(401, 'Old session is not found');
  }
  if (new Date() > oldSession.refreshTokenValidUntil) {
    throw createHttpError(401, 'Session token expired');
  }
  await SessionCollection.deleteOne({ _id: sessionId });
  const sessionData = createSession();

  const userSession = await SessionCollection.create({
    userId: oldSession._id,
    ...sessionData,
  });
  return userSession;
};

export const signout = async (sessionId) => {
  await SessionCollection.deleteOne({ _id: sessionId });
};

export const findUser = (filter) => SessionCollection.findOne(filter);
