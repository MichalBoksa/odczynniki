"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';
import { SETTLEMENT_TEAM, TRADE_TEAM } from '@/constants';

const ContactUs = () => {
  return (
    <section className="bg-white">
    <div className="container px-6 py-12 mx-auto">
        <div className="text-center ">
            <p className="font-medium text-jetblack">Skontaktuj się z nami</p>

            <h1 className="mt-2 text-2xl font-semibold text-primary md:text-3xl ">Chętnie odpowiemy na Państwa pytania</h1>

            {/* <p className="mt-3 text-secondary-content ">Napisz do nas!</p> */}
        </div>

        <CldImage className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96" width={1500} height={400} src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/twnplqvxuw7e1ucig6g3.jpg" alt="contact-bg" 
            crop={{
              type: 'auto',
              source: true
            }}/>
        
        {/* <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 ">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-jetblack ">Napisz do nas </h2>
                <p className="mt-2 text-sm text-jeetblack">Skontaktuj się z naszym zespołem.</p>
                <p className="mt-2 text-sm text-primary ">inf@odczynniki.com.pl</p>
            </div> */}

            {/* <div className="p-4 rounded-lg bg-blue-50 md:p-6 ">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </span>
                
                <h2 className="mt-4 text-base font-medium text-jetblack ">Odwiedź nas</h2>
                <p className="mt-2 text-sm text-jetblack">Odwiedź nasze biuro</p>
                <p className="mt-2 text-sm text-primary">20-234 Lublin, ul. Metalurgiczna 15 E, 17 D</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 md:p-6">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>
                
                <h2 className="mt-4 text-base font-medium text-jetblack ">Zadzwoń do nas</h2>
                <p className="mt-2 text-sm text-jetblack">Poniedziałek-Piątek od 8:00 do 17:00.</p>
                <p className="mt-2 text-sm text-primary"> +48 81 746 49 51</p>
            </div>
        </div> */}

        <div className='flex flex-col mt-5'>
            <div className='flex items-center justify-center'>
                <h1 className='font-semibold text-6xl mt-5 ml-6 text-neutral items-center justify-center'>Nasze biura</h1>
            </div>
            <div className='flex justify-around mt-5'> 
                   <div className="p-4 rounded-lg bg-blue-50 md:p-6 ">
                    <span className="inline-block p-3 rounded-lg bg-blue-100/80 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                
                    <h2 className="mt-4 text-base font-medium text-jetblack ">Odwiedź nas</h2>
                    <p className="mt-2 text-md text-secondary-content">20-234 Lublin, ul. Metalurgiczna 15 E, 17 D</p>
                    <p className="mt-2 text-md text-jetblack">Czynne poniedziałek - piątek od 7:00 do 15:00</p>
                 </div>

                 <div className="p-4 rounded-lg bg-blue-50 md:p-6 ">
                    <span className="inline-block p-3 rounded-lg bg-blue-100/80 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                
                    <h2 className="mt-4 text-base font-medium text-jetblack ">Odwiedź nas</h2>
                    <p className="mt-2 text-md text-secondary-content">20-234 Lublin, ul. Metalurgiczna 15 E, 17 D</p>
                    <p className="mt-2 text-md text-jetblack">Czynne poniedziałek - piątek od 7:00 do 15:00</p>
                 </div>
            </div>
        </div>

        <div className='flex flex-col mt-5 px-10'>
                        <div className='flex items-center justify-left mb-6'>
                             <h1 className='font-semibold text-3xl mt-5 ml-6 text-neutral items-center justify-center'>Nasz zespół handlowców</h1>
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
                             <h1 className='font-semibold text-3xl mt-5 ml-6 text-neutral items-center justify-center'>Zespół rozliczeń transakcji handlowych</h1>
                         </div>

                    <div className='flex flex-wrap gap-20'>
                        {/* TODO make component to team meameber */}
                        {SETTLEMENT_TEAM.map((member) => (
                            <div className="flex flex-col justify-center items-center px-7">
                                <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/yr2j0bxspepty0adi8sm.svg' width={30} height={30} alt='home icon' className='mr-2'/>
                                <div className='flex flex-col justify-center items-center '>
                                    <h2 className="mt-4 text-base font-medium text-jetblack  ">{member.name}</h2>
                                   
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
            </div>
        </div>
    </div>
            
</section>
  )
}

export default ContactUs