import { pageMetadata, publicPages } from '@/lib/seo';
export const metadata = pageMetadata(...publicPages['/careers'], '/careers');
import CareersInfo from '@/components/CareersInfo'
import React from 'react'

const page = () => {
  return (
   <CareersInfo/>
  )
}

export default page