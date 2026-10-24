import type { APIRoute } from 'astro';
import { clinicSlug, getPages, getPublishedClinics, isIndexable, translations, urlOf } from '../lib/pages';
import { localeTag } from '../site.config';

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

export const GET: APIRoute = async () => {
  const pages = await getPages();
  const clinics = await getPublishedClinics();
  const entries: { loc: string; alternates: { lang: string; href: string }[]; lastmod?: Date }[] = [];

  for (const page of pages.filter(isIndexable)) {
    const alts = translations(pages, page).filter(isIndexable);
    entries.push({
      loc: urlOf(page.data.slug),
      alternates: alts.length > 1 ? alts.map((p) => ({ lang: localeTag[p.data.locale], href: urlOf(p.data.slug) })) : [],
      lastmod: page.data.updated ?? page.data.reviewed ?? page.data.published,
    });
  }

  for (const index of pages.filter((p) => p.data.type === 'clinics-index')) {
    const indexes = translations(pages, index);
    for (const clinic of clinics) {
      entries.push({
        loc: urlOf(clinicSlug(index, clinic)),
        alternates: indexes.length > 1 ? indexes.map((i) => ({ lang: localeTag[i.data.locale], href: urlOf(clinicSlug(i, clinic)) })) : [],
        lastmod: clinic.data.verifiedOn,
      });
    }
  }

  const body = entries
    .map((e) => {
      const alts = e.alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${escape(a.href)}"/>`).join('\n');
      const lastmod = e.lastmod ? `\n    <lastmod>${e.lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
      return `  <url>\n    <loc>${escape(e.loc)}</loc>${lastmod}${alts ? `\n${alts}` : ''}\n  </url>`;
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
