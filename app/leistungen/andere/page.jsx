'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, FileText, Palette, CreditCard, Sparkles, HelpCircle, LayoutDashboard, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LeistungenAnderePage() {
  const services = [
    {
      icon: MapPin,
      title: 'Google Maps Einträge',
      description: 'Optimierung Ihres Google My Business Profils für bessere lokale Sichtbarkeit'
    },
    {
      icon: FileText,
      title: 'Flyer & Printdesign',
      description: 'Professionelle Gestaltung von Flyern, Broschüren und anderen Printmedien'
    },
    {
      icon: Palette,
      title: 'Firmendesign & Corporate Identity',
      description: 'Entwicklung eines einheitlichen visuellen Auftritts für Ihr Unternehmen'
    },
    {
      icon: CreditCard,
      title: 'Visitenkarten',
      description: 'Design und Druck hochwertiger Visitenkarten, die im Gedächtnis bleiben'
    },
    {
      icon: Sparkles,
      title: 'Logodesign',
      description: 'Kreative Logoentwicklung, die Ihre Marke perfekt repräsentiert'
    },
    {
      icon: TrendingUp,
      title: 'SEO-Optimierung',
      description: 'Suchmaschinenoptimierung für bestehende Online-Auftritte — damit Ihr Unternehmen besser gefunden wird.',
      href: '/leistungen/online-prasenz'
    },
    {
      icon: LayoutDashboard,
      title: 'Individuelles Admin-Dashboard',
      description: 'Verwalten Sie Ihre Website-Inhalte eigenständig — ohne IT-Kenntnisse, ohne Aufwand.',
      href: '/leistungen/admin-dashboard'
    },
    {
      icon: HelpCircle,
      title: 'Weitere Leistungen auf Anfrage',
      description: 'Haben Sie ein spezielles Projekt? Kontaktieren Sie uns für individuelle Lösungen'
    }
  ];

  return (
    <>
      <Header />

      <main className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="mb-6 text-secondary">Weitere Leistungen</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von Google Maps Einträgen bis Logodesign — wir bieten umfassende Lösungen für Ihre digitale und analoge Präsenz.
            </p>
          </motion.div>

          {/* Services Grid — foil background */}
          <div
            className="rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden"
            style={{
              background: `
                radial-gradient(ellipse at 12% 20%, rgba(191,219,254,0.85) 0%, transparent 45%),
                radial-gradient(ellipse at 88% 8%,  rgba(255,255,255,0.95) 0%, transparent 38%),
                radial-gradient(ellipse at 55% 52%, rgba(239,246,255,0.7) 0%, transparent 55%),
                radial-gradient(ellipse at 75% 85%, rgba(147,197,253,0.6) 0%, transparent 42%),
                radial-gradient(ellipse at 18% 78%, rgba(255,255,255,0.9) 0%, transparent 32%),
                radial-gradient(ellipse at 40% 5%,  rgba(219,234,254,0.7) 0%, transparent 40%),
                linear-gradient(135deg, #dbeafe 0%, #ffffff 35%, #eff6ff 65%, #bfdbfe 100%)
              `,
              boxShadow: 'inset 0 2px 40px rgba(37,99,235,0.06)',
            }}
          >
            {/* Subtle gloss overlay */}
            <div
              className="absolute inset-0 pointer-events-none rounded-3xl"
              style={{
                background: 'linear-gradient(160deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(191,219,254,0.2) 100%)',
              }}
            />

            <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const CardWrapper = service.href ? Link : 'div';
                // Alternating depth: negative = raised, positive = recessed
                const depths = [-10, 4, -6, 6, -12, 2, -8, 4];
                const depth = depths[index] ?? 0;
                const isRaised = depth < 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    style={{ transform: `translateY(${depth}px)` }}
                  >
                    <CardWrapper
                      {...(service.href ? { href: service.href } : {})}
                      className="group block h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
                      style={{
                        background: isRaised
                          ? 'rgba(255,255,255,0.95)'
                          : 'rgba(239,246,255,0.75)',
                        boxShadow: isRaised
                          ? '0 8px 32px rgba(37,99,235,0.12), 0 2px 8px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)'
                          : '0 2px 8px rgba(37,99,235,0.06), inset 0 2px 6px rgba(37,99,235,0.05)',
                        border: isRaised
                          ? '1px solid rgba(255,255,255,0.9)'
                          : '1px solid rgba(147,197,253,0.4)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className={`text-xl font-semibold mb-3 text-secondary ${service.href ? 'group-hover:text-primary transition-colors duration-200' : ''}`}>
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-20"
          >
            <div className="card-clean max-w-3xl mx-auto">
              <h2 className="mb-4 text-secondary">Nicht das Richtige dabei?</h2>
              <p className="text-secondary/80 mb-8 leading-relaxed">
                Wir bieten auch individuelle Lösungen für spezielle Anforderungen.
                Kontaktieren Sie uns und wir finden gemeinsam die perfekte Lösung für Ihr Projekt.
              </p>
              <a href="/kontakt" className="btn-primary">
                Kostenloses Erstgespräch
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
