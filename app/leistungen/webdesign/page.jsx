'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

export default function LeistungenWebdesignPage() {
  const features = [
    {
      icon: Code,
      title: 'Moderne Technologien',
      description: 'Wir nutzen die neuesten Web-Technologien für schnelle, sichere Websites'
    },
    {
      icon: Palette,
      title: 'Individuelles Design',
      description: 'Jede Website wird speziell für Ihre Marke und Zielgruppe gestaltet'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Perfekte Darstellung auf allen Geräten - vom Smartphone bis zum Desktop'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimierte Ladezeiten für bessere Nutzererfahrung und SEO'
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
            <h1 className="mb-6 text-secondary">Website Design & Entwicklung</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Moderne, responsive Websites die überzeugen und konvertieren.
            </p>
          </motion.div>

          {/* Main Service Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-clean mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6 text-secondary">Ihre Website als digitales Aushängeschild</h2>
                <p className="text-secondary/80 leading-relaxed mb-6">
                  Eine professionelle Website ist heute unverzichtbar. Wir entwickeln maßgeschneiderte
                  Web-Lösungen, die nicht nur gut aussehen, sondern auch Ihre Geschäftsziele unterstützen.
                </p>
                <p className="text-secondary/80 leading-relaxed mb-8">
                  Von der ersten Konzeption über das Design bis zur technischen Umsetzung —
                  wir begleiten Sie durch den gesamten Prozess und sorgen dafür, dass Ihre
                  Website genau das wird, was Sie sich vorstellen.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Responsive Design
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    SEO-optimiert
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Schnelle Ladezeiten
                  </span>
                </div>
                <a href="/kontakt" className="btn-primary">
                  Kostenloses Erstgespräch
                </a>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
                  <Code className="w-32 h-32 text-primary/40" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card-clean p-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-secondary">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <PricingSection />

      <Footer />
    </>
  );
}
