# rhinoplasty.al

Independent multilingual guide to rhinoplasty in Albania. English at `/`, Italian at `/it/`, Albanian at `/sq/`.

Design records live in `design/`: project context, information architecture and the decision log.

## Run

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # parents, unique slugs, locale prefixes
npm run build    # static site in dist/
```

## Add a page

Create `src/content/pages/<locale>/<key>.md`. Translations share the same `key`; hreflang and the language switcher connect them automatically.

```yaml
---
key: "flying-after-rhinoplasty"
locale: "en"
slug: "recovery/flying-after-rhinoplasty"   # it/... or sq/... for translations
type: "article"                             # home | hub | article | trust | clinics-index
parent: "recovery"                          # key of the hub, same locale
title: "When Can You Fly After Rhinoplasty?" # max 70 characters
description: "..."                          # max 160 characters
quickAnswer: "..."                          # 40–60 words, shown in the "Short answer" box
medical: true
author: "author-id"                         # file in src/content/people/
reviewer: "reviewer-id"
published: 2026-11-15
reviewed: 2026-11-14
faq: [{ q: "...", a: "..." }]
sources: [{ title: "...", url: "https://..." }]
---
```

A page with `medical: true` and no `reviewer` + `reviewed` is built with `noindex`, shows "Medical review in progress", and is left out of the sitemap and hreflang. `draft: true` keeps a page out of the build entirely.

## Add a person

`src/content/people/<id>.json`:

```json
{ "name": "Dr. …", "role": "medical-reviewer", "credentials": "Plastic surgeon, …", "verifyUrl": "https://…", "bio": { "en": "…" } }
```

## Add a clinic

Copy `src/data/clinic.example.json` to `src/content/clinics/<clinic-id>.json`. The file name becomes the URL (`/clinics/<clinic-id>/`, `/it/cliniche/<clinic-id>/`, `/sq/klinikat/<clinic-id>/`). A clinic appears only with `"status": "published"`, and is ranked only with `"license": { "status": "verified" }`. The score is computed in `src/lib/scoring.ts` from the six criteria; `partner` is displayed and never weighted.

Until the first clinic is added, the build logs that the `clinics` (and `people`) collections are empty.
