# Weryfikacja po wdrożeniu — 25.09.2026

Produkcja: commit `dc5f3ecfc3ac1cac97602e755f6b029ad3d8cb49`. Wcześniejszy build oraz 74 kontrole SEO przeszły na VPS i publicznym HTTPS.

## PageSpeed Insights

[Raport mobilny](https://pagespeed.web.dev/analysis/https-odczynniki-com-pl/mfdjo4ghm7?form_factor=mobile), 25.09.2026, 10:34 CEST, Lighthouse 13.5.0, emulowany Moto G Power, Slow 4G.

| Pomiar | Wynik |
| --- | --- |
| Performance | 89/100 |
| Accessibility | 95/100 |
| Best Practices | 100/100 |
| SEO | 100/100 |
| FCP | 0,9 s |
| LCP | 3,6 s |
| TBT | 40 ms |
| CLS | 0,029 |
| Speed Index | 3,6 s |

To pojedynczy pomiar laboratoryjny strony głównej, nie potwierdzenie indeksacji, pozycji ani zaliczenia Core Web Vitals. Raport nie zawiera danych rzeczywistych użytkowników.

Element LCP to obraz pierwszego slajdu. Ma już `fetchpriority="high"`, preload wynikający z `priority`, responsywne rozmiary oraz optymalizację Cloudinary. Diagnostyka wskazuje opóźnienie renderowania 1950 ms, opóźnienie pobrania 150 ms i pobieranie 200 ms (wartości diagnostyczne nie są sumą symulowanego LCP). Potencjalne oszczędności obrazów to tylko 7 KiB. Dalsza optymalizacja powinna rozpocząć się od profilu renderowania, a nie od obniżania jakości zdjęć w ciemno.

Jedyny wykryty problem dostępności: kontrast dwóch nagłówków `h2.footer-title` w stopce. Zmiana kontrastu wpływa na wygląd; w tym etapie nie zmieniano kolorów.

## Przekierowania

Stan przed poprawką dla `/products/copper/?seo_test=1`:

- HTTP bez www: 301 do HTTPS bez www — poprawnie.
- HTTP z www: 301 do HTTPS z www — wymaga ujednolicenia.
- HTTPS z www: 200 — duplikat zamiast przekierowania.
- HTTPS bez www: 200 — poprawnie.

Po uzyskaniu zgody użytkownika wdrożono minimalną poprawkę bieżącego vhosta opisaną w `SEO_NGINX.md`. HTTP z/bez www oraz HTTPS z www zwracają teraz 301 bezpośrednio do HTTPS bez www, zachowując ścieżkę i query string. Kopia: `/etc/nginx/sites-available/odczynniki.com.pl.backup-seo-20260925T084847Z`. Test konfiguracji i reload przeszły. 14 kontroli HTTP potwierdziło przekierowania, działanie docelowej strony, kategorii, sitemap, robots i `inorg.pl`. Konfiguracja inorg pozostała identyczna.

## Search Console

Użytkownik nie potwierdził wcześniejszego dodania domeny. Otwarcie Search Console prowadzi do strony wymagającej logowania. Nie zweryfikowano własności i nie zgłoszono sitemap na koncie Google.

Po zalogowaniu najpierw sprawdzić istniejące usługi. Jeśli domeny brak: preferowana usługa domenowa `odczynniki.com.pl` z rekordem TXT w DNS. Alternatywa bez dostępu do DNS: usługa z prefiksem `https://odczynniki.com.pl/` i tag HTML wygenerowany na koncie właściciela. Nie generować fikcyjnego tokenu ani usuwać istniejących tokenów. Po weryfikacji zgłosić `https://odczynniki.com.pl/sitemap.xml`.

## Pozostałe zależności

Osobne URL-e językowe wymagają migracji opisanej w `SEO_I18N_MIGRATION.md`. Uzupełnianie danych produktów wymaga prawdziwych specyfikacji od firmy. Nie opublikowano nowych twierdzeń chemicznych ani automatycznych powiązań produktów.
