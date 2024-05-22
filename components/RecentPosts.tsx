import React from 'react'
import { CldImage } from 'next-cloudinary';

const RecentPosts = () => {
  return (
    <div className=''>
        <h2>Najnowsze aktualności</h2>
            <div className='items'>
                <div className='imagecontainer'>
                    <CldImage width={30} height={30} src="https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/twnplqvxuw7e1ucig6g3.jpg" alt="contact-bg"/>
                    </div>
                <div className='text'>
                    </div>
            </div>
    </div>
  )
}

export default RecentPosts