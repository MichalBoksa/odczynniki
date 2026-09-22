import { pageMetadata, publicPages, LOGO, absoluteUrl } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import * as pl from '@/lang/pl';
export const metadata = {
  ...pageMetadata(...publicPages['/'], '/', LOGO),
  // A layout title template does not apply to a page in the same route segment.
  title: { absolute: `${publicPages['/'][0]} | CMOCMI` },
};
import CompanyInfo from "@/components/CompanyInfo";
import Slider from "@/components/Slider";



export default function Home() {
  return (
    <div>
     <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Organization', name: 'Centrum Metal Odczynniki Chemiczne - Midas Investment', alternateName: 'CMOCMI', url: absoluteUrl('/'), logo: LOGO, email: pl.OFFICE_EMAIL, telephone: pl.TEL2, address: pl.REGISTRATION_DETAILS_OFFICE_ADDRESS }} />
     <Slider/>
     <CompanyInfo/>
    </div>  
  );
}
