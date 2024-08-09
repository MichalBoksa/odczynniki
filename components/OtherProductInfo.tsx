'use client';
import { useLocale } from '../lang/LocaleContext';
import React from 'react';

const OtherProductInfo = () => {
  const { data } = useLocale() || {};
  return (
    <section className='max-container md:padding-container'>
      <h1 className='text-4xl md:text-6xl lg:text-8xl w-full mb-10 text-center'>{data?.OUR_OTHER_PRODUCTS}</h1>
      
      <div className='flex flex-col rounded border-solid border-2 border-base-200 py-4 mb-4'>
        <div className='flex flex-col gap-10 mt-6 pb-3'>
          {data?.OTHER_PRODUCTS.map((product, index) => (
            <div key={product.symbol} className={`flex flex-col md:flex-row gap-7 items-center justify-center ${index !== data?.OTHER_PRODUCTS.length - 1 ? 'border-b-2 border-b-gray-300 pb-8' : ''}`}>
              <div className='flex card w-48 h-20 bg-base-100 border-primary border-2 justify-center items-center'>
                <div className='text-center'>
                  <h2 className='text-neutral font-light text-lg'>{product.symbol}</h2>
                </div>
              </div>

              <div className='flex flex-1 flex-col text-center md:text-left'>
                <h1 className='text-xl font-semibold'>{product.name}</h1>
                <h4>CAS: {product.cas}</h4>
              </div>

              <div className='flex flex-1 flex-col mr-auto ml-5 md:ml-0'>
                <h1 className='text-xl font-semibold mb-2'>{data?.USAGE}</h1>
                <div className='flex flex-col'>
                  <ol className='list-disc ml-7'>
                    {product.use.map((use, index) => (
                      <li key={index} className='text-base'>{use}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherProductInfo;
