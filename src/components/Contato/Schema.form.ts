import z from 'zod';

export const mensageSchema = z.object({
  name: z.string().min(2, 'Nome e obrigatorio!').max(50, 'Nome muito longo.'),
  email: z.string().email('Email incorreto.'),
  mensage: z.string(),
});

export type MensageForm = z.infer<typeof mensageSchema>;
