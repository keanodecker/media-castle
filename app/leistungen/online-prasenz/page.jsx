'use client';

import { motion } from 'framer-motion';
import { Search, TrendingUp, Users, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

export default function LeistungenOnlinePrasenzPage() {
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
            <h1 className="mb-6 text-secondary">Online Präsenz & Marketing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wir sorgen dafür, dass dich deine Kunden online finden.
            </p>
          </motion.div>

          {/* SEO Service Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-clean mb-8"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
                  <Search className="w-32 h-32 text-primary/40" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="mb-6 text-secondary">Online Präsenz & SEO</h2>
                <p className="text-secondary/80 leading-relaxed mb-6">
                  Eine schöne Website allein reicht nicht - sie muss auch gefunden werden.
                  Wir optimieren deine Online-Präsenz für Suchmaschinen und sorgen dafür,
                  dass potenzielle Kunden dich finden.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-secondary/80">Suchmaschinenoptimierung (SEO)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-secondary/80">Google My Business Optimierung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-secondary/80">Lokale Suchmaschinenoptimierung</span>
                  </li>
                </ul>
                <a href="/kontakt" className="btn-primary">
                  Kostenloses Erstgespräch
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Media Service Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-clean mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6 text-secondary">Social Media Management</h2>
                <p className="text-secondary/80 leading-relaxed mb-6">
                  Professionelle Betreuung deiner Social Media Kanäle. Wir erstellen
                  authentische Inhalte, die deine Zielgruppe ansprechen und deine
                  Marke stärken.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-secondary/80">Content-Erstellung und Planung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-secondary/80">Community Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-secondary/80">Performance-Analyse und Reporting</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Instagram
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Facebook
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    LinkedIn
                  </span>
                </div>
                <a href="/kontakt" className="btn-outline">
                  Kostenloses Erstgespräch
                </a>
              </div>
              <div>
                <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
                  <MessageCircle className="w-32 h-32 text-primary/40" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <PricingSection />

      <Footer />
    </>
  );
}
