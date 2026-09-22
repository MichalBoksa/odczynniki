import OtherProductInfo from '@/components/OtherProductInfo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCategory, productPath } from '@/lib/catalog';
import { pageMetadata } from '@/lib/seo';
const category = getCategory('other')!;
export const metadata = pageMetadata(category.name + ' – oferta', category.description, category.href);
export default function CategoryPage() {
  return <><Breadcrumbs items={[{ name: 'Produkty', href: '/products/' }, { name: category.name, href: category.href }]} /><OtherProductInfo productLinks={category.products.map(product => ({ cas: product.cas, symbol: product.symbol, href: productPath(category.slug, product.slug) }))} /></>;
}
