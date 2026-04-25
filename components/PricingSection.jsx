import Link from 'next/link';
import { Check } from 'lucide-react';

const adminDashboardFeature = {
  label: 'Bei Bedarf individuelles Admin-Dashboard',
  href: '/leistungen/admin-dashboard'
};

const plans = [
  {
    name: 'Landing Page',
    price: '700',
    prefix: 'ab ',
    monthly: '50',
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
    price: '1.150',
    prefix: 'ab ',
    monthly: '70',
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
    price: '1.500',
    prefix: 'ab ',
    monthly: '90',
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
          <h2 className="mb-4 text-secondary">Transparente Preise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wählen Sie das passende Paket für Ihre Anforderungen. Keine versteckten Kosten, klare Kommunikation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-xl ${
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
                <p className="text-sm text-muted-foreground h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  {plan.prefix && <span className="text-xl font-medium text-secondary">{plan.prefix}</span>}
                  <span className="text-4xl font-bold text-secondary">€{plan.price}</span>
                  <span className="text-muted-foreground">einmalig</span>
                </div>
                <div className="mt-2 text-sm font-medium text-primary">
                  + €{plan.monthly} / Monat Instandhaltung
                </div>
              </div>

              <ul className="space-y-4 mb-6">
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

              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                Endpreis abhängig vom konkreten Projektumfang. Für ein verbindliches Angebot vereinbaren Sie gerne ein kostenloses Erstgespräch.
              </p>

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

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            * Alle Preise sind Nettopreise zzgl. der gesetzlichen MwSt. Die monatliche Instandhaltung umfasst Updates, Backups und technischen Support und variiert je nach Aufwand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
