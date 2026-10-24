## 2026-10-24 · The site is built in `rhinoplasty-al/` inside the r2w repository
- Decided by: Claude, default
- Why: no rhinoplasty.al repository is attached to the session, and the r2w root hosts right2water.eu, which must stay untouched.
- Rejected: building at the repository root, which would overwrite the right2water.eu site.
- Rests on: the repository's CNAME (right2water.eu).

## 2026-10-24 · Astro 5 static site with Markdown content collections
- Decided by: Claude, default
- Why: static output gives fast pages on slow mobile connections, full control over hreflang and schema, and cheap hosting.
- Rejected: WordPress with Polylang, which needs a server and plugins for the same hreflang and schema control; Astro 7, which is newer than the build tooling this project was planned against.
- Rests on: the rebuilt plan, section 6.

## 2026-10-24 · English at the root, Italian at /it/, Albanian at /sq/, with translated slugs
- Decided by: the designer
- Why: English is the primary language; translated slugs match the query language of each market.
- Rejected: subdomains per language, which split authority.
- Rests on: the user's language order (EN, IT, SQ).

## 2026-10-24 · Hreflang alternates are emitted only for translations that exist and are published
- Decided by: Claude, default
- Why: an alternate pointing at a missing or noindexed page is an invalid cluster.
- Rejected: emitting all three languages for every page.
- Rests on: Google hreflang documentation.

## 2026-10-24 · A medical page without a named reviewer is noindex and left out of the sitemap
- Decided by: Claude, default
- Why: YMYL content without medical review is the main trust risk; the gate makes it impossible to publish one by accident.
- Rejected: publishing with an "awaiting review" note while indexable.
- Rests on: context, Constraints.

## 2026-10-24 · Clinic score: license is a pass/fail gate; weights 25/20/15/15/15/10
- Decided by: Claude, default
- Why: an unlicensed provider cannot be ranked at any score; the remaining weights put surgeon and facility first because they carry the clinical risk.
- Rejected: an unweighted star average, which hides why a clinic ranks where it does.
- Rests on: the rebuilt plan, section 4.

## 2026-10-24 · No clinic data ships until audited
- Decided by: Claude, default
- Why: names from directories are unverified; publishing them as profiles would be a claim the site cannot support.
- Rejected: seeding profiles from WhatClinic and press listings.
- Rests on: research round, clinic list marked unverified.

## 2026-10-24 · Global navigation has six destinations
- Decided by: Claude, default
- Why: the six cover the four patient questions (cost, who, safe, recovery) plus procedures and the trust entry point; more than seven strains scanning on mobile.
- Rejected: a mega-menu with every subpage; separate "Travel" in the global bar (folded into Recovery & travel).
- Rests on: Intent organize, wayfinding guidance.

## 2026-10-24 · Ethical review of the base build
- Decided by: Claude, default
- Why: checked the templates against the anti-pattern catalog: no urgency, no prechecked consent, no fabricated social proof, disclosure on every ranking, no tracking.
- Rejected: a sticky "Book now" bar, which would be pressure selling on a medical decision.
- Rests on: Intent anti-pattern catalog.

## 2026-10-24 · Visual system: Fraunces display, Inter text, sand and ink with a terracotta accent
- Decided by: Claude, default
- Why: an editorial, medical-grade look signals care and independence; one warm accent keeps calls to action obvious without urgency styling.
- Rejected: clinical blue-and-white, which reads as a clinic's own site; stock photography of faces, which would imply patients the site has not verified.
- Rests on: the designer's rejection of the unstyled base build.

## 2026-10-24 · Fonts are self-hosted
- Decided by: Claude, default
- Why: loading Google Fonts from Google's servers sends visitor IP addresses to a third party, which German courts have ruled a GDPR breach; self-hosting is also faster.
- Rejected: Google Fonts CDN.
- Rests on: context, Constraints (GDPR).
