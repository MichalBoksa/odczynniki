"use client";
import Link from 'next/link'
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
    </aside> 
    <nav>
      <h6 className="footer-title">{data?.LINKS}</h6> 
     <Link href="/aboutUs" className="link link-hover">{data?.ABOUT_US}</Link>
     <Link href="/certificates" className="link link-hover">{data?.OUR_CERTIFICATES}</Link>
     <Link href="/carerrs" className="link link-hover">{data?.CAREERS}</Link>
     <Link href="/news" className="link link-hover">{data?.NEWS}</Link>
    </nav> 
    <nav>
      <h6 className="footer-title">{data?.CONTACT}</h6> 
      
      <div className="flex items-center">
        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/ijt9xa0obuhvt6sbw2o3.svg' width={22} height={22} alt='home icon' className='mr-2'/>
        <a className="link link-hover">{data?.OFFICE_ADDRESS}</a>
      </div>
      
      <div className="flex items-center">
        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/oee1rkckq36hdhtpmox5.svg' width={21} height={21} alt='phone icon' className='mr-2'/>
        <a className="link link-hover">{data?.TEL1} </a>
        <a className='ml-2'>{data?.TEL2}</a>
        <a className='ml-2 float-left clear-left'>{data?.FAX}</a>
        
      </div>

      <div className="flex items-center">
        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/vzigu4ctnrf3h83fgbal.svg' width={22} height={22} alt='email icon' className='mr-2'/>
        <a className="link link-hover">{data?.OFFICE_EMAIL}</a>
      </div>
      
    </nav> 
    
  </footer>
  )
}

export default Footer