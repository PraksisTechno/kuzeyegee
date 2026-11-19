import { PARTNER_COMPANIES } from '../data/insuranceData';

export function PartnerLogos() {
  return (
    <section
      aria-label="Anlaşmalı Sigorta Şirketleri"
      className="border-y border-slate-200/80 bg-[#F8FAFC] py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="font-display text-sm font-semibold tracking-tight text-[#0B192C] sm:text-base">
            12+ Anlaşmalı Sigorta Şirketi ile Çalışıyoruz
          </p>
          <p className="text-xs text-slate-500">
            Tüm poliçelerde şeffaf teminat ve fiyat karşılaştırması
          </p>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {PARTNER_COMPANIES.map((partner) => (
            <div
              key={partner.id}
              className="group flex h-16 items-center gap-3 rounded-xl border border-slate-200/90 bg-white px-3.5 transition-colors duration-150 hover:border-slate-300"
            >
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 font-display text-[11px] font-bold tracking-tight text-slate-600 transition-colors duration-150 group-hover:bg-[#0B192C] group-hover:text-white"
                aria-hidden="true"
              >
                {partner.shortMark}
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-xs font-semibold text-slate-700 transition-colors group-hover:text-[#0B192C]">
                  {partner.name}
                </p>
                <p className="truncate text-[11px] text-slate-400">{partner.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
