"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

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

        <div className='flex flex-col mb-20'>
            <div className=''>
              <h1 className='font-semibold text-3xl mt-5 ml-6 text-neutral'>Aktualnie poszukujemy osób na dane stanowiska:</h1>
            </div>
            <div className='flex ml-auto mr-32'>
              <div className='flex gap-10 mt-5'>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Pracownik do Działu księgowo-rachunkowego w firmie produkcyjnej</h2>
                
                  <div className="card-actions justify-end">
                   <Link href="jobOffer"> <button className="btn btn-primary text-cream">Zobacz szczegóły</button></Link>
                  </div>
                </div>
              </div>


              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Aparatowy procesów chemicznych</h2>
                    <p> </p>
                  <div className="card-actions justify-end">
                  <Link href="jobOffer2"><button className="btn btn-primary text-cream">Zobacz szczegóły</button></Link>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default CareersInfo