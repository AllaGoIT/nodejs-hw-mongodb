import createHttpError from 'http-errors';
import * as contactServises from '../servises/contacts.js';
import { conactsShema } from '../validation/contacts.js';

export const getAllContactsController = async (reg, res) => {
  const data = await contactServises.getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
};

export const getContactByIdController = async (reg, res) => {
  const { id } = reg.params;
  const data = await contactServises.getContactById(id);

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
  try {
    await conactsShema.validateAsync(reg.body, { abortEarly: false });
    console.log('Validation success');
  } catch (error) {
    console.log(error.massage);
  }
  // const data = await contactServises.postNewContact(reg.body);
  // res.status(201).json({
  //   status: 201,
  //   message: 'Successfully created a contact!',
  //   data,
  // });
};

export const patchContactByIdController = async (reg, res, next) => {
  const { id } = reg.params;
  const data = await contactServises.patchNewContact(id, reg.body);

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
  const data = await contactServises.deleteContactById(id);

  if (!data) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }
  res.status(204).send();
};
