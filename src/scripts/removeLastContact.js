import { PATH_DB } from '../constants/contacts.js';
import getAllContacts from './getAllContacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const contacts = await getAllContacts();
  contacts.pop();
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

removeLastContact();
