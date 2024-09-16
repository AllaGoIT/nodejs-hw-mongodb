import Joi from 'joi';
import { personelData } from '../constants/contacts.js';

export const contactsShema = Joi.object({
  name: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  email: Joi.string(),
  isFavorite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...personelData)
    .required(),
});

export const contactsPatchShema = Joi.object({
  name: Joi.string(),
  phoneNumber: Joi.string(),
  email: Joi.string(),
  isFavorite: Joi.boolean(),
  contactType: Joi.string().valid(...personelData),
});
