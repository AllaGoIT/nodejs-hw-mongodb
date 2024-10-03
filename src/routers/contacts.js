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
import isValidId from '../middlewares/isValidId.js';
import authenticate from '../middlewares/authenticate.js';
import upload from '../middlewares/upload.js';

const router = Router();

router.use(authenticate);
router.get('/', ctrlWrapper(getAllContactsController));

router.get('/:id', isValidId, ctrlWrapper(getContactByIdController));

router.post(
  '/',
  upload.single('photo'),
  validateBody(contactsShema),
  ctrlWrapper(postNewContactController),
);

router.patch(
  '/:id',
  upload.single('photo'),
  isValidId,
  validateBody(contactsPatchShema),
  ctrlWrapper(patchContactByIdController),
);

router.delete('/:id', isValidId, ctrlWrapper(delContactByIdController));

export default router;

//upload.array("photo", 8)
// upload.fields([{name:"poster", maxCount:1} {name:"subPostrer", maxCount:2}])
