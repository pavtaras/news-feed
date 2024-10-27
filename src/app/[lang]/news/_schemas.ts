import z from 'zod';

export const paramsSchema = z.object({ lang: z.enum(['en', 'fr', 'it']) });
