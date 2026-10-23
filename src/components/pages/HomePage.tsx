import React, { useState, useRef, useEffect } from 'react';
import { HeroSection } from '../HeroSection';
import { ProductCard } from '../ProductCard';
import { ProductDetailModal } from '../ProductDetailModal';
import { GovernmentCertificatesSection } from '../GovernmentCertificatesSection';
import { ReviewsAndTrustSection } from '../ReviewsAndTrustSection';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { useNavigation } from '../../context/NavigationContext';
import { useRFQ } from '../../context/RFQContext';
import { 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Layers, 
  Eye, 
  ShieldCheck, 
  Globe2, 
  Sparkles, 
  Anchor,
  PhoneCall,
  CheckCircle2,
  FileText
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { openEnquiryModal, setSelectedDivision } = useRFQ();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Horizontal carousel reference and scroll state
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
      }
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = Math.max(300, clientWidth * 0.75);
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Show all active products in the sliding track
  const allProducts = PRODUCTS;

  return (
    <div className="space-y-16 lg:space-y-24 bg-[#F7F4ED]">
      
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Curated Featured Products Horizontal Sliding Track */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-4 border-b border-[#252822]/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-px bg-[#B89550]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
                Curated Export Portfolio
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#252822]">
              Featured Trading Selections
            </h2>
            <p className="text-xs text-[#252822]/70 font-sans mt-1">
              Browse our single-line collection of certified agricultural commodities and handcrafted artisan textiles.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Horizontal Slide Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                aria-label="Previous products"
                className={`p-2 rounded-full border transition-all cursor-pointer ${
                  canScrollLeft
                    ? 'border-[#252822]/20 text-[#1B2A4A] bg-white hover:border-[#B89550] hover:text-[#B75E43] hover:shadow-xs active:scale-95'
                    : 'border-[#252822]/10 text-[#252822]/30 bg-transparent cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="Next products"
                className={`p-2 rounded-full border transition-all cursor-pointer ${
                  canScrollRight
                    ? 'border-[#252822]/20 text-[#1B2A4A] bg-white hover:border-[#B89550] hover:text-[#B75E43] hover:shadow-xs active:scale-95'
                    : 'border-[#252822]/10 text-[#252822]/30 bg-transparent cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="h-6 w-px bg-[#252822]/15 hidden sm:block" />

            <button
              onClick={() => navigateTo('categories')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B75E43] hover:text-[#9e4c34] transition-colors group cursor-pointer"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Line */}
        <div className="relative">
          <div
            ref={sliderRef}
            onScroll={checkScroll}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory focus:outline-none [-webkit-overflow-scrolling:touch]"
            tabIndex={0}
            aria-label="Featured products horizontal slider"
          >
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="shrink-0 w-[285px] sm:w-[320px] lg:w-[335px] snap-start flex flex-col"
              >
                <ProductCard
                  product={product}
                  onSelect={(p) => setSelectedProduct(p)}
                />
              </div>
            ))}

            {/* End of line: Explore All Categories Card */}
            <div className="shrink-0 w-[270px] sm:w-[300px] snap-start flex flex-col">
              <div 
                onClick={() => navigateTo('categories')}
                className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-lg bg-[#1B2A4A] text-[#F7F4ED] border border-[#B89550]/30 hover:border-[#B89550] shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase text-[#B89550] bg-white/10 rounded-sm mb-4">
                    Full Spectrum
                  </span>
                  <h3 className="font-serif text-2xl font-light text-white mb-2 group-hover:text-[#B89550] transition-colors">
                    Explore All Categories
                  </h3>
                  <p className="text-xs text-[#F7F4ED]/80 leading-relaxed font-sans font-light mb-6">
                    Looking for a specific grade or custom loom specification? Explore our full catalog across all trading divisions.
                  </p>
                  
                  <div className="space-y-2.5 text-xs text-[#F7F4ED]/75 font-sans">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B89550]" />
                      <span>Makhana (Fox Nuts) &amp; Agri</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B89550]" />
                      <span>Hand-Knotted Carpets &amp; Kelims</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B89550]" />
                      <span>Dehydrated Onion Powders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B89550]" />
                      <span>Sheesham Wood &amp; Bone Inlay</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#B89550] group-hover:text-white transition-colors">
                  <span>Browse Catalog</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Progress and Prompt Bar */}
        <div className="flex items-center justify-between mt-2 px-1 text-[11px] text-[#252822]/65 font-sans">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#B75E43]" />
            <span>Slide horizontally or use arrows to view all products</span>
          </span>
          <div className="flex items-center gap-3">
            <div className="w-20 sm:w-32 h-1 bg-[#252822]/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#B89550] transition-all duration-300 rounded-full"
                style={{ width: `${Math.max(15, scrollProgress)}%` }}
              />
            </div>
            <button
              onClick={() => navigateTo('categories')}
              className="text-xs font-medium text-[#B75E43] hover:underline cursor-pointer"
            >
              Go to all categories →
            </button>
          </div>
        </div>
      </section>

      {/* 3. Official Government Authentication & Statutory Clearances */}
      <GovernmentCertificatesSection />

      {/* 4. Genuine Company Story Section with Editorial Imagery */}
      <section className="bg-white py-16 lg:py-20 border-y border-[#252822]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Story Text (Span 7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-[#B89550]" />
                <span className="text-xs uppercase tracking-widest font-semibold text-[#B89550]">
                  Heritage &amp; Origin
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#252822] leading-tight">
                Operating directly from the historic corridors of Jodhpur.
              </h2>

              <p className="text-xs sm:text-sm text-[#252822]/80 font-sans leading-relaxed">
                <strong>Abhyashish Traders (Arya Trader)</strong> was built to create a transparent, reliable direct-to-buyer conduit between Western India’s authentic producer clusters and global commercial partners.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5B6E4E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs font-semibold text-[#252822]">
                      Empowering Generational Weaving Guilds
                    </strong>
                    <p className="text-xs text-[#252822]/70 font-sans mt-0.5">
                      Supporting over 40 master weaving families across Salawas and Marwar pit looms with equitable contracts, Care &amp; Fair compliance, and botanical dye sourcing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5B6E4E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs font-semibold text-[#252822]">
                      Contract Agricultural Processing
                    </strong>
                    <p className="text-xs text-[#252822]/70 font-sans mt-0.5">
                      Working directly with wetland harvesters for 6+ Suta Jumbo Phool Makhana and regional growers for dehydrated onion powders (80–100 mesh) processed under hygienic cold airflow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => navigateTo('about')}
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1B2A4A] hover:bg-[#B75E43] transition-colors rounded shadow-xs cursor-pointer"
                >
                  Read Our Full Story
                </button>
                <button
                  onClick={() => navigateTo('gallery')}
                  className="px-4 py-3 text-xs font-medium text-[#252822] hover:text-[#B75E43] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Atelier Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Editorial Photography Right (Span 5) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#EFEAE1] border border-[#252822]/10 shadow-md">
                <img
                  src="/assets/images/craft_artisan_weaving_loom_1792504552453.jpg"
                  alt="Generational artisan at pit loom in Jodhpur"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 bg-[#F7F4ED] rounded-lg border border-[#252822]/10 text-xs font-sans text-[#252822]/75">
                <span className="font-semibold text-[#252822] block mb-0.5">
                  📍 Salawas &amp; Mandore Workshops, Jodhpur
                </span>
                <span>
                  Each 240+ KPSI carpet requires approximately 4 to 8 months of patient hand-tying using double-sheared mountain wool and mulberry silk.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Trusted by Global Partners & Client Reviews */}
      <ReviewsAndTrustSection />

      {/* 6. Verified Business Capabilities & Trust Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-xl bg-white border border-[#252822]/10 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
              Regulatory &amp; Logistics Framework
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#252822] mt-1">
              Verified Business Capabilities
            </h3>
            <p className="text-xs text-[#252822]/70 font-sans mt-1">
              Every shipment is backed by verified statutory documentation, customs clearing dockets, and recognized trade credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#252822]/10">
            <div className="pt-3 md:pt-0 md:px-5 first:pl-0 space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1B2A4A]">
                <ShieldCheck className="w-4 h-4 text-[#B89550]" />
                <span>DGFT &amp; GSTIN Registered</span>
              </div>
              <p className="font-serif text-lg font-bold text-[#252822]">Govt. of India IEC</p>
              <p className="text-[11px] text-[#252822]/70 font-sans">
                Official Ministry of Commerce Importer-Exporter Code and tax verified.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-5 space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#5B6E4E]">
                <Sparkles className="w-4 h-4 text-[#5B6E4E]" />
                <span>APEDA &amp; FSSAI Cleared</span>
              </div>
              <p className="font-serif text-lg font-bold text-[#252822]">Agri-Food Compliance</p>
              <p className="text-[11px] text-[#252822]/70 font-sans">
                Full phytosanitary inspection certificates and moisture compliance.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-5 space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1B2A4A]">
                <Anchor className="w-4 h-4 text-[#1B2A4A]" />
                <span>Mundra Port Gateway</span>
              </div>
              <p className="font-serif text-lg font-bold text-[#252822]">Direct Bonded Rail</p>
              <p className="text-[11px] text-[#252822]/70 font-sans">
                ICD Bhagat Ki Kothi (Jodhpur) link directly to Gujarat ocean berths.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-5 space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#B75E43]">
                <Globe2 className="w-4 h-4 text-[#B75E43]" />
                <span>Express Sampling</span>
              </div>
              <p className="font-serif text-lg font-bold text-[#252822]">48-Hour Dispatch</p>
              <p className="text-[11px] text-[#252822]/70 font-sans">
                Air express strike-off swatches and sealed 1kg makhana sample packs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Wholesale & Partnership Enquiry Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-xl bg-[#1B2A4A] p-8 sm:p-12 text-[#F7F4ED] relative overflow-hidden shadow-xl border border-[#B89550]/30">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B89550]">
              Direct Factory Access
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight">
              Initiate a Wholesale or Custom Contract Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#F7F4ED]/80 font-sans leading-relaxed">
              Whether you are an overseas importer requesting 20ft/40ft container FOB quotes or an interior design studio commissioning custom hand-knotted room dimensions, our trade desk provides itemized proforma quotes.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openEnquiryModal()}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1B2A4A] bg-[#B89550] hover:bg-[#c9a65f] transition-colors rounded shadow-xs cursor-pointer"
              >
                Enquire Now
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="px-5 py-3.5 text-xs font-medium tracking-wide text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors rounded cursor-pointer flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Contact Jodhpur Desk</span>
              </button>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
            <Globe2 className="w-96 h-96 text-white" />
          </div>
        </div>
      </section>

      {/* Reusable Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
};
