'use client';
import { CldImage } from 'next-cloudinary';
import React from 'react';
import NewsCardList from './NewsCardList';
import { Post } from '@prisma/client';
import Pagination from './Pagination/Pagination';
import Link from 'next/link';
import { excerpt } from '@/lib/seo';
import { useLocale } from '../lang/LocaleContext';

interface NewsProps {
  posts: Post[];
  count: number;
  page: number;
  postsEng: Post[];
  countEng: number;
}

const News: React.FC<NewsProps> = ({ posts, page, count, postsEng, countEng }) => {
  const { data, currentLocale } = useLocale() || {};
  const latestPost = currentLocale === 'pl' ? posts[0] : postsEng[0];
  const localePosts = currentLocale === 'pl' ? posts : postsEng;
  const POST_PER_PAGE = 3;  
  const hasPrevious = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * page < (currentLocale === 'pl' ? count : countEng);
  

  return (
    <section className='max-container md:padding-container mb-6'>
      <h1 className='font-bold text-4xl md:text-6xl text-primary text-center md:text-left'>{data?.NEWS}</h1>

      {latestPost && <Link href={`/news/${encodeURIComponent(latestPost.slug)}`}>
        <div className='flex flex-col lg:flex-row mt-6 items-center gap-8 lg:min-h-[600px]'>
          <div className='flex-1 w-full'>
            {latestPost && (
              <CldImage
                className='rounded-lg w-full h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px] object-cover'
                src={latestPost.img}
                alt={latestPost.title}
                width={600}
                height={450}
              />
            )}
          </div>
          <div className='flex-1 w-full mt-4 lg:mt-0 px-2'>
            {latestPost && (
              <h2 className='font-bold text-xl md:text-2xl mb-6 text-left text-jetblack'>{latestPost.title}</h2>
            )}
            <div className='px-4 md:px-20 text-secondary-content' >{excerpt(latestPost.desc, 120)}</div>
            <button className='flex btn btn-primary btn-sm text-cream rounded-lg items-center mt-3 ml-auto'>{data?.READ_MORE}</button>
          </div>
        </div>
      </Link>}

      {!latestPost && <p className="mt-6">{currentLocale === 'pl' ? 'Brak aktualności do wyświetlenia.' : 'No news to display.'}</p>}
      <div className='mt-10'>
        <NewsCardList posts={localePosts.slice(1)} />
      </div>

      <Pagination page={page} hasPrevious={hasPrevious} hasNext={hasNext} />
    </section>
  );
};

export default News;
