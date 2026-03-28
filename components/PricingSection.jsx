import Link from 'next/link';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Landing Page',
      price: '700',
      monthly: '55',
      description: 'Perfekt für den professionellen Start im Netz.',
      features: [
        'Individuelles Design',
        'Responsive Entwicklung',
        'Kontaktformular',
        'Basis SEO-Optimierung',
        'DSGVO-konform'
      ],
      recommended: false
    },
    {
      name: 'Landing Page Plus',
      price: '1.150',
      monthly: '75',
      description: 'Erweiterte Funktionen für mehr Reichweite.',
      features: [
        'Alles aus Landing Page',
        'Bis zu 5 Unterseiten',
        'Erweiterte SEO-Optimierung',
        'Google My Business Setup',
        'Performance Optimierung',
        'Content Management System'
      ],
      recommended: true
    },
    {
      name: 'Online Shop',
      price: '1.500',
      prefix: 'ab ',
      monthly: '120',
      description: 'Dein professioneller digitaler Verkaufskanal.',
      features: [
        'Individuelles Shop-Design',
        'Zahlungsanbieter-Integration',
        'Produktverwaltung',
        'Warenkorb & Checkout',
        'Rechtssichere Umsetzung',
        'Schulung zur Shop-Pflege'
      ],
      recommended: false
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-secondary">Transparente Preise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wähle das passende Paket für deine Anforderungen. Keine versteckten Kosten, klare Kommunikation.
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

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-secondary/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/kontakt"
                className={`w-full flex justify-center ${
                  plan.recommended ? 'btn-primary' : 'btn-outline'
                }`}
              >
                Kostenloses Erstgespräch
              </Link>
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
