import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, Division } from '../types';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';
import { useRFQ } from '../context/RFQContext';
import { Search, Filter, Layers, Sparkles, Sprout, Hammer, ArrowUpDown } from 'lucide-react';

export const ProductExplorer: React.FC = () => {
  const { selectedDivision, setSelectedDivision } = useRFQ();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'name-asc' | 'name-desc'>('default');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Extract available subcategories based on current division
  const availableCategories = useMemo(() => {
    const prods = selectedDivision === 'all' 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.division === selectedDivision);
    return Array.from(new Set(prods.map(p => p.category)));
  }, [selectedDivision]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(product => {
      const matchesDivision = selectedDivision === 'all' || product.division === selectedDivision;
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = !searchQuery.trim() || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesDivision && matchesCategory && matchesSearch;
    });

    if (sortBy === 'name-asc') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [selectedDivision, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Search and Division Filter Controls */}
      <div className="bg-white rounded-xl p-4 sm:p-6 border border-[#252822]/10 shadow-xs space-y-4">
        
        {/* Top Bar: Division Selector Tabs + Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Division Pill Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                setSelectedDivision('all');
                setSelectedCategory('all');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                selectedDivision === 'all'
                  ? 'bg-[#1B2A4A] text-white shadow-xs'
                  : 'bg-[#F7F4ED] text-[#252822] hover:bg-[#eae5d8]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Divisions ({PRODUCTS.length})</span>
            </button>

            <button
              onClick={() => {
                setSelectedDivision('pantry');
                setSelectedCategory('all');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                selectedDivision === 'pantry'
                  ? 'bg-[#5B6E4E] text-white shadow-xs'
                  : 'bg-[#F7F4ED] text-[#252822] hover:bg-[#eae5d8]'
              }`}
            >
              <Sprout className="w-3.5 h-3.5" />
              <span>Food &amp; Agricultural Commodities</span>
            </button>

            <button
              onClick={() => {
                setSelectedDivision('heritage');
                setSelectedCategory('all');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                selectedDivision === 'heritage'
                  ? 'bg-[#B75E43] text-white shadow-xs'
                  : 'bg-[#F7F4ED] text-[#252822] hover:bg-[#eae5d8]'
              }`}
            >
              <Hammer className="w-3.5 h-3.5" />
              <span>Home Décor &amp; Heritage Textiles</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#252822]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search grade, SKU, knot count..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#F7F4ED] border border-[#252822]/15 rounded-lg focus:outline-none focus:border-[#B89550] text-[#252822]"
            />
          </div>
        </div>

        {/* Subcategory Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#252822]/10 text-xs font-sans">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[#252822]/50 font-medium mr-1">Filter Category:</span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded text-xs transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#B89550] text-white font-semibold'
                  : 'bg-[#F7F4ED] text-[#252822]/80 hover:text-[#252822]'
              }`}
            >
              All
            </button>
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded text-xs transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#B89550] text-white font-semibold'
                    : 'bg-[#F7F4ED] text-[#252822]/80 hover:text-[#252822]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#252822]/50" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#F7F4ED] border border-[#252822]/15 rounded px-2.5 py-1 text-xs text-[#252822] focus:outline-none"
            >
              <option value="default">Default Catalog Order</option>
              <option value="name-asc">Alphabetical (A - Z)</option>
              <option value="name-desc">Alphabetical (Z - A)</option>
            </select>
          </div>
        </div>

      </div>

      {/* Product Results Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-[#252822]/10 p-8 space-y-3">
          <Layers className="w-10 h-10 text-[#252822]/30 mx-auto" />
          <h3 className="font-serif text-lg font-medium text-[#252822]">No products matched your criteria</h3>
          <p className="text-xs text-[#252822]/60 max-w-sm mx-auto">
            Try resetting your search query or switching categories. Custom production orders can also be commissioned directly through our trade desk.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedDivision('all');
            }}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1B2A4A] rounded hover:bg-[#B75E43] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard
                product={product}
                onSelect={(p) => setSelectedProduct(p)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
