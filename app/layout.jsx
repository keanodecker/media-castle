import './globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Castle Media - Deine digitale Präsenz',
  description: 'Professionelle Webdesign und Online Präsenz Lösungen von Castle Media. Wir gestalten deinen Auftritt im Netz.',
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
