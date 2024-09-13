import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  postNewContactController,
  patchContactByIdController,
  delContactByIdController,
} from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrllWrapper.js';

import validateBody from '../utils/validateBody.js';
import { contactsShema } from '../validation/contacts.js';
import { contactsPatchShema } from '../validation/contacts.js';

const router = Router();

router.get('/', ctrlWrapper(getAllContactsController));

router.get('/:id', ctrlWrapper(getContactByIdController));

router.post(
  '/',
  validateBody(contactsShema),
  ctrlWrapper(postNewContactController),
);

router.patch(
  '/:id',
  validateBody(contactsPatchShema),
  ctrlWrapper(patchContactByIdController),
);

router.delete('/:id', ctrlWrapper(delContactByIdController));

export default router;
