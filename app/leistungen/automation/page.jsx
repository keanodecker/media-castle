'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  CalendarClock,
  FileStack,
  Star,
  Shield,
  Hand,
  Phone,
  ClipboardList,
  Lightbulb,
  Settings,
  Headphones,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LeverSwitch } from '@/components/ui/lever-switch';

export default function LeistungenAutomationPage() {
  const services = [
    {
      icon: Mail,
      title: 'Ihr Posteingang arbeitet für Sie',
      description:
        'Anfragen werden automatisch klassifiziert und beantwortet. Wiederkehrende Standardanfragen erledigt die KI selbstständig, komplexere leitet sie strukturiert an Sie weiter. Newsletter und automatische Antworten werden professionell und persönlich gehalten.',
      examples: [
        'Eingehende Kundenanfragen vorab beantworten',
        'Terminbestätigungen versenden',
        'Nachfass-Mails an Interessenten',
        'Newsletter mit personalisierten Inhalten',
      ],
    },
    {
      icon: CalendarClock,
      title: 'Termine ohne Telefon-Pingpong',
      description:
        'Kunden buchen direkt online, Erinnerungen werden automatisch versendet, Verschiebungen koordiniert. Synchronisation mit bestehenden Kalendern (Google, Outlook, Apple).',
      examples: [
        'Online-Terminbuchung mit Verfügbarkeitsprüfung',
        'Automatische Erinnerungen 24 h vorher',
        'No-Show-Reduktion durch Bestätigungs-Anfragen',
        'Synchronisation mehrerer Mitarbeiter-Kalender',
      ],
    },
    {
      icon: FileStack,
      title: 'Weniger Papierkram, mehr Zeit',
      description:
        'Wiederkehrende Dokument-Aufgaben werden automatisiert. Daten aus eingehenden Dokumenten werden erfasst und strukturiert abgelegt. Sie behalten die Kontrolle und müssen am Ende nur noch bestätigen.',
      examples: [
        'Eingehende PDFs (Lieferscheine, Bestätigungen) automatisch erfassen',
        'Daten in bestehende Systeme übertragen',
        'Dokumente automatisch kategorisiert ablegen',
        'Wiederkehrende Korrespondenz vorbereiten',
      ],
    },
    {
      icon: Star,
      title: 'Mehr echte Bewertungen, ohne nachzufragen',
      description:
        'Nach jedem Kundenkontakt wird automatisch eine freundliche, persönlich formulierte Bitte um eine Google-Bewertung versendet — zum richtigen Zeitpunkt, mit dem richtigen Tonfall. Negative Stimmungen werden vorab erkannt und an Sie geleitet, damit nur zufriedene Kunden öffentlich bewerten.',
      examples: [
        'Automatische Bewertungs-Anfrage 1–2 Tage nach dem Besuch',
        'Filter-Logik für unzufriedene Kunden',
        'Tracking, welche Anfragen zu Bewertungen geführt haben',
      ],
    },
  ];

  const trust = [
    {
      icon: Shield,
      title: 'Datenschutz',
      description:
        'Alle Lösungen werden DSGVO-konform eingerichtet. Ihre Daten und die Ihrer Kunden bleiben geschützt.',
    },
    {
      icon: Hand,
      title: 'Kontrolle',
      description:
        'Sie behalten immer die finale Entscheidung. Die KI bereitet vor, Sie geben frei.',
    },
    {
      icon: Phone,
      title: 'Persönliche Betreuung',
      description:
        'Wir sind kein anonymer Großanbieter. Wenn etwas ist, greifen Sie zum Telefon und sprechen direkt mit uns.',
    },
  ];

  const process = [
    {
      icon: ClipboardList,
      title: 'Erstgespräch & Analyse',
      description:
        'Wir schauen uns gemeinsam an, welche Aufgaben in Ihrem Betrieb täglich anfallen.',
    },
    {
      icon: Lightbulb,
      title: 'Konzept & Empfehlung',
      description:
        'Wir zeigen Ihnen, welche Automatisierungen für Sie sinnvoll sind und welche nicht.',
    },
    {
      icon: Settings,
      title: 'Einrichtung & Training',
      description:
        'Wir richten alles für Sie ein und erklären Ihnen die wenigen Klicks, die Sie noch selbst machen müssen.',
    },
    {
      icon: Headphones,
      title: 'Laufende Betreuung',
      description:
        'Sie haben einen festen Ansprechpartner aus der Region. Bei Fragen oder Anpassungen einfach anrufen.',
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="mb-6 text-secondary">Lassen Sie die KI Ihre Routine übernehmen</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Wir richten Ihnen intelligente Automatisierungen ein, die wiederkehrende Aufgaben im Hintergrund erledigen — damit Sie Ihre Zeit für Ihre Gäste, Ihre Patienten oder Ihre Kunden nutzen können.
            </p>
            <LeverSwitch />
          </motion.div>

          {/* Einleitungs-Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="card-clean max-w-3xl mx-auto mb-20"
          >
            <h2 className="mb-4 text-secondary">Was ist Büro-Automation eigentlich?</h2>
            <p className="text-secondary/80 leading-relaxed">
              Büro-Automation bedeutet, dass wiederkehrende Aufgaben im Hintergrund erledigt werden — Sie bestätigen am Ende nur. Sie müssen keine komplizierte Software bedienen und sich in nichts einarbeiten. Wir richten alles für Sie ein und betreuen es laufend, sodass Sie sich auf Ihr eigentliches Geschäft konzentrieren können.
            </p>
          </motion.div>

          {/* Services Grid — foil background */}
          <div
            className="rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden"
            style={{
              background: `
                radial-gradient(ellipse at 12% 20%, rgba(191,219,254,0.85) 0%, transparent 45%),
                radial-gradient(ellipse at 88% 8%,  rgba(255,255,255,0.95) 0%, transparent 38%),
                radial-gradient(ellipse at 55% 52%, rgba(239,246,255,0.7) 0%, transparent 55%),
                radial-gradient(ellipse at 75% 85%, rgba(147,197,253,0.6) 0%, transparent 42%),
                radial-gradient(ellipse at 18% 78%, rgba(255,255,255,0.9) 0%, transparent 32%),
                radial-gradient(ellipse at 40% 5%,  rgba(219,234,254,0.7) 0%, transparent 40%),
                linear-gradient(135deg, #dbeafe 0%, #ffffff 35%, #eff6ff 65%, #bfdbfe 100%)
              `,
              boxShadow: 'inset 0 2px 40px rgba(37,99,235,0.06)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none rounded-3xl"
              style={{
                background:
                  'linear-gradient(160deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(191,219,254,0.2) 100%)',
              }}
            />

            <div className="relative grid md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const depths = [-10, 4, -8, 6];
                const depth = depths[index] ?? 0;
                const isRaised = depth < 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    style={{ transform: `translateY(${depth}px)` }}
                  >
                    <div
                      className="h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
                      style={{
                        background: isRaised
                          ? 'rgba(255,255,255,0.95)'
                          : 'rgba(239,246,255,0.75)',
                        boxShadow: isRaised
                          ? '0 8px 32px rgba(37,99,235,0.12), 0 2px 8px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)'
                          : '0 2px 8px rgba(37,99,235,0.06), inset 0 2px 6px rgba(37,99,235,0.05)',
                        border: isRaised
                          ? '1px solid rgba(255,255,255,0.9)'
                          : '1px solid rgba(147,197,253,0.4)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-secondary">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.examples.map((ex, eIndex) => (
                          <li
                            key={eIndex}
                            className="flex items-start gap-2 text-sm text-secondary/80"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Prozess */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="mb-4 text-secondary">So läuft das ab</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Vom ersten Gespräch bis zur laufenden Betreuung — Sie wissen jederzeit, was passiert.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="card-clean relative"
                >
                  <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vertrauens-Bereich */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {trust.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="card-clean text-center"
                >
                  <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Abschluss-CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="card-clean max-w-3xl mx-auto">
              <h2 className="mb-4 text-secondary">Bereit, Ihre Routine abzugeben?</h2>
              <p className="text-secondary/80 mb-8 leading-relaxed">
                Im kostenlosen Erstgespräch schauen wir uns gemeinsam an, welche Aufgaben sich bei Ihnen lohnen zu automatisieren — unverbindlich und konkret.
              </p>
              <Link href="/kontakt" className="btn-primary">
                Kostenloses Erstgespräch vereinbaren
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
