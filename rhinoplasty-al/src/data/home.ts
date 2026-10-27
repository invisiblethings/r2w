import type { Locale } from '../site.config';

/**
 * Home page sections. Figures match the guides they link to (prices-2026, albania-vs-*,
 * recovery-timeline, flying-after, how-long-to-stay, verify-surgeon); update both together.
 * `key` values are page keys, resolved to each locale's slug.
 */

export interface Fact {
  label: string;
  value: string;
  note: string;
  key: string;
}

export interface Row {
  label: string;
  price: string;
  source: string;
  key?: string;
}

export interface Step {
  when: string;
  what: string;
}

export interface HomeCopy {
  glanceTitle: string;
  glanceIntro: string;
  facts: Fact[];
  costTitle: string;
  costIntro: string;
  countryTitle: string;
  countryRows: Row[];
  procedureTitle: string;
  procedureRows: Row[];
  costNote: string;
  costLinks: string[];
  clinicsTitle: string;
  clinicsIntro: string;
  clinicsAll: string;
  surgeonsTitle: string;
  surgeonsIntro: string;
  surgeonsAll: string;
  proceduresTitle: string;
  proceduresIntro: string;
  concernsTitle: string;
  recoveryTitle: string;
  recoveryIntro: string;
  steps: Step[];
  recoveryLinks: string[];
  safetyTitle: string;
  safetyIntro: string;
  checks: string[];
  safetyLinks: string[];
  colCountry: string;
  colProcedure: string;
  colPrice: string;
  colSource: string;
}

const en: HomeCopy = {
  glanceTitle: 'Rhinoplasty in Albania at a glance',
  glanceIntro: 'The figures patients ask about first, each linked to the guide that explains it.',
  facts: [
    { label: 'Published price', value: '€2,000–4,500', note: 'Primary rhinoplasty, as published by Tirana hospitals', key: 'prices-2026' },
    { label: 'Revision', value: '€3,800–5,500', note: 'Published by one Tirana hospital', key: 'revision-rhinoplasty' },
    { label: 'Where', value: 'Tirana', note: 'Every clinic we found offering rhinoplasty is in or near Tirana', key: 'clinics' },
    { label: 'Stay in Albania', value: '7–14 days', note: 'Until the splint is off and your surgeon clears you', key: 'how-long-to-stay' },
    { label: 'Flying home', value: '7–10 days', note: 'General guidance after facial surgery; your surgeon decides', key: 'flying-after' },
    { label: 'Final result', value: 'Up to 12 months', note: 'Most swelling settles in 2–3 months', key: 'swelling' },
  ],
  costTitle: 'How much does rhinoplasty cost in Albania?',
  costIntro:
    'Published prices for primary rhinoplasty in Albania mostly fall between €2,000 and €4,500, depending on the technique, whether the septum is corrected and what the quote includes. Hotel nights, flights and a possible revision are usually extra.',
  countryTitle: 'Albania compared with other countries',
  colCountry: 'Country',
  colProcedure: 'Procedure',
  colPrice: 'Published or reported price',
  colSource: 'Source',
  countryRows: [
    { label: 'Albania', price: '€2,000–4,500', source: 'Tirana hospitals, own websites', key: 'prices-2026' },
    { label: 'Turkey', price: '€3,650–5,600', source: 'Acibadem International, 2026', key: 'albania-vs-turkey' },
    { label: 'Italy', price: '€3,000–10,000', source: 'Money.it, May 2025', key: 'albania-vs-italy' },
    { label: 'United Kingdom', price: '£4,000–7,000', source: 'NHS', key: 'albania-vs-uk' },
  ],
  procedureTitle: 'Price by procedure in Tirana',
  procedureRows: [
    { label: 'Primary rhinoplasty', price: '€2,000–3,800', source: 'Hygeia Hospital Tirana', key: 'procedures' },
    { label: 'Septorhinoplasty', price: '€3,200–4,200', source: 'Hygeia Hospital Tirana', key: 'septorhinoplasty' },
    { label: 'Tip rhinoplasty', price: '€2,500–3,200', source: 'Hygeia Hospital Tirana', key: 'tip-rhinoplasty' },
    { label: 'Revision rhinoplasty', price: '€3,800–5,500', source: 'Hygeia Hospital Tirana', key: 'revision-rhinoplasty' },
    { label: 'Alar base reduction', price: '€800–1,200', source: 'Hygeia Hospital Tirana', key: 'alar-base-reduction' },
    { label: 'Ultrasonic (piezo) add-on', price: '+€400–800', source: 'Hygeia Hospital Tirana', key: 'ultrasonic-rhinoplasty' },
    { label: 'Rhinoplasty with hospital stay', price: '€2,500–3,500', source: 'American Hospital Tirana', key: 'whats-included' },
  ],
  costNote: 'Prices as published by each source, not our own survey. Scope differs, so compare itemised quotes.',
  costLinks: ['whats-included', 'hidden-costs', 'albania-vs-turkey', 'albania-vs-italy', 'albania-vs-uk'],
  clinicsTitle: 'Rhinoplasty clinics in Albania',
  clinicsIntro:
    'Clinics that offer rhinoplasty, with what each one publishes about its surgeons, techniques and prices. None has completed our audit yet, so none is ranked.',
  clinicsAll: 'See all clinics',
  surgeonsTitle: 'Rhinoplasty surgeons in Albania',
  surgeonsIntro: 'Plastic surgeons named on the websites of Tirana clinics that offer rhinoplasty. Licences are not yet confirmed.',
  surgeonsAll: 'See all surgeons',
  proceduresTitle: 'Types of rhinoplasty',
  proceduresIntro: 'Each technique solves a different problem. Start with the one your surgeon proposed, or with what you want to change.',
  concernsTitle: 'What do you want to change?',
  recoveryTitle: 'Recovery timeline',
  recoveryIntro: 'Typical ranges from the medical sources in our recovery guides. Your surgeon sets your own schedule.',
  steps: [
    { when: 'Days 1–2', what: 'Packing, if used, is usually removed; swelling and bruising peak' },
    { when: 'Week 1–2', what: 'Splint comes off; bruising fades' },
    { when: 'Days 7–10', what: 'Earliest flight home, once your surgeon has seen you' },
    { when: 'Weeks 1–3', what: 'Back to desk work' },
    { when: 'Weeks 4–6', what: 'Light exercise' },
    { when: 'Months 2–3', what: 'Most swelling has gone' },
    { when: 'Up to 12 months', what: 'Final shape, especially the tip' },
  ],
  recoveryLinks: ['recovery-timeline', 'flying-after', 'how-long-to-stay', 'swelling', 'aftercare-home'],
  safetyTitle: 'Is rhinoplasty in Albania safe?',
  safetyIntro:
    'Safety depends on the clinic and the surgeon more than on the country. Albania has no public online register of doctors, so these checks are yours to make before you book.',
  checks: [
    'Ask the surgeon for the Order of Physicians licence number and specialist diploma, and request written confirmation from the Order.',
    'Check the clinic’s health licence in the QKB business register: surgery under general anaesthesia belongs in a hospital or day-hospital licence.',
    'For a visiting surgeon, check the home register too (in Italy, the FNOMCeO Albo).',
    'Get an itemised written quote that names the operating surgeon, the anaesthetist and the follow-up plan.',
  ],
  safetyLinks: ['verify-surgeon', 'is-it-safe', 'red-flags', 'risks', 'questions-to-ask'],
};

const it: HomeCopy = {
  glanceTitle: 'La rinoplastica in Albania in sintesi',
  glanceIntro: 'I dati che i pazienti chiedono per primi, ciascuno collegato alla guida che lo spiega.',
  facts: [
    { label: 'Prezzo pubblicato', value: '€2.000–4.500', note: 'Rinoplastica primaria, come pubblicato dagli ospedali di Tirana', key: 'prices-2026' },
    { label: 'Rinoplastica secondaria', value: '€3.800–5.500', note: 'Pubblicato da un ospedale di Tirana', key: 'revision-rhinoplasty' },
    { label: 'Dove', value: 'Tirana', note: 'Tutte le cliniche che offrono la rinoplastica che abbiamo trovato sono a Tirana o nei dintorni', key: 'clinics' },
    { label: 'Permanenza in Albania', value: '7–14 giorni', note: 'Fino alla rimozione dello splint e al via libera del chirurgo', key: 'how-long-to-stay' },
    { label: 'Volo di rientro', value: '7–10 giorni', note: 'Indicazione generale dopo la chirurgia del viso; decide il chirurgo', key: 'flying-after' },
    { label: 'Risultato finale', value: 'Fino a 12 mesi', note: 'La maggior parte del gonfiore si riduce in 2–3 mesi', key: 'swelling' },
  ],
  costTitle: 'Quanto costa la rinoplastica in Albania?',
  costIntro:
    'I prezzi pubblicati per la rinoplastica primaria in Albania sono per lo più tra €2.000 e €4.500, a seconda della tecnica, della correzione del setto e di cosa include il preventivo. Hotel, voli ed eventuale revisione di solito sono a parte.',
  countryTitle: 'Albania e altri Paesi a confronto',
  colCountry: 'Paese',
  colProcedure: 'Intervento',
  colPrice: 'Prezzo pubblicato o riportato',
  colSource: 'Fonte',
  countryRows: [
    { label: 'Albania', price: '€2.000–4.500', source: 'Ospedali di Tirana, siti ufficiali', key: 'prices-2026' },
    { label: 'Turchia', price: '€3.650–5.600', source: 'Acibadem International, 2026', key: 'albania-vs-turkey' },
    { label: 'Italia', price: '€3.000–10.000', source: 'Money.it, maggio 2025', key: 'albania-vs-italy' },
    { label: 'Regno Unito', price: '£4.000–7.000', source: 'NHS', key: 'albania-vs-uk' },
  ],
  procedureTitle: 'Prezzo per intervento a Tirana',
  procedureRows: [
    { label: 'Rinoplastica primaria', price: '€2.000–3.800', source: 'Hygeia Hospital Tirana', key: 'procedures' },
    { label: 'Settorinoplastica', price: '€3.200–4.200', source: 'Hygeia Hospital Tirana', key: 'septorhinoplasty' },
    { label: 'Rinoplastica della punta', price: '€2.500–3.200', source: 'Hygeia Hospital Tirana', key: 'tip-rhinoplasty' },
    { label: 'Rinoplastica secondaria', price: '€3.800–5.500', source: 'Hygeia Hospital Tirana', key: 'revision-rhinoplasty' },
    { label: 'Riduzione delle ali del naso', price: '€800–1.200', source: 'Hygeia Hospital Tirana', key: 'alar-base-reduction' },
    { label: 'Supplemento ultrasonico (piezo)', price: '+€400–800', source: 'Hygeia Hospital Tirana', key: 'ultrasonic-rhinoplasty' },
    { label: 'Rinoplastica con ricovero', price: '€2.500–3.500', source: 'American Hospital Tirana', key: 'whats-included' },
  ],
  costNote: 'Prezzi come pubblicati da ciascuna fonte, non una nostra indagine. Le voci incluse variano: confronta preventivi dettagliati.',
  costLinks: ['whats-included', 'hidden-costs', 'albania-vs-italy', 'albania-vs-turkey', 'albania-vs-uk'],
  clinicsTitle: 'Cliniche di rinoplastica in Albania',
  clinicsIntro:
    'Le cliniche che offrono la rinoplastica, con ciò che ciascuna pubblica su chirurghi, tecniche e prezzi. Nessuna ha ancora completato la nostra valutazione, quindi nessuna è in classifica.',
  clinicsAll: 'Vedi tutte le cliniche',
  surgeonsTitle: 'Chirurghi per la rinoplastica in Albania',
  surgeonsIntro: 'Chirurghi plastici indicati sui siti delle cliniche di Tirana che offrono la rinoplastica. Licenze non ancora verificate.',
  surgeonsAll: 'Vedi tutti i chirurghi',
  proceduresTitle: 'Tipi di rinoplastica',
  proceduresIntro: 'Ogni tecnica risolve un problema diverso. Parti da quella proposta dal chirurgo o da ciò che vuoi cambiare.',
  concernsTitle: 'Cosa vuoi cambiare?',
  recoveryTitle: 'Tempi di recupero',
  recoveryIntro: 'Intervalli tipici tratti dalle fonti mediche delle nostre guide sul recupero. Il tuo chirurgo stabilisce i tuoi tempi.',
  steps: [
    { when: 'Giorni 1–2', what: 'Si rimuovono gli eventuali tamponi; gonfiore e lividi al massimo' },
    { when: 'Settimana 1–2', what: 'Si toglie lo splint; i lividi si attenuano' },
    { when: 'Giorni 7–10', what: 'Primo volo di rientro, dopo il controllo del chirurgo' },
    { when: 'Settimane 1–3', what: 'Ritorno al lavoro d’ufficio' },
    { when: 'Settimane 4–6', what: 'Attività fisica leggera' },
    { when: 'Mesi 2–3', what: 'La maggior parte del gonfiore è scomparsa' },
    { when: 'Fino a 12 mesi', what: 'Forma definitiva, soprattutto della punta' },
  ],
  recoveryLinks: ['recovery-timeline', 'flying-after', 'how-long-to-stay', 'swelling', 'aftercare-home'],
  safetyTitle: 'La rinoplastica in Albania è sicura?',
  safetyIntro:
    'La sicurezza dipende dalla clinica e dal chirurgo più che dal Paese. In Albania non esiste un registro pubblico online dei medici: questi controlli spettano a te prima di prenotare.',
  checks: [
    'Chiedi al chirurgo il numero di licenza dell’Ordine dei Medici albanese e il diploma di specializzazione, e chiedi conferma scritta all’Ordine.',
    'Verifica la licenza sanitaria della clinica nel registro QKB: un intervento in anestesia generale richiede una licenza di ospedale o day hospital.',
    'Per un chirurgo italiano, controlla anche l’Albo FNOMCeO.',
    'Fatti dare un preventivo scritto e dettagliato con il nome del chirurgo, dell’anestesista e il piano dei controlli.',
  ],
  safetyLinks: ['verify-surgeon', 'is-it-safe', 'red-flags', 'risks', 'questions-to-ask'],
};

const sq: HomeCopy = {
  glanceTitle: 'Rinoplastika në Shqipëri shkurt',
  glanceIntro: 'Shifrat që pacientët pyesin të parat, secila e lidhur me udhëzuesin që e shpjegon.',
  facts: [
    { label: 'Çmimi i publikuar', value: '€2.000–4.500', note: 'Rinoplastika parësore, siç e publikojnë spitalet në Tiranë', key: 'prices-2026' },
    { label: 'Rinoplastika rishikuese', value: '€3.800–5.500', note: 'Publikuar nga një spital në Tiranë', key: 'revision-rhinoplasty' },
    { label: 'Ku', value: 'Tiranë', note: 'Të gjitha klinikat që gjetëm që ofrojnë rinoplastikë janë në Tiranë ose afër saj', key: 'clinics' },
    { label: 'Qëndrimi', value: '7–14 ditë', note: 'Derisa të hiqet splinti dhe kirurgu t’ju lejojë', key: 'how-long-to-stay' },
    { label: 'Fluturimi', value: '7–10 ditë', note: 'Udhëzim i përgjithshëm pas kirurgjisë së fytyrës; vendos kirurgu', key: 'flying-after' },
    { label: 'Rezultati përfundimtar', value: 'Deri në 12 muaj', note: 'Pjesa më e madhe e ënjtjes ulet në 2–3 muaj', key: 'swelling' },
  ],
  costTitle: 'Sa kushton rinoplastika në Shqipëri?',
  costIntro:
    'Çmimet e publikuara për rinoplastikën parësore në Shqipëri janë kryesisht €2.000–4.500, sipas teknikës, korrigjimit të septumit dhe asaj që përfshin oferta. Hoteli, fluturimet dhe një rishikim i mundshëm zakonisht paguhen veç.',
  countryTitle: 'Shqipëria krahasuar me vende të tjera',
  colCountry: 'Vendi',
  colProcedure: 'Procedura',
  colPrice: 'Çmimi i publikuar ose i raportuar',
  colSource: 'Burimi',
  countryRows: [
    { label: 'Shqipëri', price: '€2.000–4.500', source: 'Spitalet në Tiranë, faqet zyrtare', key: 'prices-2026' },
    { label: 'Turqi', price: '€3.650–5.600', source: 'Acibadem International, 2026', key: 'albania-vs-turkey' },
    { label: 'Itali', price: '€3.000–10.000', source: 'Money.it, maj 2025', key: 'albania-vs-italy' },
    { label: 'Mbretëria e Bashkuar', price: '£4.000–7.000', source: 'NHS', key: 'albania-vs-uk' },
  ],
  procedureTitle: 'Çmimi sipas procedurës në Tiranë',
  procedureRows: [
    { label: 'Rinoplastika parësore', price: '€2.000–3.800', source: 'Hygeia Hospital Tirana', key: 'procedures' },
    { label: 'Septorinoplastika', price: '€3.200–4.200', source: 'Hygeia Hospital Tirana', key: 'septorhinoplasty' },
    { label: 'Rinoplastika e majës', price: '€2.500–3.200', source: 'Hygeia Hospital Tirana', key: 'tip-rhinoplasty' },
    { label: 'Rinoplastika rishikuese', price: '€3.800–5.500', source: 'Hygeia Hospital Tirana', key: 'revision-rhinoplasty' },
    { label: 'Ngushtimi i flegrave', price: '€800–1.200', source: 'Hygeia Hospital Tirana', key: 'alar-base-reduction' },
    { label: 'Shtesa me ultratinguj (piezo)', price: '+€400–800', source: 'Hygeia Hospital Tirana', key: 'ultrasonic-rhinoplasty' },
    { label: 'Rinoplastika me qëndrim në spital', price: '€2.500–3.500', source: 'Spitali Amerikan, Tiranë', key: 'whats-included' },
  ],
  costNote: 'Çmimet siç i publikon secili burim, jo anketa jonë. Përmbajtja ndryshon, ndaj krahasoni oferta të detajuara.',
  costLinks: ['whats-included', 'hidden-costs', 'albania-vs-italy', 'albania-vs-turkey', 'albania-vs-uk'],
  clinicsTitle: 'Klinikat për rinoplastikë në Shqipëri',
  clinicsIntro:
    'Klinikat që ofrojnë rinoplastikë, me atë që publikon secila për kirurgët, teknikat dhe çmimet. Asnjëra nuk e ka përfunduar ende vlerësimin tonë, prandaj asnjëra nuk renditet.',
  clinicsAll: 'Shiko të gjitha klinikat',
  surgeonsTitle: 'Kirurgët për rinoplastikë në Shqipëri',
  surgeonsIntro: 'Kirurgë plastikë të përmendur në faqet e klinikave në Tiranë që ofrojnë rinoplastikë. Licencat ende të pakonfirmuara.',
  surgeonsAll: 'Shiko të gjithë kirurgët',
  proceduresTitle: 'Llojet e rinoplastikës',
  proceduresIntro: 'Çdo teknikë zgjidh një problem tjetër. Nisni nga ajo që ju propozoi kirurgu ose nga ajo që doni të ndryshoni.',
  concernsTitle: 'Çfarë doni të ndryshoni?',
  recoveryTitle: 'Kohët e rikuperimit',
  recoveryIntro: 'Intervale tipike nga burimet mjekësore të udhëzuesve tanë për rikuperimin. Kirurgu juaj cakton orarin tuaj.',
  steps: [
    { when: 'Ditët 1–2', what: 'Hiqen tamponët, nëse janë vënë; ënjtja dhe mavijosjet në maksimum' },
    { when: 'Java 1–2', what: 'Hiqet splinti; mavijosjet zbehen' },
    { when: 'Ditët 7–10', what: 'Fluturimi më i hershëm, pasi t’ju shohë kirurgu' },
    { when: 'Javët 1–3', what: 'Kthim në punë zyre' },
    { when: 'Javët 4–6', what: 'Ushtrime të lehta' },
    { when: 'Muajt 2–3', what: 'Pjesa më e madhe e ënjtjes ka ikur' },
    { when: 'Deri në 12 muaj', what: 'Forma përfundimtare, sidomos e majës' },
  ],
  recoveryLinks: ['recovery-timeline', 'flying-after', 'how-long-to-stay', 'swelling', 'aftercare-home'],
  safetyTitle: 'A është e sigurt rinoplastika në Shqipëri?',
  safetyIntro:
    'Siguria varet më shumë nga klinika dhe kirurgu sesa nga vendi. Në Shqipëri nuk ka regjistër publik online të mjekëve, ndaj këto kontrolle i bëni vetë para rezervimit.',
  checks: [
    'Kërkojini kirurgut numrin e licencës nga Urdhri i Mjekëve dhe diplomën e specializimit, dhe kërkoni konfirmim me shkrim nga Urdhri.',
    'Kontrolloni licencën shëndetësore të klinikës në regjistrin e QKB: operacioni me anestezi të përgjithshme kërkon licencë spitali ose spitali ditor.',
    'Për një kirurg të huaj, kontrolloni edhe regjistrin e vendit të tij.',
    'Kërkoni ofertë me shkrim dhe të detajuar me emrin e kirurgut, të anesteziologut dhe planin e kontrolleve.',
  ],
  safetyLinks: ['verify-surgeon', 'is-it-safe', 'red-flags', 'risks', 'questions-to-ask'],
};

export const homeCopy: Record<Locale, HomeCopy> = { en, it, sq };
