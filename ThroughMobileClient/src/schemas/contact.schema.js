import { z } from 'zod';

export const contactSchema = z.object({
    fullName: z.string().min(2, 'Full Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    organization: z.string().optional(),
    country: z.string().min(2, 'Country is required'),
    interest: z.string().min(1, 'Please select an interest'),
    message: z.string().min(5, 'Message must be at least 5 characters'),
    newsletter: z.boolean().optional(),
});
