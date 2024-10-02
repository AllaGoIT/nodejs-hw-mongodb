import createHttpError from 'http-errors';
import * as contactServises from '../servises/contacts.js';
import parsePaginationParams from '../utils/parsePaginationParams.js';
import parseSortParams from '../utils/parseSortParams.js';
import { sortFields } from '../db/models/Contact.js';
import parseContactsFilterParamas from '../utils/filters/parseContactsFilterParams.js';
import saveFileToCloudinary from '../utils/saveFileToCloudinary.js';
import { env } from '../utils/env.js';

const enableCloudinary = env('ENABLE_CLOUDINARY');

export const getAllContactsController = async (reg, res) => {
  const { perPage, page } = parsePaginationParams(reg.query);
  const { sortBy, sortQuery } = parseSortParams({ ...reg.query, sortFields });

  const filter = parseContactsFilterParamas(reg.query);
  const { _id: userId } = reg.user;

  const data = await contactServises.getContacts({
    perPage,
    page,
    sortBy,
    sortQuery,
    filter: { ...filter, userId },
  });
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
    filter,
  });
};

export const getContactByIdController = async (reg, res) => {
  const { id } = reg.params;
  const { _id: userId } = reg.user;
  const data = await contactServises.getContact({ id, userId });
  if (!data) {
    return res.status(404).json({
      message: `Contact with id=${id} not found`,
    });
  }
  res.json({
    status: 200,
    message: `Successfully found contact with ${id} {contactId}!`,
    data,
  });
};

export const postNewContactController = async (reg, res) => {
  console.log(reg.body);
  console.log(reg.file);
  // let poster;

  // if (reg.file) {
  //   if (enableCloudinary === 'true') {
  //     poster = await saveFileToCloudinary(reg.file, 'posters');
  //   } else {
  //     await saveFileToUploadDir(reg.file);
  //   }
  // }
  // const { _id: userId } = reg.user;

  // const data = await contactServises.postNewContact({ ...reg.body, userId });
  // res.status(201).json({
  //   status: 201,
  //   message: 'Successfully created a contact!',
  //   data,
  // });
};

export const patchContactByIdController = async (reg, res, next) => {
  const { id } = reg.params;
  const { _id: userId } = reg.user;
  const data = await contactServises.patchNewContact({ id, userId }, reg.body);

  if (!data) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }
  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data,
  });
};

export const delContactByIdController = async (reg, res, next) => {
  const { id } = reg.params;
  const { _id: userId } = reg.user;
  const data = await contactServises.deleteContactById(id, userId);

  if (!data) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }
  res.status(204).send();
};
