import type { Clinic } from './pages';
import { formatEURRange } from './format';
import type { Locale } from '../site.config';

/**
 * FAQ for a clinic profile, generated only from the clinic's data so every answer
 * states what is published and nothing more.
 */
export function clinicFaq(
  clinic: Clinic,
  locale: Locale,
  opts: { surgeonNames: string[]; techniqueNames: string[] },
): { q: string; a: string }[] {
  const d = clinic.data;
  const name = d.shortName ?? d.name;
  const rows = d.priceList.filter((r) => !r.addOn && !r.procedure?.startsWith('alar'));
  const min = d.priceEUR?.min ?? (rows.length ? Math.min(...rows.map((r) => r.min)) : undefined);
  const max = d.priceEUR?.max ?? (rows.length ? Math.max(...rows.map((r) => r.max)) : undefined);
  const range = min !== undefined && max !== undefined ? formatEURRange(min, max, locale) : '';
  const surgeons = opts.surgeonNames.join(', ');
  const techniques = opts.techniqueNames.join(', ');
  const audited = d.audit === 'audited';

  const T = {
    en: {
      costQ: `How much does rhinoplasty cost at ${name}?`,
      costA: min !== undefined && max !== undefined
        ? `${name} publishes rhinoplasty prices of ${range}, depending on the procedure. Check what the quote includes: hotel nights, flights and follow-up at home are usually extra.`
        : `${name} does not publish rhinoplasty prices in the sources we reviewed. Ask for a written, itemised quote that names the surgeon and what is included.`,
      whoQ: `Who performs rhinoplasty at ${name}?`,
      whoA: surgeons
        ? `${name} names these surgeons on its website: ${surgeons}. It is worth asking which of them will operate on you, and for their Order of Physicians licence number.`
        : `${name} does not name its operating surgeons in the sources we reviewed. Ask who will operate, their specialty and their licence number before you book.`,
      techQ: `Which rhinoplasty techniques does ${name} offer?`,
      techA: techniques ? `${name} lists: ${techniques}.` : `${name} does not list specific techniques in the sources we reviewed.`,
      licQ: `Is ${name} licensed?`,
      licA: audited
        ? `Our audit confirmed the licence status shown on this page.`
        : `We have not yet confirmed ${name}'s licence. You can check a clinic's health licence in the QKB business register; surgery under general anaesthesia belongs in a hospital or day-hospital licence.`,
      whereQ: `Where is ${name}?`,
      whereA: `${name} is at ${d.address}, ${d.city}.${d.phone ? ` Phone: ${d.phone}.` : ''}`,
      rankQ: `Is ${name} ranked on Rhinoplasty.al?`,
      rankA: audited
        ? `${name} has been audited and scored by our published method.`
        : `Not yet. ${name} is listed with what it publishes about itself. It will be scored after its licence, surgeons and prices are checked and it has had the right to reply.`,
    },
    it: {
      costQ: `Quanto costa la rinoplastica da ${name}?`,
      costA: min !== undefined && max !== undefined
        ? `${name} pubblica prezzi per la rinoplastica di ${range}, a seconda dell’intervento. Verifica cosa include il preventivo: hotel, voli e controlli in Italia di solito sono a parte.`
        : `${name} non pubblica prezzi per la rinoplastica nelle fonti che abbiamo consultato. Chiedi un preventivo scritto e dettagliato con il nome del chirurgo e cosa è incluso.`,
      whoQ: `Chi esegue la rinoplastica da ${name}?`,
      whoA: surgeons
        ? `${name} indica sul suo sito questi chirurghi: ${surgeons}. Chiedi quale di loro ti opererà e il numero di licenza dell’Ordine dei Medici.`
        : `${name} non indica i chirurghi che operano nelle fonti che abbiamo consultato. Prima di prenotare chiedi chi ti opererà, la specializzazione e il numero di licenza.`,
      techQ: `Quali tecniche di rinoplastica offre ${name}?`,
      techA: techniques ? `${name} indica: ${techniques}.` : `${name} non indica tecniche specifiche nelle fonti che abbiamo consultato.`,
      licQ: `${name} ha la licenza?`,
      licA: audited
        ? `La nostra valutazione ha verificato lo stato della licenza indicato in questa pagina.`
        : `Non abbiamo ancora verificato la licenza di ${name}. Puoi controllare la licenza sanitaria di una clinica nel registro QKB: un intervento in anestesia generale richiede una licenza di ospedale o day hospital.`,
      whereQ: `Dove si trova ${name}?`,
      whereA: `${name} si trova in ${d.address}, ${d.city}.${d.phone ? ` Telefono: ${d.phone}.` : ''}`,
      rankQ: `${name} è in classifica su Rhinoplasty.al?`,
      rankA: audited
        ? `${name} è stata valutata e ha un punteggio secondo il nostro metodo pubblico.`
        : `Non ancora. ${name} è elencata con ciò che pubblica su di sé. Avrà un punteggio dopo la verifica di licenza, chirurghi e prezzi e il diritto di replica.`,
    },
    sq: {
      costQ: `Sa kushton rinoplastika te ${name}?`,
      costA: min !== undefined && max !== undefined
        ? `${name} publikon çmime për rinoplastikën ${range}, sipas procedurës. Kontrolloni çfarë përfshin oferta: hoteli, udhëtimi dhe kontrollet pas kthimit zakonisht paguhen veç.`
        : `${name} nuk publikon çmime për rinoplastikën në burimet që shqyrtuam. Kërkoni ofertë me shkrim dhe të detajuar me emrin e kirurgut dhe çfarë përfshihet.`,
      whoQ: `Kush e kryen rinoplastikën te ${name}?`,
      whoA: surgeons
        ? `${name} përmend në faqen e saj këta kirurgë: ${surgeons}. Pyesni cili prej tyre do t’ju operojë dhe numrin e licencës nga Urdhri i Mjekëve.`
        : `${name} nuk i emëron kirurgët në burimet që shqyrtuam. Para rezervimit pyesni kush do t’ju operojë, specialitetin dhe numrin e licencës.`,
      techQ: `Cilat teknika rinoplastike ofron ${name}?`,
      techA: techniques ? `${name} liston: ${techniques}.` : `${name} nuk liston teknika specifike në burimet që shqyrtuam.`,
      licQ: `A ka licencë ${name}?`,
      licA: audited
        ? `Vlerësimi ynë konfirmoi statusin e licencës që tregohet në këtë faqe.`
        : `Ende nuk e kemi konfirmuar licencën e ${name}. Licencën shëndetësore të një klinike mund ta kontrolloni në regjistrin e QKB: operacioni me anestezi të përgjithshme kërkon licencë spitali ose spitali ditor.`,
      whereQ: `Ku ndodhet ${name}?`,
      whereA: `${name} ndodhet në ${d.address}, ${d.city}.${d.phone ? ` Telefon: ${d.phone}.` : ''}`,
      rankQ: `A renditet ${name} në Rhinoplasty.al?`,
      rankA: audited
        ? `${name} është vlerësuar sipas metodës sonë publike.`
        : `Jo ende. ${name} listohet me atë që publikon për veten. Do të vlerësohet pasi të kontrollohen licenca, kirurgët dhe çmimet dhe të ketë pasur të drejtën e përgjigjes.`,
    },
  }[locale];

  return [
    { q: T.costQ, a: T.costA },
    { q: T.whoQ, a: T.whoA },
    { q: T.techQ, a: T.techA },
    { q: T.licQ, a: T.licA },
    { q: T.whereQ, a: T.whereA },
    { q: T.rankQ, a: T.rankA },
  ];
}
