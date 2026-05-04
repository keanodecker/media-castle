'use client';

import { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronUp, Lock } from 'lucide-react';

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

const STORAGE_KEY = 'mc_cookie_consent_v2';

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
      className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
      } ${checked ? 'bg-primary' : 'bg-gray-200'}`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition duration-200 ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
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
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4"
      style={{ background: 'rgba(13,33,68,0.65)', backdropFilter: 'blur(4px)' }}
    >
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-border flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border flex-shrink-0">
          <h2 className="text-xl font-semibold text-secondary" style={{ fontFamily: 'DM Serif Display, serif' }}>
            Cookie-Einstellungen
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
            aria-label="Schließen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6 py-4">
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            Wählen Sie aus, welche Cookies Sie zulassen möchten. Notwendige Cookies können nicht deaktiviert werden.
          </p>
          <div className="space-y-3">
            {CATEGORIES.map((cat) => (
              <div key={cat.key} className="border border-border rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between p-4">
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === cat.key ? null : cat.key)}
                    className="flex items-center gap-2 text-left flex-1 min-w-0"
                  >
                    <span className="font-medium text-secondary text-sm">{cat.label}</span>
                    {expanded === cat.key ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                    {cat.required && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Lock className="w-3 h-3" />
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
                  <div className="px-4 pb-4">
                    <p className="text-xs text-muted-foreground leading-relaxed">{cat.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 pb-6 pt-4 border-t border-border flex-shrink-0 flex flex-col sm:flex-row gap-3">
          <button onClick={() => onSave(local)} className="flex-1 btn-outline text-sm py-2.5">
            Auswahl speichern
          </button>
          <button onClick={onRejectAll} className="flex-1 btn-outline text-sm py-2.5">
            Reject all
          </button>
          <button onClick={onAcceptAll} className="flex-1 btn-primary text-sm py-2.5">
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showConfigure, setShowConfigure] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>(ALL_REJECTED);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setShowBanner(true);
    } else {
      try {
        setConsent({ ...ALL_REJECTED, ...JSON.parse(saved), necessary: true });
      } catch {
        setShowBanner(true);
      }
    }

    const handleReopen = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          setConsent({ ...ALL_REJECTED, ...JSON.parse(saved), necessary: true });
        } catch {
          setConsent(ALL_REJECTED);
        }
      }
      setShowConfigure(true);
    };

    window.addEventListener('showCookieSettings', handleReopen);
    return () => window.removeEventListener('showCookieSettings', handleReopen);
  }, []);

  const persist = (c: CookieConsent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...c, necessary: true }));
    setConsent({ ...c, necessary: true });
    setShowBanner(false);
    setShowConfigure(false);
  };

  if (!mounted) return null;

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
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9998] w-[calc(100vw-2rem)] max-w-sm"
          style={{ animation: 'slideUp 0.45s cubic-bezier(0.16,1,0.3,1) both' }}
        >
          <style>{`
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(32px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <div className="bg-white border border-border rounded-3xl shadow-2xl p-5">
            <p className="font-semibold text-secondary mb-2 text-sm">Diese Website verwendet Cookies</p>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Wir setzen technisch notwendige Cookies ein, um den Betrieb dieser Website zu gewährleisten. Mit Ihrer
              Einwilligung können wir optionale Cookies aktivieren. Mehr in unserer{' '}
              <a href="/datenschutz" className="underline underline-offset-2 hover:text-primary transition-colors">
                Datenschutzerklärung
              </a>
              .
            </p>
            <div className="flex flex-col gap-2">
              <button onClick={() => persist(ALL_ACCEPTED)} className="btn-primary text-sm py-2.5 w-full">
                Accept all
              </button>
              <div className="flex gap-2">
                <button onClick={() => persist(ALL_REJECTED)} className="btn-outline text-sm py-2.5 flex-1">
                  Reject all
                </button>
                <button onClick={() => setShowConfigure(true)} className="btn-outline text-sm py-2.5 flex-1">
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
