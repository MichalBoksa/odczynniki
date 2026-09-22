const fs = require('node:fs');
const path = require('node:path');
require('@next/env').loadEnvConfig(process.cwd());
const names = ['JWT_SECRET', 'SECRET', 'CLOUDINARY_API_SECRET', 'GOOGLE_SECRET', 'DATABASE_URL'];
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (/\.(js|json|html|map)$/.test(file)) files.push(file);
  }
}
walk('.next/static');
let failed = false;
for (const name of names) {
  const value = process.env[name];
  if (!value) { console.log(`${name}: not configured; not checked`); continue; }
  const leaked = files.some(file => {
    const content = fs.readFileSync(file, 'utf8');
    return content.includes(value) || content.includes(JSON.stringify(value).slice(1, -1));
  });
  console.log(`${name}: ${leaked ? 'FAIL - value found in client build' : 'PASS - value absent from client build'}`);
  failed ||= leaked;
}
process.exitCode = failed ? 1 : 0;
