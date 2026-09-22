import { pageMetadata, publicPages } from '@/lib/seo';
export const metadata = pageMetadata(...publicPages['/aboutUs'], '/aboutUs');
import AboutUs from '@/components/AboutUs'
import React from 'react'

const page = () => {
  return (
    <AboutUs/>
  )
}

export default page