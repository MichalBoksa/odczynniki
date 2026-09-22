import { pageMetadata, publicPages } from '@/lib/seo';
export const metadata = pageMetadata(...publicPages['/contactUs'], '/contactUs');
import ContactUs from '@/components/ContactUs'
import React from 'react'

const page = () => {
  return (
   <ContactUs/>
  )
}

export default page