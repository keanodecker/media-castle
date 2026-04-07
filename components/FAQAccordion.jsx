'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Wie lange dauert die Umsetzung eines Projektes?',
    answer: (
      <p>
        Die Dauer hängt vom Umfang ab. Eine klassische Landing Page setzen wir in der Regel innerhalb von 1–2 Wochen um. Für umfangreichere Online Shops planen wir etwa 3–4 Wochen ein. Jedoch bei der Transferierung von Medien hängt es stark von der Zusammenarbeit ab — wie schnell Medien übergeben werden und ob Sie möchten, dass wir uns um die Medienbeschaffung kümmern.
      </p>
    )
  },
  {
    question: 'Bin ich nach dem Launch unabhängig?',
    answer: (
      <div className="space-y-4">
        <p>
          Es ist abhängig von der Größe der Veränderungen. Sie erhalten alle Zugänge und Rechte an Ihrer Website.
        </p>
        <p>
          Für kleinere Anpassungen wie Text- oder Bildänderungen sind wir dauerhaft persönlich für Sie erreichbar und setzen Ihre Wünsche schnell und unkompliziert um.
        </p>
        <p>
          Sollten Sie Ihre Website regelmäßig selbst erweitern wollen — zum Beispiel eine Galerie pflegen oder neue Infobeiträge veröffentlichen — richten wir Ihnen auf Wunsch ein professionelles Admin-Dashboard ein, über das Sie eigenständig Inhalte ganz ohne IT-Kenntnisse verwalten können.
        </p>
        <p>
          Für größere Vorhaben — wie die Erstellung einer komplett neuen Seite oder umfangreiche strukturelle Änderungen — erstellen wir Ihnen ein individuelles Angebot, das transparent und fair kalkuliert ist, sodass Sie immer genau wissen, was auf Sie zukommt. So begleiten wir Sie selbstverständlich als verlässlicher Partner durch den gesamten Prozess — professionell, persönlich und auf Augenhöhe.
        </p>
      </div>
    )
  },
  {
    question: 'Bieten wir auch einzelne Leistungen an?',
    answer: (
      <p>
        Ja, wir bieten auch isolierte Dienstleistungen wie Suchmaschinenoptimierung (SEO), Google Maps Einträge, Logo- und Flyerdesign oder Social Media Management an. Sprechen Sie uns einfach darauf an.
      </p>
    )
  },
  {
    question: 'Was ist SEO-Optimierung und in wie fern kann ich es in mein Projekt integrieren?',
    answer: (
      <div className="space-y-4">
        <p>
          SEO steht für Suchmaschinenoptimierung — kurz gesagt: Ihr Geschäft wird dort besser auffindbar, wo Ihre Kunden suchen. Wer bei Google nach Ihrem Angebot sucht, soll Sie finden.
        </p>
        <p>
          Bei jeder Website, die wir erstellen, ist SEO selbstverständlich inklusive. Wir optimieren Struktur, Inhalte und technische Details von Anfang an so, dass Sie bestmöglich gefunden werden.
        </p>
        <p>
          SEO bieten wir aber auch als einzelne Dienstleistung an — für Unternehmen, die bereits einen Online-Auftritt haben und ihre Sichtbarkeit gezielt verbessern möchten. Sprechen Sie uns einfach darauf an.
        </p>
      </div>
    )
  },
  {
    question: 'Wie verläuft das Erstgespräch?',
    answer: (
      <p>
        Das Erstgespräch dauert etwa 20–30 Minuten und ist komplett kostenlos sowie unverbindlich. Wir lernen uns kennen, besprechen und visualisieren Ihre Ziele und klären erste Fragen zu Ihrem Projekt.
      </p>
    )
  },
  {
    question: 'Wie viel muss ich in mein Projekt investieren?',
    answer: (
      <div className="space-y-4">
        <p>
          Wir möchten transparent sein – deshalb finden Sie für unsere Webdesign-Pakete eine übersichtliche Preisübersicht auf unserer Website. Bei anderen Dienstleistungen variiert der Umfang zu stark, um einen festen Preis nennen zu können.
        </p>
        <p>
          Sie sind sich noch nicht sicher, was Sie benötigen? Kein Problem – das können wir in Ruhe in einem Gespräch besprechen.
        </p>
      </div>
    )
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
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
