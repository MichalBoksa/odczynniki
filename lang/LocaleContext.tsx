'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { LocaleData } from './LocaleData';
import { getLocaleData } from './i18n';

interface LocaleContextProps {
  data: LocaleData | null;
  setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextProps>({ data: null, setLocale: () => {} });

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
        console.log(localeData);
      }
    }
    loadData();
    console.log(currentLocale);
  }, [currentLocale]);

  const setLocale = (newLocale: string) => {
    setCurrentLocale(newLocale);
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <LocaleContext.Provider value={{ data, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
