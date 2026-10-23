import React from 'react';
import { Product } from '../types';
import { useRFQ } from '../context/RFQContext';
import { 
  Check, 
  Plus, 
  Maximize2, 
  Sparkles, 
  ShieldCheck, 
  Scale, 
  Layers,
  ArrowRight
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const { addToEnquiry, isInEnquiry, convertPrice } = useRFQ();
  const inBasket = isInEnquiry(product.id);
  const isFoodDivision = product.division === 'pantry';

  return (
    <article 
      className="group flex flex-col justify-between bg-white rounded-lg border border-[#252822]/12 overflow-hidden hover:border-[#B89550] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1B2A4A]/10 h-full cursor-default"
    >
      <div>
        {/* Media Container with 4:3 Aspect Ratio and subtle zoom overflow */}
        <div 
          onClick={() => onSelect(product)}
          className="relative aspect-[4/3] bg-[#EFEAE1] overflow-hidden cursor-pointer"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-[1.03]"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to secondary image or styled container if image fails
              const target = e.currentTarget;
              if (product.detailImage && target.src !== product.detailImage) {
                target.src = product.detailImage;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Clean Unboxed Category Indicator */}
          <div className="absolute top-3 left-3 bg-[#F7F4ED]/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase text-[#252822] border border-[#252822]/10 rounded-sm shadow-xs transition-transform duration-300 group-hover:translate-x-0.5">
            {product.category}
          </div>

          {/* Quick Enlarge Action with lift animation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="absolute bottom-3 right-3 p-2 rounded-full bg-white/95 text-[#252822] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#1B2A4A] hover:text-white shadow-md cursor-pointer"
            title="Inspect full technical specifications"
            aria-label={`Inspect ${product.name}`}
          >
            <Maximize2 className="w-4 h-4 text-[#B89550] group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Metadata: SKU & HS Code with clean typographic dot separator */}
          <div className="flex items-center gap-2 text-[11px] text-[#252822]/60 font-mono mb-2">
            <span>SKU: {product.sku}</span>
            <span aria-hidden="true">·</span>
            <span>HS: {product.hsCode}</span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onSelect(product)}
            className="font-serif text-lg sm:text-xl font-medium text-[#252822] group-hover:text-[#B75E43] transition-colors cursor-pointer leading-snug line-clamp-2 mb-2"
          >
            {product.name}
          </h3>

          {/* Tagline / Brief Description */}
          <p className="text-xs text-[#252822]/75 leading-relaxed line-clamp-2 mb-4 font-sans font-light">
            {product.tagline}
          </p>

          {/* Domain-Differentiated Specifications Strip */}
          {isFoodDivision ? (
            /* Food / Agri Division Priority Specs */
            <div className="bg-[#F7F4ED] rounded p-3 text-xs space-y-1.5 border border-[#252822]/8 mb-4">
              <div className="flex items-baseline justify-between text-[11px]">
                <span className="text-[#252822]/65 font-sans">Grade / Suta:</span>
                <span className="font-semibold text-[#252822] truncate max-w-[55%]">
                  {product.specs.find(s => s.label.toLowerCase().includes('size') || s.label.toLowerCase().includes('physical'))?.value || 'Export Grade'}
                </span>
              </div>
              <div className="flex items-baseline justify-between text-[11px]">
                <span className="text-[#252822]/65 font-sans">Moisture Spec:</span>
                <span className="font-medium text-[#5B6E4E] truncate max-w-[55%]">
                  {product.specs.find(s => s.label.toLowerCase().includes('moisture'))?.value || '< 7.5%'}
                </span>
              </div>
              <div className="flex items-baseline justify-between text-[11px] pt-1 border-t border-[#252822]/10">
                <span className="text-[#252822]/65 font-sans">Wholesale MOQ:</span>
                <span className="font-semibold text-[#B75E43]">{product.moq}</span>
              </div>
            </div>
          ) : (
            /* Heritage & Decor Division Priority Specs */
            <div className="bg-[#F7F4ED] rounded p-3 text-xs space-y-1.5 border border-[#252822]/8 mb-4">
              <div className="flex items-baseline justify-between text-[11px]">
                <span className="text-[#252822]/65 font-sans">Craft &amp; Technique:</span>
                <span className="font-semibold text-[#252822] truncate max-w-[55%]">
                  {product.specs.find(s => s.label.toLowerCase().includes('technique') || s.label.toLowerCase().includes('species'))?.value || 'Traditional Loom'}
                </span>
              </div>
              <div className="flex items-baseline justify-between text-[11px]">
                <span className="text-[#252822]/65 font-sans">Material Composition:</span>
                <span className="font-medium text-[#252822] truncate max-w-[55%]">
                  {product.specs.find(s => s.label.toLowerCase().includes('composition') || s.label.toLowerCase().includes('yarn') || s.label.toLowerCase().includes('medium'))?.value || 'Natural Fibers'}
                </span>
              </div>
              <div className="flex items-baseline justify-between text-[11px] pt-1 border-t border-[#252822]/10">
                <span className="text-[#252822]/65 font-sans">Lead &amp; Minimums:</span>
                <span className="font-semibold text-[#B75E43]">{product.moq}</span>
              </div>
            </div>
          )}

          {/* Pricing Guidance */}
          <div className="flex items-baseline justify-between text-xs pt-1 border-t border-[#252822]/8">
            <span className="text-[#252822]/65 font-sans">Indicative Range:</span>
            <span className="font-serif font-bold text-sm text-[#252822] tabular-nums">
              {convertPrice(product.estimatedPriceRangeUSD)}
            </span>
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2 mt-2">
        <button
          onClick={() => addToEnquiry(product)}
          className={`py-2 px-3 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            inBasket
              ? 'bg-[#1B2A4A] text-white shadow-xs'
              : 'bg-[#F7F4ED] text-[#252822] border border-[#252822]/25 hover:bg-[#1B2A4A] hover:text-white hover:border-[#1B2A4A]'
          }`}
          aria-label={inBasket ? 'In Wholesale RFQ' : `Add ${product.name} to Wholesale RFQ`}
        >
          {inBasket ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#B89550]" />
              <span>In Quote</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>Add to Quote</span>
            </>
          )}
        </button>

        <button
          onClick={() => onSelect(product)}
          className="py-2 px-3 rounded text-xs font-medium text-[#B75E43] bg-[#B75E43]/10 hover:bg-[#B75E43] hover:text-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>View Specs</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
