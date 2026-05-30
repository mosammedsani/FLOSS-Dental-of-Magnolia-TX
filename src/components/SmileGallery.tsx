import React, { useState } from 'react';
import { ZoomIn, Sparkles, Sliders, ArrowUpRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { smileGallery } from '../data';

export default function SmileGallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'veneers' | 'implants' | 'alignment'>('all');

  const filters = [
    { label: 'All Makeovers', value: 'all' },
    { label: 'Porcelain Veneers', value: 'veneers' },
    { label: 'Implant Restorations', value: 'implants' },
    { label: 'Invisalign & Whitening', value: 'alignment' },
  ];

  // Map filters to indexes for display filtering
  const getFilteredItems = () => {
    if (activeFilter === 'all') return smileGallery;
    if (activeFilter === 'veneers') return [smileGallery[0]];
    if (activeFilter === 'implants') return [smileGallery[1]];
    if (activeFilter === 'alignment') return [smileGallery[2]];
    return smileGallery;
  };

  return (
    <section id="gallery" className="py-24 bg-luxury-neutral relative overflow-hidden">
      {/* Visual lighting */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-luxury-teal/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-teal uppercase">
            Aesthetic Masterpieces
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold tracking-tight text-luxury-navy">
            Our Elite Smile <br />
            <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-luxury-navy to-luxury-gold">
              Transformation Gallery
            </span>
          </p>
          <div className="w-16 h-1 bg-luxury-gold mx-auto rounded-full mt-2" />
          <p className="text-gray-500 font-sans text-sm max-w-xl mx-auto">
            Witness the real, beautiful, and emotionally life-changing results achieved by our dental experts here in Magnolia, Texas.
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              id={`gallery-filter-${f.value}`}
              key={f.value}
              onClick={() => setActiveFilter(f.value as any)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeFilter === f.value
                  ? 'bg-luxury-navy text-white shadow-md'
                  : 'bg-white text-gray-500 hover:text-luxury-teal border border-gray-150 hover:bg-gray-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {getFilteredItems().map((item, idx) => (
              <motion.div
                id={`gallery-item-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="rounded-[28px] overflow-hidden bg-white border border-gray-100/80 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Before/After side by side pictures inside luxurious layout */}
                <div className="relative aspect-[4/3] w-full overflow-hidden flex bg-gray-50 border-b border-gray-100">
                  
                  {/* Before container panel */}
                  <div className="relative w-1/2 h-full overflow-hidden border-r border-white">
                    <img 
                      src={item.before} 
                      alt="Smile Before clinical treatment" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 via-transparent to-transparent p-3 pt-6">
                      <span className="text-[9px] uppercase tracking-widest font-sans font-extrabold text-white bg-black/40 px-2 py-0.5 rounded-full border border-white/20">
                        Before Care
                      </span>
                    </div>
                  </div>

                  {/* After container panel */}
                  <div className="relative w-1/2 h-full overflow-hidden">
                    <img 
                      src={item.after} 
                      alt="Smile After clinical treatment" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-luxury-teal/60 via-transparent to-transparent p-3 pt-6">
                      <span className="text-[9px] uppercase tracking-widest font-sans font-extrabold text-white bg-luxury-teal px-2 py-0.5 rounded-full border border-white/20">
                        Result After
                      </span>
                    </div>
                  </div>

                </div>

                {/* Caption Card Panel */}
                <div className="p-6 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-display font-bold text-sm text-luxury-navy group-hover:text-luxury-teal transition-colors">
                      {item.title}
                    </h3>
                    
                    <div className="flex gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                    </div>
                  </div>

                  <p className="font-sans text-[11px] leading-relaxed text-gray-500 font-medium">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400 font-sans italic">
            *All transformations displayed represent authentic aesthetic repairs. Individual anatomical outcomes may vary.
          </p>
        </div>

      </div>
    </section>
  );
}
