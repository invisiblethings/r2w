import { site, localeTag, type Locale } from '../site.config';
import { isoDate } from './format';

type Json = Record<string, unknown>;

export const organizationId = `${site.url}/#organization`;
export const websiteId = `${site.url}/#website`;

export function organization(): Json {
  return {
    '@type': 'Organization',
    '@id': organizationId,
    name: site.name,
    url: site.url,
    email: site.email,
  };
}

export function website(): Json {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    name: site.name,
    url: site.url,
    publisher: { '@id': organizationId },
    inLanguage: ['en', 'it', 'sq'],
  };
}

export function breadcrumbs(items: { name: string; url: string }[]): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: item.url })),
  };
}

export function webPage(opts: {
  url: string;
  name: string;
  description: string;
  locale: Locale;
  medical: boolean;
  reviewer?: { name: string; credentials: string };
  reviewed?: Date;
  updated?: Date;
  published?: Date;
}): Json {
  const page: Json = {
    '@type': opts.medical ? 'MedicalWebPage' : 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: localeTag[opts.locale],
    isPartOf: { '@id': websiteId },
    publisher: { '@id': organizationId },
  };
  if (opts.published) page.datePublished = isoDate(opts.published);
  if (opts.updated) page.dateModified = isoDate(opts.updated);
  if (opts.reviewed) page.lastReviewed = isoDate(opts.reviewed);
  if (opts.reviewer) {
    page.reviewedBy = { '@type': 'Person', name: opts.reviewer.name, description: opts.reviewer.credentials };
  }
  return page;
}

export function faqPage(faq: { q: string; a: string }[]): Json {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
}

export function itemList(items: { name: string; url: string }[]): Json {
  return {
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, url: item.url })),
  };
}

export function medicalClinic(opts: { name: string; url: string; address: string; city: string; website?: string }): Json {
  const clinic: Json = {
    '@type': 'MedicalClinic',
    name: opts.name,
    address: { '@type': 'PostalAddress', streetAddress: opts.address, addressLocality: opts.city, addressCountry: 'AL' },
    medicalSpecialty: 'PlasticSurgery',
  };
  if (opts.website) clinic.sameAs = opts.website;
  return { ...clinic, subjectOf: { '@id': `${opts.url}#webpage` } };
}

export function physician(opts: { name: string; url: string; specialty: string; image?: string; worksFor?: string }): Json {
  const person: Json = { '@type': 'Person', name: opts.name, jobTitle: opts.specialty, subjectOf: { '@id': `${opts.url}#webpage` } };
  if (opts.image) person.image = opts.image;
  if (opts.worksFor) person.worksFor = { '@type': 'MedicalOrganization', name: opts.worksFor };
  return person;
}

export function graph(nodes: Json[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
}
