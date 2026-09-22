import Link from 'next/link';

export default function NotFound() {
  return <main className="max-container padding-container py-16">
    <h1 className="text-primary font-bold text-4xl mb-6">Nie znaleziono strony</h1>
    <p className="mb-6">Sprawdź adres lub przejdź do katalogu produktów i aktualności.</p>
    <div className="flex flex-wrap gap-6"><Link href="/">Strona główna</Link><Link href="/products/">Katalog produktów</Link><Link href="/news/">Aktualności</Link><Link href="/contactUs/">Kontakt</Link></div>
  </main>;
}
