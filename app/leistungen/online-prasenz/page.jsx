'use client';

import { motion } from 'framer-motion';
import { Search, TrendingUp, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
            <h1 className="mb-6 text-secondary">Online Präsenz & SEO</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wir sorgen dafür, dass potenzielle Kunden Sie online finden — deutschlandweit.
            </p>
          </motion.div>

          {/* SEO Service Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-clean mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
                  <Search className="w-32 h-32 text-primary/40" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="mb-6 text-secondary">Online Präsenz & SEO</h2>
                <p className="text-secondary/80 leading-relaxed mb-4">
                  Wir optimieren Ihre Online-Präsenz für Suchmaschinen und sorgen dafür,
                  dass potenzielle Kunden Sie finden.
                </p>
                <p className="text-sm font-medium text-primary mb-6">
                  SEO ist bei jedem unserer Pakete standardmäßig enthalten.
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
        </div>
      </main>

      <Footer />
    </>
  );
}
