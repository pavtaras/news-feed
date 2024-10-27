export const translators = {
  en: () => import('./dictionaries/en'),
  fr: () => import('./dictionaries/fr'),
  it: () => import('./dictionaries/it'),
} as const;

export const translations = (key: keyof typeof translators) =>
  translators[key]().then((m) => m.default);
