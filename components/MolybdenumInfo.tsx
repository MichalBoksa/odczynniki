"use client";
import { MOLYBDENUM_PRODUCTS_PL } from '@/constants';
import React, { useEffect, useRef } from 'react'

const MolybdenumInfo = () => {

    const boxRef = useRef<HTMLDivElement>(null)
    const h1Ref = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (boxRef.current && h1Ref.current) {
                const boxTop = boxRef.current.offsetTop
                const boxHeight = boxRef.current.offsetHeight
                const h1Height = h1Ref.current.offsetHeight

                const scrollTop = window.pageYOffset
                const scrollBottom = scrollTop + window.innerHeight

                const h1Top = Math.max(scrollTop - boxTop, 0)
                const h1Bottom = Math.min(scrollBottom - boxTop, boxHeight - h1Height)

                h1Ref.current.style.transform = `translateY(${h1Top}px)`
                h1Ref.current.style.bottom = `${h1Bottom}px`
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <section className='padding-container max-container'>
         <h1 className='text-8xl w-full'>Molibden </h1>
            <div className='flex mt-6 gap-12 w-full'>
                <div className="flex flex-1 flex-col card w-96 h-60 ml-4 mb-6 bg-base-100 border-primary border-2 items-center justify-center">
                        <div className='flex flex-col'>
                            <h1 className='text-xl'>42</h1>
                            <p className='text-primary text-8xl font-bold'>Mo</p>
                        </div>

                        <div className="flex w-full card-actions mr-8 justify-end">
                            <p className="text-xl ">95.95</p>
                          </div>
                     </div>

                <div className='flex-2 flex mt-10'>
                    <p className=' px-6 font-normal text-lg'>Pierwiastek chemiczny z grupy metali przejściowych. Czysty molibden jest srebrzystobiały, bardzo twardy i ma jedną z najwyższych temperatur topnienia spośród pierwiastków. Stosowany jest przede wszystkim w metalurgii, głównie w produkcji stali, jako pigmenty, nawozy czy w przemyśle chemicznym jako katalizatory.</p>
                </div>
            </div>
            
                            <div className='flex flex-col rounded border-solid border-2 border-base-200 max-container padding-container px-2 py-4 mb-4'>
                                <div className='flex items-start mt-6'>
                                    <h1 ref={h1Ref} className='text-xl md:text-4xl mr-auto ml-auto font-semibold text-gray-400 text-center lg:mb-8 mb-4 tracking-wider'>
                                        Nasze produkty
                                    </h1>
                                </div>
                                
                                <div className='flex flex-col gap-5 jus'>

                                    {MOLYBDENUM_PRODUCTS_PL.map((product,index) => (
                                        <div key={product.symbol} className='flex' >
                                            <div  className='flex flex-1 card w-48 h-20 ml-12 mb-6 bg-base-100 border-primary border-2 justify-center items-center'  >
                                                <div className=''>
                                                    <h2 className='text-neutral font-light text-lg'>{product.symbol}</h2>
                                                </div>
                                            </div>

                                            <div className='flex flex-1'>
                                                <h1 className='text-xl'>{product.name}</h1>
                                            </div>

                                            <div className='flex flex-1 flex-col'>
                                                <h1 className='text-xl'>Zastosowanie</h1>
                                                <div className='flex flex-col'>
                                                    <ol>
                                                        {product.use.map((use,index) => (
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

export default MolybdenumInfo