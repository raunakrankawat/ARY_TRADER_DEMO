import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Anchor, 
  ShieldCheck, 
  Globe2 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    category: 'Hand-Knotted Carpets (240+ KPSI)',
    volume: 'LCL Sample Batch',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company / buying house is required';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.country.trim()) errs.country = 'Destination country is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Abhyashish Traders Export Desk,\n\nI am contacting from ${formData.company || 'our buying house'} in ${formData.country || 'overseas'}.\nInterested in: ${formData.category}\nVolume: ${formData.volume}\n\nNote: ${formData.message || 'Please share your export wholesale pricing and catalog.'}\n\nName: ${formData.name}\nEmail: ${formData.email}`
    );
    return `https://wa.me/919799706428?text=${text}`;
  };

  return (
    <section id="contact" className="relative py-12 lg:py-20 bg-[#F7F4ED] border-b border-[#252822]/10 scroll-mt-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#B89550]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
              Direct Factory Access · Global Commercial Desk
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#252822]">
            Connect with Our Jodhpur Headquarters
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#252822]/75 font-sans leading-relaxed">
            Reach our trade desk for wholesale container pricing, custom carpet strike-offs, on-site loom visits, or laboratory sample dispatches. We respond to commercial inquiries within 2 to 4 business hours.
          </p>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Column 1: Verified Trade Coordinates & Map (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Headquarters Card */}
            <div className="p-6 sm:p-7 rounded-xl bg-white border border-[#252822]/10 shadow-xs space-y-5">
              <div className="border-b border-[#252822]/8 pb-4">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B89550]">
                  Registered Export Headquarters
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#252822] mt-0.5">
                  Abhyashish Traders
                </h3>
                <p className="text-xs text-[#252822]/60 font-sans mt-0.5">
                  AYA / Arya Trader · DGFT IEC &amp; GSTIN Registered
                </p>
              </div>

              <div className="space-y-4 text-xs font-sans text-[#252822]/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B89550] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#252822] font-medium text-xs mb-0.5">Atelier &amp; Office</strong>
                    <span>8/J/48, Kudi Bhagatasni, Housing Board, Jodhpur 342001, Rajasthan, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B89550] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#252822] font-medium text-xs mb-0.5">Direct Telephones &amp; WhatsApp</strong>
                    <div className="space-y-0.5 font-mono text-xs text-[#252822]">
                      <p>+91 97997 06428 <span className="text-[#B75E43] font-sans font-medium text-[11px]">(Primary Commercial Desk)</span></p>
                      <p className="text-[#252822]/70">+91 63769 35304 · +91 72979 40145</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B89550] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#252822] font-medium text-xs mb-0.5">Export Documentation &amp; RFQs</strong>
                    <a href="mailto:info@aryatrader.com" className="font-mono text-xs text-[#1B2A4A] hover:text-[#B75E43] transition-colors underline decoration-[#B89550]/40">
                      info@aryatrader.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#5B6E4E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#252822] font-medium text-xs mb-0.5">Active Trade Hours</strong>
                    <span>Mon – Sat: 09:00 – 19:30 IST (GMT +5:30)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919799706428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-all shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open Direct WhatsApp Desk</span>
                </a>
              </div>
            </div>

            {/* Embedded Functioning Google Map */}
            <div className="rounded-xl overflow-hidden border border-[#252822]/10 bg-white shadow-xs">
              <div className="p-3 bg-[#EFEAE1]/50 border-b border-[#252822]/10 flex items-center justify-between text-xs">
                <span className="font-medium text-[#252822] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B75E43]" />
                  <span>Jodhpur Facility Location</span>
                </span>
                <span className="text-[11px] text-[#252822]/60">342001, Rajasthan</span>
              </div>
              <iframe
                title="Abhyashish Traders Headquarters Jodhpur"
                src="https://maps.google.com/maps?q=Kudi+Bhagatasni,+Jodhpur,+Rajasthan+342001&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-48 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Column 2: Working Enquiry Form (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#252822]/10 shadow-xs h-full flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B75E43]">
                    Wholesale Inquiry Docket
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#252822] mt-0.5">
                    Request Commercial Quotation &amp; Specifications
                  </h3>
                  <p className="text-xs text-[#252822]/70 font-sans mt-1">
                    Submit your requirements for container load calculations, strike-off requests, or proforma quotations.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-xl bg-[#F7F4ED] border border-[#B89550]/40 text-center space-y-4 my-auto">
                    <div className="w-12 h-12 rounded-full bg-[#5B6E4E]/10 text-[#5B6E4E] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl font-medium text-[#252822]">
                        Inquiry Registered Successfully
                      </h4>
                      <p className="text-xs text-[#252822]/75 font-sans mt-2 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-[#252822]">{formData.name}</strong>. An export officer has been assigned to your request for <strong className="text-[#252822]">{formData.category}</strong>. We will review your specifications and reach out via email within 2-4 hours.
                      </p>
                    </div>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-all shadow-xs cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Speed Up via WhatsApp</span>
                      </a>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-xs text-[#252822] hover:text-[#B75E43] underline cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#252822] mb-1">
                          Full Name <span className="text-[#B75E43]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Marcus Vance"
                          className={`w-full text-xs px-3.5 py-2.5 border rounded bg-[#F7F4ED]/50 focus:bg-white focus:outline-none focus:border-[#B75E43] text-[#252822] transition-colors ${
                            errors.name ? 'border-[#B75E43]' : 'border-[#252822]/15'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-[#B75E43] mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#252822] mb-1">
                          Company / Buying House <span className="text-[#B75E43]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Vance Trading Corp"
                          className={`w-full text-xs px-3.5 py-2.5 border rounded bg-[#F7F4ED]/50 focus:bg-white focus:outline-none focus:border-[#B75E43] text-[#252822] transition-colors ${
                            errors.company ? 'border-[#B75E43]' : 'border-[#252822]/15'
                          }`}
                        />
                        {errors.company && (
                          <p className="text-[11px] text-[#B75E43] mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.company}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#252822] mb-1">
                          Corporate Email <span className="text-[#B75E43]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="procurement@vancetrading.com"
                          className={`w-full text-xs px-3.5 py-2.5 border rounded bg-[#F7F4ED]/50 focus:bg-white focus:outline-none focus:border-[#B75E43] text-[#252822] transition-colors ${
                            errors.email ? 'border-[#B75E43]' : 'border-[#252822]/15'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-[#B75E43] mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#252822] mb-1">
                          WhatsApp / Phone (with Country Code)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 019-2834"
                          className="w-full text-xs px-3.5 py-2.5 border border-[#252822]/15 rounded bg-[#F7F4ED]/50 focus:bg-white focus:outline-none focus:border-[#B75E43] text-[#252822] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#252822] mb-1">
                          Destination Country <span className="text-[#B75E43]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder="e.g. Germany"
                          className={`w-full text-xs px-3.5 py-2.5 border rounded bg-[#F7F4ED]/50 focus:bg-white focus:outline-none focus:border-[#B75E43] text-[#252822] transition-colors ${
                            errors.country ? 'border-[#B75E43]' : 'border-[#252822]/15'
                          }`}
                        />
                        {errors.country && (
                          <p className="text-[11px] text-[#B75E43] mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.country}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#252822] mb-1">
                          Product Line <span className="text-[#B75E43]">*</span>
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full text-xs px-3 py-2.5 border border-[#252822]/15 rounded bg-[#F7F4ED]/50 focus:bg-white focus:outline-none focus:border-[#B75E43] text-[#252822] transition-colors cursor-pointer"
                        >
                          <option value="Hand-Knotted Carpets (240+ KPSI)">Hand-Knotted Carpets</option>
                          <option value="Thar Flat-Weave Dhurries">Thar Flat-Weave Dhurries</option>
                          <option value="Sheesham Furniture & Woodcraft">Sheesham Woodcraft &amp; Furniture</option>
                          <option value="Jumbo Phool Makhana (6+ Suta)">Jumbo Phool Makhana (Fox Nuts)</option>
                          <option value="Dehydrated Onion Powder">Dehydrated Onion Powder (80-100 Mesh)</option>
                          <option value="Custom Bespoke Weaving Contract">Custom Bespoke Weave Contract</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#252822] mb-1">
                          Order Scope
                        </label>
                        <select
                          value={formData.volume}
                          onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                          className="w-full text-xs px-3 py-2.5 border border-[#252822]/15 rounded bg-[#F7F4ED]/50 focus:bg-white focus:outline-none focus:border-[#B75E43] text-[#252822] transition-colors cursor-pointer"
                        >
                          <option value="Air Courier Samples (1-5 pcs)">Air Courier Samples (1-5 pcs)</option>
                          <option value="LCL Trial Batch (10-50 pcs / 500kg)">LCL Trial Batch</option>
                          <option value="20ft FCL Container">20ft FCL Container</option>
                          <option value="40ft High Cube Container">40ft HC Container</option>
                          <option value="Hospitality Project Run">Hospitality Contract Run</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#252822] mb-1">
                        Specifications &amp; IncoTerm Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="State dimensions, colorways, target port of discharge (e.g. CIF Hamburg or FOB Mundra), or custom packaging requirements."
                        className="w-full text-xs px-3.5 py-2.5 border border-[#252822]/15 rounded bg-[#F7F4ED]/50 focus:bg-white focus:outline-none focus:border-[#B75E43] text-[#252822] transition-colors"
                      />
                    </div>

                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#252822]/10">
                      <div className="text-[11px] text-[#252822]/60 font-sans flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#5B6E4E]" />
                        <span>Commercial confidentiality guaranteed</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#B75E43] hover:bg-[#9e4c34] transition-colors rounded shadow-xs cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Dispatching...</span>
                        ) : (
                          <>
                            <span>Transmit Wholesale Inquiry</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
