import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
// import getAllContacts from './getAllContacts.js';

export const removeAllContacts = async () => {
  const contactList = [];
  await fs.writeFile(PATH_DB, contactList);
};

removeAllContacts();
