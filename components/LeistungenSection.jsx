import Link from 'next/link';
import { Code, Palette, Smartphone, Zap, Search, TrendingUp, Users, MessageCircle, MapPin, FileText, Sparkles, LayoutDashboard } from 'lucide-react';
import { MultiIconDisplay } from '@/components/ui/interactive-empty-state';

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
          <Link href="/leistungen/online-prasenz" className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-medium text-base transition-all duration-200 bg-blue-50/80 border-2 border-secondary/50 text-secondary backdrop-blur-sm hover:bg-primary/10 hover:border-primary hover:text-primary shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]">
            Mehr erfahren
          </Link>
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
          <Link href="/leistungen/online-prasenz" className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-medium text-base transition-all duration-200 bg-blue-50/80 border-2 border-secondary/50 text-secondary backdrop-blur-sm hover:bg-primary/10 hover:border-primary hover:text-primary shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]">
            Mehr erfahren
          </Link>
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
  );
};

export default LeistungenSection;
