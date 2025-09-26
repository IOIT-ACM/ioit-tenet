import { z } from 'zod';

export const memberSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    ign: z.string().min(1, 'IGN is required'),
    ignId: z.string().min(1, 'IGN ID is required'),
    contact: z.string().regex(/^\d{10}$/, 'Enter a valid 10-digit contact number'),
    email: z.string().email('Enter a valid email'),
});

export const esportsSchema = z.object({
    teamName: z.string().min(1, 'Team name is required'),
    leader: memberSchema,
    members: z.array(memberSchema).length(3, 'All 3 members are required'),
    transactionId: z.string().regex(/^\d{12}$/, 'Transaction ID must be exactly 12 digits'),
});

export type FormInput = z.infer<typeof esportsSchema>;
export type MemberInput = z.infer<typeof memberSchema>;
