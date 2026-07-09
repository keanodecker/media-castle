import './globals.css';
import { Toaster } from 'sonner';
import CookieBanner from '@/components/CookieBanner';
import AnalyticsScripts from '@/components/AnalyticsScripts';

export const metadata = {
  metadataBase: new URL('https://media-castle.de'),
  title: {
    default: 'Media Castle – Rund um Online Präsenz',
    template: '%s | Media Castle',
  },
  description: 'Professionelles Webdesign und Online Marketing für Unternehmen deutschlandweit. Individuelle Websites, SEO & Google My Business — aus einer Hand.',
  keywords: [
    'Webdesign', 'Website erstellen lassen', 'Webdesign Agentur',
    'SEO', 'Online Marketing', 'Google My Business',
    'Homepage erstellen', 'Website Agentur', 'Webdesign Deutschland',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Media Castle',
    title: 'Media Castle | Webdesign & Online Marketing',
    description: 'Professionelles Webdesign und Online Marketing für Unternehmen deutschlandweit.',
  },
  icons: {
    icon: 'https://horizons-cdn.hostinger.com/92867de6-5ee6-4d9a-8fe4-ba55e55f27ef/b840180955bbfb55bf7f66f45d10f1e8.png',
    shortcut: 'https://horizons-cdn.hostinger.com/92867de6-5ee6-4d9a-8fe4-ba55e55f27ef/b840180955bbfb55bf7f66f45d10f1e8.png',
    apple: 'https://horizons-cdn.hostinger.com/92867de6-5ee6-4d9a-8fe4-ba55e55f27ef/b840180955bbfb55bf7f66f45d10f1e8.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <AnalyticsScripts />
      </head>
      <body>
        {children}
        <Toaster />
        <CookieBanner />
      </body>
    </html>
  );
}
