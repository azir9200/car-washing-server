import httpStatus from 'http-status';
import AppError from '../../errors/handleAppError';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const { email } = payload;
  const isUserExists = await User.findOne({ email });
  if (isUserExists) {
    throw new AppError(
      httpStatus.ALREADY_REPORTED,
      'This User already exists!',
      'create user with another email',
    );
  }

  const user = await User.create(payload);
  return user;
};

export const UserServices = {
  createUserIntoDB,
};
