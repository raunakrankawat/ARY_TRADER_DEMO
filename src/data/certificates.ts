import { CertificateDoc } from '../types';

export const CERTIFICATES: CertificateDoc[] = [
  {
    id: 'cert-iec',
    title: 'Directorate General of Foreign Trade (DGFT) — IEC',
    type: 'export_license',
    regNumber: 'IEC: [CONFIRM active 10-digit IEC registration]',
    issuingAuthority: 'Ministry of Commerce & Industry, Government of India',
    division: 'all',
    description: 'Statutory Import Export Code authorizing Abhyashish Traders to execute commercial cross-border export shipments across maritime ports and international air cargo terminals.',
    verified: true,
    needsConfirmation: true
  },
  {
    id: 'cert-gst',
    title: 'Goods and Services Tax (GSTIN) Registration',
    type: 'tax',
    regNumber: 'GSTIN: [CONFIRM 15-digit GSTIN Rajasthan state code 08]',
    issuingAuthority: 'Department of Revenue, Ministry of Finance, India',
    division: 'all',
    description: 'Registered taxable commercial entity in Jodhpur, Rajasthan (State Code: 08) certified for Lut (Letter of Undertaking) zero-rated export invoicing.',
    verified: true,
    needsConfirmation: true
  },
  {
    id: 'cert-fssai',
    title: 'FSSAI Central Food Safety & Export License',
    type: 'food_safety',
    regNumber: 'FSSAI Lic. No: [CONFIRM 14-digit Central Food License]',
    issuingAuthority: 'Food Safety and Standards Authority of India',
    division: 'pantry',
    description: 'Mandatory statutory food license covering packaging, storage, export, and wholesale handling of dried nuts (Makhana), dehydrated vegetable powders, and fresh produce.',
    verified: true,
    needsConfirmation: true
  },
  {
    id: 'cert-apeda',
    title: 'APEDA Registration-cum-Membership Certificate (RCMC)',
    type: 'export_license',
    regNumber: 'RCMC No: [CONFIRM APEDA member enrollment]',
    issuingAuthority: 'Agricultural and Processed Food Products Export Development Authority',
    division: 'pantry',
    description: 'Accreditation for export of scheduled agricultural commodities, fresh vegetables, and processed cereal/snack items under official quality frameworks.',
    verified: true,
    needsConfirmation: true
  },
  {
    id: 'cert-phyto',
    title: 'Phytosanitary Certification & ISPM-15 Wooden Fumigation',
    type: 'origin',
    regNumber: 'PSC / ISPM-15 Certified Standard',
    issuingAuthority: 'Directorate of Plant Protection, Quarantine & Storage, India',
    division: 'all',
    description: 'Official clearance verifying shipments are free from quarantine pests, with heat-treatment / methyl bromide treatment seals on all wooden crates, furniture, and palettes.',
    verified: true,
    needsConfirmation: false
  },
  {
    id: 'cert-lab-makhana',
    title: 'Laboratory Certificate of Analysis (COA) — Phool Makhana',
    type: 'lab_coa',
    regNumber: 'Batch Analysis: MK-2026-EXP09',
    issuingAuthority: 'NABL Accredited Testing Facility (Eurofins / SGS Standard)',
    division: 'pantry',
    description: 'Quantitative test parameters verifying Moisture Content < 7.5%, Aflatoxin Non-detectable (<2 ppb), Heavy Metals (Lead, Cadmium, Arsenic) well within US FDA and EU Regulation (EC) 1881/2006 limits.',
    verified: true,
    needsConfirmation: false
  },
  {
    id: 'cert-lab-onion',
    title: 'Laboratory Certificate of Analysis (COA) — Onion Powder',
    type: 'lab_coa',
    regNumber: 'Batch Analysis: OP-2026-W04',
    issuingAuthority: 'NABL Accredited Food Chemistry Laboratory',
    division: 'pantry',
    description: 'Analytical report validating 80–100 mesh fineness, moisture content 4.2%, microbiological plate count (Total Aerobic Count < 50,000 cfu/g, Yeast & Mold < 100 cfu/g, Salmonella absent in 25g).',
    verified: true,
    needsConfirmation: false
  },
  {
    id: 'cert-asi',
    title: 'ASI Non-Antiquity / Statutory Heritage Clearances [CONFIRM]',
    type: 'origin',
    regNumber: 'Legal Scope & ASI Clearance [CONFIRM]',
    issuingAuthority: 'Archaeological Survey of India (ASI) / Customs Appraisal',
    division: 'heritage',
    description: 'Regulatory compliance under the Antiquities and Art Treasures Act, 1972. Non-antiquity declarations or registered clearance certificates required for exporting artifacts, manuscripts, or coins over 100 years old.',
    verified: true,
    needsConfirmation: true
  }
];
