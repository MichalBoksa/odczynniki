"use client";
import { NAV_LINKS, PRODUCTS_PL } from "@/constants"
import Link from "next/link"
import { useState } from "react"
import { CldImage } from 'next-cloudinary';

const Navbar = () => {

  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <nav className="flex items-start max-container relative z-30 py-5 mb-6 gap-3">
        <div className="mr-auto justify-start">
            <Link href="/" >
               <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/f5065d6a7ulp9pww81ux.png" alt="INORG Logo" width={150} height={90} className="object-cover" />
            </Link>
        </div>

        <div className="border-b-2 border-b-primary">
            <ul className="hidden lg:flex h-full md:gap-3 lg-gap-3 xl:gap-6">
              {NAV_LINKS.map((link) => link.key !== 'products'? ( 
                <Link key={link.label} href={link.href}  onClick={handleClick} > <div className="lg:text-nowrap lg:text-md xl:text-lg lg:font-bold text-default flexCenter cursor-pointer pb-1.5 transition-all mr-4">
                  {link.label}
                  </div>
                </Link>
              ) :
              (<div key={link.label} className=" dropdown dropdown-hover">
              <div tabIndex={0} className="lg:text-nowrap lg:text-md xl:text-lg lg:font-bold text-default cursor-pointer mr-4">{link.label}</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                {PRODUCTS_PL.map((product) => (
                  <Link href={product.href} key={product.name}> <li onClick={handleClick} className="flexCenter text-wrap cursor-pointer pb-1.5 text:md xl:text-lg  "><p>{product.name}</p></li></Link>
                ))}
              </ul>
            </div>)
             )}
            

              <p className="regular-20 text-black flexCenter ml-3 cursor-pointer pb-1.5 transition-all mr-4">PL/EN</p>
            </ul>
        </div>

        {sideMenuOpen && (
         <div className="lg:hidden relative flex flex-col h-[calc(100vh-96px)] top-24 left-0 w-full justify-items-center items-center gap-12">
         
              {NAV_LINKS.map((link) => (
                
                <Link href={link.href} key={link.key} className= 'bold-10 text-default flexCenter cursor-pointer'>
                  {link.label}
                </Link>
              ))}
              <p className="regular-20 text-black flexCenter ml-3 cursor-pointer pb-1.5 transition-all mr-4">PL/EN</p>
            
         </div>
         )}
        
        <div className="flex cursor-pointer items-right lg:hidden ml-auto items-center justify-center mr-5 mt-4" onClick={() => setSideMenuOpen(!sideMenuOpen) }>
            <CldImage
            src="https://res.cloudinary.com/dozgr1muo/image/upload/v1715596117/midas/yasjrmzm8nb1naka6xcq.svg"
            alt="Menu"
            width={35}
            height={30}
            className="w-full h-full" />
        </div>
       
    </nav>
  )
}

export default Navbar