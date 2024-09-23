import {  z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
<<<<<<< HEAD
      .min(6, { message: 'Password must be at least 6 characters long' }),
    phone: z.string().nonempty({ message: 'Phone number is required' }),
    role: z.string(),
    address: z.string().nonempty({ message: 'Address is required' }),
=======
      .min(6, { message: 'Must be 6 or more characters long' }),
    phone: z.string(),
    address: z.string(),
    role: z.enum(['user', 'admin']).optional(),
>>>>>>> e7afde135fe53997d5c8b13d05f9f8730506f867
  }),
});

const updateUserValidations = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    roll: z.string().optional(),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
  updateUserValidations,
};
