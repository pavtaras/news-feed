import { Heading, Text } from '@radix-ui/themes';
import { getLatestPostsByLocale, getPostById } from '@/repositories/postsRepo';
import Image from 'next/image';
import { imgSize } from '@/const/statics';
import { paramsSchema } from './_schemas';
import { type Locale, locales } from '@/const/locales';

export async function generateStaticParams() {
  const postsByLang = await Promise.all(
    Object.keys(locales).map(async (lang) => {
      const posts = await getLatestPostsByLocale(lang as Locale);
      return posts.map((post) => ({ id: String(post.id), lang }));
    }),
  );

  return postsByLang.flat(1);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { id, lang } = paramsSchema.parse(await params);
  const post = await getPostById({ id, lang });

  return {
    title: post.title,
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      images: [post.imageUrl],
    },
  };
}

export default async function PostBySlugPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { id, lang } = paramsSchema.parse(await params);
  const post = await getPostById({ id, lang });

  return (
    <>
      <Heading size="7" mb="2">
        {post.title}
      </Heading>
      {post.imageUrl && (
        <Image
          src={post.imageUrl}
          width={imgSize.width}
          height={imgSize.height}
          alt="Random"
          style={{ width: '100%', height: 'auto' }}
        />
      )}
      <Text as="div" size="5" weight="bold" mb="2">
        {post.subtitle}
      </Text>
      <Text size="4" as="p">
        {post.description}
      </Text>
    </>
  );
}
