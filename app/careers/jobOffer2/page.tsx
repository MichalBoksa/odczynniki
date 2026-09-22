import { pageMetadata, publicPages } from '@/lib/seo';
export const metadata = pageMetadata(...publicPages['/careers/jobOffer2'], '/careers/jobOffer2');
import JobDetails from '@/components/JobDetails'
import React from 'react'

const page = () => {
  return (
    <JobDetails/>
  )
}

export default page