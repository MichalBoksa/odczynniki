# Czynności po wdrożeniu

Status 25.09.2026: własność nie została jeszcze potwierdzona; potrzebne jest zalogowanie właściciela do Google. Najpierw sprawdzić listę istniejących usług, aby nie zakładać, że domena nie była wcześniej dodana.

Jeśli nie ma dostępu do DNS, można dodać usługę z prefiksem URL `https://odczynniki.com.pl/` i wybrać metodę „Tag HTML”. Wygenerowany przez Google tag należy umieścić w metadata strony i wdrożyć, potwierdzić jego obecność w publicznym HTML, a następnie kliknąć weryfikację. Ta metoda nie weryfikuje całej domeny ani jej pozostałych subdomen. Token musi pochodzić z konta właściciela; nie zastępować istniejących tokenów innych właścicieli.

1. W [Google Search Console](https://search.google.com/search-console) dodać usługę domenową `odczynniki.com.pl`.
2. Zweryfikować własność rekordem TXT w DNS, zgodnie z wartością wyświetloną przez Google. Nie usuwać rekordu po weryfikacji.
3. Zgłosić `https://odczynniki.com.pl/sitemap.xml`. Najpierw sprawdzić HTTP 200 i poprawny XML, w tym rzeczywiste newsy z MongoDB.
4. Sprawdzić raport indeksowania stron (Pages; dawniej Coverage): błędy pobrania, 404, przekierowania, duplikaty oraz wybrany przez Google canonical.
5. W Inspekcji URL przetestować stronę główną i sprawdzić wyrenderowany HTML, canonical, H1 oraz tekst oferty.
6. Przetestować `/products/` i linki do ośmiu kategorii.
7. Przetestować główne kategorie oraz po jednym rzeczywistym produkcie z każdej. Przykład: `/products/molybdenum/sodu-molibdenian-2hydrat/`.
8. Sprawdzić kilka istniejących newsów. Poprosić o indeksację najważniejszych nowych stron. Żądanie indeksowania ani sitemap nie gwarantują terminu lub samej indeksacji.
9. Monitorować Pages, Sitemaps, Performance i Core Web Vitals. Porównać okresy przed/po wdrożeniu, uwzględniając czas ponownego crawlowania.
10. Obserwować frazy, wyświetlenia, kliknięcia, CTR i pozycje dla kategorii i produktów, osobno według kraju i urządzenia.

JSON-LD sprawdzić w [Schema Markup Validator](https://validator.schema.org/) i [Rich Results Test](https://search.google.com/test/rich-results). Strony zapytań ofertowych nie zawierają ceny, Offer, opinii ani ocen; brak uprawnienia do wyników rozszerzonych Product nie jest powodem do wymyślania danych. NewsArticle nie otrzymuje fikcyjnego autora ani daty aktualizacji.

Po migracji językowej ponowić testy canonical/hreflang i zgłosić zaktualizowaną sitemap.

Materiały: [weryfikacja własności](https://support.google.com/webmasters/answer/9008080), [sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [ponowne indeksowanie URL](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
