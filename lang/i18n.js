const localesData = {
  en: () => import('../lang/en'),
  fr: () => import('../lang/fr'),
  pl: () => import('../lang/pl'),
  de: () => import('../lang/de'),
  ru: () => import('../lang/ru'),
  es: () => import('../lang/es'),
};

export async function getLocaleData(locale) {
  const data = await localesData[locale]();
  return data;
}
