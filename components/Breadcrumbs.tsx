'use client';

import Link from 'next/link';
import JsonLd from './JsonLd';
import { absoluteUrl } from '@/lib/seo';
import { useLocale } from '@/lang/LocaleContext';

const navigationLabels: Record<string, { home: string; navigation: string }> = {
  pl: { home: 'Strona główna', navigation: 'Ścieżka nawigacji' },
  en: { home: 'Home', navigation: 'Breadcrumbs' },
  de: { home: 'Startseite', navigation: 'Brotkrumennavigation' },
  fr: { home: 'Accueil', navigation: 'Fil d’Ariane' },
  es: { home: 'Inicio', navigation: 'Ruta de navegación' },
  ru: { home: 'Главная', navigation: 'Навигационная цепочка' },
};

export type Crumb = { name: string; href: string };
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const { data, currentLocale } = useLocale();
  const labels = navigationLabels[currentLocale] ?? navigationLabels.pl;
  const crumbs = [{ name: labels.home, href: '/' }, ...items.map(item => {
    const path = item.href.replace(/\/$/, '');
    const category = data?.PRODUCTS.find(product => product.href.replace(/\/$/, '') === path);
    const name = path === '/products' ? data?.OUR_PRODUCTS
      : path === '/news' ? data?.NEWS
      : category?.name;
    return { ...item, name: name || item.name };
  })];
  return <>
    <nav aria-label={labels.navigation} className="max-container padding-container text-sm mb-6">
      <ol className="flex flex-wrap gap-2">{crumbs.map((item, index) => <li key={item.href}>
        {index > 0 && <span aria-hidden="true" className="mr-2">›</span>}
        <Link href={item.href} aria-current={index === crumbs.length - 1 ? 'page' : undefined} className="hover:underline">{item.name}</Link>
      </li>)}</ol>
    </nav>
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(item.href) })) }} />
  </>;
}
