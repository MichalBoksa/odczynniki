"use client";

import React from 'react';
import { useLocale } from '../lang/LocaleContext';

const Statement = () => {
  const { data, currentLocale } = useLocale() || {};

  // Wybór pliku PDF w zależności od języka
  const pdfUrl =
    currentLocale === 'pl'
      ? '/CMOCMI_Kodeks_postepowania.pdf'
      : '/CMOCMI_CODE_OF_CONDUCT.pdf';

  return (
    <div className="max-container md:mb-32">
      <div className="bg-dark-white w-full mr-auto ml-auto py-6">

        {/* Nagłówek */}
        <div className="flex justify-start mb-4 py-4 px-6">
          <h1 className="text-primary font-bold text-3xl md:text-5xl lg:text-6xl">
            {currentLocale === 'pl'
              ? data?.STATEMENT_TITLE || 'Kodeks Postępowania'
              : data?.STATEMENT_TITLE || 'Code of Conduct'}
          </h1>
        </div>

        {/* Podgląd PDF */}
        <div className="w-full px-6">
          <div className="w-full h-[80vh] border rounded-lg shadow-md overflow-hidden">
            <iframe
              src={pdfUrl}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </div>
        </div>

        {/* Przycisk pobierania */}
        {/* <div className="flex justify-center w-full py-6">
          <a
            href={pdfUrl}
            download={
              currentLocale === 'pl'
                ? 'CMOCMI_Kodeks_postepowania.pdf'
                : 'CMOCMI_CODE_OF_CONDUCT.pdf'
            }
            className="btn bg-primary text-white hover:bg-primary/80 px-6"
          >
            {currentLocale === 'pl'
              ? data?.DOWNLOAD || 'Pobierz PDF'
              : data?.DOWNLOAD || 'Download PDF'}
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Statement;
