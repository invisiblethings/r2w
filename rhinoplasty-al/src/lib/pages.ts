import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, locales, requireMedicalReviewForIndexing, site, type Locale } from '../site.config';

export type Page = CollectionEntry<'pages'>;
export type Clinic = CollectionEntry<'clinics'>;
export type Surgeon = CollectionEntry<'surgeons'>;

/** Every non-draft page. Drafts are never built. */
export async function getPages(): Promise<Page[]> {
  return getCollection('pages', ({ data }) => !data.draft);
}

export async function getPublishedClinics(): Promise<Clinic[]> {
  return getCollection('clinics', ({ data }) => data.status === 'published');
}

/** A medical page without a named reviewer and review date stays out of search engines. */
export function isIndexable(page: Page): boolean {
  if (!page.data.medical || !requireMedicalReviewForIndexing) return true;
  return Boolean(page.data.reviewer && page.data.reviewed);
}

export function pathOf(slug: string): string {
  return slug === '' ? '/' : `/${slug}/`;
}

export function urlOf(slug: string): string {
  return new URL(pathOf(slug), site.url).href;
}

export function localeHomePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

export function find(pages: Page[], key: string, locale: Locale): Page | undefined {
  return pages.find((p) => p.data.key === key && p.data.locale === locale);
}

/** Translations of a page, one per locale, in locale order. Includes the page itself. */
export function translations(pages: Page[], page: Page): Page[] {
  return locales.map((l) => find(pages, page.data.key, l)).filter((p): p is Page => Boolean(p));
}

/** Home › … › parent, without the page itself. */
export function ancestors(pages: Page[], page: Page): Page[] {
  const chain: Page[] = [];
  let parentKey = page.data.parent;
  const seen = new Set<string>();
  while (parentKey && !seen.has(parentKey)) {
    seen.add(parentKey);
    const parent = find(pages, parentKey, page.data.locale);
    if (!parent) break;
    chain.unshift(parent);
    parentKey = parent.data.parent;
  }
  return chain;
}

export function children(pages: Page[], page: Page): Page[] {
  return pages
    .filter((p) => p.data.parent === page.data.key && p.data.locale === page.data.locale)
    .sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

/** The top-level section a page belongs to (the first ancestor below home, or the page itself). */
export function sectionKey(pages: Page[], page: Page): string | undefined {
  if (page.data.type === 'home') return undefined;
  const chain = ancestors(pages, page).filter((p) => p.data.type !== 'home');
  return (chain[0] ?? page).data.key;
}

export function clinicSlug(clinicsIndex: Page, clinic: Clinic): string {
  return `${clinicsIndex.data.slug}/${clinic.id}`;
}

export async function getPublishedSurgeons(): Promise<Surgeon[]> {
  return getCollection('surgeons', ({ data }) => data.status === 'published');
}

export function surgeonSlug(surgeonsIndex: Page, surgeon: Surgeon): string {
  return `${surgeonsIndex.data.slug}/${surgeon.id}`;
}
