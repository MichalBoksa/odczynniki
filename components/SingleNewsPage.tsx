'use client';
import React from 'react';
import RecentPosts from './RecentPosts';
import { CldImage } from 'next-cloudinary';
import { Post } from '@prisma/client';
import { useLocale } from '@/lang/LocaleContext';

interface NewsProps {
  posts: Post[];
  postsEng: Post[];
}

const SingleNewsPage: React.FC<NewsProps> = ({ posts, postsEng }) => {
  const {currentLocale} = useLocale() || {};
  const firstPost = currentLocale === 'pl' ? posts[0] : postsEng[0]; 
  const recentPostsData = currentLocale === 'pl' ? posts.slice(1) : postsEng.slice(1);
  
  return (
    <section className='max-container md:padding-container lg:mb-32'>
      <div className='flex flex-col lg:flex-row gap-12 items-center justify-center'>
        <div className='flex-2 w-full lg:w-2/3'>
          <CldImage 
            src={firstPost.img} 
            alt="" 
            width={650} 
            height={400} 
            className='rounded w-full h-[150px] sm:h-[250px] md:h-[350px] lg:h-[350px] object-cover'
          />
        </div> 
        <div className='flex-1 w-full mt-6 lg:mt-0'>
          <h1 className='text-gray-500 text-2xl md:text-4xl text-center lg:text-left'>{firstPost.title}</h1>
        </div>
      </div>
    
      <div className='flex flex-col lg:flex-row gap-12 mb-10 mt-10'>
        <div className='px-6 lg:px-20 w-full lg:w-4/5' dangerouslySetInnerHTML={{__html: firstPost.desc}}/> 
        <div className='w-full lg:w-1/5'>
          <RecentPosts recentPosts={recentPostsData}/>
        </div>
      </div>
    </section>
  );
}

export default SingleNewsPage;
