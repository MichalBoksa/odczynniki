
import React from 'react'
import NewsCardElement from './NewsCardElement'
import { Post } from '@prisma/client'
import Link from 'next/link';

interface NewsProps {
  posts: Post[];
}


const NewsCardList: React.FC<NewsProps> = (posts) => {
  if (!Array.isArray(posts.posts)) {
    return null; // or handle the error in an appropriate way
  }
  return (
    <section className='max-container padding-container mt-16'>
      <h1 className='font-bold text-4xl'>Ostatnie aktualności</h1>
      <div className='posts'>
        {posts.posts.map((postItem: Post) => (
         <NewsCardElement key={postItem.id} post={postItem} recentPosts={posts.posts}/>
        ))}
      </div>
    </section>
  )
}

export default NewsCardList