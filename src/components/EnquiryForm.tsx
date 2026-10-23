import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  Mail, 
  User, 
  Phone, 
  Globe2, 
  Layers, 
  Scale, 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  Check, 
  Copy,
  Info
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { 
  submitEnquiry, 
  validateEnquiryInput, 
  EnquiryInput, 
  EnquiryValidationErrors, 
  EnquiryRecord 
} from '../services/enquiryService';

interface EnquiryFormProps {
  initialProduct?: Product | null;
  initialCategory?: string | null;
  mode?: 'modal' | 'page';
  onClose?: () => void;
  onSuccess?: (record: EnquiryRecord) => void;
}

const CATEGORY_OPTIONS = [
  'Carpets & Rugs',
  'Art & Handicrafts',
  'Antiques & Collectibles',
  'Makhana (Fox Nuts)',
  'Onion Powder',
  'Fresh Vegetables',
  'Custom Contract Manufacturing / Other'
];

const INCOTERM_OPTIONS = ['FOB (Mundra / Nhava Sheva)', 'CIF (Port of Destination)', 'EXW (Jodhpur Facility)', 'CFR / DDP'];

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialProduct = null,
  initialCategory = null,
  mode = 'modal',
  onClose,
  onSuccess
}) => {
  // Form State
  const [buyerName, setBuyerName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneWhatsapp, setPhoneWhatsapp] = useState('');
  
  // Product / Category Association
  const [selectedProductId, setSelectedProductId] = useState<string>(initialProduct?.id || '');
  const [productCategory, setProductCategory] = useState<string>(
    initialProduct?.category || initialCategory || ''
  );
  
  // Commercial Parameters
  const [quantity, setQuantity] = useState('');
  const [destination, setDestination] = useState('');
  const [destinationPort, setDestinationPort] = useState('');
  const [incoterm, setIncoterm] = useState('FOB (Mundra / Nhava Sheva)');
  const [additionalRequirements, setAdditionalRequirements] = useState('');

  // UI States
  const [errors, setErrors] = useState<EnquiryValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceNumber: string;
    record: EnquiryRecord;
    whatsappNotificationUrl: string;
    emailNotificationDraft: { to: string; subject: string; body: string };
  } | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Sync if initial props change
  useEffect(() => {
    if (initialProduct) {
      setSelectedProductId(initialProduct.id);
      setProductCategory(initialProduct.category);
    } else if (initialCategory) {
      setProductCategory(initialCategory);
    }
  }, [initialProduct, initialCategory]);

  const activeProduct = PRODUCTS.find(p => p.id === selectedProductId) || (initialProduct || null);

  const handleProductSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pId = e.target.value;
    setSelectedProductId(pId);
    if (pId) {
      const found = PRODUCTS.find(p => p.id === pId);
      if (found) {
        setProductCategory(found.category);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Client-side validation
    const payload: EnquiryInput = {
      buyerName,
      businessEmail,
      companyName,
      phoneWhatsapp,
      productId: activeProduct?.id,
      productName: activeProduct?.name,
      productCategory: productCategory || (activeProduct ? activeProduct.category : 'General Sourcing'),
      quantity,
      destination,
      destinationPort,
      incoterm,
      additionalRequirements
    };

    const validation = validateEnquiryInput(payload);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const result = await submitEnquiry(payload);
      setIsSubmitting(false);
      setSubmissionResult(result);
      if (onSuccess) {
        onSuccess(result.record);
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setServerError(err?.message || 'Submission failed. Please check connection and try again.');
    }
  };

  const copyReference = () => {
    if (submissionResult?.referenceNumber) {
      navigator.clipboard.writeText(submissionResult.referenceNumber);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const resetForm = () => {
    setSubmissionResult(null);
    setBuyerName('');
    setBusinessEmail('');
    setCompanyName('');
    setPhoneWhatsapp('');
    setQuantity('');
    setDestination('');
    setDestinationPort('');
    setAdditionalRequirements('');
    setErrors({});
    setServerError(null);
  };

  return (
    <div className="w-full">
      {/* SUCCESS STATE */}
      {submissionResult ? (
        <div className="p-6 sm:p-8 text-center space-y-6 animate-fade-in font-sans">
          <div className="w-16 h-16 bg-[#5B6E4E]/15 text-[#5B6E4E] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#5B6E4E]/10">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B89550]">
              Official Commercial Record Created
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#252822]">
              Wholesale Enquiry Successfully Registered
            </h3>
            <p className="text-xs sm:text-sm text-[#252822]/75 max-w-md mx-auto leading-relaxed">
              Your inquiry has been encrypted, assigned to our Jodhpur export trade desk, and logged in our persistent database.
            </p>
          </div>

          {/* Reference Badge Card */}
          <div className="bg-[#F7F4ED] border border-[#252822]/15 rounded-xl p-4 sm:p-5 max-w-md mx-auto text-left space-y-3 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#252822]/10">
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#252822]/60 tracking-wider block">
                  Reference Dossier Number
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-[#1B2A4A] tracking-tight">
                  {submissionResult.referenceNumber}
                </span>
              </div>
              <button
                type="button"
                onClick={copyReference}
                className="px-2.5 py-1.5 text-xs rounded bg-white border border-[#252822]/15 hover:bg-[#eae5d8] text-[#252822] flex items-center gap-1.5 cursor-pointer transition-colors shadow-2xs"
                title="Copy reference number"
              >
                {copiedRef ? <Check className="w-3.5 h-3.5 text-[#5B6E4E]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedRef ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[#252822]/60 block text-[11px]">Assigned Officer Desk:</span>
                <span className="font-medium text-[#252822]">Jodhpur Export Bureau</span>
              </div>
              <div>
                <span className="text-[#252822]/60 block text-[11px]">SLA Response Window:</span>
                <span className="font-medium text-[#5B6E4E]">Within 2–4 Hours</span>
              </div>
              <div className="col-span-2 pt-1 border-t border-[#252822]/10">
                <span className="text-[#252822]/60 block text-[11px]">Target Sourcing Subject:</span>
                <span className="font-medium text-[#252822]">
                  {submissionResult.record.productName || submissionResult.record.productCategory || 'General Commercial Sourcing'}
                </span>
              </div>
            </div>
          </div>

          {/* Notification Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              href={submissionResult.whatsappNotificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs tracking-wide flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <span>Instant WhatsApp Desk Ping</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {onClose ? (
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto py-3 px-5 rounded-lg bg-[#1B2A4A] hover:bg-[#253860] text-white font-medium text-xs tracking-wide transition-colors cursor-pointer"
              >
                Done / Close
              </button>
            ) : (
              <button
                type="button"
                onClick={resetForm}
                className="w-full sm:w-auto py-3 px-5 rounded-lg bg-[#1B2A4A] hover:bg-[#253860] text-white font-medium text-xs tracking-wide transition-colors cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            )}
          </div>

          <p className="text-[11px] text-[#252822]/50 italic max-w-sm mx-auto">
            A confirmation transmission draft has also been dispatched to our sales team at enquiry@ayatrader.com.
          </p>
        </div>
      ) : (
        /* FORM INPUT STATE */
        <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-7 space-y-5 font-sans">
          
          {/* Header context strip if specific product prefilled */}
          {activeProduct && (
            <div className="p-3.5 bg-[#B89550]/10 border border-[#B89550]/30 rounded-lg flex items-center gap-3">
              <img 
                src={activeProduct.image} 
                alt={activeProduct.name} 
                className="w-12 h-12 object-cover rounded border border-[#252822]/15 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] uppercase font-semibold text-[#B75E43] tracking-wider block">
                  Product Association Linked
                </span>
                <h4 className="font-serif text-sm font-medium text-[#252822] truncate">
                  {activeProduct.name}
                </h4>
                <p className="text-[11px] text-[#252822]/70 font-mono">
                  SKU: {activeProduct.sku} · MOQ: {activeProduct.moq}
                </p>
              </div>
            </div>
          )}

          {/* Server Error Alert */}
          {serverError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          {/* Section 1: Buyer & Corporate Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-px bg-[#B89550]" />
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B75E43]">
                1. Buyer &amp; Organization Coordinates
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Buyer Name */}
              <div>
                <label className="block text-xs font-medium text-[#252822] mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#252822]/40" />
                  <input
                    type="text"
                    required
                    value={buyerName}
                    onChange={(e) => {
                      setBuyerName(e.target.value);
                      if (errors.buyerName) setErrors({ ...errors, buyerName: undefined });
                    }}
                    placeholder="e.g. John Doe / Elena Rostova"
                    className={`w-full pl-9 pr-3 py-2 text-xs bg-white rounded-lg border text-[#252822] focus:outline-none transition-colors ${
                      errors.buyerName ? 'border-red-500 ring-1 ring-red-500/20' : 'border-[#252822]/20 focus:border-[#B89550]'
                    }`}
                  />
                </div>
                {errors.buyerName && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.buyerName}</p>
                )}
              </div>

              {/* Business Email */}
              <div>
                <label className="block text-xs font-medium text-[#252822] mb-1">
                  Business / Corporate Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#252822]/40" />
                  <input
                    type="email"
                    required
                    value={businessEmail}
                    onChange={(e) => {
                      setBusinessEmail(e.target.value);
                      if (errors.businessEmail) setErrors({ ...errors, businessEmail: undefined });
                    }}
                    placeholder="buyer@globalimport.com"
                    className={`w-full pl-9 pr-3 py-2 text-xs bg-white rounded-lg border text-[#252822] focus:outline-none transition-colors ${
                      errors.businessEmail ? 'border-red-500 ring-1 ring-red-500/20' : 'border-[#252822]/20 focus:border-[#B89550]'
                    }`}
                  />
                </div>
                {errors.businessEmail && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.businessEmail}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-medium text-[#252822] mb-1">
                  Company / Buying House Name
                </label>
                <div className="relative">
                  <Building2 className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#252822]/40" />
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Nordic Decor AB / Apex Commodities"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-lg border border-[#252822]/20 focus:border-[#B89550] text-[#252822] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* WhatsApp / Phone */}
              <div>
                <label className="block text-xs font-medium text-[#252822] mb-1">
                  WhatsApp / Direct Phone
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#252822]/40" />
                  <input
                    type="tel"
                    value={phoneWhatsapp}
                    onChange={(e) => setPhoneWhatsapp(e.target.value)}
                    placeholder="+1 (555) 234-5678"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-lg border border-[#252822]/20 focus:border-[#B89550] text-[#252822] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Commodity & Sourcing Scope */}
          <div className="space-y-3 pt-2 border-t border-[#252822]/10">
            <div className="flex items-center gap-2">
              <span className="w-5 h-px bg-[#B89550]" />
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B75E43]">
                2. Commodity, Product &amp; Volume Scope
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Product Selection if not locked */}
              <div>
                <label className="block text-xs font-medium text-[#252822] mb-1">
                  Associated Product (Optional)
                </label>
                <select
                  value={selectedProductId}
                  onChange={handleProductSelectChange}
                  className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#252822]/20 focus:border-[#B89550] text-[#252822] focus:outline-none transition-colors"
                >
                  <option value="">-- General Commercial Enquiry --</option>
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.sku})
                    </option>
                  ))}
                </select>
              </div>

              {/* Product Category */}
              <div>
                <label className="block text-xs font-medium text-[#252822] mb-1">
                  Product Category
                </label>
                <select
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#252822]/20 focus:border-[#B89550] text-[#252822] focus:outline-none transition-colors"
                >
                  <option value="">General Sourcing / Multiple Lines</option>
                  {CATEGORY_OPTIONS.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Estimated Quantity */}
              <div>
                <label className="block text-xs font-medium text-[#252822] mb-1">
                  Estimated Quantity / Volume
                </label>
                <div className="relative">
                  <Scale className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#252822]/40" />
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 500 sq.ft, 2x 40ft HQ containers, 10 MT"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-lg border border-[#252822]/20 focus:border-[#B89550] text-[#252822] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Preferred IncoTerm */}
              <div>
                <label className="block text-xs font-medium text-[#252822] mb-1">
                  Preferred IncoTerm Quotation
                </label>
                <select
                  value={incoterm}
                  onChange={(e) => setIncoterm(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#252822]/20 focus:border-[#B89550] text-[#252822] focus:outline-none transition-colors"
                >
                  {INCOTERM_OPTIONS.map(term => (
                    <option key={term} value={term}>{term}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Destination & Specifications */}
          <div className="space-y-3 pt-2 border-t border-[#252822]/10">
            <div className="flex items-center gap-2">
              <span className="w-5 h-px bg-[#B89550]" />
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B75E43]">
                3. Destination Port &amp; Custom Requirements
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Destination Country */}
              <div>
                <label className="block text-xs font-medium text-[#252822] mb-1">
                  Destination Country / Region <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Globe2 className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#252822]/40" />
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => {
                      setDestination(e.target.value);
                      if (errors.destination) setErrors({ ...errors, destination: undefined });
                    }}
                    placeholder="e.g. Germany, United States, UAE, Japan"
                    className={`w-full pl-9 pr-3 py-2 text-xs bg-white rounded-lg border text-[#252822] focus:outline-none transition-colors ${
                      errors.destination ? 'border-red-500 ring-1 ring-red-500/20' : 'border-[#252822]/20 focus:border-[#B89550]'
                    }`}
                  />
                </div>
                {errors.destination && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.destination}</p>
                )}
              </div>

              {/* Destination Port */}
              <div>
                <label className="block text-xs font-medium text-[#252822] mb-1">
                  Discharge Port / Airport (Optional)
                </label>
                <input
                  type="text"
                  value={destinationPort}
                  onChange={(e) => setDestinationPort(e.target.value)}
                  placeholder="e.g. Hamburg, Long Beach, Jebel Ali"
                  className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#252822]/20 focus:border-[#B89550] text-[#252822] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="block text-xs font-medium text-[#252822] mb-1">
                Technical Specifications / Custom Loom Dimensions / Sourcing Notes
              </label>
              <textarea
                rows={3}
                value={additionalRequirements}
                onChange={(e) => setAdditionalRequirements(e.target.value)}
                placeholder="Include custom dimensions (e.g. 10x14 ft carpet), moisture threshold requirements, private-label packaging desires, or certification needs..."
                className="w-full p-3 text-xs bg-white rounded-lg border border-[#252822]/20 focus:border-[#B89550] text-[#252822] focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>

          {/* Submission and Legal Notes */}
          <div className="pt-3 border-t border-[#252822]/10 space-y-3">
            <div className="flex items-center justify-between text-[11px] text-[#252822]/60">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5B6E4E]" />
                <span>Encrypted Direct Factory Transmission</span>
              </span>
              <span>Ref Generated upon Save</span>
            </div>

            <div className="flex items-center justify-end gap-3">
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="px-4 py-2.5 text-xs font-medium text-[#252822]/70 hover:text-[#252822] rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-lg bg-[#B75E43] hover:bg-[#9e4c34] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing &amp; Persisting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit B2B Enquiry</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </form>
      )}
    </div>
  );
};
