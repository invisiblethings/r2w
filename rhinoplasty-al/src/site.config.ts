export const site = {
  name: 'Rhinoplasty.al',
  url: 'https://rhinoplasty.al',
  email: 'hello@rhinoplasty.al',
  /** Clinics write here to correct data or reply to a finding. */
  clinicsEmail: 'clinics@rhinoplasty.al',
} as const;

export const locales = ['en', 'it', 'sq'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** BCP 47 tags for html[lang], hreflang and Intl formatting. */
export const localeTag: Record<Locale, string> = { en: 'en', it: 'it', sq: 'sq' };
export const intlTag: Record<Locale, string> = { en: 'en-GB', it: 'it-IT', sq: 'sq-AL' };
export const ogLocale: Record<Locale, string> = { en: 'en_GB', it: 'it_IT', sq: 'sq_AL' };
