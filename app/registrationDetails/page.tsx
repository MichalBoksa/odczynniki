import { pageMetadata, publicPages } from '@/lib/seo';
export const metadata = pageMetadata(...publicPages['/registrationDetails'], '/registrationDetails');
import RegistrationDetails from '@/components/RegistrationDetails'
import React from 'react'

const page = () => {
  return (
    <RegistrationDetails/>
  )
}

export default page