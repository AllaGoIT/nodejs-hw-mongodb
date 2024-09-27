import { Router } from 'express';
import ctrWrapper from '../utils/ctrllWrapper.js';
import validateBody from '../utils/validateBody.js';
import { userSignupSchema, userSigninShema } from '../validation/users.js';
import * as authController from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/signup',
  validateBody(userSignupSchema),
  ctrWrapper(authController.signUpController),
);

authRouter.post(
  '/signin',
  validateBody(userSigninShema),
  ctrWrapper(authController.singInController),
);

authRouter.post('/refresh', ctrWrapper(authController.refreshController));
authRouter.post('/signout', ctrWrapper(authController.signoutController));
export default authRouter;
