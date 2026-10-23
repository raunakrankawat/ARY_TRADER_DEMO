import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Sprout, Hammer } from 'lucide-react';

interface ProvenanceStep {
  number: string;
  stage: string;
  title: string;
  description: string;
  detailPoints: string[];
}

const HERITAGE_STEPS: ProvenanceStep[] = [
  {
    number: '01',
    stage: 'Raw Material Grading',
    title: 'Selection of Hand-Carded & Semi-Worsted Fleece',
    description: 'We source blend fibers combining long-staple New Zealand wool with indigenous Rajasthani desert sheep wool, yielding high lanolin resistance and elasticity.',
    detailPoints: ['36-micron fiber sorting', 'Hand-carded yarn alignment', 'Zero chemical fiber shedding']
  },
  {
    number: '02',
    stage: 'Botanical Color Chemistry',
    title: 'Brewing of Indigo, Madder & Pomegranate Vats',
    description: 'Yarn skeins undergo slow simmer immersion in copper cauldrons with wild-harvested herbs, fixing rich mineral-stable shades without carcinogenic azo salts.',
    detailPoints: ['ISO 105-B02 light fastness Grade 5', 'Natural alum mordant setting', 'Zero synthetic wastewater runoff']
  },
  {
    number: '03',
    stage: 'Loom Knotting',
    title: 'Individual Hand-Tying on High-Tension Steel Frames',
    description: 'Master weavers tie each individual Tibetan or Persian knot row by row according to the talim (weaving map), locking warp and weft with wooden mallets.',
    detailPoints: ['Up to 280 knots/sq. inch', 'Fair trade artisan wage parity', 'Generational guild craftsmanship']
  },
  {
    number: '04',
    stage: 'Finishing & Luster',
    title: 'Precision Shearing, Herbal Wash & Sun Drying',
    description: 'Surfaces are hand-clipped with traditional steel curved shears, washed with natural soapnut extract, and stretched under dry Jodhpur desert sunlight.',
    detailPoints: ['Uniform 10mm pile shearing', 'Natural luster without acid wash', 'Care & Fair label inspection']
  }
];

const PANTRY_STEPS: ProvenanceStep[] = [
  {
    number: '01',
    stage: 'Wetland Harvest',
    title: 'Wild Lotus Seed Pod Collection',
    description: 'Gorgon nuts (Euryale ferox) are harvested by traditional diving families from protected freshwater wetlands during post-monsoon maturity.',
    detailPoints: ['Clean water ecosystems', 'Zero pesticide spraying', 'Ethical community harvesting']
  },
  {
    number: '02',
    stage: 'Sun Curing & Roasting',
    title: 'Thermal Roasting in Traditional Sand & Clay Kilns',
    description: 'The thick black shells undergo multi-day sun curing followed by precise high-heat roasting, breaking the starch bonds within the cotyledon.',
    detailPoints: ['Natural moisture reduction', 'Puffing temperature calibration', 'Zero chemical bleaching']
  },
  {
    number: '03',
    stage: 'Popping & Suta Caliper Sorting',
    title: 'Manual Popping & Mechanical Rotary Sizing',
    description: 'Each roasted seed is cracked with a wooden mallet to pop instantly into a snow-white spherical nut, then sorted across calibrated 4+ to 6.5+ suta sieves.',
    detailPoints: ['Grade 6+ (18–22mm diameter)', 'Segmented broken fragments < 1.8%', 'Zero black seed coat residue']
  },
  {
    number: '04',
    stage: 'Barrier Packaging & Lab COA',
    title: 'Nitrogen Flushed Hermetic Sealing',
    description: 'Packed inside multi-layer PE/kraft barrier sacks with nitrogen flushing to maintain moisture under 7.5% and prevent oxidation through ocean transport.',
    detailPoints: ['Aflatoxin & heavy metal COA tested', '18-month sealed shelf life', 'ISTA drop-tested cartons']
  }
];

export const ArtisanProvenance: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<'heritage' | 'pantry'>('heritage');

  const steps = activeTrack === 'heritage' ? HERITAGE_STEPS : PANTRY_STEPS;

  return (
    <section id="artisan-story" className="py-20 lg:py-28 bg-[#FAF6EE] border-b border-[#2B2622]/10">
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
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B5472F]">
                Provenance &amp; Supply Chain
              </span>
              <span className="text-[#2B2622]/30 text-xs">·</span>
              <span className="text-xs text-[#2B2622]/60">Transparent Processing Cycles</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1B2A4A] tracking-tight">
              From source to seaport
            </h2>
          </div>

          {/* Track Switcher */}
          <div className="flex items-center p-1 bg-white border border-[#2B2622]/10 rounded-lg">
            <button
              onClick={() => setActiveTrack('heritage')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTrack === 'heritage'
                  ? 'bg-[#1B2A4A] text-white shadow-xs'
                  : 'text-[#2B2622]/70 hover:text-[#1B2A4A]'
              }`}
            >
              <Hammer className="w-3.5 h-3.5 text-[#C8963E]" />
              <span>Heritage Weaving Journey</span>
            </button>
            <button
              onClick={() => setActiveTrack('pantry')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTrack === 'pantry'
                  ? 'bg-[#6B7F5E] text-white shadow-xs'
                  : 'text-[#2B2622]/70 hover:text-[#6B7F5E]'
              }`}
            >
              <Sprout className="w-3.5 h-3.5 text-white" />
              <span>Pantry Agro Processing</span>
            </button>
          </div>
        </motion.div>

        {/* 4-Step Editorial Timeline Cards with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-lg p-6 border border-[#2B2622]/10 hover:border-[#C8963E]/60 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-[#2B2622]/10 pb-3">
                  <span className="font-serif text-3xl font-bold text-[#B5472F]">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C8963E]">
                    {step.stage}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1B2A4A] leading-snug mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#2B2622]/70 leading-relaxed font-sans mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#2B2622]/5">
                <ul className="space-y-1 text-[11px] text-[#2B2622]/60">
                  {step.detailPoints.map((pt, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#C8963E]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
