'use client';

import { Box, Flex, Heading, Link as RLink } from '@radix-ui/themes';
import Link from 'next/link';
import { useI18n } from '@/locales/client';

export default function ErrorPage() {
  const t = useI18n();
  return (
    <Flex mt="6" direction="column" align="center" gap="2">
      <Heading size="9" align="center">
        {t('error.something_went_wrong')}
      </Heading>

      <Box>
        <RLink size="7" asChild>
          <Link href="/">{t('error.back_to_main')}</Link>
        </RLink>
      </Box>
    </Flex>
  );
}
