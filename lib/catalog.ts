import * as pl from '@/lang/pl';
import * as en from '@/lang/en';
import { excerpt } from './seo';

export type CatalogProduct = {
  name: string; symbol: string; cas: string; use: string[];
  slug: string;
  englishName?: string; molarMass?: string; purity?: string; form?: string;
  packaging?: string[]; technicalInfo?: string; image?: string; sku?: string;
  documents?: { name: string; href: string }[];
  certificates?: { name: string; href: string }[];
};
export function productSlug(name: string) {
  return name.trim().toLowerCase().replace(/ł/g, 'l').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
const groups = [
  ['molybdenum', 'Związki molibdenu', pl.MOLYBDENUM_PRODUCTS],
  ['selenium', 'Związki selenu', pl.SELENIUM_PRODUCTS],
  ['cobalt', 'Związki kobaltu', pl.COBALT_PRODUCTS],
  ['copper', 'Związki miedzi', pl.COPPER_PRODUCTS],
  ['manganese', 'Związki manganu', pl.MANGANESE_PRODUCTS],
  ['nickel', 'Związki niklu', pl.NICKEL_PRODUCTS],
  ['zinc', 'Związki cynku', pl.ZINC_PRODUCTS],
  ['other', 'Pozostałe odczynniki chemiczne', pl.OTHER_PRODUCTS],
] as const;

// Add verified fields here. Keep published slugs unchanged when renaming products.
const productDetails: Record<string, Partial<CatalogProduct>> = {};
const englishProducts = [en.MOLYBDENUM_PRODUCTS, en.SELENIUM_PRODUCTS, en.COBALT_PRODUCTS, en.COPPER_PRODUCTS, en.MANGANESE_PRODUCTS, en.NICKEL_PRODUCTS, en.ZINC_PRODUCTS, en.OTHER_PRODUCTS].flat();

export const categories = groups.map(([slug, name, products]) => ({
  slug, name, href: `/products/${slug}`,
  description: excerpt(`${name} w ofercie CMOCMI: ${products.map(p => p.name.trim()).join(', ')}. Sprawdź specyfikację i skontaktuj się z działem handlowym.`),
  products: products.map(product => {
    const slug = productSlug(product.name);
    const matches = englishProducts.filter(item => item.cas === product.cas && item.symbol === product.symbol);
    return { ...product, name: product.name.trim(), slug, englishName: matches.length === 1 ? matches[0].name.trim() : undefined, ...productDetails[`${slug}/${product.cas}`] } as CatalogProduct;
  }),
}));
export function getCategory(slug: string) { return categories.find(category => category.slug === slug); }
export function productPath(category: string, slug: string) { return `/products/${category}/${slug}`; }
export function productDescription(product: CatalogProduct) {
  return excerpt(`${product.name}. ${product.symbol ? `Wzór: ${product.symbol}. ` : ''}${product.cas ? `CAS: ${product.cas}. ` : ''}${product.use.length ? `Zastosowanie: ${product.use.join(', ')}. ` : ''}Zapytaj CMOCMI o ofertę.`);
}
