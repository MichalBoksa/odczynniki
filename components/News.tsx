"use client";
import { CldImage } from 'next-cloudinary';
import React from 'react';
import NewsCardList from './NewsCardList';
import { Post } from '@prisma/client';
import Pagination from './Pagination/Pagination';

interface NewsProps {
  posts: Post[];
  page: number;
}


const News: React.FC<NewsProps> = ({posts,page}) => {
  // const News = (posts:Post[],page:number) => {
 //  console.log("postssss {}{}"+ JSON.stringify(posts));
  const latestPost:Post =  posts[0];
  // console.log("--------->" + JSON.stringify(posts));
  const POST_PER_PAGE = 3;  
  const hasPrevious = (POST_PER_PAGE + 1) * (page-1) > 0;
  const hasNext = (POST_PER_PAGE + 1) * page < (Array.isArray(posts) ? posts.length : 0);
  return (
    <section className='max-container padding-container mb-6'>
      <h1 className='font-bold text-6xl'>Aktualności</h1>

      <div className='flex mt-6 items-center gap-8 min-h-[600px]'>
        <div className='flex-1'>
          {latestPost && (
            <CldImage
              className='rounded-lg min-h-[450px] object-cover'
              src={latestPost.img}
              alt="img"
              width={600}
              height={450}
              crop={{
                type: 'auto',
                source: true
              }}
            />
          )}
        </div>
        <div className='flex-1'>
          {latestPost && (
            <h1 className='font-bold text-xl mb-6 text-left'>{latestPost.title}</h1>
          )}
          <p>{latestPost?.desc}</p>
          <button className='flex btn btn-primary btn-sm text-cream rounded-lg items-center mt-3 ml-auto'>
            Czytaj więcej
          </button>
        </div>
      </div>

      <NewsCardList posts={posts} />
      <Pagination page={page} hasPrevious={hasPrevious} hasNext={hasNext} />
    </section>
  );
};

export default News;
