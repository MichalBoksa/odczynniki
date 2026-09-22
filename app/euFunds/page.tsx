import { pageMetadata, publicPages } from '@/lib/seo';
export const metadata = pageMetadata(...publicPages['/euFunds'], '/euFunds');
import EuFunds from '@/components/EuFunds'
import React from 'react'

const page = () => {
  return (
    <EuFunds/>
  )
}

export default page