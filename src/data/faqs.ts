export interface FAQItem {
  id: string;
  category: 'ordering' | 'shipping' | 'quality' | 'payment';
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-moq',
    category: 'ordering',
    question: 'What are the Minimum Order Quantities (MOQ) across your two divisions?',
    answer: 'For Heritage & Home (Hand-knotted and flat-weave carpets), our MOQ is 100 sq. ft, though single sample pieces and custom strike-offs (approx. 2x3 ft or 30x30 cm swatch) are supported for boutique retailers and interior designers. For Furniture, MOQ is 5 units with mixed container stuffing permitted. For Pantry (Agri-Food), Makhana MOQ is 500 kg, Onion Powder is 1 Metric Ton (1,000 kg), and Fresh Onions are shipped in full 40ft refrigerated containers (approx. 28–29 MT).'
  },
  {
    id: 'faq-samples',
    category: 'ordering',
    question: 'How do you handle sample requests and strike-offs before bulk production?',
    answer: 'We provide expedited courier sampling worldwide via DHL/FedEx. For carpets, we dispatch yarn pom-poms (showing exact dyed wool/silk hues) and 30x30 cm woven strike-offs within 10–14 days. For Pantry commodities, 500g to 1 kg vacuum-sealed sample kits with recent batch Certificate of Analysis (COA) are dispatched within 48 hours. Sample costs are creditable against your first commercial container purchase.'
  },
  {
    id: 'faq-ports',
    category: 'shipping',
    question: 'Which Indian export ports do you dispatch from, and what are typical ocean transit times?',
    answer: 'Our ocean freight departs primarily through Mundra Port (Gujarat) and Jawaharlal Nehru Port Trust (JNPT / Nhava Sheva, Mumbai) — the two most efficient deep-water container ports in western India with direct sailings. Typical ocean transit times: Arabian Gulf (Jebel Ali, Dubai): 4–6 days; Western Europe (Rotterdam, Hamburg, Felixstowe): 18–24 days; US East Coast (New York, Savannah): 24–28 days; US West Coast (Long Beach, Oakland): 28–34 days. Air shipments route via Delhi IGI (DEL) or Mumbai (BOM) with 3–5 day airport-to-airport transit.'
  },
  {
    id: 'faq-incoterms',
    category: 'shipping',
    question: 'Which Incoterms 2020 do you quote, and what export documentation is provided?',
    answer: 'We routinely execute contracts under FOB (Free On Board Mundra/Nhava Sheva), CIF (Cost, Insurance & Freight to your destination port), CFR, and EXW (Ex-Works Jodhpur factory). Every commercial shipment is accompanied by a full export documentation pack: Commercial Invoice, Packing List, Bill of Lading / Airway Bill, Certificate of Origin (Form A / COO), Phytosanitary Certificate, ISPM-15 Fumigation Certificate, and NABL/Eurofins Lab COAs.'
  },
  {
    id: 'faq-payment',
    category: 'payment',
    question: 'What are your standard wholesale payment terms?',
    answer: 'For initial orders, we work with Irrevocable Letter of Credit at Sight (L/C at Sight) issued by a prime international bank, or Telegraphic Transfer (T/T: 30% advance deposit upon order confirmation and 70% balance against copy of shipping documents and Bill of Lading). For verified long-term corporate buyers and department store retailers, credit terms (CAD / Net 30-60 against trade credit insurance) can be arranged.'
  },
  {
    id: 'faq-private-label',
    category: 'quality',
    question: 'Do you support custom private-label packaging and bespoke carpet designs?',
    answer: 'Yes. In the Heritage division, we translate CAD interior elevations, Pantone TCX color palettes, and custom room shapes into hand-knotted reality. For Pantry, we offer complete OEM / private label packaging for supermarkets, including printed stand-up zipper pouches (100g, 250g, 500g) with customized barcode, nutrition facts compliant with US FDA / EU labeling regulations, and master shipping cartons.'
  },
  {
    id: 'faq-antiques',
    category: 'quality',
    question: 'What is the regulatory and legal process for exporting antique manuscripts, maps, and coins?',
    answer: 'In India, cultural property and items over 100 years old fall under the Antiquities and Art Treasures Act, 1972 administered by the Archaeological Survey of India (ASI). We adhere strictly to statutory compliance: our curatorial pieces are evaluated by licensed appraisers to determine non-antiquity classification or obtain formal ASI export clearance licenses [CONFIRM legal scope and statutory documentation for all antique lots]. Tamper-evident transit insurance and archival conservation packaging are mandatory for all historical consignments.'
  }
];
