"use client";
import React, { useEffect, useRef } from 'react'
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { useLocale } from '../lang/LocaleContext';

const CareersInfo = () => {
  const { data } = useLocale() || {};
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
                <h1 className='font-semibold text-xl mt-12 ml-6 text-neutral'>{data?.JOIN_US}</h1>
                <p className='text-md text-secondary-content mt-6 px-14'>{data?.JOIN_TEAM}</p>
            </div>

            <div id="office" ref={careersOffice} className='w-3/5'>
                <CldImage className='h-full object-cover' src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/career/psstokd4lcqhg5b1u4vr.jpg" alt="Farm" width={1000} height={700} />
            </div>
        </div>

        <div className='flex mb-10 justify-around mt-20'>
            <div className='flex flex-col w-1/2 pl-2'>
                <h1 className='font-semibold text-xl ml-5 text-neutral'>{data?.CV}</h1>
                <p className='text-md text-secondary-content mt-6 px-14'>{data?.SKILLS}</p>
            </div>
            
             
              <div className="flex flex-col justify-center items-center px-7 mr-7">

                          <div className='flex flex-col items-center justify-start'>
                            <h1 className="font-semibold text-2xl mb-5">{data?.HR_OFFICE}</h1>
                          </div>

                                <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/yr2j0bxspepty0adi8sm.svg' width={30} height={30} alt='home icon' className='mr-2'/>
                                <div className='flex flex-col justify-center items-center '>
                                    <h2 className="mt-3 mb-3 text-base font-medium text-jetblack">{data?.HR_OFFICE_NAME} </h2>
                                   
                                    <div className="flex items-center mb-1 mr-auto">
                                        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/vzigu4ctnrf3h83fgbal.svg' width={22} height={22} alt='email icon' className='mr-2'/>
                                        <a className="text-sm text-secondary-content">{data?.HR_OFFICE_EMAIL}</a>
                                    </div>
                                    
                                    <div className="flex items-center mr-auto">
                                        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/oee1rkckq36hdhtpmox5.svg' width={20} height={20} alt='phone icon' className='mr-2'/>
                                        <a className='text-sm '>{data?.HR_OFFICE_PHONE}</a>         
                                    </div>
                                  
                            </div>
                        </div>
                        
        </div>
        <div className='flex items-center border-b-2 border-b-secondary-content w-3/5 mt-6'></div>
        <div className='flex flex-col mb-20'>
            <div className=''>
              <h1 className='font-semibold text-3xl mt-5 ml-6 text-neutral'>{data?.JOB_LIST}</h1>
            </div>
            <div className='flex ml-auto mr-32'>
              <div className='flex gap-10 mt-5'>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{data?.JOB_TITLE1}</h2>
                
                  <div className="card-actions justify-end">
                   <Link href="jobOffer"> <button className="btn btn-primary text-cream">{data?.JOB_DETAILS}</button></Link>
                  </div>
                </div>
              </div>


              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{data?.JOB_TITLE2}</h2>
                    <p> </p>
                    <div className="card-actions justify-end">
                      <Link href="jobOffer2"><button className="btn btn-primary text-cream">{data?.JOB_DETAILS}</button></Link>
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