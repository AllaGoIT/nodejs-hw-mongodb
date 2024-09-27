import contactCollection from '../db/models/Contact.js';
import calculatePaginationData from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getContacts = async ({
  perPage,
  page,
  sortBy = '_id',
  sortOrder = SORT_ORDER[0],
  filter = [],
}) => {
  const skip = (page - 1) * perPage;
  const contactsQuery = contactCollection.find();

  if (filter.contactType) {
    contactsQuery.where('contactType').equals(filter.contactType);
  }
  if (filter.isFavourite) {
    console.log(filter.isFavourite);
    contactsQuery.where('isFavourite').equals(filter.isFavourite);
  }

  if (filter.userId) {
    contactsQuery.where('userId').equals(filter.userId);
  }
  const contacts = await contactsQuery
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });

  const count = await contactCollection
    .find()
    .merge(contactsQuery)
    .countDocuments();
  const paginationData = calculatePaginationData({ count, perPage, page });
  return {
    perPage,
    page,
    contacts,
    totalItems: count,
    ...paginationData,
  };
};

export const getContact = async (filter) => {
  return await contactCollection.findById(filter);
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
