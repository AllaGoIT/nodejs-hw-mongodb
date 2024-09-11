import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  postNewContactController,
  patchContactByIdController,
  delContactByIdController,
} from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrllWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getAllContactsController));

router.get('/:id', ctrlWrapper(getContactByIdController));

router.post('/', ctrlWrapper(postNewContactController));

router.patch('/:id', ctrlWrapper(patchContactByIdController));

router.delete('/:id', ctrlWrapper(delContactByIdController));

export default router;
