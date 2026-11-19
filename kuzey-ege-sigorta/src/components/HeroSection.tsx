import { useState, useEffect, RefObject } from 'react';
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Clock,
  PhoneCall,
} from 'lucide-react';
import { InsuranceType, PHONE_DISPLAY, buildWhatsAppUrl } from '../data/insuranceData';
import { AGENCY_LOGO_SRC } from './BrandShieldLogo';

interface HeroSectionProps {
  selectedType: InsuranceType;
  selectedCampaignNote: string | null;
  onChangeType: (type: InsuranceType) => void;
  onClearCampaignNote: () => void;
  formNameInputRef: RefObject<HTMLInputElement | null>;
}

const INSURANCE_OPTIONS: InsuranceType[] = [
  'Trafik & Kasko',
  'Konut & DASK',
  'Sağlık',
  'İşyeri',
];

function formatTurkishPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (!digits) return '';
  if (digits.length <= 4) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
  if (digits.length <= 9) return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 9)} ${digits.slice(9, 11)}`;
}

export function HeroSection({
  selectedType,
  selectedCampaignNote,
  onChangeType,
  onClearCampaignNote,
  formNameInputRef,
}: HeroSectionProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [insuranceType, setInsuranceType] = useState<InsuranceType>(selectedType);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    type: InsuranceType;
    campaign: string | null;
    referenceCode: string;
  } | null>(null);

  useEffect(() => {
    setInsuranceType(selectedType);
  }, [selectedType]);

  const handlePhoneChange = (value: string) => {
    setPhone(formatTurkishPhone(value));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    const phoneDigits = phone.replace(/\D/g, '');

    if (trimmedName.length < 3) {
      setErrorMsg('Lütfen adınızı ve soyadınızı eksiksiz giriniz.');
      return;
    }

    if (phoneDigits.length < 10 || !phoneDigits.startsWith('0')) {
      setErrorMsg('Lütfen 0 ile başlayan geçerli bir telefon numarası giriniz (Örn: 05XX XXX XX XX).');
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);

    window.setTimeout(() => {
      const code = `KE-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedData({
        name: trimmedName,
        phone,
        type: insuranceType,
        campaign: selectedCampaignNote,
        referenceCode: code,
      });
      setIsSubmitting(false);
    }, 180);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFullName('');
    setPhone('');
    setErrorMsg(null);
    onClearCampaignNote();
  };

  const focusForm = () => {
    const formEl = document.getElementById('hizli-teklif-formu');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    window.setTimeout(() => {
      formNameInputRef.current?.focus();
    }, 250);
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Subtle architectural Aegean backdrop */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/src/assets/images/aegean_coast_architecture_1794997411321.jpg"
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-[0.09]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Core Proposition */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-wide text-slate-600 sm:text-sm">
              <span className="font-semibold text-[#0B192C]">2006’dan Bu Yana</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>Bergama / İzmir</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>Dikili</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>Kınık</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>Yetkili Bölge Acentesi</span>
            </div>

            <h1
              className="font-display max-w-2xl font-bold tracking-tight text-[#0B192C] text-balance"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.65rem)',
                lineHeight: 1.1,
              }}
            >
              20 Yıllık Tecrübe ile Kuzey Ege’de Güvendesiniz
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Bergama, İzmir merkezli yerel uzmanlığımız ve{' '}
              <strong className="font-semibold text-[#0B192C]">
                12+ anlaşmalı sigorta şirketi
              </strong>{' '}
              gücümüzle aracınız, konutunuz, sağlığınız ve işyeriniz için en doğru teminatı
              karşılaştırıyor;{' '}
              <strong className="font-semibold text-[#0B192C]">
                7/24 teklif ve hasar desteği
              </strong>{' '}
              sunuyoruz.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={focusForm}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.45)] transition-colors duration-150 hover:bg-[#1D4ED8] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B192C]"
              >
                <span>Hemen Teklif Al</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={buildWhatsAppUrl(
                  'Merhaba Kuzey Ege Sigorta (Bergama), sigorta teklifi almak istiyorum.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-6 text-sm font-semibold text-[#0B192C] transition-colors duration-150 hover:border-[#0B192C]/40 hover:bg-slate-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                <span>WhatsApp ile Ulaşın</span>
              </a>
            </div>

            {/* Clean unboxed Trust Proof Strip */}
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200/80 pt-7 sm:max-w-xl sm:gap-8">
              <div>
                <dt className="text-xs font-medium text-slate-500">Sektör Deneyimi</dt>
                <dd className="mt-1 font-display text-2xl font-bold tracking-tight text-[#0B192C] tabular-nums">
                  20+ Yıl
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">Anlaşmalı Kurum</dt>
                <dd className="mt-1 font-display text-2xl font-bold tracking-tight text-[#0B192C] tabular-nums">
                  12+ Şirket
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">Hasar &amp; Teklif Hattı</dt>
                <dd className="mt-1 font-display text-2xl font-bold tracking-tight text-[#2563EB] tabular-nums">
                  7/24 Aktif
                </dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Subtle Glassmorphic Quick Quote Card */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <div
              id="hizli-teklif-formu"
              className="relative rounded-xl border border-slate-200/90 bg-white/90 p-6 shadow-[0_24px_48px_-16px_rgba(11,25,44,0.12)] backdrop-blur-md sm:p-8"
            >
              {submittedData ? (
                <div className="py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold text-[#0B192C]">
                    Teklif Talebiniz Alındı
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Sayın <strong className="text-[#0B192C]">{submittedData.name}</strong>,{' '}
                    <strong className="text-[#0B192C]">{submittedData.type}</strong> branşı için
                    Bergama merkez ofisimiz tarafından 12+ sigorta şirketinden hazırlanan
                    karşılaştırmalı teklifiniz en geç 15 dakika içinde{' '}
                    <span className="tabular-nums font-medium">{submittedData.phone}</span>{' '}
                    numaranıza iletilecektir.
                  </p>

                  <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-xs text-slate-600 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span>Takip Numarası</span>
                      <span className="font-semibold text-[#0B192C] tabular-nums">
                        {submittedData.referenceCode}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Sigorta Türü</span>
                      <span className="font-semibold text-[#0B192C]">{submittedData.type}</span>
                    </div>
                    {submittedData.campaign && (
                      <div className="flex items-center justify-between gap-2">
                        <span>Seçili Kampanya</span>
                        <span className="font-semibold text-[#2563EB] text-right">
                          {submittedData.campaign}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex flex-col gap-2.5">
                    <a
                      href={buildWhatsAppUrl(
                        `Merhaba, web sitenizden ${submittedData.referenceCode} numaralı ${submittedData.type} teklif talebini oluşturdum. Adım: ${submittedData.name}, Tel: ${submittedData.phone}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0B192C] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#0F172A]"
                    >
                      <MessageCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                      <span>WhatsApp’tan Hemen Bağlan</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 cursor-pointer"
                    >
                      Yeni Teklif Oluştur
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-xl font-bold tracking-tight text-[#0B192C] sm:text-2xl">
                        Hızlı Teklif Formu
                      </h2>
                      <p className="mt-1 text-sm text-slate-600">
                        Bilgilerinizi bırakın, 12+ şirketten en uygun teklifi hazırlayalım.
                      </p>
                    </div>
                    <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-slate-200/90">
                      <img
                        src={AGENCY_LOGO_SRC}
                        alt="Kuzey Ege Sigorta Logosu"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {selectedCampaignNote && (
                    <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-blue-200 bg-[#EFF6FF]/80 px-3.5 py-2.5 text-xs text-[#0B192C]">
                      <span>
                        Seçili Kampanya:{' '}
                        <strong className="font-semibold text-[#2563EB]">
                          {selectedCampaignNote}
                        </strong>
                      </span>
                      <button
                        type="button"
                        onClick={onClearCampaignNote}
                        className="font-medium text-slate-500 hover:text-[#0B192C] underline underline-offset-2 shrink-0 cursor-pointer"
                      >
                        Kaldır
                      </button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                    <div>
                      <label
                        htmlFor="quote-fullname"
                        className="block text-sm font-medium text-[#0B192C]"
                      >
                        Ad Soyad
                      </label>
                      <input
                        ref={formNameInputRef}
                        id="quote-fullname"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errorMsg) setErrorMsg(null);
                        }}
                        placeholder="Örn: Ahmet Kaya"
                        className="mt-1.5 block h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-[#0B192C] placeholder:text-slate-400 transition-colors focus:border-[#2563EB] focus:outline-none focus:ring-3 focus:ring-[#2563EB]/15"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-sm font-medium text-[#0B192C]"
                      >
                        Telefon Numarası
                      </label>
                      <input
                        id="quote-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder="05XX XXX XX XX"
                        className="mt-1.5 block h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-[#0B192C] tabular-nums placeholder:text-slate-400 transition-colors focus:border-[#2563EB] focus:outline-none focus:ring-3 focus:ring-[#2563EB]/15"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-type"
                        className="block text-sm font-medium text-[#0B192C]"
                      >
                        Sigorta Türü
                      </label>
                      <div className="relative mt-1.5">
                        <select
                          id="quote-type"
                          name="insuranceType"
                          value={insuranceType}
                          onChange={(e) => {
                            const val = e.target.value as InsuranceType;
                            setInsuranceType(val);
                            onChangeType(val);
                          }}
                          className="block h-11 w-full appearance-none rounded-xl border border-slate-300 bg-white pr-10 pl-3.5 text-sm font-medium text-[#0B192C] transition-colors focus:border-[#2563EB] focus:outline-none focus:ring-3 focus:ring-[#2563EB]/15 cursor-pointer"
                        >
                          {INSURANCE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-slate-500"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {errorMsg && (
                      <div
                        role="alert"
                        className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs font-medium text-red-800"
                      >
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 text-sm font-semibold text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.45)] transition-colors duration-150 hover:bg-[#1D4ED8] disabled:opacity-70 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B192C]"
                    >
                      <span>{isSubmitting ? 'Talebiniz İletiliyor...' : 'Teklif Al'}</span>
                      {!isSubmitting && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                    </button>
                  </form>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/80 pt-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#2563EB]" aria-hidden="true" />
                      <span>Ortalama dönüş: 15 dk</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <PhoneCall className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                      <span className="tabular-nums">{PHONE_DISPLAY}</span>
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
