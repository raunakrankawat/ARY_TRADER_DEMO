import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRFQ } from '../../context/RFQContext';
import { useNavigation } from '../../context/NavigationContext';
import { 
  Eye, 
  Maximize2, 
  X, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Compass, 
  FileText 
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'carpets' | 'dhurries' | 'craft' | 'agri' | 'logistics';
  categoryLabel: string;
  image: string;
  description: string;
  specs: string[];
  dimensions?: string;
  provenance: string;
}

export const GalleryPage: React.FC = () => {
  const { openEnquiryModal } = useRFQ();
  const { navigateTo } = useNavigation();
  const [activeFilter, setActiveFilter] = useState<'all' | 'carpets' | 'dhurries' | 'craft' | 'agri' | 'logistics'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Keyboard accessibility for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    if (selectedItem) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'Royal Haveli Loom & Natural Dye Atelier',
      category: 'craft',
      categoryLabel: 'Artisan Loom & Heritage',
      image: '/assets/images/hero_luxury_atelier_backdrop_1792590480813.jpg',
      description: 'Master weavers knotting high-density silk-wool carpets under arched sandstone jharokhas in the historic craft corridors of Jodhpur.',
      specs: ['Traditional Pit Loom', 'Hand-Spun Yarns', 'Vegetable Madder & Indigo'],
      dimensions: 'Custom sizes up to 16 × 24 ft',
      provenance: 'Old City Atelier, Jodhpur, Rajasthan',
    },
    {
      id: 'gal-2',
      title: 'Royal Isfahan 240+ KPSI Silk-Wool Carpet',
      category: 'carpets',
      categoryLabel: 'Hand-Knotted Carpets',
      image: '/assets/images/product_jodhpur_handknotted_rug_1792504552668.jpg',
      description: 'Exquisite medallion pattern hand-knotted by generational artisans using Tibetan mountain wool blended with mulberry silk for luminescent sheen.',
      specs: ['240–280 KPSI Density', '80% Wool / 20% Silk', 'Double Knotted Asymmetrical'],
      dimensions: '8 × 10 ft (244 × 305 cm)',
      provenance: 'Salawas Weavers Guild, Rajasthan',
    },
    {
      id: 'gal-3',
      title: 'Thar Heritage Flat-Weave Dhurrie in Courtyard',
      category: 'dhurries',
      categoryLabel: 'Flat-Weave Dhurries',
      image: '/assets/images/hero_heritage_rug_craft_1792504550869.jpg',
      description: 'Geometric Thar desert flat-weave handcrafted from durable indigenous desert sheep wool. Reversible double-faced design ideal for luxury hospitality.',
      specs: ['Panja Loom Weave', '100% Indigenous Wool', 'Reversible Dual-Faced'],
      dimensions: '6 × 9 ft & 9 × 12 ft',
      provenance: 'Barmer & Osian Weaving Clusters',
    },
    {
      id: 'gal-4',
      title: 'Master Weaver at Upright Loom',
      category: 'craft',
      categoryLabel: 'Master Craftsmanship',
      image: '/assets/images/craft_artisan_weaving_loom_1792504552453.jpg',
      description: 'Senior artisan guiding juvenile warps with precision iron beats. Every square inch represents over 240 individually tied senneh knots.',
      specs: ['Senneh Knot Technique', 'Iron Panja Compaction', 'Care & Fair Aligned'],
      provenance: 'Mandore Workshop, Jodhpur',
    },
    {
      id: 'gal-5',
      title: 'Royal Jumbo Phool Makhana & Whole Spices Lot',
      category: 'agri',
      categoryLabel: 'Pantry & Agri Commodities',
      image: '/assets/images/hero_spices_agri_luxury_1792590480300.jpg',
      description: 'Export-grade 6+ Suta jumbo fox nuts harvested from certified organic wetlands, presented alongside cold-processed whole turmeric and Malabar cardamom.',
      specs: ['6+ Suta Diameter (22mm+)', 'Eurofins Moisture < 7.5%', 'NPOP & APEDA Certified'],
      provenance: 'Wetland Harvest & Rajasthan Spice Hub',
    },
    {
      id: 'gal-6',
      title: 'Dehydrated White Onion Flakes & Botanical Powders',
      category: 'agri',
      categoryLabel: 'Pantry & Agri Commodities',
      image: '/assets/images/hero_pantry_makhana_agri_1792504551118.jpg',
      description: 'Air-dehydrated sorted white and red onion flakes processed at controlled temperatures to preserve natural pungency, volatile oils, and clean aroma.',
      specs: ['80–100 Mesh Fineness', 'SO2 Free / Non-GMO', 'Heavy Metal Free'],
      provenance: 'Western India Agricultural Processing Unit',
    },
    {
      id: 'gal-7',
      title: 'Export Nitrogen-Flushed Packaging & Barrier Cartons',
      category: 'logistics',
      categoryLabel: 'Logistics & Packaging',
      image: '/assets/images/product_makhana_jumbo_packaging_1792504553421.jpg',
      description: 'Multi-layer barrier packaging with food-grade nitrogen flushing for long-haul maritime container shipping to Europe, USA, and GCC ports.',
      specs: ['Nitrogen Flushed Bags', 'Heavy Duty Corrugated Cartons', 'ISPM-15 Heat Treated Pallets'],
      provenance: 'ICD Bhagat Ki Kothi Export Terminal, Jodhpur',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-[#F7F4ED] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#B89550]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
              Visual Dossier &amp; Provenance
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#252822] tracking-tight">
            Artisan Looms, Heritage Carpets &amp; Export Commodities
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#252822]/80 font-sans leading-relaxed">
            Photographic documentation of our Jodhpur weaving ateliers, high-knot-density carpets, certified organic harvests, and maritime export packaging protocols.
          </p>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[#252822]/10 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#1B2A4A] text-white shadow-xs'
                : 'bg-white border border-[#252822]/12 text-[#252822]/75 hover:bg-[#EFEAE1]'
            }`}
          >
            All Media ({galleryItems.length})
          </button>
          <button
            onClick={() => setActiveFilter('carpets')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeFilter === 'carpets'
                ? 'bg-[#B75E43] text-white shadow-xs'
                : 'bg-white border border-[#252822]/12 text-[#252822]/75 hover:bg-[#EFEAE1]'
            }`}
          >
            Hand-Knotted Carpets
          </button>
          <button
            onClick={() => setActiveFilter('dhurries')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeFilter === 'dhurries'
                ? 'bg-[#B75E43] text-white shadow-xs'
                : 'bg-white border border-[#252822]/12 text-[#252822]/75 hover:bg-[#EFEAE1]'
            }`}
          >
            Thar Flat-Weaves
          </button>
          <button
            onClick={() => setActiveFilter('craft')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeFilter === 'craft'
                ? 'bg-[#B75E43] text-white shadow-xs'
                : 'bg-white border border-[#252822]/12 text-[#252822]/75 hover:bg-[#EFEAE1]'
            }`}
          >
            Atelier Looms &amp; Dyes
          </button>
          <button
            onClick={() => setActiveFilter('agri')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeFilter === 'agri'
                ? 'bg-[#5B6E4E] text-white shadow-xs'
                : 'bg-white border border-[#252822]/12 text-[#252822]/75 hover:bg-[#EFEAE1]'
            }`}
          >
            Pantry &amp; Spices
          </button>
          <button
            onClick={() => setActiveFilter('logistics')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeFilter === 'logistics'
                ? 'bg-[#1B2A4A] text-white shadow-xs'
                : 'bg-white border border-[#252822]/12 text-[#252822]/75 hover:bg-[#EFEAE1]'
            }`}
          >
            Packaging &amp; Ports
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-lg overflow-hidden border border-[#252822]/10 hover:border-[#B89550]/70 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-[#EFEAE1]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <span className="text-white text-xs font-medium flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5 text-[#B89550]" />
                    <span>Enlarge Inspection</span>
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#252822] bg-[#F7F4ED]/90 px-2.5 py-0.5 rounded-sm border border-[#252822]/10">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#252822] group-hover:text-[#B75E43] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#252822]/75 leading-relaxed font-sans line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#252822]/10 flex items-center justify-between text-[11px] text-[#252822]/65 font-sans">
                  <span className="font-medium text-[#B89550] truncate max-w-[200px]">
                    📍 {item.provenance}
                  </span>
                  <span className="text-[#252822] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Direct Call to Action */}
        <div className="mt-16 p-8 rounded-xl bg-[#1B2A4A] text-[#F7F4ED] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#B89550]/30">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B89550] font-semibold">
              Bespoke Custom Weaving &amp; Container Contracts
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mt-1">
              Need custom knot density, specific colorways, or bulk FCL shipments?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-sans mt-1 max-w-xl">
              We collaborate directly with luxury interior designers, private label retailers, and bulk importers with full CAD loom renderings and strike-off sampling.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => openEnquiryModal({ category: 'Carpets & Rugs' })}
              className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#1B2A4A] bg-[#B89550] hover:bg-[#c9a65f] transition-colors rounded shadow-xs cursor-pointer"
            >
              Enquire Now
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="px-4 py-3 text-xs font-medium tracking-wide text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors rounded cursor-pointer"
            >
              Contact Jodhpur Desk
            </button>
          </div>
        </div>

      </div>

      {/* Accessible Lightbox Inspection Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-modal-title"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-[#252822]/10 bg-[#F7F4ED]">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B75E43]">
                    {selectedItem.categoryLabel}
                  </span>
                  <h3 id="gallery-modal-title" className="font-serif text-xl font-medium text-[#252822]">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded text-[#252822]/70 hover:text-[#B75E43] hover:bg-black/5 transition-colors cursor-pointer"
                  aria-label="Close inspection modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 space-y-6">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black/5">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-3">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#252822]">
                      Provenance &amp; Technical Detail
                    </h4>
                    <p className="text-xs sm:text-sm text-[#252822]/80 leading-relaxed font-sans font-light">
                      {selectedItem.description}
                    </p>
                    
                    <div className="pt-2">
                      <span className="text-xs font-semibold text-[#252822] block mb-2">Key Specifications:</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.specs.map((spec, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded bg-[#F7F4ED] border border-[#252822]/12 text-[#252822] font-medium"
                          >
                            ✓ {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#F7F4ED] border border-[#252822]/10 space-y-3 text-xs font-sans">
                    <div>
                      <span className="text-[#252822]/60 block text-[11px]">Region &amp; Workshop</span>
                      <strong className="text-[#252822] font-medium">{selectedItem.provenance}</strong>
                    </div>

                    {selectedItem.dimensions && (
                      <div>
                        <span className="text-[#252822]/60 block text-[11px]">Standard Formats</span>
                        <strong className="text-[#252822] font-medium">{selectedItem.dimensions}</strong>
                      </div>
                    )}

                    <div className="pt-2 border-t border-[#252822]/10 space-y-2">
                      <button
                        onClick={() => {
                          const itemTitle = selectedItem.title;
                          setSelectedItem(null);
                          openEnquiryModal({ category: selectedItem.categoryLabel });
                        }}
                        className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#B75E43] hover:bg-[#9e4c34] transition-colors rounded shadow-xs cursor-pointer"
                      >
                        Enquire for this Item
                      </button>

                      <a
                        href={`https://wa.me/919799706428?text=${encodeURIComponent(`Hello Abhyashish Traders, I am inspecting "${selectedItem.title}" in your gallery and would like wholesale specs.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block py-2 text-center text-xs font-medium text-[#25D366] hover:underline"
                      >
                        WhatsApp Inquiry
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
