export const parsedContactType = (type) => {
  const contactType = typeof type === 'string';
  if (!contactType) return;
  const isType = (type) => ['personel', 'female', 'other'].includes(type);
  if (isType(type)) return type;
};
export const parsedIsFavourite = (type) => {
  if (!['true', 'false'].includes(type)) return;
  return type === 'true' ? true : false;
};
