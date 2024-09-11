const errorHandler = (error, res, reg, next) => {
  const { status = 500, massege } = error;
  res.status(status).json({
    massege,
  });
};

export default errorHandler;
