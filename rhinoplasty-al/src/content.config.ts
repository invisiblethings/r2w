import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localeEnum = z.enum(['en', 'it', 'sq']);

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    /** Shared across translations; pages with the same key are hreflang alternates. */
    key: z.string(),
    locale: localeEnum,
    /** Path without leading or trailing slash, including the locale prefix ("it/cliniche"). Empty for the English home. */
    slug: z.string(),
    type: z.enum(['home', 'hub', 'article', 'trust', 'clinics-index']),
    /** Key of the parent page in the same locale. */
    parent: z.string().optional(),
    order: z.number().default(100),
    title: z.string().max(70),
    description: z.string().max(160),
    h1: z.string().optional(),
    quickAnswer: z.string().optional(),
    /** Medical pages are noindex until a reviewer and review date are set. */
    medical: z.boolean().default(false),
    author: reference('people').optional(),
    reviewer: reference('people').optional(),
    published: z.coerce.date().optional(),
    reviewed: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
    draft: z.boolean().default(false),
  }),
});

const people = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    role: z.enum(['author', 'medical-reviewer', 'editor']),
    credentials: z.string(),
    /** Public register or professional profile that confirms the credentials. */
    verifyUrl: z.string().url().optional(),
    bio: z.record(localeEnum, z.string()).default({}),
  }),
});

const score = z.number().min(0).max(100);
const source = z.object({ title: z.string(), url: z.string().url() });

const clinics = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/clinics' }),
  schema: z.object({
    name: z.string(),
    city: z.string(),
    address: z.string(),
    setting: z.enum(['hospital', 'day-clinic', 'clinic']),
    website: z.string().url().optional(),
    /** listed: facts as the clinic publishes them, no score. audited: scored and ranked by the published method. */
    audit: z.enum(['listed', 'audited']).default('listed'),
    license: z.object({
      status: z.enum(['verified', 'pending', 'not-found']),
      checkedOn: z.coerce.date().optional(),
      source: z.string().optional(),
    }),
    surgeons: z
      .array(
        z.object({
          name: z.string(),
          specialty: z.string(),
          credentials: z.string().optional(),
          /** Set once the Order of Physicians (or home register) has confirmed the licence. */
          verifiedOn: z.coerce.date().optional(),
          source: z.string().url().optional(),
        }),
      )
      .default([]),
    techniques: z.array(z.string()).default([]),
    languages: z.array(z.string()).default([]),
    priceEUR: z
      .object({
        min: z.number(),
        max: z.number(),
        basis: z.string(),
        collectedOn: z.coerce.date(),
        source: z.string().url().optional(),
      })
      .optional(),
    included: z.array(z.string()).default([]),
    ratings: z
      .array(z.object({ platform: z.string(), score: z.number(), count: z.number(), url: z.string().url(), checkedOn: z.coerce.date() }))
      .default([]),
    aftercare: z.record(localeEnum, z.string()).default({}),
    revisionPolicy: z.record(localeEnum, z.string()).default({}),
    scores: z
      .object({
        surgeon: score,
        facility: score,
        transparency: score,
        aftercare: score,
        evidence: score,
        international: score,
      })
      .optional(),
    partner: z.boolean().default(false),
    summary: z.record(localeEnum, z.string()).default({}),
    /** Only images the clinic has supplied or licensed, with written permission. */
    image: z.object({ src: z.string(), alt: z.string(), credit: z.string(), permissionOn: z.coerce.date() }).optional(),
    rightOfReply: z
      .object({
        sentOn: z.coerce.date(),
        response: z.record(localeEnum, z.string()).optional(),
      })
      .optional(),
    sources: z.array(source).default([]),
    verifiedOn: z.coerce.date(),
    status: z.enum(['draft', 'published']).default('draft'),
  }),
});

export const collections = { pages, people, clinics };
