import React from 'react';
import { motion } from 'motion/react';
import { useRFQ } from '../context/RFQContext';
import { 
  FileSearch, 
  PackageCheck, 
  Calculator, 
  Cog, 
  FileCheck2, 
  Ship,
  ArrowRight
} from 'lucide-react';

const STEPS = [
  {
    icon: FileSearch,
    num: '01',
    title: 'Consolidated RFQ',
    desc: 'Select SKUs, custom dimensions, or metric ton volume requirements via our online quote basket.'
  },
  {
    icon: PackageCheck,
    num: '02',
    title: 'Lab Sample & Strike-Off',
    desc: 'Receive physical yarn pom-poms, 30x30cm woven rug swatches, or 1kg food sample with Eurofins COA via air courier.'
  },
  {
    icon: Calculator,
    num: '03',
    title: 'Proforma Invoice (PI)',
    desc: 'Transparent pricing under Incoterms 2020 (FOB Mundra/JNPT, CIF, or CFR) with container stuffing optimization.'
  },
  {
    icon: Cog,
    num: '04',
    title: 'Dedicated Production',
    desc: 'Generational weavers or certified agri-processors initiate production with photographic milestone reports.'
  },
  {
    icon: FileCheck2,
    num: '05',
    title: 'Pre-Shipment & Docs',
    desc: 'Statutory inspection, Phytosanitary, ISPM-15 crate fumigation, and Certificate of Origin (Form A) issued.'
  },
  {
    icon: Ship,
    num: '06',
    title: 'Maritime Dispatch',
    desc: 'Sealed container departure from Mundra / Nhava Sheva with real-time Bill of Lading (B/L) tracking.'
  }
];

export const WholesaleProcess: React.FC = () => {
  const { setIsEnquiryDrawerOpen } = useRFQ();

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#2B2622]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C8963E] block mb-2">
            Trade Protocols
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1B2A4A] tracking-tight mb-4">
            How wholesale works
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2622]/70 leading-relaxed font-sans">
            A frictionless, transparent procurement pipeline designed for international commercial importers, retail buyers, and project interior specifiers.
          </p>
        </motion.div>

        {/* 6-Step Horizontal Pipeline Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-6 rounded-lg bg-[#FAF6EE] border border-[#2B2622]/10 flex flex-col justify-between hover:border-[#1B2A4A] transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-[#1B2A4A] text-[#C8963E] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm font-bold text-[#B5472F]">
                      STEP {step.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1B2A4A] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#2B2622]/70 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Trigger with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 p-6 rounded-lg bg-[#1B2A4A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div>
            <h4 className="font-serif text-xl font-semibold text-[#FAF6EE] mb-1">
              Ready to initiate your commercial import evaluation?
            </h4>
            <p className="text-xs text-[#FAF6EE]/70 font-sans">
              Our export desk reviews new enquiries within 12 business hours.
            </p>
          </div>

          <button
            onClick={() => setIsEnquiryDrawerOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#C8963E] text-[#1B2A4A] hover:bg-[#B5472F] hover:text-white transition-colors rounded text-xs font-semibold uppercase tracking-wider cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Start Wholesale RFQ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
