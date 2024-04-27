"use client";
import { COMPANY_INFO_PL, PRODUCTS_PL } from '@/constants'
import React, { useEffect, useRef } from 'react'

const CompanyInfo = () => {
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
        <section className='mt-4 flex'>
            <div className='flex items-center max-container padding-container relative z-30'>
                <div className='flex  flex-2 flex-col justify-center items-start md:w-3/5'>
                    <h1 className='text-3xl md:text-5xl mr-auto ml-auto font-semibold text-primary text-center lg:mb-8 mb-4 tracking-wider'>
                        Czym się zajmujemy?
                    </h1>
                    <p className='text-base text-left font-semibold py-5 px-10'>{COMPANY_INFO_PL}</p>
                </div>

               

                <div className='flex flex-col flex-1 justify-center items-center mt-16'>
               
                    <div>
                        <h1 ref={h1Ref} className='text-xl md:text-2xl mr-auto ml-auto font-semibold text-gray-400 text-center lg:mb-8 mb-4 tracking-wider'>
                            Nasze produkty
                        </h1>
                    </div>

                    <div className='flex flex-wrap justify-center items-start mt-4 lg:w-[80%]'>
                    {PRODUCTS_PL.map((product,index) => (
                        <div key={product.symbol} className="card w-20 h-16 ml-4 mb-6 bg-base-100 border-primary border-2 items justify-center items-center hover:bg-gray-100 cursor-pointer">
                            <div className=''>
                                <h2 className='text-neutral font-light text-2xl'>{product.symbol}</h2>
                                <p className='text-xs'>{product.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

             
            </div>
        </section>
    )
}

export default CompanyInfo