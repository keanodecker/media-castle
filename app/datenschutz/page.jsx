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
                <a href="mailto:info@media-castle.com" className="hover:text-primary transition-colors duration-200">
                  info@media-castle.com
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
                <a href="mailto:info@media-castle.com" className="hover:text-primary transition-colors duration-200">
                  info@media-castle.com
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
              <h2 className="text-xl font-semibold text-secondary mb-3">6. Cookies und Einwilligungsverwaltung</h2>

              <p className="mb-4">
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die in Ihrem Browser gespeichert
                werden. Beim erstmaligen Besuch unserer Website wird Ihnen ein Cookie-Banner angezeigt, über den
                Sie Ihre Einwilligung zur Verwendung optionaler Cookies erteilen oder ablehnen können.
              </p>

              <h3 className="text-base font-semibold text-secondary mt-6 mb-3">Verwendete Cookie-Kategorien</h3>

              <div className="space-y-4">
                {[
                  {
                    name: 'Notwendige Cookies',
                    basis: 'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am technischen Betrieb)',
                    desc: 'Diese Cookies sind für den technischen Betrieb der Website erforderlich und können nicht deaktiviert werden. Sie speichern z. B. Ihre Cookie-Einwilligung (LocalStorage-Key: "cookieConsent"). Ohne diese Cookies kann die Website nicht ordnungsgemäß funktionieren.',
                    active: true,
                  },
                  {
                    name: 'Funktionale Cookies',
                    basis: 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
                    desc: 'Diese Cookies ermöglichen erweiterte Funktionen und eine Personalisierung. Aktuell werden keine funktionalen Drittanbieter-Cookies gesetzt.',
                    active: false,
                  },
                  {
                    name: 'Analyse-Cookies',
                    basis: 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
                    desc: 'Diese Cookies helfen uns zu verstehen, wie Besucher die Website nutzen. Aktuell sind keine Analyse-Dienste aktiv. Es wird kein Google Analytics, kein Matomo oder vergleichbares Tracking eingesetzt.',
                    active: false,
                  },
                  {
                    name: 'Marketing-Cookies',
                    basis: 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
                    desc: 'Diese Cookies dienen der Schaltung personalisierter Werbung. Aktuell sind keine Marketing- oder Retargeting-Dienste aktiv. Es wird kein Meta Pixel, kein Google Ads Tracking oder Ähnliches eingesetzt.',
                    active: false,
                  },
                ].map((cat) => (
                  <div key={cat.name} className="pl-4 border-l-2 border-border">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className="font-semibold text-secondary text-sm">{cat.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cat.active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                        {cat.active ? 'Aktuell aktiv' : 'Aktuell nicht aktiv'}
                      </span>
                    </div>
                    <p className="text-sm mb-1">
                      <span className="text-secondary/60">Rechtsgrundlage: </span>{cat.basis}
                    </p>
                    <p className="text-sm">{cat.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-base font-semibold text-secondary mt-6 mb-3">Einwilligung widerrufen oder ändern</h3>
              <p className="mb-3">
                Sie können Ihre Cookie-Einwilligung jederzeit widerrufen oder anpassen. Klicken Sie dazu auf
                den Link <strong>„Cookie-Einstellungen"</strong> im Footer dieser Website. Es öffnet sich
                das Einstellungsmenü, in dem Sie Ihre Auswahl anpassen und speichern können.
              </p>
              <p>
                Alternativ können Sie Ihre gespeicherte Einwilligung manuell löschen, indem Sie in Ihrem
                Browser unter „Entwicklertools → Application → Local Storage" den Eintrag mit dem
                Schlüssel <code className="text-xs bg-muted px-1 py-0.5 rounded">cookieConsent</code> entfernen.
                Beim nächsten Seitenbesuch wird der Cookie-Banner erneut angezeigt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary mb-3">7. Aktualität</h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2025.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
