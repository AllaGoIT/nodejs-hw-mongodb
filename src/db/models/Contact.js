import { Schema, model } from 'mongoose';
import { personelData } from '../../constants/contacts.js';

const contactShema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: String,
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: personelData,
      required: true,
      default: 'personal',
    },
  },
  { versionKey: false, timeSteps: true },
);

const contactCollection = model('contact', contactShema);

export default contactCollection;
