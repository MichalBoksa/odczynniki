import { notFound } from 'next/navigation';
import { categories, getCategory, productDescription, productPath } from '@/lib/catalog';
import { absoluteUrl, pageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import ProductDetails from '@/components/ProductDetails';
import type { LocaleData } from '@/lang/LocaleData';

type Props = { params: { category: string; productSlug: string } };
function resolve({ params }: Props) {
  const category = getCategory(params.category);
  const product = category?.products.find(item => item.slug === params.productSlug);
  if (!category || !product) notFound();
  return { category, product };
}
export function generateStaticParams() {
  return categories.flatMap(category => category.products.map(product => ({ category: category.slug, productSlug: product.slug })));
}
export function generateMetadata(props: Props) {
  const { category, product } = resolve(props);
  return pageMetadata(`${product.name} – oferta`, productDescription(product), productPath(category.slug, product.slug), product.image);
}
export default function ProductPage(props: Props) {
  const { category, product } = resolve(props);
  const path = productPath(category.slug, product.slug);
  return <>
    <Breadcrumbs items={[{ name: 'Produkty', href: '/products/' }, { name: category.name, href: category.href }, { name: product.name, href: path }]} />
    {/* Quote-only pages have no public offers or reviews required for Product rich results. */}
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebPage', name: product.name, description: productDescription(product), url: absoluteUrl(path), image: product.image, inLanguage: 'pl' }} />
    <ProductDetails product={product} categoryKey={`${category.slug.toUpperCase()}_PRODUCTS` as keyof LocaleData} categoryName={category.name} categoryHref={category.href} />
  </>;
}
