import Link from 'next/link'
import React from 'react'

const JobDetails = () => {
  return (
    <section className='max-container mb-4'>
       <div className="flex justify-left ml-20 mb-10 mt-6" >
        <h1 className='text-primary font-bold text-xl lg:text-5xl '>Opis oferty pracy</h1>
      </div>
      <div className='bg-ivory p-5 mb-6'>
        <div className="flex flex-col justify-left ml-20 mb-10 mt-6" >
          <h3 className='font-semibold' >Dołącz do naszego zespołu!</h3>
          <h1 className='text-primary font-bold text-md lg:text-2xl '>Aparatowy procesów chemicznych</h1>
        </div>
        <div className="flex flex-col text-secondary-content px-32">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-jetblack">Zakres obowiązków:</h2>
            <ul className="list-disc list-inside">
              <li>Obsługa urządzeń i instalacji do produkcji związków chemicznych</li>
              <li>Kontrolowanie, weryfikacja i korygowanie pracy wszystkich obsługiwanych urządzeń</li>
              <li>Praca fizyczna na hali produkcyjnej</li>
            </ul>
          </div>

          <div className="mb-10 ">
          <h2 className="text-2xl font-semibold mb-2 text-jetblack">Wymagania:</h2>
          <ul className="list-disc list-inside">
            <li>Wykształcenie średnie/zawodowe (mechaniczne, chemiczne)</li>
            <li>Gotowość do pracy w systemie trzyzmianowym</li>
            <li>Doświadczenie w pracy na podobnym stanowisku - dodatkowy atut</li>
            <li>Uprawnienia na wózki widłowe - dodatkowy atut</li>
            <li>Zaangażowanie, odpowiedzialność, umiejętność pracy w zespole</li>
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

export default JobDetails