'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PartnerPage() {
  const clients = [
    {
      name: 'Cesar Sicherheit',
      logo: '/Logo-Kunden/Cesarsicherheit-Logo-Website.png.png',
      services: ['Website Design', 'SEO', 'Google Maps Eintrag'],
      quote: 'Die neue Website spiegelt unsere Professionalität perfekt wider. Die Zusammenarbeit war unkompliziert und zielgerichtet.'
    },
    {
      name: 'Cesar Dienstleistungen',
      logo: '/Logo-Kunden/Cesar_Dienstleistungen-Logo-Website.png',
      services: ['Website Design', 'Social Media Setup', 'Firmendesign'],
      quote: 'Ein einheitlicher Auftritt, der bei unseren Kunden Vertrauen schafft. Wir sind rundum zufrieden mit dem Ergebnis.'
    },
    {
      name: 'Ballonkunst Lahr',
      logo: '/Logo-Kunden/Ballongkunst_Lahr-Logo-Website.png.png',
      services: ['Website Design', 'Online Präsenz', 'Flyer Design'],
      quote: 'Kreativ, farbenfroh und genau auf den Punkt. Unsere Online-Präsenz fängt jetzt die Magie unserer Arbeit ein.'
    },
    {
      name: 'KSL Boxing Lahr',
      logo: '/Logo-Kunden/KSL-Boxing-Logo-Website.png.png',
      services: ['Website Design', 'Social Media Management', 'Logodesign'],
      quote: 'Starker Auftritt für unseren Verein. Die neue Website und das Logo bringen unsere Energie perfekt rüber.'
    },
    {
      name: 'Fußballverein Lahr West',
      initials: 'FV',
      color: 'bg-green-600',
      services: ['Website Design', 'Google Maps Eintrag', 'Vereinsdesign'],
      quote: 'Endlich eine moderne Plattform für unsere Mitglieder und Fans. Die Umsetzung war schnell und professionell.'
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white mb-6">Unsere Partner</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Erfolgreiche Projekte und starke Partnerschaften. Entdecke, wie wir lokale Unternehmen digital voranbringen.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stacked Client Sections */}
          <div className="space-y-16">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  {/* Logo Box */}
                  <div className="flex-shrink-0">
                    {client.logo ? (
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white border border-border flex items-center justify-center shadow-md overflow-hidden p-3">
                        <Image
                          src={client.logo}
                          alt={`${client.name} Logo`}
                          width={128}
                          height={128}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl ${client.color} flex items-center justify-center shadow-md`}>
                        <span className="text-white font-bold text-3xl md:text-4xl tracking-wider">
                          {client.initials}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">{client.name}</h2>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Unsere Leistungen
                      </h4>
                      <ul className="flex flex-wrap gap-2">
                        {client.services.map((service, sIndex) => (
                          <li
                            key={sIndex}
                            className="px-3 py-1 bg-muted text-secondary rounded-full text-sm font-medium"
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="border-l-4 border-primary pl-4 py-1">
                      <p className="text-lg text-secondary/80 italic leading-relaxed mb-2">
                        "{client.quote}"
                      </p>
                      <footer className="text-sm font-medium text-muted-foreground">
                        — {client.name}
                      </footer>
                    </blockquote>
                  </div>
                </div>

                {/* Divider */}
                {index !== clients.length - 1 && (
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 text-center"
          >
            <div className="card-clean max-w-3xl mx-auto bg-muted/30">
              <h2 className="mb-4 text-secondary">Bereit für Ihr eigenes Projekt?</h2>
              <p className="text-secondary/80 mb-8 leading-relaxed">
                Werden Sie Teil unserer Erfolgsgeschichten. Lassen Sie uns gemeinsam herausfinden,
                wie wir Ihre digitale Präsenz auf das nächste Level heben können.
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
