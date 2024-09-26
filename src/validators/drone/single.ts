import { z } from 'zod';
import { type DRONEUser } from '@/types/forms';

const phoneRegex = /^\d{10}$/;

export const singleRegisterSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  name: z.string().min(5, { message: 'Invalid Name' }).max(255),
  college: z.string().min(2, { message: 'Invalid College name' }).max(255),
  year: z.string().min(1, { message: 'Year is required' }).max(20),
  branch: z.string().min(2, { message: 'Invalid Branch' }).max(255),
  whatsApp: z.string().regex(phoneRegex, {
    message: 'Invalid WhatsApp number. Should be 10 digits',
  }),
  transactionId: z
    .string()
    .min(5, { message: 'Invalid Transaction ID' })
    .max(255),
  tnc: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

export const singleInitialFormData: DRONEUser = {
  email: '',
  name: '',
  college: '',
  year: '',
  branch: '',
  whatsApp: '',
  transactionId: '',
  tnc: false,
};
