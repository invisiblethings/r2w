import { intlTag, type Locale } from '../site.config';

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(intlTag[locale], { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

export function formatEUR(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(intlTag[locale], { style: 'currency', currency: 'EUR', maximumFractionDigits: 0, useGrouping: 'always' }).format(amount);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** "€2,300" for a single price, "€2,000–€3,800" for a range. */
export function formatEURRange(min: number, max: number, locale: Locale): string {
  return min === max ? formatEUR(min, locale) : `${formatEUR(min, locale)}–${formatEUR(max, locale)}`;
}
