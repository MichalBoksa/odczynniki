"use client"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-start max-container relative z-30 py-5 mb-6">
        <div className="mr-auto justify-start">

            <Link href="/" >
            <Image src="/logo.png" alt="INORG Logo" width={150} height={90} objectFit="cover"/>
            </Link>
        </div>

        <div className="border-b-2 border-b-primary">
            <ul className="hidden lg:flex h-full gap-10 space-x-4">
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="lg:bold-18 text-default flexCenter cursor-pointer pb-1.5 transition-all mr-4">
                  {link.label}
                </Link>
              ))}
              <p className="regular-20 text-black flexCenter ml-3 cursor-pointer pb-1.5 transition-all mr-4">PL/EN</p>
            </ul>
        </div>

        {open && (
         <div className="lg:hidden relative flex flex-col h-[calc(100vh-96px)] top-24 left-0 w-full justify-items-center items-center gap-12">
         
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="bold-10 text-default flexCenter cursor-pointer">
                  {link.label}
                </Link>
              ))}
              <p className="regular-20 text-black flexCenter ml-3 cursor-pointer pb-1.5 transition-all mr-4">PL/EN</p>
            
         </div>
         )}
        
        <div className="flex cursor-pointer items-right lg:hidden ml-auto" onClick={() => setOpen(!open) }>
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