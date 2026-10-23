import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'heritage-rug-01',
    name: 'Marwar Heritage Hand-Knotted Wool & Silk Carpet',
    sku: 'ARYA-RUG-HK01',
    division: 'heritage',
    category: 'Carpets & Rugs',
    tagline: 'Traditional Jodhpur jaali medallion with high knot density underside',
    description: 'Masterfully knotted by generational artisan weavers in western Rajasthan. Hand-spun New Zealand semi-worsted wool blended with 30% mulberry silk accents, botanical vegetable dyes, and double-sheared plush finish.',
    image: '/assets/images/product_jodhpur_handknotted_rug_1792504552668.jpg',
    detailImage: '/assets/images/craft_artisan_weaving_loom_1792504552453.jpg',
    moq: '100 sq. ft (Single sample piece available)',
    leadTime: '4–8 weeks depending on loom dimension',
    estimatedPriceRangeUSD: '$24 – $42 / sq.ft',
    origin: 'Jodhpur & Salawas Weaving Belt, Rajasthan',
    customizationAvailable: true,
    hsCode: '5701.10.00',
    packaging: 'Waterproof polythene sleeve + heavy-duty jute canvas roll wrapping with reinforced corner protectors',
    certifications: ['RugMark / Care & Fair Certified', 'Certificate of Origin (Form A)', 'Fumigation Certificate'],
    highlights: [
      '220–280 Knots Per Square Inch (KPSI) Tibetan/Persian cross-knotting',
      'Naturally dyed with madder root, indigo, and pomegranate peel',
      'Custom sizing from runner (2.5x8 ft) up to oversized banquet (14x20 ft)',
      'High traffic resistance with zero chemical synthetic washes'
    ],
    specs: [
      { label: 'Weave Technique', value: 'Traditional Upright Loom Hand-Knotted' },
      { label: 'Pile Composition', value: '70% Blended New Zealand & Bikaneri Wool, 30% Mulberry Silk' },
      { label: 'Knot Density', value: '240 KPSI (approx. 372,000 knots/sq.m)' },
      { label: 'Pile Height', value: '10 mm ± 1 mm' },
      { label: 'Standard Dimensions', value: '5x8 ft, 6x9 ft, 8x10 ft, 9x12 ft, 10x14 ft' },
      { label: 'Color Fastness to Light', value: 'Grade 5 (ISO 105-B02 compliant)' },
      { label: 'Fringes', value: 'Natural bleached cotton warp fringe (overlocked edge optional)' }
    ],
    colorways: [
      { name: 'Indigo & Terracotta', hex: '#1B2A4A', previewImage: '/assets/images/product_jodhpur_handknotted_rug_1792504552668.jpg' },
      { name: 'Sandstone Gold & Ivory', hex: '#C8963E' },
      { name: 'Imperial Madder Crimson', hex: '#B5472F' },
      { name: 'Desert Oasis Sage', hex: '#6B7F5E' }
    ]
  },
  {
    id: 'heritage-flatweave-02',
    name: 'Thar Geometric Dhurrie & Flat-Weave Kelim',
    sku: 'ARYA-RUG-FW02',
    division: 'heritage',
    category: 'Carpets & Rugs',
    tagline: 'Reversible, tightly woven organic cotton & hand-carded desert wool',
    description: 'A contemporary favorite for Scandinavian and modern rustic interiors. Handcrafted by weavers of Thar on horizontal pit looms with geometric Rajasthani tribal motifs, reversible dual-side durability, and zero synthetic backing.',
    image: '/assets/images/hero_heritage_rug_craft_1792504550869.jpg',
    detailImage: '/assets/images/craft_artisan_weaving_loom_1792504552453.jpg',
    moq: '250 sq. ft (Custom strike-off sample in 10 days)',
    leadTime: '3–6 weeks',
    estimatedPriceRangeUSD: '$12 – $22 / sq.ft',
    origin: 'Salawas Artisan Cluster, Jodhpur',
    customizationAvailable: true,
    hsCode: '5702.10.00',
    packaging: 'Bale-packed in poly-lined corrugated cartons or weather-resistant woven sacks',
    certifications: ['Handloom Mark India', 'Certificate of Origin'],
    highlights: [
      '100% Reversible wear for high longevity',
      'Azo-free eco-reactive dyes with zero skin allergens',
      'Ultra-flat profile ideal under furniture and high-traffic boutique entries',
      'Washable and easy to maintain'
    ],
    specs: [
      { label: 'Weave Technique', value: 'Interlocking Flat-Weave (Panja Dhurrie)' },
      { label: 'Yarn Material', value: '60% Unbleached Cotton Warp, 40% Carded Desert Wool Weft' },
      { label: 'Thickness', value: '5 mm flat profile' },
      { label: 'Weight', value: '1.8 kg / sq.m' },
      { label: 'Edge Finish', value: 'Hemmed ends with hand-braided tassels' }
    ],
    colorways: [
      { name: 'Raw Sand & Terracotta', hex: '#B5472F' },
      { name: 'Oatmeal & Deep Indigo', hex: '#1B2A4A' },
      { name: 'Natural Olive Sage', hex: '#6B7F5E' }
    ]
  },
  {
    id: 'heritage-furniture-03',
    name: 'Jodhpur Sheesham & Bone Inlay Console / Credenza',
    sku: 'ARYA-FURN-BI03',
    division: 'heritage',
    category: 'Art & Handicrafts',
    tagline: 'Sustainably sourced Indian Rosewood with artisan hand-carved floral inlays',
    description: 'Handcrafted in Jodhpur’s famed woodworking quarter. Seasoned Sheesham wood with brass joinery, hand-poured resin or camel-bone inlay detailing [CONFIRM ethical bone sourcing certifications], and moisture-sealed wax finish.',
    image: '/assets/aistudio/image_8d0ceab4.png',
    detailImage: '/assets/images/hero_heritage_rug_craft_1792504550869.jpg',
    moq: '5 units (Mix & Match container stuffing permitted)',
    leadTime: '6–8 weeks for 20ft container load',
    estimatedPriceRangeUSD: '$280 – $640 / unit',
    origin: 'Jodhpur Wooden Handicraft Hub, Rajasthan',
    customizationAvailable: true,
    hsCode: '9403.60.00',
    packaging: '7-ply ISTA 3A drop-tested export cartons with EPS corner blocks and moisture desiccants',
    certifications: ['VRIKSH Timber Legality Certificate', 'ISPM 15 Heat Treatment & Fumigation'],
    highlights: [
      'Kiln-dried timber at 8–10% moisture content to prevent warpage in dry/humid climates',
      'Artisanal floral vine arabesque patterns inspired by Mehrangarh Palace architecture',
      'Heavy-duty mortise and tenon structural joinery',
      'Fumigated and certified for US, EU & Australian biosecurity standards'
    ],
    specs: [
      { label: 'Timber Species', value: 'Dalbergia Sissoo (Indian Rosewood / Sheesham)' },
      { label: 'Dimensions (LxWxH)', value: '140 cm x 45 cm x 82 cm (custom specs on order)' },
      { label: 'Inlay Material', value: 'Sustainable camel bone & resin inlay' },
      { label: 'Hardware', value: 'Hand-cast antiqued brass pulls and magnetic latches' }
    ]
  },
  {
    id: 'heritage-antiques-04',
    name: 'Historical Cartography & Curated Manuscript Folios',
    sku: 'ARYA-ANTQ-DOC04',
    division: 'heritage',
    category: 'Antiques & Collectibles',
    tagline: 'Curated 19th-century colonial maps, hand-painted court folios & trade coins',
    description: 'Archival collector pieces including lithographic maps of British India, hand-illuminated Rajput miniature leaves, and historic princely state coinage. Curated with notarized provenance records and non-antiquity clearance.',
    image: '/assets/aistudio/image_920fd976.png',
    detailImage: '/assets/images/craft_artisan_weaving_loom_1792504552453.jpg',
    moq: '1 curated collector lot (Consignment clearance on file)',
    leadTime: '2–4 weeks (including ASI statutory documentation)',
    estimatedPriceRangeUSD: '$120 – $1,800 / piece',
    origin: 'Curated archives, Jodhpur & Jaipur, Rajasthan',
    customizationAvailable: false,
    hsCode: '9706.00.00',
    packaging: 'Acid-free archival mylar sleeves, shock-absorbing wooden display casing with silica packs',
    certifications: ['ASI (Archaeological Survey of India) Export Clearance [CONFIRM]', 'Certificate of Authenticity'],
    highlights: [
      'Detailed condition report and provenance documentation included with every piece',
      'Museum-grade conservation mounted on acid-free rag matting',
      'Pre-cleared through licensed cultural export clearance channels [CONFIRM]',
      'Secure tamper-evident shipping with full declared-value transit insurance'
    ],
    specs: [
      { label: 'Era & Provenance', value: 'Late 19th to early 20th Century (Non-protected cultural artifacts [CONFIRM])' },
      { label: 'Medium', value: 'Handmade rag paper, natural gouache pigment, gold leaf highlights' },
      { label: 'Documentation', value: 'Arya Trader Curatorial Register & Notarized Provenance Sheet' },
      { label: 'Transit Method', value: 'Expedited Air Courier (DHL/FedEx International Priority with customs broker)' }
    ]
  },
  {
    id: 'pantry-makhana-01',
    name: 'Artisanal Phool Makhana (Jumbo 6+ Suta Fox Nuts)',
    sku: 'ARYA-AGRI-MK01',
    division: 'pantry',
    category: 'Makhana (Fox Nuts)',
    tagline: 'Export-grade giant popped lotus seeds (Euryale Ferox) — 6+ and 6.5+ Suta',
    description: 'Sourced from pristine wetland harvests and hand-roasted to maximum expansion. Uniform snow-white pops with zero black seed residue, minimal breakage (<1.8%), crunch-locked under nitrogen barrier packaging. Ideal for gourmet snack brands, private label superfoods, and bulk repackers.',
    image: '/assets/images/product_makhana_jumbo_packaging_1792504553421.jpg',
    detailImage: '/assets/images/hero_pantry_makhana_agri_1792504551118.jpg',
    moq: '500 kg (Sample pack 1 kg available via air courier)',
    leadTime: '10–14 days for LCL / 21 days for 40ft HQ container',
    estimatedPriceRangeUSD: '$12.50 – $17.50 / kg (FOB Mundra)',
    origin: 'Bihar & Rajasthan certified processing clusters',
    customizationAvailable: true,
    hsCode: '1904.10.90',
    packaging: 'Standard: 10 kg food-grade HDPE sack with inner nitrogen-flushed poly liner; Optional: 100g/250g/500g stand-up retail kraft pouches with private label printing',
    certifications: ['FSSAI Food Safety [CONFIRM real license]', 'APEDA Registered', 'Phytosanitary Certificate', 'Eurofins Laboratory COA'],
    highlights: [
      '6+ Suta (18mm–22mm diameter) giant popped grade with crunchy airy texture',
      'Moisture content certified < 7.5% for crisp shelf stability',
      'Non-GMO, naturally gluten-free, zero chemical bleaching agents',
      'Full traceability batch lot with microbiological lab report'
    ],
    specs: [
      { label: 'Botanical Name', value: 'Euryale Ferox Salisb (Gorgon Nut / Popped Water Lily)' },
      { label: 'Size Grade', value: 'Grade 6+ Suta (Jumbo) and Grade 6.5+ (Hand-sorted Super Jumbo)' },
      { label: 'Moisture Level', value: '6.5% – 7.8% (IS 1155 compliant)' },
      { label: 'Foreign Matter / Husk', value: '< 0.5% by weight' },
      { label: 'Broken / Fragmented', value: '< 2.0%' },
      { label: 'Aflatoxin (B1+B2+G1+G2)', value: 'Not detected (< 2 ppb)' },
      { label: 'Shelf Life', value: '18 months in unopened hermetic packaging away from sunlight' }
    ]
  },
  {
    id: 'pantry-onion-powder-02',
    name: 'Dehydrated Organic White & Red Onion Powder',
    sku: 'ARYA-AGRI-OP02',
    division: 'pantry',
    category: 'Onion Powder',
    tagline: 'High-pungency, free-flowing 80–100 mesh dehydrated onion powder',
    description: 'Manufactured from selected Rajasthan and Nashik pungent onions using gentle low-temperature hot air dehydration. Retains natural sulfur volatiles, pungent allicin aroma, and bright natural color without anti-caking additives or irradiated carriers.',
    image: '/assets/images/hero_pantry_makhana_agri_1792504551118.jpg',
    detailImage: '/assets/images/product_makhana_jumbo_packaging_1792504553421.jpg',
    moq: '1 Metric Ton (1,000 kg)',
    leadTime: '14–20 days',
    estimatedPriceRangeUSD: '$1.85 – $2.60 / kg (FOB Mundra)',
    origin: 'Jodhpur & Western India Dehydration Belts',
    customizationAvailable: true,
    hsCode: '0712.20.00',
    packaging: '25 kg multi-wall brown kraft paper bags with inner food-grade poly barrier; palletized and shrink-wrapped',
    certifications: ['FSSAI Certified [CONFIRM]', 'Spices Board India', 'HACCP & ISO 22000 aligned [CONFIRM]', 'Phytosanitary Certificate'],
    highlights: [
      'Pungency value tested for culinary seasoning, soup mixes & snack coatings',
      'Microbiologically controlled with TPC < 50,000 cfu/g and negative Salmonella',
      'Free flowing with zero artificial silica anti-caking compounds',
      'Available in Granules (16–24 mesh), Minced (8–16 mesh), and Powder (80–100 mesh)'
    ],
    specs: [
      { label: 'Physical State', value: 'Fine dry free-flowing powder (80–100 mesh standard, passes 98%)' },
      { label: 'Moisture Content', value: 'Max 4.5%' },
      { label: 'Total Ash', value: 'Max 4.0%' },
      { label: 'Acid Insoluble Ash', value: 'Max 0.4%' },
      { label: 'Color & Appearance', value: 'Off-white to light cream (White Onion) / Warm Rosy Sand (Red Onion)' },
      { label: 'Container Capacity', value: '15 MT in 20ft container; 26 MT in 40ft HQ container' }
    ]
  },
  {
    id: 'pantry-vegetables-03',
    name: 'Fresh Export Onions (Nashik & Rajasthan Pink/Red)',
    sku: 'ARYA-AGRI-ON03',
    division: 'pantry',
    category: 'Fresh Vegetables',
    tagline: 'Grade-A fresh red onions sorted by caliper size (45mm+, 55mm+)',
    description: 'Direct procurement from contracted farmer producer groups in Rajasthan and western belts. Field-cured, mechanically graded, polished to remove loose dry skins, and packed in aerated leno mesh bags for ocean reefers or cross-border Gulf shipments.',
    image: '/assets/images/hero_pantry_makhana_agri_1792504551118.jpg',
    detailImage: '/assets/images/product_makhana_jumbo_packaging_1792504553421.jpg',
    moq: '1 Reefer Container (28–29 Metric Tons in 40ft Reefer)',
    leadTime: '5–7 days from Mundra / Nhava Sheva load',
    estimatedPriceRangeUSD: '$320 – $540 / MT (Market linked seasonal quote)',
    origin: 'Rajasthan & Maharashtra Agri Belts, India',
    customizationAvailable: true,
    hsCode: '0703.10.10',
    packaging: '10 kg, 20 kg, or 25 kg red ventilated leno mesh bags with custom branded header tags',
    certifications: ['Phytosanitary Certificate', 'APEDA Inspection Certificate', 'Certificate of Origin'],
    highlights: [
      'Tight globoid shape with firm multi-layer skin cover preventing transit rotting',
      'Reefer containerized transit at controlled 0°C to 2°C with 65–70% relative humidity',
      'Regular dispatches to Jebel Ali (Dubai), Colombo, Chittagong, and Port Klang',
      'Strict sorting to discard sprouted, double, or mechanically injured bulbs'
    ],
    specs: [
      { label: 'Caliper Sizes', value: '45 mm – 55 mm (standard) / 55 mm+ (Jumbo grade)' },
      { label: 'Variety', value: 'Garhwa Dark Red / Light Red / Bhima Super' },
      { label: 'Transit Temperature', value: '+1°C to +3°C with 25 CBM/hr air exchange' },
      { label: 'Shelf Life in Transit', value: 'Up to 35 days under uninterrupted cold chain' }
    ]
  }
];

export const CURRENCY_RATES: Record<string, { code: string; symbol: string; rateAgainstUSD: number; label: string }> = {
  USD: { code: 'USD', symbol: '$', rateAgainstUSD: 1.0, label: 'US Dollar ($)' },
  EUR: { code: 'EUR', symbol: '€', rateAgainstUSD: 0.92, label: 'Euro (€)' },
  GBP: { code: 'GBP', symbol: '£', rateAgainstUSD: 0.79, label: 'British Pound (£)' },
  AED: { code: 'AED', symbol: 'د.إ', rateAgainstUSD: 3.67, label: 'UAE Dirham (AED)' },
  INR: { code: 'INR', symbol: '₹', rateAgainstUSD: 86.5, label: 'Indian Rupee (₹)' }
};
