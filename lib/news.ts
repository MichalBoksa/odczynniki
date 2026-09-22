import { cache } from 'react';
import prisma from '@/utils/connect';

export const getNews = cache(async (slug: string) => {
  const [post, englishPost] = await Promise.all([
    prisma.post.findUnique({ where: { slug } }),
    prisma.postEng.findUnique({ where: { slug } }),
  ]);
  return { post, englishPost };
});
export async function getRecentNews(slug: string) {
  return Promise.all([
    prisma.post.findMany({ where: { slug: { not: slug } }, orderBy: { createdAt: 'desc' }, take: 3 }),
    prisma.postEng.findMany({ where: { slug: { not: slug } }, orderBy: { createdAt: 'desc' }, take: 3 }),
  ]);
}
export function newsPageNumber(value: string | string[] | undefined) {
  if (typeof value !== 'string' || !/^[1-9]\d*$/.test(value)) return 1;
  const page = Number(value);
  return Number.isSafeInteger(page) && page <= 1000000 ? page : 1;
}
export async function getNewsPage(page: number) {
  const skip = (page - 1) * 3;
  const [posts, postsEng, count, countEng] = await Promise.all([
    prisma.post.findMany({ take: 3, skip, orderBy: [{ createdAt: 'desc' }, { id: 'desc' }] }),
    prisma.postEng.findMany({ take: 3, skip, orderBy: [{ createdAt: 'desc' }, { id: 'desc' }] }),
    prisma.post.count(), prisma.postEng.count(),
  ]);
  return { posts, postsEng, count, countEng };
}
export function newsImageUrl(image: string) {
  if (/^https?:\/\//.test(image)) return image;
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  return image && cloud ? `https://res.cloudinary.com/${cloud}/image/upload/${image.split('/').map(encodeURIComponent).join('/')}` : undefined;
}
