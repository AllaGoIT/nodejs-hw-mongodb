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
import { conactsShema } from '../validation/contacts.js';

const router = Router();

router.get('/', ctrlWrapper(getAllContactsController));

router.get('/:id', ctrlWrapper(getContactByIdController));

router.post(
  '/',
  validateBody(conactsShema),
  ctrlWrapper(postNewContactController),
);

router.patch(
  '/:id',
  validateBody(conactsShema),
  ctrlWrapper(patchContactByIdController),
);

router.delete('/:id', ctrlWrapper(delContactByIdController));

export default router;
