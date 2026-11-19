import { Star } from 'lucide-react';
import { REVIEWS } from '../data/insuranceData';

export function ReviewsSection() {
  return (
    <section id="yorumlar" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase">
              Bölgesel Güven
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B192C] sm:text-4xl text-balance">
              Müşteri Yorumları
            </h2>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-0.5 text-amber-500" aria-label="5 üzerinden 5 yıldız">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <span className="font-semibold text-[#0B192C] tabular-nums">4,9 / 5,0</span>
            <span aria-hidden="true" className="text-slate-300">
              ·
            </span>
            <span>340+ doğrulanmış değerlendirme</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC]/60 p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div
                    className="flex items-center gap-0.5"
                    aria-label={`${review.rating} yıldız`}
                  >
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{review.service}</span>
                    <span aria-hidden="true">·</span>
                    <span>{review.date}</span>
                  </div>
                </div>

                <blockquote className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                  “{review.comment}”
                </blockquote>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-200/80 pt-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B192C] font-display text-xs font-bold text-white"
                  aria-hidden="true"
                >
                  {review.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-[#0B192C]">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
