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

export const registerController = async (reg, res) => {
  const newUser = await authServices.register(reg.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: newUser,
  });
};

export const loginController = async (reg, res) => {
  const session = await authServices.login(reg.body);
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

export const signoutController = async (reg, res) => {
  const { sessionId } = reg.cookies;
  if (sessionId) {
    await authServices.signout(sessionId);

    res.clearCookie('sessionId');
    res.clearCookie('refreshToken');
    res.status(204).send();
  }
};

export const sendResetEmailController = async (reg, res) => {
  await authServices.requestResetToken(reg.body.email);
  res.json({
    status: 200,
    message: 'Reset password email has been successfully sent.',
    data: {},
  });
};
