import { Router } from 'express';
import * as contactServises from './servises/contacts.js';
const router = Router();

router.get('/', async (reg, res) => {
  const data = await contactServises.getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
});

router.get('/:id', async (reg, res) => {
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
});

export default router;
