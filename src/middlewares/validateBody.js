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
};
