
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PartnerLogoBar from '@/components/PartnerLogoBar.jsx';
import FAQAccordion from '@/components/FAQAccordion.jsx';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#faq') {
      const element = document.getElementById('faq');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Castle Media - Deine digitale Präsenz</title>
        <meta name="description" content="Professionelle Webdesign und Online Präsenz Lösungen von Castle Media. Wir gestalten deinen Auftritt im Netz." />
      </Helmet>

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
                Castle Media
              </span>
            </div>

            <h1 className="text-white mb-6">
              Deine digitale Präsenz.<br />
              Professionell. Wirkungsvoll.
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Rund um Online Präsenz — Castle Media gestaltet deinen Auftritt im Netz.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/leistungen/webdesign"
                className="btn-primary group"
              >
                Leistungen entdecken
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                to="/kontakt"
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

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-secondary">Häufig gestellte Fragen</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hier findest du Antworten auf die wichtigsten Fragen rund um unsere Zusammenarbeit.
            </p>
          </div>
          
          <FAQAccordion />
          
          <div className="mt-12 text-center">
            <p className="text-secondary mb-6">Noch Fragen offen?</p>
            <Link to="/kontakt" className="btn-outline">
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
};

export default HomePage;
