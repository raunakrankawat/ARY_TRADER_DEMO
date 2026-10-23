import React, { useState, useEffect } from 'react';
import { useRFQ } from '../context/RFQContext';
import { useNavigation } from '../context/NavigationContext';
import { RFQFormData, Currency } from '../types';
import { 
  X, 
  Trash2, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  FileText, 
  Copy, 
  Check, 
  Globe2, 
  ShieldCheck,
  Building2,
  Calendar,
  Anchor,
  ShoppingCart,
  Plus,
  Minus,
  ExternalLink
} from 'lucide-react';

export const RFQDrawer: React.FC = () => {
  const { 
    enquiryList, 
    removeFromEnquiry, 
    updateQuantity, 
    isEnquiryDrawerOpen, 
    setIsEnquiryDrawerOpen, 
    clearEnquiryList,
    activeCurrency,
    submitRFQ,
    convertPrice
  } = useRFQ();

  const [step, setStep] = useState<'cart' | 'details' | 'confirmation'>('cart');
  const [copied, setCopied] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{ reference: string; whatsappUrl: string } | null>(null);

  const [formData, setFormData] = useState<RFQFormData>({
    companyName: '',
    contactPerson: '',
    businessEmail: '',
    phoneWhatsapp: '',
    country: 'United States',
    destinationPort: '',
    businessType: 'importer',
    incoterm: 'FOB',
    targetTimeline: '1-2_months',
    currency: activeCurrency,
    additionalNotes: ''
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsEnquiryDrawerOpen(false);
    };
    if (isEnquiryDrawerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEnquiryDrawerOpen, setIsEnquiryDrawerOpen]);

  if (!isEnquiryDrawerOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'cart') {
      if (enquiryList.length === 0) return;
      setStep('details');
    } else if (step === 'details') {
      // Submit
      submitRFQ(formData).then(res => {
        setSubmissionResult({
          reference: res.rfqReference,
          whatsappUrl: res.whatsappUrl
        });
        setStep('confirmation');
      });
    }
  };

  const { navigateTo } = useNavigation();

  const handleCopySummary = () => {
    if (!submissionResult) return;
    const text = `RFQ Reference: ${submissionResult.reference}\nCompany: ${formData.companyName}\nItems: ${enquiryList.length} products\nContact: info@aryatrader.com | +919799706428`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCartWhatsAppLink = () => {
    if (enquiryList.length === 0) return '';
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ayatrader.com';
    const itemsLines = enquiryList.map((item, idx) => {
      const productUrl = `${baseUrl}/#/categories?categoryFilter=${item.product.division}`;
      return `${idx + 1}. *${item.product.name}* (SKU: ${item.product.sku})\n   • Quantity: ${item.quantity} ${item.unit}${item.selectedColorway ? ` | Colorway: ${item.selectedColorway}` : ''}\n   • Product Link: ${productUrl}`;
    }).join('\n\n');

    const message = 
      `*WHOLESALE QUOTE REQUEST — AYA TRADER*\n\n` +
      `Hello Abhyashish Traders Export Desk, I would like to request an itemized proforma quote for the following products in My Cart:\n\n` +
      `${itemsLines}\n\n` +
      `Please provide FOB/CIF pricing, production lead times, and container stuffing specifications.\n\n` +
      `_Sent via AyaTrader Web Quote Cart_`;

    return `https://wa.me/919799706428?text=${encodeURIComponent(message)}`;
  };

  return (
    <div 
      onClick={() => setIsEnquiryDrawerOpen(false)}
      className="fixed inset-0 z-50 overflow-hidden bg-[#252822]/60 backdrop-blur-xs flex justify-end"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-[#F7F4ED] h-full shadow-2xl flex flex-col justify-between overflow-hidden"
      >
        
        {/* Drawer Header */}
        <div className="p-6 bg-white border-b border-[#252822]/10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-[#B75E43]" />
              <span className="font-serif text-2xl font-medium text-[#252822]">
                My Cart (Quote Basket)
              </span>
              <span className="text-xs font-mono font-semibold bg-gradient-to-r from-[#B75E43] to-[#B89550] text-white px-2 py-0.5 rounded-full shadow-2xs">
                {enquiryList.length}
              </span>
            </div>
            <p className="text-xs text-[#252822]/60 mt-0.5 font-sans">
              Consolidated commercial RFQ · Direct trade desk proforma enquiry
            </p>
          </div>

          <button
            onClick={() => setIsEnquiryDrawerOpen(false)}
            aria-label="Close My Cart drawer"
            className="p-2 text-[#252822]/60 hover:text-[#B75E43] rounded-md hover:bg-[#F7F4ED] cursor-pointer transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 font-sans">
          
          {step === 'cart' && (
            <div>
              {enquiryList.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FAF6EE] border border-[#2B2622]/15 mx-auto flex items-center justify-center text-[#B89550] shadow-xs">
                    <ShoppingCart className="w-8 h-8 opacity-70" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-normal text-[#1B2A4A] mb-1">
                      Your quote cart is empty
                    </h4>
                    <p className="text-xs text-[#2B2622]/60 max-w-xs mx-auto leading-relaxed">
                      You haven’t added any export commodities yet. Explore our hand-knotted rugs, heritage textiles, or agricultural pantry commodities to request commercial container pricing.
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setIsEnquiryDrawerOpen(false);
                        navigateTo('categories');
                      }}
                      className="px-5 py-2.5 bg-[#1B2A4A] hover:bg-[#B75E43] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
                    >
                      <span>Explore Product Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#252822]/60 pb-2 border-b border-[#252822]/10">
                    <span className="font-medium text-[#252822]">Selected Items in Cart ({enquiryList.length})</span>
                    <button
                      onClick={clearEnquiryList}
                      className="text-[#B75E43] hover:underline font-medium cursor-pointer"
                    >
                      Clear All
                    </button>
                  </div>

                  {enquiryList.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-4 rounded-xl bg-white border border-[#252822]/10 flex gap-4 items-start shadow-2xs hover:border-[#B89550]/40 transition-colors"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-18 h-18 rounded-lg object-cover shrink-0 bg-[#FAF6EE] border border-[#252822]/10"
                        referrerPolicy="no-referrer"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-serif font-medium text-[#1B2A4A] truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromEnquiry(item.product.id)}
                            title="Remove item"
                            aria-label={`Remove ${item.product.name} from cart`}
                            className="text-[#252822]/40 hover:text-red-600 p-1 rounded transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <p className="text-[11px] font-mono text-[#252822]/60 mb-2.5">
                          SKU: {item.product.sku} {item.selectedColorway ? `· Color: ${item.selectedColorway}` : ''}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-[#252822]/5">
                          {/* Stepper Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] text-[#252822]/70 font-sans">Qty:</span>
                            <div className="flex items-center border border-[#252822]/20 rounded-md bg-[#FAF6EE] text-xs overflow-hidden">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                                aria-label="Decrease quantity"
                                className="px-2 py-1 hover:bg-[#eae5d8] text-[#252822] cursor-pointer transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.product.id, Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-14 px-1 py-1 text-center font-mono font-medium focus:outline-none bg-transparent"
                              />
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                aria-label="Increase quantity"
                                className="px-2 py-1 hover:bg-[#eae5d8] text-[#252822] cursor-pointer transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-[11px] text-[#252822]/60 font-sans border-l border-[#252822]/15 bg-white/50">
                                {item.unit}
                              </span>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-[10px] text-[#252822]/50 block">Indicative:</span>
                            <span className="font-serif font-bold text-xs text-[#1B2A4A]">
                              {convertPrice(item.product.estimatedPriceRangeUSD)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="p-4 bg-white rounded-lg border border-[#2B2622]/10 space-y-2 text-xs">
                    <div className="flex justify-between text-[#2B2622]/70">
                      <span>Standard Packaging:</span>
                      <span className="font-medium text-[#1B2A4A]">Export Crates / Barrier Sacks Included</span>
                    </div>
                    <div className="flex justify-between text-[#2B2622]/70">
                      <span>Export Clearance Docs:</span>
                      <span className="font-medium text-[#6B7F5E]">COO, Phyto, Fumigation &amp; Lab COA</span>
                    </div>
                    <div className="flex justify-between text-[#2B2622]/70">
                      <span>Dispatch Gateway:</span>
                      <span className="font-medium text-[#1B2A4A]">Mundra Port / Nhava Sheva (JNPT)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 'details' && (
            <form id="rfq-form" onSubmit={handleNextStep} className="space-y-4">
              <div className="p-3 bg-white rounded border border-[#2B2622]/10 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C8963E] block mb-1">
                  Step 2 of 2: Commercial Profile
                </span>
                <p className="text-xs text-[#2B2622]/70">
                  Provide your business details to receive a proforma invoice and freight schedule within 12 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Company / Entity Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Nordic Home Living ApS"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    placeholder="purchasing@company.com"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneWhatsapp}
                    onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                    placeholder="+1 415 555 2671"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Country of Import *</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Germany, USA, UAE..."
                    className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Destination Discharge Port</label>
                  <input
                    type="text"
                    value={formData.destinationPort}
                    onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                    placeholder="e.g. Port of Hamburg, Jebel Ali..."
                    className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Buyer Type</label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value as any })}
                    className="w-full px-2.5 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  >
                    <option value="importer">Importer / Wholesaler</option>
                    <option value="retailer">Retailer / Boutique</option>
                    <option value="food_distributor">Food &amp; Agri Distributor</option>
                    <option value="interior_designer">Interior Designer / Specifier</option>
                    <option value="hospitality">Hotel / Resort Project</option>
                    <option value="other">Other Commercial Buyer</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Target Incoterm</label>
                  <select
                    value={formData.incoterm}
                    onChange={(e) => setFormData({ ...formData, incoterm: e.target.value as any })}
                    className="w-full px-2.5 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  >
                    <option value="FOB">FOB Mundra Port</option>
                    <option value="CIF">CIF Destination Port</option>
                    <option value="CFR">CFR Destination Port</option>
                    <option value="EXW">EXW Jodhpur Facility</option>
                    <option value="DDP">DDP (Delivered Duty Paid)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Target Timeline</label>
                  <select
                    value={formData.targetTimeline}
                    onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value as any })}
                    className="w-full px-2.5 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  >
                    <option value="urgent">Immediate (In Stock / Fast-Track)</option>
                    <option value="1-2_months">1 – 2 Months (Standard)</option>
                    <option value="quarterly">Next Quarter Scheduled</option>
                    <option value="seasonal">Annual Crop / Seasonal Contract</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-[#2B2622] block mb-1">
                  Custom Sizing, Private Label or Packing Specifications
                </label>
                <textarea
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Mention custom rug dimensions, private label pouch branding requirements, or specific moisture/mesh parameters..."
                  className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                />
              </div>
            </form>
          )}

          {step === 'confirmation' && submissionResult && (
            <div className="space-y-6 text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#6B7F5E]/10 text-[#6B7F5E] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#6B7F5E]">
                  Enquiry Transmitted Successfully
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1B2A4A] mt-1">
                  Quotation Docket Generated
                </h3>
                <p className="text-xs font-mono bg-white p-2.5 rounded border border-[#2B2622]/10 mt-3 inline-block">
                  Reference: <span className="font-bold text-[#B5472F]">{submissionResult.reference}</span>
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-[#2B2622]/10 text-left text-xs space-y-2 font-sans">
                <p><strong>Company:</strong> {formData.companyName} ({formData.country})</p>
                <p><strong>Primary Contact:</strong> {formData.contactPerson} ({formData.businessEmail})</p>
                <p><strong>Discharge Port &amp; Terms:</strong> {formData.destinationPort || 'Standard Port'} · {formData.incoterm}</p>
                <p><strong>Requested Items:</strong> {enquiryList.length} products listed</p>
              </div>

              {/* Immediate WhatsApp Handoff CTA */}
              <div className="space-y-3">
                <a
                  href={submissionResult.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#25D366] text-white rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Direct via WhatsApp Business (+91 97997 06428)</span>
                </a>

                <button
                  onClick={handleCopySummary}
                  className="w-full py-2.5 bg-white border border-[#2B2622]/15 text-[#2B2622] rounded text-xs font-medium hover:bg-[#FAF6EE] flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4 text-[#6B7F5E]" /> : <Copy className="w-4 h-4 text-[#C8963E]" />}
                  <span>{copied ? 'Summary Copied to Clipboard!' : 'Copy Summary for Email Records'}</span>
                </button>
              </div>

              <p className="text-[11px] text-[#2B2622]/60">
                A copy has been recorded for Abhyashish Traders Export Desk (info@aryatrader.com). You will receive formal proforma documents with HS Code classification within 12 hours.
              </p>
            </div>
          )}

        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 bg-white border-t border-[#252822]/10 font-sans">
          {step === 'cart' && enquiryList.length > 0 && (
            <div className="space-y-2.5">
              {/* Primary Direct B2B WhatsApp Action */}
              <a
                href={getCartWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request a Quote via WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              {/* Secondary Formal Proforma Inquiry Path */}
              <button
                onClick={() => setStep('details')}
                className="w-full py-3 bg-[#1B2A4A] hover:bg-[#B75E43] text-white rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <span>Or Enter Formal Commercial Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <p className="text-center text-[11px] text-[#252822]/55 font-sans pt-1">
                Opens prefilled WhatsApp with item names, quantities, and direct links without auto-sending.
              </p>
            </div>
          )}

          {step === 'details' && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep('cart')}
                className="w-1/3 py-2.5 border border-[#252822]/20 text-[#252822] rounded text-xs font-medium hover:bg-[#F7F4ED] cursor-pointer"
              >
                Back to Basket
              </button>

              <button
                form="rfq-form"
                type="submit"
                className="w-2/3 py-2.5 bg-[#B75E43] hover:bg-[#9e4c34] text-white rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <span>Submit Consolidated RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 'confirmation' && (
            <button
              onClick={() => {
                clearEnquiryList();
                setIsEnquiryDrawerOpen(false);
                setStep('cart');
              }}
              className="w-full py-2.5 bg-[#1B2A4A] text-white rounded text-xs font-semibold uppercase tracking-wider"
            >
              Done &amp; Return to Storefront
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
