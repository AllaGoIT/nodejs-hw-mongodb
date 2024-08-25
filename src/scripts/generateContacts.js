import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';
import DetectFileEncodingAndLanguage from 'detect-file-encoding-and-language';

const generateContacts = async (number) => {
  const { encoding } = await DetectFileEncodingAndLanguage(PATH_DB);
  const contactsList = JSON.parse(await fs.readFile(PATH_DB, encoding));
  const newContacts = Array(number).fill(0).map(createFakeContact);
  const data = [...contactsList, ...newContacts];
  await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
};

generateContacts(5);
