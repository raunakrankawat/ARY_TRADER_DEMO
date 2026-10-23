import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useRFQ } from '../../context/RFQContext';
import { 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Compass, 
  Globe2, 
  Anchor, 
  PhoneCall,
  CheckCircle2,
  Users
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { openEnquiryModal } = useRFQ();

  return (
    <div className="bg-[#F7F4ED] min-h-screen py-10 lg:py-16 space-y-16 lg:space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#B89550]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
              Company Narrative &amp; Sourcing Philosophy
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#252822] tracking-tight leading-[1.08]">
            Connecting Cultures, <br />
            <span className="italic font-normal text-[#B75E43]">Building Prosperity.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#252822]/80 font-sans leading-relaxed">
            Headquartered in the historic craft hub of Jodhpur, Rajasthan, <strong>Abhyashish Traders (Arya Trader)</strong> bridges regional master artisans and certified agricultural grower clusters directly to international commercial buyers, luxury retailers, and institutional procurement partners worldwide.
          </p>
        </div>

        {/* Section 1: Introduction & Dual Divisions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B89550]">
              Who We Are
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#252822]">
              A Dedicated Indian Trading House Grounded in Provenance
            </h2>
            <p className="text-xs sm:text-sm text-[#252822]/80 font-sans leading-relaxed">
              Western India possesses two of the world’s most distinctive trade strengths: centuries-old artisan traditions in hand-knotted textiles, stone, and woodcraft; and exceptional agro-climatic conditions for high-pungency alliums, spices, and wetland lotus crops.
            </p>
            <p className="text-xs sm:text-sm text-[#252822]/80 font-sans leading-relaxed">
              Founded on the principles of equitable artisan compensation, statutory compliance, and batch traceability, Abhyashish Traders operates without unnecessary intermediary layers, ensuring authentic provenance for buyers and dignified livelihoods for producers.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#252822]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#5B6E4E]" />
                <span>Zero Child Labor (Care &amp; Fair Aligned)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#5B6E4E]" />
                <span>Direct Cluster Procurement</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#EFEAE1] border border-[#252822]/10 shadow-md">
              <img
                src="/assets/images/craft_artisan_weaving_loom_1792504552453.jpg"
                alt="Master artisan at traditional loom in Jodhpur atelier"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Division Pillars */}
        <div className="pt-16 border-t border-[#252822]/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
              Two Core Export Operations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#252822] mt-1">
              Distinct Standards, One Commitment to Quality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Heritage Division */}
            <div className="p-8 rounded-xl bg-white border border-[#252822]/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#B75E43]">
                  Division 01
                </span>
                <Compass className="w-5 h-5 text-[#B89550]" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#252822]">
                Home Decor &amp; Heritage Textiles
              </h3>
              <p className="text-xs sm:text-sm text-[#252822]/75 font-sans leading-relaxed">
                Operating directly across Jodhpur, Salawas, and rural Marwar craft belts. We oversee upright pit looms producing 220–280 KPSI hand-knotted wool and mulberry silk carpets, flat-weave reversible cotton-wool dhurries, seasoned Sheesham furniture, and hand-cast brass artifacts.
              </p>
              <ul className="space-y-2 text-xs text-[#252822]/80 font-sans pt-2 border-t border-[#252822]/8">
                <li>• Bespoke custom loom runs up to oversized banquet dimensions</li>
                <li>• Naturally extracted vegetable dyes (madder root, indigo, pomegranate)</li>
                <li>• Individual loom provenance sheets and export fumigation documentation</li>
              </ul>
            </div>

            {/* Food Division */}
            <div className="p-8 rounded-xl bg-white border border-[#252822]/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#5B6E4E]">
                  Division 02
                </span>
                <Sparkles className="w-5 h-5 text-[#5B6E4E]" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#252822]">
                Food &amp; Agricultural Commodities
              </h3>
              <p className="text-xs sm:text-sm text-[#252822]/75 font-sans leading-relaxed">
                Aggregating certified organic harvests and contracted grower output. Our facilities sort, calibrate, and package export-grade Phool Makhana (6+ and 6.5+ Suta Jumbo), gentle-temperature dehydrated white/red onion powders (80–100 mesh), and fresh export onions.
              </p>
              <ul className="space-y-2 text-xs text-[#252822]/80 font-sans pt-2 border-t border-[#252822]/8">
                <li>• Laboratory COA verified moisture &lt; 7.5% and zero chemical bleaching</li>
                <li>• Multi-wall nitrogen barrier packaging preventing transit oxidation</li>
                <li>• Direct bonded reefer and dry container loads via Mundra Port</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Verified Capabilities & Ethics */}
        <div className="pt-16 border-t border-[#252822]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#EFEAE1] border border-[#252822]/10 shadow-md">
                <img
                  src="/assets/images/hero_luxury_atelier_backdrop_1792590480813.jpg"
                  alt="Historic Jodhpur architecture and export craft house"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
                Regulatory Transparency
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#252822]">
                Built for Institutional and Cross-Border Trust
              </h2>
              <p className="text-xs sm:text-sm text-[#252822]/80 font-sans leading-relaxed">
                International trade requires absolute compliance certainty. Abhyashish Traders maintains active statutory registrations with the Ministry of Commerce &amp; Industry (Directorate General of Foreign Trade), GSTIN, and statutory agricultural export bodies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-lg border border-[#252822]/10">
                  <span className="font-semibold text-xs text-[#252822] block mb-1">
                    Export Licensure
                  </span>
                  <p className="text-xs text-[#252822]/70 font-sans">
                    DGFT Importer-Exporter Code (IEC) &amp; GSTIN verified documentation.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-[#252822]/10">
                  <span className="font-semibold text-xs text-[#252822] block mb-1">
                    Agri &amp; Food Clearances
                  </span>
                  <p className="text-xs text-[#252822]/70 font-sans">
                    APEDA registration, FSSAI alignment, and phytosanitary dockets.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-[#252822]/10">
                  <span className="font-semibold text-xs text-[#252822] block mb-1">
                    Maritime Corridors
                  </span>
                  <p className="text-xs text-[#252822]/70 font-sans">
                    Direct ICD Bhagat Ki Kothi (Jodhpur) rail dispatch to Mundra and Nhava Sheva.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-[#252822]/10">
                  <span className="font-semibold text-xs text-[#252822] block mb-1">
                    Commercial Desk
                  </span>
                  <p className="text-xs text-[#252822]/70 font-sans">
                    2 to 4 hour response time for proforma quotes and CAD loom rendering approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Relevant Enquiry CTA Finish */}
        <div className="mt-16 p-8 sm:p-12 rounded-xl bg-[#1B2A4A] text-[#F7F4ED] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-[#B89550]/30">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#B89550] font-semibold">
              Begin a Partnership
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-white leading-tight">
              Ready to Discuss Your Wholesale or Architectural Sourcing Scope?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
              Our export desk assists with strike-off samples, CAD renderings, container stuffing calculations, and IncoTerm quotations (FOB / CIF / CFR).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => openEnquiryModal()}
              className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#1B2A4A] bg-[#B89550] hover:bg-[#c9a65f] transition-colors rounded shadow-xs cursor-pointer"
            >
              Enquire Now
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="px-5 py-3.5 text-xs font-medium tracking-wide text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors rounded cursor-pointer flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B89550]" />
              <span>Contact Headquarters</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
