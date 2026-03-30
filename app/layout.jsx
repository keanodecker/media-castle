import './globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Media Castle - Ihre digitale Präsenz',
  description: 'Professionelle Webdesign und Online Präsenz Lösungen von Media Castle. Wir gestalten Ihren Auftritt im Netz.',
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
