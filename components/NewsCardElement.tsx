"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';
import { Post } from '@prisma/client';
import Link from 'next/link';
interface NewsProps {
    post: Post;
    recentPosts: Post[];
  }
const NewsCardElement: React.FC<NewsProps> = (post,recentPosts) => {
  return (
    <Link href={`/news/${post.post.slug}`}> <div>
        <div className='flex mt-7 items-center justify-center gap-8 '>
            <div className='flex-none'>
                <CldImage src={post.post.img} width={350} height={300} alt="post image" className='object-cover rounded-lg' />
            </div>
            <div className=' flex-1'>
                <span className='text-gray-400'>{post.post.createdAt.toString().substring(0,10)}</span>
                <h1 className='font-bold text-xl mb-6 text-left' >{post.post.title}</h1>
                {/* <p className='px-20'  dangerouslySetInnerHTML={{__html: post.post.desc.substring(0,120)}}>...</p> */}
                <button className='flex btn btn-primary btn-sm text-cream rounded-lg items-center mt-3 mb-3 ml-auto'>Czytaj więcej</button>
                <div className='border-b-2 border-b-gray-300 w-9/10'></div>
            </div>
        </div>
       
        </div>
        </Link>
  )
}

export default NewsCardElement