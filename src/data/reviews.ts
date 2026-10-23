import { CustomerReview, TrustedBrand } from '../types';

export const TRUSTED_BRANDS: TrustedBrand[] = [
  { 
    id: 'brand-1', 
    name: 'Al-Madina Spice Trading LLC', 
    location: 'Dubai, UAE', 
    country: 'UAE',
    sector: 'FMCG & Agri Commodities Importer', 
    badge: '18 FCL Containers',
    type: 'Importer' 
  },
  { 
    id: 'brand-2', 
    name: 'Nordic Artisan Living ApS', 
    location: 'Copenhagen, Denmark', 
    country: 'Denmark',
    sector: 'Architectural Showrooms & Textiles', 
    badge: 'Custom Loom Partner',
    type: 'Retailer' 
  },
  { 
    id: 'brand-3', 
    name: 'Pacific Gourmet Foods Inc', 
    location: 'California, USA', 
    country: 'USA',
    sector: 'Organic Food & Supermarket Chain', 
    badge: 'USDA / NABL Compliant',
    type: 'Distributor' 
  },
  { 
    id: 'brand-4', 
    name: 'Kensington Rug Gallery', 
    location: 'London, UK', 
    country: 'UK',
    sector: 'Generational Hand-Knotted Heritage', 
    badge: '240+ KPSI Exclusive',
    type: 'Showroom' 
  },
  { 
    id: 'brand-5', 
    name: 'SingaTrade Global Pte Ltd', 
    location: 'Singapore', 
    country: 'Singapore',
    sector: 'Bulk Agri Commodities Broker', 
    badge: 'AFTA ASEAN Port Link',
    type: 'Broker' 
  },
  { 
    id: 'brand-6', 
    name: 'Bavarian Bio-Supermarkets GmbH', 
    location: 'Munich, Germany', 
    country: 'Germany',
    sector: 'Clean Label Food Ingredients', 
    badge: 'EU MRL Certified',
    type: 'Supermarket' 
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-01',
    author: 'Rajesh K. Mehta',
    reviewerBadge: 'Local Guide · 42 reviews',
    company: 'Indo-Gulf Commodity Partners',
    location: 'Dubai & Mumbai',
    countryCode: 'AE',
    rating: 5,
    date: '2 weeks ago',
    relativeTime: '2 weeks ago',
    reviewText: 'We contracted 2 full 40ft HQ containers of 6+ Suta Jumbo Phool Makhana through Abhyashish Traders. Moisture was strictly verified under 7.2% with Eurofins lab reports. Cargo arrived in pristine condition at Jebel Ali Port within 5 days of sailing.',
    comment: 'We contracted 2 full 40ft HQ containers of 6+ Suta Jumbo Phool Makhana through Abhyashish Traders. Moisture was strictly verified under 7.2% with Eurofins lab reports. Cargo arrived in pristine condition at Jebel Ali Port within 5 days of sailing.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    division: 'pantry',
    productPurchased: 'Grade 6+ Jumbo Phool Makhana',
    orderVolume: '2x 40ft HQ Containers (18 MT)',
    likesCount: 19,
    verifiedBuyer: true
  },
  {
    id: 'rev-02',
    author: 'Vikramaditya Rathore',
    reviewerBadge: 'Verified Commercial Buyer',
    company: 'Marwar Heritage Interiors',
    location: 'Jaipur & New Delhi',
    countryCode: 'IN',
    rating: 5,
    date: '1 month ago',
    relativeTime: '1 month ago',
    reviewText: 'Their hand-knotted 240 KPSI wool-silk carpets for our luxury boutique hotel project in Udaipur exceeded all expectations. True generational craftsmanship from Salawas weavers, completely free of chemical odor with beautiful natural madder dyes.',
    comment: 'Their hand-knotted 240 KPSI wool-silk carpets for our luxury boutique hotel project in Udaipur exceeded all expectations. True generational craftsmanship from Salawas weavers, completely free of chemical odor with beautiful natural madder dyes.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    division: 'heritage',
    productPurchased: 'Custom 240 KPSI Wool & Silk Carpets',
    orderVolume: '14 Custom Loom Pieces',
    likesCount: 24,
    verifiedBuyer: true
  },
  {
    id: 'rev-03',
    author: 'Sunil Sharma',
    reviewerBadge: 'Local Guide · 18 reviews',
    company: 'Evergreen Organics UK',
    location: 'London & Manchester',
    countryCode: 'GB',
    rating: 5,
    date: '1 month ago',
    relativeTime: '1 month ago',
    reviewText: 'Dehydrated White Onion Powder (80–100 mesh) meets stringent EU MRL pesticide residue limits. APEDA and Phytosanitary documentation were spotless, and the vacuum nitrogen-flushed barrier packaging prevented any clumping in transit.',
    comment: 'Dehydrated White Onion Powder (80–100 mesh) meets stringent EU MRL pesticide residue limits. APEDA and Phytosanitary documentation were spotless, and the vacuum nitrogen-flushed barrier packaging prevented any clumping in transit.',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    division: 'pantry',
    productPurchased: 'Organic Dehydrated White Onion Powder',
    orderVolume: '1x 20ft FCL (12 MT)',
    likesCount: 15,
    verifiedBuyer: true
  },
  {
    id: 'rev-04',
    author: 'Ananya Deshmukh',
    reviewerBadge: 'Interior Architecture Guild',
    company: 'Sanskrit Living Home Studio',
    location: 'Bengaluru',
    countryCode: 'IN',
    rating: 5,
    date: '2 months ago',
    relativeTime: '2 months ago',
    reviewText: 'Remarkable reversible flat-weave dhurries. The team dispatched 30x30 cm strike-off swatches within 48 hours for our client review. The finished batch was identical to the approved colorway with exceptional edge binding.',
    comment: 'Remarkable reversible flat-weave dhurries. The team dispatched 30x30 cm strike-off swatches within 48 hours for our client review. The finished batch was identical to the approved colorway with exceptional edge binding.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    division: 'heritage',
    productPurchased: 'Thar Geometric Cotton & Wool Dhurries',
    orderVolume: '320 sq. meters',
    likesCount: 27,
    verifiedBuyer: true
  },
  {
    id: 'rev-05',
    author: 'Harish Chandra Verma',
    reviewerBadge: 'Verified Trade Desk Officer',
    company: 'Apex Spices & Agro Impex',
    location: 'Ahmedabad & Singapore',
    countryCode: 'SG',
    rating: 5,
    date: '3 months ago',
    relativeTime: '3 months ago',
    reviewText: 'Professional export house with genuine trade knowledge. From DGFT customs clearance to ICD Jodhpur rail booking to Mundra Port berths, every step was transparently documented with milestone updates.',
    comment: 'Professional export house with genuine trade knowledge. From DGFT customs clearance to ICD Jodhpur rail booking to Mundra Port berths, every step was transparently documented with milestone updates.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    division: 'pantry',
    productPurchased: 'Export Grade Pink & Red Onions',
    orderVolume: '3x 40ft Reefer Containers',
    likesCount: 18,
    verifiedBuyer: true
  }
];
