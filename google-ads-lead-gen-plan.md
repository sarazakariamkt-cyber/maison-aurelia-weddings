# Google Ads Lead Generation Plan - Maison Aurelia

Landing page:
https://sarazakariamkt-cyber.github.io/maison-aurelia-weddings/

Obiettivo:
generare richieste qualificate per matrimoni luxury e destination wedding in Italia.

## Tracking Setup

1. Sostituire `GTM-XXXXXXX` in `index.html` con l'ID reale del container Google Tag Manager.
2. In GTM creare un tag Google Ads Conversion Tracking per l'evento `generate_lead`.
3. In Google Ads impostare come conversione primaria: `generate_lead`.
4. Creare conversioni secondarie per:
   - `lead_cta_click`
   - `lead_form_step_complete`
   - `lead_form_step_view`
5. Consiglio qualita lead: importare poi conversioni offline come `qualified_lead` o `booked_call` quando una richiesta e realmente valida.

## Conversion Events

Evento principale:
`generate_lead`

Parametri disponibili:
`form_name`, `wedding_period`, `budget_range`, `guest_count`, `location_status`, `destination_area`.

Eventi di micro-conversione:
`lead_cta_click`, `lead_form_step_view`, `lead_form_step_complete`.

## Campagna 1 - Search | Alta intenzione

Nome:
`IT_Search_WeddingPlannerLuxury_Lead`

Obiettivo:
Lead.

Rete:
Solo rete di ricerca Google. Disattivare partner di ricerca nella fase test.

Localita:
Italia intera. Se il budget e basso, partire da Lombardia, Lazio, Toscana, Campania, Puglia, Sicilia, Veneto.

Lingue:
Italiano e inglese.

Strategia offerta iniziale:
Massimizza conversioni. Dopo 20-30 lead, testare CPA target.

Budget test:
30-80 euro/giorno per 14 giorni.

Ad group 1 - Wedding planner luxury
Keyword:
- "wedding planner luxury"
- "wedding planner di lusso"
- "wedding planner matrimonio elegante"
- "organizzazione matrimonio luxury"
- "wedding planner matrimoni esclusivi"
- "wedding planner alta gamma"

Ad group 2 - Destination wedding Italia
Keyword:
- "destination wedding italy"
- "destination wedding italia"
- "wedding planner destination wedding"
- "organizzare matrimonio in italia"
- "luxury wedding italy"
- "italian wedding planner"

Ad group 3 - Location e ville
Keyword:
- "matrimonio in villa"
- "wedding planner villa matrimonio"
- "matrimonio castello italia"
- "matrimonio lago di como wedding planner"
- "matrimonio in masseria luxury"
- "matrimonio in toscana wedding planner"

Keyword negative iniziali:
gratis, lavoro, corso, stipendio, diventare, template, fai da te, economico, low cost, lista, pdf, immagini, significato.

## Annunci Search

URL finale:
https://sarazakariamkt-cyber.github.io/maison-aurelia-weddings/

Path:
`matrimoni/luxury`

Headlines:
- Maison Aurelia Weddings
- Wedding Planner Luxury
- Matrimoni In Tutta Italia
- Destination Wedding Italia
- Regia Completa Del Matrimonio
- Ville, Castelli E Dimore
- Crea Un Matrimonio Memorabile
- Richiedi Disponibilita
- Wedding Planner Per Coppie Esigenti
- Eleganza, Metodo, Emozione
- Il Tuo Matrimonio Su Misura
- Orchestra, Location, Dettagli
- Pianificazione Senza Stress
- Matrimonio Luxury In Italia
- Una Regia Impeccabile

Descriptions:
- Progettiamo matrimoni luxury in tutta Italia con location, fornitori, orchestra e regia completa.
- Raccontaci data, budget e location: ricevi una prima valutazione per il tuo matrimonio.
- Dalla visione iniziale al wedding day, Maison Aurelia cura ogni dettaglio con eleganza.
- Destination wedding in ville, castelli, masserie, laghi e dimore private italiane.

Asset consigliati:
- Sitelink: Servizi, Matrimoni in Italia, Percorso, Richiedi disponibilita.
- Callout: Regia completa, Fornitori selezionati, Destination wedding, Orchestra live.
- Snippet strutturati: Servizi: Location scouting, Budget plan, Wedding day, Flower design, Orchestra.
- Call asset: aggiungere numero solo se si risponde rapidamente.
- Lead form asset: usare domande qualificanti su budget, data, location e numero invitati.

## Campagna 2 - Performance Max | Lead

Nome:
`IT_PMax_DestinationWedding_Lead`

Obiettivo:
Lead qualificati.

Conversione primaria:
`generate_lead`. Quando disponibili, passare a `qualified_lead` o `booked_call`.

Budget test:
50-120 euro/giorno, almeno 6 settimane prima di cambiare struttura in modo pesante.

Asset group 1:
`Luxury Wedding Italy`

Audience signals:
- Persone interessate a wedding planner
- Persone interessate a location matrimonio
- Persone interessate a luxury travel
- Persone interessate a bridal fashion
- Segmento custom: ricerche per wedding planner luxury, destination wedding Italy, matrimonio villa Toscana, matrimonio Lago di Como.

Copy:
- Headline breve: Wedding Planner Luxury
- Headline breve: Destination Wedding Italia
- Headline lunga: Matrimoni luxury in tutta Italia, progettati con regia completa e dettagli impeccabili.
- Description: Maison Aurelia cura location, fornitori, atmosfera, orchestra e timeline per un matrimonio memorabile.

Creativita:
usare immagini della landing: hero, planning, cerimonia/orchestra. Aggiungere video breve 10-20 secondi appena disponibile.

## Campagna 3 - Brand Search

Nome:
`IT_Search_MaisonAurelia_Brand`

Keyword:
- "maison aurelia"
- "maison aurelia weddings"
- "maison aurelia wedding planner"

Budget:
5-10 euro/giorno.

Scopo:
proteggere il nome brand quando iniziano le campagne e quando utenti tornano a cercarti.

## Priorita Operativa

1. Inserire ID reale GTM.
2. Creare conversione Google Ads su `generate_lead`.
3. Avviare Search alta intenzione.
4. Dopo i primi lead, aggiungere Lead Form Asset con domande qualificanti.
5. Avviare Performance Max solo quando tracking e qualita lead sono chiari.
6. Importare lead qualificati/offline per insegnare a Google quali richieste valgono davvero.

## Note Di Qualita Lead

Per evitare richieste poco utili, mantenere nel form:
- budget
- data prevista
- numero invitati
- location gia scelta o da cercare
- zona desiderata

Queste risposte aiutano sia la vendita sia l'ottimizzazione futura delle campagne.
