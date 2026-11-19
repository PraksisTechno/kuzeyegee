import { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  Navigation,
  ArrowUpRight,
} from 'lucide-react';
import { BrandShieldLogo } from './BrandShieldLogo';
import {
  OFFICE_ZONES,
  OFFICE_ADDRESS,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL_ADDRESS,
  buildWhatsAppUrl,
  InsuranceType,
} from '../data/insuranceData';

interface ContactFooterProps {
  onSelectServiceFromFooter: (type: InsuranceType) => void;
}

export function ContactFooter({ onSelectServiceFromFooter }: ContactFooterProps) {
  const [activeZoneId, setActiveZoneId] = useState<string>('bergama');
  const activeZone =
    OFFICE_ZONES.find((zone) => zone.id === activeZoneId) ?? OFFICE_ZONES[0];

  return (
    <>
      {/* Split Contact & Map Section */}
      <section
        id="iletisim"
        className="border-t border-slate-200 bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: Agency Contact Details & Working Hours */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase">
                  Bize Ulaşın
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B192C] sm:text-4xl text-balance">
                  Bergama Merkez Ofisimizle Yanınızdayız
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Poliçe yenileme, yeni teklif talepleri veya acil hasar bildirimleri için
                  Bergama merkez ofisimizi ziyaret edebilir ya da telefon ve WhatsApp hattımızdan
                  doğrudan danışmanınıza ulaşabilirsiniz.
                </p>

                <dl className="mt-8 space-y-5 border-t border-slate-200 pt-6">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#2563EB]">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-slate-500">Merkez Ofis Adresi</dt>
                      <dd className="mt-0.5 text-sm font-medium text-[#0B192C]">
                        {OFFICE_ADDRESS}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#2563EB]">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-slate-500">
                        Doğrudan Telefon &amp; 7/24 Hasar Hattı
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold text-[#0B192C] tabular-nums">
                        <a href={PHONE_HREF} className="hover:text-[#2563EB]">
                          {PHONE_DISPLAY}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#2563EB]">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-slate-500">Çalışma Saatleri</dt>
                      <dd className="mt-0.5 text-sm text-[#0B192C]">
                        <div>
                          <span className="font-medium">Hafta içi:</span>{' '}
                          <span className="tabular-nums">08:30 - 18:30</span>
                        </div>
                        <div>
                          <span className="font-medium">Cumartesi:</span>{' '}
                          <span className="tabular-nums">09:00 - 16:00</span>
                        </div>
                        <span className="mt-0.5 block text-xs text-slate-500">
                          Acil Hasar &amp; Teklif Desteği: 7/24 Aktif
                        </span>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#2563EB]">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-slate-500">E-Posta</dt>
                      <dd className="mt-0.5 text-sm font-medium text-[#0B192C]">
                        <a
                          href={`mailto:${EMAIL_ADDRESS}`}
                          className="hover:text-[#2563EB] transition-colors"
                        >
                          {EMAIL_ADDRESS}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={buildWhatsAppUrl(
                    'Merhaba, Bergama ofisiniz ve sigorta teklifleri hakkında bilgi almak istiyorum.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#0B192C] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0F172A] whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  <span>WhatsApp Destek Hattı</span>
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-[#0B192C] transition-colors hover:bg-slate-50 whitespace-nowrap"
                >
                  <Phone className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
                  <span>Hemen Ara</span>
                </a>
              </div>
            </div>

            {/* Right: Interactive Embedded Map Placeholder for Bergama, İzmir */}
            <div className="flex flex-col lg:col-span-7">
              <div className="flex flex-1 flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_32px_-16px_rgba(11,25,44,0.08)]">
                {/* Interactive District Switcher Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-5 py-3.5">
                  <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 p-1">
                    {OFFICE_ZONES.map((zone) => {
                      const active = zone.id === activeZoneId;
                      return (
                        <button
                          key={zone.id}
                          type="button"
                          onClick={() => setActiveZoneId(zone.id)}
                          className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                            active
                              ? 'bg-white text-[#0B192C] shadow-sm'
                              : 'text-slate-600 hover:text-[#0B192C]'
                          }`}
                        >
                          {zone.district}
                        </button>
                      );
                    })}
                  </div>
                  <span className="text-xs font-medium text-slate-500 tabular-nums">
                    {activeZone.coordinates}
                  </span>
                </div>

                {/* Stylized Architectural Map Canvas for Bergama & Kuzey Ege İzmir */}
                <div className="relative flex-1 min-h-[320px] bg-[#EBF2FA] overflow-hidden">
                  <svg
                    viewBox="0 0 800 440"
                    className="h-full w-full object-cover"
                    role="img"
                    aria-label="Bergama İzmir ve Kuzey Ege Hizmet Bölgesi Haritası"
                  >
                    <defs>
                      <pattern
                        id="map-grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="#CBD5E1"
                          strokeWidth="0.6"
                          opacity="0.55"
                        />
                      </pattern>
                    </defs>
                    {/* Sea / Coastal Base */}
                    <rect width="800" height="440" fill="#DCE9F7" />
                    <rect width="800" height="440" fill="url(#map-grid)" />

                    {/* Bakırçay / Bergama Landmass */}
                    <path
                      d="M 240 0 L 800 0 L 800 440 L 185 440 C 205 390 245 350 230 305 C 215 260 155 245 170 200 C 185 155 235 135 230 90 C 225 45 205 20 240 0 Z"
                      fill="#F8FAFC"
                      stroke="#CBD5E1"
                      strokeWidth="2"
                    />

                    {/* Bakırçay River / Valley Accent */}
                    <path
                      d="M 760 110 C 610 130 500 155 415 190 C 330 225 255 245 190 275"
                      fill="none"
                      stroke="#BFDBFE"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />

                    {/* Regional Highways: D550 & Bergama-Dikili Road */}
                    <path
                      d="M 380 25 C 405 110 420 150 450 205 C 475 250 435 340 410 425"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="3.5"
                      strokeDasharray="8 6"
                    />
                    <path
                      d="M 225 225 L 450 205 L 675 185"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="2.5"
                    />

                    {/* Bergama Merkez (Primary Pin) */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setActiveZoneId('bergama')}
                    >
                      <circle
                        cx="450"
                        cy="205"
                        r={activeZoneId === 'bergama' ? 28 : 16}
                        fill="#2563EB"
                        opacity={activeZoneId === 'bergama' ? 0.16 : 0.08}
                      />
                      <circle
                        cx="450"
                        cy="205"
                        r="8"
                        fill={activeZoneId === 'bergama' ? '#2563EB' : '#0B192C'}
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                      />
                      <text
                        x="467"
                        y="200"
                        fill="#0B192C"
                        fontSize="14"
                        fontWeight="800"
                        fontFamily="Plus Jakarta Sans, sans-serif"
                      >
                        Bergama Merkez
                      </text>
                      <text
                        x="467"
                        y="216"
                        fill="#2563EB"
                        fontSize="11"
                        fontWeight="600"
                        fontFamily="DM Sans, sans-serif"
                      >
                        Mustafa Yazıcı Cad. No:41/A
                      </text>
                    </g>

                    {/* Dikili & Çandarlı */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setActiveZoneId('dikili')}
                    >
                      <circle
                        cx="225"
                        cy="225"
                        r={activeZoneId === 'dikili' ? 24 : 14}
                        fill="#2563EB"
                        opacity={activeZoneId === 'dikili' ? 0.16 : 0.08}
                      />
                      <circle
                        cx="225"
                        cy="225"
                        r="7"
                        fill={activeZoneId === 'dikili' ? '#2563EB' : '#0B192C'}
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                      />
                      <text
                        x="240"
                        y="229"
                        fill="#0B192C"
                        fontSize="13"
                        fontWeight="600"
                        fontFamily="Plus Jakarta Sans, sans-serif"
                      >
                        Dikili &amp; Çandarlı
                      </text>
                    </g>

                    {/* Bergama OSB & Kınık */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setActiveZoneId('kinik-osb')}
                    >
                      <circle
                        cx="645"
                        cy="188"
                        r={activeZoneId === 'kinik-osb' ? 24 : 14}
                        fill="#2563EB"
                        opacity={activeZoneId === 'kinik-osb' ? 0.16 : 0.08}
                      />
                      <circle
                        cx="645"
                        cy="188"
                        r="7"
                        fill={activeZoneId === 'kinik-osb' ? '#2563EB' : '#0B192C'}
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                      />
                      <text
                        x="555"
                        y="168"
                        fill="#0B192C"
                        fontSize="13"
                        fontWeight="600"
                        fontFamily="Plus Jakarta Sans, sans-serif"
                      >
                        Bergama OSB &amp; Kınık
                      </text>
                    </g>

                    {/* Sea label */}
                    <text
                      x="48"
                      y="385"
                      fill="#475569"
                      fontSize="12"
                      fontWeight="600"
                      letterSpacing="1.5"
                      fontFamily="Plus Jakarta Sans, sans-serif"
                    >
                      KUZEY EGE · İZMİR
                    </text>
                  </svg>

                  {/* Floating Selected Location Info Overlay */}
                  <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-slate-200/90 bg-white/95 p-4 backdrop-blur-md shadow-sm sm:left-auto sm:w-[25rem]">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold text-[#2563EB]">{activeZone.label}</p>
                        <p className="mt-0.5 font-display text-sm font-bold text-[#0B192C]">
                          {activeZone.address}
                        </p>
                        <p className="mt-1 text-xs text-slate-600">{activeZone.note}</p>
                      </div>
                      <a
                        href="https://maps.google.com/?q=Ertu%C4%9Frul+Mah.+Mustafa+Yaz%C4%B1c%C4%B1+Cad.+No:41%2FA,+35700+Bergama+%C4%B0zmir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 shrink-0 items-center gap-1 rounded-lg bg-[#EFF6FF] px-3 text-xs font-semibold text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors"
                      >
                        <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Yol Tarifi</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Dark Navy Footer */}
      <footer className="bg-[#0B192C] text-slate-300">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Brand Summary */}
            <div className="md:col-span-5">
              <BrandShieldLogo variant="light" size="md" />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
                Bergama, İzmir merkezli 20 yıllık bölge deneyimi ve 12+ anlaşmalı sigorta şirketi
                ile araç, konut, DASK, sağlık ve ticari işletme poliçelerinde güvenilir acenteniz.
              </p>
              <p className="mt-4 text-xs text-slate-400">
                {OFFICE_ADDRESS}
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="font-display text-sm font-semibold text-white">Hızlı Erişim</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href="#hizmetler" className="hover:text-white transition-colors">
                    Hizmetlerimiz
                  </a>
                </li>
                <li>
                  <a href="#ofisimiz" className="hover:text-white transition-colors">
                    Ofisimiz &amp; Neden Biz
                  </a>
                </li>
                <li>
                  <a href="#kampanyalar" className="hover:text-white transition-colors">
                    Kampanyalar
                  </a>
                </li>
                <li>
                  <a href="#yorumlar" className="hover:text-white transition-colors">
                    Müşteri Yorumları
                  </a>
                </li>
                <li>
                  <a href="#iletisim" className="hover:text-white transition-colors">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>

            {/* Insurance Branches */}
            <div className="md:col-span-4">
              <h3 className="font-display text-sm font-semibold text-white">Sigorta Branşları</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {(
                  [
                    { label: 'Zorunlu Trafik & Kasko Sigortası', type: 'Trafik & Kasko' },
                    { label: 'Konut & DASK Deprem Sigortası', type: 'Konut & DASK' },
                    { label: 'Tamamlayıcı & Özel Sağlık Sigortası', type: 'Sağlık' },
                    { label: 'İşyeri & Ticari Paket Sigortalar', type: 'İşyeri' },
                  ] as const
                ).map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => onSelectServiceFromFooter(item.type)}
                      className="inline-flex items-center gap-1 text-left text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center">
            <p>© 2026 Kuzey Ege Sigorta · Bergama, İzmir. Tüm hakları saklıdır.</p>
            <p className="tabular-nums">Tel: {PHONE_DISPLAY} · TOBB Levha Kayıtlı Yetkili Acente</p>
          </div>
        </div>
      </footer>
    </>
  );
}
