import { ArrowRight, Percent } from 'lucide-react';
import { CAMPAIGNS, InsuranceType } from '../data/insuranceData';

interface CampaignsSectionProps {
  onSelectCampaign: (type: InsuranceType, campaignTitle: string) => void;
}

export function CampaignsSection({ onSelectCampaign }: CampaignsSectionProps) {
  return (
    <section id="kampanyalar" className="bg-[#0B192C] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Bölgesel Fırsatlar
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Güncel Kampanyalar ve Avantajlar
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            Anlaşmalı sigorta şirketlerimizle oluşturduğumuz dönemsel paket indirimlerini tek
            tıkla teklif formunuza uygulayabilirsiniz.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CAMPAIGNS.map((campaign) => (
            <article
              key={campaign.id}
              className="flex flex-col justify-between rounded-xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-200 hover:border-blue-400/40 hover:bg-white/[0.07] sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
                  <span>{campaign.validity}</span>
                  <Percent className="h-4 w-4 text-blue-400 shrink-0" aria-hidden="true" />
                </div>

                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-white">
                  {campaign.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {campaign.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold text-blue-300">{campaign.highlight}</p>
                <button
                  type="button"
                  onClick={() => onSelectCampaign(campaign.quoteType, campaign.title)}
                  className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>{campaign.ctaLabel}</span>
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
