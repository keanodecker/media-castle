'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PartnerLogoBar from '@/components/PartnerLogoBar';
import FAQAccordion from '@/components/FAQAccordion';
import LeistungenSection from '@/components/LeistungenSection';

export default function HomePage() {
  useEffect(() => {
    if (window.location.hash === '#faq') {
      const element = document.getElementById('faq');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary pt-20">
        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/70 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.3), transparent 70%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium tracking-wide uppercase text-primary">
                Media Castle
              </span>
            </div>

            <h1 className="text-white mb-6">
              Ihre digitale Präsenz.<br />
              Professionell. Wirkungsvoll.
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Rund um Online Präsenz — Media Castle gestaltet Ihren Auftritt im Netz.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/leistungen"
                className="btn-primary group"
              >
                Leistungen entdecken
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                href="/kontakt"
                className="btn-glass"
              >
                Kostenloses Erstgespräch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Logo Bar */}
      <PartnerLogoBar />

      {/* Leistungen Section */}
      <section id="leistungen" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-secondary">Unsere Leistungen</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alles, was Sie für eine starke digitale Präsenz benötigen — aus einer Hand.
            </p>
          </div>
          <LeistungenSection />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-secondary">Häufig gestellte Fragen</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Zusammenarbeit.
            </p>
          </div>

          <FAQAccordion />

          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-secondary">Noch Fragen offen?</p>
            <Link href="/kontakt" className="btn-outline">
              Kostenloses Erstgespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}
