# Karty katalogowe i dane strukturalne

27.10.2026: zastąpiono `Product` przez `WebPage` w szablonie 36 kart katalogowych. Powodem był komunikat Search Console z 25.10.2026 o braku `offers`, `review` lub `aggregateRating`.

Karty służą do zapytań ofertowych; nie publikują cen ani recenzji produktów. `WebPage` opisuje nazwę, opis, adres kanoniczny i język serwerowej treści. `BreadcrumbList`, treść specyfikacji (w tym CAS i wzory), linki kontaktowe, metadata i mapa witryny pozostają częścią stron.

Kontrola `scripts/seo-smoke.mjs` wymaga teraz `WebPage`, okruszków nawigacyjnych, zgodności URL z canonicalem oraz braku `Product` (także w zagnieżdżonych danych) i `noindex` na kartach.

Po wdrożeniu należy sprawdzić przykładową kartę w Rich Results Test i uruchomić weryfikację problemu w Search Console. Usunięte elementy `Product` powinny zniknąć z raportu po ponownym odczycie; nie oczekujemy wzrostu liczby poprawnych elementów `Product`.

Powrót do `Product` wymaga prawdziwych, widocznych na stronie danych spełniających wymagania Google. Cena `0` oznacza produkt bezpłatny i nie zastępuje ceny „na zapytanie”.

Źródła: [wymagania Product](https://developers.google.com/search/docs/appearance/structured-data/product-snippet), [zasady danych strukturalnych](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).
