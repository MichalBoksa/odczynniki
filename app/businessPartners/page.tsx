import { pageMetadata, publicPages } from '@/lib/seo';
export const metadata = pageMetadata(...publicPages['/businessPartners'], '/businessPartners');
import BusinessPartners from '@/components/BusinessPartners'
import React from 'react'

const page = () => {
  return (
   <BusinessPartners/>
  )
}

export default page