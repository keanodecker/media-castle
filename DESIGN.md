# Design

Visual system for the Media Castle agency website. Register: brand. Platform: web. Read alongside PRODUCT.md.

## Theme

Hell & seriös, mit dunklen Ankern. Weiße Fläche trägt den Inhalt; Navy rahmt sie oben (Header + Hero) und unten (CTA + Footer) ein. Wirkung entsteht durch Typo-Hierarchie, großzügigen Weißraum und einen einzigen Akzent, nicht durch Effekte. Scene: ein Unternehmer sitzt am Laptop, prüft eine Agentur, die er noch nicht kennt — die Seite muss in Sekunden „die wissen, was sie tun, und das ist seriös" vermitteln.

Color strategy: **Light canvas, dark anchors.** Der Trick der Palette: **Navy ist Doppelagent** — dieselbe Farbe (`#0D2145`) ist gleichzeitig die Textfarbe auf Hell *und* die Flächenfarbe der dunklen Zonen. Deshalb hält die Seite trotz Hell/Dunkel-Wechsel zusammen. Blau (`#2463EB`) ist der einzige Akzent und gehört den Aktionen.

Tonaler Rhythmus einer Seite: Navy (Header+Hero) → hellgrau → weiß → hellgrau → weiß → Navy (CTA+Footer). Weiß und Hellgrau wechseln sich ab; die dunklen Zonen kommen genau zweimal vor.

## Color

Hex. Vier Farben plus zwei Grautöne — mehr braucht die Seite nicht.

### Light base (default)

- `--bg` — canvas · `#FFFFFF`
- `--bg-deep` — abgesetzte/alternierende Sections · `#F4F7FB`
- `--surface` — Karten/Panels · `#FFFFFF` (auf `--bg-deep` durch Fläche, auf `--bg` durch Border + minimalen Schatten getrennt)
- `--surface-hover` — interactive raise · `#F1F5F9`
- `--border` — hairline dividers · `#E1E7EF` (voll deckend einsetzen, nicht abdimmen)

### Ink (text) — contrast-verified on `--bg` (weiß)

- `--ink` — headlines & Kernbegriffe · `#0D2145` — ~16:1
- `--ink-muted` — body / secondary · `#5A6980` — ~5.4:1, sicher ≥4.5:1
- `--ink-subtle` — captions / meta · `#8794A8` — ~3.2:1, nur große/nicht-essentielle Elemente, nie für Fließtext

### Accent — das eine Blau

- `--accent` — Fill für CTAs, Dots, aktive States · `#2463EB`
- `--accent-hover` · `#1D4FD7`
- `--accent-text` — lesbare Variante für Links/Labels · hell: `#2463EB`, dunkel: `#7DA5F9`
- `--accent-soft` — Tint-Fläche für Pills/Tags · `#EAF0FE`
- `--accent-ink` — Text auf `--accent` · `#FFFFFF`

### Dark zones

- `--dark` — Header, Hero, CTA, Footer · `#0D2145` (identisch mit `--ink`)
- `--dark-deep` — Dropdowns/vertiefte Flächen darin · `#081833`

### Rules

- **Dunkle Zonen kriegen keine eigenen Klassennamen.** `.on-dark` (nur Tokens) bzw. `.surface-dark` (Tokens + Navy-Fläche) rebinden dieselben semantischen Variablen. Komponenten benutzen weiterhin `text-ink`, `bg-surface`, `border-border` und invertieren automatisch. Nie eine zweite Farbpalette parallel pflegen.
- Blau gehört den Aktionen: CTAs, Links, „Mehr erfahren", aktive States, Tag-Pills. Nicht als Deko über die Fläche streuen.
- Auf Navy nie `--accent` als *Textfarbe* verwenden (nur ~3.4:1) — dafür ist `--accent-text` da, das in `.on-dark` aufhellt. Als *Fill* bleibt `--accent` in beiden Zonen identisch.
- Ambient-Glows (`--accent`, radial, sehr niedrige Deckkraft, weich/groß/langsam) sind ausschließlich den dunklen Zonen vorbehalten — auf Weiß wirken sie schmutzig.
- Zwei-Ton-Text: Kernbegriffe in `--ink`, Rest in `--ink-muted`. Zentrales typografisches Werkzeug, ersetzt die alten Eyebrows.
- `.text-fade-up` / `.text-silver` (Gradient-gefüllte Headlines) funktionieren **nur auf Navy**. Auf hellem Grund erzeugen sie ausgeblichenen Text — dort stattdessen Zwei-Ton.
- Body-Text niemals unter 4.5:1. Kein dauerhaft transparenter/animiert-blasser Text auf Hell.

## Typography

Brand-voice words: **präzise · hochwertig · ruhig** (physisches Objekt: ein präzise gefrästes Instrument, mattschwarzes Premium-Handbuch, Schweizer Leitsystem).

**Ein Typeface, starker Gewichts-/Größenkontrast: „Poppins".** Warme geometrische Grotesk mit runden Formen und offenen Punzen — trägt große Headlines auf Navy genauso wie ruhigen Fließtext. Bewusste Einzelfamilie (kein Reflex-Pairing), self-hosted über `next/font/google` (`src/app/layout.tsx`). Nicht auf der Reflex-Reject-Liste (kein Inter/Space Grotesk/DM Sans).

- Display / H1: Poppins 400 (Hero, Gradient-gefüllt) bzw. 600–700 für Section-Headlines, `clamp(2.75rem, 6vw, 5rem)`, tracking `-0.03em`, `text-wrap: balance`, line-height 1.05.
- H2: 600, `clamp(2rem, 4vw, 3.25rem)`, tracking `-0.025em`, line-height 1.1.
- H3: 600, `clamp(1.25rem, 2vw, 1.6rem)`, tracking `-0.015em`.
- Body: 400, 1.0625–1.125rem, line-height 1.65 (dunkler Grund → mehr Zeilenabstand), max 68ch.
- Body-strong / lead: 500.
- Labels/meta: 500, 0.8125rem, tracking `+0.02em` — sparsam, NICHT als Eyebrow über jeder Section.

Modular scale ≥1.25. Fluid clamp() für alle Headings. Display-Ceiling ≤ 6rem eingehalten.

## Layout

- Content-Container max ~1200px, großzügige Seitenränder, `clamp()`-Spacing das auf großen Viewports atmet.
- Vertikaler Rhythmus variieren: großzügige Sektions-Abstände (`clamp(6rem, 12vh, 10rem)`), innerhalb enger gruppieren.
- Kein Karten-Raster als Reflex. Wo Struktur nötig ist: asymmetrische, editorial anmutende Kompositionen; Leistungen als große Typo-Zeilen/Reihen statt gleicher Icon-Karten (Anti-Slop, vgl. Barth-Leistungsliste). Karten nur wo sie die beste Affordance sind, nie verschachtelt.
- Floating-Pill-Navbar vermeiden (Template-Tell); stattdessen ruhige, schlanke Top-Nav die on-scroll dezent kondensiert.
- Semantische z-index-Skala (dropdown → sticky → modal → toast → tooltip).
- Responsiv testen: Headline-Copy an jedem Breakpoint prüfen (kein Overflow).

## Components

- **Buttons:** Primär = `--accent`-Fill mit weißem Text, in **beiden** Zonen identisch (das verankert die Marke). Ruhiger Hover (leichte Abdunklung + weicher blauer Schatten). Sekundär = ghost/outline mit `--border`, Text `--ink` — invertiert in `.on-dark` von selbst. Kein Verlaufs-Button, kein Glow-Kitsch.
- **Navbar:** schlank, `.on-dark`, transparent über dem Navy-Hero, on-scroll Navy-Fläche + Hairline + backdrop-blur. Bleibt beim Scrollen dunkel, auch wenn weißer Content darunter durchläuft.
- **Service rows:** große H3-Zeile + kurze Beschreibung + Pfeil-Affordance in `--accent-text`, Hairline-Divider dazwischen, Tags als `--accent-soft`-Pills. Keine identischen Icon-Karten.
- **Karten:** weiß, `--border`, minimaler Schatten (`0 1px 3px rgba(13,33,69,.05)`). Auf Weiß trägt die Border, auf Hellgrau die Fläche. Nie verschachteln.
- **Referenz/Projekt-Items:** echte Screenshots der Live-Kundenseiten (siehe Imagery), Titel + Kategorie, dezenter Hover-Lift + Schatten, Link zur Live-Site. Kein dunkles Overlay über den Screenshots — auf Hell verschmutzt es sie nur.
- **FAQ:** ruhige Accordion-Liste, Hairline-getrennt, offener Toggle = `--accent`-Fill. Kein 3D-Gitter-Hintergrund.
- **Footer:** `.surface-dark`, läuft ohne Bruch aus dem CTA-Band heraus (nur Hairline dazwischen). Klare Spalten (Navigation, Kontakt), Kontaktdaten prominent.

## Motion

Zurückhaltend und bewusst. Eine gut orchestrierte Hero-Einblendung (gestaffelte Reveals von Headline-Zeilen → Sub → CTA, Ease-out-expo/quart), danach sparsame, sinnvolle Reveals pro Section (nicht die uniforme Fade-on-scroll-Reflexbewegung auf allem). Ambient-Glows dürfen sehr langsam driften. Hover-States smooth (150–220ms). Library bei Bedarf: `motion` (Framer Motion). Reveals müssen einen bereits sichtbaren Default verbessern — Inhalt nie hinter Animations-Klassen verstecken. Vollständige `prefers-reduced-motion`-Alternative (Crossfade/instant) für jede Animation.

## Imagery

Agentur-Portfolio → Bilder sind Pflicht, keine farbigen Platzhalter. Strategie:
- **Referenzen:** echte Screenshots der Live-Kundenseiten (Cesar Sicherheit, Cesar Dienstleistungen, Ballonkunst Lahr, FW Recycling, KSL Boxing Lahr, Studio 21 Lahr, FV Lahr West) — per Browser aufnehmen, in `public/` ablegen. Aussagekräftige Alt-Texte.
- **Ambient:** dezente, selbst generierte Glow-/Aurora-Verläufe (CSS/WebGL) als Hintergrund-Atmosphäre — **nur in den Navy-Zonen**, subtil, nie Kitsch.
- Kein Stockfoto-Zwang für den Hero; die Typo + der dunkle Raum + ein feiner Glow tragen den Hero. Falls ein Hero-Visual gewünscht: abstrakte, hochwertige generierte Szene statt generischem Business-Stockfoto.
