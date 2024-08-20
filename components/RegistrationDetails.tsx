"use client";   
import { CldImage } from 'next-cloudinary'
import React from 'react'
import { useLocale } from '@/lang/LocaleContext'

const RegistrationDetails = () => {
    const {data} = useLocale();

  return (
    <section className='max-container bg-dark-white md:mb-96'>
      <div className='flex flex-col h-full py-12'>
        <div className="flex justify-start mb-4 py-4 px-6" >
            <h1 className='text-primary font-bold text-3xl md:text-5xl lg:text-6xl'>{data?.REGISTRATION_DETAILS}</h1>
        </div>

        <div className='flex flex-col px-6 sm:px-10 '>
            <div className='flex flex-col'>
                <h3 className='font-semibold mb-2 md:text-2xl'>{data?.COMPANY_NAME}</h3>
                <h3 className='ml-2 text-xs md:text-lg'>"CENTRUM METAL ODCZYNNIKI CHEMICZNE - MIDAS INVESTMENT SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ" Spółka Komandytowa</h3>
            </div>

            <div className="flex flex-col items-start mt-5">
                <h3 className='font-semibold mb-2 md:text-2xl'>{data?.COMPANY_HEADQUARTERS}</h3>

                <div className="flex flex-row ml-2 mb-2">
                    <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/ijt9xa0obuhvt6sbw2o3.svg' width={28} height={22} alt='home icon' className='mr-2'/>
                    <a className="text-xs md:text-lg">{data?.REGISTRATION_DETAILS_OFFICE_ADDRESS}</a>
                    </div>

            <div className="flex items-start ml-2 ">
                <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/aboutus/hp4dkvu0kg7rhi0dqdzw.svg' width={28} height={22} alt='tax icon' className='mr-2'/>
                <div className="flex flex-col text-xs md:text-lg">
                    <a className="">{data?.VAT}: 522-278-77-53</a>
                    <a className="">{data?.REGON}: 140297170</a>
                    <a className="">{data?.KRS}: 0000243729 {data?.COURT_REGISTER}</a>
                </div>
            </div>
        </div>

        <div className='flex flex-col mt-5'>
            <div className='flex flex-col'>
                <h3 className='font-semibold mb-2 md:text-2xl'>{data?.PRODUCTION_PLANT}</h3>
                <div className="flex flex-row ml-2">
                    <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/ijt9xa0obuhvt6sbw2o3.svg' width={28} height={22} alt='home icon' className='mr-2'/>
                    <h3 className='text-xs md:text-lg'>{data?.OFFICE_ADDRESS}</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
</section>
  )
}

export default RegistrationDetails