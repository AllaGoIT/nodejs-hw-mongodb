import contactCollection from '../db/models/Contact.js';

export const getAllContacts = async () => {
  return await contactCollection.find();
};

export const getContactById = async (id) => {
  return await contactCollection.findById(id);
};

export const postNewContact = async (payload) => {
  return await contactCollection.create(payload);
};

export const patchNewContact = async (id, payload) => {
  return await contactCollection.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
};

export const deleteContactById = async (id) => {
  return await contactCollection.findOneAndDelete({ _id: id });
};
