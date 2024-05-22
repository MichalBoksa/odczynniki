"use client";
import { CldImage } from 'next-cloudinary';
import React from 'react'

const CerificatesSlider = () => {
  return (
    <div className='bg-base-200 rounded w-3/5 mr-auto ml-auto'>
    <div className="flex justify-center mb-10 mt-2" >
         <h1 className='text-jetblack font-bold text-m lg:text-2xl '>Nasze certyfikaty</h1>
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
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
</div>
    </div>
  )
}

export default CerificatesSlider