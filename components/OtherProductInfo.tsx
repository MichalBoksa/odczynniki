import { OTHER_PRODUCTS_PL } from '@/constants'
import React from 'react'

const OtherProductInfo = () => {
  return (
    <section className='max-container'>
    <h1 className='text-8xl w-full mb-20'>Nasze pozostałe produkty</h1>
           
           <div className='flex flex-col rounded border-solid border-2 border-base-200 max-container padding-container py-4 mb-4'>
                   
                   <div className='flex flex-col gap-10 mt- pb-3'>
                           {OTHER_PRODUCTS_PL.map((product,index) => (
                                   <div key={product.symbol} className={`flex gap-7 items-center justify-center ${index !== OTHER_PRODUCTS_PL.length - 1 ? 'border-b-2 border-b-gray-300 pb-8' : ''}`} >
                                           <div  className='flex card w-48 h-20 bg-base-100 border-primary border-2 justify-center items-center'  >
                                                   <div className=''>
                                                           <h2 className='text-neutral font-light text-lg'>{product.symbol}</h2>
                                                   </div>
                                           </div>

                                           <div className='flex flex-1 flex-col items-start justify-center'>
                                                <h1 className='text-xl font-semibold'>{product.name}</h1>
                                                <h4>CAS: {product.cas}</h4>
                                           </div>

                                           <div className='flex flex-1 flex-col'>
                                                   <h1 className='text-xl font-semibold mb-2'>Zastosowanie</h1>
                                                   <div className='flex flex-col'>
                                                           <ol className='list-disc ml-7'>
                                                                   {product.use.map((use,index) => (
                                                                           <li key={index} className='text-base '>{use}</li>
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
export default OtherProductInfo