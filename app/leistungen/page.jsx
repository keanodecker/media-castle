'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeistungenSection from '@/components/LeistungenSection';

export default function LeistungenPage() {
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
            <h1 className="mb-6 text-secondary">Unsere Leistungen</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alles, was Sie für eine starke digitale Präsenz benötigen — aus einer Hand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LeistungenSection />
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
