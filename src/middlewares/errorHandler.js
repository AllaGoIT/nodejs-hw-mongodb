const errorHandler = (error, reg, res, next) => {
  const { status = 500, message } = error;
  res.status(status).json({
    message,
  });
};

export default errorHandler;
