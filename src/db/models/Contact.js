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
    photo: {
      type: String,
    },
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  },
  { versionKey: false, timeSteps: true },
);

const contactCollection = model('contact', contactShema);
export const sortFields = [
  'name',
  'phoneNumber',
  'email',
  'isFavourite',
  'contactType',
  'createdAt',
  'updatedAt',
];

export default contactCollection;
