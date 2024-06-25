const localesData = {
  en: () => import('../lang/en'),
  fr: () => import('../lang/fr').then(mod => mod.default),
  pl: () => import('../lang/pl'),
  de: () => import('../lang/de').then(mod => mod.default),
  ru: () => import('../lang/ru').then(mod => mod.default),
};

export async function getLocaleData(locale) {
  const data = await localesData[locale]();
  return data;
}
