"use client";

import dynamic from 'next/dynamic';
import React, { useEffect, useMemo, useState } from 'react'
import 'react-quill/dist/quill.bubble.css'; 
import { CldImage, CldUploadWidget, cloudinaryLoader, CloudinaryUploadWidgetInfo } from 'next-cloudinary';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { title } from 'process';



const NewPostEditor = () => {
    const cloudinary = require('cloudinary').v2;
    cloudinary.config({
      secure: true
    });
    const { data: session, status } = useSession();
    const [resource, setResource] = useState<string |CloudinaryUploadWidgetInfo | undefined>();
    const [openOptions, setOpenOptions] = useState(false);
    const [value, setValue] = useState('');
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
    const router = useRouter();
    const [title, setTitle] = useState('');


  
    useEffect(() => {
      if (status === 'unauthenticated') {
        router.push('/login');
      }
    }, [status, router]);
  
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    if (!session) {
      return <div>Redirecting...</div>;
    }

    const handleOnSubmit = async () => {
      const imgUrl = resource ? (resource as CloudinaryUploadWidgetInfo).url : '';
        const res = await fetch('/api/news', {
          method:'POST',
          body: JSON.stringify(
            {
              // title
            }
          )
      })
    }
    

  return (
   <section className='max-container padding-container '>
    <input type="text" className='input text-6xl mb-4 rounded p-12 b-none outline-none bg-transparent' placeholder='Tytuł' onChange={(e) => setTitle(e.target.value)}/>
    
        <div className='flex flex-col gap-5 h-[700px]'>
            <button className='flex w-[36px] h-[36px] rounded-[50%] border-2 items-center justify-center' >
                <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/abn4erxzjn2wexvjxo2g.png" alt="" width={16} height={16} onClick={() => setOpenOptions(!openOptions)} />
            </button>
            {openOptions && (
              <div className='flex flex-row gap-4 '>

               
                <CldUploadWidget signatureEndpoint="/api/sign-cloudinary-params" onSuccess={(result, { widget }) => {
                  setResource(result.info);
                  // console.log(result.info)
                  console.log(JSON.stringify((resource as CloudinaryUploadWidgetInfo)?.secure_url)); // Add null check for 'resource'
                  widget.close();
                }}>
                {({ open }) => {
                  return(
                  // <input type='file' id='image' onChange={(e)=> setFile(e.target.files ? e.target.files[0] : null)}/>
                  // <label htmlFor='image'>
                  <button className='flex w-[36px] h-[36px] rounded-[50%] border-2 items-center justify-center' onClick={() => open()}>
                    <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/qu3vhl7vzffip78jzhmw.png" alt="" width={16} height={16} />
                  </button>
                      );
                    }} 
                   </CldUploadWidget>
                   
                 {/* </label> */}
                <button className='flex w-[36px] h-[36px] rounded-[50%] border-2 items-center justify-center'>
                  <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/q9vbyngedv2mpm4mwdfw.png" alt="" width={16} height={16} />
                </button>
                <button className='flex w-[36px] h-[36px] rounded-[50%] border-2 items-center justify-center'>
                  <CldImage src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/jfmjl6vzmyrchqt0u6cp.png" alt="" width={16} height={16} />
                </button>
              </div>
            )}
            <ReactQuill theme='bubble' placeholder='Treść posta...' value={value} onChange={setValue}/>
            <button className='flex btn-active btn-primary btn-sm rounded-lg items-center ml-auto mr-[25%]' onClick={handleOnSubmit}>Dodaj wpis</button>
        </div> 
        
    </section>
  )
}

export default NewPostEditor