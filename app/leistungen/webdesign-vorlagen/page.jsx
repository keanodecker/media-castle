'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Info, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const templates = [
  {
    name: 'Bella Vista',
    label: 'Fine Dining · Gehobene Küche',
    description:
      'Elegantes Design für Restaurants im gehobenen Segment. Dunkle, atmosphärische Optik mit goldenen Akzenten — ideal für Betriebe, die Stil und Exklusivität vermitteln möchten.',
    path: '/leistungen/webdesign-vorlagen/bella-vista',
    gradient: 'linear-gradient(135deg, #1a0d05 0%, #2d1507 35%, #4a2010 65%, #1f0e06 100%)',
    accentColor: '#c9a84c',
    tag: 'Dunkel & Elegant',
    features: ['Speisekarte', 'Reservierungsbereich', 'Story-Sektion', 'Öffnungszeiten'],
  },
  {
    name: 'Stadtküche',
    label: 'Bistro · Casual Dining',
    description:
      'Frisches, einladendes Design für moderne Bistros und Gasthäuser. Helle, warme Optik mit grünen Akzenten — ideal für Betriebe, die Authentizität und Nahbarkeit ausdrücken möchten.',
    path: '/leistungen/webdesign-vorlagen/stadtkueche',
    gradient: 'linear-gradient(135deg, #e8f5e9 0%, #f5f0e8 40%, #fef9ec 100%)',
    accentColor: '#2d7a4f',
    tag: 'Hell & Einladend',
    features: ['Tagesangebote', 'Über-uns-Bereich', 'Bildgalerie', 'Kontakt & Anfahrt'],
  },
];

export default function WebdesignVorlagenPage() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="mb-6 text-secondary">Website Vorlagen</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diese Seite zeigt, was technisch und gestalterisch möglich ist.
              Jede Vorlage ist ein klickbares Demo — kein echtes Restaurant, sondern ein Eindruck davon, wie Ihre Website aussehen könnte.
            </p>
          </motion.div>

          {/* Disclaimer Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-4 mb-16 max-w-3xl mx-auto"
          >
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-secondary/80 leading-relaxed" style={{ maxWidth: 'none' }}>
              <strong className="text-secondary">Hinweis:</strong> Bei den folgenden Vorlagen handelt es sich um Demo-Websites ohne echte Inhalte.
              Sie dienen ausschließlich dazu, Ihnen einen Eindruck von Gestaltungsmöglichkeiten zu geben.
              Sämtliche Namen, Gerichte, Preise und Texte sind fiktiv.
            </p>
          </motion.div>

          {/* Template Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {templates.map((tpl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="bg-white border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Visual Preview */}
                <div
                  className="relative h-52 flex items-center justify-center overflow-hidden"
                  style={{ background: tpl.gradient }}
                >
                  {/* Decorative circle */}
                  <div
                    className="absolute w-40 h-40 rounded-full opacity-20"
                    style={{
                      background: tpl.accentColor,
                      top: '-20px',
                      right: '-20px',
                      filter: 'blur(40px)',
                    }}
                  />
                  <div className="text-center z-10 px-6">
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-2 opacity-70"
                      style={{ color: tpl.accentColor, fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {tpl.label}
                    </p>
                    <h2
                      className="text-4xl font-bold"
                      style={{
                        color: index === 0 ? '#f2ede4' : '#1a1a1a',
                        fontFamily: 'DM Serif Display, serif',
                        letterSpacing: '-0.02em',
                        fontSize: '2.25rem',
                      }}
                    >
                      {tpl.name}
                    </h2>
                  </div>
                  {/* Tag badge */}
                  <span
                    className="absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: index === 0 ? 'rgba(201,168,76,0.2)' : 'rgba(45,122,79,0.15)',
                      color: tpl.accentColor,
                      border: `1px solid ${tpl.accentColor}40`,
                    }}
                  >
                    {tpl.tag}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <p className="text-secondary/80 leading-relaxed mb-6" style={{ maxWidth: 'none' }}>
                    {tpl.description}
                  </p>

                  <div className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Enthaltene Bereiche
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tpl.features.map((f, fi) => (
                        <span
                          key={fi}
                          className="px-3 py-1 bg-muted text-secondary/80 rounded-full text-sm"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={tpl.path}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Vorlage ansehen
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-clean max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-4 text-secondary">Gefällt Ihnen, was Sie sehen?</h2>
            <p className="text-secondary/80 mb-8 leading-relaxed">
              Im kostenlosen Erstgespräch zeigen wir Ihnen, wie wir Ihren individuellen Auftritt
              gestalten — passend zu Ihrer Küche, Ihren Gästen und Ihrer Persönlichkeit.
            </p>
            <Link href="/kontakt" className="btn-primary">
              Kostenloses Erstgespräch vereinbaren
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />
    </>
  );
}
