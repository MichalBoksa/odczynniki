'use client';
import Link from 'next/link';
import React from 'react'
import { useLocale } from '@/lang/LocaleContext';

const Pagination = ({page, hasPrevious, hasNext}:{page:any, hasPrevious:any, hasNext:any}) => {
  const {data} = useLocale();
  return (
    <div className='flex justify-around mt-10'>
        {hasPrevious ? <Link rel="prev" className="w-24 p-2 text-sm text-center bg-primary text-ivory" href={page === 2 ? '/news/' : `/news/?page=${page - 1}`}>{data?.PREVIOUS}</Link> : <span aria-disabled="true" className="w-24 p-2 text-sm text-center bg-dark-gray text-ivory">{data?.PREVIOUS}</span>}
        {hasNext ? <Link rel="next" className="w-24 p-2 text-sm text-center bg-primary text-ivory" href={`/news/?page=${page + 1}`}>{data?.NEXT}</Link> : <span aria-disabled="true" className="w-24 p-2 text-sm text-center bg-dark-gray text-ivory">{data?.NEXT}</span>}
    </div>
  )
}

export default Pagination
