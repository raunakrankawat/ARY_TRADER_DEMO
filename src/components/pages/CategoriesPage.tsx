import React, { useEffect } from 'react';
import { ProductExplorer } from '../ProductExplorer';
import { useNavigation } from '../../context/NavigationContext';
import { useRFQ } from '../../context/RFQContext';
import { Layers, Sparkles, Filter, ChevronRight } from 'lucide-react';

export const CategoriesPage: React.FC = () => {
  const { selectedCategoryFilter, setSelectedCategoryFilter } = useNavigation();
  const { selectedDivision, setSelectedDivision } = useRFQ();

  useEffect(() => {
    // If a specific category filter was passed, sync division
    if (selectedCategoryFilter === 'pantry') {
      setSelectedDivision('pantry');
    } else if (selectedCategoryFilter === 'heritage') {
      setSelectedDivision('heritage');
    }
  }, [selectedCategoryFilter, setSelectedDivision]);

  return (
    <div className="bg-[#F7F4ED] min-h-screen py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#252822]/60 font-sans mb-4">
          <span className="hover:text-[#B75E43] cursor-pointer" onClick={() => window.location.hash = '#/home'}>
            Home
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#252822]/40" />
          <span className="text-[#252822] font-semibold">
            Product Categories &amp; Wholesale Specifications
          </span>
        </div>

        {/* Categories Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#B89550]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B75E43]">
              Export Spec Registry &amp; Wholesale Catalog
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#252822] tracking-tight">
            Wholesale Categories &amp; Sourcing Specifications
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#252822]/75 font-sans leading-relaxed">
            Filter our certified export commodities, view knot density per square inch (KPSI), moisture analyses, container capacities (FCL / LCL), and request itemized FOB / CIF quotations.
          </p>
        </div>
      </div>

      {/* Embedded Deep Product Explorer */}
      <ProductExplorer />
    </div>
  );
};
