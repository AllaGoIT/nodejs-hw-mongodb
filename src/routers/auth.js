import { Router } from 'express';
import ctrWrapper from '../utils/ctrllWrapper.js';
import validateBody from '../utils/validateBody.js';
import {
  userRegisterSchema,
  loginShema,
  requestResetEmailShema,
} from '../validation/users.js';
import * as authController from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(userRegisterSchema),
  ctrWrapper(authController.registerController),
);

authRouter.post(
  '/login',
  validateBody(loginShema),
  ctrWrapper(authController.loginController),
);

authRouter.post('/refresh', ctrWrapper(authController.refreshController));
authRouter.post('/signout', ctrWrapper(authController.signoutController));
authRouter.post(
  '/send-reset-email',
  validateBody(requestResetEmailShema),
  ctrWrapper(authController.sendResetEmailController),
);
export default authRouter;
