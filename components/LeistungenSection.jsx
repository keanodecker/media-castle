import Image from 'next/image';
import Link from 'next/link';
import { Code, Palette, Smartphone, Zap, Search, TrendingUp, Users, MapPin, FileText, Sparkles, LayoutDashboard, Eye } from 'lucide-react';
import { MultiIconDisplay } from '@/components/ui/interactive-empty-state';
import { FeyButton } from '@/components/ui/fey-button';

const partners = [
  { name: 'Cesar Sicherheit',          logo: '/Logo-Kunden/Cesarsicherheit-Logo-Website.png.png',     website: 'https://cesarsicherheit.de' },
  { name: 'Cesar Dienstleistungen',    logo: '/Logo-Kunden/Cesar_Dienstleistungen-Logo-Website.png',  website: 'https://cesardienstleistungen.de' },
  { name: 'Ballonkunst Lahr',          logo: '/Logo-Kunden/Ballongkunst_Lahr-Logo-Website.png.png',   website: 'https://ballonkunst-lahr.de' },
  { name: 'FW Recycling',              logo: '/Logo-Kunden/FW-Recycling-Logo.png',                    website: 'https://fw-recycling.de' },
  { name: 'KSL Boxing Lahr',           logo: '/Logo-Kunden/KSL-Boxing-Logo-Website.png.png',          website: 'https://ksl-boxing.com' },
  { name: 'Studio 21 Lahr',            logo: '/Logo-Kunden/Studio21-Lahr-Logo.png',                   website: 'https://www.studio21-lahr.de' },
  { name: 'FV Lahr West',              logo: '/Logo-Kunden/FV-Lahr-West-Logo.png',                                website: 'https://fclahrwest.de' },
];

const LeistungenSection = () => {
  return (
    <>
    <div className="space-y-6">

      {/* Webdesign — volle Breite */}
      <div className="card-clean group">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Webdesign
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Website Design & Entwicklung
            </h3>
            <p className="text-secondary/80 leading-relaxed mb-6">
              Wir entwickeln maßgeschneiderte Websites, die nicht nur gut aussehen,
              sondern auch Ihre Geschäftsziele unterstützen — von der ersten Konzeption
              bis zum Launch.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">Responsive Design</span>
              <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">SEO-optimiert</span>
              <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">DSGVO-konform</span>
              <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">Schnelle Ladezeiten</span>
            </div>
            <Link href="/leistungen/webdesign" className="btn-primary">
              Mehr erfahren
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Code, label: 'Moderne Technologien' },
              { icon: Palette, label: 'Individuelles Design' },
              { icon: Smartphone, label: 'Responsive' },
              { icon: Zap, label: 'Performance' }
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-muted/50 rounded-xl p-4 flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-secondary">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Online Präsenz & SEO */}
      <div className="card-clean">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Online Präsenz
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Online Präsenz & SEO
            </h3>
            <p className="text-secondary/80 leading-relaxed mb-6">
              Damit potenzielle Kunden Sie finden — wir optimieren Ihre Sichtbarkeit in Suchmaschinen
              und lokal, damit Ihr Unternehmen genau dort auftaucht, wo Ihre Kunden suchen.
            </p>
            <ul className="space-y-3 mb-8">
              {['Suchmaschinenoptimierung (SEO)', 'Google My Business', 'Lokale Optimierung'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-secondary/80">
                  <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <FeyButton href="/leistungen/online-prasenz" variant="glass">
              Mehr erfahren
            </FeyButton>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Search, label: 'Google-Ranking' },
              { icon: TrendingUp, label: 'Mehr Reichweite' },
              { icon: MapPin, label: 'Lokale Präsenz' },
              { icon: Users, label: 'Mehr Kunden' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-muted/50 rounded-xl p-4 flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-secondary">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weitere Leistungen */}
      <div className="card-clean group">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="flex-1">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Weitere Leistungen
            </span>
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Noch mehr für Ihren Auftritt
            </h3>
            <p className="text-secondary/80 text-base leading-relaxed mb-8">
              Von Logodesign und Corporate Identity über Flyer und Visitenkarten
              bis hin zum individuellen Admin-Dashboard — wir bieten umfassende
              Lösungen für Ihre digitale und analoge Präsenz.
            </p>
              <Link href="/leistungen/andere" className="btn-primary">
              Alle Leistungen ansehen
            </Link>
          </div>

          {/* Animierte Icon-Gruppen */}
          <div className="flex-shrink-0 flex flex-col items-center gap-10">
            <MultiIconDisplay icons={[
              <Sparkles key="sp" className="w-6 h-6" />,
              <Palette key="pa" className="w-6 h-6" />,
              <FileText key="ft" className="w-6 h-6" />
            ]} />
            <MultiIconDisplay icons={[
              <MapPin key="mp" className="w-6 h-6" />,
              <LayoutDashboard key="ld" className="w-6 h-6" />,
              <Users key="us" className="w-6 h-6" />
            ]} />
          </div>
        </div>
      </div>

    </div>

    {/* Unsere Partner — Kreis-Anordnung */}
    <section className="mt-24 md:mt-32">
      <div className="text-center mb-12 md:mb-14">
        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-4">
          Unsere Partner
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          Unternehmen, die uns vertrauen
        </h2>
        <p className="text-lg text-secondary/80 leading-relaxed max-w-2xl mx-auto">
          Ein Auszug aus unseren bisherigen Projekten — werfen Sie gerne einen Blick auf die Live-Websites.
        </p>
      </div>

      {/* Desktop: Kreis */}
      <div className="hidden md:block relative w-full max-w-[720px] mx-auto aspect-square">
        {/* Dekorative Ringe */}
        <div className="absolute inset-[6%] rounded-full border-2 border-primary/10" />
        <div className="absolute inset-[22%] rounded-full border border-primary/5" />

        {/* Zentrum */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-2">
            Made in Lahr
          </p>
          <p
            className="text-4xl lg:text-5xl font-bold text-secondary leading-tight"
            style={{ fontFamily: 'DM Serif Display, serif' }}
          >
            Media<br />Castle
          </p>
        </div>

        {/* Partner auf dem Kreis */}
        {partners.map((partner, i) => {
          const angle = (-90 + (360 / partners.length) * i) * (Math.PI / 180);
          const x = 50 + 42 * Math.cos(angle);
          const y = 50 + 42 * Math.sin(angle);
          return (
            <a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.name} Website besuchen`}
              className="absolute group flex flex-col items-center gap-2.5 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              {partner.logo ? (
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white border border-border flex items-center justify-center shadow-md overflow-hidden p-3 transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 group-hover:border-primary/50">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    width={112}
                    height={112}
                    className="object-contain w-full h-full"
                  />
                </div>
              ) : (
                <div className={`w-24 h-24 lg:w-28 lg:h-28 rounded-2xl ${partner.color} flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-110`}>
                  <span className="text-white font-bold text-2xl">{partner.initials}</span>
                </div>
              )}
              <span className="text-xs lg:text-sm font-semibold text-secondary text-center max-w-[120px] leading-tight transition-colors duration-200 group-hover:text-primary">
                {partner.name}
              </span>
            </a>
          );
        })}
      </div>

      {/* Mobile: Grid */}
      <div className="md:hidden grid grid-cols-2 gap-8">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${partner.name} Website besuchen`}
            className="flex flex-col items-center text-center gap-3"
          >
            {partner.logo ? (
              <div className="w-28 h-28 rounded-2xl bg-white border border-border flex items-center justify-center shadow-md overflow-hidden p-3">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  width={112}
                  height={112}
                  className="object-contain w-full h-full"
                />
              </div>
            ) : (
              <div className={`w-28 h-28 rounded-2xl ${partner.color} flex items-center justify-center shadow-md`}>
                <span className="text-white font-bold text-2xl">{partner.initials}</span>
              </div>
            )}
            <span className="text-sm font-semibold text-secondary leading-tight">
              {partner.name}
            </span>
          </a>
        ))}
      </div>
    </section>
    </>
  );
};

export default LeistungenSection;
