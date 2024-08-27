import { NextResponse } from 'next/server';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { MOLYBDENUM_PRODUCTS } from '@/constants';


// Funkcja obsługująca dynamiczne generowanie sitemap.xml
export async function GET() {
  // Konfiguracja hosta witryny
  const hostname = 'https://odczynniki.com.pl';

  // Tworzenie strumienia sitemap
  const sitemap = new SitemapStream({ hostname });
  
  // Dodanie głównych stron
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/careers', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/contactUs', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/products/molybdenum', changefreq: 'monthly', priority: 0.8 });
  
  // Dynamiczne dodanie produktów molibdenu do sitemap
  MOLYBDENUM_PRODUCTS.forEach((product) => {
    sitemap.write({
      url: `/products/molybdenum/`,
      changefreq: 'monthly',
      priority: 0.7,
    });
  });
  
  // Zakończenie strumienia
  sitemap.end();

  // Konwersja strumienia na XML
  const xmlStream = await streamToPromise(Readable.from(sitemap));

  // Zwracanie odpowiedzi z sitemap.xml
  return new NextResponse(xmlStream, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
