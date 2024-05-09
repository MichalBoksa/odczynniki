"use client"
import { NAV_LINKS, PRODUCTS_PL } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {

  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <nav className="flex items-start max-container relative z-30 py-5 mb-6">
        <div className="mr-auto justify-start">

            <Link href="/" >
               <Image src="/logo.png" alt="INORG Logo" width={150} height={90} className="object-cover"/>
            </Link>
        </div>

        <div className="border-b-2 border-b-primary">
            <ul className="hidden lg:flex h-full gap-10 space-x-4">
              {NAV_LINKS.map((link) => link.key !== 'products'? ( 
                <Link href={link.href} key={link.key} onClick={handleClick} className="lg:bold-18 text-default flexCenter cursor-pointer pb-1.5 transition-all mr-4">
                  {link.label}
                </Link>
              ) :
              (<div className="dropdown dropdown-hover ">
              <div tabIndex={0} className="lg:bold-18 text-default cursor-pointer ">{link.label}</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                {PRODUCTS_PL.map((product) => (
                  <Link href={product.href} > <li key={product.symbol} onClick={handleClick} className="flexCenter  text-wrap cursor-pointer pb-1.5 text-lg  "><p>{product.name}</p></li></Link>
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
        
        <div className="flex cursor-pointer items-right lg:hidden ml-auto" onClick={() => setSideMenuOpen(!sideMenuOpen) }>
            <Image
            src="/menu.svg"
            alt="Menu"
            width={30}
            height={26}/>
        </div>
       
    </nav>
  )
}

export default Navbar