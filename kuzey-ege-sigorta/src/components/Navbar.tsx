import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { BrandShieldLogo } from './BrandShieldLogo';
import { buildWhatsAppUrl } from '../data/insuranceData';

interface NavbarProps {
  onJumpToQuote: () => void;
}

const NAV_LINKS = [
  { href: '#hizmetler', label: 'Hizmetlerimiz' },
  { href: '#ofisimiz', label: 'Ofisimiz' },
  { href: '#kampanyalar', label: 'Kampanyalar' },
  { href: '#yorumlar', label: 'Yorumlar' },
  { href: '#iletisim', label: 'İletişim' },
];

export function Navbar({ onJumpToQuote }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_1px_12px_rgba(11,25,44,0.05)]'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/70'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-8">
        {/* Zone 1: Brand Wordmark + Official Circular Shield */}
        <a
          href="#top"
          className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] shrink-0"
          aria-label="Kuzey Ege Sigorta Ana Sayfa"
        >
          <BrandShieldLogo variant="dark" size="sm" />
        </a>

        {/* Zone 2: Center Navigation Links */}
        <nav
          aria-label="Ana Menü"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#0B192C] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#2563EB] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Right Actions */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href={buildWhatsAppUrl('Merhaba, Kuzey Ege Sigorta’dan hızlı bilgi almak istiyorum.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 text-sm font-medium text-[#0B192C] transition-colors duration-150 hover:border-slate-300 hover:bg-slate-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            <MessageCircle className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={onJumpToQuote}
            className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-[#2563EB] px-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B192C]"
          >
            <span>Hemen Teklif Al</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Menu Trigger (keeps sticky bar strictly 64px high) */}
        <div className="flex sm:hidden items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onJumpToQuote}
            className="inline-flex h-10 items-center rounded-xl bg-[#2563EB] px-3.5 text-xs font-semibold text-white whitespace-nowrap shrink-0 cursor-pointer"
          >
            Teklif Al
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0B192C] hover:bg-slate-50 cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 shadow-lg">
          <nav aria-label="Mobil Menü" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex h-11 items-center rounded-lg px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0B192C]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={buildWhatsAppUrl('Merhaba, Kuzey Ege Sigorta’dan teklif almak istiyorum.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-[#0B192C]"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              <span>WhatsApp ile Ulaşın</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
