import { pageMetadata, publicPages } from '@/lib/seo';
export const metadata = pageMetadata(...publicPages['/certificates'], '/certificates');
import CerificatesSlider from '@/components/CerificatesSlider'
import React from 'react'

const page = () => {
  return (
    <CerificatesSlider/>
  )
}

export default page