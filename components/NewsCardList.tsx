
import React from 'react'
import NewsCardElement from './NewsCardElement'

const NewsCardList = () => {
  return (
    <section className='max-container padding-container mt-16'>
       <h1 className='font-bold text-4xl'>Ostatnie aktualności</h1> 
        <div className='posts'>
           <NewsCardElement />
        </div>
    </section>
  )
}

export default NewsCardList