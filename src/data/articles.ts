export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  keyPoints: string[];
}

export const ARTICLES: Article[] = [
  {
    id: 'makhana-procurement-guide',
    title: 'Phool Makhana Sourcing: Grade 6+ Calibration & Moisture Retention in Ocean Transit',
    date: 'Oct 2024',
    readTime: '6 min read',
    summary: 'A definitive technical analysis for food importers on moisture equilibrium, nitrogen barrier packaging, and volume-to-weight container stuffing calculations for popped water lily seeds.',
    keyPoints: [
      'Moisture equilibrium must be maintained under 7.5% using multi-layer foil pouches to prevent fungal spoilage during humid marine transit.',
      'Sizing calibration is measured in suta (1 suta = 1/8 inch); Grade 6+ (Jumbo, >18mm) commands premium retail shelf placement.',
      'Volumetric CBM constraints mean 1x40ft HQ container accommodates approximately 8.5 to 9.2 metric tons under standard compression.'
    ]
  },
  {
    id: 'kpsi-carpet-specifications',
    title: 'Evaluating Knot Density (KPSI) and Fiber Tensile Strength in Marwar Hand-Tied Rugs',
    date: 'Sep 2024',
    readTime: '8 min read',
    summary: 'A guide for luxury hospitality procurement teams comparing 120 KPSI commercial floor coverings with 240+ KPSI masterloom silk-accented heirloom carpets.',
    keyPoints: [
      '240 Knots Per Square Inch (KPSI) equals over 370,000 hand-tied Tibetan/Persian knots per square meter, requiring 4 to 8 months of artisan weaving.',
      'Bikaneri highland wool possesses exceptional natural lanolin reserves, imparting innate stain resistance without synthetic chemical finishes.',
      'Warp tensioning on upright wooden pit looms determines dimensional rectangularity and prevents edge curling over multi-decade lifespans.'
    ]
  },
  {
    id: 'dehydrated-onion-quality-standards',
    title: 'Dehydrated Onion Powder Export Compliance: Mesh Consistency, Pyruvate Index & EU MRLs',
    date: 'Aug 2024',
    readTime: '5 min read',
    summary: 'How low-temperature dehydration preserves essential volatile allicin compounds while maintaining zero micro-pathogen counts under FSSAI and international food safety rules.',
    keyPoints: [
      'Mesh size standard (80–100 mesh) ensures instantaneous dissolution in industrial seasoning blends and soup bases.',
      'Hot air dehydration below 60°C maintains pungent volatile allicin and sharp flavor pungency indices.',
      'Every batch undergoes heavy metal, aflatoxin, and pesticide multi-residue Eurofins laboratory screening before customs clearance.'
    ]
  }
];
