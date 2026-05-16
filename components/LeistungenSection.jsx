import Image from 'next/image';
import Link from 'next/link';
import { Code, Palette, Smartphone, Zap, Search, TrendingUp, Users, MessageCircle, MapPin, FileText, Sparkles, LayoutDashboard, Eye } from 'lucide-react';
import { MultiIconDisplay } from '@/components/ui/interactive-empty-state';
import { FeyButton } from '@/components/ui/fey-button';

const partners = [
  { name: 'Cesar Sicherheit',          logo: '/Logo-Kunden/Cesarsicherheit-Logo-Website.png.png',     website: 'https://cesarsicherheit.de' },
  { name: 'Cesar Dienstleistungen',    logo: '/Logo-Kunden/Cesar_Dienstleistungen-Logo-Website.png',  website: 'https://cesardienstleistungen.de' },
  { name: 'Ballonkunst Lahr',          logo: '/Logo-Kunden/Ballongkunst_Lahr-Logo-Website.png.png',   website: 'https://ballonkunst-lahr.de' },
  { name: 'KSL Boxing Lahr',           logo: '/Logo-Kunden/KSL-Boxing-Logo-Website.png.png',          website: 'https://ksl-boxing.com' },
  { name: 'FV Lahr West',              logo: '/Logo-Kunden/Logos.png',                                website: 'https://fclahrwest.de' },
];

const LeistungenSection = () => {
  return (
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

      {/* Online Präsenz — 2 Karten nebeneinander */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Social Media */}
        <div className="card-clean flex flex-col h-full">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
            <MessageCircle className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Online Präsenz
          </span>
          <h3 className="text-2xl font-bold text-secondary mb-4">Social Media Management</h3>
          <p className="text-secondary/80 text-base leading-relaxed mb-5 flex-1">
            Authentische Inhalte für Ihre Zielgruppe — wir übernehmen Planung,
            Erstellung und Betreuung Ihrer Kanäle.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-muted text-secondary rounded-full text-sm font-medium">Instagram</span>
            <span className="px-3 py-1 bg-muted text-secondary rounded-full text-sm font-medium">Facebook</span>
            <span className="px-3 py-1 bg-muted text-secondary rounded-full text-sm font-medium">TikTok</span>
          </div>
          <FeyButton href="/leistungen/online-prasenz" variant="glass" className="w-full">
            Mehr erfahren
          </FeyButton>
        </div>

        {/* SEO */}
        <div className="card-clean flex flex-col h-full">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Online Präsenz
          </span>
          <h3 className="text-2xl font-bold text-secondary mb-4">Online Präsenz & SEO</h3>
          <p className="text-secondary/80 text-base leading-relaxed mb-5 flex-1">
            Damit potenzielle Kunden Sie finden — wir optimieren Ihre Sichtbarkeit
            in Suchmaschinen und lokal.
          </p>
          <ul className="space-y-3 mb-6">
            {['Suchmaschinenoptimierung (SEO)', 'Google My Business', 'Lokale Optimierung'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-base text-secondary/80">
                <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <FeyButton href="/leistungen/online-prasenz" variant="glass" className="w-full">
            Mehr erfahren
          </FeyButton>
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

      {/* Unsere Partner */}
      <div className="card-clean">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Unsere Partner
          </span>
          <h3 className="text-2xl font-bold text-secondary mb-3">
            Unternehmen, die uns vertrauen
          </h3>
          <p className="text-secondary/80 text-base leading-relaxed max-w-2xl mx-auto">
            Ein Auszug aus unseren bisherigen Projekten — werfen Sie gerne einen Blick auf die Live-Websites.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-24 h-24 rounded-2xl bg-white border border-border flex items-center justify-center shadow-sm overflow-hidden p-3">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  width={96}
                  height={96}
                  className="object-contain w-full h-full"
                />
              </div>
              <h4 className="text-sm font-semibold text-secondary leading-tight min-h-[2.5rem] flex items-center">
                {partner.name}
              </h4>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Website von ${partner.name} besuchen`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors duration-200"
              >
                <Eye className="w-3.5 h-3.5" />
                Website ansehen
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LeistungenSection;
