import { z } from 'zod';
import { type CTFUser } from '@/types/forms';

const phoneRegex = /^\d{10}$/;

export const registerSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  name1: z.string().min(5, { message: 'Invalid Name' }).max(255),
  college1: z.string().min(2, { message: 'Invalid College name' }).max(255),
  year1: z.string().min(1, { message: 'Year is required' }).max(4),
  branch1: z.string().min(2, { message: 'Invalid Branch' }).max(255),
  whatsApp1: z.string().regex(phoneRegex, {
    message: 'Invalid WhatsApp number. Should be 10 digits',
  }),
  name2: z.string().min(5, { message: 'Invalid Name' }).max(255),
  college2: z.string().min(2, { message: 'Invalid College name' }).max(255),
  year2: z.string().min(1, { message: 'Year is required' }).max(4),
  branch2: z.string().min(2, { message: 'Invalid Branch' }).max(255),
  whatsApp2: z.string().regex(phoneRegex, {
    message: 'Invalid WhatsApp number. Should be 10 digits',
  }),
  name3: z.string().min(5, { message: 'Invalid Name' }).max(255).optional(),
  college3: z
    .string()
    .min(2, { message: 'Invalid College name' })
    .max(255)
    .optional(),
  year3: z.string().min(1, { message: 'Year is required' }).max(4).optional(),
  branch3: z.string().min(2, { message: 'Invalid Branch' }).max(255).optional(),
  whatsApp3: z
    .string()
    .regex(phoneRegex, {
      message: 'Invalid WhatsApp number. Should be 10 digits',
    })
    .optional(),
  workingOn: z
    .string()
    .min(10, {
      message: "Please provide more details about what you're working on",
    })
    .max(1000),
  transactionId: z
    .string()
    .min(5, { message: 'Invalid Transaction ID' })
    .max(255),
  tnc: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

export const initialFormData: CTFUser = {
  email: '',
  name1: '',
  college1: '',
  year1: '',
  branch1: '',
  whatsApp1: '',
  name2: '',
  college2: '',
  year2: '',
  branch2: '',
  whatsApp2: '',
  workingOn: '',
  transactionId: '',
  tnc: false,
};
