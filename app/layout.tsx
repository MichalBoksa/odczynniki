import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/AuthProvider";
import { LocaleProvider } from '@/lang/LocaleContext';
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Centrum Metal Odczynniki Chemiczne",
  description: "Głównym przedmiotem działalności CMOCMI jest produkcja chemikaliów nieorganicznych w tym w szczególności związków (soli metali) molibdenu, selenu, miedzi, manganu, cynku, kobaltu i niklu",
  keywords:["odczynniki", "odczynniki chemiczne", "molibden", "miedź", "Sodu Molibdenian", "Amonu Heptamolibdenian", "Midas Investment"],
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
        <LocaleProvider>
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
