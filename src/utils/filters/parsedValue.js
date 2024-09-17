export const parsedContactType = (type) => {
  const contactType = typeof value === 'string';
  if (!contactType) return;
  const isType = (type) => ['personel', 'female', 'other'].includes(type);
  if (isType(type)) return type;
};
export const parsedIsFavourite = (value) => {
  const favourite = typeof value === 'boolean';
  if (!favourite) return;
  const isFavourite = (value) => ['true'].includes(value);
  if (isFavourite(value)) return value;
};
