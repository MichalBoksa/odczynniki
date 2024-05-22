"use client";
import { CldImage } from 'next-cloudinary';
import React from 'react';
import NewsCardList from './NewsCardList';

const News = ({ latestPost }: { latestPost: any }) => {
  return (
    <section className='max-container padding-container mb-6'>
      <h1 className='font-bold text-6xl'>Aktualności</h1>

      <div className='flex mt-6 items-center gap-8 min-h-[600px]'>
        <div className='flex-1'>
          <CldImage
            className='rounded-lg min-h-[450px] object-cover'
            src={latestPost.img}
            alt="img"
            width={600}
            height={450}
            crop={{
              type: 'auto',
              source: true
            }}
          />
        </div>
        <div className='flex-1'>
          <h1 className='font-bold text-xl mb-6 text-left'>{latestPost.title}</h1>
          <p>{latestPost.desc}</p>
          <button className='flex btn btn-primary btn-sm text-cream rounded-lg items-center mt-3 ml-auto'>
            Czytaj więcej
          </button>
        </div>
      </div>

      <NewsCardList />
    </section>
  );
};

export default News;
