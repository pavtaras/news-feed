import { Post, PrismaClient } from '@prisma/client';
import { Locale } from '@/const/locales';
export { type Post } from '@prisma/client';

const prisma = new PrismaClient();

export async function getLatestPostsByLocale(locale: Locale): Promise<Post[]> {
  return prisma.post.findMany({
    where: {
      locale,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 12,
  });
}

export async function getPostById({
  id,
  lang,
}: {
  id: number;
  lang: string;
}): Promise<Post> {
  return prisma.post.findFirstOrThrow({
    where: { id, locale: lang },
  });
}
