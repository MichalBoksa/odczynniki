"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';
import { useLocale } from '../lang/LocaleContext';
import CerificatesSlider from './CerificatesSlider';

const AboutUs = () => {
    const { data } = useLocale() || {};
  return (
    <section >
    <div className="flex justify-center mb-10 mt-6" >
         <h1 className='text-primary font-bold text-3xl md:text-5xl lg:text-6xl '>{data?.ABOUT_US}</h1>
    </div>

   <div className='flex flex-col md:flex-row max-container w-full lg:min-h-[300px] tracking-wide'>
       
       <div className='flex flex-col bg-dark-ivory md:max-w-[60%] '>
          
           <div className='text-secondary-content  flex lg:px-40 px-30 ml-8 mr-8 mb-8 mt-10 '>
               <p className='text-left font-bold text-xl lg:text-2xl '>{data?.HISTORY}</p>
           </div>

           <div className='text-jetblack flex lg:px-20 px-30 ml-12 mr-12 pb-4 '>
               <p className='text-justify font-bold text-sm lg:text-l '>{data?.HISTORY_DESC}</p>
           </div>
     </div>

       <div className='flex md:max-w-[40%] max-h-[600px]' >
            <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/aboutus/t1b0an5rjaxog23d9g1c.png" className="w-full object-cover z-5" alt='' height={600} width={800} />
       </div>
   </div>

<div className='flex max-container w-full max-w-[60%] max-h-[700px] '>
       
       <div className='hidden md:flex max-w-[60%] max-h-[800px]' >
         <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/sncanqm2jh7mdjslfrng.jpg" className="w-full object-cover z-5" alt='' height={600} width={1000}/>
       </div>
       

       <div className='bg-dark-gray flex flex-col md:max-w-[40%] lg:px-8 items-center justify-center' >

       <div className='flex flex-col '>
           <div className="flex mb-8 mt-8 px-3 lg:px-16 text-center text-cream " >
               <p className=' text-left font-bold  md:text-md lg:text-2xl'>{data?.SPECIALIZATION}</p>
           </div>
           <div className='flex px-8 mb-8 text-cream'>
               <p className=' text-justify lg:font-medium text-sm lg:text-l'>{data?.SPECIALIZATION_DESC}</p>
           </div>

           </div>

       </div>
   </div>



   <div className='flex flex-col md:flex-row max-container w-full lg:min-h-[300px]'>
       
   <div className='md:hidden flex max-h-[800px]' >
            <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/ktse4ncusqnwaycyxltw.jpg" className="w-full object-cover z-5" alt='' height={1020} width={1900} />
       </div>


       <div className='flex flex-col md:max-w-[60%] bg-dark-ivory'>
          
           <div className='text-secondary-content flex lg:px-40 px-30 ml-8 mr-8 mb-8 mt-10 '>
               <p className='text-left font-bold text-xl lg:text-2xl '>{data?.INNOVATIONS}</p>
           </div>

           <div className='text-black flex lg:px-20 px-30 ml-12 mr-12 pb-6'>
               <p className='text-justify font-bold text-sm lg:text-l '>{data?.INNOVATIONS_DESC} </p>
           </div>
     </div>

     <div className='hidden md:flex md:max-w-[40%] max-h-[800px]' >
            <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/ktse4ncusqnwaycyxltw.jpg" className="w-full object-cover z-5" alt='' height={1020} width={1900} />
       </div>

   </div>  

  </section>
  )
}

export default AboutUs