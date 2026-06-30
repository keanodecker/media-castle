'use client';

import { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { updateGtagConsent } from '@/lib/consent';

type CookieConsent = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

type Category = {
  key: keyof CookieConsent;
  label: string;
  description: string;
  required: boolean;
};

const STORAGE_KEY = 'mc_cookie_consent_v3';

const CATEGORIES: Category[] = [
  {
    key: 'necessary',
    label: 'Notwendige Cookies',
    description:
      'Diese Cookies sind für den technischen Betrieb der Website erforderlich und können nicht deaktiviert werden.',
    required: true,
  },
  {
    key: 'functional',
    label: 'Funktionale Cookies',
    description:
      'Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung. Aktuell werden keine funktionalen Drittanbieter-Cookies gesetzt.',
    required: false,
  },
  {
    key: 'analytics',
    label: 'Analyse-Cookies',
    description:
      'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren. Aktuell sind keine Analyse-Dienste aktiv.',
    required: false,
  },
  {
    key: 'marketing',
    label: 'Marketing-Cookies',
    description:
      'Diese Cookies werden genutzt, um Ihnen auf Ihre Interessen zugeschnittene Werbung anzuzeigen. Aktuell sind keine Marketing-Dienste aktiv.',
    required: false,
  },
];

const ALL_ACCEPTED: CookieConsent = { necessary: true, functional: true, analytics: true, marketing: true };
const ALL_REJECTED: CookieConsent = { necessary: true, functional: false, analytics: false, marketing: false };

function Toggle({ checked, disabled, onChange }: { checked: boolean; disabled: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      style={{
        position: 'relative',
        display: 'inline-flex',
        height: '24px',
        width: '44px',
        flexShrink: 0,
        borderRadius: '9999px',
        border: '2px solid transparent',
        transition: 'background-color 200ms',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        backgroundColor: checked ? '#2563EB' : '#e5e7eb',
      }}
    >
      <span
        style={{
          pointerEvents: 'none',
          display: 'inline-block',
          height: '20px',
          width: '20px',
          borderRadius: '9999px',
          backgroundColor: '#fff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          transition: 'transform 200ms',
          transform: checked ? 'translateX(20px)' : 'translateX(0)',
        }}
      />
    </button>
  );
}

function ConfigureModal({
  current,
  onSave,
  onAcceptAll,
  onRejectAll,
  onClose,
}: {
  current: CookieConsent;
  onSave: (c: CookieConsent) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onClose: () => void;
}) {
  const [local, setLocal] = useState<CookieConsent>({ ...current });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2147483646,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: 'rgba(13,33,68,0.65)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          width: '100%',
          maxWidth: '560px',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          border: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px 24px 16px',
            borderBottom: '1px solid #e5e7eb',
            flexShrink: 0,
          }}
        >
          <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#0D2144', fontFamily: 'DM Serif Display, serif', margin: 0 }}>
            Cookie-Einstellungen
          </h2>
          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748b',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Schließen"
          >
            <X style={{ width: '16px', height: '16px' }} />
          </button>
        </div>

        <div style={{ overflowY: 'auto', flex: 1, padding: '16px 24px' }}>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px', lineHeight: 1.6 }}>
            Wählen Sie aus, welche Cookies Sie zulassen möchten. Notwendige Cookies können nicht deaktiviert werden.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {CATEGORIES.map((cat) => (
              <div key={cat.key} style={{ border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === cat.key ? null : cat.key)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      textAlign: 'left',
                      flex: 1,
                      minWidth: 0,
                      background: 'transparent',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{ fontWeight: 500, color: '#0D2144', fontSize: '14px' }}>{cat.label}</span>
                    {expanded === cat.key ? (
                      <ChevronUp style={{ width: '16px', height: '16px', color: '#64748b', flexShrink: 0 }} />
                    ) : (
                      <ChevronDown style={{ width: '16px', height: '16px', color: '#64748b', flexShrink: 0 }} />
                    )}
                  </button>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, marginLeft: '16px' }}>
                    {cat.required && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#64748b' }}>
                        <Lock style={{ width: '12px', height: '12px' }} />
                        Immer aktiv
                      </span>
                    )}
                    <Toggle
                      checked={cat.required ? true : local[cat.key]}
                      disabled={cat.required}
                      onChange={(v) => setLocal((prev) => ({ ...prev, [cat.key]: v }))}
                    />
                  </div>
                </div>
                {expanded === cat.key && (
                  <div style={{ padding: '0 16px 16px' }}>
                    <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{cat.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            padding: '16px 24px 24px',
            borderTop: '1px solid #e5e7eb',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
              onClick={() => onAcceptAll()}
              style={{
                flex: 1,
                fontSize: '14px',
                padding: '10px 20px',
                backgroundColor: '#2563EB',
                color: '#fff',
                border: 'none',
                borderRadius: '9999px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Alle akzeptieren
            </button>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => onSave(local)}
                style={{
                  flex: 1,
                  fontSize: '14px',
                  padding: '10px 16px',
                  backgroundColor: '#fff',
                  color: '#0D2144',
                  border: '1px solid #0D2144',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Auswahl speichern
              </button>
              <button
                onClick={() => onRejectAll()}
                style={{
                  flex: 1,
                  fontSize: '14px',
                  padding: '10px 16px',
                  backgroundColor: '#fff',
                  color: '#0D2144',
                  border: '1px solid #0D2144',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Alle ablehnen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);
  const [showConfigure, setShowConfigure] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>(ALL_REJECTED);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = { ...ALL_REJECTED, ...JSON.parse(saved), necessary: true };
        setConsent(parsed);
        setShowBanner(false);
        updateGtagConsent(parsed);
      }
    } catch {
      // ignore
    }

    const handleReopen = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setConsent({ ...ALL_REJECTED, ...JSON.parse(saved), necessary: true });
      } catch {
        // ignore
      }
      setShowConfigure(true);
    };

    window.addEventListener('showCookieSettings', handleReopen);
    return () => window.removeEventListener('showCookieSettings', handleReopen);
  }, []);

  const persist = (c: CookieConsent) => {
    const finalConsent = { ...c, necessary: true };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(finalConsent));
    } catch {
      // ignore
    }
    setConsent(finalConsent);
    setShowBanner(false);
    setShowConfigure(false);
    updateGtagConsent(finalConsent);
  };

  return (
    <>
      {showConfigure && (
        <ConfigureModal
          current={consent}
          onSave={persist}
          onAcceptAll={() => persist(ALL_ACCEPTED)}
          onRejectAll={() => persist(ALL_REJECTED)}
          onClose={() => setShowConfigure(false)}
        />
      )}

      {showBanner && !showConfigure && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 2147483647,
            width: 'min(calc(100vw - 32px), 380px)',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '24px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
              padding: '20px',
            }}
          >
            <p style={{ fontWeight: 600, color: '#0D2144', marginBottom: '8px', marginTop: 0, fontSize: '14px' }}>
              Diese Website verwendet Cookies
            </p>
            <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.6, marginBottom: '16px', marginTop: 0 }}>
              Wir setzen technisch notwendige Cookies ein, um den Betrieb dieser Website zu gewährleisten. Mit Ihrer
              Einwilligung können wir optionale Cookies aktivieren. Mehr in unserer{' '}
              <a
                href="/datenschutz"
                style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: 'inherit' }}
              >
                Datenschutzerklärung
              </a>
              .
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => persist(ALL_ACCEPTED)}
                style={{
                  fontSize: '14px',
                  padding: '10px 20px',
                  backgroundColor: '#2563EB',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  width: '100%',
                }}
              >
                Alle akzeptieren
              </button>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => persist(ALL_REJECTED)}
                  style={{
                    flex: 1,
                    fontSize: '14px',
                    padding: '10px 16px',
                    backgroundColor: '#fff',
                    color: '#0D2144',
                    border: '1px solid #0D2144',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Alle ablehnen
                </button>
                <button
                  onClick={() => setShowConfigure(true)}
                  style={{
                    flex: 1,
                    fontSize: '14px',
                    padding: '10px 16px',
                    backgroundColor: '#fff',
                    color: '#0D2144',
                    border: '1px solid #0D2144',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
