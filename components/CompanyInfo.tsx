'use client';
import Link from 'next/link';
import React from 'react';
import { useLocale } from '../lang/LocaleContext';

const CompanyInfo = () => {
  const { data } = useLocale() || {};

  // Split the products into two arrays: the first three and the rest
  const firstThreeProducts = data?.PRODUCTS.slice(0, 3) || [];
  const remainingProducts = data?.PRODUCTS.slice(3) || [];

  return (
    <section className='mt-4 flex'>
      <div className='flex flex-col md:flex-row items-center max-container padding-container relative z-30'>
        <div className='flex flex-1 flex-col justify-center items-start md:w-3/5'>
          <h1 className='text-3xl md:text-4xl mr-auto ml-auto font-semibold text-primary text-center lg:mb-8 mb-4 tracking-wider'>
            {data?.WHO_ARE_WE}
          </h1>
          <p className='text-sm md:text-base text-left font-semibold py-3 px-2 tracking-wider'>
            {data?.COMPANY_INFO}
          </p>
        </div>
        <div className='flex flex-col flex-1 justify-center items-center mt-6 md:mt-16'>
          <div>
            <h1 className='text-xl md:text-2xl mr-auto ml-auto font-semibold text-gray-400 text-center lg:mb-4 mb-4 tracking-wider'>
              {data?.OUR_PRODUCTS}
            </h1>
          </div>
          <div className='flex flex-wrap justify-center items-start mt-4 lg:w-[80%] px-20 md:px-10 lg:px-5'>
            {firstThreeProducts.map((product, index) =>
              product.symbol === '' ? null : (
                <div key={product.symbol} className="card w-20 h-16 ml-4 mb-6 bg-base-100 border-primary border-2 items justify-center items-center hover:bg-dark-white cursor-pointer">
                  <Link href={product.href}>
                    <div className=''>
                      <h2 className='text-neutral font-light text-2xl'>{product.symbol}</h2>
                      <p className='text-xs'>{product.name}</p>
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
          <div className='flex flex-wrap justify-center items-start lg:w-[80%] px-20 md:px-10 lg:px-5'>
            {remainingProducts.map((product, index) =>
              product.symbol === '' ? null : (
                <div key={product.symbol} className="card w-20 h-16 ml-4 mb-6 bg-base-100 border-primary border-2 items justify-center items-center hover:bg-dark-white cursor-pointer">
                  <Link href={product.href}>
                    <div className=''>
                      <h2 className='text-neutral font-light text-2xl'>{product.symbol}</h2>
                      <p className='text-xs'>{product.name}</p>
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyInfo;
