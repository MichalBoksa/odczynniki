"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';
import { useLocale } from '../lang/LocaleContext';

const AboutUs = () => {
    const { data } = useLocale() || {};
  return (
    <section >
    <div className="flex justify-center mb-10 mt-6" >
         <h1 className='text-primary font-bold text-5xl lg:text-6xl '>{data?.ABOUT_US}</h1>
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
            <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/docpptgefgcz5fhvvvak.jpg" className="w-full object-cover z-5" alt='' height={600} width={800} />
       </div>
   </div>


   {/* <div className='flex bg-sky-40 max-container w-full max-w-[60%] max-h-[700px]'>
       <div className='grid>'>
           <div className="flex justify-center mb-24 mt-8 lg:px-16 text-center" >
               <p className='text-white text-3xl lg:text-base '>W dynamicznie rozwijającym się otoczeniu ciągle pojawiają się nowe zadania i wyzwania dla polskich firm…</p>
           </div>
           <div className='flex lg:px-48 px-8 mb-16'>
               <p className=' text-white text-center font-extrabold text-m lg:text-l  '>W trakcie wielu lat dynamicznego rozwoju działalności INORG, w wyniku pojawiania się nowych potrzeb u naszych Klientów i zdobywania praktycznego doświadczenia w różnorodnych gałęziach przemysłu, Firma wypracowała szereg autorskich narzędzi eksperckich i modeli, użytecznych z punktu widzenia prowadzenia działalności w burzliwym i niestabilnym otoczeniu. Stale śledzimy najnowsze, światowe trendy dot. organizacji i zarządzania, obserwujemy praktyki światowych liderów oraz budujemy bazę wiedzy na podstawie ciekawych rozwiązań wdrożonych przez polskie i zagraniczne podmioty. Na bieżąco obserwujemy również sytuację rynkową w branżach naszych klientów.</p>
           </div>

           </div> */}

<div className='flex max-container w-full max-w-[60%] max-h-[700px]'>
       
       <div className='hidden md:flex max-w-[60%] max-h-[800px]' >
         <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/h0ryfe0aauzbxa1odxea.jpg" className="w-full object-cover z-5" alt='' height={600} width={1000}/>
       </div>
       

       <div className='bg-dark-gray  flex flex-col md:max-w-[40%] lg:px-8' >

       <div className='flex flex-col '>
           <div className="flex justify-center mb-8 mt-8 lg:px-16 text-center text-cream" >
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