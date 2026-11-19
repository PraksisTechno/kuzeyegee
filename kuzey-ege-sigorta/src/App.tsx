import { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PartnerLogos } from './components/PartnerLogos';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { CampaignsSection } from './components/CampaignsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactFooter } from './components/ContactFooter';
import { InsuranceType } from './data/insuranceData';

export default function App() {
  const [selectedType, setSelectedType] = useState<InsuranceType>('Trafik & Kasko');
  const [selectedCampaignNote, setSelectedCampaignNote] = useState<string | null>(null);
  const formNameInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToQuoteForm = () => {
    const formEl = document.getElementById('hizli-teklif-formu');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.setTimeout(() => {
      formNameInputRef.current?.focus();
    }, 300);
  };

  const handleSelectService = (type: InsuranceType) => {
    setSelectedType(type);
    setSelectedCampaignNote(null);
    scrollToQuoteForm();
  };

  const handleSelectCampaign = (type: InsuranceType, campaignTitle: string) => {
    setSelectedType(type);
    setSelectedCampaignNote(campaignTitle);
    scrollToQuoteForm();
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      <Navbar onJumpToQuote={scrollToQuoteForm} />
      <main>
        <HeroSection
          selectedType={selectedType}
          selectedCampaignNote={selectedCampaignNote}
          onChangeType={setSelectedType}
          onClearCampaignNote={() => setSelectedCampaignNote(null)}
          formNameInputRef={formNameInputRef}
        />
        <PartnerLogos />
        <ServicesSection onSelectService={handleSelectService} />
        <WhyChooseUsSection />
        <CampaignsSection onSelectCampaign={handleSelectCampaign} />
        <ReviewsSection />
      </main>
      <ContactFooter onSelectServiceFromFooter={handleSelectService} />
    </div>
  );
}
