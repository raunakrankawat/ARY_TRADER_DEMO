export type Division = 'all' | 'pantry' | 'heritage';

export type Currency = 'USD' | 'EUR' | 'GBP' | 'INR' | 'AED';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductColorway {
  name: string;
  hex: string;
  previewImage?: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  division: 'heritage' | 'pantry';
  category: string;
  tagline: string;
  description: string;
  image: string;
  detailImage?: string;
  moq: string;
  leadTime: string;
  estimatedPriceRangeUSD: string;
  origin: string;
  customizationAvailable?: boolean;
  hsCode: string;
  packaging: string;
  certifications: string[];
  highlights: string[];
  specs: ProductSpec[];
  colorways?: ProductColorway[];
}

export interface RFQItem {
  product: Product;
  quantity: number;
  unit: string;
  selectedColorway?: string;
}

export interface RFQFormData {
  companyName: string;
  contactPerson: string;
  businessEmail: string;
  phoneWhatsapp?: string;
  country?: string;
  businessType?: string;
  destinationPort?: string;
  incoterm?: 'FOB' | 'CIF' | 'EXW' | 'DDP' | string;
  targetTimeline?: string;
  currency?: Currency | string;
  additionalNotes?: string;
  phoneCountryCode?: string;
  phoneNumber?: string;
  targetDeliveryMonth?: string;
  customSpecificationsNotes?: string;
  newsletterOptIn?: boolean;
}

export interface CertificateDoc {
  id: string;
  title: string;
  type: 'export_license' | 'tax' | 'food_safety' | 'origin' | 'origin_quality' | 'lab_coa' | 'fumigation' | string;
  regNumber: string;
  issuingAuthority: string;
  division: 'all' | 'pantry' | 'heritage';
  description: string;
  verified: boolean;
  needsConfirmation?: boolean;
}

export interface CustomerReview {
  id: string;
  author: string;
  reviewerBadge?: string;
  company: string;
  location: string;
  countryCode?: string;
  rating: number;
  date?: string;
  relativeTime?: string;
  reviewText?: string;
  comment?: string;
  likesCount?: number;
  avatarUrl: string;
  division?: 'all' | 'pantry' | 'heritage' | string;
  productPurchased?: string;
  orderVolume?: string;
  verifiedBuyer?: boolean;
}

export interface TrustedBrand {
  id: string;
  name: string;
  location: string;
  country?: string;
  sector: string;
  badge?: string;
  type?: string;
}
