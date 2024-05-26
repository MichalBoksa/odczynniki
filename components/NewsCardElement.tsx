"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';
import { Post } from '@prisma/client';
interface NewsProps {
    post: Post;
  }
const NewsCardElement: React.FC<NewsProps> = (post) => {
    console.log("post" + JSON.stringify(post));
  return (
    <div>
        <div className='flex mt-7 items-center justify-center gap-8 '>
            <div className='flex-none'>
                <CldImage src={post.post.img} width={350} height={300} alt="post image" className='object-cover rounded-lg' />
            </div>
            <div className=' flex-1'>
                <span className='text-gray-400'>{post.post.createdAt.toString()}</span>
                <h1 className='font-bold text-xl mb-6 text-left'>{post.post.title}</h1>
                <p>{post.post.desc}</p>
                <button className='flex btn btn-primary btn-sm text-cream rounded-lg items-center mt-3 mb-3 ml-auto'>Czytaj więcej</button>
                <div className='border-b-2 border-b-gray-300 w-9/10'></div>
            </div>
        </div>
       
        </div>

  )
}

export default NewsCardElement