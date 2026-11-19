import { Car, Home, HeartPulse, Building2, ArrowRight, Check } from 'lucide-react';
import { SERVICES, InsuranceType, ServiceItem } from '../data/insuranceData';

interface ServicesSectionProps {
  onSelectService: (type: InsuranceType) => void;
}

function ServiceIcon({ name }: { name: ServiceItem['iconName'] }) {
  const commonClass = 'h-5 w-5';
  switch (name) {
    case 'car':
      return <Car className={commonClass} aria-hidden="true" />;
    case 'home':
      return <Home className={commonClass} aria-hidden="true" />;
    case 'heart':
      return <HeartPulse className={commonClass} aria-hidden="true" />;
    case 'building':
      return <Building2 className={commonClass} aria-hidden="true" />;
  }
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="hizmetler" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase">
              Kapsamlı Koruma
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B192C] sm:text-4xl text-balance">
              Sigorta Çözümlerimiz
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            Bireysel ve ticari tüm ihtiyaçlarınız için 12+ sigorta şirketinin poliçelerini tek
            noktada analiz ediyor, gereksiz maliyetleri eliyoruz.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-slate-300 hover:shadow-[0_14px_32px_-12px_rgba(11,25,44,0.08)] sm:p-8"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB] transition-colors duration-200 group-hover:bg-[#0B192C] group-hover:text-white">
                    <ServiceIcon name={service.iconName} />
                  </div>
                  <span className="font-display text-xs font-semibold text-slate-400 tabular-nums">
                    {service.number}. Branş
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-[#0B192C]">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {service.shortDesc}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                  {service.coverages.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
                <span className="text-xs font-medium text-slate-500">{service.turnaround}</span>
                <button
                  type="button"
                  onClick={() => onSelectService(service.quoteType)}
                  className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-slate-50 px-4 text-sm font-semibold text-[#0B192C] transition-colors duration-150 hover:bg-[#2563EB] hover:text-white whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  <span>Teklif Al</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
