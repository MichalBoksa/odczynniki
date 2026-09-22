import { pageMetadata, publicPages } from '@/lib/seo';
export const metadata = pageMetadata(...publicPages['/careers/jobOffer'], '/careers/jobOffer');
import JobDetails2 from '@/components/JobDetails2'
import React from 'react'

const page = () => {
  return (
    <JobDetails2/>
  )
}

export default page