import React from 'react';
import { CraftAnatomy } from '../CraftAnatomy';
import { RugRoomVisualizer } from '../RugRoomVisualizer';
import { ArtisanProvenance } from '../ArtisanProvenance';
import { ChevronRight, Award, Compass, Eye } from 'lucide-react';

export const CraftPage: React.FC = () => {
  return (
    <div className="bg-[#FAF6EE] min-h-screen py-10 lg:py-14 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#2B2622]/60 font-sans mb-4">
          <span className="hover:text-[#1B2A4A] cursor-pointer" onClick={() => window.location.hash = '#/home'}>
            Home
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#2B2622]/40" />
          <span className="text-[#1B2A4A] font-semibold">
            Craftsmanship &amp; Provenance
          </span>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#C8963E]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B5472F]">
              Handloom Anatomy &amp; Generational Provenance
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B2A4A] tracking-tight">
            The Geometry of 240+ Knots: Artisan Mastery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#2B2622]/75 font-sans leading-relaxed">
            Every carpet exported by Arya Trader is a verifiable architectural artifact. Explore the structural anatomy of our hand-tied weaves, experiment with colorways in our interactive visualizer, and trace the artisan families behind each piece.
          </p>
        </div>
      </div>

      {/* 1. Craft Anatomy Explorer */}
      <CraftAnatomy />

      {/* 2. Interactive Rug Room Visualizer */}
      <div id="room-visualizer">
        <RugRoomVisualizer />
      </div>

      {/* 3. Artisan Provenance & Supply Chain Journey */}
      <ArtisanProvenance />
    </div>
  );
};
