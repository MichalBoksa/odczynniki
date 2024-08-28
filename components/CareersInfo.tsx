'use client';
import React, { useEffect, useRef } from 'react';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { useLocale } from '../lang/LocaleContext';
import Head from 'next/head';

const CareersInfo = () => {
  const { data } = useLocale() || {};
  const careersOffice = useRef<HTMLDivElement>(null);

  const pageTitle = `Kariera - Dołącz do Naszego Zespołu!`;
  const pageDescription = `Dołącz do naszego zespołu! Odkryj aktualne oferty pracy i możliwości rozwoju kariery w [Nazwa Firmy]. Szukamy utalentowanych ludzi, którzy chcą współtworzyć naszą przyszłość. Zobacz nasze wartości i przekonaj się, dlaczego warto z nami pracować.`;

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
    <>
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`kariera, praca chemia, praca, praca handel, chemiczny`} />
      </Head>
    <section className='max-container md:padding-container'>
      <div className='w-full flex flex-col lg:flex-row lg:max-h-[400px]'>
        <div className='bg-base-200 flex flex-col lg:w-2/5 p-6 lg:p-8'>
          <h1 className='font-semibold text-xl text-neutral'>{data?.JOIN_US}</h1>
          <p className='text-md text-secondary-content mt-4 lg:mt-6'>{data?.JOIN_TEAM}</p>
        </div>
        <div id="office" ref={careersOffice} className='lg:w-3/5 w-full mt-5 lg:mt-0'>
          <CldImage className='object-cover w-full max-h-[300px] lg:max-h-[400px]' src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/career/psstokd4lcqhg5b1u4vr.jpg" alt="Farm" width={1000} height={400} />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row mb-10 mt-5 lg:mt-20 md:justify-around items-center'>
        <div className='flex flex-col lg:w-1/2 px-6 lg:px-12'>
          <h1 className='font-semibold text-xl text-neutral'>{data?.CV}</h1>
          <p className='text-md text-secondary-content mt-4 lg:mt-6'>{data?.SKILLS}</p>
        </div>
        
        <div className="flex flex-col justify-center items-center px-6 lg:px-12 mt-10 lg:mt-0">
          <div className='flex flex-col items-center justify-start'>
            <h1 className="font-semibold text-2xl mb-5 text-center">{data?.HR_OFFICE}</h1>
          </div>
          <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/yr2j0bxspepty0adi8sm.svg' width={30} height={30} alt='home icon' className='mr-2' />
          <div className='flex flex-col justify-center items-center mt-4'>
            <h2 className="mt-3 mb-3 text-base font-medium text-jetblack">{data?.HR_EMPLOYEE}</h2>
            <div className="flex items-center mb-1 w-full">
              <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/vzigu4ctnrf3h83fgbal.svg' width={22} height={22} alt='email icon' className='mr-2' />
              <a className="text-sm text-secondary-content">{data?.HR_OFFICE_EMAIL}</a>
            </div>
            <div className="flex items-center w-full">
              <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/oee1rkckq36hdhtpmox5.svg' width={20} height={20} alt='phone icon' className='mr-2' />
              <a className='text-sm'>{data?.HR_OFFICE_PHONE}</a>         
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center border-b-2 border-b-secondary-content w-full lg:w-3/5 mx-auto mt-6'></div>

      <div className='flex flex-col mb-20 px-6 lg:px-12'>
        <div className='mt-10 lg:mt-5'>
          <h1 className='font-semibold text-3xl text-neutral'>{data?.JOB_LIST}</h1>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-center lg:gap-10 mt-10'>
          <div className="card w-full lg:w-96 bg-base-100 shadow-xl mb-6 lg:mb-0">
            <div className="card-body">
              <h2 className="card-title">{data?.JOB_TITLE1}</h2>
              <div className="card-actions justify-end">
                <Link href="jobOffer">
                  <button className="btn btn-primary text-cream">{data?.JOB_DETAILS}</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{data?.JOB_TITLE2}</h2>
              <div className="card-actions justify-end">
                <Link href="jobOffer2">
                  <button className="btn btn-primary text-cream">{data?.JOB_DETAILS}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default CareersInfo;
