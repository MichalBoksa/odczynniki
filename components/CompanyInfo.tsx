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
        <section className='mt-4'>
            <div className='flex items-center max-container padding-container relative z-30'>
                <div className='flex flex-col justify-center items-start md:w-3/5'>
                    <h1 className='text-3xl md:text-5xl mr-auto ml-auto font-semibold text-primary text-center lg:mb-8 mb-4 tracking-wider'>
                        Czym się zajmujemy?
                    </h1>
                    <p className='text-base text-left font-semibold py-5 px-8'>{COMPANY_INFO_PL}</p>
                </div>

                <div className='hidden md:flex justify-center items-center w-1/3 px-5 py-10'>
                    <img src='/farm.jpg' alt='farm' className='rounded-lg w-full' />
                </div>
            </div>

            <div id='box' className='flex rounded border-solid border-2 border-base-200 max-container padding-container px-6 py-4 mb-4' ref={boxRef}>
                <div className='flex justify-center items-start mt-6'>
                    <h1 ref={h1Ref} className='text-xl md:text-7xl mr-auto ml-auto font-semibold text-gray-400 text-center lg:mb-8 mb-4 tracking-wider'>
                        Nasze produkty
                    </h1>
                </div>

                <div className='flex flex-wrap justify-center items-center'>
                    {PRODUCTS_PL.map((product,index) => (
                        <div className={`card w-72 h-56 ml-12 mb-6 bg-base-100 border-primary border-2 items justify-center items-center hover:bg-gray-100 cursor-pointer 
                        ${PRODUCTS_PL.length % 2 !== 0 && index === PRODUCTS_PL.length - 1 ? 'w-[39rem]' : ''}`}
                        >
                            <div className=''>
                                <h2 className='text-neutral font-light text-8xl'>{product.symbol}</h2>
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