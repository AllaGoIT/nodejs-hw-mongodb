export const parsedContactType = (type) => {
  const contactType = typeof value === 'string';
  if (!contactType) return;
  const isType = (type) => ['personel', 'female', 'other'].includes(type);
  if (isType(type)) return type;
};
export const parsedIsFavourite = (type) => {
  if (!['true', 'false'].includes(type)) return;
  return type === 'true' ? true : false;
  // const favourite = typeof type === 'string';

  // if (!favourite) return;
  // const isFavourite = (type) => ['true', 'false'].includes(type);
  // if (isFavourite(type)) return type;
};
