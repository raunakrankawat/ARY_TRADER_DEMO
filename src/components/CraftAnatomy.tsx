import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useRFQ } from '../context/RFQContext';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ComponentDetail {
  id: string;
  index: string;
  title: string;
  division: 'heritage' | 'pantry';
  shortDesc: string;
  fullDesc: string;
  specPill: string;
  image: string;
  focalCoords: { x: number; y: number }; // Percentage for visual hotspot
}

const COMPONENTS: ComponentDetail[] = [
  {
    id: 'comp-wool',
    index: '01',
    title: 'Semi-Worsted New Zealand & Bikaneri Wool',
    division: 'heritage',
    shortDesc: 'Selected for tensile resilience, natural lanolin sheen, and long-staple yarn integrity.',
    fullDesc: 'We source blend fibers combining the supple softness of New Zealand 36-micron fleece with the hardwearing springiness of indigenous Bikaneri sheep wool. The yarn is combed rather than carded, aligning fibers to eliminate premature shedding.',
    specPill: 'Long Staple 90–110 mm Fiber',
    image: '/assets/images/craft_artisan_weaving_loom_1792504552453.jpg',
    focalCoords: { x: 42, y: 35 }
  },
  {
    id: 'comp-density',
    index: '02',
    title: 'Precision Knot Density (240+ KPSI)',
    division: 'heritage',
    shortDesc: 'Hand-tied Tibetan and Persian cross-knotting on high-tension upright steel-framed looms.',
    fullDesc: 'Every square foot contains over 34,500 individual hand-tied knots. The weaver clips each row with hand shears to calibrate a uniform 10mm pile height, ensuring the rug endures 80+ years of heavy commercial footwear traffic without flattening.',
    specPill: '240 Knots / Sq. Inch',
    image: '/assets/images/product_jodhpur_handknotted_rug_1792504552668.jpg',
    focalCoords: { x: 65, y: 58 }
  },
  {
    id: 'comp-dyes',
    index: '03',
    title: 'Organic Botanical Dyes & Azo-Free Chemistry',
    division: 'heritage',
    shortDesc: 'Natural indigo, madder root, walnut husks, and pomegranate peel brewed in open copper vats.',
    fullDesc: 'Sun-fast and wash-tested to Grade 5 ISO 105-B02 standard. By eschewing caustic chemical washes, our rugs age gracefully with an authentic antique patina that synthetic fibers can never replicate.',
    specPill: '100% Non-Carcinogenic & Safe',
    image: '/assets/images/craft_artisan_weaving_loom_1792504552453.jpg',
    focalCoords: { x: 28, y: 62 }
  },
  {
    id: 'comp-makhana-sort',
    index: '04',
    title: 'Mechanical & Manual Suta Caliper Sorting',
    division: 'pantry',
    shortDesc: 'Vibratory screen separation yielding uniform 6+ and 6.5+ Suta spherical popped seeds.',
    fullDesc: 'Our post-harvest processing uses multistage rotary sieves followed by 100% manual conveyor inspection to extract only perfectly rounded, snow-white pops. Fragmented, hard-seed, and burnt kernels are strictly segregated to under 1.8%.',
    specPill: 'Grade 6+ (18–22mm Diameter)',
    image: '/assets/images/product_makhana_jumbo_packaging_1792504553421.jpg',
    focalCoords: { x: 50, y: 70 }
  },
  {
    id: 'comp-moisture-lock',
    index: '05',
    title: 'Moisture Barrier & Nitrogen Packing',
    division: 'pantry',
    shortDesc: 'Controlled dehydration ensuring moisture remains strictly below 7.5% through ocean voyage.',
    fullDesc: 'High moisture is the root cause of soggy texture and rancid off-flavors in imported nuts. Our vacuum-sealed, nitrogen-flushed foil and kraft barriers ensure 18-month shelf stability even through high-humidity maritime transit.',
    specPill: 'Moisture < 7.2% Guaranteed',
    image: '/assets/images/hero_pantry_makhana_agri_1792504551118.jpg',
    focalCoords: { x: 55, y: 45 }
  },
  {
    id: 'comp-fumigation',
    index: '06',
    title: 'ISPM-15 Heat Treated Crating & Phytosanitary Protection',
    division: 'heritage',
    shortDesc: 'Full compliance with US, EU, UK, and Australian biosecurity import regulations.',
    fullDesc: 'Every timber crate and pallet is heat-treated to 56°C core temperature for 30 minutes with official HT stamp. Accompanied by government-stamped Phytosanitary Certificates and sealed container fumigation reports.',
    specPill: 'Global Biosecurity Cleared',
    image: '/assets/aistudio/image_8d0ceab4.png',
    focalCoords: { x: 70, y: 30 }
  }
];

export const CraftAnatomy: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('comp-wool');
  const { openSampleModal, setIsEnquiryDrawerOpen } = useRFQ();

  const activeComponent = COMPONENTS.find(c => c.id === activeId) || COMPONENTS[0];

  return (
    <section id="craft-anatomy" className="py-20 lg:py-28 bg-[#FAF6EE] border-b border-[#2B2622]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C8963E]">
                Quality Anatomy
              </span>
              <span className="text-[#2B2622]/30 text-xs">·</span>
              <span className="text-xs text-[#2B2622]/60">Standardized Export Criteria</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1B2A4A] tracking-tight">
              Components behind our products
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openSampleModal()}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1B2A4A] bg-white border border-[#1B2A4A]/20 hover:border-[#1B2A4A] transition-colors rounded shadow-2xs cursor-pointer"
            >
              <span>Request Sample Kit</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C8963E]" />
            </button>
          </div>
        </motion.div>

        {/* 2-Column Interactive Explorer mirroring reference video layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Visual Showcase with Focal Indicator and Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between bg-white rounded-lg border border-[#2B2622]/10 p-6 lg:p-8 shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-[#C8963E] font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1B2A4A]" />
                  Active Inspection Module
                </span>
                <span className="text-xs font-mono font-bold text-[#1B2A4A]">
                  {activeComponent.index} / 06
                </span>
              </div>

              {/* Main Visual Display with smooth transition */}
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-[#EADFCB] mb-6 group border border-[#2B2622]/10">
                <img
                  key={activeComponent.id}
                  src={activeComponent.image}
                  alt={activeComponent.title}
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Hotspot Indicator inspired by reference mockup */}
                <div 
                  className="absolute z-20 flex items-center justify-center transition-all duration-500"
                  style={{
                    left: `${activeComponent.focalCoords.x}%`,
                    top: `${activeComponent.focalCoords.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-[#C8963E]/40 animate-ping" />
                    <span className="relative w-6 h-6 rounded-full bg-[#1B2A4A] text-white text-[11px] font-bold flex items-center justify-center font-mono border-2 border-white shadow-md">
                      {activeComponent.index}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-medium tracking-wide bg-[#1B2A4A]/80 px-2.5 py-1 rounded backdrop-blur-xs">
                    {activeComponent.specPill}
                  </span>
                  <span className="text-[11px] text-[#FAF6EE]/80 uppercase tracking-widest">
                    Arya Quality Standard
                  </span>
                </div>
              </div>

              {/* Active Component Text Details */}
              <h3 className="font-serif text-2xl font-semibold text-[#1B2A4A] mb-2">
                {activeComponent.title}
              </h3>
              <p className="text-sm text-[#2B2622]/80 leading-relaxed mb-4 font-sans">
                {activeComponent.fullDesc}
              </p>
            </div>

            {/* Bottom Consultation / Enquiry Row */}
            <div className="pt-6 border-t border-[#2B2622]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#2B2622]/70 font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#6B7F5E]" />
                <span>Lab Test Report verified on file</span>
              </div>

              <button
                onClick={() => setIsEnquiryDrawerOpen(true)}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B5472F] hover:text-[#1B2A4A] transition-colors cursor-pointer"
              >
                <span>Add to Wholesale Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Numbered Component Stack (Reference Video Anatomy) with Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between space-y-3"
          >
            {COMPONENTS.map((item, idx) => {
              const isSelected = item.id === activeId;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`p-4 sm:p-5 rounded-lg border transition-all duration-200 cursor-pointer text-left ${
                    isSelected
                      ? 'bg-white border-[#C8963E] ring-1 ring-[#C8963E]/30 shadow-md translate-x-1'
                      : 'bg-white/60 hover:bg-white border-[#2B2622]/10 hover:border-[#2B2622]/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Editorial Number */}
                    <span className={`text-base font-serif font-bold transition-colors ${
                      isSelected ? 'text-[#B5472F]' : 'text-[#2B2622]/40'
                    }`}>
                      {item.index}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className={`text-sm sm:text-base font-medium truncate ${
                          isSelected ? 'text-[#1B2A4A] font-semibold' : 'text-[#2B2622]'
                        }`}>
                          {item.title}
                        </h4>
                        <span className={`text-[11px] font-mono shrink-0 px-2 py-0.5 rounded ${
                          item.division === 'heritage' 
                            ? 'bg-[#1B2A4A]/5 text-[#1B2A4A]' 
                            : 'bg-[#6B7F5E]/10 text-[#6B7F5E]'
                        }`}>
                          {item.division === 'heritage' ? 'Heritage' : 'Pantry'}
                        </span>
                      </div>

                      <p className="text-xs text-[#2B2622]/70 leading-relaxed line-clamp-2">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
