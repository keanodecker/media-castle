'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, Image, FileText, Settings, ShieldCheck, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FeyButton } from '@/components/ui/fey-button';

export default function AdminDashboardPage() {
  const features = [
    {
      icon: Image,
      title: 'Galerien verwalten',
      description: 'Bilder und Galerien eigenständig hochladen, sortieren und löschen — ganz ohne technisches Wissen.'
    },
    {
      icon: FileText,
      title: 'Infobeiträge & Neuigkeiten',
      description: 'Neue Beiträge, Ankündigungen oder Neuigkeiten selbst veröffentlichen und bearbeiten.'
    },
    {
      icon: Settings,
      title: 'Inhalte anpassen',
      description: 'Texte, Öffnungszeiten oder Kontaktdaten jederzeit einfach selbst aktualisieren.'
    },
    {
      icon: Users,
      title: 'Mehrere Benutzer',
      description: 'Auf Wunsch erhalten mehrere Personen aus Ihrem Team Zugang zum Dashboard.'
    },
    {
      icon: ShieldCheck,
      title: 'Sicher & geschützt',
      description: 'Ihr Dashboard ist mit modernen Sicherheitsstandards geschützt — nur Sie haben Zugriff.'
    },
    {
      icon: LayoutDashboard,
      title: 'Einfache Bedienung',
      description: 'Die Oberfläche ist intuitiv gestaltet — keine IT-Kenntnisse erforderlich.'
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
            <h1 className="mb-6 text-secondary">Individuelles Admin-Dashboard</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Verwalten Sie Ihre Website-Inhalte eigenständig — ohne IT-Kenntnisse, ohne Aufwand.
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-clean mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6 text-secondary">Ihre Website, Ihre Kontrolle</h2>
                <p className="text-secondary/80 leading-relaxed mb-6">
                  Sollten Sie Ihre Website regelmäßig selbst erweitern oder aktualisieren wollen,
                  richten wir Ihnen auf Wunsch ein professionelles Admin-Dashboard ein. Darüber
                  können Sie Inhalte wie Galerien, Beiträge oder Texte eigenständig verwalten —
                  ganz ohne IT-Kenntnisse.
                </p>
                <p className="text-secondary/80 leading-relaxed mb-8">
                  Das Dashboard wird individuell auf Ihre Website und Ihre Bedürfnisse angepasst.
                  Wir schulen Sie bei der Übergabe und stehen Ihnen danach jederzeit als Ansprechpartner
                  zur Verfügung.
                </p>
                <FeyButton href="/kontakt" variant="primary">
                  Kostenloses Erstgespräch
                </FeyButton>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
                  <LayoutDashboard className="w-32 h-32 text-primary/40" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="card-clean group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-secondary">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center"
          >
            <div className="card-clean max-w-3xl mx-auto bg-muted/30">
              <h2 className="mb-4 text-secondary">Interesse am Admin-Dashboard?</h2>
              <p className="text-secondary/80 mb-8 leading-relaxed">
                Das Dashboard ist optional und wird individuell für Ihre Website eingerichtet.
                Sprechen Sie uns im Erstgespräch einfach darauf an.
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
