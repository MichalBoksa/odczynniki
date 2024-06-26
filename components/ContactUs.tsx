"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';
import { SETTLEMENT_TEAM, TRADE_TEAM } from '@/constants';
import { useLocale } from '../lang/LocaleContext';


const ContactUs = () => {
    const { data } = useLocale() || {};
  return (
    <section className="bg-white">
    <div className="container px-6 py-12 mx-auto">
        <div className="text-center ">
            <p className="font-medium text-jetblack">{data?.CONTACT_US}</p>

            <h1 className="mt-2 text-2xl font-semibold text-primary md:text-3xl ">{data?.ANSWEAR_QUESTIONS}</h1>

            {/* <p className="mt-3 text-secondary-content ">Napisz do nas!</p> */}
        </div>

        <CldImage className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96" width={1500} height={400} src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/twnplqvxuw7e1ucig6g3.jpg" alt="contact-bg" 
            crop={{
              type: 'auto',
              source: true
            }}/>
        

        <div className='flex flex-col mt-5'>
            <div className='flex items-center justify-center'>
                <h1 className='font-semibold text-6xl mt-5 ml-6 text-neutral items-center justify-center'>{data?.OUR_OFFICE}</h1>
            </div>

            <div className='flex items-center justify-center'>
                <div className='flex mt-5 justify-center items-center'> 
                    <div className="flex flex-col p-4 rounded-lg bg-blue-50 md:p-6 justify-center items-center ">
                        <div className='flex h-1/3  flex-col justify-center items-center'>
                        <span className="inline-block p-3 rounded-lg bg-blue-100/80 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </span>
                    </div>
                    <div className='flex h-2/3 flex-col justify-center items-center '>
                        <h2 className="mt-4 text-base font-medium text-jetblack ">{data?.VISIT_US}</h2>
                        <p className="mt-2 text-md text-secondary-content">{data?.OFFICE_ADDRESS}</p>
                        
                        <p className="mt-2 text-md text-jetblack">{data?.OPEN_HOURS}</p>
                    </div>
                </div>
                </div>

                   </div>
                    </div>
        <div className='flex flex-col mt-5 px-10'>
                        <div className='flex items-center justify-left mb-6'>
                             <h1 className='font-semibold text-3xl mt-5 ml-6 text-neutral items-center justify-center'>{data?.OUR_TRADE_TEAM}</h1>
                         </div>

                    <div className='flex flex-wrap gap-20'>
                        {/* TODO make component to team meameber */}
                        {TRADE_TEAM.map((member) => (
                            <div key={member.email} className="flex flex-col justify-center items-center px-7">
                                <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/yr2j0bxspepty0adi8sm.svg' width={30} height={30} alt='home icon' className='mr-2'/>
                                <div className='flex flex-col justify-center items-center '>
                                    <h2 className="mt-4 text-base font-medium text-jetblack  ">{member.name}</h2>
                                    <p className="text-md text-secondary-content mb-2">{member.department}</p>
                                    <div className="flex items-center mb-2 mr-auto">
                                            <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1716937855/midas/wjqxac2mvdwabd6cd3fo.svg' width={20} height={20} alt='home icon' className='mr-2'/>
                                            <a className="text-sm">{member.market}</a>
                                    </div>
                                    <div className="flex items-center mb-2 mr-auto">
                                        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/vzigu4ctnrf3h83fgbal.svg' width={22} height={22} alt='email icon' className='mr-2'/>
                                        <a className="text-sm text-secondary-content">{member.email}</a>
                                    </div>
                                    
                                    <div className="flex items-center mr-auto">
                                        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/oee1rkckq36hdhtpmox5.svg' width={20} height={20} alt='phone icon' className='mr-2'/>
                                        <a className='text-sm '>{member.mobile}</a>         
                                    </div>
                                  
                            </div>
                     </div>
                    ))}
                </div>



                <div className='flex flex-col mt-16 px-10'>
                        <div className='flex items-center justify-left mb-6'>
                             <h1 className='font-semibold text-3xl mt-5 ml-6 text-neutral items-center justify-center'>{data?.OUR_SETTLEMENT_TEAM}</h1>
                         </div>

                    <div className='flex flex-wrap gap-20'>
                        {/* TODO make component to team meameber */}
                        {SETTLEMENT_TEAM.map((member) => (
                            <div key={member.email} className="flex flex-col justify-center items-center px-7">
                                <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/yr2j0bxspepty0adi8sm.svg' width={30} height={30} alt='home icon' className='mr-2'/>
                                <div className='flex flex-col justify-center items-center '>
                                    <h2 className="mt-4 text-base font-medium text-jetblack  ">{member.name}</h2>
                                   
                                    <div className="flex items-center mb-2 mt-2 mr-auto">
                                        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/vzigu4ctnrf3h83fgbal.svg' width={22} height={22} alt='email icon' className='mr-2'/>
                                        <a className="text-sm text-secondary-content">{member.email}</a>
                                    </div>
                                    
                                    <div className="flex items-center mr-auto">
                                        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/oee1rkckq36hdhtpmox5.svg' width={20} height={20} alt='phone icon' className='mr-2'/>
                                        <a className='text-sm '>{member.mobile}</a>         
                                    </div>
                                  
                            </div>
                     </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col mt-16 px-10'>
                        <div className='flex items-center justify-left mb-6'>
                             <h1 className='font-semibold text-3xl mt-5 ml-6 text-neutral items-center justify-center'>{data?.ADMINISTRATION}</h1>
                         </div>

                    <div className='flex flex-wrap gap-20'>
                            <div  className="flex flex-col justify-center items-center px-7">
                                <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/yr2j0bxspepty0adi8sm.svg' width={30} height={30} alt='home icon' className='mr-2'/>
                                <div className='flex flex-col justify-center items-center '>
                                    <h2 className="mt-4 text-base font-medium text-jetblack">Agnieszka Barańska</h2>
                                   
                                    <div className="flex mt-2 items-center mb-2 mr-auto">
                                        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/vzigu4ctnrf3h83fgbal.svg' width={22} height={22} alt='email icon' className='mr-2'/>
                                        <a className="text-sm text-secondary-content">abaranska@odczynniki.com.pl</a>
                                    </div>
                                    
                                    <div className="flex items-center mr-auto">
                                        <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/oee1rkckq36hdhtpmox5.svg' width={20} height={20} alt='phone icon' className='mr-2'/>
                                        <a className='text-sm '>+48 503 089 563, fax: +48 81 458 39 88</a>         
                                    </div>
                                  
                            </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
            
</section>
  )
}

export default ContactUs