import { Container, Flex, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { locales } from '@/const/locales';
import styles from './page.module.css';

export function generateMetadata() {
  return {
    title: 'Main page',
    description: 'Read news on your language',
  };
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Container size="1" px="2">
        <Flex gap="4" direction="column">
          <Heading size="9" align="center">
            Hey 👋, we are multi regional!
          </Heading>
          <Heading size="4" weight="regular" align="center">
            Select your country:
          </Heading>

          <nav className={styles.linksList}>
            {Object.entries(locales).map(([locale, name]) => (
              <Link
                key={locale}
                href={`/${locale}/news`}
                className={styles.link}
              >
                <Text as="span">{name}</Text>
              </Link>
            ))}
          </nav>
        </Flex>
      </Container>
    </main>
  );
}
