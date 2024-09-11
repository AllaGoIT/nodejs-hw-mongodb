import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  postNewContactController,
} from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrllWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getAllContactsController));

router.get('/:id', ctrlWrapper(getContactByIdController));

router.post('/', ctrlWrapper(postNewContactController));

export default router;
