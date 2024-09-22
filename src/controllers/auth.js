import * as authServices from '../servises/auth.js';

export const signUpController = async (reg, res) => {
  const newUser = await authServices.signup(reg.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: newUser,
  });
};
