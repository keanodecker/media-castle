'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Clock, ChevronDown } from 'lucide-react';

const C = {
  bg: '#0e0805',
  bgCard: '#1a0f08',
  bgSection: '#130b05',
  text: '#f2ede4',
  textMuted: '#a89880',
  gold: '#c9a84c',
  goldLight: '#e8c97a',
  border: 'rgba(201,168,76,0.2)',
};

function DemoBanner() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#0D2144',
        color: 'white',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '13px',
        lineHeight: '1.4',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span
          style={{
            background: '#2563EB',
            color: 'white',
            fontSize: '11px',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '99px',
            letterSpacing: '0.05em',
            flexShrink: 0,
          }}
        >
          DEMO
        </span>
        <span style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '600px' }}>
          Dies ist eine Demo-Vorlage von{' '}
          <strong style={{ color: 'white' }}>Media Castle</strong> — kein echtes Restaurant.
          Alle Inhalte sind fiktiv.
        </span>
      </div>
      <Link
        href="/leistungen/webdesign-vorlagen"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: 'rgba(255,255,255,0.7)',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
      >
        <ArrowLeft style={{ width: '15px', height: '15px' }} />
        Zurück zur Übersicht
      </Link>
    </div>
  );
}

const menuData = [
  {
    category: 'Antipasti',
    items: [
      { name: 'Carpaccio di Manzo', desc: 'Rinderfilet, Rucola, Parmesanspäne, Limettendressing', price: '16' },
      { name: 'Burrata con Prosciutto', desc: 'Cremige Burrata, Parmaschinken, Basilikumöl', price: '14' },
      { name: 'Bruschetta al Tartufo', desc: 'Geröstetes Landbrot, schwarze Trüffelcreme, Fleur de Sel', price: '12' },
    ],
  },
  {
    category: 'Primi Piatti',
    items: [
      { name: 'Tagliatelle al Tartufo Nero', desc: 'Hausgemachte Tagliatelle, schwarze Trüffelsauce, Parmigiano', price: '28' },
      { name: 'Risotto ai Frutti di Mare', desc: 'Cremiges Risotto, Meeresfrüchte, Safranschaum', price: '26' },
      { name: 'Pappardelle all\'Anatra', desc: 'Breite Nudeln, geschmorte Entenbrust, Rosmarin, Rotwein', price: '24' },
    ],
  },
  {
    category: 'Secondi',
    items: [
      { name: 'Osso Buco alla Milanese', desc: 'Geschmorte Kalbshaxe, Gremolata, Safranrisotto', price: '36' },
      { name: 'Branzino al Forno', desc: 'Ofengebackener Wolfsbarsch, Kapernbutter, Gemüse der Saison', price: '32' },
      { name: 'Filetto di Manzo', desc: 'Rinderfilet, Trüffeljus, Kartoffelgratin, Spinat', price: '42' },
    ],
  },
];

export default function BellaVistaPage() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: 'DM Sans, sans-serif', minHeight: '100vh' }}>
      <DemoBanner />

      {/* Nav */}
      <nav
        style={{
          position: 'fixed',
          top: '41px',
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '20px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(to bottom, rgba(14,8,5,0.95) 0%, rgba(14,8,5,0) 100%)',
        }}
      >
        <div>
          <p style={{ color: C.gold, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '2px', maxWidth: 'none' }}>
            Ristorante
          </p>
          <h2 style={{ color: C.text, fontSize: '1.5rem', fontFamily: 'DM Serif Display, serif', letterSpacing: '-0.01em', margin: 0 }}>
            Bella Vista
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['Speisekarte', 'Über uns', 'Kontakt'].map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                color: 'rgba(242,237,228,0.7)',
                textDecoration: 'none',
                fontSize: '14px',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(242,237,228,0.7)')}
            >
              {item}
            </a>
          ))}
          <a
            href="#reservierung"
            style={{
              background: C.gold,
              color: '#1a0d05',
              padding: '10px 24px',
              borderRadius: '99px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C.goldLight)}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
          >
            Reservierung
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          paddingTop: '41px',
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 50%),
            linear-gradient(135deg, #1a0d05 0%, #0e0805 50%, #1f1008 100%)
          `,
          overflow: 'hidden',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '700px',
            border: '1px solid rgba(201,168,76,0.06)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            border: '1px solid rgba(201,168,76,0.08)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div style={{ textAlign: 'center', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <p style={{ color: C.gold, fontSize: '12px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '28px', maxWidth: 'none' }}>
            Seit 1987 · Lahr am Rhein
          </p>
          <h1
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontFamily: 'DM Serif Display, serif',
              color: C.text,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              marginBottom: '28px',
            }}
          >
            Bella Vista
          </h1>
          <div
            style={{
              width: '60px',
              height: '1px',
              background: C.gold,
              margin: '0 auto 28px',
              opacity: 0.6,
            }}
          />
          <p
            style={{
              fontSize: '1.2rem',
              color: 'rgba(242,237,228,0.7)',
              maxWidth: '480px',
              lineHeight: 1.7,
              margin: '0 auto 48px',
            }}
          >
            Wo jeder Abend zur Erinnerung wird.
            Authentische italienische Küche, mit Liebe zum Detail.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#menu"
              style={{
                background: C.gold,
                color: '#1a0d05',
                padding: '14px 36px',
                borderRadius: '99px',
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: '0.04em',
                textDecoration: 'none',
              }}
            >
              Speisekarte
            </a>
            <a
              href="#reservierung"
              style={{
                border: `1px solid ${C.gold}60`,
                color: C.gold,
                padding: '14px 36px',
                borderRadius: '99px',
                fontSize: '14px',
                letterSpacing: '0.04em',
                textDecoration: 'none',
              }}
            >
              Tisch reservieren
            </a>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}>
          <ChevronDown style={{ width: '24px', height: '24px', color: C.gold, opacity: 0.5 }} />
        </div>
      </section>

      {/* Menu */}
      <section id="menu" style={{ padding: '100px 24px', background: C.bgSection }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: C.gold, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px', maxWidth: 'none' }}>
              Unsere Karte
            </p>
            <h2 style={{ color: C.text, fontFamily: 'DM Serif Display, serif', fontSize: '2.5rem', margin: 0 }}>
              Speisekarte
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {menuData.map((cat) => (
              <div key={cat.category}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    marginBottom: '28px',
                  }}
                >
                  <div style={{ width: '32px', height: '1px', background: C.gold, opacity: 0.5 }} />
                  <p
                    style={{
                      color: C.gold,
                      fontSize: '11px',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      maxWidth: 'none',
                    }}
                  >
                    {cat.category}
                  </p>
                  <div style={{ flex: 1, height: '1px', background: C.border }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '24px',
                        paddingBottom: '24px',
                        borderBottom: `1px solid ${C.border}`,
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <p style={{ color: C.text, fontWeight: 500, marginBottom: '6px', maxWidth: 'none', fontSize: '16px' }}>
                          {item.name}
                        </p>
                        <p style={{ color: C.textMuted, fontSize: '14px', lineHeight: 1.6, maxWidth: 'none' }}>
                          {item.desc}
                        </p>
                      </div>
                      <p style={{ color: C.gold, fontWeight: 600, fontSize: '16px', flexShrink: 0, maxWidth: 'none' }}>
                        € {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: C.textMuted, fontSize: '13px', marginTop: '48px', maxWidth: 'none' }}>
            Alle Preise in Euro inkl. MwSt. · Desserts auf Anfrage · Allergenliste auf Wunsch erhältlich
          </p>
        </div>
      </section>

      {/* About */}
      <section
        style={{
          padding: '100px 24px',
          background: `linear-gradient(135deg, #1a0f08 0%, #0e0805 100%)`,
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <p style={{ color: C.gold, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px', maxWidth: 'none' }}>
              Unsere Geschichte
            </p>
            <h2 style={{ color: C.text, fontFamily: 'DM Serif Display, serif', fontSize: '2.2rem', marginBottom: '24px', lineHeight: 1.2 }}>
              Leidenschaft seit 1987
            </h2>
            <p style={{ color: C.textMuted, lineHeight: 1.8, marginBottom: '20px', maxWidth: 'none', fontSize: '15px' }}>
              Was als kleines Familienrestaurant begann, ist heute ein Ort, an dem sich Gäste aus der ganzen Region treffen.
              Unsere Küche basiert auf Rezepten, die über Generationen weitergegeben wurden — verfeinert mit Einflüssen der Saison und der Region.
            </p>
            <p style={{ color: C.textMuted, lineHeight: 1.8, maxWidth: 'none', fontSize: '15px' }}>
              Wir glauben, dass gutes Essen Zeit braucht. Deshalb bereiten wir jeden Gang frisch zu, verwenden saisonale Zutaten
              und nehmen uns die Ruhe, die es braucht, um etwas Besonderes entstehen zu lassen.
            </p>
          </div>
          <div
            style={{
              aspectRatio: '3/4',
              borderRadius: '16px',
              background: `
                radial-gradient(ellipse at 30% 40%, rgba(201,168,76,0.15) 0%, transparent 60%),
                linear-gradient(160deg, #2d1507 0%, #1a0d05 100%)
              `,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: `1px solid ${C.border}`,
            }}
          >
            <p style={{ color: C.gold, opacity: 0.3, fontSize: '13px', letterSpacing: '0.2em', maxWidth: 'none' }}>
              Foto folgt
            </p>
          </div>
        </div>
      </section>

      {/* Info + Reservierung */}
      <section id="reservierung" style={{ padding: '100px 24px', background: C.bgSection }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ color: C.text, fontFamily: 'DM Serif Display, serif', fontSize: '2.5rem', marginBottom: '16px' }}>
              Tisch reservieren
            </h2>
            <p style={{ color: C.textMuted, fontSize: '16px', maxWidth: 'none' }}>
              Reservierungen nehmen wir gerne telefonisch oder per E-Mail entgegen.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }}>
            {[
              { icon: Phone, label: 'Telefon', value: '+49 (0)7821 000000' },
              { icon: MapPin, label: 'Adresse', value: 'Musterstraße 12, 77933 Lahr' },
              { icon: Clock, label: 'Öffnungszeiten', value: 'Di–So 18:00–23:00 Uhr' },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                style={{
                  background: C.bgCard,
                  border: C.border + ' 1px solid',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  textAlign: 'center',
                }}
              >
                <Icon style={{ width: '24px', height: '24px', color: C.gold, margin: '0 auto 12px' }} />
                <p style={{ color: C.textMuted, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', maxWidth: 'none' }}>
                  {label}
                </p>
                <p style={{ color: C.text, fontSize: '15px', maxWidth: 'none' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 24px', borderTop: `1px solid ${C.border}`, textAlign: 'center' }}>
        <p style={{ color: C.gold, fontFamily: 'DM Serif Display, serif', fontSize: '1.5rem', marginBottom: '8px' }}>
          Bella Vista
        </p>
        <p style={{ color: C.textMuted, fontSize: '13px', maxWidth: 'none' }}>
          © 2025 Bella Vista · Ristorante · Lahr am Rhein
        </p>
      </footer>
    </div>
  );
}
