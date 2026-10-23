import React from 'react';
import { useRFQ } from '../../context/RFQContext';
import { useNavigation } from '../../context/NavigationContext';
import { 
  Anchor, 
  Globe2, 
  ShieldCheck, 
  FileText, 
  ChevronRight, 
  Truck, 
  Plane, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  PackageCheck
} from 'lucide-react';

export const ExportPage: React.FC = () => {
  const { setIsEnquiryDrawerOpen } = useRFQ();
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-[#F7F4ED] min-h-screen py-10 lg:py-14 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#252822]/60 font-sans mb-4">
          <span className="hover:text-[#B75E43] cursor-pointer" onClick={() => navigateTo('home')}>
            Home
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#252822]/40" />
          <span className="text-[#252822] font-semibold">
            Export Logistics &amp; Trade Infrastructure
          </span>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#B89550]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
              Maritime Shipping &amp; Trade Compliance
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#252822] tracking-tight">
            Seamless Global Export Logistics
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#252822]/75 font-sans leading-relaxed">
            Operating via Inland Container Depot (ICD) Bhagat Ki Kothi in Jodhpur with direct bonded rail corridors to Gujarat ocean berths. Verified container stuffing, customs dockets, and international Incoterms.
          </p>
        </div>

        {/* 1. Core Gateways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 border border-[#252822]/10 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#1B2A4A]/10 text-[#1B2A4A] flex items-center justify-center">
              <Anchor className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#252822]">Mundra Port &amp; Nhava Sheva</h3>
            <p className="text-xs text-[#252822]/70 leading-relaxed font-sans">
              Primary marine transit gates for FCL (Full Container Load) ocean freight. Jodhpur ICD rail connectivity ensures swift customs clearance and vessel berthing within 48 hours of seal application.
            </p>
            <div className="text-[11px] font-mono text-[#5B6E4E] pt-2 border-t border-[#252822]/10">
              Transit: Jebel Ali (5d) · Rotterdam (20d) · US East Coast (26d)
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#252822]/10 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#B75E43]/10 text-[#B75E43] flex items-center justify-center">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#252822]">Air Express Cargo &amp; Samples</h3>
            <p className="text-xs text-[#252822]/70 leading-relaxed font-sans">
              Handloom strike-off swatches, sealed 1kg food sample barrier pouches, and high-urgency luxury carpet orders routed via Delhi IGI or Mumbai CSIA international air terminals via DHL, FedEx, and UPS.
            </p>
            <div className="text-[11px] font-mono text-[#B75E43] pt-2 border-t border-[#252822]/10">
              Transit: Worldwide Delivery in 3–5 Business Days
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#252822]/10 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#5B6E4E]/10 text-[#5B6E4E] flex items-center justify-center">
              <PackageCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#252822]">Export Protective Packaging</h3>
            <p className="text-xs text-[#252822]/70 leading-relaxed font-sans">
              Carpets are rolled with heavy-duty jute canvas and waterproof sleeves. Makhana and dehydrated onion powders use nitrogen-flushed food-grade moisture barrier foil bags on heat-treated ISPM-15 wooden pallets.
            </p>
            <div className="text-[11px] font-mono text-[#1B2A4A] pt-2 border-t border-[#252822]/10">
              Packaging: Moisture &lt; 7.5% Guaranteed in Marine Transit
            </div>
          </div>
        </div>

        {/* 2. Commercial Terms Table */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#252822]/10 shadow-xs mb-16 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B89550]">
              Standard Commercial Framework
            </span>
            <h2 className="font-serif text-2xl font-normal text-[#252822] mt-1">
              Accepted Incoterms &amp; Trade Terms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
            <div className="p-4 bg-[#F7F4ED] rounded-lg border border-[#252822]/10 space-y-2">
              <strong className="text-[#252822] text-sm block">FOB (Free on Board) — Mundra Port</strong>
              <p className="text-[#252822]/70 leading-relaxed">
                Most popular for global commercial distributors. Abhyashish Traders manages factory loading, inland haulage to Mundra Port, export customs clearance, and terminal handling charges (THC).
              </p>
            </div>

            <div className="p-4 bg-[#F7F4ED] rounded-lg border border-[#252822]/10 space-y-2">
              <strong className="text-[#252822] text-sm block">CIF (Cost, Insurance &amp; Freight)</strong>
              <p className="text-[#252822]/70 leading-relaxed">
                Preferred by overseas retailers requiring complete landed ocean freight delivery to their chosen destination port (e.g., Jebel Ali, Hamburg, New York, Singapore) with Institute Cargo Clauses (A) insurance.
              </p>
            </div>

            <div className="p-4 bg-[#F7F4ED] rounded-lg border border-[#252822]/10 space-y-2">
              <strong className="text-[#252822] text-sm block">Commercial Payment Modes</strong>
              <p className="text-[#252822]/70 leading-relaxed">
                Irrevocable Letter of Credit (L/C at Sight) issued by prime international banks, or Telegraphic Transfer (T/T: 30% advance deposit with 70% balance against shipping documents and Bill of Lading).
              </p>
            </div>

            <div className="p-4 bg-[#F7F4ED] rounded-lg border border-[#252822]/10 space-y-2">
              <strong className="text-[#252822] text-sm block">Statutory Export Pack</strong>
              <p className="text-[#252822]/70 leading-relaxed">
                Every commercial container includes: DGFT IEC invoice, GSTIN export tax declaration, Certificate of Origin (Form A), Phytosanitary Certificate, Eurofins Laboratory COA, and ISPM-15 wooden pallet stamp.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Enquiry CTA Banner */}
        <div className="rounded-xl bg-[#1B2A4A] p-8 sm:p-10 text-[#F7F4ED] border border-[#B89550]/30 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B89550]">
              Wholesale Proforma Quotations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
              Request Container FOB or CIF Pricing
            </h3>
            <p className="text-xs text-[#F7F4ED]/80 font-sans">
              Our export officers calculate optimal CBM stuffing, pallet layouts, and transit schedules for your destination port.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsEnquiryDrawerOpen(true)}
              className="px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider text-[#1B2A4A] bg-[#B89550] hover:bg-[#c4a25c] transition-colors cursor-pointer shadow-md"
            >
              Open RFQ Basket
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="px-5 py-3 rounded text-xs font-medium text-white border border-white/20 hover:bg-white/10 transition-colors cursor-pointer"
            >
              Contact Desk
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
