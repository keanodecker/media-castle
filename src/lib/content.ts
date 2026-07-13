// Central content source for the Media Castle site.
// Keeping copy here makes it easy to review tone and reuse across pages.

export const site = {
  name: "Media Castle",
  phone: "+49 151 59167426",
  phoneHref: "tel:+4915159167426",
  email: "info@media-castle.com",
  location: "Friesenheim / Deutschland",
};

export type Service = {
  slug: string;
  /** Short label for nav dropdown + detail page title. */
  nav: string;
  /** Homepage row title. */
  title: string;
  /** Homepage row summary. */
  summary: string;
  /** Homepage row chips. */
  points: string[];
  /** Detail page: two-line fade headline. */
  heroTitle: [string, string];
  /** Detail page: one-line lead under the headline. */
  lead: string;
  /** Detail page: opening paragraphs. */
  intro: string[];
  /** Detail page: what's included, as editorial rows. */
  includes: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "webdesign",
    nav: "Webdesign",
    title: "Webdesign",
    summary:
      "Maßgeschneiderte Websites — von der ersten Idee bis zum Launch. Nicht nur schön, sondern gebaut, um Ihre Ziele zu erreichen.",
    points: ["Individuelles Design", "Responsive", "Schnelle Ladezeiten", "SEO-Grundlage"],
    heroTitle: ["Websites, die", "überzeugen."],
    lead: "Moderne, responsive Websites, die überzeugen — und konvertieren.",
    intro: [
      "Eine professionelle Website ist heute Ihr wichtigstes digitales Aushängeschild. Wir entwickeln maßgeschneiderte Web-Lösungen, die nicht nur gut aussehen, sondern Ihre Geschäftsziele unterstützen.",
      "Von der ersten Konzeption über das Design bis zur technischen Umsetzung begleiten wir Sie durch den gesamten Prozess — und sorgen dafür, dass Ihre Website genau das wird, was Sie sich vorstellen.",
    ],
    includes: [
      {
        title: "Individuelles Design",
        body: "Jede Website wird speziell für Ihre Marke und Zielgruppe gestaltet — kein Template von der Stange.",
      },
      {
        title: "Responsive für jedes Gerät",
        body: "Perfekte Darstellung vom Smartphone bis zum Desktop, in jeder Auflösung.",
      },
      {
        title: "Schnelle Ladezeiten",
        body: "Optimierte Performance für eine bessere Nutzererfahrung — und bessere Rankings.",
      },
      {
        title: "Moderne Technologien",
        body: "Wir bauen mit aktuellen Web-Technologien: schnell, sicher und zukunftssicher.",
      },
      {
        title: "Marke & Gestaltung",
        body: "Auf Wunsch inklusive Logo, Corporate Identity und Print — ein stimmiger Auftritt, digital wie gedruckt.",
      },
    ],
  },
  {
    slug: "online-praesenz",
    nav: "Onlinepräsenz",
    title: "Onlinepräsenz",
    summary:
      "Damit Ihre Kunden Sie finden — dort, wo sie suchen. Nachhaltige Sichtbarkeit statt kurzfristiger Tricks.",
    points: ["SEO", "Google Business Profil", "Lokale Optimierung", "Mehr Reichweite"],
    heroTitle: ["Gefunden werden.", "Deutschlandweit."],
    lead: "Damit potenzielle Kunden Sie online finden — genau dort, wo sie suchen.",
    intro: [
      "Die schönste Website bringt nichts, wenn niemand sie findet. Wir optimieren Ihre Online-Präsenz für Suchmaschinen und sorgen dafür, dass Ihr Unternehmen genau dort auftaucht, wo Ihre Kunden suchen.",
      "SEO ist bei uns kein Aufpreis: In jedem Projekt legen wir die Grundlage für gute Sichtbarkeit — technisch sauber und inhaltlich durchdacht.",
    ],
    includes: [
      {
        title: "Suchmaschinen­optimierung (SEO)",
        body: "Technische und inhaltliche Optimierung, damit Google Ihre Seite versteht und gut bewertet.",
      },
      {
        title: "Google Business Profil",
        body: "Ihr Eintrag bei Google — gepflegt und optimiert, damit Sie in der lokalen Suche und auf der Karte erscheinen.",
      },
      {
        title: "Lokale Sichtbarkeit",
        body: "Wir sorgen dafür, dass Sie in Ihrer Region gefunden werden — genau da, wo Ihre Kunden sind.",
      },
      {
        title: "Mehr Reichweite & Anfragen",
        body: "Bessere Platzierungen bedeuten mehr Besucher, mehr Vertrauen und am Ende mehr Kunden.",
      },
    ],
  },
  {
    slug: "automatisierung",
    nav: "Automatisierung",
    title: "Automatisierung",
    summary:
      "Digitale Werkzeuge, die Ihnen Arbeit abnehmen — individuelle Dashboards und Abläufe, zugeschnitten auf Ihre Prozesse.",
    points: ["Admin-Dashboards", "Automatisierte Abläufe", "Tool-Anbindung", "Wartung"],
    heroTitle: ["Weniger Aufwand.", "Mehr Überblick."],
    lead: "Digitale Werkzeuge, die Ihnen wiederkehrende Arbeit abnehmen.",
    intro: [
      "Wiederkehrende Aufgaben kosten Zeit und Nerven. Wir entwickeln individuelle Dashboards und Automatisierungen, die genau auf Ihre Abläufe zugeschnitten sind — kein Standard von der Stange.",
      "So behalten Sie den Überblick, sparen manuelle Arbeit und können sich auf das konzentrieren, was wirklich zählt: Ihr Geschäft.",
    ],
    includes: [
      {
        title: "Individuelle Admin-Dashboards",
        body: "Ein Ort für Ihre Daten und Inhalte — übersichtlich, einfach zu bedienen, genau auf Sie zugeschnitten.",
      },
      {
        title: "Automatisierte Abläufe",
        body: "Wiederkehrende Prozesse laufen im Hintergrund, statt Ihre Zeit zu kosten.",
      },
      {
        title: "Anbindung Ihrer Tools",
        body: "Wir verbinden die Systeme, mit denen Sie ohnehin arbeiten, zu einem sauberen Ganzen.",
      },
      {
        title: "Wartung & Betreuung",
        body: "Auch nach dem Launch bleiben wir an Ihrer Seite — Updates, Anpassungen, Support.",
      },
    ],
  },
];

export type Reference = {
  name: string;
  category: string;
  tags: string[];
  url: string;
  image: string;
  alt: string;
};

export const references: Reference[] = [
  {
    name: "Cesar Sicherheit",
    category: "Sicherheitsdienst",
    tags: ["Website"],
    url: "https://cesarsicherheit.de",
    image: "/references/cesar-sicherheit.jpg",
    alt: "Startseite der Website von Cesar Sicherheit, gestaltet von Media Castle",
  },
  {
    name: "Cesar Dienstleistungen",
    category: "Dienstleistungen",
    tags: ["Website"],
    url: "https://cesardienstleistungen.de",
    image: "/references/cesar-dienstleistungen.jpg",
    alt: "Startseite der Website von Cesar Dienstleistungen, gestaltet von Media Castle",
  },
  {
    name: "Ballonkunst Lahr",
    category: "Eventgestaltung",
    tags: ["Website"],
    url: "https://ballonkunst-lahr.de",
    image: "/references/ballonkunst-lahr.jpg",
    alt: "Startseite der Website von Ballonkunst Lahr, gestaltet von Media Castle",
  },
  {
    name: "FW Recycling",
    category: "Recycling",
    tags: ["Website", "SEO"],
    url: "https://fw-recycling.de",
    image: "/references/fw-recycling.jpg",
    alt: "Startseite der Website von FW Recycling, gestaltet von Media Castle",
  },
  {
    name: "KSL Boxing Lahr",
    category: "Kampfsport",
    tags: ["Website"],
    url: "https://ksl-boxing.com",
    image: "/references/ksl-boxing.jpg",
    alt: "Startseite der Website von KSL Boxing Lahr, gestaltet von Media Castle",
  },
  {
    name: "Studio 21 Lahr",
    category: "Beauty & Kosmetik",
    tags: ["Website", "SEO"],
    url: "https://www.studio21-lahr.de",
    image: "/references/studio21-lahr.jpg",
    alt: "Startseite der Website von Studio 21 Lahr, gestaltet von Media Castle",
  },
  {
    name: "FV Lahr West",
    category: "Sportverein",
    tags: ["Website"],
    url: "https://fclahrwest.de",
    image: "/references/fclahrwest.jpg",
    alt: "Startseite der Website des FV Lahr West, gestaltet von Media Castle",
  },
];

export type Value = { title: string; body: string };

export const values: Value[] = [
  {
    title: "Ein Ansprechpartner",
    body: "Web, SEO, Design, Print — alles aus einer Hand. Sie koordinieren keine fünf Dienstleister, sondern sprechen mit einem Partner.",
  },
  {
    title: "Persönlich statt Baukasten",
    body: "Kein anonymes Tool, kein Template. Wir betreuen Sie vor, während und nach dem Projekt — mit einem festen Ansprechpartner.",
  },
  {
    title: "Qualität im Detail",
    body: "Höchste Standards in Design und Entwicklung. Jedes Projekt wird mit Sorgfalt umgesetzt — das sehen Sie an dieser Seite.",
  },
  {
    title: "Verlässlich & transparent",
    body: "Offene Kommunikation, klare Prozesse, gehaltene Versprechen. Sie wissen immer, woran wir arbeiten.",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Wie lange dauert die Umsetzung eines Projekts?",
    a: "Das hängt vom Umfang ab. Eine fokussierte Website ist oft in wenigen Wochen live, umfangreichere Projekte dauern entsprechend länger. Im Erstgespräch nennen wir Ihnen einen konkreten, verbindlichen Zeitplan.",
  },
  {
    q: "Bin ich nach dem Launch unabhängig?",
    a: "Ja. Sie erhalten volle Kontrolle über Ihre Website. Auf Wunsch bleiben wir als Partner an Ihrer Seite und übernehmen Wartung, Updates und Weiterentwicklung — Sie entscheiden.",
  },
  {
    q: "Bieten Sie auch einzelne Leistungen an?",
    a: "Selbstverständlich. Sie brauchen nur ein Logo, nur SEO oder nur eine neue Website? Wir stellen genau die Leistungen zusammen, die Sie wirklich benötigen.",
  },
  {
    q: "Was ist SEO und wie hilft es meinem Unternehmen?",
    a: "SEO (Suchmaschinen­optimierung) sorgt dafür, dass Ihr Unternehmen bei Google gefunden wird, wenn potenzielle Kunden nach Ihren Leistungen suchen. Wir optimieren Ihre Website technisch und inhaltlich und stärken Ihre lokale Sichtbarkeit.",
  },
  {
    q: "Wie läuft das Erstgespräch ab?",
    a: "Unverbindlich und kostenlos. Wir lernen uns kennen, Sie schildern Ihr Anliegen, wir stellen Fragen und geben eine erste Einschätzung. Passt es für beide Seiten, erhalten Sie ein konkretes Angebot.",
  },
  {
    q: "Was kostet eine Website bei Media Castle?",
    a: "Jedes Projekt ist individuell, deshalb gibt es keinen Pauschalpreis. Nach dem Erstgespräch erhalten Sie ein transparentes Festpreis-Angebot — ohne versteckte Kosten.",
  },
];

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Leistungen",
    href: "/#leistungen",
    children: services.map((s) => ({
      label: s.nav,
      href: `/leistungen/${s.slug}`,
    })),
  },
  { label: "Über uns", href: "/uber-uns" },
  { label: "FAQ", href: "/#faq" },
];

// Extra narrative for the Automatisierung service page. Percentages are
// illustrative — confirm/replace before going live.
export const automationStory = {
  claim: ["Automatisierung ist kein Trend.", "Sie ist Ihr Vorsprung."] as [string, string],
  claimBody:
    "Die allermeisten Menschen haben KI noch nie genutzt. Wir stehen nicht am Ende der Entwicklung — wir stehen ganz am Anfang. Genau das ist Ihre Chance: Wer jetzt automatisiert, baut einen Vorsprung auf, den später kein Budget mehr aufholt.",
  stats: [
    { value: "84 %", label: "haben KI noch nie genutzt", note: "Der allergrößte Teil der Welt steht noch am Anfang." },
    { value: "33 %", label: "der KMU nutzen bereits KI", note: "Der Mittelstand ist überraschend weit vorn." },
    { value: "37 %", label: "mit voller KI-Adoption", note: "Kleinere Unternehmen adoptieren oft schneller als Konzerne." },
  ],
  advantages: [
    { title: "Kurze Entscheidungswege", body: "Während Konzerne monatelang abstimmen, können Sie in Wochen live gehen." },
    { title: "Direkter Impact", body: "Jede automatisierte Stunde zählt sofort — ohne sich in komplexen Strukturen zu verlieren." },
    { title: "Agilität als Stärke", body: "Kleine Teams passen sich schneller an. Was Konzerne Jahre kostet, schaffen Sie in Monaten." },
  ],
};
