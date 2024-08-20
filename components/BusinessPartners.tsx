'use client'
import { CldImage } from 'next-cloudinary'
import React from 'react'
import { useLocale } from '@/lang/LocaleContext'
import { BUSINESS_PARTNERS_LOGO_LIST } from '@/constants'

const BusinessPartners = () => {
    const {data} = useLocale();

  return (
    <section className='max-container bg-dark-white md:mb-60'>
        <div className='flex flex-col h-full py-12'>
            <div className="flex justify-start mb-4 py-4 px-6" >
                <h1 className='text-primary font-bold text-3xl md:text-5xl lg:text-6xl'>{data?.BUSINESS_PARTNERS}</h1>
            </div>

            <div className='flex flex-col px-6 sm:px-20 '>
                <div className="flex flex-col items-start mt-5">
                    <div className="flex flex-wrap gap-10 md:gap-24 mb-2">
                        {BUSINESS_PARTNERS_LOGO_LIST.map((partner, index) => (
                        <CldImage key={index} src={partner} width={200} height={200} alt='business partner logo' className='mr-2'/>
                        ))}
                        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/businessPartners/oxgqbjulfhw3ceetuwvk.png' width={350} height={200} alt='business partner logo' className='mr-2'/>
                    </div>
                </div>
            </div>
        </div>
</section>
  )
}

export default BusinessPartners