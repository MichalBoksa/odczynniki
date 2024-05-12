import Image from 'next/image'
import React from 'react'

const CerificatesSlider = () => {
  return (
    <section className=''>
    <div className="flex justify-center mb-10 mt-6" >
         <h1 className='text-primary font-bold text-3xl lg:text-6xl '>Nasze certyfikaty</h1>
    </div>

    <div className="carousel w-full max-h-[700px]">
  <div id="item1" className="carousel-item w-full">
    <Image src="/cert_pl.jpg" width={450} height={550} alt="" className=' mr-auto ml-auto'/>
  </div> 
  <div id="item2" className="carousel-item w-full">
    <Image  src="/cert_pl2.jpg" width={450} height={550} alt="" className="mr-auto ml-auto" />
  </div> 

</div> 
<div className="flex justify-center w-full py-2 gap-2 mt-3">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
</div>
    </section>
  )
}

export default CerificatesSlider