import React from 'react';
import { CertificateCenter } from '../CertificateCenter';
import { GovernmentCertificatesSection } from '../GovernmentCertificatesSection';
import { useNavigation } from '../../context/NavigationContext';
import { ChevronRight, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-[#F7F4ED] min-h-screen py-10 lg:py-14 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#252822]/60 font-sans mb-4">
          <span className="hover:text-[#B75E43] cursor-pointer" onClick={() => navigateTo('home')}>
            Home
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#252822]/40" />
          <span className="text-[#252822] font-semibold">
            Certifications &amp; Regulatory Compliance
          </span>
        </div>

        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#B89550]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
              Statutory Quality Registry &amp; Export Verification
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#252822] tracking-tight">
            Government Licenses &amp; Compliance Dockets
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#252822]/75 font-sans leading-relaxed">
            Every shipment exported by Abhyashish Traders conforms to official statutory standards under the Ministry of Commerce &amp; Industry, APEDA, FSSAI, and international phytosanitary quarantine protocols.
          </p>
        </div>
      </div>

      {/* 1. Quick Icons Sliding Track */}
      <GovernmentCertificatesSection />

      {/* 2. Full Certificate Directory & Downloads */}
      <CertificateCenter />
    </div>
  );
};
