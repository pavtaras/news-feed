export const locales = {
  en: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',
  fr: '🇫🇷 France',
  it: '🇮🇹 Italia',
} as const;

export type Locale = keyof typeof locales;
