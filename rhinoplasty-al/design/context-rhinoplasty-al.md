# Rhinoplasty.al — independent guide to rhinoplasty in Albania

## Users

- **Italian patient comparing countries.** Has a quote from an Italian surgeon (€3,000–7,000 for aesthetic rhinoplasty [money.it](https://www.money.it/quanto-costa-rifarsi-il-naso-prezzi-della-rinoplastica)) and is asking whether Albania is cheaper and safe. Searches in Italian, often on a phone, often before searching for Albania by name ("in quale paese costa meno la rinoplastica" [areasosta](https://areasosta.com/faq/in-quale-paese-costa-meno-la-rinoplastica)). Wants to know whether surgeons speak Italian and whether follow-up can happen in Italy.
- **English-speaking patient (UK, US, Scandinavia) shortlisting destinations.** Compares Albania with Turkey. Has read Turkish package pages; expects a price table, an itemised "what's included", a recovery timeline and a flying-home answer [Acibadem](https://acibademinternational.com/patient-guides/rhinoplasty-in-turkey-treatment-guide/), [Bookimed](https://us-uk.bookimed.com/article/rhinoplasty-cost-turkey/).
- **Albanian-speaking patient, local or diaspora** (Kosovo, North Macedonia, Switzerland, Germany, US [exit.al](https://exit.al/en/foreigners-pick-albania-for-plastic-surgery-in-2022)). Knows prices are lower; the open question is which clinic is licensed and safe, after press coverage of unlicensed operators [Kuwait Times/AFP](https://kuwaittimes.com/nip-tuck-mask-cosmetic-surgery-sweeps-albania-along-with-virus), [Faktoje](https://en.faktoje.al/?p=5595).
- **Clinic or surgeon checking their own profile.** Wants to correct data, reply to a finding, or claim a profile.

Every patient is making an irreversible decision about their face, often anxious, sometimes reading in a second language, frequently on a slow mobile connection while comparing tabs.

## Product

- A static, multilingual website at rhinoplasty.al: English at `/`, Italian at `/it/`, Albanian at `/sq/`.
- Source context: the independent, verified guide to rhinoplasty in Albania for international patients. Licenses are checked, prices are surveyed, clinics are scored by a published method.
- Business model: disclosed consultation-request referral fees. A clinic's score never depends on payment; paying clinics carry a "Partner" label.
- Platform: Astro static site, Markdown content collections, clinic data as one JSON file per clinic.
- Stage: new build, no content published yet.

## Constraints

- YMYL medical content: no medical page is indexed before a named medical reviewer has reviewed it.
- Rankings name real businesses: every negative finding must be documented, dated and offered for reply before publication. The "Not recommended" page is not built until legal review.
- EU consumer law applies (Italian audience): paid placement and the main ranking parameters are disclosed.
- GDPR: no tracking cookies at launch; no consent banner is needed until analytics or forms that store personal data are added.
- Accessibility: WCAG 2.2 AA (European Accessibility Act applies to services sold into the EU).
- Translations are written by native medical writers; machine translation is never published.

## Ethical stance

- Honest over persuasive: no countdowns, no "only 2 slots left", no fabricated reviews or satisfaction percentages, no before/after photos without consent and verification.
- Neutral by construction: score is computed from published criteria; payment status is displayed, never weighted.
- Vulnerable users: body dysmorphic disorder and unrealistic expectations are named and linked from procedure pages; the consultation path never pressures a booking.
- Privacy by default: minimum data on consultation requests, opt-in only, no pre-checked boxes.
- Every anti-pattern in the Intent catalog is rejected.

## Success

- A patient can answer "how much, who, is it safe, how long do I stay" in the language they search in, within three clicks of any entry page.
- Every clinic profile shows a license check date and a score breakdown.
- Search visibility per hub and per language (Search Console impressions, indexed pages).
- Consultation requests from cost and clinic pages, with a counter-metric: share of requests later cancelled for "felt pressured" or "information was wrong".

## Open questions

- Who is the named medical reviewer?
