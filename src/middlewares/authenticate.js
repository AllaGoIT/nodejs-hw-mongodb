import createHttpError from 'http-errors';
import * as authSession from '../servises/auth.js';

const authenticate = async (reg, res, next) => {
  const authorization = reg.get('Authorization');

  if (!authorization) {
    return next(createHttpError(401, 'Authorization header is not found'));
  }
  const [bearer, token] = authorization.split(' ');
  console.log(token);
  if (bearer !== 'Bearer') {
    return next(
      createHttpError(401, 'Authorization header must have Bearer type'),
    );
  }
  const session = await authSession.findSessionByAccessToken(token);

  if (!session) {
    return next(createHttpError(401, 'Session is not found'));
  }
  if (new Date() > session.accessTokenValidUntil) {
    return next(createHttpError(401, 'Access Token is expired'));
  }
  const user = await authSession.findUser({ _id: session.userId });
  if (!user) {
    return next(createHttpError(401, 'User is not found'));
  }
  reg.user = user;
  next();
};

export default authenticate;
