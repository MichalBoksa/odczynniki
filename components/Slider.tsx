"use client";
import React, { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import { useLocale } from '../lang/LocaleContext';

const Slider = () => {
  const { data } = useLocale() || {};
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3; // Zaktualizuj liczbę slajdów w razie potrzeby

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
    }, 108000); // Przełączanie co 5 sekund

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? totalSlides : prevSlide - 1));
  };

  return (
    <section className='flex'>
      <div className="carousel w-full max-h-[500px] xl:max-h-[520px]  2xl:max-h-[680px] ">
        <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'} `}>
          <div className="flex  max-h-[500px] xl:max-h-[520px]  2xl:max-h-[680px] ">
            <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1722287248/midas/slider/c6cpd6lerxizynkpzlye.jpg" className="w-full object-cover z-5 h-auto" alt='' height={1080} width={1900}/>
          </div>
          <div className='w-full absolute text-ivory font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  2xl:text-7xl justify-center items-center z-10 tracking-wider' style={{top: '20%', left:'3%', right:'5%', transform:  'translateY(-50%)'}}>
            <h1 className='drop-shadow-md'>{data?.SLIDER_TITLE}</h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={goToPrevSlide} className="btn btn-circle">❮</button>
          <button onClick={goToNextSlide} className="btn btn-circle">❯</button>  
          </div>
        </div> 

        <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'} `}>
          <div className="flex max-h-[500px] xl:max-h-[520px]  2xl:max-h-[680px]">
           <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/slider/mvckox7vc2k1vae25xnf.jpg" className="w-full object-cover z-5 h-auto"  height={1080} width={1900} alt=''  />
          </div>
          <div className='w-full absolute text-ivory font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl justify-center items-center z-10 tracking-wide' style={{top: '20%', left:'3%', right:'5%', transform: 'translateY(-50%)'}}>
            <h1 className='drop-shadow-md'>{data?.SLIDER_TITLE}</h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={goToPrevSlide} className="btn btn-circle">❮</button>
          <button onClick={goToNextSlide} className="btn btn-circle">❯</button>  
          </div>
        </div> 

        <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
         <div className="flex  max-h-[500px] xl:max-h-[520px]  2xl:max-h-[680px]">
            <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/slider/bvpmxmonpf1dm1q2p4jk.jpg" className="w-full object-cover z-5" alt=''  height={1080} width={1900}/>
          </div>
          <div className='w-full absolute text-ivory font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  2xl:text-7xl justify-center items-center z-10 tracking-wider' style={{top: '20%', left:'3%', right:'5%', transform:  'translateY(-50%)'}}>
            <h1 className='drop-shadow-md'>{data?.SLIDER_TITLE}</h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={goToPrevSlide} className="btn btn-circle">❮</button>
          <button onClick={goToNextSlide} className="btn btn-circle">❯</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider;
