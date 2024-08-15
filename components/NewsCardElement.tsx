"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';
import { Post } from '@prisma/client';
import Link from 'next/link';
import { useLocale } from '@/lang/LocaleContext';
interface NewsProps {
    post: Post;
    recentPosts: Post[];
  }
const NewsCardElement: React.FC<NewsProps> = (post,recentPosts) => {
    const {data} = useLocale();
  return (
    <Link href={`/news/${post.post.slug}`}> <div>
        <div className='flex flex-col lg:flex-row mt-7 items-center justify-center gap-8 '>
            <div className='flex-none'>
                <CldImage src={post.post.img} width={350} height={300} alt="post image" className='object-cover rounded-lg' />
            </div>
            <div className=' flex-1'>
                <span className='text-secondary-content'>{post.post.createdAt.toString().substring(0,10)}</span>
                <h1 className='font-bold text-xl mb-6 text-left' >{post.post.title}</h1>
                <div className=' px-4 lg:px-20 text-secondary-content'  dangerouslySetInnerHTML={{__html: post.post.desc.substring(0,120).concat(" . . .")}}></div>
                <button className='flex btn btn-primary btn-sm text-cream rounded-lg items-center mt-3 mb-3 ml-auto'>{data?.READ_MORE}</button>
                <div className='border-b-2 border-b-gray-300 w-9/10'></div>
            </div>
        </div>
       
        </div>
        </Link>
  )
}

export default NewsCardElement