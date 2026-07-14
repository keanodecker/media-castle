import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Poppins — a warm geometric sans, the closest free relative to Barth's
// "Liebling Pro" (round, wide, open apertures). Used across the whole site.
const brandFont = Poppins({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.media-castle.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Media Castle — Ihre digitale Präsenz. Aus einer Hand.",
    template: "%s | Media Castle",
  },
  description:
    "Media Castle ist Ihr Partner für die komplette digitale Präsenz — Webdesign, SEO, Corporate Identity und Print. Ein Ansprechpartner, der sich um alles kümmert. Deutschlandweit.",
  keywords: [
    "Webdesign",
    "Webentwicklung",
    "SEO",
    "Online Präsenz",
    "Agentur",
    "Corporate Identity",
    "Media Castle",
    "Lahr",
    "Friesenheim",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Media Castle",
    title: "Media Castle — Ihre digitale Präsenz. Aus einer Hand.",
    description:
      "Webdesign, SEO, Corporate Identity und Print — ein Partner, der sich um Ihre komplette Online-Präsenz kümmert.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${brandFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
