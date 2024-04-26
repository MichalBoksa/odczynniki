import Image from 'next/image'
import React from 'react'

const SingleNewsPage = () => {
  return (
   <section className='max-container padding-container'>
    <div className='flex gap-12 items-center justify-center'>
         <div className='flex-2'>
           <Image src="/farm.jpg" alt="" width={650} height={400} className='rounded cover'/>
          </div> 
        <div className='flex-1 '>
        <h1 className='mt-10 text-gray-500 text-4xl'>title</h1>
      </div>
      </div>

      <div className='post content mt-20 px-12 mb-4'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque nec diam tincidunt consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tellus erat, ultrices a consequat iaculis, posuere sit amet mauris. Donec in est lorem. Donec ligula dolor, ultricies eu nulla et, commodo lacinia justo. Donec tristique est sed commodo ultricies. Donec a imperdiet massa. Vivamus gravida lectus ut ex ullamcorper tincidunt. Donec eget dignissim leo. Sed sed dui felis. Suspendisse potenti.

Proin vel magna sed urna consectetur tincidunt. Proin vitae mauris sit amet velit gravida aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis tellus et ex fermentum porta eget id odio. Sed quis tincidunt odio. Duis tempor pretium mi, vel porta diam auctor nec. Morbi egestas lectus at tortor finibus, at eleifend ante porta.

Maecenas elementum elit vitae congue fermentum. Proin mattis quis lectus sit amet commodo. Etiam vulputate elit ut tempus blandit. Pellentesque eget velit bibendum, pellentesque augue eget, fringilla metus. Sed facilisis pharetra dui, quis tempus nisi laoreet id. Donec quam orci, ornare sit amet varius vitae, posuere vitae turpis. Nam semper at dui sed gravida.

Suspendisse tristique, augue at aliquam hendrerit, massa est facilisis turpis, eu dictum urna diam mollis sapien. Proin placerat dictum lobortis. Maecenas id mauris tempus lacus tristique pharetra. Morbi pellentesque orci nec felis pharetra ullamcorper. Sed justo elit, interdum ultricies viverra ac, sodales sit amet ante. Sed iaculis commodo libero, a placerat nibh viverra nec. Nullam feugiat metus et sapien efficitur, et sagittis felis egestas. Etiam tellus purus, ornare id egestas vitae, finibus ac dui. Aliquam fringilla, leo at eleifend tincidunt, mauris elit auctor velit, at laoreet erat urna at eros. Aenean mauris nunc, fringilla fermentum lacus sed, consectetur consequat nisl. Maecenas luctus malesuada posuere. Cras est lacus, bibendum ac molestie sed, scelerisque sit amet augue. Donec nibh enim, mollis vitae risus nec, aliquam scelerisque magna.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porttitor placerat nunc a tempus. Pellentesque id lacinia felis, ornare tempor tortor. Proin congue, nisl mattis sagittis sagittis, risus erat molestie felis, feugiat bibendum odio dui non libero. Aliquam lobortis dapibus turpis, a lacinia nisl lacinia sed. Sed id sodales ligula, non ullamcorper felis. Duis pharetra, dui eget placerat porttitor, nibh nulla vulputate nibh, non se </p>
      </div>
    
    </section>
  )
}

export default SingleNewsPage