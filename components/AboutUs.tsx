"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';
import CerificatesSlider from './CerificatesSlider';

const AboutUs = () => {
  return (
    <section className='mb-10'>
    <div className="flex justify-center mb-10 mt-6" >
         <h1 className='text-primary font-bold text-3xl lg:text-6xl '>Kim jesteśmy</h1>
    </div>

   <div className='flex max-container w-full lg:min-h-[300px] tracking-wide'>
       
       <div className='flex flex-col bg-dark-ivory max-w-[60%] '>
          
           <div className='text-secondary-content  flex lg:px-40 px-30 ml-8 mr-8 mb-8 mt-10 '>
               <p className='text-left font-bold text-m lg:text-2xl '>Nasza historia</p>
           </div>

           <div className='text-jetblack flex lg:px-20 px-30 ml-12 mr-12 '>
               <p className='text-justify font-bold text-m lg:text-l'>Firma „Centrum Metal Odczynniki Chemiczne Midas-Investment Sp. z o.o.” Spółka Komandytowa, w skrócie CMOCMI, została założona w roku 2005 i stanowiła rozwinięcie wcześniejszej działalności biznesowej założycieli - handel międzynarodowy produktami chemicznymi. 
                     Bazując na wiedzy o rynku oraz doświadczeniu w handlu, tworząc Spółkę, właściciele firmy zdecydowali się rozpocząć działalność produkcyjną, na bazie której, zostały stworzone solidne podstawy funkcjonowania i rozwoju.
                </p>
           </div>
     </div>

       <div className='flex max-w-[40%] max-h-[600px]' >
            <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/zjwnndqtnefow5c5cakz.jpg" className="w-full object-cover z-5" alt='' height={600} width={800} />
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
       
       <div className='flex max-w-[60%] max-h-[600px]' >
         <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/dqh1dsj3f82k7cgzbctj.jpg" className="w-full object-cover z-5" alt='' height={600} width={1000}/>
       </div>
       

       <div className='bg-dark-gray  flex flex-col max-w-[40%] lg:px-8' >

       <div className='flex flex-col '>
           <div className="flex justify-center mb-8 mt-8 lg:px-16 text-center text-cream" >
               <p className=' text-center font-bold text-md lg:text-2xl'>W tym się specjalizujemy</p>
           </div>
           <div className='flex px-8 mb-8 text-cream'>
               <p className=' text-justify lg:font-medium text-l lg:text-l'>Głównym przedmiotem działalności CMOCMI jest produkcja chemikaliów nieorganicznych w tym w szczególności związków (soli metali) molibdenu, selenu, miedzi, manganu, cynku, kobaltu i innych.
                CMOCMI jest jedynym w Polsce i wiodącym w Europie producentem sodu molibdenianu i amonu heptamolibdenianu oraz liczącym się w Europie producentem sodu seleninu. 
                Poza działalnością produkcyjną firma prowadzi również międzynarodową działalność handlową w zakresie specjalistycznych związków chemicznych.
                Firma posiada certyfikaty ISO 9001 i 14001, GMP+, dzięki czemu produkty mogą trafiać do najbardziej wymagających odbiorców z wielu branż przemysłowych oraz producentów pasz i artykułów spożywczych.
                </p>
           </div>

           </div>

          

       </div>
   </div>



   <div className='flex max-container w-full lg:min-h-[300px]'>
       
       <div className='flex flex-col max-w-[60%] bg-dark-ivory'>
          
           <div className='text-secondary-content flex lg:px-40 px-30 ml-8 mr-8 mb-8 mt-10 '>
               <p className='text-left font-bold text-m lg:text-2xl '>Innowacje i zrównoważony rozwój - kluczowe filary</p>
           </div>

           <div className='text-black flex lg:px-20 px-30 ml-12 mr-12 pb-6'>
               <p className='text-justify font-bold text-m lg:text-l  '>
               Obecnie firma posiada nowoczesne zaplecze techniczne i technologiczne do produkcji związków chemicznych o pożądanych przez klientów parametrach. CMOCMI od wielu lat współpracuje z wiodącymi krajowymi jednostkami badawczymi oraz z uczelniami wyższymi i Polska Akademią Nauk. 
                Z uwagi na ograniczoną podaż niezbędnych do produkcji surowców zawierających molibden, selen i inne metale znajdujące się na listach krytycznych i deficytowych, CMOCMI od lat specjalizuje się w ich pozyskiwaniu ze źródeł odpadowych lub surowców pierwotnych o niskiej jakości. Dzięki innowacyjnym procesom hydrometalurgicznym firma uzyskuje dostęp do takich surowców, z których jest w stanie wytworzyć produkty o wysokiej czystości - na czym buduje swoją pozycję konkurencyjną wpisując się jednocześnie w filozofię Gospodarki Obiegu Zamkniętego.
             </p>
           </div>
     </div>

       <div className='flex max-w-[40%] max-h-[600px]' >
            <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/ktse4ncusqnwaycyxltw.jpg" className="w-full object-cover z-5" alt='' height={1020} width={1900} />
       </div>
   </div>
   
  </section>
  )
}

export default AboutUs