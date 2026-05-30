import React from 'react';
import { Shield, Cpu, Activity, Heart, Sparkles, Smile, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutUs() {
  const values = [
    {
      icon: <Cpu className="text-luxury-teal" size={20} />,
      title: 'Technology at its Best',
      description: 'By deploying computer-guided CEREC 3D crown mills and micro-lasers, we provide accurate, robust procedures completed in a fraction of normal appointment periods.'
    },
    {
      icon: <Heart className="text-luxury-teal" size={20} />,
      title: 'Personalized Care',
      description: 'We do not rush. We design a dental architecture specifically tailored to match your specific facial parameters, budget considerations, and scheduling needs.'
    },
    {
      icon: <Activity className="text-luxury-teal" size={20} />,
      title: 'Sedation Dentistry Options',
      description: 'Your ultimate peace is our target. From conscious gaseous nitrous in-chair calm to deep IV sleep sedation, we guarantee a completely pain-free appointment.'
    },
    {
      icon: <Smile className="text-luxury-teal" size={20} />,
      title: 'Patient Comfort',
      description: 'Indulge in our heated massage treatment chairs, select your favorite music on noise-isolation headsets, and relax in our spa-inspired client lounges.'
    }
  ];

  return (
    <section id="about-us" className="py-24 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-luxury-teal/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10Heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Philosophy block */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-teal uppercase block">
                The FLOSS Dental Difference
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-luxury-navy">
                Crafting Majestic Smile <br />
                <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-luxury-navy to-luxury-gold">
                  Confidence Transformations
                </span>
              </h2>
              <div className="w-16 h-0.5 bg-luxury-gold mt-2" />
            </div>

            <p className="font-sans text-xs leading-relaxed text-gray-600 font-medium whitespace-pre-line">
              At FLOSS Dental Magnolia, we have completely reimagined what a dental visit should represent. We believe you deserve more than generic, rushed cleanings or high-anxiety clinical waiting rooms. 
              {"\n\n"}
              Our clinic represents a tranquil wellness boutique designed to nurture your emotional and systemic health. We merge master-level cosmetic craftsmanship, state-of-the-art computer dental technologies, and a hospitality-focused patient welcome to deliver stunning smiles that radiate authentic confidence.
            </p>

            {/* Quick checkoff benefits list */}
            <div id="difference-badges" className="space-y-2 pt-2">
              {[
                'Compassionate, custom-built dental treatment pacing',
                'Advanced 3D digital impressions—no messy pastes ever',
                'Comprehensive restorative, cosmetic & implant surgery'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700 font-sans font-medium">
                  <div className="p-0.5 rounded-full bg-luxury-teal/10">
                    <Check size={12} className="text-luxury-teal" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Values grid bento cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div
                  id={`value-card-${i}`}
                  key={i}
                  className="p-6 rounded-3xl bg-white border border-gray-100/80 hover:border-luxury-teal/20 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4"
                >
                  <div className="w-10 h-10 rounded-2xl bg-luxury-teal/5 flex items-center justify-center border border-luxury-teal/10">
                    {v.icon}
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="font-display font-semibold text-sm text-luxury-navy">
                      {v.title}
                    </h3>
                    <p className="font-sans text-[11px] leading-relaxed text-gray-500 font-medium">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro quote banner */}
            <div className="p-6 rounded-2xl bg-luxury-navy text-white flex items-center justify-between border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy via-luxury-teal/10 to-transparent pointer-events-none" />
              <div className="relative z-10 flex gap-4 items-center">
                <Sparkles className="text-luxury-gold shrink-0 animate-pulse" size={24} />
                <div>
                  <p className="text-[10px] uppercase font-sans tracking-widest text-[#a3b1c6]">Our Constant Mission</p>
                  <p className="font-serif italic text-xs text-white/90 mt-0.5">Where high-end clinical science matches luxury customer comfort.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
