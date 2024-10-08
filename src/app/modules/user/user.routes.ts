import express from 'express';
import { UserControllers } from './user.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/signup',
  zodValidateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createUser,
);

export const UserRoutes = router;
