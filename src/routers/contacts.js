import { Router } from 'express';
import * as getContactsController from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrllWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getContactsController.getAllContactsController));

router.get('/:id', ctrlWrapper(getContactsController.getContactByIdController));

export default router;
