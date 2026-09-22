'use client';
import Link from 'next/link';
import { useLocale } from '@/lang/LocaleContext';

export default function ProductCatalog() {
  const { data, currentLocale } = useLocale();
  return <main className="max-container padding-container mb-16">
    <h1 className="text-primary font-bold text-3xl md:text-5xl mb-8">{currentLocale === 'pl' ? 'Odczynniki chemiczne i nieorganiczne związki metali' : data?.OUR_PRODUCTS}</h1>
    <p className="text-lg mb-10">{data?.COMPANY_INFO}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{data?.PRODUCTS.map(category => <Link key={category.href} href={category.href} className="card border-primary border-2 p-6 hover:bg-dark-white">
      <h2 className="text-xl font-semibold">{currentLocale === 'pl' ? `Zobacz: ${category.name}` : category.name}</h2>
      <p className="text-primary text-4xl mt-4">{category.symbol}</p>
    </Link>)}</div>
    <Link href="/contactUs/" className="btn btn-primary text-cream mt-10">{currentLocale === 'pl' ? 'Zapytaj o ofertę odczynników chemicznych' : data?.CONTACT_US}</Link>
  </main>;
}
