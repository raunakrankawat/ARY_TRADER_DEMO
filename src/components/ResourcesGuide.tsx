import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ARTICLES, Article } from '../data/articles';
import { BookOpen, ArrowRight, X, Clock, Calendar } from 'lucide-react';

export const ResourcesGuide: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="resources" className="py-20 lg:py-28 bg-white border-b border-[#2B2622]/10">
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
              <span className="text-xs uppercase tracking-widest font-semibold text-[#1B2A4A]">
                Buyer Intelligence
              </span>
              <span className="text-[#2B2622]/30 text-xs">·</span>
              <span className="text-xs text-[#2B2622]/60">Sourcing Guides &amp; Market Insights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1B2A4A] tracking-tight">
              Trade guides &amp; technical standards
            </h2>
          </div>
        </motion.div>

        {/* 3-Column Editorial Article Cards with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#FAF6EE] rounded-lg p-6 border border-[#2B2622]/10 hover:border-[#C8963E] transition-all flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center gap-2 text-[11px] text-[#2B2622]/60 mb-3">
                  <span className="font-mono">{article.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-[#C8963E]" />
                    {article.readTime}
                  </span>
                </div>

                <h3 
                  onClick={() => setSelectedArticle(article)}
                  className="font-serif text-xl font-bold text-[#1B2A4A] group-hover:text-[#B5472F] transition-colors cursor-pointer leading-snug mb-3"
                >
                  {article.title}
                </h3>

                <p className="text-xs text-[#2B2622]/70 leading-relaxed font-sans mb-4">
                  {article.summary}
                </p>

                <div className="space-y-1.5 border-t border-[#2B2622]/10 pt-3 mb-4">
                  {article.keyPoints.slice(0, 2).map((pt, i) => (
                    <p key={i} className="text-[11px] text-[#2B2622]/70 flex items-start gap-1.5">
                      <span className="text-[#C8963E]">•</span>
                      <span className="line-clamp-2">{pt}</span>
                    </p>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedArticle(article)}
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1B2A4A] group-hover:text-[#B5472F] transition-colors cursor-pointer"
              >
                <span>Read Full Technical Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-[#1B2A4A]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF6EE] rounded-lg max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#2B2622]/20 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-[#2B2622]/10 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#C8963E] block mb-1">
                  Arya Trader Trade Intelligence · {selectedArticle.readTime}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1B2A4A]">
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1 text-[#2B2622]/60 hover:text-[#2B2622]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#2B2622]/80 leading-relaxed font-sans">
              <p className="font-medium text-[#1B2A4A]">
                {selectedArticle.summary}
              </p>

              <h4 className="font-serif text-lg font-bold text-[#1B2A4A] pt-2">
                Core Procurement Takeaways:
              </h4>

              <div className="space-y-3">
                {selectedArticle.keyPoints.map((pt, i) => (
                  <div key={i} className="p-3 bg-white rounded border border-[#2B2622]/10">
                    <p className="text-xs text-[#2B2622]">{pt}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#1B2A4A] text-white rounded mt-6">
                <p className="text-xs text-[#FAF6EE]/90">
                  Need a custom consultation for your import specifications? Contact our commercial team directly at <strong>info@aryatrader.com</strong> or via WhatsApp.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2B2622]/10 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-[#1B2A4A] text-white text-xs font-semibold uppercase tracking-wider rounded"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
