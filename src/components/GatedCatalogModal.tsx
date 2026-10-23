import React, { useState, useEffect } from 'react';
import { useRFQ } from '../context/RFQContext';
import { X, Download, FileText, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const GatedCatalogModal: React.FC = () => {
  const { isCatalogModalOpen, closeCatalogModal, catalogDivision } = useRFQ();

  const [divisionChoice, setDivisionChoice] = useState<'heritage' | 'pantry' | 'both'>(catalogDivision);
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('United States');
  const [isDownloaded, setIsDownloaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCatalogModal();
    };
    if (isCatalogModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCatalogModalOpen, closeCatalogModal]);

  if (!isCatalogModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloaded(true);
  };

  return (
    <div 
      onClick={closeCatalogModal}
      className="fixed inset-0 z-50 bg-[#1B2A4A]/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF6EE] rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#2B2622]/20 relative"
      >
        
        <button
          onClick={closeCatalogModal}
          className="absolute top-4 right-4 p-1.5 text-[#2B2622]/60 hover:text-[#2B2622] rounded-md hover:bg-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!isDownloaded ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#C8963E]">
                B2B Buyer Dossier
              </span>
              <span className="text-[#2B2622]/30 text-xs">·</span>
              <span className="text-xs text-[#2B2622]/60">Export Edition 2026</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1B2A4A] mb-2">
              Download wholesale export catalog
            </h3>

            <p className="text-xs text-[#2B2622]/70 leading-relaxed font-sans mb-6">
              Access complete technical data sheets, knot density specifications, container CBM stuffing formulas, and FOB Mundra volume pricing tiers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#2B2622]/70 block mb-1.5">
                  Select Division Dossier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setDivisionChoice('heritage')}
                    className={`py-2 px-1 text-center rounded text-xs font-medium border transition-colors ${
                      divisionChoice === 'heritage'
                        ? 'bg-[#1B2A4A] text-white border-[#1B2A4A]'
                        : 'bg-white border-[#2B2622]/15 text-[#2B2622]'
                    }`}
                  >
                    Heritage &amp; Home
                  </button>
                  <button
                    type="button"
                    onClick={() => setDivisionChoice('pantry')}
                    className={`py-2 px-1 text-center rounded text-xs font-medium border transition-colors ${
                      divisionChoice === 'pantry'
                        ? 'bg-[#6B7F5E] text-white border-[#6B7F5E]'
                        : 'bg-white border-[#2B2622]/15 text-[#2B2622]'
                    }`}
                  >
                    Pantry &amp; Agri
                  </button>
                  <button
                    type="button"
                    onClick={() => setDivisionChoice('both')}
                    className={`py-2 px-1 text-center rounded text-xs font-medium border transition-colors ${
                      divisionChoice === 'both'
                        ? 'bg-[#B5472F] text-white border-[#B5472F]'
                        : 'bg-white border-[#2B2622]/15 text-[#2B2622]'
                    }`}
                  >
                    Complete Dossier
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. David Weber"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Company / Entity Name *</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Weber Imports Ltd."
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
                    placeholder="buyer@company.com"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#2B2622] block mb-1">Import Country *</label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. United Kingdom"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#2B2622]/20 rounded focus:border-[#1B2A4A] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#1B2A4A] hover:bg-[#B5472F] text-white rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer mt-2"
              >
                <Download className="w-4 h-4 text-[#C8963E]" />
                <span>Download Official 2026 Catalog (PDF)</span>
              </button>

              <p className="text-[11px] text-[#2B2622]/50 text-center font-sans">
                Confidential wholesale pricing for registered commercial buyers and licensed trade importers.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#6B7F5E]/10 text-[#6B7F5E] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="font-serif text-2xl font-bold text-[#1B2A4A]">
              Catalog Download Ready
            </h4>

            <p className="text-xs text-[#2B2622]/80 leading-relaxed font-sans max-w-sm mx-auto">
              Thank you, <strong>{fullName}</strong>. The <strong>{divisionChoice.toUpperCase()}</strong> wholesale catalog has been unlocked.
            </p>

            <div className="p-4 bg-white rounded border border-[#2B2622]/10 text-left text-xs space-y-1.5 font-mono">
              <p>• File: ARYA_TRADER_EXPORT_DOSSIER_2026.pdf (14.2 MB)</p>
              <p>• Access Level: Verified B2B Trade Importer</p>
              <p>• Contact Desk: info@aryatrader.com | +91 97997 06428</p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={closeCatalogModal}
                className="w-full py-2.5 bg-[#1B2A4A] text-white rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B5472F]"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
