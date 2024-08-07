"use client";
import { CldImage } from 'next-cloudinary';
import React from 'react'
import { useLocale } from '../lang/LocaleContext';
import { CERTIFICATES } from '@/constants';

const CerificatesSlider = () => {
  const { data, currentLocale } = useLocale() || {};
  return (
    <div className='max-container'>
      <div className='bg-ivory w-full mr-auto ml-auto '>
        <div className="flex justify-center mb-4 py-4" >
            <h1 className='text-secondary-content font-bold text-m lg:text-4xl'>{data?.OUR_CERTIFICATES}</h1>
        </div>
        { CERTIFICATES.map((cert) => (
          cert.code === currentLocale &&
      <div key={cert.code} className="carousel w-full max-h-[600px]">
     
        <div id="item1" className="carousel-item w-full">
           <CldImage src={cert.srcGmp} width={400} height={600} alt="" className=' mr-auto ml-auto'/>
        </div> 

        <div id="item2" className="carousel-item w-full">
          <CldImage src={cert.srcIso} width={400} height={600} alt="" className="mr-auto ml-auto" />
        </div> 
   
      </div> 
    
    ))}


    <div className="flex justify-center w-full py-2 gap-2 mt-3">
      <a href="#item1" className="btn btn-xs bg-cream">1</a> 
      <a href="#item2" className="btn btn-xs bg-cream">2</a> 
    </div>
      </div>
  </div>
  )
}

export default CerificatesSlider