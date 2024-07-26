"use client";
import { CldImage } from 'next-cloudinary';
import React from 'react'
import { useLocale } from '../lang/LocaleContext';

const CerificatesSlider = () => {
  const { data } = useLocale() || {};
  return (
    <div className='max-container'>
      <div className='bg-ivory w-3/5 mr-auto ml-auto '>
        <div className="flex justify-center mb-4 py-4" >
            <h1 className='text-secondary-content font-bold text-m lg:text-4xl'>{data?.OUR_CERTIFICATES}</h1>
        </div>

      <div className="carousel w-full max-h-[600px]">
      <div id="item1" className="carousel-item w-full">
        <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/jgnsjhoxomyio4unnl4b.jpg" width={400} height={600} alt="" className=' mr-auto ml-auto'/>
      </div> 
      <div id="item2" className="carousel-item w-full">
        <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/aub3f6kxlaap4mfgyjre.jpg" width={400} height={600} alt="" className="mr-auto ml-auto" />
    </div> 

  </div> 
    <div className="flex justify-center w-full py-2 gap-2 mt-3 mb-3">
      <a href="#item1" className="btn btn-xs bg-cream">1</a> 
      <a href="#item2" className="btn btn-xs bg-cream">2</a> 
    </div>
      </div>
  </div>
  )
}

export default CerificatesSlider