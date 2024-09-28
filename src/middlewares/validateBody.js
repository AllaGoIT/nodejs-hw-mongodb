import createHttpError from 'http-errors';
import * as authServices from '../servises/auth.js';

export const validateBody = async (reg, res, next) => {
  const user = reg.user;
  if (!user) {
    return next(createHttpError(404, 'User not found!'));
  }
  const send = authServices.requestResetToken(reg.body.email);

  if (!send) {
    return next(
      createHttpError(500, 'Failed to send the email, please try again later.'),
    );
  }
  const token = reg.resetToken;
  const session = authServices.findSessionByAccessToken(token);

  if (new Date() > session.accessTokenValidUntil) {
    return next(createHttpError(401, 'Token is expired or invalid.'));
  }
};
