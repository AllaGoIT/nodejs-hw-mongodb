export const parsedContactType = (type) => {
  const contactType = typeof value === 'string';
  if (!contactType) return;
  const isType = (type) => ['personel', 'female', 'other'].includes(type);
  if (isType(type)) return type;
};
export const parsedIsFavourite = (type) => {
  const favourite = typeof type === 'boolean';
  if (!favourite) return;
  const isFavourite = (type) => ['true'].includes(type);
  if (isFavourite(type)) return type;
};
