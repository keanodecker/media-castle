import Link from 'next/link';
import { Check } from 'lucide-react';

const adminDashboardFeature = {
  label: 'Bei Bedarf individuelles Admin-Dashboard',
  href: '/leistungen/admin-dashboard'
};

const plans = [
  {
    name: 'Landing Page',
    description: 'Perfekt für den professionellen Start im Netz.',
    features: [
      { label: 'Individuelles Design' },
      { label: 'Responsive Entwicklung' },
      { label: 'Kontaktformular' },
      { label: 'Basis SEO-Optimierung' },
      { label: 'DSGVO-konform' },
      adminDashboardFeature
    ],
    recommended: false
  },
  {
    name: 'Landing Page Plus',
    description: 'Erweiterte Funktionen für mehr Reichweite.',
    features: [
      { label: 'Alles aus Landing Page' },
      { label: 'Erweiterte SEO-Optimierung' },
      { label: 'Individuelle Video- & Medieninhalte auf Anfrage' },
      { label: 'Integriertes Buchungssystem / Terminsystem' },
      adminDashboardFeature
    ],
    recommended: true
  },
  {
    name: 'Online Shop',
    description: 'Ihr professioneller digitaler Verkaufskanal.',
    features: [
      { label: 'Individuelles Shop-Design' },
      { label: 'Zahlungsanbieter-Integration' },
      { label: 'Produktverwaltung' },
      { label: 'Warenkorb & Checkout' },
      { label: 'Rechtssichere Umsetzung' },
      { label: 'Schulung zur Shop-Pflege' }
    ],
    recommended: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-secondary">Unsere Pakete im Überblick</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Maßgeschneiderte Lösungen für jede Anforderung — mit klarem Fokus auf Qualität, durchdachtem Design und nachhaltigem Nutzen für Ihr Unternehmen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-xl flex flex-col ${
                plan.recommended
                  ? 'border-2 border-primary shadow-lg scale-100 lg:scale-105 z-10'
                  : 'border border-border'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Empfohlen
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-secondary mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {feature.href ? (
                      <Link
                        href={feature.href}
                        className="text-secondary/80 text-sm underline underline-offset-2 hover:text-primary transition-colors duration-200"
                      >
                        {feature.label}
                      </Link>
                    ) : (
                      <span className="text-secondary/80 text-sm">{feature.label}</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <Link
                  href="/kontakt"
                  className={`w-full flex justify-center ${
                    plan.recommended ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  Kostenloses Erstgespräch
                </Link>
                <Link
                  href="/kontakt"
                  className="w-full text-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 underline underline-offset-4"
                >
                  Individuelles Angebot anfragen
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Jedes Projekt ist individuell — der Aufwand richtet sich nach Umfang, Funktionen und gewünschtem Pflegeumfang. Als junges Studio legen wir Wert auf langfristige Partnerschaften und besonders faire Konditionen, ohne Kompromisse bei Qualität und Design. Im kostenlosen Erstgespräch besprechen wir Ihre Vorstellungen und erstellen Ihnen anschließend ein transparentes, schriftliches Festpreis-Angebot — ohne versteckte Kosten.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
