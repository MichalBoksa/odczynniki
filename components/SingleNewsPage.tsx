
"use client";
import Image from 'next/image'
import React from 'react'
import RecentPosts from './RecentPosts'
import { CldImage } from 'next-cloudinary';
import { Post } from '@prisma/client';

interface NewsProps {
  posts: Post[];
}

const SingleNewsPage: React.FC<NewsProps> = async (posts) => {
  const firstPost = posts.posts[0]; 
  const recentPostsData = posts.posts.slice(1);
  return (
   <section className='max-container padding-container'>
    <div className='flex gap-12 items-center justify-center'>
         <div className='flex-2'>
           <CldImage src={firstPost.img} alt="" width={650} height={400} className='rounded cover'/>
          </div> 
        <div className='flex-1 '>
        <h1 className='mt-10 text-gray-500 text-4xl'>{firstPost.title}</h1>
      </div>
      </div>
    
    <div className='flex gap-12 mb-10'>
      <div className='mt-20 px-14 lg:px-20 mb-4 w-4/5' dangerouslySetInnerHTML={{__html: firstPost.desc}}/> 
        <RecentPosts recentPosts={recentPostsData}/>
      </div>

      
    </section>
  )
}

export default SingleNewsPage