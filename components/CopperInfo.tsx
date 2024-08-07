"use client";
import { useLocale } from '../lang/LocaleContext';

const CopperInfo = () => {

const { data } = useLocale() || {};
return (
    <section className='max-container'>
             <h1 className='text-8xl w-full mb-10'>{data?.COPPER}</h1>
                    <div className='flex gap-12 w-full mb-20 mt-20'>
                           <div className="flex flex-col card w-72 h-48 ml-4 mb-6 bg-base-100 border-primary border-2 items-center justify-center">
                                  <div className='flex flex-col'>
                                                    <h1 className='text-xl'>29</h1>
                                                    <p className='text-primary text-8xl font-bold'>Cu</p>
                                            </div>

                                            <div className="flex w-full card-actions mr-8 justify-end">
                                                    <p className="text-xl ">63.55</p>
                                                </div>
                                     </div>

                            <div className='flex-2 flex mt-10'>
                                    <p className='px-10 font-normal text-lg'>{data?.COPPER_DESC}</p>
                            </div>
                    </div>
                    
                    <div className='flex flex-col rounded border-solid border-2 border-base-200 max-container padding-container py-4 mb-4'>
                            <div className='flex mt-6'>
                                    <h1 className='text-xl md:text-4xl mr-auto ml-auto font-semibold text-gray-400 text-center lg:mb-8 mb-4 tracking-wider'>{data?.OUR_PRODUCTS}</h1>
                            </div>
                            
                            <div className='flex flex-col gap-10 mt-6 pb-3'>
                                    {data?.COPPER_PRODUCTS.map((product,index) => (
                                            <div key={product.symbol} className={`flex gap-7 items-center justify-center ${index !== data?.COPPER_PRODUCTS.length - 1 ? 'border-b-2 border-b-gray-300 pb-8' : ''}`} >
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
                                                            <h1 className='text-xl font-semibold mb-2'>{data?.USAGE}</h1>
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

export default CopperInfo