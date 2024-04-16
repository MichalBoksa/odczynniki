import React from 'react'



const Slider = () => {
  return (
    <section >
       <div className="carousel w-full max-h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/farm2.jpg" className="w-full object-cover z-5" />
      <div className='w-full absolute text-base-200 font-bold text-6xl z-10 tracking-wider' style={{top: '20%', left:'5%', transform: 'translateY(-50%)'}}>
         <h1 className=''>INNOWACJA NASZĄ DROGĄ DO CELU</h1>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/farm3.jpg" className="w-full" />
    <div className='w-full absolute text-base-200 font-bold text-6xl justify-center items-center z-10 tracking-wider' style={{top: '20%', left:'5%', transform: 'translateY(-50%)'}}>
         <h1 className=''>INNOWACJA NASZĄ DROGĄ DO CELU</h1>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/farm4.jpg" className="w-full" />
    <div className='w-full absolute text-base-200 font-bold text-6xl justify-center items-center z-10 tracking-wider' style={{top: '20%', left:'5%', transform: 'translateY(-50%)'}}>
         <h1 className=''>INNOWACJA NASZĄ DROGĄ DO CELU</h1>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/farm.jpg" className="w-full" />
    <div className='w-full absolute text-base-200 font-bold text-6xl justify-center items-center z-10 tracking-wider' style={{top: '20%', left:'5%', transform: 'translateY(-50%)'}}>
         <h1 className=''>INNOWACJA NASZĄ DROGĄ DO CELU</h1>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
     </section>
  )
}

export default Slider