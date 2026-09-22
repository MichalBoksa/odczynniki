import News from '@/components/News';
import { getNewsPage, newsPageNumber } from '@/lib/news';
import { pageMetadata, publicPages } from '@/lib/seo';
import { notFound } from 'next/navigation';
export const dynamic = 'force-dynamic';
type Props = { searchParams: { page?: string | string[] } };
export function generateMetadata({ searchParams }: Props) {
  const page = newsPageNumber(searchParams.page);
  const [title, description] = publicPages['/news'];
  return pageMetadata(page > 1 ? title + ' – strona ' + page : title, description, page > 1 ? '/news/?page=' + page : '/news/');
}
export default async function NewsPage({ searchParams }: Props) {
  const page = newsPageNumber(searchParams.page);
  const data = await getNewsPage(page);
  if (page > 1 && !data.posts.length && !data.postsEng.length) notFound();
  return <News {...data} page={page} />;
}
