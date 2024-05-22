"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';

const NewsCardElement = () => {
  return (
    <div>
        <div className='flex mt-7 items-center justify-center gap-8 '>
            <div className='flex-none'>
                <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/ztkkzanymgcsua5kadl1.jpg" width={350} height={300} alt="post image" className='object-cover rounded-lg' />
            </div>
            <div className=' flex-1'>
                <span className='text-gray-400'>11.04.2024</span>
                <h1 className='font-bold text-xl mb-6 text-left'>Tytuł post</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <button className='flex btn btn-primary btn-sm text-cream rounded-lg items-center mt-3 mb-3 ml-auto'>Czytaj więcej</button>
                <div className='border-b-2 border-b-gray-300 w-9/10'></div>
            </div>
        </div>
        <div className='flex mt-12 items-center justify-center gap-8'>
            <div className=' flex-none'>
                <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/ktse4ncusqnwaycyxltw.jpg" width={350} height={300} alt="post image" className=' h-full object-cover rounded-lg' />
            </div>
            <div className=' flex-1'>
                <span>11.04.2024</span>
                <h1 className='font-bold text-xl mb-6 text-left'>Tytuł post</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <button className='flex btn btn-primary btn-sm text-cream rounded-lg items-center mt-3 mb-3 ml-auto'>Czytaj więcej</button>
                <div className='border-b-2 border-b-gray-300 w-9/10'></div>
            </div>
        </div>
        <div className=' flex mt-12 items-center justify-center gap-8'>
            <div className=' flex-none'>
                <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/zjwnndqtnefow5c5cakz.jpg" width={350} height={300} alt="post image" className='object-cover rounded-lg' />
            </div>
            <div className='flex-1'>
                <span>11.04.2024</span>
                <h1 className='font-bold text-xl mb-6 text-left'>Tytuł post</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <button className='flex btn btn-primary btn-sm text-cream rounded-lg items-center mt-3 mb-3 ml-auto'>Czytaj więcej</button>
                <div className='border-b-2 border-b-gray-300 w-9/10'></div>
           </div>
        </div>
        </div>

  )
}

export default NewsCardElement