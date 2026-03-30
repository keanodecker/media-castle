'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Bitte fülle alle Felder aus');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Bitte gib eine gültige E-Mail-Adresse ein');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      toast.success('Nachricht gesendet! Wir melden uns bald bei Ihnen.');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error('Fehler beim Senden. Bitte schreiben Sie uns direkt an info@keanodecker.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const processSteps = [
    {
      icon: "💬",
      title: "Erstgespräch",
      description: "Wir lernen uns kennen, besprechen Ihre Ziele und klären alle Fragen — kostenlos und unverbindlich."
    },
    {
      icon: "📋",
      title: "Konzept",
      description: "Wir erstellen ein maßgeschneidertes Konzept für Ihr Projekt mit klarem Zeitplan und Preisangebot."
    },
    {
      icon: "🚀",
      title: "Umsetzung",
      description: "Wir setzen Ihr Projekt professionell um — Sie sind jederzeit informiert und können Feedback geben."
    },
    {
      icon: "✅",
      title: "Launch & Support",
      description: "Ihre Website geht live. Wir bleiben als Partner an Ihrer Seite für Updates und Wartung."
    }
  ];

  return (
    <>
      <Header />

      <main className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="mb-6 text-secondary">Kontakt</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Haben Sie Fragen oder möchten ein Projekt starten? Wir freuen uns auf Ihre Nachricht.
            </p>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-24"
          >
            <h2 className="text-center mb-12 text-secondary">So arbeiten wir zusammen</h2>
            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border z-0" />

              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-3">{index + 1}. {step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-clean"
            >
              <h2 className="mb-8 text-secondary">Schreiben Sie uns</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-secondary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                    placeholder="Ihr Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-secondary">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-secondary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                    placeholder="ihre@email.de"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-secondary">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-secondary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-medium transition-all duration-200 hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Wird gesendet...'
                  ) : (
                    <>
                      Absenden
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="card-clean p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-secondary">E-Mail</h3>
                    <a
                      href="mailto:info@keanodecker.com"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      info@keanodecker.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-clean p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-secondary">Telefon</h3>
                    <a
                      href="tel:+4915159167426"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      +49 151 59167426
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-clean p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-secondary">Standort</h3>
                    <p className="text-muted-foreground">
                      Friesenheim / Deutschland
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-clean p-8 bg-muted/30">
                <h3 className="font-semibold mb-4 text-secondary">Bei Fragen gerne melden</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wir beantworten in der Regel alle Anfragen innerhalb von 24 Stunden.
                  Für dringende Anliegen können Sie uns auch direkt per E-Mail kontaktieren.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
