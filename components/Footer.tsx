"use client";
import Link from 'next/link'
import React from 'react'
import { CldImage } from 'next-cloudinary';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
    <aside>
        <Link href="/" >
            <CldImage className='rounded object-cover' src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/d0aiktzryueeujazncph.png" alt="INORG Logo" width={70} height={70} />
        </Link>
      <p>Centrum Metal Odczynniki Chemiczne<br/>MIDAS Investment</p>
    </aside> 
    <nav>
      <h6 className="footer-title">Przydatne linki</h6> 
      <a className="link link-hover">O nas</a>
      <a className="link link-hover">Nasze produkty</a>
      <a className="link link-hover">Certyfikaty</a>
      <a className="link link-hover">Kariera</a>
      <a className="link link-hover">Aktualności</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Kontakt</h6> 
      
      <div className="flex items-center">
        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/ijt9xa0obuhvt6sbw2o3.svg' width={22} height={22} alt='home icon' className='mr-2'/>
        <a className="link link-hover">05-090 Falenty , ul. Opackiego 46A/11</a>
      </div>
      
      <div className="flex items-center">
        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/oee1rkckq36hdhtpmox5.svg' width={21} height={21} alt='phone icon' className='mr-2'/>
        <a className="link link-hover">tel. +48 81 746 49 51 </a>
        <a className='ml-2'> +48 81 746 20 11</a>
      </div>

      <div className="flex items-center">
        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/vzigu4ctnrf3h83fgbal.svg' width={22} height={22} alt='email icon' className='mr-2'/>
        <a className="link link-hover">inf@odczynniki.com.pl</a>
      </div>
      
    </nav> 
    
  </footer>
  )
}

export default Footer