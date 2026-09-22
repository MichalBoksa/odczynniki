import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';

// Read-only integration checks against a running production build.
// Usage: node scripts/seo-smoke.mjs http://localhost:3102
const base = process.argv[2] || 'http://localhost:3002';
const report = [];
let failures = 0;
const request = async path => {
  const res = await fetch(new URL(path, base), { signal: AbortSignal.timeout(45000) });
  return { status: res.status, text: await res.text() };
};
async function check(name, fn) {
  try { await fn(); report.push({ name, status: 'PASS' }); }
  catch (error) { failures++; report.push({ name, status: 'FAIL', error: error.message }); }
}
const decode = text => text.replace(/&amp;/g, '&').replace(/&quot;/g, '"');
async function page(path, type) {
  const { status, text } = await request(path);
  assert.equal(status, 200, `${path}: HTTP ${status}`);
  assert.equal([...text.matchAll(/<h1\b/g)].length, 1, `${path}: expected one server-rendered H1`);
  assert.match(text.match(/<title>([^<]+)<\/title>/)?.[1] ?? '', /\| CMOCMI$/, `${path}: title or brand missing`);
  const canonical = text.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(canonical, `${path}: canonical missing`);
  const expected = new URL(path, 'https://odczynniki.com.pl');
  if (!expected.pathname.endsWith('/')) expected.pathname += '/';
  assert.equal(decode(canonical[1]), expected.toString());
  assert.match(text, /<meta name="description" content="[^"]+"/);
  assert.match(text, /<meta property="og:url"/);
  const schemas = [...text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  if (type) assert.ok(schemas.some(item => item['@type'] === type), `${path}: missing ${type}`);
  if (type === 'Product') {
    const product = schemas.find(item => item['@type'] === type);
    assert.ok(!product.offers && !product.aggregateRating && !product.review);
    assert.match(text, /CAS/);
    assert.match(text, /href="\/contactUs\//);
  }
}
const publicPaths = ['/', '/aboutUs/', '/products/', '/contactUs/', '/certificates/', '/businessPartners/', '/organizations/', '/careers/', '/euFunds/', '/registrationDetails/', '/statement/', '/careers/jobOffer/', '/careers/jobOffer2/'];
for (const path of publicPaths) await check(path, () => page(path, path === '/' ? 'Organization' : undefined));
const manifest = JSON.parse(readFileSync('.next/prerender-manifest.json', 'utf8'));
const productPaths = Object.keys(manifest.routes).filter(path => /^\/products\/[^/]+\/[^/]+\/?$/.test(path));
await check('product route count', () => assert.equal(productPaths.length, 36));
for (const path of productPaths) await check(path, () => page(path, 'Product'));
for (const category of ['molybdenum','selenium','cobalt','copper','manganese','nickel','zinc','other']) {
  await check(`/products/${category}/`, async () => {
    const path = `/products/${category}/`;
    await page(path, 'BreadcrumbList');
    const { text } = await request(path);
    for (const product of productPaths.filter(item => item.startsWith(path))) assert.ok(text.includes(`href="${product.replace(/\/$/, '')}/"`), `missing product link: ${product}`);
  });
}
await check('robots.txt', async () => {
  const { status, text } = await request('/robots.txt');
  assert.equal(status, 200);
  for (const expected of ['Allow: /', 'Disallow: /api/', 'Disallow: /login/', 'Disallow: /news/newPost/', 'Sitemap: https://odczynniki.com.pl/sitemap.xml']) assert.ok(text.includes(expected));
});
await check('legacy sitemap redirect', async () => {
  const res = await fetch(new URL('/sitemap/', base), { redirect: 'manual' });
  assert.ok([301, 308].includes(res.status));
  assert.ok(res.headers.get('location').endsWith('/sitemap.xml'));
});
for (const path of ['/not-a-real-page/', '/products/unknown/unknown/', '/products/molybdenum/unknown/']) await check(`404 ${path}`, async () => assert.equal((await request(path)).status, 404));
for (const path of ['/login/', '/news/newPost/']) await check(`noindex ${path}`, async () => {
  const { status, text } = await request(path);
  assert.equal(status, 200); assert.match(text, /name="robots" content="noindex, nofollow"/);
});
await check('/news/', () => page('/news/'));
await check('news pagination', async () => {
  const { text } = await request('/api/news/?page=1');
  const data = JSON.parse(text);
  if (data.count > 3) await page('/news/?page=2');
  const invalid = await request('/news/?page=-1');
  assert.equal(invalid.status, 200);
  assert.match(invalid.text, /rel="canonical" href="https:\/\/odczynniki.com.pl\/news\/"/);
  assert.equal((await request('/news/?page=999999')).status, 404);
});
await check('sitemap and live articles', async () => {
  const { status, text } = await request('/sitemap.xml');
  assert.equal(status, 200);
  const urls = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => decode(match[1]));
  assert.equal(new Set(urls).size, urls.length);
  for (const path of [...publicPaths, ...productPaths]) assert.ok(urls.includes(`https://odczynniki.com.pl${path.replace(/\/$/, '')}/`), `missing sitemap URL: ${path}`);
  assert.ok(!urls.some(url => /\/(api|login)\/|\/news\/newPost\//.test(url)));
  const articles = urls.filter(url => /\/news\/[^/]+\/$/.test(url));
  for (const url of articles.slice(0, 3)) await page(new URL(url).pathname, 'NewsArticle');
  report.push({ name: 'live article sample', count: Math.min(articles.length, 3), status: articles.length ? 'PASS' : 'NO_ARTICLES' });
});
await check('missing news returns 404', async () => assert.equal((await request('/news/seo-nonexistent-8ff9ed4b/')).status, 404));
for (const path of ['/api/auth/providers/', '/api/auth/session/', '/api/news/?page=1', '/api/newsEng/?page=1']) await check(`read-only API ${path}`, async () => assert.equal((await request(path)).status, 200));
const result = { base, passed: report.filter(item => item.status === 'PASS').length, failures, checks: report };
writeFileSync('seo-smoke-results.json', JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ passed: result.passed, failures, failedChecks: report.filter(item => item.status === 'FAIL'), report: 'seo-smoke-results.json' }, null, 2));
process.exitCode = failures ? 1 : 0;
