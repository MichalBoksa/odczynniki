'use client';
import Link from 'next/link'
import React from 'react'
import { useLocale } from '../lang/LocaleContext';


const JobDetails = () => {
  const { data } = useLocale() || {};
  return (
    <section className='max-container mb-4'>
       <div className="flex justify-left ml-20 mb-10 mt-6" >
        <h1 className='text-primary font-bold text-xl lg:text-5xl '>{data?.CONTACT}</h1>
      </div>
      <div className='bg-ivory p-5 mb-6'>
        <div className="flex flex-col justify-left ml-20 mb-10 mt-6" >
          <h3 className='font-semibold' >{data?.JOB_DESC}</h3>
          <h1 className='text-primary font-bold text-md lg:text-2xl '>{data?.JOB_NAME}</h1>
        </div>
        <div className="flex flex-col text-secondary-content px-32">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-jetblack">{data?.JOB_RESPONSIBILITIES}</h2>
            <ul className="list-disc list-inside">
              {data?.JOB_RESPONSIBILITIES_LIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-10 ">
          <h2 className="text-2xl font-semibold mb-2 text-jetblack">{data?.JOB_REQUIREMENTS}</h2>
          <ul className="list-disc list-inside">
          {data?.JOB_REQUIREMENTS_LIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
          </ul>
        </div>

        <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-jetblack">{data?.BENEFITS}</h2>
        <ul className="list-disc list-inside">
        {data?.BENEFITS_LIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
        </ul>
      </div>
      <div className="mt-6 mr-auto ml-auto">
       <Link href="/careers#office"> <button className="btn btn-primary text-cream">{data?.APPLY}</button></Link>
      </div>
        </div>
      </div>
      </section>
  )
}

export default JobDetails