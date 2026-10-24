import type { CollectionEntry } from 'astro:content';

/** Published on /methodology/. Changing a weight changes every ranking; log it in design/decisions.md. */
export const weights = {
  surgeon: 25,
  facility: 20,
  transparency: 15,
  aftercare: 15,
  evidence: 15,
  international: 10,
} as const;

export type Criterion = keyof typeof weights;
export const criteria = Object.keys(weights) as Criterion[];

type Clinic = CollectionEntry<'clinics'>;

/** A clinic without a verified license is never ranked, whatever its other scores. */
export function isRankable(clinic: Clinic): boolean {
  return clinic.data.license.status === 'verified';
}

/** Weighted score out of 100, one decimal. Payment status is not an input. */
export function totalScore(clinic: Clinic): number {
  const s = clinic.data.scores;
  const sum = criteria.reduce((acc, c) => acc + (s[c] * weights[c]) / 100, 0);
  return Math.round(sum * 10) / 10;
}

/** Rankable clinics by score, ties broken by the more recent verification, then by name. */
export function rank(clinics: Clinic[]): Clinic[] {
  return clinics
    .filter(isRankable)
    .sort(
      (a, b) =>
        totalScore(b) - totalScore(a) ||
        b.data.verifiedOn.getTime() - a.data.verifiedOn.getTime() ||
        a.data.name.localeCompare(b.data.name),
    );
}
