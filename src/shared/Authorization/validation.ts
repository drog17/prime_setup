import { z } from 'zod';

export const authSchema = z.object({
  email: z.string().email({ message: 'Неверный email' }),
  password: z.string().min(6, { message: 'Минимум 6 символов' }),
});
