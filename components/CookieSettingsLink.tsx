'use client';

export default function CookieSettingsLink() {
  const open = () => window.dispatchEvent(new Event('showCookieSettings'));
  return (
    <button
      onClick={open}
      className="text-white/60 hover:text-white transition-colors duration-200 text-sm bg-transparent border-none p-0 cursor-pointer"
    >
      Cookie-Einstellungen
    </button>
  );
}
