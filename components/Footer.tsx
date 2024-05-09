import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
    <aside>
        <Link href="/" >
            <Image className='rounded object-cover' src="/logo.png" alt="INORG Logo" width={150} height={90} />
        </Link>
      <p>MIDAS Investment<br/>Centrum Metal Odczynniki Chemiczne</p>
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
        <img src='home-contact.svg' width="22" height="22" className='mr-2'></img>
        <a className="link link-hover">05-090 Falenty , ul. Opackiego 46A/11</a>
      </div>
      
      <div className="flex items-center">
        <img src='phone-contact.svg' width="21" height="21" className='mr-2'></img>
        <a className="link link-hover">tel. +48 81 746 49 51 </a>
        <a className='ml-2'> +48 81 746 20 11</a>
      </div>

      <div className="flex items-center">
        <img src='mail-contact.svg' width="20" height="20" className='mr-2'></img>
        <a className="link link-hover">inf@odczynniki.com.pl</a>
      </div>
      
    </nav> 
    
  </footer>
  )
}

export default Footer