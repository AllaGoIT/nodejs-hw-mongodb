import contactCollection from '../db/models/Contact.js';
import calculatePaginationData from '../utils/calculatePaginationData.js';

export const getContacts = async ({ perPage, page }) => {
  const skip = (page - 1) * perPage;
  const contacts = await contactCollection.find().skip(skip).limit(perPage);
  const count = await contactCollection.find().countDocuments();
  const paginationData = calculatePaginationData({ count, perPage, page });
  return {
    perPage,
    page,
    contacts,
    totalItems: count,
    ...paginationData,
  };
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
