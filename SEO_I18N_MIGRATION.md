# Plan migracji języków

## Stan obecny i zakres zmian SEO

App Router ma URL-e bez języka. `LocaleProvider` trzyma język w stanie React i dynamicznie importuje słowniki PL, EN, DE, FR, ES, RU. Nie zapisuje języka w cookie ani localStorage; cookie `localConsent` dotyczy wyłącznie zgody na cookies. Provider używa argumentów routera z Pages Router, niedostępnych w App Router; przełączenie języka obecnie kieruje na `/`. Tego zachowania nie zmieniano w zadaniu SEO.

Przed zmianami słownik był pusty do czasu `useEffect`. Teraz layout przekazuje polski słownik do pierwszego renderowania, więc HTML zawiera nawigację, opisy, produkty i nagłówki. Dotychczasowe przełączanie nadal działa. Canonicale i metadata reprezentują domyślną polską wersję; angielski wpis bez polskiego odpowiednika ma metadata z treści angielskiej. Nie dodano nieprawdziwego hreflang: osobne URL-e tłumaczeń jeszcze nie istnieją.

Pełna migracja obejmuje wszystkie strony, menu, stopkę, breadcrumbs, logikę providera, newsy, linki dokumentów i przekierowania. Słowniki produktów różnią się zakresem i zapisem parametrów; `Post` i `PostEng` nie mają relacji łączącej tłumaczenia. Dlatego migrację odłożono.

## Kolejność wdrożenia

1. Zrobić zestawienie obecnych URL-i, ruchu i linków przychodzących. Wybrać PL i EN jako pierwsze indeksowalne języki; pozostałe uruchamiać dopiero po sprawdzeniu kompletności.
2. Ustalić jawne identyfikatory produktów i mapę tłumaczeń newsów. Nie łączyć rekordów po pozycji w tablicy ani automatycznie po podobnym tytule. Przy istniejących różnicach CAS i wzorów potrzebna jest weryfikacja właściciela danych.
3. Przenieść publiczne strony do `app/[locale]/...`; walidować język i zwracać `notFound()` dla nieobsługiwanych wartości. API, `/api/auth/*`, podpisy Cloudinary, logowanie i edytor pozostawić poza segmentem języka. Zachować dotychczasowe callback URL-e OAuth.
4. Ładować słownik na serwerze, ustawiać `html lang` według trasy i przekazywać dane do providera. Język z URL ma pierwszeństwo; cookie może pamiętać preferencję, ale nie zmieniać treści pod tym samym indeksem URL.
5. Zmienić przełącznik języka na prawdziwe `<Link>` do odpowiednika obecnej strony. Jeśli tłumaczenie nie istnieje, wskazać katalog/listę właściwego języka zamiast tworzyć pozorny odpowiednik.
6. Każda wersja ma własny canonical, np. `/pl/products/molybdenum/` i `/en/products/molybdenum/`. Dodać wzajemne hreflang `pl`, `en` i `x-default` (wybrana polska wersja domyślna) tylko dla istniejących odpowiedników. Angielska strona nie może mieć canonical do polskiej.
7. Zachować stare linki przez jawne przekierowania 301 do `/pl/...`, z pełną ścieżką i parametrami. Stare angielskie slugi newsów przekierować zgodnie ze zweryfikowaną mapą. Wykluczyć API, auth, pliki publiczne, `/_next/`, `robots.txt`, `sitemap.xml`. Nie stosować przekierowania według IP lub języka przeglądarki dla indeksowalnych adresów.
8. Zachować slugi istniejących produktów. Przy zmianie nazwy użyć jawnego nadpisania sluga i mapy redirectów; nie usuwać starego adresu bez 301.
9. Sitemap powinna zawierać finalne canonicale i alternatywy językowe; usunąć adresy przekierowywane. Przekierowania uruchomić w tym samym wdrożeniu co nowe trasy.
10. Na stagingu sprawdzić PL/EN, brak tłumaczenia, odświeżenie, link bezpośredni, paginację, slugi, 404, news editor, OAuth, Cloudinary i sitemap. Po wdrożeniu sprawdzić Search Console i logi przekierowań.

Materiały: [Next.js 14 Internationalization](https://nextjs.org/docs/14/app/building-your-application/routing/internationalization), [Google: wersje językowe](https://developers.google.com/search/docs/specialty/international/localized-versions).
