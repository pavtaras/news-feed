import { Grid, Heading, Callout } from '@radix-ui/themes';
import { getLatestPostsByLocale } from '@/repositories/postsRepo';
import { type Locale, locales } from '@/const/locales';
import { GridPost } from '@/components/GridPost';
import { translations } from '@/locales/translation';

export async function generateStaticParams() {
  return Object.keys(locales).map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await translations(lang);

  return {
    title: t.posts.latest_posts_for,
  };
}

export default async function FeedPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const posts = await getLatestPostsByLocale(lang);
  const t = await translations(lang);

  return (
    <>
      <Heading size="7" align="center" my="4">
        {t.posts.latest_posts}
      </Heading>

      {posts.length === 0 ? (
        <Callout.Root size="3">
          <Callout.Text>{t.posts.no_posts}</Callout.Text>
        </Callout.Root>
      ) : (
        <Grid
          gap="6"
          columns={{
            initial: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
        >
          {posts.map((post) => (
            <GridPost
              key={post.id}
              post={post}
              linkTo={(post) => `/${lang}/news/${post.id}`}
            />
          ))}
        </Grid>
      )}
    </>
  );
}
