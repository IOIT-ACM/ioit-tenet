import { z } from 'zod';
import { type DRONETeam } from '@/types/forms';

const phoneRegex = /^\d{10}$/;

export const groupRegisterSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),

  name1: z.string().min(5, { message: 'Invalid Name' }).max(255),
  college1: z.string().min(2, { message: 'Invalid College name' }).max(255),
  year1: z.string().min(1, { message: 'Year is required' }).max(20),
  branch1: z.string().min(2, { message: 'Invalid Branch' }).max(255),
  whatsApp1: z.string().regex(phoneRegex, {
    message: 'Invalid WhatsApp number. Should be 10 digits',
  }),

  name2: z.string().min(5, { message: 'Invalid Name' }).max(255),
  college2: z.string().min(2, { message: 'Invalid College name' }).max(255),
  year2: z.string().min(1, { message: 'Year is required' }).max(20),
  branch2: z.string().min(2, { message: 'Invalid Branch' }).max(255),
  whatsApp2: z.string().regex(phoneRegex, {
    message: 'Invalid WhatsApp number. Should be 10 digits',
  }),

  name3: z.string().min(5, { message: 'Invalid Name' }).max(255),
  college3: z.string().min(2, { message: 'Invalid College name' }).max(255),
  year3: z.string().min(1, { message: 'Year is required' }).max(20),
  branch3: z.string().min(2, { message: 'Invalid Branch' }).max(255),
  whatsApp3: z.string().regex(phoneRegex, {
    message: 'Invalid WhatsApp number. Should be 10 digits',
  }),

  name4: z.string().min(5, { message: 'Invalid Name' }).max(255),
  college4: z.string().min(2, { message: 'Invalid College name' }).max(255),
  year4: z.string().min(1, { message: 'Year is required' }).max(20),
  branch4: z.string().min(2, { message: 'Invalid Branch' }).max(255),
  whatsApp4: z.string().regex(phoneRegex, {
    message: 'Invalid WhatsApp number. Should be 10 digits',
  }),

  name5: z.string().min(5, { message: 'Invalid Name' }).max(255),
  college5: z.string().min(2, { message: 'Invalid College name' }).max(255),
  year5: z.string().min(1, { message: 'Year is required' }).max(20),
  branch5: z.string().min(2, { message: 'Invalid Branch' }).max(255),
  whatsApp5: z.string().regex(phoneRegex, {
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

export const groupInitialFormData: DRONETeam = {
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
  name3: '',
  college3: '',
  year3: '',
  branch3: '',
  whatsApp3: '',
  name4: '',
  college4: '',
  year4: '',
  branch4: '',
  whatsApp4: '',
  name5: '',
  college5: '',
  year5: '',
  branch5: '',
  whatsApp5: '',
  transactionId: '',
  tnc: false,
};
