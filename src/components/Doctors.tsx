import React, { useState } from 'react';
import { ShieldCheck, GraduationCap, Award, Compass, Heart, Activity, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { doctors } from '../data';

export default function Doctors() {
  const [selectedDoctorIdx, setSelectedDoctorIdx] = useState(0);

  const activeDoc = doctors[selectedDoctorIdx];

  return (
    <section id="doctors" className="py-24 bg-gradient-to-b from-white to-[#f8fafc] relative overflow-hidden">
      {/* Decorative vector light highlights */}
      <div className="absolute top-1/2 left-5 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-luxury-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-teal uppercase">
            Artistic Clinical Leaders
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold tracking-tight text-luxury-navy">
            Luxury Dental Masters <br />
            <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-luxury-navy to-luxury-gold">
              Dedicated to You
            </span>
          </p>
          <div className="w-16 h-1 bg-luxury-gold mx-auto rounded-full mt-2" />
          <p className="text-gray-500 font-sans text-sm max-w-xl mx-auto">
            Meet the elite clinicians who marry medical precision with exquisite artistic design to create stellar, comfortable patient journeys.
          </p>
        </div>

        {/* Doctor Selector Tabs */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {doctors.map((doc, idx) => (
            <button
              id={`doctor-tab-${idx}`}
              key={idx}
              onClick={() => setSelectedDoctorIdx(idx)}
              className={`px-6 py-3 rounded-full font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                selectedDoctorIdx === idx
                  ? 'bg-luxury-navy text-white shadow-lg shadow-navy-950/20'
                  : 'bg-white text-gray-500 hover:text-luxury-teal border border-gray-150 hover:bg-gray-50'
              }`}
            >
              <ShieldCheck size={14} className={selectedDoctorIdx === idx ? 'text-luxury-gold-light' : 'text-gray-400'} />
              <span>{doc.name.split(' ')[0] + ' ' + doc.name.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Profile Details (Animated on Toggle) */}
        <AnimatePresence mode="wait">
          <motion.div
            id={`doctor-profile-${selectedDoctorIdx}`}
            key={selectedDoctorIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            {/* Left Column: Portrait & Credential Highlights */}
            <div className="lg:col-span-5 relative">
              {/* Outer decorative gold/teal gradient boundary */}
              <div className="absolute inset-0 bg-gradient-to-tr from-luxury-teal/10 via-luxury-gold/5 to-transparent rounded-[32px] rotate-1 scale-103 blur-md" />
              
              {/* Picture Frame */}
              <div className="relative z-10 rounded-[32px] overflow-hidden border-2 border-white aspect-[3/4] shadow-2xl max-w-md mx-auto">
                <img 
                  src={activeDoc.image} 
                  alt={activeDoc.name} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Floating Trust Indicator Panel */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border-white/40 shadow-xl flex items-center gap-3">
                  <div className="p-2 bg-luxury-teal text-white rounded-xl">
                    <Award size={20} className="className" />
                  </div>
                  <div>
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
                    </div>
                    <p className="text-[10px] uppercase font-sans tracking-wider text-luxury-navy font-bold mt-0.5">Top Magnolia Dentist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Biography & Philosophy details */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Intro Roles copy */}
              <div className="space-y-2">
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-luxury-navy">
                  {activeDoc.name}
                </h3>
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-luxury-gold-dark">
                  {activeDoc.role}
                </p>
                <div className="w-12 h-1 bg-luxury-teal rounded-full mt-2" />
              </div>

              {/* Biography Details */}
              <p className="font-sans text-xs leading-relaxed text-gray-600 font-medium whitespace-pre-line">
                {activeDoc.bio}
              </p>

              {/* Doctor Credentials Sub-Section */}
              <div className="space-y-3 pt-2">
                <h4 className="font-display text-[10px] uppercase tracking-widest text-[#8293a6] font-bold flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-luxury-teal" />
                  Educational Credentials & Certifications
                </h4>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {activeDoc.credentials.map((cred, i) => (
                    <li key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-gray-100 text-[11px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-1.5 shrink-0" />
                      <span className="font-sans font-medium leading-normal">{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical Philosophy Card */}
              <div className="p-5 rounded-2xl bg-luxury-gold/5 border border-luxury-gold/15 space-y-2">
                <h4 className="font-display text-[10px] uppercase tracking-widest text-luxury-gold-dark font-extrabold flex items-center gap-1.5">
                  <Compass size={14} />
                  Practice Philosophy
                </h4>
                <p className="font-serif italic text-xs leading-relaxed text-luxury-navy/90">
                  "{activeDoc.philosophy}"
                </p>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
