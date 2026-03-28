
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const PartnerMarquee = () => {
  const partners = [
    {
      name: 'PrintPro Lahr',
      reviewer: 'M. Fischer',
      review: 'Professionelle Zusammenarbeit, schnelle Umsetzung'
    },
    {
      name: 'FotoBase Studio',
      reviewer: 'S. Berger',
      review: 'Kreative Lösungen, die unsere Erwartungen übertroffen haben'
    },
    {
      name: 'HostingHub',
      reviewer: 'J. Müller',
      review: 'Zuverlässiger Partner für unsere digitale Infrastruktur'
    },
    {
      name: 'SEO Rhein',
      reviewer: 'K. Weber',
      review: 'Exzellente Beratung und messbare Ergebnisse'
    },
    {
      name: 'Cesar Sicherheit',
      reviewer: 'Cesar D.',
      review: 'Kompetent, verlässlich und immer erreichbar'
    }
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-medium tracking-wide uppercase text-muted-foreground">
          Unsere Partner
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -1920]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
          style={{ width: 'max-content' }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 glass-effect-light rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                "{partner.review}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{partner.name}</p>
                  <p className="text-sm text-muted-foreground">{partner.reviewer}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerMarquee;
