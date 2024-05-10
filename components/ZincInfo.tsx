"use client";
import { ZINC_PRODUCTS_PL } from '@/constants';

const ZincInfo = () => {

return (
    <section className='max-container'>
             <h1 className='text-8xl w-full mb-10'>Cynk</h1>
                    <div className='flex gap-12 w-full mb-20 mt-20'>
                            <div className="flex flex-1 flex-col card w-96 h-60 ml-4 mb-6 bg-base-100 border-primary border-2 items-center justify-center">
                                            <div className='flex flex-col'>
                                                    <h1 className='text-xl'>30</h1>
                                                    <p className='text-primary text-8xl font-bold'>Zn</p>
                                            </div>

                                            <div className="flex w-full card-actions mr-8 justify-end">
                                                    <p className="text-xl ">65.38</p>
                                                </div>
                                     </div>

                            <div className='flex-2 flex mt-10'>
                                    <p className='px-10 font-normal text-lg'>Niebieskawoszary pierwiastek chemiczny, metal przejściowy z grupy cynkowców. Cynk i jego stopy znajdują zastosowanie do ocynkowania płaskich wyrobów stalowych, w celu ochrony przed korozją, jako dodatek stopowy przy produkcji mosiądzów.</p>
                            </div>
                    </div>
                    
                    <div className='flex flex-col rounded border-solid border-2 border-base-200 max-container padding-container py-4 mb-4'>
                            <div className='flex mt-6'>
                                    <h1 className='text-xl md:text-4xl mr-auto ml-auto font-semibold text-gray-400 text-center lg:mb-8 mb-4 tracking-wider'>
                                            Nasze produkty
                                    </h1>
                            </div>
                            
                            <div className='flex flex-col gap-10 mt-6 pb-3'>
                                    {ZINC_PRODUCTS_PL.map((product,index) => (
                                            <div key={product.symbol} className={`flex gap-7 items-center justify-center ${index !== ZINC_PRODUCTS_PL.length - 1 ? 'border-b-2 border-b-gray-300 pb-8' : ''}`} >
                                                    <div  className='flex card w-48 h-20 bg-base-100 border-primary border-2 justify-center items-center mb-6'  >
                                                            <div className=''>
                                                                    <h2 className='text-neutral font-light text-lg'>{product.symbol}</h2>
                                                            </div>
                                                    </div>

                                                    <div className='flex flex-1 flex-col items-start justify-center'>
                                                        <h1 className='text-xl font-semibold'>{product.name}</h1>
                                                        <h4>CAS: {product.cas}</h4>
                                                    </div>

                                                    <div className='flex flex-1 flex-col '>
                                                            <h1 className='text-xl font-semibold mb-2'>Zastosowanie</h1>
                                                            <div className='flex flex-col'>
                                                                    <ol className='list-disc ml-7 mb-6'>
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

export default ZincInfo