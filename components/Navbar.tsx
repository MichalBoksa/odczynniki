"use client";
import Link from "next/link"
import { useEffect, useState } from "react"
import { CldImage } from 'next-cloudinary';
import { useLocale } from '../lang/LocaleContext';
import { Product, NavLink } from '../lang/LocaleData';
import { LANGUAGES } from '@/constants';

const Navbar = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const { data, setLocale, currentLocale  } = useLocale() || {};
  const [currentLanguage, setCurrentLanguage] = useState('PL');

  const handleLanguageChange = (lang: string) => {
    const selectedLanguage = LANGUAGES.find(language => language.code === lang);
    setSideMenuOpen(false);
    setLocale(lang);
    setCurrentLanguage(selectedLanguage?.label || 'PL');
  };

  useEffect(() => {
    const selectedLanguage = LANGUAGES.find(lang => lang.code === currentLocale);
    setCurrentLanguage(selectedLanguage?.label || 'PL');
  }, [currentLocale]);

  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    setSideMenuOpen(false);
    if (elem) {
      elem?.blur();
    }
  };
  

  return (
    <nav className="flex items-start max-container relative z-30 py-5 mb-6 gap-3">
        <div className="mr-auto justify-start">
            <Link href="/" >
               <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/f5065d6a7ulp9pww81ux.png" alt="MIDAS Logo" width={150} height={90} className="object-cover" />
            </Link>
        </div>

        <div className="border-b-2 border-b-primary">
            <ul className="hidden lg:flex h-full md:gap-3 lg-gap-3 xl:gap-6">
              {data?.NAV_LINKS.map((link:NavLink) => link.key !== 'products'? ( 
                <Link key={link.label} href={link.href}  onClick={handleClick} > <div className="lg:text-nowrap lg:text-md xl:text-lg lg:font-bold text-default flexCenter cursor-pointer pb-1.5 transition-all mr-4">
                  {link.label}
                  </div>
                </Link>
              ) :
              (<div key={link.label} className=" dropdown dropdown-hover ">
                <div tabIndex={0} className="lg:text-nowrap lg:text-md xl:text-lg lg:font-bold text-default cursor-pointer mr-4 ">{link.label}</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                    {data?.PRODUCTS.map((product) => (
                      <Link href={product.href} key={product.name}> <li onClick={handleClick} className="flexCenter text-wrap cursor-pointer pb-1.5 text:md xl:text-lg  "><p>{product.name}</p></li></Link>
                    ))}
                  </ul>
                </div>)
              )}
            <div className="dropdown dropdown-hover">
            <div tabIndex={0} className="lg:text-nowrap lg:text-md xl:text-lg lg:font-bold text-default cursor-pointer mr-4 ">{currentLanguage}</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-18 right-05 ">
              {LANGUAGES.map((lang) => (
                <li key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="flexCenter text-wrap cursor-pointer pb-1.5 text:md xl:text-lg">
                  <p>{lang.label}</p>
                </li>
              ))}
            </ul>
          </div>
            </ul>
        </div>

        {sideMenuOpen && (
         <div className="lg:hidden relative flex flex-col h-[calc(100vh-96px)] top-24 left-0 w-full justify-items-center items-center gap-12">
         
              {data?.NAV_LINKS.map((link) => link.key !== 'products' ? (
                <Link href={link.href} key={link.key}  onClick={handleClick} className= 'bold-10 text-default flexCenter cursor-pointer'>
                  {link.label}
                </Link>
              ) : (
                <div key={link.label} className="dropdown">
                <div tabIndex={0} className="lg:text-nowrap lg:text-md xl:text-lg lg:font-bold text-default cursor-pointer mr-4 ">{link.label}</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                    {data?.PRODUCTS.map((product) => (
                      <Link href={product.href} key={product.name}> <li onClick={handleClick} className="flexCenter text-wrap cursor-pointer pb-1.5 text:md xl:text-lg  "><p>{product.name}</p></li></Link>
                    ))}
                  </ul>
                </div>
              ))
             }
               <div className="dropdown">
            <div tabIndex={0} className="lg:text-nowrap lg:text-md xl:text-lg lg:font-bold text-default cursor-pointer mr-4 left-8">{currentLanguage}</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-18 right-05">
              {LANGUAGES.map((lang) => (
                <li key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="flexCenter text-wrap cursor-pointer pb-1.5 text:md xl:text-lg">
                <p>{lang.label}</p>
              </li>
              ))}
            </ul>
          </div>            
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