import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/AuthProvider";
import { LocaleProvider } from '@/lang/LocaleContext';


export const metadata: Metadata = {
  title: "Midas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body >
       <AuthProvider>
        <LocaleProvider>
          <Navbar/>
          {children}
          <Footer/>
        </LocaleProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
