"use client";

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useMemo, useState } from 'react'
import 'react-quill/dist/quill.bubble.css'; 
import { CldImage } from 'next-cloudinary';

const NewPostEditor = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);


  return (
   <section className='max-container padding-container '>
    <input type="text" className='input text-6xl mb-4 rounded p-12 b-none outline-none bg-transparent' placeholder='Tytuł'/>
    
        <div className='flex flex-col gap-5 h-[700px]'>
            <button className='flex w-[36px] h-[36px] rounded-[50%] border-2 items-center justify-center' >
                <CldImage src="/plus.png" alt="" width={16} height={16} onClick={() => setOpen(!open)} />
            </button>
            {open && (
            <div className='flex flex-row gap-4 '>
                <button className='flex w-[36px] h-[36px] rounded-[50%] border-2 items-center justify-center '>
                    <CldImage src="/image.png" alt="" width={16} height={16} />
                </button>
                <button className='flex w-[36px] h-[36px] rounded-[50%] border-2 items-center justify-center'>
                    <CldImage src="/external.png" alt="" width={16} height={16} />
                </button>
                <button className='flex w-[36px] h-[36px] rounded-[50%] border-2 items-center justify-center'>
                    <CldImage src="/video.png" alt="" width={16} height={16} />
                </button>
            </div>)}
            <ReactQuill theme='bubble' placeholder='Treść posta...' value={value} onChange={setValue} />
            <button className='flex btn-active btn-primary btn-sm rounded-lg items-center ml-auto mr-[25%]'>Dodaj wpis</button>
        </div> 
        
    </section>
  )
}

export default NewPostEditor