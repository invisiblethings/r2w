// Content checks the build cannot express as a schema: every page's parent exists in the same
// locale, slugs are unique, and every translated page carries its locale prefix.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../src/content/pages/', import.meta.url).pathname;
const pages = [];
for (const locale of readdirSync(root)) {
  for (const file of readdirSync(join(root, locale))) {
    const text = readFileSync(join(root, locale, file), 'utf8');
    const fm = Object.fromEntries(
      text.split('---')[1].trim().split('\n').map((l) => {
        const i = l.indexOf(':');
        return [l.slice(0, i), JSON.parse(l.slice(i + 1))];
      }),
    );
    pages.push({ file: `${locale}/${file}`, ...fm });
  }
}

const errors = [];
const slugs = new Map();
for (const p of pages) {
  if (slugs.has(p.slug)) errors.push(`${p.file}: slug "${p.slug}" also used by ${slugs.get(p.slug)}`);
  slugs.set(p.slug, p.file);
  if (p.locale !== 'en' && !(p.slug === p.locale || p.slug.startsWith(`${p.locale}/`)))
    errors.push(`${p.file}: slug must start with "${p.locale}/"`);
  if (p.parent && !pages.some((q) => q.key === p.parent && q.locale === p.locale))
    errors.push(`${p.file}: parent "${p.parent}" has no ${p.locale} page`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`${pages.length} pages checked`);
