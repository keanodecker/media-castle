import Image from 'next/image';

const partners = [
  {
    name: 'Cesar Sicherheit',
    logo: '/Logo-Kunden/Cesarsicherheit-Logo-Website.png.png',
    delay: 'animation-delay-100'
  },
  {
    name: 'Cesar Dienstleistungen',
    logo: '/Logo-Kunden/Cesar_Dienstleistungen-Logo-Website.png',
    delay: 'animation-delay-200'
  },
  {
    name: 'Ballonkunst Lahr',
    logo: '/Logo-Kunden/Ballongkunst_Lahr-Logo-Website.png.png',
    delay: 'animation-delay-300'
  },
  {
    name: 'KSL Boxing Lahr',
    logo: '/Logo-Kunden/KSL-Boxing-Logo-Website.png.png',
    delay: 'animation-delay-400'
  },
  {
    name: 'Fußballverein Lahr West',
    initials: 'FV',
    color: 'bg-green-600',
    delay: 'animation-delay-500'
  }
];

const PartnerLogoBar = () => {
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
              {partner.logo ? (
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white border border-border flex items-center justify-center shadow-sm transition-transform hover:scale-105 overflow-hidden p-2">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={96}
                    height={96}
                    className="object-contain w-full h-full"
                  />
                </div>
              ) : (
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${partner.color} flex items-center justify-center shadow-sm transition-transform hover:scale-105`}>
                  <span className="text-white font-bold text-xl md:text-2xl tracking-wider">
                    {partner.initials}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogoBar;
