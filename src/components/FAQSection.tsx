import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/faqs';
import { ChevronDown, Search } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState<'all' | 'ordering' | 'shipping' | 'quality' | 'payment'>('all');

  const filteredFaqs = FAQS.filter(faq => {
    if (selectedCat !== 'all' && faq.category !== selectedCat) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#FAF6EE] border-b border-[#2B2622]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B5472F]">
              Importer Knowledge Base
            </span>
            <span className="text-[#2B2622]/30 text-xs">·</span>
            <span className="text-xs text-[#2B2622]/60">Transparent Wholesale Terms</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1B2A4A] tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2622]/70 leading-relaxed font-sans max-w-xl mx-auto">
            Clear guidelines on minimum orders, ocean freight schedules, letters of credit, and statutory export compliance.
          </p>
        </motion.div>

        {/* Filter and Search Bar with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center p-1 bg-white border border-[#2B2622]/10 rounded-lg shadow-2xs">
            <button
              onClick={() => setSelectedCat('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                selectedCat === 'all' ? 'bg-[#1B2A4A] text-white shadow-xs' : 'text-[#2B2622]/70 hover:text-[#1B2A4A]'
              }`}
            >
              All FAQs
            </button>
            <button
              onClick={() => setSelectedCat('ordering')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                selectedCat === 'ordering' ? 'bg-[#1B2A4A] text-white shadow-xs' : 'text-[#2B2622]/70 hover:text-[#1B2A4A]'
              }`}
            >
              MOQ &amp; Samples
            </button>
            <button
              onClick={() => setSelectedCat('shipping')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                selectedCat === 'shipping' ? 'bg-[#1B2A4A] text-white shadow-xs' : 'text-[#2B2622]/70 hover:text-[#1B2A4A]'
              }`}
            >
              Ports &amp; Shipping
            </button>
            <button
              onClick={() => setSelectedCat('payment')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                selectedCat === 'payment' ? 'bg-[#1B2A4A] text-white shadow-xs' : 'text-[#2B2622]/70 hover:text-[#1B2A4A]'
              }`}
            >
              Payment Terms
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#2B2622]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search MOQ, ports, LC..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#2B2622]/15 rounded focus:outline-none focus:border-[#1B2A4A] text-[#2B2622] shadow-2xs"
            />
          </div>
        </motion.div>

        {/* Accordion List with Motion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-lg border border-[#2B2622]/10 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF6EE]/50 transition-colors cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-[#1B2A4A]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C8963E] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#B5472F]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#2B2622]/80 leading-relaxed font-sans border-t border-[#2B2622]/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
