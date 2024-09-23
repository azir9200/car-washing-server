import { z } from 'zod';

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
    phone: z.string().nonempty({ message: 'Phone number is required' }),
    role: z.string(),
    address: z.string().nonempty({ message: 'Address is required' }),
  }),
});


export const UserValidation = {
 createUserValidationSchema,
};
