'use client';
import { createI18nClient } from 'next-international/client';
import { translators } from './translation';

export const { useI18n, I18nProviderClient } = createI18nClient(translators);
