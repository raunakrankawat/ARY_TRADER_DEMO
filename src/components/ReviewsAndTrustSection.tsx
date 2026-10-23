import React, { useState, useRef, useEffect } from 'react';
import { 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  Quote, 
  Building2, 
  Globe2, 
  Award, 
  ArrowRight,
  Sparkles,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  ExternalLink
} from 'lucide-react';
import { CUSTOMER_REVIEWS, TRUSTED_BRANDS } from '../data/reviews';
import { CustomerReview } from '../types';
import { useRFQ } from '../context/RFQContext';

// Authentic Google Multi-Color G Logo
const GoogleLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

// Google Star Rating Component
const GoogleStars: React.FC<{ rating: number; className?: string }> = ({ rating, className = 'w-4 h-4' }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`${className} ${
          i < rating 
            ? 'fill-[#FBBC05] text-[#FBBC05]' 
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ))}
  </div>
);

export const ReviewsAndTrustSection: React.FC = () => {
  const { setIsEnquiryDrawerOpen } = useRFQ();
  const [activeCategory, setActiveCategory] = useState<'all' | 'pantry' | 'heritage'>('all');
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  // Horizontal sliding carousel ref & state
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const filteredReviews = CUSTOMER_REVIEWS.filter(
    r => activeCategory === 'all' || r.division === 'all' || r.division === activeCategory
  );

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
      } else {
        setScrollProgress(0);
      }
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [filteredReviews]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = Math.max(320, clientWidth * 0.75);
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleCategoryChange = (cat: 'all' | 'pantry' | 'heritage') => {
    setActiveCategory(cat);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const toggleLike = (reviewId: string) => {
    setLikedReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  return (
    <section className="bg-[#F7F4ED] py-14 lg:py-20 border-b border-[#252822]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            PART 1: TRUSTED BY GLOBAL PARTNERS & KEY METRICS STRIP
           ======================================================== */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
              Global Trade Credibility
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#252822] mt-1">
              Trusted by Premier Importers &amp; Design Houses
            </h3>
            <p className="text-xs sm:text-sm text-[#252822]/70 font-sans mt-2">
              Serving commercial distributors, private-label food producers, and high-end architectural studios across four continents.
            </p>
          </div>

          {/* Partner Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {TRUSTED_BRANDS.map((brand) => (
              <div 
                key={brand.id}
                className="bg-white rounded-lg p-4 border border-[#252822]/10 hover:border-[#B89550] transition-all text-center flex flex-col justify-between shadow-2xs group hover:-translate-y-1"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#B75E43] block mb-1">
                    {brand.location}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#1B2A4A] group-hover:text-[#B75E43] transition-colors leading-tight mb-1">
                    {brand.name}
                  </h4>
                  <p className="text-[11px] text-[#252822]/65 font-sans leading-tight">
                    {brand.sector}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#252822]/8">
                  <span className="text-[10px] font-medium text-[#5B6E4E] block">
                    ✓ {brand.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Trade Proof Numbers */}
          <div className="mt-8 p-6 rounded-xl bg-white border border-[#252822]/10 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-[#252822]/10">
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1B2A4A]">14+</span>
              <p className="text-xs font-semibold text-[#252822]">Export Destinations</p>
              <p className="text-[11px] text-[#252822]/60 font-sans">Europe, GCC, Americas, Asia-Pacific</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#5B6E4E]">100%</span>
              <p className="text-xs font-semibold text-[#252822]">Statutory Clearance</p>
              <p className="text-[11px] text-[#252822]/60 font-sans">Govt. of India IEC, APEDA &amp; FSSAI</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#B89550]">40+</span>
              <p className="text-xs font-semibold text-[#252822]">Weaver Guild Families</p>
              <p className="text-[11px] text-[#252822]/60 font-sans">Salawas &amp; Marwar artisan pit looms</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#B75E43]">&lt; 7.5%</span>
              <p className="text-xs font-semibold text-[#252822]">Certified Moisture</p>
              <p className="text-[11px] text-[#252822]/60 font-sans">Strict laboratory Eurofins COA compliance</p>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: GOOGLE REVIEWS SLIDING PANEL
           ======================================================== */}
        <div className="mt-14">
          
          {/* Google Reviews Header Banner */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#252822]/10 shadow-xs mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F7F4ED] border border-[#252822]/10 flex items-center justify-center shrink-0 shadow-2xs">
                <GoogleLogo className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#252822]">
                    4.9
                  </span>
                  <div className="space-y-0.5">
                    <GoogleStars rating={5} className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-[11px] font-sans font-semibold text-[#5B6E4E] block">
                      EXCELLENT &bull; VERIFIED BUSINESS
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#252822]/75 font-sans mt-0.5">
                  Based on <strong>148+ Google Reviews</strong> &amp; verified commercial buyer ratings (All rated 4 to 5 out of 5 stars)
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Category Filter Tabs */}
              <div className="flex items-center p-1 bg-[#F7F4ED] border border-[#252822]/10 rounded-lg">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-[#1B2A4A] text-white shadow-xs'
                      : 'text-[#252822]/70 hover:text-[#1B2A4A]'
                  }`}
                >
                  All Reviews ({CUSTOMER_REVIEWS.length})
                </button>
                <button
                  onClick={() => handleCategoryChange('pantry')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                    activeCategory === 'pantry'
                      ? 'bg-[#5B6E4E] text-white shadow-xs'
                      : 'text-[#252822]/70 hover:text-[#5B6E4E]'
                  }`}
                >
                  Agri &amp; Food
                </button>
                <button
                  onClick={() => handleCategoryChange('heritage')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                    activeCategory === 'heritage'
                      ? 'bg-[#B75E43] text-white shadow-xs'
                      : 'text-[#252822]/70 hover:text-[#B75E43]'
                  }`}
                >
                  Craft &amp; Rugs
                </button>
              </div>

              {/* Slider Arrow Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleScroll('left')}
                  disabled={!canScrollLeft}
                  aria-label="Previous Google reviews"
                  className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                    canScrollLeft
                      ? 'border-[#252822]/20 bg-white text-[#252822] hover:bg-[#1B2A4A] hover:text-white hover:border-[#1B2A4A] shadow-xs'
                      : 'border-[#252822]/10 bg-[#F7F4ED] text-[#252822]/30 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleScroll('right')}
                  disabled={!canScrollRight}
                  aria-label="Next Google reviews"
                  className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                    canScrollRight
                      ? 'border-[#252822]/20 bg-white text-[#252822] hover:bg-[#1B2A4A] hover:text-white hover:border-[#1B2A4A] shadow-xs'
                      : 'border-[#252822]/10 bg-[#F7F4ED] text-[#252822]/30 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Sliding Panel Track */}
          <div className="relative">
            {canScrollLeft && (
              <div className="hidden sm:block absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-[#F7F4ED] to-transparent pointer-events-none z-10" />
            )}
            {canScrollRight && (
              <div className="hidden sm:block absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[#F7F4ED] to-transparent pointer-events-none z-10" />
            )}

            <div
              ref={sliderRef}
              onScroll={checkScroll}
              className="flex gap-5 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory focus:outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:none"
            >
              {filteredReviews.map((rev) => {
                const isLiked = likedReviews[rev.id] || false;
                const likes = (rev.likesCount || 12) + (isLiked ? 1 : 0);

                return (
                  <div
                    key={rev.id}
                    className="shrink-0 w-[300px] sm:w-[340px] md:w-[370px] snap-start bg-white rounded-2xl p-5 sm:p-6 border border-[#252822]/12 hover:border-[#B89550] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Google Review Card Header */}
                      <div className="flex items-start justify-between gap-3 mb-3.5">
                        <div className="flex items-center gap-3">
                          {/* Happy Indian Person / Reviewer Avatar */}
                          <div className="relative shrink-0">
                            {rev.avatarUrl ? (
                              <img
                                src={rev.avatarUrl}
                                alt={rev.author}
                                className="w-12 h-12 rounded-full object-cover border-2 border-[#B89550]/40 shadow-xs group-hover:scale-105 transition-transform"
                                onError={(e) => {
                                  // Fallback to monogram on image error
                                  (e.target as HTMLElement).style.display = 'none';
                                  const fallback = (e.target as HTMLElement).nextElementSibling as HTMLElement;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                            ) : null}
                            <div 
                              className={`w-12 h-12 rounded-full bg-[#1B2A4A] text-white items-center justify-center font-bold text-sm border-2 border-[#B89550]/40 shadow-xs ${rev.avatarUrl ? 'hidden' : 'flex'}`}
                            >
                              {rev.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </div>
                            
                            {/* Verified Buyer Check Badge */}
                            <span 
                              title="Verified Buyer"
                              className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#5B6E4E] text-white rounded-full flex items-center justify-center ring-2 ring-white shadow-2xs"
                            >
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            </span>
                          </div>

                          {/* Author Name & Google Badge */}
                          <div>
                            <h4 className="font-sans font-bold text-sm text-[#252822] group-hover:text-[#1B2A4A] transition-colors leading-tight">
                              {rev.author}
                            </h4>
                            <p className="text-[11px] text-[#252822]/65 font-sans flex items-center gap-1 mt-0.5">
                              <span className="text-[#B75E43] font-semibold">{rev.reviewerBadge || 'Local Guide'}</span>
                            </p>
                          </div>
                        </div>

                        {/* Google "G" Watermark Emblem */}
                        <div className="w-7 h-7 rounded-full bg-[#F7F4ED] flex items-center justify-center shrink-0 border border-[#252822]/8 shadow-2xs">
                          <GoogleLogo className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Google Rating Stars & Relative Post Date */}
                      <div className="flex items-center gap-2 mb-3">
                        <GoogleStars rating={rev.rating} className="w-4 h-4" />
                        <span className="text-[11px] font-sans text-[#252822]/55 font-medium">
                          {rev.relativeTime || rev.date}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                          {rev.rating}.0 / 5.0
                        </span>
                      </div>

                      {/* Review Comment Text */}
                      <p className="text-xs sm:text-[13px] text-[#252822]/85 leading-relaxed font-sans mb-4">
                        &ldquo;{rev.comment}&rdquo;
                      </p>

                      {/* Consignment Context Tag */}
                      <div className="p-2.5 rounded-lg bg-[#F7F4ED] border border-[#252822]/8 text-[11px] text-[#252822]/80 space-y-0.5 mb-2">
                        <p className="line-clamp-1">
                          <strong className="text-[#1B2A4A] font-semibold">Commodity:</strong> {rev.productPurchased}
                        </p>
                        {rev.orderVolume && (
                          <p className="line-clamp-1">
                            <strong className="text-[#B75E43] font-semibold">Volume:</strong> {rev.orderVolume}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Card Footer: Location & Google Helpful Feedback */}
                    <div className="pt-3 border-t border-[#252822]/10 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1 text-[#252822]/65 font-sans truncate max-w-[200px]">
                        <MapPin className="w-3 h-3 text-[#B89550] shrink-0" />
                        <span className="truncate">{rev.location}</span>
                      </div>

                      {/* Google "Helpful" Thumbs-Up Button */}
                      <button
                        type="button"
                        onClick={() => toggleLike(rev.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans transition-all cursor-pointer ${
                          isLiked
                            ? 'bg-[#1B2A4A] text-white shadow-xs'
                            : 'bg-[#F7F4ED] hover:bg-[#252822]/5 text-[#252822]/70 hover:text-[#252822]'
                        }`}
                        title="Mark as helpful"
                      >
                        <ThumbsUp className={`w-3 h-3 ${isLiked ? 'fill-current' : ''}`} />
                        <span>Helpful ({likes})</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Progress Indicator Bar */}
            <div className="mt-4 flex items-center justify-between gap-4 px-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[#252822]/60">
                  Showing {filteredReviews.length} Verified Google Trade Reviews
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-[11px] text-[#252822]/50 font-sans">
                  Swipe horizontally to browse client endorsements →
                </span>
                <div className="w-24 sm:w-36 h-1 bg-[#252822]/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#FBBC05] transition-all duration-300 rounded-full"
                    style={{ width: `${Math.max(20, scrollProgress)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Wholesale Partner Reference CTA Strip */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-[#252822]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-0.5 text-center sm:text-left">
              <h4 className="font-serif text-lg font-bold text-[#1B2A4A]">
                Require Trade References or Port Inspection Samples?
              </h4>
              <p className="text-xs text-[#252822]/70 font-sans">
                Our export desk can connect prospective commercial buyers with verifiable trade references in your region.
              </p>
            </div>

            <button
              onClick={() => setIsEnquiryDrawerOpen(true)}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1B2A4A] hover:bg-[#B75E43] transition-colors rounded shadow-xs cursor-pointer shrink-0"
            >
              Request Trade References
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
