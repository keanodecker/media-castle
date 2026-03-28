'use client';

import { motion } from 'framer-motion';
import { MapPin, Lightbulb, HeartHandshake as Handshake } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function UberUnsPage() {
  const trustPoints = [
    {
      icon: MapPin,
      title: 'Lokal in Lahr',
      description: 'Als lokales Unternehmen kennen wir die Region und ihre Bedürfnisse. Persönlicher Kontakt und kurze Wege sind für uns selbstverständlich.'
    },
    {
      icon: Lightbulb,
      title: 'Individuelle Lösungen',
      description: 'Jedes Projekt ist einzigartig. Wir entwickeln maßgeschneiderte Konzepte, die genau zu deinen Anforderungen und Zielen passen.'
    },
    {
      icon: Handshake,
      title: 'Langfristige Partnerschaft',
      description: 'Wir begleiten dich nicht nur bei der Umsetzung, sondern stehen dir auch danach als verlässlicher Partner zur Seite.'
    }
  ];

  return (
    <>
      <Header />

      <main className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h1 className="mb-8 text-secondary">Über Castle Media</h1>
            <div className="card-clean">
              <p className="text-lg text-secondary/80 leading-relaxed mb-6">
                Castle Media ist dein Partner für professionelle digitale Präsenz in Lahr und Umgebung.
                Wir verbinden kreatives Design mit technischer Expertise, um Websites und Online-Lösungen
                zu schaffen, die nicht nur gut aussehen, sondern auch messbare Ergebnisse liefern.
              </p>
              <p className="text-lg text-secondary/80 leading-relaxed">
                Unser Ziel ist es, kleinen und mittelständischen Unternehmen zu helfen, ihre digitale
                Präsenz zu stärken und online erfolgreich zu sein. Mit Leidenschaft, Fachwissen und
                einem klaren Fokus auf deine Bedürfnisse setzen wir deine Projekte um.
              </p>
            </div>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-center mb-12 text-secondary">Warum Castle Media?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="card-clean text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <point.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20"
          >
            <div className="card-clean max-w-4xl mx-auto bg-muted/30">
              <h2 className="text-center mb-8 text-secondary">Unsere Werte</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-secondary">Qualität</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir setzen auf höchste Qualitätsstandards in Design und Entwicklung.
                    Jedes Projekt wird mit Sorgfalt und Liebe zum Detail umgesetzt.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-secondary">Transparenz</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Offene Kommunikation und klare Prozesse sind die Basis unserer Zusammenarbeit.
                    Du weißt immer, woran wir arbeiten.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-secondary">Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir bleiben am Puls der Zeit und nutzen moderne Technologien,
                    um zukunftssichere Lösungen zu entwickeln.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-secondary">Verlässlichkeit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Auf uns kannst du zählen - von der ersten Idee bis zur langfristigen Betreuung.
                    Wir halten unsere Versprechen.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <h2 className="mb-4 text-secondary">Lass uns gemeinsam dein Projekt starten</h2>
            <p className="text-secondary/80 mb-8 max-w-2xl mx-auto">
              Bereit für deine neue digitale Präsenz? Kontaktiere uns für ein unverbindliches Erstgespräch.
            </p>
            <a href="/kontakt" className="btn-primary">
              Kostenloses Erstgespräch
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
