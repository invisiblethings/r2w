// After `npm run build`: every internal link in dist/ must resolve to a built page or file.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const pages = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.html')) pages.push(p);
  }
};
walk(dist);

const broken = new Map();
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const target = join(dist, href);
    const ok = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
    if (!ok) broken.set(href, [...(broken.get(href) ?? []), file.slice(dist.length)]);
  }
}

if (broken.size) {
  for (const [href, from] of broken) console.error(`${href}  ←  ${from.slice(0, 3).join(', ')}${from.length > 3 ? ` (+${from.length - 3})` : ''}`);
  process.exit(1);
}
console.log(`${pages.length} pages, no broken internal links`);
