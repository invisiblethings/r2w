## Site map

```
/                                   Rhinoplasty in Albania (home)
├── /cost/                          Costs
│   ├── what's included · hidden costs · price survey (annual)
│   └── Albania vs Turkey · vs Italy · vs UK
├── /clinics/                       Clinics (ranked list)
│   ├── /clinics/{clinic-id}/       clinic profile, generated from data
│   ├── hospital vs clinic · Italian surgeons in Tirana
│   └── how to choose · questions to ask
├── /surgeons/                      Surgeons
│   └── profiles · how to verify a surgeon in Albania
├── /procedures/                    Procedures
│   └── open · closed · septorhinoplasty · tip · revision · male · ethnic & thick skin
│       · preservation · ultrasonic (piezo) · alar base reduction · non-surgical
├── /nose-concerns/                 Nose concerns (local entry into Procedures)
│   └── dorsal hump · bulbous tip · wide nose · crooked nose · droopy tip · breathing & septum
├── /safety/                        Safety
│   └── is it safe · unlicensed clinics & red flags · risks · problems after you get home
├── /recovery/                      Recovery
│   └── day-by-day · flying · how long to stay · swelling by month · aftercare at home
├── /travel/                        Travel (sits under "Recovery & travel" in the global bar)
│   └── planning the trip · where to stay · online consultation
└── Trust
    /about/ · /methodology/ · /editorial-policy/ · /medical-review-board/
    /advertiser-disclosure/ · /medical-disclaimer/ · /for-clinics/ · /contact/ · /privacy/
```

Italian and Albanian mirror the tree under `/it/` and `/sq/` with translated slugs, and add market pages that have no English equivalent:

- Italian, under Costs: quanto costa rifarsi il naso (Italia, Albania, Turchia, Spagna) · rinoplastica Albania o Italia · rinoplastica mutuabile (SSN)
- Italian, under Clinics: chirurghi italiani a Tirana · prima visita in Italia o online
- Italian, under Recovery: controlli post-operatori in Italia · voli per Tirana
- Albanian, under Safety: si ta verifikoni kirurgun · klinikat pa licencë
- Albanian, under Costs: rinoplastika për pacientët nga Kosova · nga Zvicra

Cross-links that cut across the tree:

| From | To | Why |
|---|---|---|
| Every cost page | Clinics | price questions turn into "where" questions |
| Nose concern | The procedure that treats it | patients describe the problem, surgeons name the technique |
| Procedure | Cost, Recovery | the next two questions after "what is it" |
| Safety | Methodology, how to verify a surgeon | the answer to "is it safe" is "here is how to check" |
| Clinic profile | Methodology, Advertiser disclosure | every score shows how it was made and who pays |

## Navigation

- **Global bar (all pages):** Costs · Clinics · Surgeons · Procedures · Safety · Recovery & travel. Language switcher at the end of the bar. "How we rank" sits in the bar's utility position on desktop and at the top of the mobile menu.
- **Mobile (below 820px):** the bar collapses into a disclosure button labelled "Menu". The menu is a plain list, opened and closed by the button, usable without JavaScript.
- **Local navigation:** each hub lists its pages; each article shows its hub's other pages at the end ("More in Costs").
- **Breadcrumbs:** on every page except home: Home › Hub › Page.
- **Footer:** the trust pages, the disclosure sentence, the medical disclaimer sentence, the language switcher.
- **Active state:** the global item for the current hub carries `aria-current="page"` on the hub and `aria-current="true"` on its descendants.

## Taxonomy

- Every page has exactly one parent hub. A page that could sit in two hubs lives where the patient's question starts and is cross-linked from the other: "flying after rhinoplasty" lives in Recovery and is linked from Travel.
- Nose concerns are a separate hub because patients search by the problem; each concern page names and links the procedure, which holds the detail.
- Comparisons with other countries live under Costs because every comparison query leads with price.
- Clinic profiles are data, not prose: one JSON file per clinic produces the profile in all three languages and the ranked list.
- Market pages with no English equivalent are ordinary pages with a parent hub; they simply have no alternates.

## Labels

| Key | English | Italiano | Shqip |
|---|---|---|---|
| cost | Costs | Costi | Çmimet |
| clinics | Clinics | Cliniche | Klinikat |
| surgeons | Surgeons | Chirurghi | Kirurgët |
| procedures | Procedures | Interventi | Procedurat |
| nose-concerns | Nose concerns | Problemi del naso | Problemet e hundës |
| safety | Safety | Sicurezza | Siguria |
| recovery | Recovery & travel | Recupero e viaggio | Rikuperimi dhe udhëtimi |
| methodology | How we rank | Come valutiamo | Si vlerësojmë |

Labels rejected: "Resources" and "Guides" (they name the container, not what is in it); "Treatments" (reads as non-surgical in Italian, "trattamenti"); "Prices" in English (searchers write "cost").

## Slugs

| Key | English | Italiano | Shqip |
|---|---|---|---|
| home | `/` | `/it/` | `/sq/` |
| cost | `/cost/` | `/it/costo-rinoplastica-albania/` | `/sq/cmimi-i-rinoplastikes/` |
| clinics | `/clinics/` | `/it/cliniche/` | `/sq/klinikat/` |
| surgeons | `/surgeons/` | `/it/chirurghi/` | `/sq/kirurget/` |
| procedures | `/procedures/` | `/it/interventi/` | `/sq/procedurat/` |
| nose-concerns | `/nose-concerns/` | `/it/problemi-del-naso/` | `/sq/problemet-e-hundes/` |
| safety | `/safety/` | `/it/sicurezza/` | `/sq/siguria/` |
| recovery | `/recovery/` | `/it/recupero/` | `/sq/rikuperimi/` |
| travel | `/travel/` | `/it/viaggio/` | `/sq/udhetimi/` |
| methodology | `/methodology/` | `/it/metodologia/` | `/sq/metodologjia/` |
| advertiser-disclosure | `/advertiser-disclosure/` | `/it/trasparenza-commerciale/` | `/sq/transparenca-tregtare/` |
| medical-disclaimer | `/medical-disclaimer/` | `/it/avvertenze-mediche/` | `/sq/njoftim-mjekesor/` |
| privacy | `/privacy/` | `/it/privacy/` | `/sq/privatesia/` |
| contact | `/contact/` | `/it/contatti/` | `/sq/kontakt/` |

Slugs are lowercase ASCII; Albanian diacritics (ë, ç) are dropped in slugs and kept in page text.

## Search and browse

- Browse is the primary path: patients arrive on a deep page from search and move sideways through hub lists and cross-links.
- No site search at launch; under 300 pages, hubs and cross-links cover finding. Search is added when Search Console shows navigational queries for pages that exist.
- A hub with no published pages shows what the section will cover and links to the other hubs, never an empty list.

## IA test plan

- Tree test, 50 participants per language (Italian first), on the global bar and hubs. Tasks: "Find out what a rhinoplasty in Tirana costs including the hotel", "Check whether a clinic you were quoted by is licensed", "Find out when you can fly home". Target: 80% success, 70% direct.
- First-click test on the home page with the same tasks; target 80% correct first click.
- Revisit the "Nose concerns" hub if fewer than half of concern-led tasks start there.

## Open questions

- Does "Recovery & travel" hold, or should Travel get its own global item once the Italian travel pages exist?
