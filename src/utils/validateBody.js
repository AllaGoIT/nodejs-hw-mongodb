import createHttpError from 'http-errors';

const validateBody = (schema) => {
  const func = async (reg, res, next) => {
    try {
      await schema.validateAsync(reg.body, { abortEarly: false });
      next();
    } catch (error) {
      const validateError = createHttpError(404, error.message);
      next(validateError);
    }
  };

  return func;
};

export default validateBody;
