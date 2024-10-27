import { paramsSchema as postsSchema } from '@/app/[lang]/news/_schemas';
import z from 'zod';

export const paramsSchema = postsSchema.merge(
  z.object({
    id: z.coerce.number(),
  }),
);
