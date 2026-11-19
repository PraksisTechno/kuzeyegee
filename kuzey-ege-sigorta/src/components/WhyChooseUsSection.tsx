import { useState } from 'react';
import { Award, Building2, PhoneForwarded, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/insuranceData';

function PillarIcon({ id }: { id: string }) {
  if (id === 'tecrube') return <Award className="h-5 w-5 text-[#2563EB]" aria-hidden="true" />;
  if (id === 'anlasmali')
    return <Building2 className="h-5 w-5 text-[#2563EB]" aria-hidden="true" />;
  if (id === 'yerel') return <MapPin className="h-5 w-5 text-[#2563EB]" aria-hidden="true" />;
  return <PhoneForwarded className="h-5 w-5 text-[#2563EB]" aria-hidden="true" />;
}

export function WhyChooseUsSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="ofisimiz"
      className="border-y border-slate-200/80 bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Why Choose Us Editorial Pillars */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase">
                Neden Kuzey Ege Sigorta?
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B192C] sm:text-4xl text-balance">
                Neden Biz?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Sigortayı yalnızca poliçe düzenlemek olarak görmüyoruz. Bergama ve Kuzey Ege’nin
                risklerini bilen deneyimli ekibimizle hasar anında da doğrudan yanınızdayız.
              </p>
            </div>

            <div className="mt-7 space-y-3.5">
              {WHY_CHOOSE_US.map((pillar) => (
                <div
                  key={pillar.id}
                  className="rounded-xl border border-slate-200/90 bg-white p-5 transition-colors duration-150 hover:border-slate-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF]">
                      <PillarIcon id={pillar.id} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display text-base font-bold tracking-tight text-[#0B192C] sm:text-lg">
                          {pillar.title}
                        </h3>
                        <span className="text-xs font-medium text-[#2563EB]">
                          {pillar.metric}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Office Photography Showcase */}
          <div className="flex flex-col lg:col-span-6">
            <div className="relative flex-1 overflow-hidden rounded-xl border border-slate-200 bg-[#0B192C] min-h-[360px] lg:h-full">
              {!imgError ? (
                <img
                  src="/src/assets/images/agency_consultation_room_1794997409816.jpg"
                  alt="Kuzey Ege Sigorta Bergama Merkez Ofisi danışmanlık görüşmesi"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0B192C] to-[#1E3A8A] p-8 text-center text-white">
                  <Building2 className="h-10 w-10 text-blue-300" aria-hidden="true" />
                  <p className="mt-3 font-display text-lg font-semibold">
                    Kuzey Ege Sigorta Bergama Merkez Ofisi
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Ertuğrul Mah. Mustafa Yazıcı Cad. No:41/A, 35700 Bergama / İzmir
                  </p>
                </div>
              )}

              {/* Bottom Contrast Scrim + Office Caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B192C]/95 via-[#0B192C]/75 to-transparent p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-blue-300">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Ertuğrul Mah., Bergama / İzmir · Yüz Yüze Danışmanlık</span>
                    </div>
                    <p className="mt-1.5 font-display text-lg font-bold text-white">
                      Poliçenizi Bergama Ofisimizde Birlikte Planlayalım
                    </p>
                  </div>
                  <div className="shrink-0 text-left sm:text-right">
                    <p className="font-display text-2xl font-bold text-white tabular-nums">
                      14.500+
                    </p>
                    <p className="text-xs text-slate-300">Yönetilen Aktif Poliçe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
