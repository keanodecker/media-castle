
import React from 'react';

const PartnerLogoBar = () => {
  const partners = [
    { initials: 'CS', color: 'bg-secondary', name: 'Cesar Sicherheit', delay: 'animation-delay-100' },
    { initials: 'CD', color: 'bg-secondary', name: 'Cesar Dienstleistungen', delay: 'animation-delay-200' },
    { initials: 'BL', color: 'bg-yellow-500', name: 'Ballonkunst Lahr', delay: 'animation-delay-300' },
    { initials: 'KSL', color: 'bg-red-600', name: 'KSL Boxing Lahr', delay: 'animation-delay-400' },
    { initials: 'FV', color: 'bg-green-600', name: 'Fußballverein Lahr West', delay: 'animation-delay-500' }
  ];

  return (
    <div className="py-16 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium tracking-wide uppercase text-muted-foreground mb-10">
          Vertrauen von lokalen Unternehmen
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center justify-center animate-bounce ${partner.delay}`}
              style={{ animationDuration: '3s' }}
              title={partner.name}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${partner.color} flex items-center justify-center shadow-sm transition-transform hover:scale-105`}>
                <span className="text-white font-bold text-xl md:text-2xl tracking-wider">
                  {partner.initials}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogoBar;
