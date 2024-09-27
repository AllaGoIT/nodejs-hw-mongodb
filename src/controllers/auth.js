import * as authServices from '../servises/auth.js';

export const setupSession = (res, session) => {
  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expire: new Date(Date() + session.refreshTokenValidUntil),
  });

  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expire: new Date(Date() + session.refreshTokenValidUntil),
  });
  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};

export const signUpController = async (reg, res) => {
  const newUser = await authServices.signup(reg.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: newUser,
  });
};

export const singInController = async (reg, res) => {
  const session = await authServices.signin(reg.body);
  setupSession(res, session);
  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};

export const refreshController = async (reg, res) => {
  const { refreshToken, sessionId } = reg.cookies;
  const session = await authServices.refreshSession({
    refreshToken,
    sessionId,
  });
  console.log(session);
  setupSession(res, session);
  res.json({
    status: 200,
    message: 'Successfully refresh session',
    data: {
      accessToken: session.accessToken,
    },
  });
};

export const singoutController = async (reg, res) => {
  const { sessionId } = reg.cookies;
  if (sessionId) {
    await authServices.signout(sessionId);

    res.clearCookie('sessionId');
    res.clearCookie('refreshToken');
    res.status(204).send();
  }
};
