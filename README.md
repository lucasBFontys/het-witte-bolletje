# Het Witte Bolletje - Website

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge\&logo=next.js\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge\&logo=pwa\&logoColor=white)
![Cursor AI](https://img.shields.io/badge/Cursor_AI-FF6D00?style=for-the-badge\&logo=firefoxbrowser\&logoColor=white)

Een moderne, responsive website voor bakkerij **Het Witte Bolletje**, ontwikkeld met **Next.js** en **Tailwind CSS**. Deze site is gerealiseerd met behulp van **Cursor AI** en is ingericht als een **Progressive Web App (PWA)**.

##  Projectbeschrijving

Dit project is onderdeel van een leeropdracht waarin een eenvoudige, functionele website is gebouwd voor een lokale bakker. Het doel was om een professioneel ogende site op te zetten met drie hoofdsecties:

* **Home:** Welkomsttekst, beschrijving van de bakkerij en een afbeelding
* **Assortiment:** Overzicht van producten zoals brood, taarten en koekjes
* **Contact:** Formulier met naam, e-mailadres en bericht

De navigatie is consistent en beschikbaar op alle pagina’s via een vaste menubalk.

##  Live demo

De website is live te bekijken via Vercel:
🔗 [https://het-witte-bolletje.vercel.app](https://het-witte-bolletje.vercel.app)

##  Technische Stack

* **Framework:** Next.js 14
* **Taal:** TypeScript
* **Stijling:** Tailwind CSS
* **Functionaliteit:** React 18, Form Handling
* **Extra:** PWA-functionaliteit, mobiele ondersteuning

##  Gebruik van Cursor AI

Bij de ontwikkeling is Cursor AI ingezet om de productiviteit te verhogen en consistente code te garanderen. Hierbij zijn o.a. de volgende prompts en regels gebruikt:

###  Voorbeelden van gebruikte prompts

* "Schrijf de HTML-structuur voor een navigatiebalk met drie links."
* "Stijl deze pagina met CSS zodat het mobielvriendelijk is."
* "Voeg JavaScript toe dat een alert toont bij het verzenden van het contactformulier."

###  Ingestelde ontwikkelregels (Cursor AI rules)

Zie [rules.md](./RULES.md) voor de volledige lijst met ontwikkelregels.

Welke promts zijn gebruikt voor site dev:  [Promts](./cursor_opzetten_van_react_next_js_struc.md) 

##  Navigatie

De website bevat drie pagina’s:

* `/` – Homepagina met introductie
* `/assortiment` – Overzicht van de producten
* `/contact` – Contactformulier met validatie

##  PWA-functionaliteit

De website is geconfigureerd als **Progressive Web App** met o.a.:

* Installatie op mobiel/desktop
* Offline ondersteuning
* Verbeterde performance

##  Installatie en ontwikkeling

1. **Clone de repository**

```bash
git clone https://github.com/yourusername/het-witte-bolletje.git
cd het-witte-bolletje
```

2. **Installeer dependencies**

```bash
npm install
```

3. **Start de development server**

```bash
npm run dev
```

4. **Open in je browser**
   [http://localhost:3000](http://localhost:3000)

##  Scripts

| Script          | Beschrijving                |
| --------------- | --------------------------- |
| `npm run dev`   | Start de development server |
| `npm run build` | Bouw de productieversie     |
| `npm start`     | Start de productieversie    |
| `npm run lint`  | Voer ESLint uit             |

##  Mappenstructuur

```
.
├── pages/             # Pagina’s (Home, Assortiment, Contact)
├── components/        # Herbruikbare componenten (zoals Navbar)
├── public/            # Afbeeldingen en PWA-manifest
├── styles/            # Tailwind configuratie
└── ...                # Overige Next.js bestanden
```

##  Iteratief ontwikkelproces

Het project is iteratief opgebouwd met behulp van **Vibe-coding**:

1. Generatie van basis-HTML via Cursor
2. Tailwind-styling toegepast op componentniveau
3. Validatie en foutafhandeling toegevoegd via AI-prompts
4. PWA-functionaliteit geïntegreerd

##  Gebruiksvoorbeelden

* Bezoek de homepage voor algemene info over de bakkerij.
* Navigeer naar het assortiment om producten te bekijken.
* Vul het contactformulier in om een bericht te sturen.

##  Veelgestelde vragen (FAQ)

### De site start niet na `npm install`

Controleer of je Node.js v18+ gebruikt. Verwijder eventueel `node_modules` en probeer opnieuw:

```bash
rm -rf node_modules
npm install
```

### Het contactformulier stuurt niets door

Zorg dat je internetverbinding actief is. Deze site gebruikt client-side handling zonder backend.

##  Changelog

### v1.0.0 – Eerste versie

* Home-, assortiment- en contactpagina opgezet
* Navigatiebalk toegevoegd
* Responsieve styling via Tailwind CSS
* PWA-configuratie geïntegreerd
* Cursor AI regels en prompts toegevoegd

### v2.0.0 – Visuele uitbreiding & optimalisatie
* Nieuwe hero-sectie met sfeerafbeelding, slogan en call-to-action
* Toevoeging van een features-blok met drie kernwaarden: “Dagelijks vers”, “Ambachtelijk gebakken” en “Bezorging aan huis”
* Nieuw kleurenschema en typografie geïnspireerd op warme bakkerskleuren (crème, lichtbruin, goud, oranje), met gebruik van Inter en Playfair Display
* Volledig herontwerp van de assortimentspagina met productkaarten in een overzichtelijk grid (naam, foto, beschrijving, prijs, bestelknop)
* Gebruik van lokale .json databron voor dynamische productenlijst
* Toevoeging van een zoekfunctie binnen het assortiment voor verbeterde UX
* Footer uitgebreid met vier blokken: contactgegevens, openingstijden, menu en links
* Over ons-pagina toegevoegd met sfeerfoto, tijdlijn, verhaal, statistieken en klantrecensies
* Contactpagina visueel uitgebreid met modern formulier, contactinformatie en locatiekaart
* Eerste stap naar interactie: eenvoudige verzend-actie toegevoegd
* Custom 404-pagina ontworpen in stijl met de site: “Oeps! Deze pagina is nog niet gebakken.”



##  Licentie

MIT-licentie – vrij te gebruiken en aan te passen.
