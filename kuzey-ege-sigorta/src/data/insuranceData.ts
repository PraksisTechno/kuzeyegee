export type InsuranceType =
  | 'Trafik & Kasko'
  | 'Konut & DASK'
  | 'Sağlık'
  | 'İşyeri';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  quoteType: InsuranceType;
  shortDesc: string;
  coverages: string[];
  turnaround: string;
  iconName: 'car' | 'home' | 'heart' | 'building';
}

export interface PartnerCompany {
  id: string;
  name: string;
  shortMark: string;
  category: string;
}

export interface WhyUsPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  metric: string;
}

export interface CampaignItem {
  id: string;
  title: string;
  validity: string;
  summary: string;
  highlight: string;
  quoteType: InsuranceType;
  ctaLabel: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

export const WHATSAPP_NUMBER = '905452342334';
export const PHONE_DISPLAY = '0545 234 23 34';
export const PHONE_HREF = 'tel:+905452342334';
export const OFFICE_ADDRESS = 'Ertuğrul Mah. Mustafa Yazıcı Cad. No:41/A, 35700 Bergama / İzmir';
export const EMAIL_ADDRESS = 'info@kuzeyegesigorta.com.tr';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const PARTNER_COMPANIES: PartnerCompany[] = [
  { id: 'anadolu', name: 'Anadolu Sigorta', shortMark: 'AS', category: 'Elementer' },
  { id: 'allianz', name: 'Allianz Türkiye', shortMark: 'ALZ', category: 'Genel & Sağlık' },
  { id: 'turkiye', name: 'Türkiye Sigorta', shortMark: 'TS', category: 'Genel' },
  { id: 'aksigorta', name: 'Aksigorta', shortMark: 'AK', category: 'Elementer' },
  { id: 'axa', name: 'AXA Sigorta', shortMark: 'AXA', category: 'Oto & Sağlık' },
  { id: 'sompo', name: 'Sompo Sigorta', shortMark: 'SMP', category: 'Kasko & Konut' },
  { id: 'zurich', name: 'Zurich Sigorta', shortMark: 'ZUR', category: 'Ticari' },
  { id: 'hdi', name: 'HDI Sigorta', shortMark: 'HDI', category: 'Oto & İşyeri' },
  { id: 'ray', name: 'Ray Sigorta', shortMark: 'RAY', category: 'Elementer' },
  { id: 'quick', name: 'Quick Sigorta', shortMark: 'QCK', category: 'Trafik & Kasko' },
  { id: 'neova', name: 'Neova Sigorta', shortMark: 'NVA', category: 'Katılım' },
  { id: 'mapfre', name: 'Mapfre Sigorta', shortMark: 'MAP', category: 'Sağlık & Oto' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'arac',
    number: '01',
    title: 'Araç (Zorunlu Trafik & Kasko)',
    quoteType: 'Trafik & Kasko',
    shortDesc:
      'Binek, ticari ve tarım araçlarınız için 12+ sigorta şirketinden eş zamanlı prim ve teminat karşılaştırması.',
    coverages: [
      'İhtiyari Mali Mesuliyet (İMM) yüksek limit seçenekleri',
      'Bergama ve Kuzey Ege genelinde 7/24 çekici ve ikame araç desteği',
      'Orijinal parça ve yetkili servis güvenceli genişletilmiş kasko',
    ],
    turnaround: '15 dakikada karşılaştırmalı teklif',
    iconName: 'car',
  },
  {
    id: 'konut',
    number: '02',
    title: 'Konut & DASK Sigortası',
    quoteType: 'Konut & DASK',
    shortDesc:
      'Bergama ve çevresindeki ev, bağ evi ve yazlıklarınızı deprem, yangın, su baskını ve hırsızlığa karşı tam koruma altına alın.',
    coverages: [
      'Zorunlu Deprem Sigortası (DASK) anında poliçe düzenleme',
      'Eşya bedeli, cam kırılması ve komşu mali sorumluluk teminatı',
      'Tarihi taş yapılar ve yazlıklara uygun esnek koruma paketleri',
    ],
    turnaround: 'Aynı gün içinde poliçe teslimi',
    iconName: 'home',
  },
  {
    id: 'saglik',
    number: '03',
    title: 'Sağlık Sigortaları',
    quoteType: 'Sağlık',
    shortDesc:
      'Tamamlayıcı ve özel sağlık sigortaları ile Bergama, İzmir merkez ve tüm Türkiye’deki anlaşmalı hastanelerde fark ücreti ödemeyin.',
    coverages: [
      'Yatarak ve ayakta tedavi giderlerinde %100 teminat',
      'Doğum, check-up ve diş paketi ekleme imkânı',
      'Aile bireyleri için kademeli indirim ve ömür boyu yenileme garantisi',
    ],
    turnaround: 'Kişiye özel hastane ağı analizi',
    iconName: 'heart',
  },
  {
    id: 'isyeri',
    number: '04',
    title: 'İşyeri & Ticari Sigortalar',
    quoteType: 'İşyeri',
    shortDesc:
      'Bergama OSB fabrikalarından tarım ve zeytinyağı tesislerine, mağazalardan ofislere kadar işletmenizin sürekliliğini koruyun.',
    coverages: [
      'Emtia, makine kırılması ve elektronik cihaz koruması',
      'İşveren mali sorumluluk ve üçüncü şahıs teminatları',
      'Tarım, sanayi ve esnaf işletmelerine özel risk yönetimi',
    ],
    turnaround: 'Bergama içi yerinde risk incelemesi',
    iconName: 'building',
  },
];

export const WHY_CHOOSE_US: WhyUsPillar[] = [
  {
    id: 'tecrube',
    number: '01',
    title: '20 Yıllık Sektör Tecrübesi',
    description:
      '2006 yılından bu yana Bergama ve Kuzey Ege bölgesinde binlerce bireysel ve kurumsal müşterimizin poliçesini şeffaf bir şekilde yönetiyoruz.',
    metric: '2006’dan beri kesintisiz hizmet',
  },
  {
    id: 'anlasmali',
    number: '02',
    title: '12+ Anlaşmalı Sigorta Şirketi',
    description:
      'Tek bir şirkete bağlı kalmadan, piyasanın önde gelen 12’den fazla sigorta kurumunun fiyat ve teminat kapsamını sizin adınıza tek masada karşılaştırıyoruz.',
    metric: 'En uygun fiyat & kapsam dengesi',
  },
  {
    id: 'hasar',
    number: '03',
    title: '7/24 Aktif Hasar ve Teklif Desteği',
    description:
      'Poliçeyi kestikten sonra da yanınızdayız. Kaza, arıza veya sağlık hasarı anlarında dosya açılışından ödeme takibine kadar doğrudan danışmanınıza ulaşırsınız.',
    metric: 'Ortalama 15 dk geri dönüş',
  },
  {
    id: 'yerel',
    number: '04',
    title: 'Bergama / İzmir Merkezli Güvenilir Hizmet',
    description:
      'Ertuğrul Mahallesi Mustafa Yazıcı Caddesi’ndeki ofisimizde ulaşılabilir yerel ekibimizle yüz yüze görüşebilir, bölge gerçeklerine uygun çözümler alabilirsiniz.',
    metric: 'Bergama Merkez Ofis',
  },
];

export const CAMPAIGNS: CampaignItem[] = [
  {
    id: 'kasko-avantaj',
    title: 'Hasarsızlık Koruma & Kasko Avantajı',
    validity: 'Araç Sigortaları · Güncel Dönem',
    summary:
      '12+ anlaşmalı şirkette hasarsızlık basamağınızı koruyarak kasko yenilemelerinde özel acente indirimlerinden yararlanın.',
    highlight: '%20’ye varan yenileme indirimi',
    quoteType: 'Trafik & Kasko',
    ctaLabel: 'Araç Teklifi İste',
  },
  {
    id: 'konut-dask',
    title: 'Konut + DASK Birleşik Güvence',
    validity: 'Ev & Yazlık Sahipleri · Bergama & Çevresi',
    summary:
      'DASK poliçenizle birlikte eşya ve yapı teminatlı konut sigortası yaptırın, kombi bakımı ve çilingir asistansını ücretsiz ekleyin.',
    highlight: 'Ücretsiz asistans ve %15 paket avantajı',
    quoteType: 'Konut & DASK',
    ctaLabel: 'Konut Teklifi İste',
  },
  {
    id: 'aile-saglik',
    title: 'Aile Tamamlayıcı Sağlık Planı',
    validity: 'Sağlık Sigortaları · Özel Aile Planı',
    summary:
      'Eş ve çocuklarınızla birlikte yapılan tamamlayıcı sağlık başvurularında İzmir anlaşmalı hastane ağı ve 10 taksit kolaylığı.',
    highlight: 'Aile başvurularında %10 ek indirim',
    quoteType: 'Sağlık',
    ctaLabel: 'Sağlık Planı Al',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Murat Demirtaş',
    location: 'Bergama · Ticari Filo Sahibi',
    service: 'Trafik & Kasko',
    rating: 5,
    comment:
      'Geçen kış İzmir–Bergama yolunda yaşadığımız kazada gece geç saatte aramamıza rağmen çekici ve ikame aracı 25 dakikada organize ettiler. 8 yıldır tüm araçlarımızı Mustafa Yazıcı Caddesi’ndeki ofislerine emanet ediyoruz.',
    date: 'Ekim 2026',
  },
  {
    id: 'rev-2',
    name: 'Selin Karahan',
    location: 'Dikili / Bergama · Konut Sahibi',
    service: 'Konut & DASK',
    rating: 5,
    comment:
      'Evimiz ve yazlığımızın DASK ve konut sigortası için tek tek acente gezmek yerine 12 şirketten gelen tabloyu WhatsApp üzerinden net şekilde paylaştılar. Gereksiz teminatlar yerine tam ihtiyacımız olanı seçtik.',
    date: 'Eylül 2026',
  },
  {
    id: 'rev-3',
    name: 'Hakan Özkan',
    location: 'Bergama OSB · Üretim İşletmesi',
    service: 'İşyeri Sigortası',
    rating: 5,
    comment:
      'Üretim tesisimizdeki makineler ve stoklarımız için ofisten gelip yerinde inceleme yaptılar. Hem prim maliyetimiz düştü hem de teminat limitlerimiz güncel değerine göre düzenlendi.',
    date: 'Ağustos 2026',
  },
  {
    id: 'rev-4',
    name: 'Ayşe Yılmaz',
    location: 'Bergama Merkez · Aile Poliçesi',
    service: 'Tamamlayıcı Sağlık',
    rating: 5,
    comment:
      'Ailemiz için İzmir ve Bergama’daki hastane ağını tek tek kontrol ederek en kapsamlı tamamlayıcı sağlık poliçesini hazırladılar. Hastane randevularında provizyon süreçlerinde hiç sorun yaşamadık.',
    date: 'Temmuz 2026',
  },
];

export interface OfficeZone {
  id: string;
  label: string;
  district: string;
  address: string;
  coordinates: string;
  note: string;
}

export const OFFICE_ZONES: OfficeZone[] = [
  {
    id: 'bergama',
    label: 'Merkez Ofis',
    district: 'Bergama Merkez',
    address: 'Ertuğrul Mah. Mustafa Yazıcı Cad. No:41/A, 35700 Bergama / İzmir',
    coordinates: '39.1207° K, 27.1806° D',
    note: 'Hafta içi 08:30 - 18:30, Cumartesi 09:00 - 16:00 yüz yüze danışmanlık',
  },
  {
    id: 'dikili',
    label: 'Kıyı & Yazlık Hattı',
    district: 'Dikili & Çandarlı',
    address: 'Bergama Merkez Ofis Kapsam Alanı · Dikili – Çandarlı Sahil Şeridi',
    coordinates: '39.0725° K, 26.8892° D',
    note: 'Yazlık konut, DASK ve deniz/araç sigortalarında hızlı poliçe desteği',
  },
  {
    id: 'kinik-osb',
    label: 'Sanayi & Tarım',
    district: 'Bergama OSB & Kınık',
    address: 'Bergama Organize Sanayi Bölgesi ve Kınık Hizmet Hattı',
    coordinates: '39.0869° K, 27.3814° D',
    note: 'Fabrika, ticari işletme ve tarım araçları için yerinde risk analizi',
  },
];
