'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Wie lange dauert die Umsetzung eines Projekts?',
      answer: 'Die Dauer hängt vom Umfang ab. Eine klassische Landing Page setzen wir in der Regel innerhalb von 1-2 Wochen um. Für umfangreichere Online Shops planen wir etwa 3-4 Wochen ein.'
    },
    {
      question: 'Mit welchen Kosten muss ich rechnen?',
      answer: 'Unsere transparenten Pakete starten bei 700 € für eine Landing Page, 1.150 € für das empfohlene Plus-Paket und ab 1.500 € für einen Online Shop. Hinzu kommt eine monatliche Instandhaltungspauschale für Updates und Support.'
    },
    {
      question: 'Bin ich nach dem Launch unabhängig?',
      answer: 'Ja, absolut. Du erhältst alle Zugänge und Rechte an deiner Website. Wir bleiben gerne als technischer Partner an deiner Seite, aber du bist nicht an uns gebunden.'
    },
    {
      question: 'Bietet ihr auch einzelne Leistungen an?',
      answer: 'Ja, wir bieten auch isolierte Dienstleistungen wie Suchmaschinenoptimierung (SEO), Google Maps Einträge, Logodesign oder Social Media Management an. Sprich uns einfach darauf an.'
    },
    {
      question: 'Wie läuft das Erstgespräch ab?',
      answer: 'Das Erstgespräch dauert etwa 20-30 Minuten und ist komplett kostenlos sowie unverbindlich. Wir lernen uns kennen, besprechen deine Ziele und klären erste Fragen zu deinem Projekt.'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-border rounded-2xl overflow-hidden transition-all duration-200 hover:border-primary/30"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-semibold text-secondary pr-8">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
