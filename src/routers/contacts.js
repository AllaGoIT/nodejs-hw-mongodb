import { Router } from 'express';
import * as getContactsController from '../controllers/contacts.js';

const router = Router();

router.get('/', getContactsController.getAllContactsController);

router.get('/:id', getContactsController.getContactByIdController);

export default router;
