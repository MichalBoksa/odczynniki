# Wdrożenie SEO – 21–22.09.2026

## Wynik

Zaimplementowano katalog `/products/`, osiem kategorii i 36 indywidualnych stron produktów. Wszystkie mają treść w początkowym HTML, metadata i własny canonical. Zachowano istniejące URL-e, style Tailwind/DaisyUI, dane chemiczne, przełącznik języków, backend i uruchamianie przez `next start`. Nie wykonano commita, pusha ani wdrożenia VPS.

## Audyt przed zmianami

- Next.js 14.2.5 App Router, jeden główny layout. `trailingSlash: true`, bez static export w konfiguracji. Stary skrypt `npm run prod` wskazuje `next export` – nie używać go do wdrożenia tego projektu.
- `/products` był placeholderem. Osiem kategorii korzystało ze słowników przez Client Components; żadna pozycja produktu nie miała własnego URL.
- `LocaleProvider` zaczynał od `data: null`; treści pojawiały się dopiero po efekcie klienta. Brak osobnych URL-i językowych i hreflang. Słowniki PL/EN/FR/DE/RU/ES nie są identyczne.
- Globalne metadata były wspólne. Trzy komponenty używały `next/head` zamiast Metadata API App Router. Brak canonicali, robots i metadata konkretnych newsów.
- `app/sitemap/route.ts` zwracał XML pod `/sitemap/`, zawierał niewiele adresów i powtarzał kategorię molibdenu dla każdego produktu. Brak `app/sitemap.ts` i `app/robots.ts`.
- Newsy pobierano z własnego serwera HTTP pod `localhost:3002`. Modele `Post` i `PostEng` mają `slug`, `title`, HTML `desc`, `img`, `createdAt`; nie mają `updatedAt`, autora ani statusu publikacji. Brak wpisu powodował błędy w komponencie zamiast `notFound()`.
- Powielone H1 występowały w sliderze, kategorii, kartach newsów, danych liczbowych i sekcjach kontaktu. Stopka miała niedziałający link `/carerrs`.
- Zdjęcia korzystają z `CldImage`, w tym automatycznych transformacji Cloudinary. Geist jest ładowany z pakietu `geist/font/sans`; import Google Fonts w CSS jest zakomentowany. Edytor Quill ma już dynamiczny import.
- NextAuth, Prisma/MongoDB, API newsów i signing Cloudinary pozostają bez zmian. Stwierdzono publiczne mapowanie JWT i istniejące problemy autoryzacji POST opisane w `SECURITY_NOTES.md`.

## Plan wykonany

1. Wspólne metadata, canonicale, polski słownik w pierwszym renderowaniu.
2. Katalog, linki kategorii i dynamiczne strony produktów z rzeczywistych danych.
3. Server-side odczyty newsów, metadata dynamiczne, brak treści jako 404.
4. Sitemap, robots, breadcrumbs, JSON-LD, semantyka, linki i obrazy.
5. Build, testy HTTP, przeglądarka, przegląd bezpieczeństwa i instrukcje wdrożenia.

## Metadata i canonical

`lib/seo.ts` zawiera metadane stron publicznych i wspólny generator Open Graph/Twitter. Layout ustawia `metadataBase`, nazwę CMOCMI, locale `pl_PL` oraz template `%s | CMOCMI`. Strona główna ma jawny tytuł absolutny, ponieważ template layoutu nie obejmuje strony w tym samym segmencie.

Własne title/description/canonical/OG mają: `/`, `/aboutUs/`, `/products/`, osiem kategorii, 36 produktów, `/contactUs/`, `/certificates/`, `/businessPartners/`, `/organizations/`, `/careers/`, obie oferty pracy, `/euFunds/`, `/registrationDetails/`, `/statement/`, `/news/` oraz pojedyncze newsy. Paginacja ma własny canonical z `?page=N`; pierwsza strona wskazuje `/news/`. Krótsze tytuły zachowano tam, gdzie dłuższy tekst byłby sztuczny.

Wszystkie canonicale wskazują HTTPS bez www, z ukośnikiem zgodnym z zastaną konfiguracją. Parametry śledzące nie wchodzą do canonicali. `/login/` i `/news/newPost/` mają `noindex, nofollow`, bez canonicala odziedziczonego po stronie głównej.

## Produkty i treść

`lib/catalog.ts` odczytuje aktualne dane z `lang/pl.js`. Nie korzysta ze starszej, rozbieżnej kopii molibdenu w `constants/index.ts`. Liczba pozycji: molibden 3, selen 3, kobalt 1, miedź 8, mangan 4, nikiel 5, cynk 7, pozostałe 5.

Adresy: `/products/[category]/[productSlug]/`. Slugi powstają z faktycznych polskich nazw z normalizacją polskich znaków. Kategorie zachowują istniejące listy i klasy, a nazwy produktów stają się linkami. Dopasowanie tłumaczeń korzysta z jednoczesnej zgodności CAS i wzoru, nigdy z indeksu tablicy. Niepewne dopasowania nie są łączone; angielskie nazwy są dodawane wyłącznie dla jednoznacznego dopasowania istniejących danych.

Strony produktów wyświetlają nazwę, dostępną angielską nazwę, wzór, CAS, zastosowania oraz kontakt i link do kategorii. `CatalogProduct` i `productDetails` pozwalają później uzupełnić masę molową, czystość, postać, opakowania, informacje techniczne, zdjęcie, dokumenty, certyfikaty i SKU. Brakujące sekcje nie są wyświetlane. W tej chwili nie ma danych zdjęciowych poszczególnych produktów, dlatego nie dodano przypadkowych obrazów ani ich OG.

Przy dodawaniu produktu uzupełnić rzeczywisty słownik, sprawdzić unikalność sluga i zbudować aplikację. Nowa pozycja automatycznie trafi do routes, kategorii i sitemap. Po publikacji nie zmieniać adresu przez samą zmianę nazwy: zachować dotychczasowy `slug` w `productDetails` lub dodać jawny redirect 301/308. Klucz nadpisania to `wygenerowany-slug/CAS`.

Nie poprawiano merytorycznie parametrów chemicznych. Do kontroli właściciela danych pozostają m.in. rozbieżności słowników, zapis wzoru octanu cynku w PL oraz liczba w istniejącym kafelku kobaltu. Nie uznano ich automatycznie za podstawę do generowania nowych informacji.

## Sitemap i robots

`app/sitemap.ts` używa `MetadataRoute.Sitemap`. `/sitemap.xml` zawiera strony publiczne, kategorie, produkty oraz unikalne slugi obu kolekcji newsów. Jeśli slug istnieje w obu językach, pierwszeństwo mają dane PL, zgodnie z domyślnym renderowaniem strony. Wyłączono edytor, logowanie i API. Statyczne strony nie dostają sztucznej daty modyfikacji; newsy używają istniejącego `createdAt`.

Sitemap odczytuje bazę na żądanie, więc nowe newsy nie wymagają przebudowy aplikacji. Błąd bazy nie jest maskowany pustą „poprawną” sitemap; należy monitorować dostępność MongoDB. Build nie potrzebuje działającego serwera HTTP ani zapytań MongoDB. Stary `/sitemap/` przekierowuje trwale (308 Next.js) do `/sitemap.xml`.

`app/robots.ts` pozwala na strony publiczne, blokuje `/api/`, `/login/`, `/news/newPost/`, wskazuje host i sitemap. Nie blokuje CSS, JS ani obrazów. Nie dodano fikcyjnego `/admin`, ponieważ takiej trasy w repo nie ma.

## Newsy

Server Components pobierają dane bezpośrednio przez obecnego klienta Prisma. `React.cache` deduplikuje odczyt tego samego sluga między `generateMetadata` i stroną, bez trwałego cache opóźniającego nowe publikacje. Minimalna deklaracja `types/react-cache.d.ts` uzupełnia istniejące stare typy React; nie aktualizowano bibliotek.

Każdy wpis ma indywidualne title, opis z tekstu po usunięciu HTML i nadmiaru whitespace, canonical ze slugiem, obraz OG z wpisu, datę publikacji, H1, NewsArticle i breadcrumbs. Brak tłumaczenia nie powoduje odczytu `undefined`; wpis istniejący tylko w EN jest dostępny. Brak w obu kolekcjach zwraca 404. Nie dodano fikcyjnej daty aktualizacji ani autora.

Lista obsługuje brak wpisów. Paginacja jest linkowana i nie pomija drugiego wpisu jak wcześniejszy kod z podwójnym dodawaniem najnowszego rekordu. Zmiany dotyczą odczytu stron; API zapisu pozostaje niezmienione. Nie wstrzykiwano automatycznie linków produktów do redakcyjnego HTML bez potwierdzonej relacji tematycznej.

## Structured data, nagłówki i linki

- Organization na stronie głównej: nazwa, istniejące logo, telefon, e-mail i adres siedziby ze źródeł projektu.
- BreadcrumbList na kategoriach, produktach i pojedynczych newsach; widoczne linki `<Link>`.
- Product na stronach produktów, bez fikcyjnych Offer, ocen, recenzji, cen i dostępności. Nie przypisano automatycznie producenta wszystkim produktom, ponieważ firma prowadzi także handel.
- NewsArticle z tytułem, opisem, obrazem, rzeczywistą datą publikacji i językiem danych.
- Bezpieczny wspólny serializer JSON-LD; kodowanie `<`, U+2028, U+2029.
- Uporządkowano nagłówki, zachowując ich klasy wizualne; liczby, wzory i CAS nie są nagłówkami. W testowanych stronach HTML jest jeden H1.
- Główne etykiety menu „O nas” i „Nasze produkty” są linkami. Strona główna linkuje katalog i istniejące kategorie; stopka prowadzi poprawnie do kariery. Newsy i paginacja mają crawlable linki.

## Obrazy i wydajność

Pierwszy obraz slidera otrzymał `priority` i `sizes="100vw"`; pozostałe zachowują lazy loading. Zachowano Cloudinary, jego transformacje `f_auto/q_auto`, font i layout. Newsy używają tytułu jako dostępnego opisu obrazu; certyfikaty mają opisowe alt zgodne z dokumentami. Dekoracyjne zdjęcia i ikony nie dostały wymyślonych opisów scen. Logotypy partnerów o nieustalonej w danych tożsamości nie otrzymały zmyślonych nazw.

Build: wspólne JS 87,6 kB; strona główna około 142 kB; kategorie około 96 kB; katalog 95,6 kB; produkt około 142 kB. Największy bundle to edytor newsów (około 350 kB), który nie jest indeksowalny. Nie usuwano istniejącego SDK Cloudinary z edytora, nie przebudowywano slidera ani fontów. Wyniki builda nie są pomiarem Core Web Vitals; rzeczywiste LCP/INP/CLS trzeba obserwować po wdrożeniu.

## Sprawdzenie

- `npm run build`: PASS, Next.js 14.2.5, 68 wygenerowanych stron; TypeScript i kontrola Next.js bez błędów. Początkowy sandbox blokował worker (`spawn EPERM`); build poza sandboxem przeszedł.
- `node scripts/seo-smoke.mjs http://localhost:3102`: **74 PASS, 0 FAIL**. Raport: `seo-smoke-results.json`.
- Testy obejmują wszystkie publiczne strony statyczne, 36 produktów, osiem kategorii, H1 w odpowiedzi serwera, metadata, canonical, JSON-LD, linki produktów, robots, sitemap i stary redirect, 404, noindex, paginację, trzy rzeczywiste newsy oraz odczyty API MongoDB/NextAuth.
- `node scripts/seo-security-check.cjs`: żaden ze skonfigurowanych sekretów JWT, NextAuth, Cloudinary, Google OAuth i DATABASE_URL nie występuje w plikach klienta `.next/static`. Skrypt nie wypisuje wartości.
- Przeglądarka: porównano stronę główną z produkcją, otwarto katalog → kategorię → produkt, zweryfikowano breadcrumbs i parametry, sprawdzono przełączenie PL→EN (z dotychczasowym powrotem na `/`).
- Diff potwierdza brak zmian API, NextAuth, Prisma, schematu, edytora, package.json i lockfile. Nie wykonywano logowania OAuth kontem użytkownika ani publikowania/uploadu testowych danych. Pełny zalogowany przepływ pozostaje do sprawdzenia przez administratora po wdrożeniu.
- Ostrzeżenie Browserslist dotyczy zastanej bazy caniuse-lite; zgodnie z wymaganiem nie aktualizowano zależności.

## Świadomie odłożone i czynności ręczne

- Osobne `/pl/` i `/en/` wraz z hreflang wymagają szerszej migracji opisanej w `SEO_I18N_MIGRATION.md`. Obecne URL-e i działanie przełącznika pozostają zachowane; breadcrumbs i nowe etykiety techniczne są częściowo PL/EN, pełna lokalizacja wymaga tej migracji.
- Nie dodano nieznanych danych technicznych, certyfikatów produktów, cen, stanów magazynowych ani zdjęć.
- Administrator powinien przejrzeć `SECURITY_NOTES.md`, szczególnie istniejącą autoryzację endpointów POST, i sprawdzić stare artefakty pod kątem potencjalnej ekspozycji JWT.
- Dopasować i wdrożyć Nginx według `SEO_NGINX.md`; zadanie nie zmieniało VPS.
- Zweryfikować Search Console i zgłosić sitemap zgodnie z `SEO_GOOGLE_SEARCH_CONSOLE.md`.

## Wdrożenie na VPS

Wykonać kopię aktualnego release i konfiguracji, a następnie dostarczyć zatwierdzone pliki własnym procesem wdrożeniowym. Nie kopiować lokalnego `.next` z Windows, `node_modules` ani `.env`. W katalogu nowego release na VPS:

```sh
npm ci
npx --no-install prisma generate --schema prisma/schema.prisma
npm run build
node scripts/seo-security-check.cjs
```

Nie wykonywać `prisma db push` ani migracji bazy – schemat nie został zmieniony. Zachować istniejące zmienne środowiskowe, dostęp MongoDB oraz konfigurację OAuth i Cloudinary. `npm ci` używa obecnego lockfile; nie uruchamiać `npm update`.

Uruchamianie bez menedżera procesów: `npm start` (port 3002). Jeśli usługą zarządza systemd lub PM2, zrestartować wyłącznie istniejącą usługę przez dotychczasowy mechanizm, zamiast uruchamiać drugi serwer na tym samym porcie:

```sh
# Przykład – podstawić faktyczną nazwę istniejącej usługi:
sudo systemctl restart NAZWA_USLUGI
# albo dla istniejącego procesu PM2:
pm2 restart NAZWA_PROCESU --update-env

node scripts/seo-smoke.mjs http://127.0.0.1:3002
curl -I https://odczynniki.com.pl/products/
curl -I https://odczynniki.com.pl/sitemap.xml
curl -I https://odczynniki.com.pl/robots.txt
```

Sprawdzić logowanie, panel dodawania newsów i upload jako uprawniony administrator. Przy niepowodzeniu przełączyć na poprzedni release. Nie używać `npm run prod` ani statycznego katalogu `out`.

## Pełna lista plików

Lista poniżej jest generowana z końcowego statusu Git; nie obejmuje ignorowanych artefaktów `.next` i `node_modules`.

### Zmodyfikowane

- .gitignore
- app/aboutUs/page.tsx
- app/businessPartners/page.tsx
- app/careers/jobOffer/page.tsx
- app/careers/jobOffer2/page.tsx
- app/careers/page.tsx
- app/certificates/page.tsx
- app/contactUs/page.tsx
- app/euFunds/page.tsx
- app/layout.tsx
- app/login/page.tsx
- app/news/[slug]/page.tsx
- app/news/newPost/page.tsx
- app/news/page.tsx
- app/organizations/page.tsx
- app/page.tsx
- app/products/cobalt/page.tsx
- app/products/copper/page.tsx
- app/products/manganese/page.tsx
- app/products/molybdenum/page.tsx
- app/products/nickel/page.tsx
- app/products/other/page.tsx
- app/products/page.tsx
- app/products/selenium/page.tsx
- app/products/zinc/page.tsx
- app/registrationDetails/page.tsx
- app/statement/page.tsx
- components/AboutUs.tsx
- components/CareersInfo.tsx
- components/CerificatesSlider.tsx
- components/CobaltInfo.tsx
- components/CompanyInfo.tsx
- components/ContactUs.tsx
- components/CopperInfo.tsx
- components/EuFunds.tsx
- components/Footer.tsx
- components/JobDetails.tsx
- components/JobDetails2.tsx
- components/ManganeseInfo.tsx
- components/MolybdenumInfo.tsx
- components/Navbar.tsx
- components/News.tsx
- components/NewsCardElement.tsx
- components/NewsCardList.tsx
- components/NickelInfo.tsx
- components/OtherProductInfo.tsx
- components/Pagination/Pagination.tsx
- components/RecentPosts.tsx
- components/RegistrationDetails.tsx
- components/SeleniumInfo.tsx
- components/SingleNewsPage.tsx
- components/Slider.tsx
- components/ZincInfo.tsx
- lang/LocaleContext.tsx
- lang/LocaleData.ts
- next.config.mjs

### Nowe

- SECURITY_NOTES.md
- SEO_GOOGLE_SEARCH_CONSOLE.md
- SEO_I18N_MIGRATION.md
- SEO_IMPLEMENTATION.md
- SEO_NGINX.md
- app/not-found.tsx
- app/products/[category]/[productSlug]/page.tsx
- app/robots.ts
- app/sitemap.ts
- components/Breadcrumbs.tsx
- components/JsonLd.tsx
- components/ProductCatalog.tsx
- components/ProductDetails.tsx
- lib/catalog.ts
- lib/news.ts
- lib/seo.ts
- scripts/seo-security-check.cjs
- scripts/seo-smoke.mjs
- seo-smoke-results.json
- types/react-cache.d.ts

### Usunięte / zastąpione

- app/sitemap/route.ts — zastąpiony standardowym app/sitemap.ts.
