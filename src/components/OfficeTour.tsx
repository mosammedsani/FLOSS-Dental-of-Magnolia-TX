import React, { useState } from 'react';
import { Coffee, Tv, Shield, Eye, Flame, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OFFICE_IMAGE } from '../data';

export default function OfficeTour() {
  const [activeTab, setActiveTab ] = useState<'lounge' | 'technology'>('lounge');

  const amenities = [
    {
      title: 'Patient Lounge',
      description: 'A beautifully peaceful sanctuary detailed with modern architecture, plush designer seating, custom glowing fireplace, and zero clinical antiseptic smells.',
      category: 'lounge',
      icon: <Sparkles className="text-luxury-gold" size={16} />
    },
    {
      title: 'Complimentary Bottled Water & Beverage Bar',
      description: 'Treat yourself to refreshing premium Icelandic bottled water, organic herbal teas, or fine espresso drinks from our complimentary refreshment bar.',
      category: 'lounge',
      icon: <Coffee className="text-luxury-gold" size={16} />
    },
    {
      title: 'Comfortable Seating Suites',
      description: 'Our procedural spaces feature ergonomic memory foam patient chairs with heating and gentle massage options, paired with noise-isolating media headsets.',
      category: 'lounge',
      icon: <Tv className="text-luxury-gold" size={16} />
    },
    {
      title: 'Modern Same-Day Ceramic Tech',
      description: 'Ditch the messy goo. Our high-definition 3D dental scanners map oral structures with microscopic accuracy, exporting straight to our in-house porcelain mills.',
      category: 'technology',
      icon: <Shield className="text-luxury-teal" size={16} />
    },
    {
      title: 'CEREC Computerized Crowns',
      description: 'Our state-of-the-art ceramic dental carving lab designs, polishes, and places standard crowns in a single session—no temporary teeth or waiting periods.',
      category: 'technology',
      icon: <Check className="text-luxury-teal" size={16} />
    },
    {
      title: 'Laser Therapy Options',
      description: 'We carry advanced dental lasers that replace invasive tools. They allow painless, injection-free cavity preps and rapid biological gum sterilization.',
      category: 'technology',
      icon: <Flame className="text-luxury-teal" size={16} />
    }
  ];

  const filteredAmenities = amenities.filter(a => a.category === activeTab);

  return (
    <section id="office" className="py-24 bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[110px]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-luxury-teal/5 rounded-full blur-[110px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10Heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hospitality Visual Layout */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-x-0 -bottom-6 bg-gradient-to-tr from-luxury-teal/10 to-transparent rounded-[32px] blur-xl" />
            
            {/* Visual container */}
            <div className="relative z-10 rounded-[32px] overflow-hidden border border-gray-100 shadow-2xl aspect-[16/10] sm:aspect-[16/11]">
              <img 
                src={OFFICE_IMAGE} 
                alt="FLOSS Dental Magnolia elegant workspace" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/40 via-transparent to-transparent" />
              
              {/* Overlay visual badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[10px] text-luxury-navy font-sans tracking-widest font-extrabold uppercase py-1.5 px-3 rounded-full border border-white/40 shadow-md">
                ⭐ Rated Best Dental Workspace TX
              </div>
            </div>

            {/* Micro details row below image */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-[11px] font-sans text-gray-500 font-semibold uppercase tracking-wide text-center">
              <div className="p-3 bg-luxury-neutral rounded-2xl border border-gray-100/50">Modern Interiors</div>
              <div className="p-3 bg-luxury-neutral rounded-2xl border border-gray-100/50">Same-Day Crowns</div>
              <div className="p-3 bg-luxury-neutral rounded-2xl border border-gray-100/50">Laser Precision</div>
            </div>
          </div>

          {/* Right Column: Interactive Tabbed Details list of amenities */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-teal uppercase block">
                Hospitality Meets Medicine
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-luxury-navy">
                Luxury Hospitality-Inspired <br />
                <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-luxury-navy to-luxury-gold">
                  Office Experience
                </span>
              </h2>
              <div className="w-16 h-0.5 bg-luxury-gold mt-2" />
              <p className="text-gray-500 font-sans text-sm">
                Every detail of our Magnolia practice was structured to substitute medical anxiety with extreme wellness pampering. Browse our specialized spaces:
              </p>
            </div>

            {/* Tabs for Lounge vs Technology */}
            <div className="flex border-b border-gray-150 pb-px gap-6">
              <button
                onClick={() => setActiveTab('lounge')}
                className={`pb-3 font-display uppercase tracking-widest text-xs font-semibold relative transition-colors ${
                  activeTab === 'lounge' ? 'text-luxury-teal font-extrabold' : 'text-gray-400 hover:text-luxury-navy'
                }`}
              >
                🛋️ Premium Amenities Lounge
                {activeTab === 'lounge' && (
                  <motion.div layoutId="underline-active" className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-teal" />
                )}
              </button>
              
              <button
                onClick={() => setActiveTab('technology')}
                className={`pb-3 font-display uppercase tracking-widest text-xs font-semibold relative transition-colors ${
                  activeTab === 'technology' ? 'text-luxury-teal font-extrabold' : 'text-gray-400 hover:text-luxury-navy'
                }`}
              >
                🔬 State-Of-The-Art Science
                {activeTab === 'technology' && (
                  <motion.div layoutId="underline-active" className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-teal" />
                )}
              </button>
            </div>

            {/* List of details (Animated Switch) */}
            <AnimatePresence mode="wait">
              <motion.div
                id={`amenities-${activeTab}`}
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredAmenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-2xl bg-luxury-neutral border border-gray-100/70 hover:border-luxury-teal/10 hover:bg-white transition-all duration-300 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white border border-gray-150 flex items-center justify-center shrink-0">
                      {amenity.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-semibold text-sm text-luxury-navy">
                        {amenity.title}
                      </h4>
                      <p className="font-sans text-[11px] leading-relaxed text-gray-500 font-medium">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
