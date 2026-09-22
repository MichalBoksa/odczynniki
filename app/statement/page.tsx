import { pageMetadata, publicPages } from '@/lib/seo';
export const metadata = pageMetadata(...publicPages['/statement'], '/statement');
import Statement from '@/components/Statement'
import React from 'react'

const page = () => {
  return (
    <Statement/>
  )
}

export default page