'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useLocale } from '@/lang/LocaleContext';

const Pagination = ({page, hasPrevious, hasNext}:{page:any, hasPrevious:any, hasNext:any}) => {
  const {data} = useLocale();
    const router = useRouter();
  return (
    <div className='flex justify-around mt-10'>
        <button className='w-24 p-2 text-sm bg-primary text-ivory cursor-pointer disabled:cursor-not-allowed disabled:bg-dark-gray' disabled={!hasPrevious} onClick={() => router.push(`?page=${page - 1}`)}>{data?.PREVIOUS}</button>
        <button className='w-24 p-2 text-sm bg-primary text-ivory cursor-pointer disabled:cursor-not-allowed disabled:bg-dark-gray' disabled={!hasNext} onClick={() => router.push(`?page=${page + 1}`)}>{data?.NEXT}</button> 
    </div>
  )
}

export default Pagination