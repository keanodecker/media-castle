import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Impressum',
  description: 'Impressum von Media Castle — Angaben gemäß § 5 TMG.',
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="text-4xl font-bold text-secondary mb-12">Impressum</h1>

          <div className="space-y-10 text-secondary/80 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">Angaben gemäß § 5 TMG</h2>
              <p>
                Media Castle<br />
                Keano Decker<br />
                Erlenweg 4<br />
                77948 Friesenheim<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">Kontakt</h2>
              <p>
                Telefon:{' '}
                <a href="tel:+4915161277685" className="hover:text-primary transition-colors duration-200">
                  +49 151 61277685
                </a>
                <br />
                E-Mail:{' '}
                <a href="mailto:info@media-castle.com" className="hover:text-primary transition-colors duration-200">
                  info@media-castle.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">Steuernummer</h2>
              <p className="text-muted-foreground italic">[Wird nachgetragen]</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Keano Decker<br />
                Erlenweg 4<br />
                77948 Friesenheim
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
                und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
