import React from 'react';
import { EnquiryForm } from '../EnquiryForm';
import { useNavigation } from '../../context/NavigationContext';
import { useRFQ } from '../../context/RFQContext';
import { ChevronRight, ShieldCheck, Clock, MapPin, Mail, Phone, Award } from 'lucide-react';

export const EnquiryPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { enquiryModalProduct, enquiryModalCategory } = useRFQ();

  return (
    <div className="bg-[#F7F4ED] min-h-screen py-10 lg:py-14 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#252822]/60 font-sans mb-4">
          <span 
            className="hover:text-[#B75E43] cursor-pointer" 
            onClick={() => navigateTo('home')}
          >
            Home
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#252822]/40" />
          <span className="text-[#252822] font-semibold">
            Commercial Sourcing &amp; B2B Enquiry
          </span>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#B89550]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
              Direct Factory Trade Desk · Jodhpur Export Bureau
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#252822] tracking-tight">
            Commercial Sourcing &amp; Proforma Enquiry
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#252822]/75 font-sans leading-relaxed">
            Submit your wholesale specifications, container stuffing requirements, or private-label custom dimensions. Every submission receives a formal reference tracking dossier and direct attention from our export compliance officers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Form Card (Span 8) */}
          <div className="lg:col-span-8 bg-[#FAF6EE] rounded-2xl border border-[#252822]/15 shadow-sm overflow-hidden">
            <div className="bg-[#1E211B] text-[#F7F4ED] p-5 sm:p-6 border-b border-white/10">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B89550] block">
                Official Commercial Inquiry Dossier
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-white mt-1">
                Wholesale Specifications Intake
              </h2>
              <p className="text-xs sm:text-sm text-[#F7F4ED]/75 mt-1">
                Fill in the commercial parameters below. Fields marked with an asterisk (*) are mandatory.
              </p>
            </div>

            <EnquiryForm
              initialProduct={enquiryModalProduct}
              initialCategory={enquiryModalCategory}
              mode="page"
            />
          </div>

          {/* Right Information / Trust Sidebar (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Sourcing SLA & Guarantee */}
            <div className="bg-white rounded-xl p-6 border border-[#252822]/10 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-[#1B2A4A]">
                <Clock className="w-5 h-5 text-[#B89550]" />
                <h3 className="font-serif text-lg font-medium text-[#252822]">
                  Guaranteed Response SLA
                </h3>
              </div>
              <p className="text-xs text-[#252822]/75 leading-relaxed">
                Commercial queries are processed during Indian Standard Time (IST) business hours. An export officer will furnish:
              </p>
              <ul className="text-xs text-[#252822]/80 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#5B6E4E] font-bold">✓</span>
                  <span>Detailed proforma quote (FOB Mundra / Nhava Sheva or CIF destination)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5B6E4E] font-bold">✓</span>
                  <span>Harmonized HS Code classification &amp; duty estimate support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5B6E4E] font-bold">✓</span>
                  <span>Production lead time and container stuffing diagrams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5B6E4E] font-bold">✓</span>
                  <span>Strike-off swatch / courier sample dispatch tracking</span>
                </li>
              </ul>
            </div>

            {/* Direct Factory Coordinates */}
            <div className="bg-[#1E211B] text-[#F7F4ED] rounded-xl p-6 border border-white/10 shadow-xs space-y-4">
              <span className="text-[10px] uppercase font-semibold text-[#B89550] tracking-wider block">
                Export Compliance Desk
              </span>
              <h4 className="font-serif text-lg text-white">
                Abhyashish Traders (Arya Trader)
              </h4>
              
              <div className="space-y-3 text-xs text-[#F7F4ED]/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B89550] shrink-0 mt-0.5" />
                  <span>Jodhpur &amp; Salawas Weaving Cluster, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#B89550] shrink-0" />
                  <a href="mailto:enquiry@ayatrader.com" className="hover:text-white transition-colors">
                    enquiry@ayatrader.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#B89550] shrink-0" />
                  <a href="https://wa.me/919799706428" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +91 97997 06428 (Trade Desk)
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#B89550]">
                <ShieldCheck className="w-4 h-4" />
                <span>DGFT &amp; APEDA Registered Entity</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
