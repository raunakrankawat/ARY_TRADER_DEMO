import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useRFQ } from '../context/RFQContext';
import { PRODUCTS } from '../data/products';
import { 
  Eye, 
  ZoomIn, 
  Layers, 
  Check, 
  Sparkles, 
  FileText,
  Maximize2
} from 'lucide-react';

interface RoomScene {
  id: string;
  name: string;
  style: string;
  image: string;
  rugPerspectiveClass: string;
}

const ROOM_SCENES: RoomScene[] = [
  {
    id: 'room-haveli',
    name: 'Historic Sandstone Haveli Courtyard',
    style: 'Heritage Architecture · Jodhpur Sandstone',
    image: '/assets/images/hero_heritage_rug_craft_1792504550869.jpg',
    rugPerspectiveClass: 'bottom-6 left-1/2 -translate-x-1/2 w-3/4 max-w-lg aspect-[16/10] rotate-x-[20deg]'
  },
  {
    id: 'room-salon',
    name: 'Modern Architectural Living Salon',
    style: 'Minimal Warm Travertine · Editorial Daylight',
    image: '/assets/aistudio/image_920fd976.png',
    rugPerspectiveClass: 'bottom-4 left-1/2 -translate-x-1/2 w-4/5 max-w-xl aspect-[16/10]'
  },
  {
    id: 'room-suite',
    name: 'Executive Boutique Hotel Suite',
    style: 'Artisan Wood & Linen · Warm Sunbeam Shadows',
    image: '/assets/aistudio/image_8d0ceab4.png',
    rugPerspectiveClass: 'bottom-4 left-1/2 -translate-x-1/2 w-3/4 max-w-lg aspect-[16/10]'
  }
];

const RUG_OPTIONS = [
  {
    id: 'opt-marwar',
    name: 'Marwar Heritage Hand-Knotted Medallion',
    sku: 'ARYA-RUG-HK01',
    product: PRODUCTS[0],
    density: '240 KPSI',
    textureImage: '/assets/images/product_jodhpur_handknotted_rug_1792504552668.jpg'
  },
  {
    id: 'opt-thar',
    name: 'Thar Geometric Panja Dhurrie',
    sku: 'ARYA-RUG-FW02',
    product: PRODUCTS[1],
    density: 'Reversible Flat-Weave',
    textureImage: '/assets/images/hero_heritage_rug_craft_1792504550869.jpg'
  }
];

const SIZES = [
  { label: '5x8 ft', sqft: 40 },
  { label: '6x9 ft', sqft: 54 },
  { label: '8x10 ft', sqft: 80, popular: true },
  { label: '9x12 ft', sqft: 108 },
  { label: '10x14 ft', sqft: 140 },
  { label: 'Custom Runner', sqft: 35 }
];

const COLORWAYS = [
  { name: 'Indigo & Terracotta', hex: '#1B2A4A', secondaryHex: '#B5472F' },
  { name: 'Sandstone Gold & Ivory', hex: '#C8963E', secondaryHex: '#FAF6EE' },
  { name: 'Imperial Madder Crimson', hex: '#B5472F', secondaryHex: '#1B2A4A' },
  { name: 'Desert Oasis Sage', hex: '#6B7F5E', secondaryHex: '#EADFCB' }
];

export const RugRoomVisualizer: React.FC = () => {
  const { addToEnquiry, convertPrice } = useRFQ();

  const [activeRoom, setActiveRoom] = useState<RoomScene>(ROOM_SCENES[0]);
  const [selectedRug, setSelectedRug] = useState(RUG_OPTIONS[0]);
  const [selectedSize, setSelectedSize] = useState(SIZES[2]);
  const [selectedColorway, setSelectedColorway] = useState(COLORWAYS[0]);
  const [isZoomMode, setIsZoomMode] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleAddToQuote = () => {
    addToEnquiry(selectedRug.product, selectedSize.sqft, selectedColorway.name);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2500);
  };

  return (
    <section id="room-visualizer" className="py-20 lg:py-28 bg-[#FAF6EE] border-b border-[#2B2622]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B5472F]">
                Retailer &amp; Designer Studio
              </span>
              <span className="text-[#2B2622]/30 text-xs">·</span>
              <span className="text-xs text-[#2B2622]/60">Interactive Room Visualizer</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1B2A4A] tracking-tight">
              Preview rugs in real space
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#2B2622]/70 leading-relaxed font-sans">
            Curate scale, colorways, and knot densities for your boutique showroom or hospitality projects. Test placements in curated architectural rooms or inspect macro weave textures.
          </p>
        </motion.div>

        {/* Visualizer Workbench Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Visualizer Stage (Left 8 cols) with Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 bg-white rounded-lg border border-[#2B2622]/10 overflow-hidden shadow-sm flex flex-col"
          >
            
            {/* Top Toolbar */}
            <div className="px-6 py-3 border-b border-[#2B2622]/10 flex flex-wrap items-center justify-between gap-4 bg-[#FAF6EE]/50">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1B2A4A]">Active Room:</span>
                <span className="text-xs text-[#2B2622]/80 font-medium">{activeRoom.name}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsZoomMode(!isZoomMode)}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded transition-colors ${
                    isZoomMode ? 'bg-[#1B2A4A] text-white' : 'bg-white text-[#2B2622] border border-[#2B2622]/15 hover:bg-[#EADFCB]'
                  }`}
                  title="Toggle 100% macro weave texture inspection"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{isZoomMode ? 'Exit Texture Zoom' : '100% Macro Weave Zoom'}</span>
                </button>
              </div>
            </div>

            {/* Room Visual Canvas */}
            <div className="relative aspect-[16/10] bg-[#2B2622]/5 overflow-hidden flex items-center justify-center">
              
              {isZoomMode ? (
                /* 100% Macro Knot Density Inspection View */
                <div className="relative w-full h-full bg-[#1B2A4A]">
                  <img
                    src={selectedRug.textureImage}
                    alt={`${selectedRug.name} Macro Knot Texture`}
                    className="w-full h-full object-cover scale-150 transition-transform duration-700 cursor-crosshair"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div className="bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded">
                      <span className="font-mono font-bold text-[#C8963E] mr-2">240 KPSI INSPECTION</span>
                      <span className="text-white/80">Hand-sheared 10mm wool pile · Madder root &amp; natural indigo dye</span>
                    </div>
                    <span className="bg-[#B5472F] px-2.5 py-1 rounded font-semibold text-[11px] uppercase tracking-wider">
                      Macro Loupe
                    </span>
                  </div>
                </div>
              ) : (
                /* Room Perspective View */
                <div className="relative w-full h-full">
                  <img
                    src={activeRoom.image}
                    alt={activeRoom.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlaid Rug Placement Simulator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/5 max-w-md shadow-2xl transition-all duration-500 rounded-xs overflow-hidden border border-[#C8963E]/40"
                    style={{
                      transform: 'perspective(600px) rotateX(25deg) translateX(-50%)',
                      boxShadow: '0 25px 50px -12px rgba(27, 42, 74, 0.45)'
                    }}
                  >
                    <div className="relative aspect-[16/11]">
                      <img
                        src={selectedRug.textureImage}
                        alt="Simulated rug placement"
                        className="w-full h-full object-cover brightness-95 contrast-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Subtle Colorway overlay simulation */}
                      <div 
                        className="absolute inset-0 mix-blend-color opacity-30 pointer-events-none transition-colors duration-500"
                        style={{ backgroundColor: selectedColorway.hex }}
                      />
                    </div>
                  </div>

                  {/* Room Tag pill */}
                  <div className="absolute top-4 left-4 bg-[#FAF6EE]/90 backdrop-blur-xs px-3 py-1 rounded text-xs text-[#1B2A4A] font-medium border border-[#2B2622]/10">
                    {activeRoom.style}
                  </div>
                </div>
              )}
            </div>

            {/* Room Selector Strip */}
            <div className="p-4 bg-white border-t border-[#2B2622]/10">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-[#2B2622]/60 block mb-2">
                Select Architectural Space
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ROOM_SCENES.map((scene) => (
                  <button
                    key={scene.id}
                    onClick={() => { setActiveRoom(scene); setIsZoomMode(false); }}
                    className={`flex items-center gap-3 p-2.5 rounded border text-left transition-all ${
                      activeRoom.id === scene.id
                        ? 'border-[#1B2A4A] bg-[#FAF6EE] ring-1 ring-[#1B2A4A]/20'
                        : 'border-[#2B2622]/10 hover:border-[#2B2622]/30 bg-white'
                    }`}
                  >
                    <img
                      src={scene.image}
                      alt={scene.name}
                      className="w-10 h-10 rounded object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#1B2A4A] truncate">{scene.name}</p>
                      <p className="text-[10px] text-[#2B2622]/60 truncate">{scene.style}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Configuration & Order Panel (Right 4 cols) with Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 bg-white rounded-lg border border-[#2B2622]/10 p-6 shadow-sm space-y-6"
          >
            
            {/* Header Lockup */}
            <div className="border-b border-[#2B2622]/10 pb-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C8963E] block mb-1">
                Custom Specification
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1B2A4A]">
                {selectedRug.name}
              </h3>
              <p className="text-xs text-[#2B2622]/60 font-mono mt-1">
                SKU: {selectedRug.sku} · {selectedRug.density}
              </p>
            </div>

            {/* Rug Pattern Selector */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#2B2622]/70 block mb-2">
                1. Weave Structure &amp; Pattern
              </label>
              <div className="space-y-2">
                {RUG_OPTIONS.map((rug) => (
                  <button
                    key={rug.id}
                    onClick={() => setSelectedRug(rug)}
                    className={`w-full p-2.5 rounded border text-left text-xs font-medium flex items-center justify-between transition-colors ${
                      selectedRug.id === rug.id
                        ? 'bg-[#FAF6EE] border-[#1B2A4A] text-[#1B2A4A]'
                        : 'bg-white border-[#2B2622]/10 text-[#2B2622] hover:bg-[#FAF6EE]/50'
                    }`}
                  >
                    <span>{rug.name}</span>
                    <span className="font-mono text-[11px] text-[#C8963E]">{rug.density}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Colorway Palette */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#2B2622]/70">
                  2. Artisan Colorway
                </label>
                <span className="text-xs text-[#1B2A4A] font-medium">{selectedColorway.name}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {COLORWAYS.map((cw) => (
                  <button
                    key={cw.name}
                    onClick={() => setSelectedColorway(cw)}
                    className={`p-2 rounded border flex flex-col items-center gap-1.5 transition-all ${
                      selectedColorway.name === cw.name
                        ? 'border-[#1B2A4A] bg-[#FAF6EE] ring-1 ring-[#1B2A4A]'
                        : 'border-[#2B2622]/15 bg-white hover:border-[#2B2622]/30'
                    }`}
                  >
                    <div 
                      className="w-6 h-6 rounded-full border border-black/10 shadow-inner flex items-center justify-center"
                      style={{ backgroundColor: cw.hex }}
                    >
                      {selectedColorway.name === cw.name && (
                        <Check className="w-3.5 h-3.5 text-white drop-shadow" />
                      )}
                    </div>
                    <span className="text-[10px] text-[#2B2622]/70 text-center truncate w-full">
                      {cw.name.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensions & Standard Sizes */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#2B2622]/70">
                  3. Export Size
                </label>
                <span className="text-xs font-mono text-[#2B2622]/60">{selectedSize.sqft} Sq. Ft</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {SIZES.map((sz) => (
                  <button
                    key={sz.label}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 px-1 text-center rounded border text-xs font-medium transition-colors ${
                      selectedSize.label === sz.label
                        ? 'bg-[#1B2A4A] text-white border-[#1B2A4A]'
                        : 'bg-white text-[#2B2622] border-[#2B2622]/15 hover:bg-[#FAF6EE]'
                    }`}
                  >
                    {sz.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Benchmark Reference */}
            <div className="p-3 rounded bg-[#FAF6EE] border border-[#2B2622]/10 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#2B2622]/70 font-sans">Wholesale Estimate:</span>
                <span className="font-serif font-bold text-[#1B2A4A] text-sm">
                  {convertPrice(selectedRug.product.estimatedPriceRangeUSD)}
                </span>
              </div>
              <p className="text-[11px] text-[#2B2622]/50 leading-tight">
                *FOB Mundra Port. Final pricing confirmed based on container volume and bespoke strike-off requirements.
              </p>
            </div>

            {/* Add to RFQ Action Button */}
            <button
              onClick={handleAddToQuote}
              className={`w-full py-3 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                addedSuccess 
                  ? 'bg-[#6B7F5E] text-white shadow-md' 
                  : 'bg-[#B5472F] hover:bg-[#1B2A4A] text-white shadow-sm'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Quote Basket!</span>
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  <span>Add Configuration to RFQ</span>
                </>
              )}
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
