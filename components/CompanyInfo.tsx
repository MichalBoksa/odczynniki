import { COMPANY_INFO_PL, PRODUCTS_PL } from '@/constants'
import React from 'react'


const CompanyInfo = () => {
  return (
    <section className='mt-4'>
      <div className=' flex items-center max-container padding-container relative z-30'>
        <div className='flex flex-col justify-center items-start md:w-3/5 '>
          <h1 className='text-3xl md:text-5xl mr-auto ml-auto font-semibold text-primary text-center lg:mb-8 mb-4 tracking-wider '>Czym się zajmujemy?</h1>
          <p className='text-base text-left font-semibold  py-5 px-8'>{COMPANY_INFO_PL}</p>
      
        </div>

        <div className='hidden md:flex justify-center items-center w-1/3 px-5 py-10 ' >
          <img src='/farm.jpg' alt='farm' className='rounded-lg w-full ' />
        </div>
      </div>


        <div id="box" className='flex rounded border-solid border-2 border-base-200 max-container padding-container px-6 py-4 mb-4'>
            <div className='flex justify-center items-start mt-auto mb-auto'>
                 <h1 className='text-xl md:text-6xl mr-auto ml-auto font-semibold text-gray-400 text-center lg:mb-8 mb-4 tracking-wider'>Nasze produkty</h1>
            </div>

            <div className='flex flex-wrap justify-center items-center'>
                   {PRODUCTS_PL.map((product) => (
                    <div className="card w-72 h-56 ml-12 mb-6 bg-base-100 border-primary border-2 items justify-center items-center hover:bg-gray-100 cursor-pointer">
                    <div className="">
                      <h2 className="text-neutral font-light text-8xl">{product.symbol}</h2>
                      <p>{product.name}</p>
                     
                    </div>
                  </div>
                    ))} 
             </div>
        </div>


    </section>
  )
}

export default CompanyInfo