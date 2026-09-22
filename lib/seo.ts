import type { Metadata } from 'next';

export const SITE_URL = 'https://odczynniki.com.pl';
export const BRAND = 'CMOCMI';
export const LOGO = 'https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/f5065d6a7ulp9pww81ux.png';
export const HOME_DESCRIPTION = 'Polski producent odczynników chemicznych i nieorganicznych związków metali. Związki molibdenu, selenu, kobaltu, miedzi, manganu, niklu i cynku dla przemysłu.';

// Match the existing trailingSlash: true configuration, including paginated URLs.
export function absoluteUrl(path: string) {
  const url = new URL(path, SITE_URL);
  if (!url.pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(url.pathname)) url.pathname += '/';
  return url.toString();
}

export function pageMetadata(title: string, description: string, path: string, image?: string): Metadata {
  const url = absoluteUrl(path);
  return {
    title, description, alternates: { canonical: url },
    openGraph: { title: `${title} | ${BRAND}`, description, url, siteName: BRAND, locale: 'pl_PL', type: 'website', images: image ? [{ url: image, alt: title }] : [] },
    twitter: { card: image ? 'summary_large_image' : 'summary', title: `${title} | ${BRAND}`, description, images: image ? [image] : [] },
  };
}

export function plainText(html: string) {
  const entities: Record<string, string> = { nbsp: ' ', amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", ndash: '–', mdash: '—', hellip: '…', laquo: '«', raquo: '»' };
  return html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&(#x[\da-f]+|#\d+|\w+);/gi, (match, entity: string) => {
      if (!entity.startsWith('#')) return entities[entity.toLowerCase()] ?? ' ';
      const code = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : Number(entity.slice(1));
      return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : ' ';
    }).replace(/\s+/g, ' ').trim();
}

export function excerpt(text: string, limit = 160) {
  const clean = plainText(text);
  if (clean.length <= limit) return clean;
  const prefix = clean.slice(0, limit - 1);
  const space = prefix.lastIndexOf(' ');
  return `${prefix.slice(0, space > limit / 2 ? space : prefix.length).trimEnd()}…`;
}

export const publicPages: Record<string, [string, string]> = {
  '/': ['Producent odczynników chemicznych i soli metali', HOME_DESCRIPTION],
  '/aboutUs': ['Producent chemikaliów nieorganicznych z Polski', 'Poznaj CMOCMI: polskiego producenta nieorganicznych związków metali. Historia firmy, specjalizacja oraz innowacje w produkcji odczynników chemicznych.'],
  '/products': ['Odczynniki chemiczne i związki metali – oferta', HOME_DESCRIPTION],
  '/contactUs': ['Kontakt z producentem odczynników chemicznych', 'Skontaktuj się z CMOCMI. Sprawdź adres zakładu w Lublinie, telefony i e-maile działu handlowego oraz uzyskaj informacje o ofercie związków metali.'],
  '/certificates': ['Certyfikaty i systemy zarządzania jakością CMOCMI', 'Zapoznaj się z certyfikatami CMOCMI udostępnionymi na stronie. Dokumenty dotyczące jakości i systemów zarządzania producenta odczynników chemicznych.'],
  '/businessPartners': ['Partnerzy biznesowi producenta chemikaliów CMOCMI', 'Poznaj partnerów biznesowych CMOCMI, producenta odczynników chemicznych i związków metali. Sprawdź informacje o firmie oraz dane kontaktowe.'],
  '/organizations': ['Organizacje, do których należy firma CMOCMI', 'Sprawdź organizacje, do których należy CMOCMI, producent nieorganicznych związków metali. Poznaj firmę i jej działalność w branży chemicznej.'],
  '/careers': ['Kariera i oferty pracy w firmie chemicznej CMOCMI', 'Poznaj oferty pracy w CMOCMI, producencie chemikaliów nieorganicznych. Sprawdź wymagania na poszczególne stanowiska oraz kontakt do biura kadr.'],
  '/euFunds': ['Projekty i fundusze europejskie w firmie CMOCMI', 'Informacje o projektach CMOCMI realizowanych ze wsparciem funduszy europejskich. Zapytania ofertowe, dokumentacja oraz wyniki postępowań.'],
  '/news': ['Aktualności firmy CMOCMI – odczynniki chemiczne', 'Wiadomości i aktualności CMOCMI, producenta odczynników chemicznych i nieorganicznych związków metali. Przeczytaj najnowsze wpisy na stronie firmy.'],
  '/registrationDetails': ['Dane rejestrowe i adresy firmy CMOCMI', 'Dane rejestrowe CMOCMI: nazwa firmy, NIP, REGON, KRS, siedziba oraz adres zakładu produkcyjnego i korespondencji. Sprawdź informacje o spółce.'],
  '/statement': ['Oświadczenie i ład korporacyjny firmy CMOCMI', 'Oświadczenie dotyczące ładu korporacyjnego CMOCMI oraz kodeks postępowania. Zapoznaj się z dokumentami udostępnionymi przez firmę.'],
  '/careers/jobOffer': ['Praca w dziale księgowo-rachunkowym', 'Oferta pracy w dziale księgowo-rachunkowym CMOCMI. Sprawdź zakres obowiązków, wymagania, oferowane warunki zatrudnienia oraz sposób aplikowania.'],
  '/careers/jobOffer2': ['Praca: aparatowy procesów chemicznych', 'Oferta pracy na stanowisku aparatowego procesów chemicznych w CMOCMI. Poznaj wymagania, warunki zatrudnienia i sposób kontaktu z biurem kadr.'],
};
