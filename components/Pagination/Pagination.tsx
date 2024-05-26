import { useRouter } from 'next/navigation';
import React from 'react'

const Pagination = ({page, hasPrevious, hasNext}:{page:any, hasPrevious:any, hasNext:any}) => {
    const router = useRouter();
  return (
    <div className='flex justify-between'>
        <button className='w-24 p-2 text-sm bg-primary text-ivory cursor-pointer' disabled={!hasPrevious} onClick={() => router.push(`?page=${page - 1}`)}>Poprzednia</button>
        <button className='w-24 p-2 text-sm bg-primary text-ivory cursor-pointer' disabled={!hasNext} onClick={() => router.push(`?page=${page + 1}`)}>Następna</button> 
    </div>
  )
}

export default Pagination