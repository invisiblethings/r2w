# Writing brief: Rhinoplasty.al guides

## Who reads these

International patients considering rhinoplasty in Albania: Italians comparing countries, English speakers comparing Albania with Turkey, Albanian speakers at home and in the diaspora. They are making an irreversible decision about their face, often reading on a phone, sometimes in a second language.

## Voice

- Plain, calm, specific. Short sentences. Second person ("you").
- Honest over persuasive. No hype, no superlatives ("best", "world-class"), no urgency, no "only X slots", no exclamation marks.
- Never promise results. Use "usually", "typically", "most patients" only when a source supports it.
- Name the uncertainty when it exists ("there is no public register, so…").
- No first-person plural marketing ("we are proud…"). "We" only for what Rhinoplasty.al does (checks licences, surveys prices).

## Format of each file

Path: `src/content/pages/<locale>/<key>.md`. Front matter as JSON values, one per line, exactly these fields:

```
---
key: "<key from articles-map.tsv>"
locale: "en"
slug: "<en_slug from articles-map.tsv>"
type: "article"
parent: "<parent from articles-map.tsv>"
order: <1..n within the parent, in map order>
title: "<SEO title, max 70 characters, includes the main query>"
h1: "<on-page heading, can be shorter>"
description: "<meta description, max 160 characters>"
quickAnswer: "<40–60 words answering the main query directly>"
medical: <true|false from articles-map.tsv>
faq: [{"q": "...", "a": "..."}, ...]   (4–6 questions people actually ask; answers 1–3 sentences)
sources: [{"title": "...", "url": "https://..."}, ...]   (3–6 sources)
---
```

Body: Markdown, 900–1,500 words. Start with one or two short paragraphs, then `##` sections. **Each section opens with a sentence that directly answers its heading.** Use a table where comparing values (costs, timelines, techniques). No H1 in the body. No images.

## Content rules

- **Every factual medical claim must come from a source you opened** with WebFetch: MedlinePlus, NHS, Mayo Clinic, Cleveland Clinic, ASPS (plasticsurgery.org), AAFPRS, BAAPS, peer-reviewed papers on PubMed/PMC. List them in `sources`. Do not cite a source you did not open. Do not invent statistics, percentages or study results.
- **Albania-specific facts come from `research/clinics-surgeons-2026-10.md`** (prices on record, licensing, how to verify, the absence of a public register). Use them with their dates. Cite the original URL from that file in `sources` when you use it.
- **Do not name clinics or surgeons in guides**, except in `prices-2026`, `italian-surgeons-tirana` and `hospital-or-clinic`, where you may name clinics only with facts they publish themselves (price ranges, setting), with the source. Never mention allegations, investigations or patient complaints about a named clinic or person.
- **Internal links:** link to related guides with root-relative paths from articles-map.tsv (`/procedures/septorhinoplasty/`). Also allowed: `/clinics/`, `/cost/`, `/methodology/`, `/safety/`, `/recovery/`. 3–6 internal links per article, in running text, with descriptive anchors.
- Each guide covers its topic's attributes for this audience: what it is, who it suits, how it is done, recovery, risks, cost in Albania where relevant, how to choose, what to ask.
- End the body with a short `## Next steps` section that links to the most useful next guide(s).
- Mention body dysmorphic disorder only where relevant (expectations, revision, non-surgical), factually and kindly.
- Units: euros with the € sign; dates as "14 January 2024".

## Translations (Italian and Albanian)

- Translate from the English file with the same key. Localise, don't transliterate: natural phrasing a native medical writer would use, and the terms people search with (Italian: "rinoplastica", "rifarsi il naso", "setto nasale"; Albanian: "rinoplastika", "operacioni i hundës", "septumi").
- `locale`, `slug` (from the it_slug / sq_slug column), title, h1, description, quickAnswer, faq and body are translated. `key`, `parent`, `order`, `medical`, `sources` stay the same (sources may stay in English).
- Internal links must use the target language's slugs from articles-map.tsv (e.g. `/it/interventi/settorinoplastica/`); hub links: Italian `/it/cliniche/`, `/it/costo-rinoplastica-albania/`, `/it/metodologia/`, `/it/sicurezza/`, `/it/recupero/`; Albanian `/sq/klinikat/`, `/sq/cmimi-i-rinoplastikes/`, `/sq/metodologjia/`, `/sq/siguria/`, `/sq/rikuperimi/`.
- Italian readers: where useful, mention follow-up with a surgeon in Italy, and the Italian emergency number 112. Albanian readers: emergency 127 (ambulance) in Albania, 112 in EU countries.
- Keep the same facts. Do not add claims that are not in the English version.
