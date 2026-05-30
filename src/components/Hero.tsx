import React from 'react';
import { Shield, Sparkles, Check, Phone, ArrowUpRight, ChevronRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onBookClick: () => void;
  onNavigateToServices: () => void;
}

export default function Hero({ onBookClick, onNavigateToServices }: HeroProps) {
  // Stagger wrapper settings for clean animated entries
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-32 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#f1f4f8] to-luxury-neutral flex items-center"
    >
      {/* Dynamic light glows reacting gracefully on background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-luxury-teal/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Text Formatting & High Converting Triggers */}
          <motion.div 
            id="hero-content-left"
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Superb Luxury Tagline */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-teal/10 border border-luxury-teal/10 text-luxury-teal">
              <Sparkles size={14} className="text-luxury-gold" />
              <span className="font-sans text-[11px] font-bold tracking-wider uppercase">Welcome to Next-Gen Wellness dentistry</span>
            </motion.div>

            {/* Preserved Core Copy exactly */}
            <div className="space-y-4">
              <motion.h1 
                variants={itemVariants}
                className="font-display text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-luxury-navy leading-[1.08] text-balance"
              >
                Premier Dental Care <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-navy via-luxury-teal to-luxury-gold-dark font-serif font-normal italic">
                  in Magnolia, TX
                </span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="font-sans text-sm md:text-md text-gray-600 font-medium tracking-wide "
              >
                Your Trusted Dentists in Magnolia, Conroe, and the Woodlands
              </motion.p>
            </div>

            {/* Trust highlights array */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-3 gap-4 border-y border-gray-200/50 py-6"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <span className="font-display font-bold text-2xl text-luxury-navy">5.0</span>
                  <div className="flex text-amber-400">
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Google Rating</p>
              </div>
              <div className="space-y-1">
                <span className="font-display font-bold text-2xl text-luxury-navy">100%</span>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Pain-Free Target</p>
              </div>
              <div className="space-y-1">
                <span className="font-display font-bold text-2xl text-luxury-navy">CEREC</span>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Same-day Crowns</p>
              </div>
            </motion.div>

            {/* CTA Execution Group */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                id="hero-booking-cta"
                onClick={onBookClick}
                className="px-8 py-4 rounded-full bg-luxury-teal text-white font-display font-semibold tracking-wider text-xs uppercase hover:bg-luxury-navy transition-all duration-300 shadow-lg shadow-teal-900/10 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Book New Patient Special</span>
                <ArrowUpRight size={14} />
              </button>
              
              <button
                id="hero-services-cta"
                onClick={onNavigateToServices}
                className="px-8 py-4 rounded-full border border-luxury-navy/15 text-luxury-navy bg-white/40 hover:bg-white font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore treatments</span>
                <ChevronRight size={14} className="text-luxury-teal" />
              </button>
            </motion.div>

            {/* Trust elements assurance */}
            <motion.p 
              variants={itemVariants}
              className="text-xs text-gray-400 font-sans italic flex items-center gap-1.5"
            >
              <Shield size={12} className="text-luxury-gold" />
              No insurance? Ask about our private luxury wellness membership circles.
            </motion.p>
          </motion.div>

          {/* Right Column: Layered Patient Visuals & Floating specials offers card */}
          <div id="hero-assets-right" className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Background gradient bubble border for luxury feel */}
            <div className="absolute inset-0 bg-gradient-to-tr from-luxury-teal/10 via-luxury-gold/5 to-transparent rounded-[40px] rotate-2 scale-102 blur-lg" />
            
            {/* Main picture holder */}
            <div className="relative z-10 rounded-[32px] overflow-hidden border border-white max-w-sm sm:max-w-md mx-auto aspect-[3/4] shadow-2xl">
              <img 
                src={HERO_IMAGE} 
                alt="FLOSS Dental healthy vibrant smile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/40 via-transparent to-transparent" />
            </div>

            {/* Floating Specially Designed Offer Badge */}
            <div 
              id="special-promo-card"
              className="absolute -bottom-6 -left-4 sm:left-4 z-20 max-w-[270px] sm:max-w-[310px] rounded-3xl glass-panel p-5 border-white/50 shadow-2xl animate-float"
            >
              <div className="absolute -top-3 right-4 bg-luxury-gold text-white text-[9px] font-sans font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                Specially Curated Offer
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-luxury-navy flex items-baseline gap-1">
                    $199
                    <span className="text-xs font-sans text-gray-500 font-semibold uppercase">New Patient Special</span>
                  </h3>
                  <div className="w-12 h-0.5 bg-luxury-teal mt-1" />
                </div>

                <ul className="space-y-1.5 pt-1">
                  {[
                    'Comprehensive Dental Exam',
                    'Necessary X-Rays',
                    'Preventive Cleaning',
                    'New Patient Welcome Experience'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                      <div className="rounded-full bg-luxury-teal-light/20 p-0.5 mt-0.5 shrink-0">
                        <Check size={10} className="text-luxury-teal" />
                      </div>
                      <span className="font-sans font-medium line-clamp-1">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button
                  id="claim-special-cta"
                  onClick={onBookClick}
                  className="w-full py-2.5 bg-luxury-navy hover:bg-luxury-teal text-white text-[11px] font-display font-semibold tracking-wider uppercase rounded-xl transition-all duration-300"
                >
                  Reserve welcome visit
                </button>
              </div>
            </div>

            {/* Decorative Sparkle Grid behind picture */}
            <div className="absolute -top-6 -right-6 text-luxury-gold opacity-30 select-none hidden sm:block">
              <Sparkles size={48} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
