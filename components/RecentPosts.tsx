"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';
import { Post } from '@prisma/client';
import Link from 'next/link';

interface NewsProps {
        recentPosts: Post[];
}

const RecentPosts: React.FC<NewsProps> = ({ recentPosts }) => {
    return (
        <div className='flex flex-col mt-12 mb-16'>
                
                        <h2 className='font-semibold text-md'>Najnowsze aktualności</h2>
                        {recentPosts.map((postItem: Post) => (
                           <Link key={postItem.id} href= {`/news/${postItem.slug}`}>
                             <div  className='flex gap-8 mt-3 border-b-2 border-b-accent pb-2'>
                                <div className='relative flex border-1 object-cover'>
                                        <CldImage className='rounded-3xl aspect-square' width={40} height={40} src={postItem.img} alt="contact-bg"/>
                                </div>
                                <div className='text-sm'>{postItem.title}</div>
                            </div>
                        </Link>
                 

                ))}
        </div>
    )
}

export default RecentPosts