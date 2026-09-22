import type { MetadataRoute } from 'next';
import prisma from '@/utils/connect';
import { absoluteUrl, publicPages } from '@/lib/seo';
import { categories, productPath } from '@/lib/catalog';

// Query at request time: building does not need MongoDB or a running HTTP server.
export const dynamic = 'force-dynamic';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, englishPosts] = await Promise.all([
    prisma.post.findMany({ select: { slug: true, createdAt: true } }),
    prisma.postEng.findMany({ select: { slug: true, createdAt: true } }),
  ]);
  const news = new Map([...englishPosts, ...posts].map(post => [post.slug, post]));
  return [
    ...Object.keys(publicPages).map(path => ({ url: absoluteUrl(path) })),
    ...categories.flatMap(category => [
      { url: absoluteUrl(category.href) },
      ...category.products.map(product => ({ url: absoluteUrl(productPath(category.slug, product.slug)) })),
    ]),
    ...Array.from(news.values()).filter(post => post.slug !== 'newPost').map(post => ({ url: absoluteUrl(`/news/${encodeURIComponent(post.slug)}`), lastModified: post.createdAt })),
  ];
}
