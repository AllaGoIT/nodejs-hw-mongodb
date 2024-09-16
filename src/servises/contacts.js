import contactCollection from '../db/models/Contact.js';

export const getContacts = async ({ perPage, page }) => {
  const skip = (page - 1) * perPage;
  return await contactCollection.find().skip(skip).limit(perPage);
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
