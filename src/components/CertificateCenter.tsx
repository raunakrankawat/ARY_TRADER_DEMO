import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CERTIFICATES } from '../data/certificates';
import { CertificateDoc } from '../types';
import { ShieldCheck, Download, FileText, CheckCircle2, AlertCircle, Eye, X } from 'lucide-react';

export const CertificateCenter: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<CertificateDoc | null>(null);
  const [filter, setFilter] = useState<'all' | 'heritage' | 'pantry'>('all');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const filteredCerts = CERTIFICATES.filter(c => filter === 'all' || c.division === 'all' || c.division === filter);

  const handleSimulateDownload = (cert: CertificateDoc) => {
    setDownloadSuccess(cert.id);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-white border-b border-[#2B2622]/10">
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
                Regulatory Assurance
              </span>
              <span className="text-[#2B2622]/30 text-xs">·</span>
              <span className="text-xs text-[#2B2622]/60">Compliance &amp; Laboratory COA Center</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1B2A4A] tracking-tight">
              Certifications &amp; quality standards
            </h2>
          </div>

          {/* Division Filter */}
          <div className="flex items-center p-1 bg-[#FAF6EE] border border-[#2B2622]/10 rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-all ${
                filter === 'all' ? 'bg-[#1B2A4A] text-white shadow-xs' : 'text-[#2B2622]/70 hover:text-[#1B2A4A]'
              }`}
            >
              All Records ({CERTIFICATES.length})
            </button>
            <button
              onClick={() => setFilter('heritage')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-all ${
                filter === 'heritage' ? 'bg-[#B5472F] text-white shadow-xs' : 'text-[#2B2622]/70 hover:text-[#B5472F]'
              }`}
            >
              Heritage &amp; Home
            </button>
            <button
              onClick={() => setFilter('pantry')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-all ${
                filter === 'pantry' ? 'bg-[#6B7F5E] text-white shadow-xs' : 'text-[#2B2622]/70 hover:text-[#6B7F5E]'
              }`}
            >
              Pantry &amp; Food Safety
            </button>
          </div>
        </motion.div>

        {/* Certificate Cards Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FAF6EE] rounded-lg p-6 border border-[#2B2622]/10 hover:border-[#1B2A4A] transition-all flex flex-col justify-between shadow-2xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded bg-white text-[#1B2A4A] border border-[#2B2622]/10 shadow-2xs">
                    <FileText className="w-5 h-5 text-[#C8963E]" />
                  </div>
                  {cert.needsConfirmation ? (
                    <span className="text-[10px] font-mono font-medium text-[#B5472F] bg-[#B5472F]/10 px-2 py-0.5 rounded">
                      Pending Exact Reg. Confirmation
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono font-medium text-[#6B7F5E] bg-[#6B7F5E]/10 px-2 py-0.5 rounded flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Statutory Clearance
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1B2A4A] group-hover:text-[#B5472F] transition-colors leading-snug mb-1">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-[#2B2622]/70 mb-3 bg-white/70 p-2 rounded border border-[#2B2622]/5">
                  {cert.regNumber}
                </p>

                <p className="text-xs text-[#2B2622]/70 leading-relaxed font-sans mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2B2622]/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedDoc(cert)}
                  className="text-xs font-semibold text-[#1B2A4A] hover:text-[#B5472F] flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Spec</span>
                </button>

                <button
                  onClick={() => handleSimulateDownload(cert)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-[#2B2622]/15 hover:border-[#1B2A4A] text-xs font-medium text-[#1B2A4A] transition-colors cursor-pointer"
                >
                  {downloadSuccess === cert.id ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6B7F5E]" />
                      <span className="text-[#6B7F5E]">Downloaded</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 text-[#C8963E]" />
                      <span>Download PDF</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 bg-[#1B2A4A]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-xl w-full p-6 shadow-2xl border border-[#2B2622]/20">
            <div className="flex items-start justify-between pb-4 border-b border-[#2B2622]/10 mb-4">
              <div>
                <span className="text-[11px] font-mono text-[#C8963E] uppercase tracking-wider block">
                  Export Document Specification
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1B2A4A]">
                  {selectedDoc.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedDoc(null)}
                className="p-1 text-[#2B2622]/60 hover:text-[#2B2622]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-[#2B2622]/80 leading-relaxed">
              <div className="p-3 bg-[#FAF6EE] rounded border border-[#2B2622]/10 space-y-1.5 font-mono">
                <p><strong className="text-[#1B2A4A]">Issuing Authority:</strong> {selectedDoc.issuingAuthority}</p>
                <p><strong className="text-[#1B2A4A]">Registry Status:</strong> {selectedDoc.regNumber}</p>
              </div>

              <p>{selectedDoc.description}</p>

              {selectedDoc.needsConfirmation && (
                <div className="p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                  <p className="text-[11px]">
                    <strong>Exporter Notice:</strong> Specific official registration license numbers and Archaeological Survey of India (ASI) statutory clearances are tagged for operational confirmation during official quotation handoff.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#2B2622]/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-4 py-2 text-xs font-medium text-[#2B2622]/70 hover:text-[#2B2622]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleSimulateDownload(selectedDoc);
                  setSelectedDoc(null);
                }}
                className="px-4 py-2 bg-[#1B2A4A] text-white rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B5472F] transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[#C8963E]" />
                <span>Download Sample Specimen</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
