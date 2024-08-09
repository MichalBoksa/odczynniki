"use client";
import React from 'react'
import NewsCardElement from './NewsCardElement'
import { Post } from '@prisma/client'
import { useLocale } from '../lang/LocaleContext';

interface NewsProps {
  posts: Post[];
}


const NewsCardList: React.FC<NewsProps> = (posts) => {
  if (!Array.isArray(posts.posts)) {
    return null; // or handle the error in an appropriate way
  }
  const { data } = useLocale() || {};
  return (
    <section className='max-container padding-container lg:mt-16 rounded-lg bg-secondary p-5'>
      <h1 className='font-bold text-4xl text-primary'>{data?.LATEST_NEWS}</h1>
      <div className='posts'>
        {posts.posts.map((postItem: Post) => (
         <NewsCardElement key={postItem.id} post={postItem} recentPosts={posts.posts}/>
        ))}
      </div>
    </section>
  )
}

export default NewsCardList