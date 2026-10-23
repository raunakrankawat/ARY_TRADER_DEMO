import React, { useEffect } from 'react';
import { useRFQ } from '../context/RFQContext';
import { EnquiryForm } from './EnquiryForm';
import { X, Sparkles } from 'lucide-react';

export const EnquiryModal: React.FC = () => {
  const { 
    isEnquiryModalOpen, 
    closeEnquiryModal, 
    enquiryModalProduct, 
    enquiryModalCategory 
  } = useRFQ();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeEnquiryModal();
    };
    if (isEnquiryModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEnquiryModalOpen, closeEnquiryModal]);

  if (!isEnquiryModalOpen) return null;

  return (
    <div 
      onClick={closeEnquiryModal}
      className="fixed inset-0 z-50 bg-[#1B2A4A]/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF6EE] rounded-2xl max-w-2xl w-full shadow-2xl border border-[#252822]/15 relative my-8 overflow-hidden animate-scale-up"
      >
        {/* Modal Header */}
        <div className="bg-[#1E211B] text-[#F7F4ED] p-5 sm:p-6 relative border-b border-white/10">
          <button
            type="button"
            onClick={closeEnquiryModal}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Enquiry Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-5 h-px bg-[#B89550]" />
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B89550]">
              Official B2B Trade Desk
            </span>
          </div>

          <h3 id="enquiry-modal-title" className="font-serif text-xl sm:text-2xl font-light text-white tracking-tight">
            {enquiryModalProduct 
              ? `Commercial Enquiry · ${enquiryModalProduct.name}`
              : 'Direct Commercial Sourcing Enquiry'}
          </h3>
          <p className="text-xs sm:text-sm text-[#F7F4ED]/75 font-sans mt-1">
            {enquiryModalProduct
              ? 'Request FOB/CIF price brackets, custom strike-off lots, or sample dispatch.'
              : 'Submit your wholesale specification or multi-category trade requirement directly to our Jodhpur export officers.'}
          </p>
        </div>

        {/* Modal Body with Scrollable Area */}
        <div className="max-h-[calc(85vh-100px)] overflow-y-auto">
          <EnquiryForm
            initialProduct={enquiryModalProduct}
            initialCategory={enquiryModalCategory}
            mode="modal"
            onClose={closeEnquiryModal}
          />
        </div>
      </div>
    </div>
  );
};
