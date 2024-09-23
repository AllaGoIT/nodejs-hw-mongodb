import { parsedContactType, parsedIsFavourite } from './parsedValue.js';
const parseContactsFilterParamas = ({ contactType, isFavourite }) => {
  const parseType = parsedContactType(contactType);
  console.log(parseType);
  const parseIsFavourite = parsedIsFavourite(isFavourite);
  return {
    contactType: parseType,
    isFavourite: parseIsFavourite,
  };
};
export default parseContactsFilterParamas;
