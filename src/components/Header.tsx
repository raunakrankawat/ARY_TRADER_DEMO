import React, { useState, useRef, useEffect } from 'react';
import { useRFQ } from '../context/RFQContext';
import { useNavigation, PageId } from '../context/NavigationContext';
import { 
  FileText, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Mail, 
  Sparkles, 
  MessageCircle, 
  ExternalLink, 
  CheckCircle2,
  ShoppingCart,
  ShoppingBag
} from 'lucide-react';

export const Header: React.FC = () => {
  const { totalItemsCount, setIsEnquiryDrawerOpen, setSelectedDivision } = useRFQ();
  const { currentPage, navigateTo } = useNavigation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isDark = true;

  // Close categories dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCategoriesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageId, options?: { categoryFilter?: string; scrollToId?: string }) => {
    navigateTo(page, options);
    setMobileMenuOpen(false);
    setCategoriesDropdownOpen(false);
  };

  return (
    <>
      {/* Capsule Pill Navigation Bar Matching Reference Image */}
      <header className="sticky top-3 sm:top-5 z-40 px-3 sm:px-6 w-full flex justify-center pointer-events-none transition-all duration-300">
        <div className="pointer-events-auto w-full max-w-4xl lg:max-w-5xl rounded-full bg-[#121316] text-white border border-white/10 shadow-2xl py-2 px-3 sm:px-4 flex items-center justify-between gap-3 sm:gap-6 backdrop-blur-md">
          
          {/* Left Zone: Circular Logo Emblem (No repeated text, saving space) */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              title="Abhyashish Traders (AYA) - Home"
              aria-label="Home"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-105 transition-transform group cursor-pointer focus:outline-none shrink-0 p-1"
            >
              <img 
                src="/assets/aistudio/image_2a6d18b6.png" 
                alt="AYA Brand Logo" 
                className="w-full h-full object-contain" 
              />
            </button>
          </div>

          {/* Center Zone: Clean Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-sans font-medium tracking-normal">
            
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`py-1.5 transition-colors cursor-pointer relative ${
                currentPage === 'home'
                  ? isDark ? 'text-white font-semibold' : 'text-[#121316] font-semibold'
                  : isDark ? 'text-white/70 hover:text-white' : 'text-[#141517]/70 hover:text-[#B75E43]'
              }`}
            >
              <span>Home</span>
              {currentPage === 'home' && (
                <span className={`absolute -bottom-1 left-2 right-2 h-0.5 rounded-full ${isDark ? 'bg-[#B89550]' : 'bg-[#B75E43]'}`} />
              )}
            </button>

            {/* Categories Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                onMouseEnter={() => setCategoriesDropdownOpen(true)}
                className={`flex items-center gap-1 py-1.5 transition-colors cursor-pointer relative ${
                  currentPage === 'categories' || categoriesDropdownOpen
                    ? isDark ? 'text-[#B89550] font-semibold' : 'text-[#B75E43] font-semibold'
                    : isDark ? 'text-white/70 hover:text-white' : 'text-[#141517]/70 hover:text-[#B75E43]'
                }`}
                aria-expanded={categoriesDropdownOpen}
              >
                <span>Categories</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${categoriesDropdownOpen ? 'rotate-180' : ''}`} />
                {currentPage === 'categories' && (
                  <span className={`absolute -bottom-1 left-2 right-2 h-0.5 rounded-full ${isDark ? 'bg-[#B89550]' : 'bg-[#B75E43]'}`} />
                )}
              </button>

              {/* Mega Dropdown Menu */}
              {categoriesDropdownOpen && (
                <div 
                  onMouseLeave={() => setCategoriesDropdownOpen(false)}
                  className="absolute top-full -left-12 w-84 bg-white rounded-2xl shadow-2xl border border-[#252822]/10 p-4 mt-2 space-y-4 animate-in fade-in slide-in-from-top-1 duration-150 z-50 text-[#252822]"
                >
                  {/* Division 1: Food & Agri */}
                  <div>
                    <div className="flex items-center justify-between border-b border-[#252822]/8 pb-1.5 mb-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5B6E4E]">
                        Food &amp; Agricultural Commodities
                      </span>
                      <button 
                        onClick={() => {
                          setSelectedDivision('pantry');
                          handleNavClick('categories', { categoryFilter: 'pantry' });
                        }}
                        className="text-[10px] text-[#5B6E4E] hover:underline cursor-pointer"
                      >
                        View All
                      </button>
                    </div>
                    <ul className="space-y-1 text-xs text-[#252822]/80">
                      <li>
                        <button
                          onClick={() => {
                            setSelectedDivision('pantry');
                            handleNavClick('categories', { categoryFilter: 'pantry' });
                          }}
                          className="w-full text-left py-1 px-2 rounded-lg hover:bg-[#F7F4ED] hover:text-[#252822] transition-colors flex items-center justify-between group cursor-pointer"
                        >
                          <span>Phool Makhana (6+ Suta Jumbo)</span>
                          <span className="text-[10px] text-[#5B6E4E] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setSelectedDivision('pantry');
                            handleNavClick('categories', { categoryFilter: 'pantry' });
                          }}
                          className="w-full text-left py-1 px-2 rounded-lg hover:bg-[#F7F4ED] hover:text-[#252822] transition-colors flex items-center justify-between group cursor-pointer"
                        >
                          <span>Dehydrated Organic Onion Powder</span>
                          <span className="text-[10px] text-[#5B6E4E] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setSelectedDivision('pantry');
                            handleNavClick('categories', { categoryFilter: 'pantry' });
                          }}
                          className="w-full text-left py-1 px-2 rounded-lg hover:bg-[#F7F4ED] hover:text-[#252822] transition-colors flex items-center justify-between group cursor-pointer"
                        >
                          <span>Fresh Export Red &amp; Pink Onions</span>
                          <span className="text-[10px] text-[#5B6E4E] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Division 2: Home Decor & Heritage */}
                  <div>
                    <div className="flex items-center justify-between border-b border-[#252822]/8 pb-1.5 mb-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B75E43]">
                        Home Decor &amp; Heritage
                      </span>
                      <button 
                        onClick={() => {
                          setSelectedDivision('heritage');
                          handleNavClick('categories', { categoryFilter: 'heritage' });
                        }}
                        className="text-[10px] text-[#B89550] hover:underline cursor-pointer"
                      >
                        View All
                      </button>
                    </div>
                    <ul className="space-y-1 text-xs text-[#252822]/80">
                      <li>
                        <button
                          onClick={() => {
                            setSelectedDivision('heritage');
                            handleNavClick('categories', { categoryFilter: 'heritage' });
                          }}
                          className="w-full text-left py-1 px-2 rounded-lg hover:bg-[#F7F4ED] hover:text-[#252822] transition-colors flex items-center justify-between group cursor-pointer"
                        >
                          <span>Hand-Knotted Carpets (240+ KPSI)</span>
                          <span className="text-[10px] text-[#B89550] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setSelectedDivision('heritage');
                            handleNavClick('categories', { categoryFilter: 'heritage' });
                          }}
                          className="w-full text-left py-1 px-2 rounded-lg hover:bg-[#F7F4ED] hover:text-[#252822] transition-colors flex items-center justify-between group cursor-pointer"
                        >
                          <span>Thar Reversible Flat-Weave Dhurries</span>
                          <span className="text-[10px] text-[#B89550] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setSelectedDivision('heritage');
                            handleNavClick('categories', { categoryFilter: 'heritage' });
                          }}
                          className="w-full text-left py-1 px-2 rounded-lg hover:bg-[#F7F4ED] hover:text-[#252822] transition-colors flex items-center justify-between group cursor-pointer"
                        >
                          <span>Carved Sheesham Woodcraft &amp; Furniture</span>
                          <span className="text-[10px] text-[#B89550] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-[#252822]/10">
                    <button
                      onClick={() => handleNavClick('categories')}
                      className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#1B2A4A] hover:bg-[#B75E43] transition-colors rounded-xl shadow-xs cursor-pointer"
                    >
                      Open Full Catalog
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Certifications */}
            <button
              onClick={() => handleNavClick('certifications')}
              className={`py-1.5 transition-colors cursor-pointer relative ${
                currentPage === 'certifications'
                  ? isDark ? 'text-white font-semibold' : 'text-[#121316] font-semibold'
                  : isDark ? 'text-white/70 hover:text-white' : 'text-[#141517]/70 hover:text-[#B75E43]'
              }`}
            >
              <span>Certifications</span>
              {currentPage === 'certifications' && (
                <span className={`absolute -bottom-1 left-2 right-2 h-0.5 rounded-full ${isDark ? 'bg-[#B89550]' : 'bg-[#B75E43]'}`} />
              )}
            </button>

            {/* Gallery */}
            <button
              onClick={() => handleNavClick('gallery')}
              className={`py-1.5 transition-colors cursor-pointer relative ${
                currentPage === 'gallery'
                  ? isDark ? 'text-white font-semibold' : 'text-[#121316] font-semibold'
                  : isDark ? 'text-white/70 hover:text-white' : 'text-[#141517]/70 hover:text-[#B75E43]'
              }`}
            >
              <span>Gallery</span>
              {currentPage === 'gallery' && (
                <span className={`absolute -bottom-1 left-2 right-2 h-0.5 rounded-full ${isDark ? 'bg-[#B89550]' : 'bg-[#B75E43]'}`} />
              )}
            </button>

            {/* About */}
            <button
              onClick={() => handleNavClick('about')}
              className={`py-1.5 transition-colors cursor-pointer relative ${
                currentPage === 'about'
                  ? isDark ? 'text-white font-semibold' : 'text-[#121316] font-semibold'
                  : isDark ? 'text-white/70 hover:text-white' : 'text-[#141517]/70 hover:text-[#B75E43]'
              }`}
            >
              <span>About</span>
              {currentPage === 'about' && (
                <span className={`absolute -bottom-1 left-2 right-2 h-0.5 rounded-full ${isDark ? 'bg-[#B89550]' : 'bg-[#B75E43]'}`} />
              )}
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`py-1.5 transition-colors cursor-pointer relative ${
                currentPage === 'contact'
                  ? isDark ? 'text-[#B89550] font-semibold' : 'text-[#B75E43] font-semibold'
                  : isDark ? 'text-white/70 hover:text-white' : 'text-[#141517]/70 hover:text-[#B75E43]'
              }`}
            >
              <span>Contact</span>
              {currentPage === 'contact' && (
                <span className={`absolute -bottom-1 left-2 right-2 h-0.5 rounded-full ${isDark ? 'bg-[#B89550]' : 'bg-[#B75E43]'}`} />
              )}
            </button>

            {/* Dedicated Enquiry Tab */}
            <button
              onClick={() => handleNavClick('enquiry')}
              className={`py-1.5 transition-colors cursor-pointer relative ${
                currentPage === 'enquiry'
                  ? isDark ? 'text-[#B89550] font-semibold' : 'text-[#B75E43] font-semibold'
                  : isDark ? 'text-white/70 hover:text-white' : 'text-[#141517]/70 hover:text-[#B75E43]'
              }`}
            >
              <span>Enquiry</span>
              {currentPage === 'enquiry' && (
                <span className={`absolute -bottom-1 left-2 right-2 h-0.5 rounded-full ${isDark ? 'bg-[#B89550]' : 'bg-[#B75E43]'}`} />
              )}
            </button>
          </nav>

          {/* Right Zone: Premium "My Cart" Quote Cart Control */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setIsEnquiryDrawerOpen(true)}
              title="Open My Cart / Wholesale Quote Basket"
              aria-label={`Open My Cart with ${totalItemsCount} items`}
              className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#202227] to-[#16181C] text-white hover:text-white border border-white/20 hover:border-[#B89550]/60 hover:from-[#252830] hover:to-[#1B1D22] font-sans font-medium text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <div className="relative flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-[#F7F4ED] group-hover:text-[#B89550] transition-colors" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 px-1.5 py-0.2 min-w-4.5 h-4.5 flex items-center justify-center rounded-full text-[10px] font-bold font-mono bg-gradient-to-r from-[#B75E43] to-[#B89550] text-white shadow-sm ring-1 ring-[#121316]">
                    {totalItemsCount}
                  </span>
                )}
              </div>

              <span className="font-medium tracking-tight text-[#F7F4ED] group-hover:text-white transition-colors">
                My Cart
              </span>
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#121316]/70 backdrop-blur-sm flex justify-end animate-fade-in">
          <div className="w-4/5 max-w-sm bg-[#18191D] text-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-white/10">
            <div>
              {/* Drawer Top Header with Official Logo */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2.5">
                  <img 
                    src="/assets/aistudio/image_2a6d18b6.png" 
                    alt="Abhyashish Traders Logo" 
                    className="h-8 w-auto bg-white rounded px-1.5 py-0.5 object-contain"
                  />
                  <div>
                    <span className="font-serif text-sm font-bold tracking-tight block">
                      ABHYASHISH TRADERS
                    </span>
                    <span className="text-[10px] text-[#B89550] font-mono block">
                      AYATRADER GLOBAL
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-3 font-sans">
                <button 
                  onClick={() => handleNavClick('home')}
                  className={`w-full text-left text-sm py-2 font-medium flex items-center justify-between cursor-pointer ${
                    currentPage === 'home' ? 'text-[#B89550] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>Home</span>
                  <span>→</span>
                </button>

                {/* Categories Accordion */}
                <div className="py-2.5 border-y border-white/10">
                  <span className="text-xs uppercase tracking-wider text-[#B89550] font-semibold block mb-2">
                    Product Categories
                  </span>
                  <div className="space-y-2 pl-3 border-l border-[#B89550]/40">
                    <button 
                      onClick={() => {
                        setSelectedDivision('pantry');
                        handleNavClick('categories', { categoryFilter: 'pantry' });
                      }}
                      className="w-full text-left text-xs text-[#8BA478] py-1 font-medium hover:text-white cursor-pointer"
                    >
                      Food &amp; Agricultural Commodities
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedDivision('heritage');
                        handleNavClick('categories', { categoryFilter: 'heritage' });
                      }}
                      className="w-full text-left text-xs text-[#E08A72] py-1 font-medium hover:text-white cursor-pointer"
                    >
                      Home Decor &amp; Heritage Textiles
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => handleNavClick('certifications')}
                  className={`w-full text-left text-sm py-2 font-medium flex items-center justify-between cursor-pointer ${
                    currentPage === 'certifications' ? 'text-[#B89550] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>Certifications &amp; Gov Approvals</span>
                  <span>→</span>
                </button>

                <button 
                  onClick={() => handleNavClick('gallery')}
                  className={`w-full text-left text-sm py-2 font-medium flex items-center justify-between cursor-pointer ${
                    currentPage === 'gallery' ? 'text-[#B89550] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>Gallery</span>
                  <span>→</span>
                </button>

                <button 
                  onClick={() => handleNavClick('about')}
                  className={`w-full text-left text-sm py-2 font-medium flex items-center justify-between cursor-pointer ${
                    currentPage === 'about' ? 'text-[#B89550] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>About Us</span>
                  <span>→</span>
                </button>

                <button 
                  onClick={() => handleNavClick('contact')}
                  className={`w-full text-left text-sm py-2 font-medium flex items-center justify-between cursor-pointer ${
                    currentPage === 'contact' ? 'text-[#B89550] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>Contact</span>
                  <span>→</span>
                </button>

                <button 
                  onClick={() => handleNavClick('enquiry')}
                  className={`w-full text-left text-sm py-2 font-medium flex items-center justify-between cursor-pointer ${
                    currentPage === 'enquiry' ? 'text-[#B89550] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>Enquiry Dossier</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsEnquiryDrawerOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#B75E43] to-[#B89550] hover:brightness-110 transition-all rounded-full shadow-md cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4 text-white" />
                <span>My Cart (Quote Basket) {totalItemsCount > 0 ? `· ${totalItemsCount} items` : ''}</span>
              </button>

              <a
                href="https://wa.me/919799706428"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors rounded-full"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Trade Desk</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
