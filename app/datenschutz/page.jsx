import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Media Castle gemäß DSGVO.',
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
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

          <h1 className="text-4xl font-bold text-secondary mb-12">Datenschutzerklärung</h1>

          <div className="space-y-10 text-secondary/80 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">1. Verantwortlicher</h2>
              <p>
                Media Castle<br />
                Keano Decker<br />
                Erlenweg 4<br />
                77948 Friesenheim<br />
                Deutschland<br />
                <br />
                E-Mail:{' '}
                <a href="mailto:info@keanodecker.com" className="hover:text-primary transition-colors duration-200">
                  info@keanodecker.com
                </a>
                <br />
                Telefon:{' '}
                <a href="tel:+4915161277685" className="hover:text-primary transition-colors duration-200">
                  +49 151 61277685
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">2. Hosting</h2>
              <p>
                Diese Website wird gehostet von Vercel Inc., 440 N Barranca Ave #4133, Covina,
                CA 91723, USA. Vercel ist Empfänger Ihrer personenbezogenen Daten und als
                Auftragsverarbeiter für uns tätig. Beim Besuch unserer Website erfasst Vercel
                automatisch sogenannte Server-Logfiles, die Ihr Browser übermittelt. Dies umfasst
                unter anderem IP-Adresse, Browsertyp, Betriebssystem und Datum/Uhrzeit des
                Zugriffs. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors duration-200"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">3. Kontaktformular</h2>
              <p>
                Wenn Sie uns über das Kontaktformular auf unserer Website eine Nachricht senden,
                werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse und Ihre Nachricht)
                zum Zweck der Bearbeitung Ihrer Anfrage bei uns gespeichert. Diese Daten geben wir
                nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von
                Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit der Erfüllung eines Vertrags
                zusammenhängt, oder auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres
                berechtigten Interesses an der Beantwortung Ihrer Anfrage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">4. Ihre Rechte</h2>
              <p className="mb-4">Sie haben jederzeit das Recht auf:</p>
              <ul className="space-y-2 pl-0">
                {[
                  'Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)',
                  'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
                  'Löschung Ihrer Daten (Art. 17 DSGVO)',
                  'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
                  'Datenübertragbarkeit (Art. 20 DSGVO)',
                  'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
                ].map((right) => (
                  <li key={right} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
                <a href="mailto:info@keanodecker.com" className="hover:text-primary transition-colors duration-200">
                  info@keanodecker.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">5. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
                Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die zuständige
                Aufsichtsbehörde in Baden-Württemberg ist:
              </p>
              <div className="mt-4 pl-4 border-l-2 border-border">
                <p>
                  Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
                  Baden-Württemberg<br />
                  Postfach 10 29 32<br />
                  70025 Stuttgart<br />
                  <a
                    href="https://www.baden-wuerttemberg.datenschutz.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors duration-200"
                  >
                    www.baden-wuerttemberg.datenschutz.de
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">6. Aktualität</h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2025.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
