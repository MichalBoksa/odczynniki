import ProductCatalog from '@/components/ProductCatalog';
import { pageMetadata, publicPages } from '@/lib/seo';
export const metadata = pageMetadata(...publicPages['/products'], '/products');
export default function ProductsPage() { return <ProductCatalog />; }
