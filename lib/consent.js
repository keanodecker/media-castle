// Google Consent Mode v2 helper
// Maps our cookie consent categories to Google's gtag consent format
// and updates the consent state at runtime.

export function consentToGtagFormat(c) {
  return {
    ad_storage: c.marketing ? 'granted' : 'denied',
    ad_user_data: c.marketing ? 'granted' : 'denied',
    ad_personalization: c.marketing ? 'granted' : 'denied',
    analytics_storage: c.analytics ? 'granted' : 'denied',
    functionality_storage: c.functional ? 'granted' : 'denied',
    personalization_storage: c.functional ? 'granted' : 'denied',
    security_storage: 'granted',
  };
}

export function updateGtagConsent(consent) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', consentToGtagFormat(consent));
}
