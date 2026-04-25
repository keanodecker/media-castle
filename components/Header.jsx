'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasDarkHero, setHasDarkHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkPosition = () => {
      const heroEl = document.querySelector('[data-dark-hero]');
      if (heroEl) {
        setHasDarkHero(true);
        setIsScrolled(heroEl.getBoundingClientRect().bottom < 80);
      } else {
        setHasDarkHero(false);
        setIsScrolled(false);
      }
    };
    checkPosition();
    window.addEventListener('scroll', checkPosition, { passive: true });
    return () => window.removeEventListener('scroll', checkPosition);
  }, [pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLeistungenOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Leistungen',
      path: '/leistungen',
      dropdown: [
        { name: 'Webdesign', path: '/leistungen/webdesign' },
        { name: 'Online Präsenz', path: '/leistungen/online-prasenz' },
        { name: 'Automation', path: '/leistungen/automation' }
      ]
    },
    { name: 'Partner', path: '/partner' },
    { name: 'Über uns', path: '/uber-uns' },
    { name: 'FAQ', path: '/#faq' }
  ];

  const isActive = (path) => {
    if (path === '/#faq') return false;
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const useLightText = hasDarkHero && !isScrolled;

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center gap-4 lg:gap-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 z-50 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20">
          <img
            src="https://horizons-cdn.hostinger.com/92867de6-5ee6-4d9a-8fe4-ba55e55f27ef/b840180955bbfb55bf7f66f45d10f1e8.png"
            alt="Media Castle Logo"
            className="h-10 w-auto transition-[filter] duration-500 ease-in-out"
            style={{ filter: useLightText ? 'brightness(0) invert(1)' : 'none' }}
          />
        </Link>

        {/* Desktop Navigation Pill */}
        <div className={`hidden lg:flex flex-1 items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
          useLightText
            ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white'
            : 'bg-white shadow-md border border-border text-secondary'
        }`}>
          <nav className="flex items-center gap-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                        isActive(link.path)
                          ? 'text-primary'
                          : useLightText ? 'hover:bg-white/10' : 'hover:bg-secondary/5'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-border">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            className={`block px-4 py-3 text-sm transition-all duration-200 ${
                              pathname === item.path
                                ? 'text-primary bg-primary/5 font-medium'
                                : 'text-secondary hover:bg-secondary/5'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.path}
                    onClick={link.path === '/#faq' ? (e) => {
                      const el = document.getElementById('faq');
                      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
                    } : undefined}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-primary'
                        : useLightText ? 'hover:bg-white/10' : 'hover:bg-secondary/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <Link
            href="/kontakt"
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors active:scale-95"
          >
            Kostenloses Erstgespräch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex-1 flex justify-end">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-3 rounded-full z-50 transition-colors ${
              useLightText && !isMobileMenuOpen
                ? 'bg-white/10 backdrop-blur-md text-white border border-white/20'
                : 'bg-white text-secondary shadow-md border border-border'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-white pt-28 px-4 z-40 overflow-y-auto"
          >
            <nav className="max-w-md mx-auto flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-border">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsLeistungenOpen(!isLeistungenOpen)}
                        className="w-full flex items-center justify-between py-4 text-secondary font-medium text-lg"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isLeistungenOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isLeistungenOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-4 flex flex-col gap-3">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.path}
                                  href={item.path}
                                  className={`block text-base transition-colors duration-200 ${
                                    pathname === item.path
                                      ? 'text-primary font-medium'
                                      : 'text-secondary/80 hover:text-secondary'
                                  }`}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.path}
                      onClick={link.path === '/#faq' ? (e) => {
                        const el = document.getElementById('faq');
                        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }
                      } : undefined}
                      className={`block py-4 font-medium text-lg transition-colors duration-200 ${
                        isActive(link.path)
                          ? 'text-primary'
                          : 'text-secondary hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-8 pb-12">
                <Link
                  href="/kontakt"
                  className="w-full flex justify-center bg-primary text-white px-6 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Kostenloses Erstgespräch
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
