import { notFound } from 'next/navigation';
import SingleNewsPage from '@/components/SingleNewsPage';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { getNews, getRecentNews, newsImageUrl } from '@/lib/news';
import { absoluteUrl, excerpt, pageMetadata } from '@/lib/seo';
export const dynamic = 'force-dynamic';
type Props = { params: { slug: string } };
export async function generateMetadata({ params }: Props) {
  const { post, englishPost } = await getNews(params.slug);
  const primary = post ?? englishPost;
  if (!primary) notFound();
  const metadata = pageMetadata(primary.title, excerpt(primary.desc), '/news/' + encodeURIComponent(primary.slug), newsImageUrl(primary.img));
  return { ...metadata, openGraph: { ...metadata.openGraph, locale: post ? 'pl_PL' : 'en_US', type: 'article' as const, publishedTime: primary.createdAt.toISOString() } };
}
export default async function NewsPost({ params }: Props) {
  const { post, englishPost } = await getNews(params.slug);
  const primary = post ?? englishPost;
  if (!primary) notFound();
  const [recent, recentEng] = await getRecentNews(params.slug);
  const path = '/news/' + encodeURIComponent(primary.slug);
  return <>
    <Breadcrumbs items={[{ name: 'Aktualności', href: '/news/' }, { name: primary.title, href: path }]} />
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'NewsArticle', headline: primary.title, description: excerpt(primary.desc), datePublished: primary.createdAt.toISOString(), image: newsImageUrl(primary.img), mainEntityOfPage: absoluteUrl(path), inLanguage: post ? 'pl' : 'en' }} />
    <SingleNewsPage posts={post ? [post, ...recent] : []} postsEng={englishPost ? [englishPost, ...recentEng] : []} />
  </>;
}
