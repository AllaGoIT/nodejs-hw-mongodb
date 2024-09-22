export const parsedContactType = (type) => {
  const contactType = typeof value === 'string';
  if (!contactType) return;
  const isType = (type) => ['personal', 'home'].includes(type);
  if (isType(type)) return type;
};
export const parsedIsFavourite = (type) => {
  if (!['true', 'false'].includes(type)) return;
  return type === 'true' ? true : false;
};
