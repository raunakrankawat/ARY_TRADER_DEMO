import React, { useState, useEffect } from 'react';
import { useRFQ } from '../context/RFQContext';
import { X, PackageCheck, CheckCircle2, ArrowRight, ShieldCheck, Plane } from 'lucide-react';

export const SampleRequestModal: React.FC = () => {
  const { isSampleModalOpen, closeSampleModal, sampleProduct } = useRFQ();

  const [sampleType, setSampleType] = useState<'strike_off' | 'yarn_swatch' | 'food_pack'>('strike_off');
  const [recipientName, setRecipientName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [courierAccount, setCourierAccount] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSampleModal();
    };
    if (isSampleModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSampleModalOpen, closeSampleModal]);

  if (!isSampleModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div 
      onClick={closeSampleModal}
      className="fixed inset-0 z-50 bg-[#1B2A4A]/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF6EE] rounded-lg max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#2B2622]/20 relative max-h-[90vh] overflow-y-auto"
      >
        
        <button
          onClick={closeSampleModal}
          className="absolute top-4 right-4 p-1.5 text-[#2B2622]/60 hover:text-[#2B2622] rounded-md hover:bg-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B5472F]">
                Physical Verification
              </span>
              <span className="text-[#2B2622]/30 text-xs">·</span>
              <span className="text-xs text-[#2B2622]/60">Air Express Dispatch</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1B2A4A] mb-2">
              Request trade sample / strike-off
            </h3>

            <p className="text-xs text-[#2B2622]/70 leading-relaxed font-sans mb-6">
              Evaluate real yarn textures, pile shear, and botanical dyes, or inspect vacuum-sealed food grade samples with certified laboratory analysis (COA).
            </p>

            {sampleProduct && (
              <div className="p-3 bg-white rounded border border-[#2B2622]/10 flex items-center gap-3 mb-6">
                <img
                  src={sampleProduct.image}
                  alt={sampleProduct.name}
                  className="w-12 h-12 rounded object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xs font-semibold text-[#1B2A4A]">{sampleProduct.name}</p>
                  <p className="text-[11px] text-[#2B2622]/60 font-mono">SKU: {sampleProduct.sku} · {sampleProduct.origin}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#2B2622]/70 block mb-1.5">
                  Select Sample Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSampleType('strike_off')}
                    className={`py-2 px-2 text-left rounded text-xs font-medium border transition-colors ${
                      sampleType === 'strike_off'
                        ? 'bg-[#1B2A4A] text-white border-[#1B2A4A]'
                        : 'bg-white border-[#2B2622]/15 text-[#2B2622]'
                    }`}
                  >
                    30x30cm Rug Strike-off
                  </button>
                  <button
                    type="button"
                    onClick={() => setSampleType('yarn_swatch')}
                    className={`py-2 px-2 text-left rounded text-xs font-medium border transition-colors ${
                      sampleType === 'yarn_swatch'
                        ? 'bg-[#1B2A4A] text-white border-[#1B2A4A]'
                        : 'bg-white border-[#2B2622]/15 text-[#2B2622]'
                    }`}
                  >
                    Wool/Silk Yarn Ring
                  </button>
                  <button
                    type="button"
                    onClick={() => setSampleType('food_pack')}
                    className={`py-2 px-2 text-left rounded text-xs font-medium border transition-colors ${
                      sampleType === 'food_pack'
                        ? 'bg-[#6B7F5E] text-white border-[#6B7F5E]'
                        : 'bg-white border-[#2B2622]/15 text-[#2B2622]'
                    }`}
                  >
                    1kg Food COA Sample
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Recipient Name *</label>
                  <input
                    type="text"
                    required
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="e.g. Marcus Vance"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Vance Interiors LLC"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcus@vanceinteriors.com"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 212 555 0192"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-[#2B2622] block mb-1">Full Courier Delivery Address *</label>
                <textarea
                  rows={2}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street address, City, State/Province, Postal Code, Country..."
                  className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#2B2622] block mb-1">DHL / FedEx Account Number (Optional)</label>
                <input
                  type="text"
                  value={courierAccount}
                  onChange={(e) => setCourierAccount(e.target.value)}
                  placeholder="Leave blank if requesting Arya Trader standard prepaid air freight"
                  className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#B5472F] hover:bg-[#1B2A4A] text-white rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <PackageCheck className="w-4 h-4" />
                <span>Submit Sample Dispatch Request</span>
              </button>

              <p className="text-[11px] text-[#2B2622]/50 text-center font-sans">
                Sample costs are 100% credited against your first commercial order.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#6B7F5E]/10 text-[#6B7F5E] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="font-serif text-2xl font-bold text-[#1B2A4A]">
              Sample Request Scheduled
            </h4>

            <p className="text-xs text-[#2B2622]/80 leading-relaxed font-sans max-w-sm mx-auto">
              Our export workshop in Jodhpur will prepare your <strong>{sampleType.replace('_', ' ')}</strong>. You will receive an air waybill (AWB) tracking number via email within 24–48 hours.
            </p>

            <div className="p-4 bg-white rounded border border-[#2B2622]/10 text-left text-xs space-y-1 font-mono">
              <p>• Recipient: {recipientName} ({company})</p>
              <p>• Transit: Air Courier via DHL/FedEx Express</p>
              <p>• Support: info@aryatrader.com | +91 97997 06428</p>
            </div>

            <button
              onClick={closeSampleModal}
              className="w-full py-2.5 bg-[#1B2A4A] text-white rounded text-xs font-semibold uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
