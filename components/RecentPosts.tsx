"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';

const RecentPosts = () => {
  return (
    <div className='flex flex-col mt-32'>
        <h2>Najnowsze aktualności</h2>
            <div className='flex gap-8 mt-3 border-b-2 border-b-accent pb-2'>
                <div className='relative flex border-1 object-cover'>
                    <CldImage className='rounded-3xl aspect-square' width={35} height={35} src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/twnplqvxuw7e1ucig6g3.jpg" alt="contact-bg"/>
                    </div>
                <div className='text-sm'>Targi Chem Expo India 2024
                    </div>
            </div>
            <div className='flex gap-8 mt-3 border-b-2 border-b-accent pb-2'>
                <div className='relative flex border-1 object-cover'>
                    <CldImage className='rounded-3xl aspect-square' width={35} height={35} src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/twnplqvxuw7e1ucig6g3.jpg" alt="contact-bg"/>
                    </div>
                <div className='text-sm'>Targi Chem Expo India 2024
                    </div>
            </div>

            <div className='flex gap-8 mt-3 border-b-2 border-b-accent pb-2'>
                <div className='relative flex border-1 object-cover'>
                    <CldImage className='rounded-3xl aspect-square' width={35} height={35} src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/twnplqvxuw7e1ucig6g3.jpg" alt="contact-bg"/>
                    </div>
                <div className='text-sm'>Targi Chem Expo India 2024
                    </div>
            </div>
    </div>
  )
}

export default RecentPosts