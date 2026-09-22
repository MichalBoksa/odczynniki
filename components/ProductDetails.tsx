'use client';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { useLocale } from '@/lang/LocaleContext';
import type { CatalogProduct } from '@/lib/catalog';
import type { LocaleData, MolybdenumProduct } from '@/lang/LocaleData';

export default function ProductDetails({ product, categoryKey, categoryName, categoryHref }: { product: CatalogProduct; categoryKey: keyof LocaleData; categoryName: string; categoryHref: string }) {
  const { data, currentLocale } = useLocale();
  const localized = data?.[categoryKey];
  // Match by both formula and CAS, never by array index: translation lists differ.
  const translated = Array.isArray(localized) ? (localized as MolybdenumProduct[]).find(item => item.cas === product.cas && item.symbol === product.symbol) : undefined;
  const display = currentLocale === 'pl' ? product : { ...product, ...translated };
  const polish = currentLocale === 'pl';
  return <main className="max-container padding-container mb-16">
    <h1 className="text-primary font-bold text-3xl md:text-5xl mb-8">{display.name}</h1>
    {product.image && <CldImage src={product.image} alt={display.name} width={600} height={400} sizes="(min-width: 1024px) 50vw, 100vw" />}
    {product.englishName && <p className="mb-6" lang="en">{product.englishName}</p>}
    <section className="rounded border-2 border-base-200 p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">{polish ? 'Specyfikacja' : 'Specification'}</h2>
      <dl className="space-y-3">
        {[[polish ? 'Wzór chemiczny' : 'Chemical formula', product.symbol], ['CAS', product.cas], [polish ? 'Masa molowa' : 'Molar mass', product.molarMass], [polish ? 'Czystość' : 'Purity', product.purity], [polish ? 'Postać' : 'Form', product.form]].filter(([, value]) => value).map(([label, value]) => <div key={label}><dt className="font-semibold">{label}</dt><dd>{value}</dd></div>)}
      </dl>
    </section>
    {display.use.length > 0 && <section className="mb-8"><h2 className="text-2xl font-semibold mb-4">{data?.USAGE}</h2><ul className="list-disc ml-6">{display.use.map(use => <li key={use}>{use}</li>)}</ul></section>}
    {product.packaging?.length ? <section className="mb-8"><h2 className="text-2xl font-semibold mb-4">{polish ? 'Dostępne opakowania' : 'Packaging'}</h2><ul>{product.packaging.map(item => <li key={item}>{item}</li>)}</ul></section> : null}
    {product.technicalInfo && <section className="mb-8"><h2 className="text-2xl font-semibold mb-4">{polish ? 'Informacje techniczne' : 'Technical information'}</h2><p>{product.technicalInfo}</p></section>}
    {product.documents?.length ? <section className="mb-8"><h2 className="text-2xl font-semibold mb-4">{polish ? 'Dokumentacja' : 'Documentation'}</h2><ul>{product.documents.map(doc => <li key={doc.href}><a href={doc.href} className="underline">{doc.name}</a></li>)}</ul></section> : null}
    {product.certificates?.length ? <section className="mb-8"><h2 className="text-2xl font-semibold mb-4">{data?.OUR_CERTIFICATES}</h2><ul>{product.certificates.map(doc => <li key={doc.href}><a href={doc.href} className="underline">{doc.name}</a></li>)}</ul></section> : null}
    <section><h2 className="text-2xl font-semibold mb-4">{polish ? 'Zapytaj o ofertę' : data?.CONTACT_US}</h2><Link href="/contactUs/" className="btn btn-primary text-cream">{polish ? `Zapytaj o ${product.name}` : data?.CONTACT_US}</Link></section>
    <Link href={categoryHref} className="inline-block underline mt-8">{polish ? categoryName : data?.OUR_PRODUCTS}</Link>
  </main>;
}
