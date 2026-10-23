import React from 'react';
import { ContactSection } from '../ContactSection';
import { FAQSection } from '../FAQSection';
import { ChevronRight, PhoneCall, Mail, MessageCircle, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#F7F4ED] min-h-screen py-10 lg:py-14 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#252822]/60 font-sans mb-4">
          <span className="hover:text-[#B75E43] cursor-pointer" onClick={() => window.location.hash = '#/home'}>
            Home
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#252822]/40" />
          <span className="text-[#252822] font-semibold">
            Contact Us &amp; Factory Trade Desk
          </span>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#B89550]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
              Direct Factory Access · Jodhpur Headquarters
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#252822] tracking-tight">
            Connect with Our Export Officers
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#252822]/75 font-sans leading-relaxed">
            Reach out directly for wholesale container pricing, custom carpet strike-offs, on-site loom visits, or sample dispatches. We respond to verified commercial inquiries within 2 to 4 business hours.
          </p>
        </div>
      </div>

      {/* 1. Factory & Export Desk Contact Section */}
      <ContactSection />

      {/* 2. Sourcing FAQs */}
      <FAQSection />
    </div>
  );
};
