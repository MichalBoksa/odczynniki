'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { LocaleData } from './LocaleData';
import { getLocaleData } from './i18n';

interface LocaleContextProps {
  data: LocaleData | null;
  setLocale: (locale: string) => void;
  currentLocale: string;
}

const LocaleContext = createContext<LocaleContextProps>({ data: null, setLocale: () => {},currentLocale: 'pl' });

export const LocaleProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const router: any = useRouter(); // Update the type of 'router' to 'any'
  const { locale, defaultLocale, pathname, asPath, query } = router;
  const [data, setData] = useState<LocaleData | null>(null);
  const [currentLocale, setCurrentLocale] = useState<string>(locale || defaultLocale || 'pl');

  useEffect(() => {
    async function loadData() {
      if (currentLocale) {
        const localeData = await getLocaleData(currentLocale);
        setData(localeData);
      }
    }
    loadData();
  }, [currentLocale]);

  const setLocale = (newLocale: string) => {
    setCurrentLocale(newLocale);
    // Check if pathname is defined. If not, default to '/' or handle as needed.
    const safePathname = pathname || '/';
    const queryString = new URLSearchParams(query).toString();
    const newPath = queryString ? `${safePathname}?${queryString}` : safePathname;
    const pushResult = router.push(newPath, asPath, { locale: newLocale });
    if (pushResult && typeof pushResult.then === 'function') {
      pushResult.catch(console.error);
    }  };
  return (
    <LocaleContext.Provider value={{ data, setLocale, currentLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
