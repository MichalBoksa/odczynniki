"use client";
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { CldImage } from 'next-cloudinary';
import { useLocale } from '../lang/LocaleContext';


const Footer = () => {
  const { data } = useLocale() || {};
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
    <aside>
        <Link href="/" >
            <CldImage className='rounded object-cover' src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/d0aiktzryueeujazncph.png" alt="INORG Logo" width={70} height={70} />
        </Link>
      <p>{data?.CMOC}<br/>{data?.MI}</p>
      <a href="https://excellentbusiness.eu/certificates/20260720080027_72d90765e6a546ef950001bb95df453d" target="_blank" rel="noopener noreferrer" className="mt-2 block w-full max-w-[220px]">
        <Image src="https://excellentbusiness.eu/certificates/20260720080027_72d90765e6a546ef950001bb95df453d/seal" width={1713} height={685} unoptimized alt="Business Excellent SME — CMOCMI" className="h-auto w-full" />
      </a>
    </aside> 
    <nav>
      <h2 className="footer-title">{data?.LINKS}</h2>
     <Link href="/aboutUs" className="link link-hover">{data?.ABOUT_US}</Link>
     <Link href="/euFunds" className="link link-hover">{data?.EU_FUNDS}</Link>
     <Link href="/careers" className="link link-hover">{data?.CAREERS}</Link>
     <Link href="/news" className="link link-hover">{data?.NEWS}</Link>
    </nav> 
    <nav>
      <h2 className="footer-title">{data?.CONTACT_FACTORY}</h2>
      
      <div className="flex items-center">
        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/ijt9xa0obuhvt6sbw2o3.svg' width={22} height={22} alt='home icon' className='mr-2'/>
        <a className="">{data?.OFFICE_ADDRESS}</a>
      </div>
      
      <div className="flex items-center">
        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/oee1rkckq36hdhtpmox5.svg' width={21} height={21} alt='phone icon' className='mr-2'/>
        <a className="">{data?.TEL1} </a>
        <a className='ml-2'>{data?.TEL2}</a>
        <a className='ml-2 float-left clear-left'>{data?.FAX}</a>
        
      </div>

      <div className="flex items-center">
        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/vzigu4ctnrf3h83fgbal.svg' width={22} height={22} alt='email icon' className='mr-2'/>
        <a className="">{data?.OFFICE_EMAIL}</a>
      </div>
      
    </nav> 
    
  </footer>
  )
}

export default Footer
