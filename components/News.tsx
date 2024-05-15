"use client";
import { CldImage } from 'next-cloudinary';
import React from 'react'
import NewsCardList from './NewsCardList'

const News = () => {
  return (
    <section className='max-container padding-container mb-6'>
        <h1 className='font-bold text-6xl'>Aktualności</h1>

        <div className='flex mt-6 items-center gap-8 min-h-[600px]'>
           <div className='flex-1'>
            <CldImage className='rounded-lg min-h-[600px] cover-cover' src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/ktse4ncusqnwaycyxltw.jpg" alt="Farm" width={1200} height={800} />
            </div> 
            <div className=' flex-1'>
                <h1 className='font-bold text-xl mb-6 text-left'>Tytuł post</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <button className='flex btn-active btn-primary btn-sm rounded-lg items-center mt-3 ml-auto'>Czytaj więcej</button>
            </div>
        </div>
        
        <NewsCardList />
    </section>
  )
}

export default News