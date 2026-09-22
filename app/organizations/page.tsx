import { pageMetadata, publicPages } from '@/lib/seo';
export const metadata = pageMetadata(...publicPages['/organizations'], '/organizations');
import Organizations from '@/components/Organizations'
import React from 'react'

const page = () => {
  return (
    <Organizations/>
  )
}

export default page