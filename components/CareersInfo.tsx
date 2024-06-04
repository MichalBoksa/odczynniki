"use client";
import React, { useEffect, useRef } from 'react'
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

const CareersInfo = () => {

  const careersOffice = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash === '#careersOffice') {
        careersOffice.current?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleScroll();
    window.addEventListener('hashchange', handleScroll); 

    return () => {
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);


  return (
    <section className='max-container'>
        <div className='bg-base-200 max-h-[350px] w-full flex'>
            <div className='flex flex-col w-2/5'>
                <h1 className='font-semibold text-xl mt-12 ml-6 text-neutral'>Dołącz do naszego zespołu</h1>
                <p className='text-md text-secondary-content mt-6 px-14'>Dołącz do zespołu CMOCMI - wiodącego producenta chemikaliów nieorganicznych w Europie. Poszukujemy osób z pasją do chemii, gotowych do pracy w dynamicznym środowisku i rozwijania się razem z nami. Oferujemy możliwość pracy z wykwalifikowanym zespołem, nowoczesne zaplecze techniczne i stabilne warunki zatrudnienia. Aplikuj już dziś i wspólnie kształtuj przyszłość branży chemicznej</p>
            </div>

            <div id="office" ref={careersOffice} className='w-3/5'>
                <CldImage className='h-full object-fill' src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/sncanqm2jh7mdjslfrng.jpg" alt="Farm" width={1000} height={700} />
            </div>
        </div>

        <div className='flex mb-10 justify-around mt-20'>
            <div className='flex flex-col w-1/2 pl-2'>
                <h1 className='font-semibold text-xl ml-5 text-neutral'>Czekamy na Twoje CV!</h1>
                <p className='text-md text-secondary-content mt-6 px-14'>Czy posiadasz unikalne umiejętności i szukasz miejsca, gdzie Twoje talenty zostaną docenione i rozwinięte? Jeśli tak, to jesteś we właściwym miejscu! Nasza firma dynamicznie się rozwija i zawsze poszukuje utalentowanych osób, które chcą dołączyć do naszego zespołu.</p>
            </div>
            
             
              <div className="flex flex-col justify-center items-center px-7 mr-7">

                          <div className='flex flex-col items-center justify-start'>
                            <h1 className="font-semibold text-2xl mb-5">Nasze biuro kadr</h1>
                          </div>

                                <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/yr2j0bxspepty0adi8sm.svg' width={30} height={30} alt='home icon' className='mr-2'/>
                                <div className='flex flex-col justify-center items-center '>
                                    <h2 className="mt-3 mb-3 text-base font-medium text-jetblack">Agnieszka Tęcza </h2>
                                   
                                    <div className="flex items-center mb-1 mr-auto">
                                        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/vzigu4ctnrf3h83fgbal.svg' width={22} height={22} alt='email icon' className='mr-2'/>
                                        <a className="text-sm text-secondary-content">atecza@odczynniki.com.pl</a>
                                    </div>
                                    
                                    <div className="flex items-center mr-auto">
                                        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/oee1rkckq36hdhtpmox5.svg' width={20} height={20} alt='phone icon' className='mr-2'/>
                                        <a className='text-sm '>+48 503 089 563</a>         
                                    </div>
                                  
                            </div>
                        </div>
                        
        </div>
        <div className='flex items-center border-b-2 border-b-secondary-content w-3/5 mt-6'></div>
        <div className='flex flex-col mb-20'>
            <div className=''>
              <h1 className='font-semibold text-3xl mt-5 ml-6 text-neutral'>Aktualnie poszukujemy osób na dane stanowiska:</h1>
            </div>
            <div className='flex ml-auto mr-32'>
              <div className='flex gap-10 mt-5'>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Pracownik do Działu księgowo-rachunkowego w firmie produkcyjnej</h2>
                
                  <div className="card-actions justify-end">
                   <Link href="jobOffer"> <button className="btn btn-primary text-cream">Zobacz szczegóły</button></Link>
                  </div>
                </div>
              </div>


              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Aparatowy procesów chemicznych</h2>
                    <p> </p>
                    <div className="card-actions justify-end">
                      <Link href="jobOffer2"><button className="btn btn-primary text-cream">Zobacz szczegóły</button></Link>
                    </div>
                 </div>
                </div>
               
              </div>

             
          </div>
         
        </div>


       
    </section>
  )
}

export default CareersInfo