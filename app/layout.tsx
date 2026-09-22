import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/AuthProvider";
import { LocaleProvider } from '@/lang/LocaleContext';
import CookieConsent from "@/components/CookieConsent";
import { BRAND, HOME_DESCRIPTION, LOGO, SITE_URL } from '@/lib/seo';
import * as initialData from '@/lang/pl';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Producent odczynników chemicznych i soli metali | CMOCMI', template: `%s | ${BRAND}` },
  description: HOME_DESCRIPTION,
  openGraph: { siteName: BRAND, locale: 'pl_PL', type: 'website', images: [{ url: LOGO, alt: BRAND }] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={GeistSans.className}>
      <body>
       <AuthProvider>
        <LocaleProvider initialData={{ ...initialData }}>
          <Navbar/>
          {children}
          <CookieConsent/>
          <Footer/>
        </LocaleProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
