
import React from 'react'
import NewsCardElement from './NewsCardElement'
import { Post } from '@prisma/client'

interface NewsProps {
  posts: Post[];
}


const NewsCardList: React.FC<NewsProps> = (posts) => {
  //  console.log("posts NEW CARD LIST" + JSON.stringify(posts));
  const arr = posts.posts;
  if (!Array.isArray(posts.posts)) {
    console.log("NLLLLLLLL")
    return null; // or handle the error in an appropriate way
  }

  return (
    <section className='max-container padding-container mt-16'>
      <h1 className='font-bold text-4xl'>Ostatnie aktualności</h1>
      <div className='posts'>
        {posts.posts.map((postItem: Post) => (
          console.log("postItem" + JSON.stringify(postItem)),
          <NewsCardElement key={postItem.id} post={postItem} />
        ))}
      </div>
    </section>
  )
}

export default NewsCardList