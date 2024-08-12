'use client';

import { useLocale } from '@/lang/LocaleContext';
import NewsPage from './NewsPage';

export default function NewsWrapper({ searchParams }: { searchParams: any }) {
  const { currentLocale } = useLocale() || {};

  return <NewsPage searchParams={searchParams} currentLocale={currentLocale} />;
}