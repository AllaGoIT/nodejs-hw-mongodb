import { Router } from 'express';
import ctrWrapper from '../utils/ctrllWrapper.js';
import validateBody from '../utils/validateBody.js';
import { userSignupSchema } from '../validation/users.js';
import * as authController from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/signup',
  validateBody(userSignupSchema),
  ctrWrapper(authController.signUpController),
);
export default authRouter;
