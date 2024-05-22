"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';

const CareersInfo = () => {
  return (
    <section className='max-container'>
        <div className='bg-base-200 max-h-[350px] w-full flex'>
            <div className='flex flex-col w-2/5'>
                <h1 className='font-semibold text-xl mt-12 ml-6 text-neutral'>Dołącz do naszego zespołu</h1>
                <p className='text-md text-secondary-content mt-6 px-14'>Dołącz do zespołu CMOCMI - wiodącego producenta chemikaliów nieorganicznych w Europie. Poszukujemy osób z pasją do chemii, gotowych do pracy w dynamicznym środowisku i rozwijania się razem z nami. Oferujemy możliwość pracy z wykwalifikowanym zespołem, nowoczesne zaplecze techniczne i stabilne warunki zatrudnienia. Aplikuj już dziś i wspólnie kształtuj przyszłość branży chemicznej</p>
            </div>

            <div className='w-3/5'>
                <CldImage className='h-full object-cover' src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/ktse4ncusqnwaycyxltw.jpg" alt="Farm" width={1200} height={700} />
            </div>
        </div>

        <div className='flex gap-6'>
            
        </div>
    </section>
  )
}

export default CareersInfo