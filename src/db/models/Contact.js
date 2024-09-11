import { Schema, model } from 'mongoose';

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
      enum: ['work', 'home', 'personel'],
      required: true,
      default: 'personal',
    },
  },
  { versionKey: false, timeSteps: true },
);

const contactCollection = model('contact', contactShema);

export default contactCollection;
