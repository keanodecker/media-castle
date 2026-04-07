import './globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  metadataBase: new URL('https://media-castle.de'),
  title: {
    default: 'Media Castle',
    template: '%s | Media Castle',
  },
  description: 'Professionelles Webdesign und Online Marketing für Unternehmen in Lahr und Umgebung. Individuelle Websites, SEO & Social Media — aus einer Hand.',
  keywords: [
    'Webdesign Lahr', 'Website erstellen Lahr', 'Webdesign Friesenheim',
    'SEO Lahr', 'Online Marketing Lahr', 'Social Media Management Lahr',
    'Webdesign Agentur Lahr', 'Homepage erstellen Lahr', 'Website Agentur Ortenau',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Media Castle',
    title: 'Media Castle | Webdesign & Online Marketing Lahr',
    description: 'Professionelles Webdesign und Online Marketing für Unternehmen in Lahr und Umgebung.',
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
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
