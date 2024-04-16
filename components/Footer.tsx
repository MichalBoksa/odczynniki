import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
    <aside>
        <Link href="/" >
            <Image className='rounded' src="/logo.png" alt="INORG Logo" width={150} height={90} objectFit="cover"/>
        </Link>
      <p>MIDAS Investment<br/>Centrum Metal Odczynniki Chemiczne</p>
    </aside> 
    <nav>
      <h6 className="footer-title">Services</h6> 
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Kontakt</h6> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    
  </footer>
  )
}

export default Footer