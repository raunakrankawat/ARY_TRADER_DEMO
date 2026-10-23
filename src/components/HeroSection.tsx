import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRFQ } from '../context/RFQContext';
import { useNavigation } from '../context/NavigationContext';
import { 
  ArrowRight, 
  Sparkles, 
  Play, 
  X, 
  ChevronRight,
  Layers,
  FileText
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setSelectedDivision, openEnquiryModal } = useRFQ();
  const { navigateTo } = useNavigation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleExploreProducts = () => {
    navigateTo('categories');
  };

  return (
    <section className="relative overflow-hidden bg-[#1E211B] text-[#F7F4ED] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#252822]/20">
      
      {/* Background Media Layer: Ambient Video & Cinematic Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* HTML5 Ambient Video with silent loop, falls back cleanly to poster image */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/hero_luxury_atelier_backdrop_1792590480813.jpg"
          className="w-full h-full object-cover object-center opacity-30 scale-102"
        >
          <source src="/assets/aistudio/6abf554ee05c8507206174_c7578bdc.mp4" type="video/mp4" />
        </video>

        {/* Multi-layered directional gradient scrims for optimal typographic contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E211B] via-[#1E211B]/85 to-[#1E211B]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E211B] via-transparent to-[#1E211B]/60" />
        <div className="absolute inset-0 bg-jaali-dark opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Sub-Kicker */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="w-7 h-px bg-[#B89550]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-[#B89550]">
            Jodhpur, Rajasthan · Premier B2B Trading House
          </span>
          <span className="text-white/30 text-xs hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-[11px] sm:text-xs text-[#F7F4ED]/80 tracking-wide font-sans font-light">
            Connecting Cultures, Building Prosperity
          </span>
          
          {/* Atelier Video Button */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 ml-auto text-[11px] font-medium tracking-wide text-[#F7F4ED]/90 hover:text-[#B89550] transition-colors border border-white/20 hover:border-[#B89550]/60 px-3 py-1 rounded bg-white/5 backdrop-blur-xs cursor-pointer"
          >
            <Play className="w-3 h-3 text-[#B89550] fill-[#B89550]" />
            <span>Watch Production Reel</span>
          </button>
        </motion.div>

        {/* Hero Title & Lead Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14"
        >
          <div className="lg:col-span-8">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#F7F4ED] leading-[1.05] text-balance">
              Artisan heritage craft,
              <span className="block italic text-[#B89550] font-normal mt-2 sm:mt-3">
                agricultural trade exported globally.
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2 space-y-6">
            <p className="text-sm sm:text-base text-[#F7F4ED]/85 leading-relaxed font-sans font-light">
              <strong className="text-white font-medium">Abhyashish Traders (Arya Trader)</strong> unites master weavers and certified organic growers of Western India directly with international interior designers, luxury retail brands, and bulk commodity buyers.
            </p>

            {/* Two Primary Actions: Explore Products & Enquire Now */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleExploreProducts}
                className="flex items-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#252822] bg-[#F7F4ED] hover:bg-white transition-all rounded shadow-xs cursor-pointer group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => openEnquiryModal()}
                className="flex items-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#B75E43] hover:bg-[#9e4c34] transition-all rounded shadow-xs cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#F7F4ED]" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Two Visually Distinct Category Experiences (Food & Agri vs Home Decor & Heritage) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Category Experience 1: Food & Agricultural Products */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => {
              setSelectedDivision('pantry');
              navigateTo('categories', { categoryFilter: 'pantry' });
            }}
            className="group relative rounded-xl overflow-hidden border border-white/15 hover:border-[#5B6E4E] transition-all duration-300 bg-[#252822]/80 backdrop-blur-md cursor-pointer flex flex-col justify-between hover:shadow-xl"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#2D3328]">
                <img
                  src="/assets/images/hero_spices_agri_luxury_1792590480300.jpg"
                  alt="Certified export-grade Phool Makhana and Indian spices"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E211B] via-[#1E211B]/40 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-[#5B6E4E]/90 px-3 py-1 rounded-sm border border-white/10">
                    Category Experience 01
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#5B6E4E] text-white px-3 py-1 rounded text-xs font-semibold shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#F7F4ED]" />
                  <span>Jumbo 6+ Suta &amp; Dehydrated Flakes</span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white group-hover:text-[#A7D18C] transition-colors">
                    Food &amp; Agricultural Products
                  </h3>
                  <ChevronRight className="w-5 h-5 text-[#A7D18C] group-hover:translate-x-1 transition-transform" />
                </div>
                
                <p className="text-xs sm:text-sm text-[#F7F4ED]/80 leading-relaxed mb-5 font-sans font-light">
                  Direct procurement and processing of giant popped Phool Makhana (fox nuts), dehydrated white/red onion powders (80–100 mesh), fresh red export onions, and whole Indian spices.
                </p>

                <div className="flex flex-wrap gap-y-1 gap-x-3 text-[11px] text-[#A7D18C] font-sans border-t border-white/10 pt-4">
                  <span>Moisture &lt; 7.5%</span>
                  <span className="text-white/30" aria-hidden="true">·</span>
                  <span>APEDA &amp; FSSAI Aligned</span>
                  <span className="text-white/30" aria-hidden="true">·</span>
                  <span>20ft / 40ft Container Corridors</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Category Experience 2: Home Decor & Heritage */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => {
              setSelectedDivision('heritage');
              navigateTo('categories', { categoryFilter: 'heritage' });
            }}
            className="group relative rounded-xl overflow-hidden border border-white/15 hover:border-[#B89550] transition-all duration-300 bg-[#252822]/80 backdrop-blur-md cursor-pointer flex flex-col justify-between hover:shadow-xl"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#2D2A26]">
                <img
                  src="/assets/images/hero_luxury_atelier_backdrop_1792590480813.jpg"
                  alt="Rajasthani Hand-Knotted Heritage Rug in Sunlit Haveli Atelier"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E211B] via-[#1E211B]/40 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-[#B75E43]/90 px-3 py-1 rounded-sm border border-white/10">
                    Category Experience 02
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#B75E43] text-white px-3 py-1 rounded text-xs font-semibold shadow-sm">
                  <span>240+ KPSI Knotted Weaves</span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white group-hover:text-[#B89550] transition-colors">
                    Home Decor &amp; Heritage
                  </h3>
                  <ChevronRight className="w-5 h-5 text-[#B89550] group-hover:translate-x-1 transition-transform" />
                </div>
                
                <p className="text-xs sm:text-sm text-[#F7F4ED]/80 leading-relaxed mb-5 font-sans font-light">
                  Hand-knotted 240+ KPSI Tibetan wool &amp; mulberry silk carpets, Thar flat-weave reversible dhurries, hand-carved Sheesham furniture, and heritage brassware.
                </p>

                <div className="flex flex-wrap gap-y-1 gap-x-3 text-[11px] text-[#B89550] font-sans border-t border-white/10 pt-4">
                  <span>Traditional Pit Looms</span>
                  <span className="text-white/30" aria-hidden="true">·</span>
                  <span>Bespoke Architectural Runs</span>
                  <span className="text-white/30" aria-hidden="true">·</span>
                  <span>Vegetable Madder &amp; Indigo</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Production Reel Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-[#1E211B] rounded-xl overflow-hidden border border-[#B89550]/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-[#B89550] fill-[#B89550]" />
                  <span className="font-serif text-lg font-medium text-white">
                    Abhyashish Traders · Production Reel
                  </span>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close video player"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                <video
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/aistudio/6abf554ee05c8507206174_c7578bdc.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
