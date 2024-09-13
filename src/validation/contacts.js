import Joi from 'joi';
import { personelData } from '../constants/contacts.js';

export const contactsShema = Joi.object({
  name: Joi.string().required(),
  phonenumber: Joi.string().required(),
  email: Joi.string(),
  isFavorite: Joi.boolean(),
  contantType: Joi.string()
    .valid(...personelData)
    .required(),
});

export const contactsPatchShema = Joi.object({
  name: Joi.string(),
  phonenumber: Joi.string(),
  email: Joi.string(),
  isFavorite: Joi.boolean(),
  contantType: Joi.string().valid(...personelData),
});
