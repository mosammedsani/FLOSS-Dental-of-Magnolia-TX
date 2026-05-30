import React, { useState } from 'react';
import { 
  Smile, Sparkles, Shield, Eye, ShieldAlert, Heart, Activity, CheckSquare, 
  Layers, HelpingHand, Trash2, ArrowRight, Zap, Stars, MessageSquareQuote, Check 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { services } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onBookClick: () => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  // Category tabs state
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'cosmetic' | 'sedation' | 'advanced'>('all');
  
  // Implant category selector state (for the implants showcase section)
  const [activeImplantOption, setActiveImplantOption] = useState(0);

  // Before/After slider control state
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSliding, setIsSliding] = useState(false);

  const categories = [
    { label: 'All Services', value: 'all' },
    { label: 'General & Preventive', value: 'general' },
    { label: 'Cosmetic Artistry', value: 'cosmetic' },
    { label: 'Sedation Dentistry', value: 'sedation' },
    { label: 'Advanced Technology', value: 'advanced' },
  ];

  // Map categories to modern interactive icons
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'implants': return <Layers className="text-luxury-gold" size={24} />;
      case 'cosmetic': return <Smile className="text-luxury-teal" size={24} />;
      case 'same-day-crowns': return <Zap className="text-amber-500" size={24} />;
      case 'iv-sedation': return <Activity className="text-pink-500" size={24} />;
      case 'nitrous-sedation': return <HelpingHand className="text-sky-500" size={24} />;
      case 'root-canal': return <Shield className="text-blue-500" size={24} />;
      case 'dentures': return <Heart className="text-rose-500" size={24} />;
      case 'emergency-dentistry': return <ShieldAlert className="text-emerald-500" size={24} />;
      case 'general-dentistry': return <Activity className="text-luxury-navy" size={24} />;
      case 'invisalign': return <Sparkles className="text-luxury-teal-light" size={24} />;
      case 'veneers': return <Stars className="text-luxury-gold" size={24} />;
      case 'teeth-whitening': return <Smile className="text-yellow-500" size={24} />;
      case 'periodontal': return <Activity className="text-emerald-500" size={24} />;
      case 'extractions': return <Trash2 className="text-red-400" size={24} />;
      default: return <Smile className="text-luxury-teal" size={24} />;
    }
  };

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const implantOptions = [
    {
      title: 'Single Tooth Implants',
      description: 'The finest cosmetic and structural repair for a single missing tooth. An biocompatible post is positioned inside the jaw, fusing seamlessly to serve as a high-strength root for your crafted porcelain tooth.',
      recovery: 'Highly stable, looks and functions exactly like a natural tooth.',
      duration: 'Completed across a few precise, comfortable sessions.'
    },
    {
      title: 'Implant Bridges',
      description: 'Used when multiple adjacent teeth are missing. Rather than grinding down neighboring healthy teeth for a old bridge, we use key implants to anchor a secure, dental bridge.',
      recovery: 'Preserves nearby natural teeth structures.',
      duration: 'Allows permanent bite strength without adhesives.'
    },
    {
      title: 'Snap-In Implant Dentures',
      description: 'Combining denture convenience with implant security. Your custom dentures snap securely onto special locator implant buttons, preventing slippage or embarrassing slurs when dining.',
      recovery: 'Massive upgrade in eating and smiling security.',
      duration: 'Easy snap off for daily hygiene cleaning.'
    },
    {
      title: 'Full Arch Dental Implants',
      description: 'A complete custom set of strong, beautiful porcelain teeth supported by a strategically planned group of dental implants, returning beautiful aesthetics and 100% natural chewing forces.',
      recovery: 'Permanent clinical restoration of the entire upper or lower jaw.',
      duration: 'Tailored to your bespoke facial dimensions.'
    },
    {
      title: 'All-On-4 Solutions',
      description: 'An industry-leading advanced digital technique where an entire arch of gorgeous teeth is permanently secured with only four clinically custom-angled implants, often in a single surgery day.',
      recovery: 'Instant confidence boost and same-day provisional teeth.',
      duration: 'Advanced computer-guided precision placement.'
    }
  ];

  // Before/after image constants
  const beforeImg = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"; // Close model portfolio face
  const afterImg = "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=800&q=80"; // Bright smiling face

  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, container);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isSliding) {
      const container = e.currentTarget.getBoundingClientRect();
      handleSliderMove(e.clientX, container);
    }
  };

  return (
    <>
      {/* 1. GENERAL SERVICES GRID SECTION */}
      <section id="services" className="py-24 bg-luxury-neutral relative overflow-hidden">
        {/* Glow dots */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-luxury-teal/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-teal uppercase">
              Comprehensive Excellence
            </h2>
            <p className="font-display text-3xl md:text-4xl font-bold tracking-tight text-luxury-navy">
              World-Class Care Tailored <br />
              <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-luxury-navy to-luxury-gold">
                to Your Comfort
              </span>
            </p>
            <div className="w-16 h-1 bg-luxury-gold mx-auto rounded-full mt-2" />
            <p className="text-gray-500 font-sans text-sm max-w-xl mx-auto">
              Preserving and magnifying your dental health with advanced diagnostics, custom procedures, and a soothing wellness aesthetic.
            </p>
          </div>

          {/* Interactive Category Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                id={`filter-${cat.value}`}
                key={cat.value}
                onClick={() => setActiveCategory(cat.value as any)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-luxury-navy text-white shadow-md shadow-navy-950/15'
                    : 'bg-white text-gray-600 hover:text-luxury-teal border border-gray-150 hover:bg-white/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid layout with smooth motion */}
          <motion.div 
            id="services-grid"
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div
                  id={`service-card-${service.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={service.id}
                  className="rounded-3xl bg-white p-8 border border-gray-100 hover:border-luxury-teal/25 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle inner background glow on hovered cards */}
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury-teal/0 via-transparent to-luxury-gold/0 group-hover:from-luxury-teal/[0.02]/ group-hover:to-luxury-gold/[0.02] transition-colors duration-500" />
                  
                  <div className="relative z-10 space-y-6">
                    {/* Header: Icon holding accent */}
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                      {getServiceIcon(service.id)}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-lg text-luxury-navy group-hover:text-luxury-teal transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs leading-relaxed text-gray-500 font-medium">
                        {service.description}
                      </p>
                    </div>

                    {/* Features list if available */}
                    {service.features && (
                      <ul className="space-y-1.5 pt-3 border-t border-gray-100">
                        {service.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-[11px] text-gray-600 font-serif">
                            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="relative z-10 pt-6 mt-6 border-t border-gray-50 flex items-center justify-between">
                    <button
                      id={`book-service-${service.id}`}
                      onClick={onBookClick}
                      className="font-display text-[10px] font-bold tracking-widest uppercase text-luxury-navy hover:text-luxury-teal flex items-center gap-1.5 group/btn"
                    >
                      <span>{service.ctaText || 'Learn More'}</span>
                      <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[9px] font-mono font-bold text-gray-300 uppercase tracking-widest group-hover:text-luxury-gold transition-colors">
                      {service.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 2. DENTAL IMPLANTS FLAGSHIP LUXURY SECTION */}
      <section 
        id="implants-section" 
        className="py-24 bg-luxury-navy text-white relative overflow-hidden"
      >
        {/* Cinematic ambient lights */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-teal/5 rounded-full blur-[140px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10Heading font-serif">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side of Implants Showcase: Descriptions */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-gold uppercase block">
                  Flagship Aesthetics & Restoration
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                  Dental Implants Feature <br />
                  <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-white via-luxury-gold-light to-luxury-gold">
                    Experience
                  </span>
                </h2>
                <div className="w-16 h-0.5 bg-luxury-gold mt-2" />
                <p className="text-gray-300 font-sans text-sm leading-relaxed max-w-lg">
                  Dental implants represent the modern absolute standard for teeth restoration. Beautifully crafted from grade-4 medical titanium and covered with lifelike ceramic, implants fuse right to your system to halt progressive bone loss.
                </p>
              </div>

              {/* Implant Interactive Category Switcher (Single, Bridge, All-On-4 etc) */}
              <div id="implant-selector" className="space-y-3">
                <p className="text-[10px] text-gray-400 font-sans tracking-wide uppercase font-bold">Select implant restoration scale:</p>
                <div className="flex flex-wrap gap-2">
                  {implantOptions.map((opt, id) => (
                    <button
                      id={`implant-option-${id}`}
                      key={id}
                      onClick={() => setActiveImplantOption(id)}
                      className={`px-4 py-2 text-[11px] font-display uppercase tracking-wider font-semibold rounded-lg border transition-all duration-300 ${
                        activeImplantOption === id
                          ? 'bg-luxury-gold text-luxury-navy border-luxury-gold shadow-lg shadow-amber-950/25'
                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {opt.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Display card for selected Implant option */}
              <AnimatePresence mode="wait">
                <motion.div
                  id="selected-implant-details"
                  key={activeImplantOption}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 pointer-events-none"
                >
                  <h3 className="font-display font-bold text-md text-luxury-gold-light">
                    {implantOptions[activeImplantOption].title}
                  </h3>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed mt-2">
                    {implantOptions[activeImplantOption].description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/5 text-[11px]">
                    <div>
                      <p className="text-gray-400 font-bold uppercase tracking-wide">Key Attribute:</p>
                      <p className="text-white mt-0.5 font-sans font-medium">{implantOptions[activeImplantOption].recovery}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 font-bold uppercase tracking-wide">Procedure Focus:</p>
                      <p className="text-white mt-0.5 font-sans font-medium">{implantOptions[activeImplantOption].duration}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  id="implant-consult-cta"
                  onClick={onBookClick}
                  className="px-6 py-3.5 rounded-full bg-luxury-gold hover:bg-white text-luxury-navy font-display font-bold tracking-wider text-xs uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <span>Book Implant Consultation</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Right side: Cinematic diagrams / artwork design */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-luxury-teal/15 via-luxury-gold/5 to-transparent rounded-[32px] blur-xl" />
              
              <div className="relative z-10 p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-luxury-navy-light to-luxury-navy border border-white/5 shadow-2xl space-y-6">
                
                {/* Visual Representation of Implant System */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-luxury-gold rounded-full" />
                    <h4 className="font-display font-bold uppercase tracking-wider text-sm text-gray-200">The Anatomy of a Premium Implant</h4>
                  </div>
                  
                  {/* Step diagram */}
                  <div id="implant-anatomy-list" className="space-y-4">
                    {[
                      { step: '01', title: 'Solid Bio-Fused Crown', body: 'The visible, beautiful porcelain layer. Designed meticulously of premium ceramic with color gradients and translucency that matches surrounding natural enamel.' },
                      { step: '02', title: 'Precision Custom Abutment', body: 'The connector piece. Crafted uniquely out of titanium or solid zirconia to link the solid crown safely to the underground root support.' },
                      { step: '03', title: 'Advanced Titanium Root Post', body: 'The foundation. Inserted perfectly inside your bone tissue where it begins a cellular bonding process (osseointegration) that permanently safeguards bone density.' }
                    ].map((step, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <span className="font-display text-lg font-bold text-luxury-gold-light mt-0.5">{step.step}</span>
                        <div className="space-y-0.5">
                          <p className="font-sans font-bold text-xs text-white">{step.title}</p>
                          <p className="text-[10px] text-gray-400 font-sans leading-relaxed">{step.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 text-[11px] font-sans italic text-center">
                  *Our implant procedures feature computerized 3D CBCT planning tools to ensure maximum precision and ultimate healing rapidness.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COSMETIC DENTISTRY SECTION (EDITORIAL STYLE + BEFORE/AFTER SLIDER) */}
      <section 
        id="cosmetic-section" 
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-luxury-teal/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Interactive Before/After Comparison Image Slider */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="text-center lg:text-left space-y-3">
                <span className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-teal uppercase block">
                  Stunning Transformations
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-luxury-navy">
                  Custom Aesthetic Smile Gallery
                </h3>
                <p className="text-gray-500 font-sans text-xs max-w-md">
                  Slide the handle left and right to witness the exceptional, life-altering realism of our porcelain veneers and smile makeover designs.
                </p>
              </div>

              {/* Slider UI Container Component */}
              <div 
                id="interactive-comparison-slider"
                className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-150 shadow-2xl select-none cursor-ew-resize max-w-lg mx-auto"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={() => setIsSliding(true)}
                onMouseUp={() => setIsSliding(false)}
                onMouseLeave={() => setIsSliding(false)}
              >
                {/* AFTER IMAGE (Underlay) */}
                <img 
                  src={afterImg} 
                  alt="Elite beautiful smile results" 
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute bottom-4 right-4 z-20 bg-luxury-teal text-white text-[10px] uppercase font-sans font-bold tracking-widest px-3 py-1 rounded-full shadow-lg">
                  Beautiful After
                </div>

                {/* BEFORE IMAGE (Overlay) */}
                <div 
                  className="absolute inset-y-0 left-0 right-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src={beforeImg} 
                    alt="Original dental alignment" 
                    className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                    draggable={false}
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute bottom-4 left-4 z-20 bg-luxury-navy text-white text-[10px] uppercase font-sans font-bold tracking-widest px-3 py-1 rounded-full shadow-lg">
                    Before Clinic
                  </div>
                </div>

                {/* SLIDER HANDLEBAR */}
                <div 
                  className="absolute inset-y-0 w-1 bg-white cursor-col-resize z-30"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-2xl">
                    <div className="flex gap-0.5">
                      <span className="w-1 h-3 bg-luxury-teal rounded-full" />
                      <span className="w-1 h-3 bg-luxury-teal rounded-full" />
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex items-center justify-between py-2 text-xs text-gray-400 font-sans px-4 max-w-lg mx-auto">
                <span className="flex items-center gap-1">← Drag Handle Left to show transformation</span>
                <span className="flex items-center gap-1">Right →</span>
              </div>

            </div>

            {/* Right Column: Editorial Text Delivery */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-gold-dark uppercase block">
                  The Editorial Treatment
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-luxury-navy">
                  Cosmetic Dentistry <br />
                  <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-luxury-navy to-luxury-gold">
                    Experience
                  </span>
                </h2>
                <div className="w-16 h-0.5 bg-luxury-teal mt-2" />
                <p className="text-gray-600 font-sans text-sm leading-relaxed">
                  We believe beautiful smiles are never carbon-copied. They are delicate balances of tooth transparency, gum geometry, shading, and natural curvature. At FLOSS, we collaborate intimately with you to engineer a custom visual plan that matches your personality.
                </p>
              </div>

              {/* Grid of details for cosmetics */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Porcelain Veneers', body: 'Bespoke, wafer-thin ceramic shells crafted to overlay dental concerns permanently.' },
                  { title: 'Invisalign® Aligners', body: 'Gently align crowded teeth safely and invisibly without wire braces.' },
                  { title: 'Luminous Teeth Whitening', body: 'Remove years of tooth staining in one single lunch-hour appointment.' },
                  { title: 'Full Smile Makeovers', body: 'Comprehensive aesthetic rebuilds combining alignment, veneers, and crowns.' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1 p-4 rounded-2xl bg-luxury-neutral border border-gray-100">
                    <p className="font-display font-bold text-xs text-luxury-teal flex items-center gap-1.5">
                      <Stars size={12} className="text-luxury-gold" />
                      {item.title}
                    </p>
                    <p className="text-[10px] text-gray-500 font-sans leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  id="cosmetics-design-cta"
                  onClick={onBookClick}
                  className="px-6 py-3.5 rounded-full bg-luxury-teal text-white hover:bg-luxury-navy font-display font-semibold tracking-wider text-xs uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <span>Design My Smile Upgrade</span>
                  <ArrowRight size={13} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
