import React, { useRef, useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  ExternalLink,
  Sparkles,
  Building2,
  Anchor,
  Globe2
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface GovCert {
  id: string;
  code: string;
  shortTitle: string;
  badgeLabel: string;
  issuingMinistry: string;
  scope: string;
  iconBg: string;
  iconColor: string;
}

const GOV_CERTIFICATES: GovCert[] = [
  {
    id: 'cert-iec',
    code: 'DGFT-IEC',
    shortTitle: 'Import Export Code (IEC)',
    badgeLabel: 'DGFT GOVT OF INDIA',
    issuingMinistry: 'Ministry of Commerce & Industry',
    scope: 'Statutory global export authorization',
    iconBg: 'bg-[#1B2A4A]/10',
    iconColor: 'text-[#1B2A4A]'
  },
  {
    id: 'cert-fssai',
    code: 'FSSAI',
    shortTitle: 'Central Food License',
    badgeLabel: 'FOOD SAFETY AUTHORITY',
    issuingMinistry: 'Ministry of Health & Family Welfare',
    scope: 'Makhana & agri food safety verified',
    iconBg: 'bg-[#5B6E4E]/10',
    iconColor: 'text-[#5B6E4E]'
  },
  {
    id: 'cert-apeda',
    code: 'APEDA',
    shortTitle: 'Agri Export Accreditation (RCMC)',
    badgeLabel: 'APEDA MINISTRY OF COMMERCE',
    issuingMinistry: 'Agricultural Export Authority',
    scope: 'Cold-chain & phytosanitary compliant',
    iconBg: 'bg-[#B89550]/15',
    iconColor: 'text-[#B89550]'
  },
  {
    id: 'cert-gst',
    code: 'GSTIN',
    shortTitle: 'GST State Tax (State Code 08)',
    badgeLabel: 'MINISTRY OF FINANCE',
    issuingMinistry: 'Department of Revenue, Govt of India',
    scope: 'LUT zero-rated export tax billing',
    iconBg: 'bg-[#1B2A4A]/10',
    iconColor: 'text-[#1B2A4A]'
  },
  {
    id: 'cert-spices',
    code: 'SPICES BOARD',
    shortTitle: 'Spices Board Registration (CRES)',
    badgeLabel: 'SPICES BOARD INDIA',
    issuingMinistry: 'Ministry of Commerce & Industry',
    scope: 'Dehydrated powders & botanical spice exports',
    iconBg: 'bg-[#B75E43]/10',
    iconColor: 'text-[#B75E43]'
  },
  {
    id: 'cert-cepc',
    code: 'CEPC',
    shortTitle: 'Carpet Export Promotion Council',
    badgeLabel: 'CARPET GUILD COUNCIL',
    issuingMinistry: 'Ministry of Textiles, Govt of India',
    scope: 'Authentic Marwar hand-knotted origin',
    iconBg: 'bg-[#B89550]/15',
    iconColor: 'text-[#B89550]'
  },
  {
    id: 'cert-phyto',
    code: 'ISPM-15',
    shortTitle: 'Phytosanitary & Wood Fumigation',
    badgeLabel: 'PLANT QUARANTINE OF INDIA',
    issuingMinistry: 'Directorate of Plant Protection',
    scope: 'Wooden crates & ocean pallet treatment',
    iconBg: 'bg-[#5B6E4E]/10',
    iconColor: 'text-[#5B6E4E]'
  },
  {
    id: 'cert-msme',
    code: 'UDYAM',
    shortTitle: 'Udyam MSME Enterprise Registry',
    badgeLabel: 'MINISTRY OF MSME',
    issuingMinistry: 'Government of India',
    scope: 'Western India artisan enterprise support',
    iconBg: 'bg-[#1B2A4A]/10',
    iconColor: 'text-[#1B2A4A]'
  }
];

export const GovernmentCertificatesSection: React.FC = () => {
  const { navigateTo } = useNavigation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (dir: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollBy = clientWidth * 0.7;
      sliderRef.current.scrollTo({
        left: dir === 'left' ? scrollLeft - scrollBy : scrollLeft + scrollBy,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Header and Slide Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 pb-3 border-b border-[#252822]/10 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-5 h-px bg-[#B89550]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
              Statutory Approvals &amp; Compliance
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#252822]">
            Government Authentication &amp; Licenses
          </h2>
          <p className="text-xs text-[#252822]/70 font-sans mt-0.5">
            Registered commercial export certifications issued under statutory ministries of the Government of India.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous certificates"
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'border-[#252822]/20 text-[#1B2A4A] bg-white hover:border-[#B89550] shadow-2xs active:scale-95'
                  : 'border-[#252822]/10 text-[#252822]/30 bg-transparent cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next certificates"
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                canScrollRight
                  ? 'border-[#252822]/20 text-[#1B2A4A] bg-white hover:border-[#B89550] shadow-2xs active:scale-95'
                  : 'border-[#252822]/10 text-[#252822]/30 bg-transparent cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => navigateTo('certifications')}
            className="text-xs font-semibold uppercase tracking-wider text-[#B75E43] hover:underline cursor-pointer hidden sm:inline"
          >
            All Docs →
          </button>
        </div>
      </div>

      {/* Horizontal Sliding Panel */}
      <div 
        ref={sliderRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory focus:outline-none [-webkit-overflow-scrolling:touch]"
        tabIndex={0}
        aria-label="Government certifications sliding track"
      >
        {GOV_CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            className="shrink-0 w-[240px] sm:w-[260px] snap-start bg-white rounded-lg p-4 border border-[#252822]/12 hover:border-[#B89550] hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Short Icon Emblem Header */}
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-md ${cert.iconBg} ${cert.iconColor} flex items-center justify-center font-bold font-mono text-xs shadow-2xs group-hover:scale-105 transition-transform`}>
                  {cert.code.substring(0, 4)}
                </div>
                <span className="flex items-center gap-1 text-[10px] font-semibold text-[#5B6E4E] bg-[#5B6E4E]/10 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              </div>

              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B89550] block font-mono">
                {cert.badgeLabel}
              </span>
              <h3 className="font-serif text-sm font-semibold text-[#252822] mt-0.5 group-hover:text-[#B75E43] transition-colors leading-snug">
                {cert.shortTitle}
              </h3>
              <p className="text-[11px] text-[#252822]/65 font-sans mt-1">
                {cert.issuingMinistry}
              </p>
            </div>

            <div className="pt-3 border-t border-[#252822]/10 mt-3 text-[11px] text-[#252822]/75 font-sans flex items-center justify-between">
              <span className="truncate pr-2">{cert.scope}</span>
              <ShieldCheck className="w-3.5 h-3.5 text-[#B89550] shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
