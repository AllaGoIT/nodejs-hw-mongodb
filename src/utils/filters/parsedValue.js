export const parsedContactType = (type) => {
  // if (!['personal'].includes(type)) return;
  // return type === 'personal' ? true : false;
  const contactType = typeof type === 'string';
  // console.log(contactType);
  if (!contactType) return;
  const isType = (type) => ['personel', 'female', 'other'].includes(type);
  if (isType(type)) return type;
};
export const parsedIsFavourite = (type) => {
  if (!['true', 'false'].includes(type)) return;
  return type === 'true' ? true : false;
};
