'use client';

import Link from 'next/link';
import { ArrowLeft, Phone, MapPin, Clock, Leaf, Users, Heart } from 'lucide-react';

const C = {
  bg: '#ffffff',
  bgWarm: '#faf7f2',
  bgGreen: '#f0f7f2',
  text: '#1a1a1a',
  textMuted: '#6b7280',
  green: '#2d7a4f',
  greenLight: '#3d9a63',
  accent: '#f59e0b',
  border: '#e5e7eb',
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
        <span style={{ color: 'rgba(255,255,255,0.85)' }}>
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

const tagesgerichte = [
  {
    tag: 'Montag',
    name: 'Linsensuppe mit Saitenwurst',
    desc: 'Hausgemachte Linsensuppe, grobe Saitenwurst, Essig & Öl',
    price: '9.50',
    veg: false,
  },
  {
    tag: 'Dienstag',
    name: 'Maultaschen in Brühe',
    desc: 'Selbstgemachte Maultaschen, Rinderfleischbrühe, Schnittlauch',
    price: '10.50',
    veg: false,
  },
  {
    tag: 'Mittwoch',
    name: 'Kürbisrisotto',
    desc: 'Cremiges Hokkaidokürbis-Risotto, Parmesan, Pinienkerne',
    price: '11.00',
    veg: true,
  },
  {
    tag: 'Donnerstag',
    name: 'Kalbsrahmgeschnetzeltes',
    desc: 'Mit Rösti, Champignons und Preiselbeeren',
    price: '13.50',
    veg: false,
  },
  {
    tag: 'Freitag',
    name: 'Forelle Müllerin',
    desc: 'Frische Forelle aus der Region, Mandelbutter, Petersilienkartoffeln',
    price: '14.00',
    veg: false,
  },
];

const values = [
  {
    icon: Leaf,
    title: 'Regional & Saisonal',
    desc: 'Wir beziehen unsere Zutaten so weit wie möglich von Betrieben aus der Ortenau. Kurze Wege, frische Ware.',
  },
  {
    icon: Heart,
    title: 'Selbst gemacht',
    desc: 'Von der Suppe bis zur Soße — bei uns wird noch wirklich gekocht. Kein Fertigprodukt, kein Kompromiss.',
  },
  {
    icon: Users,
    title: 'Für alle da',
    desc: 'Ob Mittagstisch mit Kollegen oder Abendessen mit der Familie — bei uns sind alle willkommen.',
  },
];

export default function StadtKuechePage() {
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
          padding: '16px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: C.green,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Leaf style={{ width: '18px', height: '18px', color: 'white' }} />
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: '15px', lineHeight: 1, marginBottom: '2px', maxWidth: 'none' }}>
              Stadtküche Lahr
            </p>
            <p style={{ fontSize: '11px', color: C.textMuted, maxWidth: 'none', lineHeight: 1 }}>
              Ehrliche Küche seit 2010
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {['Mittagstisch', 'Speisekarte', 'Über uns', 'Kontakt'].map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                color: C.textMuted,
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.green)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#kontakt"
            style={{
              background: C.green,
              color: 'white',
              padding: '10px 22px',
              borderRadius: '99px',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C.greenLight)}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.green)}
          >
            Tisch reservieren
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          paddingTop: 'calc(41px + 73px)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: `
            radial-gradient(ellipse at 70% 30%, rgba(245,158,11,0.12) 0%, transparent 55%),
            radial-gradient(ellipse at 20% 80%, rgba(45,122,79,0.10) 0%, transparent 50%),
            linear-gradient(135deg, #f0f7f2 0%, #faf7f2 50%, #fef9ec 100%)
          `,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(45,122,79,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', width: '100%' }}>
          <div>
            <span
              style={{
                display: 'inline-block',
                background: `${C.green}15`,
                color: C.green,
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '6px 14px',
                borderRadius: '99px',
                marginBottom: '24px',
                border: `1px solid ${C.green}30`,
              }}
            >
              Mittagstisch · Abendkarte · Regional
            </span>
            <h1
              style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                lineHeight: 1.1,
                color: C.text,
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              Ehrliche Küche.
              <br />
              <span style={{ color: C.green }}>Echte</span>{' '}
              Gastfreundschaft.
            </h1>
            <p style={{ fontSize: '17px', color: C.textMuted, lineHeight: 1.75, marginBottom: '36px', maxWidth: '440px' }}>
              Täglich frisch, regional sourced, selbst gemacht.
              Willkommen in der Stadtküche — Ihrem Stammlokal in der Lahrer Innenstadt.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="#mittagstisch"
                style={{
                  background: C.green,
                  color: 'white',
                  padding: '14px 32px',
                  borderRadius: '99px',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                }}
              >
                Mittagstisch ansehen
              </a>
              <a
                href="#kontakt"
                style={{
                  border: `2px solid ${C.border}`,
                  color: C.text,
                  padding: '14px 32px',
                  borderRadius: '99px',
                  fontSize: '15px',
                  textDecoration: 'none',
                  background: 'white',
                }}
              >
                Tisch reservieren
              </a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { bg: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)', label: 'Täglich frisch' },
              { bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', label: 'Regional' },
              { bg: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)', label: 'Vegetarisch' },
              { bg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', label: 'Saisonal' },
            ].map(({ bg, label }, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '16px',
                  background: bg,
                  aspectRatio: '1/1',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '16px',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(0,0,0,0.5)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mittagstisch */}
      <section id="mittagstisch" style={{ padding: '100px 40px', background: C.bg }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p style={{ color: C.green, fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px', maxWidth: 'none' }}>
                Montag bis Freitag · 11:30–14:00 Uhr
              </p>
              <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2.4rem', color: C.text, margin: 0 }}>
                Diese Woche
              </h2>
            </div>
            <div
              style={{
                background: C.bgGreen,
                border: `1px solid ${C.green}25`,
                borderRadius: '12px',
                padding: '12px 20px',
                textAlign: 'right',
              }}
            >
              <p style={{ fontSize: '12px', color: C.textMuted, maxWidth: 'none' }}>inkl. Salat & Dessert</p>
              <p style={{ fontSize: '14px', color: C.green, fontWeight: 700, maxWidth: 'none' }}>+ 3,50 €</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {tagesgerichte.map((g) => (
              <div
                key={g.tag}
                style={{
                  background: C.bgWarm,
                  border: `1px solid ${C.border}`,
                  borderRadius: '16px',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <div
                  style={{
                    minWidth: '80px',
                    textAlign: 'center',
                    background: C.bgGreen,
                    borderRadius: '10px',
                    padding: '8px 12px',
                    border: `1px solid ${C.green}20`,
                  }}
                >
                  <p style={{ fontSize: '11px', color: C.green, fontWeight: 600, maxWidth: 'none' }}>{g.tag}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <p style={{ fontWeight: 600, fontSize: '15px', maxWidth: 'none' }}>{g.name}</p>
                    {g.veg && (
                      <span style={{ fontSize: '10px', background: '#dcfce7', color: C.green, borderRadius: '99px', padding: '2px 8px', fontWeight: 600 }}>
                        Vegetarisch
                      </span>
                    )}
                  </div>
                  <p style={{ color: C.textMuted, fontSize: '13px', maxWidth: 'none' }}>{g.desc}</p>
                </div>
                <p style={{ color: C.green, fontWeight: 700, fontSize: '16px', flexShrink: 0, maxWidth: 'none' }}>
                  € {g.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '100px 40px', background: C.bgGreen }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2.4rem', color: C.text }}>
              Warum die Stadtküche?
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: '20px',
                  padding: '36px 28px',
                  transition: 'box-shadow 0.2s',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${C.green}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Icon style={{ width: '22px', height: '22px', color: C.green }} />
                </div>
                <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.4rem', color: C.text, marginBottom: '12px' }}>
                  {title}
                </h3>
                <p style={{ color: C.textMuted, lineHeight: 1.7, fontSize: '14px', maxWidth: 'none' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section style={{ padding: '100px 40px', background: C.bg }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2.4rem', color: C.text }}>
              Einblicke
            </h2>
            <p style={{ color: C.textMuted, marginTop: '12px', maxWidth: 'none' }}>
              Unser Restaurant, unsere Gerichte, unser Team.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              { bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 60%, #f59e0b 100%)', span: '1', label: 'Tagesgericht' },
              { bg: 'linear-gradient(135deg, #d1fae5 0%, #6ee7b7 60%, #34d399 100%)', span: '1', label: 'Frische Zutaten' },
              { bg: 'linear-gradient(135deg, #fee2e2 0%, #fca5a5 60%, #f87171 100%)', span: '1', label: 'Gemütliche Atmosphäre' },
              { bg: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 60%, #60a5fa 100%)', span: '2', label: 'Terrasse im Sommer' },
              { bg: 'linear-gradient(135deg, #ede9fe 0%, #c4b5fd 60%, #a78bfa 100%)', span: '1', label: 'Desserts' },
            ].map(({ bg, span, label }, i) => (
              <div
                key={i}
                style={{
                  background: bg,
                  borderRadius: '14px',
                  aspectRatio: span === '2' ? '2/1' : '1/1',
                  gridColumn: span === '2' ? 'span 2' : 'span 1',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '16px',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" style={{ padding: '100px 40px', background: C.bgWarm }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2.4rem', color: C.text, marginBottom: '16px' }}>
            Besuchen Sie uns
          </h2>
          <p style={{ color: C.textMuted, fontSize: '16px', marginBottom: '56px', maxWidth: 'none' }}>
            Reservierungen unter der folgenden Nummer oder einfach vorbeikommen — solange der Tisch frei ist, sind Sie herzlich willkommen.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { icon: Phone, label: 'Telefon', value: '+49 (0)7821 000000' },
              { icon: MapPin, label: 'Adresse', value: 'Stadtstraße 8, 77933 Lahr' },
              { icon: Clock, label: 'Öffnungszeiten', value: 'Mo–Fr 11:30–14:30 & 17:30–22:00' },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: '16px',
                  padding: '28px 20px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: `${C.green}12`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 14px',
                  }}
                >
                  <Icon style={{ width: '20px', height: '20px', color: C.green }} />
                </div>
                <p style={{ fontSize: '11px', color: C.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px', maxWidth: 'none' }}>
                  {label}
                </p>
                <p style={{ color: C.text, fontWeight: 500, fontSize: '14px', maxWidth: 'none' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '32px 40px',
          background: C.text,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Leaf style={{ width: '14px', height: '14px', color: 'white' }} />
          </div>
          <p style={{ color: 'white', fontWeight: 600, fontSize: '14px', maxWidth: 'none' }}>Stadtküche Lahr</p>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', maxWidth: 'none' }}>
          © 2025 Stadtküche Lahr · Impressum · Datenschutz
        </p>
      </footer>
    </div>
  );
}
