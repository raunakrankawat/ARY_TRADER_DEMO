import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, RFQItem, RFQFormData, Division, Currency } from '../types';
import { CURRENCY_RATES, PRODUCTS } from '../data/products';

interface RFQContextType {
  enquiryList: RFQItem[];
  addToEnquiry: (product: Product, quantity?: number, selectedColorway?: string) => void;
  removeFromEnquiry: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearEnquiryList: () => void;
  isInEnquiry: (productId: string) => boolean;
  totalItemsCount: number;

  isEnquiryDrawerOpen: boolean;
  setIsEnquiryDrawerOpen: (open: boolean) => void;

  selectedDivision: Division;
  setSelectedDivision: (div: Division) => void;

  activeCurrency: Currency;
  setActiveCurrency: (curr: Currency) => void;
  convertPrice: (priceStr: string) => string;

  isCatalogModalOpen: boolean;
  catalogDivision: 'heritage' | 'pantry';
  openCatalogModal: (division?: 'heritage' | 'pantry') => void;
  closeCatalogModal: () => void;

  isSampleModalOpen: boolean;
  sampleProduct: Product | null;
  openSampleModal: (product?: Product) => void;
  closeSampleModal: () => void;

  isAdvisorOpen: boolean;
  setIsAdvisorOpen: (open: boolean) => void;

  selectedProductForDetail: Product | null;
  setSelectedProductForDetail: (product: Product | null) => void;

  // Dedicated B2B Enquiry Modal state
  isEnquiryModalOpen: boolean;
  enquiryModalProduct: Product | null;
  enquiryModalCategory: string | null;
  openEnquiryModal: (options?: { product?: Product | null; category?: string | null }) => void;
  closeEnquiryModal: () => void;

  submitRFQ: (formData: RFQFormData) => Promise<{ success: boolean; rfqReference: string; whatsappUrl: string }>;
}

const RFQContext = createContext<RFQContextType | undefined>(undefined);

export const RFQProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enquiryList, setEnquiryList] = useState<RFQItem[]>(() => {
    try {
      const saved = localStorage.getItem('arya_rfq_items') || localStorage.getItem('aya_rfq_items');
      return saved ? JSON.parse(saved) : [
        // Seed initial high-interest items so buyers immediately see how the consolidated quote works!
        {
          product: PRODUCTS[0],
          quantity: 200,
          unit: 'sq. ft',
          selectedColorway: 'Indigo & Terracotta'
        },
        {
          product: PRODUCTS[4],
          quantity: 1000,
          unit: 'kg',
          selectedColorway: 'Standard Jumbo 6+'
        }
      ];
    } catch {
      return [];
    }
  });

  const [isEnquiryDrawerOpen, setIsEnquiryDrawerOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState<Division>('all');
  const [activeCurrency, setActiveCurrency] = useState<Currency>('USD');
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [catalogDivision, setCatalogDivision] = useState<'heritage' | 'pantry'>('heritage');
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [sampleProduct, setSampleProduct] = useState<Product | null>(null);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);

  // Dedicated B2B Enquiry Modal state
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryModalProduct, setEnquiryModalProduct] = useState<Product | null>(null);
  const [enquiryModalCategory, setEnquiryModalCategory] = useState<string | null>(null);

  const openEnquiryModal = (options?: { product?: Product | null; category?: string | null }) => {
    setEnquiryModalProduct(options?.product || null);
    setEnquiryModalCategory(options?.category || (options?.product ? options.product.category : null));
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    setEnquiryModalProduct(null);
    setEnquiryModalCategory(null);
  };

  useEffect(() => {
    try {
      localStorage.setItem('arya_rfq_items', JSON.stringify(enquiryList));
    } catch (e) {
      console.error('Failed to persist enquiry list', e);
    }
  }, [enquiryList]);

  const addToEnquiry = (product: Product, quantity = 1, selectedColorway?: string) => {
    setEnquiryList(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity, selectedColorway: selectedColorway || item.selectedColorway }
            : item
        );
      }
      const unit = product.division === 'heritage' && product.category === 'Carpets & Rugs'
        ? 'sq. ft'
        : product.division === 'heritage' ? 'units' : 'kg';
      return [...prev, { product, quantity, unit, selectedColorway: selectedColorway || product.colorways?.[0]?.name }];
    });
    setIsEnquiryDrawerOpen(true);
  };

  const removeFromEnquiry = (productId: string) => {
    setEnquiryList(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromEnquiry(productId);
      return;
    }
    setEnquiryList(prev =>
      prev.map(item => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearEnquiryList = () => {
    setEnquiryList([]);
  };

  const isInEnquiry = (productId: string) => {
    return enquiryList.some(item => item.product.id === productId);
  };

  const totalItemsCount = enquiryList.length;

  const convertPrice = (priceStr: string): string => {
    const rateInfo = CURRENCY_RATES[activeCurrency];
    if (!rateInfo || rateInfo.code === 'USD') return priceStr;

    // Convert numbers inside "$18 – $34 / sq.ft"
    return priceStr.replace(/\$(\d+(?:\.\d+)?)/g, (_, num) => {
      const val = parseFloat(num);
      const converted = Math.round(val * rateInfo.rateAgainstUSD);
      return `${rateInfo.symbol}${converted.toLocaleString()}`;
    });
  };

  const openCatalogModal = (division: 'heritage' | 'pantry' = 'heritage') => {
    setCatalogDivision(division);
    setIsCatalogModalOpen(true);
  };

  const closeCatalogModal = () => setIsCatalogModalOpen(false);

  const openSampleModal = (product?: Product) => {
    setSampleProduct(product || PRODUCTS[0]);
    setIsSampleModalOpen(true);
  };

  const closeSampleModal = () => {
    setIsSampleModalOpen(false);
    setSampleProduct(null);
  };

  const submitRFQ = async (formData: RFQFormData) => {
    // Generate unique RFQ reference
    const timestamp = Date.now().toString().slice(-6);
    const rfqReference = `RFQ-ARYA-${formData.country.slice(0, 3).toUpperCase()}-${timestamp}`;

    // Construct structured WhatsApp message payload for the retailer
    const itemsSummary = enquiryList.map(item =>
      `• ${item.product.name} (SKU: ${item.product.sku})\n  Qty: ${item.quantity} ${item.unit}${item.selectedColorway ? ` | Colorway: ${item.selectedColorway}` : ''}`
    ).join('\n');

    const whatsappText = encodeURIComponent(
      `*WHOLESALE ENQUIRY (${rfqReference})*\n` +
      `*Company:* ${formData.companyName} (${formData.businessType})\n` +
      `*Contact:* ${formData.contactPerson} (${formData.businessEmail})\n` +
      `*Country & Port:* ${formData.country} / ${formData.destinationPort || 'Standard Port'}\n` +
      `*Incoterm:* ${formData.incoterm} | *Timeline:* ${formData.targetTimeline}\n\n` +
      `*Requested Products:*\n${itemsSummary}\n\n` +
      (formData.additionalNotes ? `*Notes:* ${formData.additionalNotes}\n\n` : '') +
      `_Submitted via aryatrader.com wholesale portal_`
    );

    // Arya Trader primary export contact number: +919799706428
    const whatsappUrl = `https://wa.me/919799706428?text=${whatsappText}`;

    return {
      success: true,
      rfqReference,
      whatsappUrl
    };
  };

  return (
    <RFQContext.Provider
      value={{
        enquiryList,
        addToEnquiry,
        removeFromEnquiry,
        updateQuantity,
        clearEnquiryList,
        isInEnquiry,
        totalItemsCount,
        isEnquiryDrawerOpen,
        setIsEnquiryDrawerOpen,
        selectedDivision,
        setSelectedDivision,
        activeCurrency,
        setActiveCurrency,
        convertPrice,
        isCatalogModalOpen,
        catalogDivision,
        openCatalogModal,
        closeCatalogModal,
        isSampleModalOpen,
        sampleProduct,
        openSampleModal,
        closeSampleModal,
        isAdvisorOpen,
        setIsAdvisorOpen,
        selectedProductForDetail,
        setSelectedProductForDetail,
        isEnquiryModalOpen,
        enquiryModalProduct,
        enquiryModalCategory,
        openEnquiryModal,
        closeEnquiryModal,
        submitRFQ
      }}
    >
      {children}
    </RFQContext.Provider>
  );
};

export const useRFQ = () => {
  const context = useContext(RFQContext);
  if (!context) {
    throw new Error('useRFQ must be used within an RFQProvider');
  }
  return context;
};
