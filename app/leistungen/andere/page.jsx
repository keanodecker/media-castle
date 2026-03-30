'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, FileText, Palette, CreditCard, Sparkles, HelpCircle, LayoutDashboard } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

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

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service, index) => {
              const CardWrapper = service.href ? Link : 'div';
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <CardWrapper
                    {...(service.href ? { href: service.href } : {})}
                    className="card-clean group block h-full"
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

      <PricingSection />

      <Footer />
    </>
  );
}
