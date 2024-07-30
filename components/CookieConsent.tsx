'use client';
import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import { useLocale } from "@/lang/LocaleContext";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState(true);
    const { data } = useLocale() || {};

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-50 ">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-dark-ivory">
        <span className="text-dark text-base mr-16">
            {data?.COOKIES_CONSENT}
        </span>
        <button className="bg-base-300 py-2 px-8 rounded text-white" onClick={() => acceptCookie()}>
        {data?.COOKIES_CONSENT_ACCEPT}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;