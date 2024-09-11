const notFoundHandler = (reg, res) => {
  res.status(404).json({
    massege: `${reg.url} not found`,
  });
};
export default notFoundHandler;
