import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex items-center max-container relative z-30 py-5 mb-6">
        <div className="mr-auto justify-start">
            <Link href="/" >
            <Image src="/logo.png" alt="INORG Logo" width={150} height={90} objectFit="cover"/>
            </Link>
        </div>

        <div className="border-b-2 border-b-primary">
            <ul className="hidden lg:flex h-full gap-10 space-x-4">
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="bold-18 text-default flexCenter cursor-pointer pb-1.5 transition-all mr-4">
                  {link.label}
                </Link>
              ))}
              <p className="regular-20 text-black flexCenter ml-3 cursor-pointer pb-1.5 transition-all mr-4">PL/EN</p>
            </ul>
        </div>
        
        <Image
        src="/menu.svg"
        alt="Menu"
        width={32}
        height={32}
        className="cursor-pointer align-right lg:hidden ml-auto"/>
        
    </nav>
  )
}

export default Navbar