import Link from 'next/link';
import { Box, TabNav } from '@radix-ui/themes';
import { locales } from '@/const/locales';
import { paramsSchema } from '@/app/[lang]/news/_schemas';
import I18nProvider from '@/locales/Provider';

export default async function NewsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = paramsSchema.parse(await params);

  return (
    <>
      <header>
        <TabNav.Root justify="center">
          {Object.entries(locales).map(([locale, name]) => (
            <TabNav.Link active={lang === locale} key={locale} asChild>
              <Link href={`/${locale}/news`}>{name}</Link>
            </TabNav.Link>
          ))}
        </TabNav.Root>
      </header>
      <Box px="2">
        <I18nProvider locale={lang}>{children}</I18nProvider>
      </Box>
    </>
  );
}
