import * as contactServises from '../servises/contacts.js';

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
