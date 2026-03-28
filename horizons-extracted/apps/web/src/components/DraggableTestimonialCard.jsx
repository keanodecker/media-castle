
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const DraggableTestimonialCard = () => {
  const testimonials = [
    {
      id: 1,
      company: 'Autohaus Lahr',
      reviewer: 'Thomas Schneider',
      role: 'Geschäftsführer',
      review: 'Castle Media hat unsere Online-Präsenz komplett transformiert. Die neue Website generiert deutlich mehr Anfragen und die Zusammenarbeit war durchweg professionell.',
      rating: 5
    },
    {
      id: 2,
      company: 'Friseursalon Harmonie',
      reviewer: 'Julia Hoffmann',
      role: 'Inhaberin',
      review: 'Endlich eine Website, die zu unserem Salon passt. Modern, elegant und einfach zu bedienen. Unsere Kunden lieben das neue Online-Buchungssystem.',
      rating: 5
    },
    {
      id: 3,
      company: 'Restaurant Alte Mühle',
      reviewer: 'Marco Bianchi',
      role: 'Küchenchef & Inhaber',
      review: 'Die Social Media Betreuung durch Castle Media hat unsere Reichweite verdoppelt. Authentische Inhalte, die unsere Gäste begeistern.',
      rating: 5
    }
  ];

  const [cards, setCards] = useState(testimonials);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.1}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-effect-light rounded-2xl p-6 cursor-grab active:cursor-grabbing"
        >
          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>

          <Quote className="w-8 h-8 text-primary/30 mb-3" />

          <p className="text-foreground/80 leading-relaxed mb-6">
            {testimonial.review}
          </p>

          <div className="border-t border-border pt-4">
            <p className="font-semibold text-foreground">{testimonial.company}</p>
            <p className="text-sm text-muted-foreground">{testimonial.reviewer}</p>
            <p className="text-xs text-muted-foreground/70">{testimonial.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DraggableTestimonialCard;
