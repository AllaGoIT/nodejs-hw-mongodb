const parseNumber = (value, defaultValue) => {
  //   let parsePerPage = null;
  if (typeof value !== 'string') {
    return defaultValue;
  }
  const parseValue = parseInt(value);
  if (Number.isNaN(parseValue)) return defaultValue;
  return parseValue;
  //   if (Number.isNaN(parseInt(perPage))) {
  //     parsePerPage = 10;
  //   } else {
  //     parsePerPage = parseInt(perPage);
  //   }
};

const parsePaginationParams = ({ perPage, page }) => {
  const parsePerPage = parseNumber(perPage, 10);
  const parsePage = parseNumber(page, 1);
  return {
    perPage: parsePerPage,
    page: parsePage,
  };
};

export default parsePaginationParams;
