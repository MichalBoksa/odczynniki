'use client';

import { useLocale } from '@/lang/LocaleContext';
import NewsPageSlug from './NewsPageSlug';

export default function NewsWrapper({ params }: { params: any }) {
  const { currentLocale } = useLocale() || {};

  return <NewsPageSlug params={params} currentLocale={currentLocale} />;
}