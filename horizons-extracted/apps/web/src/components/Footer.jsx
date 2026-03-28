
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Leistungen', path: '/leistungen/webdesign' },
    { name: 'Partner', path: '/partner' },
    { name: 'Über uns', path: '/uber-uns' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          {/* Brand & Info */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="https://horizons-cdn.hostinger.com/92867de6-5ee6-4d9a-8fe4-ba55e55f27ef/b840180955bbfb55bf7f66f45d10f1e8.png" 
                alt="Castle Media Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Professionelle Webdesign und Online Präsenz Lösungen. Wir gestalten deinen Auftritt im Netz.
            </p>
            <div className="space-y-2 text-white/80">
              <p>info@keanodecker.com</p>
              <p>Friesenheim / Deutschland</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 flex flex-col md:items-center">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
              <nav className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-white/70 hover:text-primary transition-colors duration-200 w-fit"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* CTA */}
          <div className="md:col-span-4 flex flex-col md:items-end">
            <h4 className="text-lg font-semibold mb-6 text-white">Projekt starten</h4>
            <p className="text-white/70 mb-6 md:text-right leading-relaxed">
              Bereit für deine neue digitale Präsenz? Lass uns unverbindlich sprechen.
            </p>
            <Link 
              to="/kontakt" 
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
            >
              Kostenloses Erstgespräch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {currentYear} Castle Media. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <Link to="/datenschutz" className="hover:text-white transition-colors duration-200">
              Datenschutz
            </Link>
            <Link to="/impressum" className="hover:text-white transition-colors duration-200">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
