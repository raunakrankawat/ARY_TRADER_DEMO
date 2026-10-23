import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { useRFQ } from '../context/RFQContext';
import { 
  X, 
  Check, 
  Plus, 
  Minus, 
  ShieldCheck, 
  Package, 
  Clock, 
  Globe2, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToEnquiry, isInEnquiry, convertPrice, openSampleModal, openEnquiryModal } = useRFQ();
  const [quantity, setQuantity] = useState(1);
  const [selectedColorway, setSelectedColorway] = useState<string>('');

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedColorway(product.colorways?.[0]?.name || '');
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const inBasket = isInEnquiry(product.id);
  const isPantry = product.division === 'pantry';

  const handleAdd = () => {
    addToEnquiry(product, quantity, selectedColorway || undefined);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#121316]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
    >
      <div 
        className="bg-white rounded-xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#252822]/15 flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#252822]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider ${
              isPantry ? 'bg-[#5B6E4E]/15 text-[#5B6E4E]' : 'bg-[#B75E43]/15 text-[#B75E43]'
            }`}>
              {product.category}
            </span>
            <span className="text-xs text-[#252822]/50 font-mono">
              SKU: {product.sku}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-full text-[#252822]/60 hover:text-[#252822] hover:bg-[#F7F4ED] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Imagery Column */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#EFEAE1] border border-[#252822]/10 shadow-xs relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Colorways / Variants if applicable */}
              {product.colorways && product.colorways.length > 0 && (
                <div className="p-4 bg-[#F7F4ED] rounded-lg border border-[#252822]/10 space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#252822]/70 block">
                    Available Loom Colorways:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.colorways.map((cw) => (
                      <button
                        key={cw.name}
                        onClick={() => setSelectedColorway(cw.name)}
                        className={`px-3 py-1.5 rounded text-xs font-sans transition-all flex items-center gap-2 cursor-pointer border ${
                          selectedColorway === cw.name
                            ? 'bg-[#1B2A4A] text-white border-[#1B2A4A] shadow-xs'
                            : 'bg-white text-[#252822] border-[#252822]/15 hover:border-[#1B2A4A]'
                        }`}
                      >
                        <span 
                          className="w-3 h-3 rounded-full border border-black/20"
                          style={{ backgroundColor: cw.hex }}
                        />
                        <span>{cw.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Specifications & Overview Column */}
            <div className="space-y-5">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#252822] leading-tight">
                  {product.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#B75E43] font-medium font-sans mt-1">
                  {product.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#252822]/75 font-sans leading-relaxed mt-3">
                  {product.description}
                </p>
              </div>

              {/* Wholesale Key Commercial Parameters */}
              <div className="grid grid-cols-2 gap-3 p-4 bg-[#F7F4ED] rounded-lg border border-[#252822]/10 text-xs font-sans">
                <div>
                  <span className="text-[#252822]/60 block text-[11px]">Minimum Order Quantity:</span>
                  <strong className="text-[#252822] block mt-0.5">{product.moq}</strong>
                </div>
                <div>
                  <span className="text-[#252822]/60 block text-[11px]">Production Lead Time:</span>
                  <strong className="text-[#252822] block mt-0.5">{product.leadTime}</strong>
                </div>
                <div>
                  <span className="text-[#252822]/60 block text-[11px]">Indicative Wholesale Price:</span>
                  <strong className="text-[#B89550] block mt-0.5">{convertPrice(product.estimatedPriceRangeUSD)}</strong>
                </div>
                <div>
                  <span className="text-[#252822]/60 block text-[11px]">Export Origin Cluster:</span>
                  <strong className="text-[#252822] block mt-0.5">{product.origin}</strong>
                </div>
              </div>

              {/* Action Buttons & Quantity */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#252822]/20 rounded bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-[#252822] hover:bg-[#F7F4ED] cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 py-2 text-xs font-mono font-bold text-[#252822]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-[#252822] hover:bg-[#F7F4ED] cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={handleAdd}
                    className={`flex-1 py-2.5 px-4 rounded text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                      inBasket
                        ? 'bg-[#5B6E4E] text-white hover:bg-[#4d5e42]'
                        : 'bg-[#1B2A4A] text-white hover:bg-[#B75E43]'
                    }`}
                  >
                    {inBasket ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    <span>{inBasket ? 'In Cart (Update)' : 'Add to Cart'}</span>
                  </button>
                </div>

                {/* Direct Enquiry Button */}
                <button
                  onClick={() => {
                    onClose();
                    openEnquiryModal({ product });
                  }}
                  className="w-full py-2.5 px-4 rounded text-xs font-semibold uppercase tracking-wider text-white bg-[#B75E43] hover:bg-[#9e4c34] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5 text-white" />
                  <span>Enquire for this Product</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    openSampleModal(product);
                  }}
                  className="w-full py-2.5 px-4 rounded text-xs font-medium text-[#1B2A4A] bg-[#B89550]/15 hover:bg-[#B89550]/25 transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-[#B89550]/30"
                >
                  <FileText className="w-3.5 h-3.5 text-[#B89550]" />
                  <span>Request Courier Sample Pack / Strike-Off Swatch</span>
                </button>
              </div>
            </div>
          </div>

          {/* Full Technical Specifications Table */}
          <div className="space-y-4 border-t border-[#252822]/10 pt-6">
            <h3 className="font-serif text-lg font-normal text-[#252822]">
              Verified Laboratory &amp; Production Specifications
            </h3>

            <div className="border border-[#252822]/10 rounded-lg overflow-hidden divide-y divide-[#252822]/10">
              {product.specs.map((s, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 p-3 text-xs font-sans hover:bg-[#F7F4ED]/60 transition-colors">
                  <span className="font-medium text-[#252822]/70 sm:col-span-1">{s.label}</span>
                  <span className="text-[#252822] sm:col-span-2 font-mono sm:font-sans">{s.value}</span>
                </div>
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 text-xs font-sans hover:bg-[#F7F4ED]/60 transition-colors">
                <span className="font-medium text-[#252822]/70 sm:col-span-1">Packaging Specification</span>
                <span className="text-[#252822] sm:col-span-2">{product.packaging}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 text-xs font-sans hover:bg-[#F7F4ED]/60 transition-colors">
                <span className="font-medium text-[#252822]/70 sm:col-span-1">Harmonized HS Code</span>
                <span className="text-[#252822] sm:col-span-2 font-mono">{product.hsCode}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
