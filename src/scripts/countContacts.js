// import { PATH_DB } from '../constants/contacts.js';
// import * as fs from 'node:fs/promises';
import getAllContacts from './getAllContacts.js';

export const countContacts = async () => {
  const contacts = await getAllContacts();
  return contacts.length;
};

console.log(await countContacts());
