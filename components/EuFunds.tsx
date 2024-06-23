'use client';
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import React from 'react'

const EuFunds = () => {
  const downloadPdf = (fileName:string) => {
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className='max-container padding-container'>
    <div className="flex flex-col justify-center mb-5 mt-10" >
           <h1 className='text-primary font-bold text-5xl lg:text-6xl text-center'>Realizowane projekty UE</h1>
           <h3 className='text-secondary-content font-semibold text-left text-2xl lg:text-3xl ml-8 mt-5'>Zakończone</h3>
       </div>
       <div className='flex flex-col w-full'>

       <div className='flex flex-col lg:px-16 px-7 ml-5 mr-5 mb-10 '>
          <h2 className='font-bold  text-xl text-left'>DOSTAWA PARTII TLENKU MOLIBDENU VI O ZAWARTOŚCI MOLIBDENU WG MASY SUCHEJ OD MIN. 30% DO MAX. 42,99%, O WADZE 750 KG +/- 250 KG</h2>
          <p className='mt-4'>W związku z prośbą oferenta do ogłoszenia dodano wzory formularza ofertowego oraz oświadczeń w języku angielskim, jednocześnie wydłużony został termin składania ofert do wtorku 10.12.2019 r. do godziny 12.00. <Link className='text-primary link link-hover font-semibold' href="https://bazakonkurencyjnosci.funduszeeuropejskie.gov.pl/publication/view/1219787">Link</Link></p>
          <div className='flex items-center border-b-2 border-b-secondary-content w-3/5 mt-3'></div>
         </div>
  

       <div className='flex flex-col lg:px-16 px-7 ml-5 mr-5 mb-10 '>
          <h2 className='font-bold  text-xl text-left'>DOSTAWA 4 PARTII TLENKU MOLIBDENU VI</h2>
           <p className='mt-4'> <Link className='text-primary link link-hover font-semibold' href="https://https://bazakonkurencyjnosci.gov.pl/publication/view/1065628">https://https://bazakonkurencyjnosci.gov.pl/publication/view/1065628</Link></p>
           <div className='flex items-center border-b-2 border-b-secondary-content w-3/5 mt-3'></div>
         </div>
       

       <div className='flex flex-col lg:px-16 px-7 ml-5 mr-5 mb-10 '>
          <h2 className='font-bold  text-xl text-left'>DOSTAWA 4 PARTII TLENKU MOLIBDENU VI O WADZE 750 KG +/- 250 KG KAŻDA (INNE NAZWY: TLENEK MOLIBDENU, TLENKOWY KONCENTRAT MOLIBDENOWY, PRAŻONY KONCENTRAT MOLIBDENOWY LUB TECHNICZNY TLENEK MOLIBDENU) POCHODZĄCYCH Z RÓŻNYCH ŹRÓDEŁ</h2>
           <p className='mt-4'> <Link className='text-primary link link-hover font-semibold' href="https://bazakonkurencyjnosci.gov.pl/publication/view/1060870#info">Link</Link></p>
           <p className=''>Zakończone bez rozstrzygnięcia z powodu braku ofert.</p>
           <div className='flex flex-col'>
              <h3 className='font-bold mt-2'>Załączniki:</h3>
              <div className='flex flex-col items-start ml-3'>
                <button className='link link-hover' onClick={() => downloadPdf('zapytanie_ofertowe.pdf')}>
                Zapytania ofertowe
                </button>
                <button className='link link-hover' onClick={() => downloadPdf('oswiadczenie3.doc')}>
                Oświadczenie
                </button>
                <button className='link link-hover' onClick={() => downloadPdf('zakonczenie.pdf')}>
                Informaja o zakończeniu postępowania przetargowego
                </button>
                
            </div>
            <div className='flex items-center justify-center'>
              <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/eufunds/ow5rq3ifovhukwfnzdib.jpg' width={600} height={350} alt='euFunds' className='' />    
             </div>
             <div className='flex items-center border-b-2 border-b-secondary-content w-3/5 mt-3'></div>
         </div>
       </div>

       <div className='flex flex-col lg:px-16 px-7 ml-5 mr-5 mb-10 '>
          <h2 className='font-bold  text-xl text-left'>INTENSYFIKACJA PRODUKCJI NOWYCH ZWIĄZKÓW MOLIBDENU POPRZEZ ZASTOSOWANIE METOD WYSOKOTEMPERATUROWYCH</h2>
           <p className='mt-4'> <Link className='text-primary link link-hover font-semibold' href="https://bazakonkurencyjnosci.gov.pl/publication/view/1025508">https://bazakonkurencyjnosci.gov.pl/publication/view/1025508</Link></p>
           <div className='flex flex-col'>
              <h3 className='font-bold mt-2'>Załączniki:</h3>
              <div className='flex flex-col items-start ml-3'>
                <button className='link link-hover' onClick={() => downloadPdf('oswiadczenie2.doc')}>
                Załącznik nr 1 - Oświadczenie
                </button>
                <button className='link link-hover' onClick={() => downloadPdf('oferta.doc')}>
                Załącznik nr 2 - Wzór oferty 
                </button>
                <Link  href="/protokol_komisji_przetargowej.jpg" legacyBehavior>
                  <a className='link link-hover' target="_blank" rel="noopener noreferrer">
                    Protokół Komisji Przetargowej
                  </a>
                </Link>
            </div>
        </div>
        <div className='flex items-center border-b-2 border-b-secondary-content w-3/5 mt-3'></div>
       </div>


       <div className='flex flex-col lg:px-16 px-7 ml-5 mr-5 mb-10 '>
          <h2 className='font-bold text-xl text-left'>INTENSYFIKACJA PRODUKCJI NOWYCH ZWIĄZKÓW MOLIBDENU POPRZEZ ZASTOSOWANIE METOD WYSOKOTEMPERATUROWYCH</h2>
           <p className='mt-4'>Zapytania  ofertowe dotyczące projektu „Intensyfikacja produkcji nowych związków molibdenu poprzez zastosowanie metod wysokotemperaturowych”: <Link className='text-primary link link-hover font-semibold' href="https://bazakonkurencyjnosci.funduszeeuropejskie.gov.pl/publication/view/1013525">Link</Link></p>
           <div className='flex flex-col'>
              <h3 className='font-bold mt-2'>Załączniki:</h3>
              <div className='flex flex-col items-start ml-3'>
                <button className='link link-hover' onClick={() => downloadPdf('ogloszenie.doc')}>
                  Informacje o ogłoszeniu - Oświadczenie
                </button>
                <button className='link link-hover' onClick={() => downloadPdf('oferta.doc')}>
                Załącznik nr 1 - Wzór oferty 
                </button>
                <button className='link link-hover' onClick={() => downloadPdf('oswiadczenia.doc')}>
                Załącznik nr 2 - Oświadczenia
                </button>
            </div>
        </div>
       </div>

        <div className='flex mb-3 items-center justify-center'>
              <CldImage src='https://res.cloudinary.com/dozgr1muo/image/upload/v234/midas/eufunds/otas8zkjx28vpfy4opyw.jpg' width={600} height={350} alt='euFunds' className='' />    
       </div>

 </div>
   </section>

  )
}

export default EuFunds