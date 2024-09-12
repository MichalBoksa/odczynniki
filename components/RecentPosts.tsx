"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';
import { Post } from '@prisma/client';
import Link from 'next/link';
import { useLocale } from '../lang/LocaleContext';

interface NewsProps {
        recentPosts: Post[];
}

const RecentPosts: React.FC<NewsProps> = ({ recentPosts }) => {
    const { data } = useLocale() || {};
    return (
        <div className='flex flex-col mt-12 mb-16'>
               
                        <h2 className='font-semibold text-md'>{data?.LATEST_NEWS2}</h2>
                        {recentPosts.map((postItem: Post) => (
                           <Link key={postItem.id} href= {`/news/${postItem.slug}`}>
                             <div  className='flex gap-8 mt-3 border-b-2 border-b-accent pb-2'>
                                <div className=' flex border-1 '>
                                        <CldImage className='aspect-square h-10 w-10 object-cover' width={80} height={80} src={postItem.img} alt="contact-bg"/>
                                </div>
                                {postItem.title.length > 30 ? <div className=' justify-center text-sm flex-1'>{postItem.title.substring(0,30).concat(" . . .")}</div> 

                                : <div className='justify-center text-sm flex-1'>{postItem.title}</div>
                        }
                            </div>
                        </Link>
                 

                ))}
        </div>
    )
}

export default RecentPosts