# HTTPS i domena bez www

## Minimalna poprawka konfiguracji odczytanej z VPS 25.09.2026

Plik: `/etc/nginx/sites-available/odczynniki.com.pl`. Poniższa zmiana została wdrożona 25.09.2026 po zgodzie użytkownika. Pozostawia obecny proxy, limity, timeouty, certyfikaty i domenę `inorg.pl` bez zmian.

Kopia przed zmianą: `/etc/nginx/sites-available/odczynniki.com.pl.backup-seo-20260925T084847Z`. `nginx -t` i reload zakończyły się poprawnie. Wszystkie 14 kontroli HTTP przeszło: trzy warianty domeny dla `/`, kategorii z query string i robots przekierowują 301, a cztery adresy docelowe i `https://inorg.pl/` zwracają 200. Suma kontrolna konfiguracji inorg nie zmieniła się.

Wycofanie: przywrócić powyższą kopię do `/etc/nginx/sites-available/odczynniki.com.pl`, uruchomić `sudo nginx -t`, a po poprawnym teście `sudo systemctl reload nginx`. Nie przywracać starej kopii bez porównania, jeśli później konfiguracja została ponownie zmieniona.

```diff
 server {

     server_name odczynniki.com.pl www.odczynniki.com.pl;
+
+    if ($host = www.odczynniki.com.pl) {
+        return 301 https://odczynniki.com.pl$request_uri;
+    }

     client_max_body_size 20M;
@@
     if ($host = www.odczynniki.com.pl) {
-        return 301 https://$host$request_uri;
+        return 301 https://odczynniki.com.pl$request_uri;
@@
     if ($host = odczynniki.com.pl) {
-        return 301 https://$host$request_uri;
+        return 301 https://odczynniki.com.pl$request_uri;
```

Warunek w pierwszym bloku wykonuje wyłącznie `return`, przed przekazaniem żądania do aplikacji. Oba hosty są już obsługiwane przez obecny certyfikat; publiczne HTTPS z www odpowiada bez błędu TLS. Przed zastosowaniem porównać aktualny plik z odczytaną wersją i wykonać kopię. Po zmianie uruchomić `sudo nginx -t`, a dopiero po poprawnym wyniku `sudo systemctl reload nginx`. Sprawdzić trzy warianty przekierowania z query string, działanie domeny bez www, sitemap, robots i niezależnej domeny inorg. Przy błędzie przywrócić kopię i ponownie sprawdzić konfigurację przed reloadem.

## Ogólny wariant konfiguracji

Wariant referencyjny dla administratora VPS; aktualnie wdrożona jest minimalna poprawka powyżej. Certyfikatów nie zmieniono. Next.js zachowuje `trailingSlash: true`. Canonicale kończą się `/`; pliki `sitemap.xml` i `robots.txt` nie mają końcowego ukośnika.

Poniższe bloki należy dopasować do istniejącego vhosta, ścieżek certyfikatów i obsługi ACME. Certyfikat dla przekierowania HTTPS musi obejmować również `www.odczynniki.com.pl`, bo TLS odbywa się przed redirectem. Nie dublować już istniejących bloków `server_name`.

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name odczynniki.com.pl www.odczynniki.com.pl;

    # Jeśli obecny certbot używa webroot, zachowaj jego location
    # /.well-known/acme-challenge/ i umieść redirect w location /.
    location / {
        return 301 https://odczynniki.com.pl$request_uri;
    }
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name www.odczynniki.com.pl;
    ssl_certificate /etc/letsencrypt/live/odczynniki.com.pl/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/odczynniki.com.pl/privkey.pem;
    return 301 https://odczynniki.com.pl$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name odczynniki.com.pl;
    ssl_certificate /etc/letsencrypt/live/odczynniki.com.pl/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/odczynniki.com.pl/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        # Zachowaj istniejące limity uploadów i timeouty aplikacji.
        # Nie włączaj cache dla sesji, auth, edytora ani API.
    }
}
```

`$request_uri` zachowuje ścieżkę i query string. Brak końcowego `/` w `proxy_pass` zachowuje oryginalną ścieżkę po stronie aplikacji. Dla IPv6 zachowaj tylko listen zgodne z konfiguracją hosta. Nie nakładaj bezwarunkowych redirectów HTTPS w aplikacji za proxy.

Po wykonaniu kopii istniejącego vhosta i dopasowaniu konfiguracji:

```sh
sudo nginx -t
# Tylko jeżeli test przeszedł:
sudo systemctl reload nginx
curl -I 'http://odczynniki.com.pl/products/molybdenum/?test=1'
curl -I 'http://www.odczynniki.com.pl/products/molybdenum/?test=1'
curl -I 'https://www.odczynniki.com.pl/products/molybdenum/?test=1'
curl -I 'https://odczynniki.com.pl/sitemap.xml'
curl -I 'https://odczynniki.com.pl/robots.txt'
```

Pierwsze trzy odpowiedzi powinny być 301 z docelową domeną HTTPS, identyczną ścieżką i parametrem. Nie obejmować przekierowaniem osobnej domeny sklepu `sklep.odczynniki.com.pl`.

Materiały: [Nginx return](https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#return), [proxy_pass](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass).
