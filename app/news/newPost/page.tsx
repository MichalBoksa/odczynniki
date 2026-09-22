export const metadata = { title: 'Dodawanie aktualności', robots: { index: false, follow: false } };
import NewPostEditor from '@/components/NewPostEditor'
import React from 'react'

const page = () => {
  return (
    <NewPostEditor />
  )
}

export default page