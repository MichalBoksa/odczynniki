"use client";
import React from 'react';
import { CldImage } from 'next-cloudinary';


const Slider = () => {
  return (
    <section className='flex' >
       <div className="carousel w-full max-h-[600px]">
    <div id="slide1" className="carousel-item relative w-full">
    <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/docpptgefgcz5fhvvvak.jpg" className="w-full object-fill z-5" alt='' height={2000} width={4000}
     crop={{
      type: 'auto',
      source: true
    }} />
      <div className='w-full absolute text-accent font-bold text-6xl z-10  tracking-wider' style={{top: '20%', left:'5%', transform: 'translateY(-50%)'}}>
         <h1 className='drop-shadow-md'>INNOWACJA NASZĄ DROGĄ DO CELU</h1>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
   <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/lbi5sg9al1hjcjuhdxys.png" className="w-full object-fill z-5" alt='' height={1020} width={1900} />
    <div className='w-full absolute text-accent font-bold text-6xl justify-center items-center z-10 tracking-wider' style={{top: '20%', left:'5%', transform: 'translateY(-50%)'}}>
         <h1 className='drop-shadow-md'>INNOWACJA NASZĄ DROGĄ DO CELU</h1>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/h0ryfe0aauzbxa1odxea.jpg" className="w-full object-cover z-5" alt='' height={1020} width={1900} />
    <div className='w-full absolute text-accent font-bold text-6xl justify-center items-center z-10 tracking-wider' style={{top: '20%', left:'5%', transform: 'translateY(-50%)'}}>
         <h1 className='drop-shadow-md'>INNOWACJA NASZĄ DROGĄ DO CELU</h1>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
       <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/hk5a68trk9tu0ioordbf.jpg" className="w-full object-fill z-5" alt='' height={1020} width={1900} />
    <div className='w-full absolute text-accent font-bold text-6xl justify-center items-center z-10 tracking-wider' style={{top: '20%', left:'5%', transform: 'translateY(-50%)'}}>
         <h1 className=''>INNOWACJA NASZĄ DROGĄ DO CELU</h1>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
     </section>
  )
}

export default Slider