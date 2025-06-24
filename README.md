# Het Witte Bolletje - Website

Een moderne, responsive website voor bakkerij **Het Witte Bolletje**, ontwikkeld met **Next.js** en **Tailwind CSS**. Deze site is gerealiseerd met behulp van **Cursor AI** en is ingericht als een **Progressive Web App (PWA)**.

## 📌 Projectbeschrijving

Dit project is onderdeel van een leeropdracht waarin een eenvoudige, functionele website is gebouwd voor een lokale bakker. Het doel was om een professioneel ogende site op te zetten met drie hoofdsecties:

* **Home:** Welkomsttekst, beschrijving van de bakkerij en een afbeelding
* **Assortiment:** Overzicht van producten zoals brood, taarten en koekjes
* **Contact:** Formulier met naam, e-mailadres en bericht

De navigatie is consistent en beschikbaar op alle pagina’s via een vaste menubalk.

## 🚀 Live demo

De website is live te bekijken via Vercel:
🔗 [[https://het-witte-bolletje.vercel.app](https://het-witte-bolletje.vercel.app/)]

## ⚙️ Technische Stack

* **Framework:** Next.js 14
* **Taal:** TypeScript
* **Stijling:** Tailwind CSS
* **Functionaliteit:** React 18, Form Handling
* **Extra:** PWA-functionaliteit, mobiele ondersteuning

### 🕥 Ingestelde ontwikkelregels (Cursor AI rules)

Zie rules.md 

## 🧱 Navigatie

De website bevat drie pagina’s:

* `/` – Homepagina met introductie
* `/assortiment` – Overzicht van de producten
* `/contact` – Contactformulier met validatie

## 📱 PWA-functionaliteit

De website is geconfigureerd als **Progressive Web App** met o.a.:

* Installatie op mobiel/desktop
* Offline ondersteuning
* Verbeterde performance

## 💻 Installatie en ontwikkeling

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

## 🧪 Scripts

| Script          | Beschrijving                |
| --------------- | --------------------------- |
| `npm run dev`   | Start de development server |
| `npm run build` | Bouw de productieversie     |
| `npm start`     | Start de productieversie    |
| `npm run lint`  | Voer ESLint uit             |

## 📂 Mappenstructuur

```
.
├── pages/             # Pagina’s (Home, Assortiment, Contact)
├── components/        # Herbruikbare componenten (zoals Navbar)
├── public/            # Afbeeldingen en PWA-manifest
├── styles/            # Tailwind configuratie
└── ...                # Overige Next.js bestanden
```


##  Licentie

MIT-licentie – vrij te gebruiken en aan te passen.
