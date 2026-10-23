import React from 'react';
import { useRFQ } from '../context/RFQContext';
import { useNavigation, PageId } from '../context/NavigationContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  MessageCircle, 
  AlertCircle,
  Image as ImageIcon
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { openEnquiryModal, setSelectedDivision } = useRFQ();
  const { navigateTo } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageNav = (page: PageId, options?: { categoryFilter?: string; scrollToId?: string }) => {
    navigateTo(page, options);
  };

  return (
    <footer className="bg-[#1E211B] text-[#F7F4ED] pt-16 pb-12 border-t border-[#B89550]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Purpose Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Official Brand Logo */}
            <div className="inline-block p-2 rounded bg-white shadow-xs">
              <img
                src="/assets/aistudio/image_2a6d18b6.png"
                alt="Abhyashish Traders AYA - Connecting Cultures, Building Prosperity"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs text-[#F7F4ED]/80 leading-relaxed font-sans max-w-sm font-light">
              "Connecting Cultures, Building Prosperity." Abhyashish Traders (Arya Trader) is an established export house operating directly from the historic craft and spice corridors of Jodhpur, Rajasthan, India.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#F7F4ED]/75 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89550] shrink-0 mt-0.5" />
                <span>8/J/48, Kudi Bhagatasni, Housing Board, Jodhpur 342001, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B89550] shrink-0" />
                <a href="mailto:info@aryatrader.com" className="hover:text-white transition-colors">
                  info@aryatrader.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B89550] shrink-0 mt-0.5" />
                <div className="space-y-0.5 font-mono">
                  <a href="tel:+919799706428" className="hover:text-white block">
                    +91 97997 06428 <span className="text-[#B89550] font-sans text-[11px]">(Commercial Desk)</span>
                  </a>
                  <p className="text-[#F7F4ED]/60">+91 63769 35304 · +91 72979 40145</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919799706428"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Commercial Desk</span>
              </a>
            </div>
          </div>

          {/* Division 1: Food & Agri Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A7D18C]">
              Food &amp; Agri Commodities
            </h4>
            <ul className="space-y-2 text-xs text-[#F7F4ED]/80 font-sans font-light">
              <li>
                <button 
                  onClick={() => {
                    setSelectedDivision('pantry');
                    handlePageNav('categories', { categoryFilter: 'pantry' });
                  }} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Phool Makhana (Jumbo 6+ Suta)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setSelectedDivision('pantry');
                    handlePageNav('categories', { categoryFilter: 'pantry' });
                  }} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Dehydrated Organic Onion Powder
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setSelectedDivision('pantry');
                    handlePageNav('categories', { categoryFilter: 'pantry' });
                  }} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Fresh Export Red Onions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageNav('certifications')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Eurofins COA &amp; Moisture Specs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageNav('export')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  20ft / 40ft Container Transit
                </button>
              </li>
            </ul>
          </div>

          {/* Division 2: Home Decor & Heritage */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B89550]">
              Home Decor &amp; Heritage
            </h4>
            <ul className="space-y-2 text-xs text-[#F7F4ED]/80 font-sans font-light">
              <li>
                <button 
                  onClick={() => {
                    setSelectedDivision('heritage');
                    handlePageNav('categories', { categoryFilter: 'heritage' });
                  }} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Hand-Knotted Carpets (240+ KPSI)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setSelectedDivision('heritage');
                    handlePageNav('categories', { categoryFilter: 'heritage' });
                  }} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Thar Flat-Weave Dhurries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setSelectedDivision('heritage');
                    handlePageNav('categories', { categoryFilter: 'heritage' });
                  }} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Hand-Carved Sheesham Woodcraft
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageNav('craft')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  240+ KPSI Knot Anatomy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageNav('gallery')} 
                  className="hover:text-[#B89550] transition-colors text-left flex items-center gap-1 cursor-pointer"
                >
                  <ImageIcon className="w-3 h-3" />
                  <span>Visual Dossier Gallery</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation & Sourcing Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation &amp; Sourcing
            </h4>
            <ul className="space-y-2 text-xs text-[#F7F4ED]/80 font-sans font-light">
              <li>
                <button onClick={() => handlePageNav('home')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handlePageNav('categories')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Product Categories
                </button>
              </li>
              <li>
                <button onClick={() => handlePageNav('gallery')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handlePageNav('about')} className="hover:text-white transition-colors text-left cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handlePageNav('certifications')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Government Certifications
                </button>
              </li>
              <li>
                <button onClick={() => handlePageNav('contact')} className="hover:text-white transition-colors text-left text-[#B89550] font-medium cursor-pointer">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => openEnquiryModal()} className="hover:text-white transition-colors text-left text-[#B75E43] font-medium cursor-pointer">
                  Enquire Now
                </button>
              </li>
              <li>
                <button onClick={() => handlePageNav('admin')} className="hover:text-white transition-colors text-left text-white/40 hover:text-white text-[11px] cursor-pointer">
                  Officer Admin Desk
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory & Notice Disclaimer Strip */}
        <div className="py-6 border-b border-white/10 text-xs text-[#F7F4ED]/60 font-sans space-y-2">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-[#B89550] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Statutory Compliance &amp; Verification Note:</strong> Abhyashish Traders (Arya Trader) operates under statutory registration by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce &amp; Industry, Goods and Services Tax (GSTIN), and APEDA / Spices Board of India. Formal laboratory analysis certificates (COA) and phytosanitary dockets are furnished with all commercial proforma invoices.
            </p>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F4ED]/60 font-sans">
          <p>
            © {new Date().getFullYear()} Abhyashish Traders (AYA / Arya Trader), Jodhpur, Rajasthan, India. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>Connecting Cultures, Building Prosperity</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
