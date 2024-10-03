import Joi from 'joi';
import { emailRegexp } from '../constants/users.js';
export const userRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

export const loginShema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

export const requestResetEmailShema = Joi.object({
  email: Joi.string().required(),
});

export const resetPasswordShema = Joi.object({
  password: Joi.string().required(),
  token: Joi.string().required(),
});
