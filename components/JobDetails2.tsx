import Link from 'next/link'
import React from 'react'

const JobDetails2 = () => {
  return (
    <section className='max-container mb-4'>
       <div className="flex justify-left ml-20 mb-10 mt-6" >
        <h1 className='text-primary font-bold text-xl lg:text-5xl '>Opis oferty pracy</h1>
      </div>
      <div className='bg-ivory p-5 mb-6'>
        <div className="flex flex-col justify-left ml-20 mb-10 mt-6" >
          <h3 className='font-semibold' >Dołącz do naszego zespołu!</h3>
          <h1 className='text-primary font-bold text-md lg:text-2xl '>Pracownik do Działu księgowo-rachunkowego w firmie produkcyjnej</h1>
        </div>
        <div className="flex flex-col text-secondary-content px-32">

          <div className="mb-10 ">
          <h2 className="text-2xl font-semibold mb-2 text-jetblack">Wymagania:</h2>
          <ul className="list-disc list-inside">
            <li>Wykształcenie wyższe: Finanse i zarządzanie, Księgowość, Controlling finansowy </li>
            <li>2-3 letnie doświadczenie pracy w księgowości, kontrolingu</li>
            <li>Współpraca z bankami i innymi instytucjami finansowymi, organami podatkowymi</li>
            <li>Monitorowanie i nadzór przepływów finansowych, zarządzanie płynnością finansową, dostarczanie finansowej informacji zarządczej</li>
            <li>Sporządzanie dokumentacji finansowej m.in. raportów i analiz, budżetów, aktualizacji, weryfikacja i procedowanie faktur</li>
            <li>Obsługa komputera m.in. dobra znajomość pakietu MS Office, systemu Comarch ERP XL/Comarch ERP Optima</li>
            <li>Znajomość języka angielskiego na poziomie średniozaawansowanym</li>
            <li>Zdolność analitycznego myślenia, otwartość, umiejętność pracy w zespole, odpowiedzialność</li>
          </ul>
        </div>

        <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-jetblack">Mile widziane:</h2>
            <ul className="list-disc list-inside">
              <li>Doświadczenie w pracy w firmach produkcyjno - handlowych</li>
              <li>Doświadczenie w zakresie prowadzenia spraw kadrowo - płacowych</li>
            </ul>
          </div>

        <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-jetblack">Zapewniamy:</h2>
        <ul className="list-disc list-inside">
          <li>Umowę o pracę</li>
          <li>Stabilne warunki zatrudnienia</li>
          <li>Możliwość rozwoju zawodowego i osobistego</li>
          <li>Dodatkową opiekę medyczną dla Pracowników i ich rodzin</li>
          <li>Dobrą atmosferę w pracy</li>
          <li>Dofinansowanie do karty MultiSport</li>

        </ul>
      </div>
      <div className="mt-6 mr-auto ml-auto">
       <Link href="/contactUs"> <button className="btn btn-primary text-cream">Zgłoś się do nas!</button></Link>
      </div>
        </div>
      </div>
      </section>
  )
}

export default JobDetails2