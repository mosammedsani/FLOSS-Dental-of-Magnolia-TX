import React from 'react';
import { 
  ArrowLeft, GraduationCap, Award, Compass, Star, Heart, CheckCircle, 
  MapPin, Phone, ShieldCheck, Landmark 
} from 'lucide-react';
import { doctors } from '../data';

interface AboutDoctorsProps {
  doctorName: 'mike-tran' | 'catherine-castillo';
  onBack: () => void;
  onBookClick: () => void;
}

export default function AboutDoctors({ doctorName, onBack, onBookClick }: AboutDoctorsProps) {
  // Scroll to top when loading
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [doctorName]);

  const doc = doctorName === 'mike-tran' ? doctors[0] : doctors[1];

  // Specific high-resolution avatars / clinic context photos
  const avatarImage = doc.image;

  const isMike = doctorName === 'mike-tran';

  return (
    <div className="bg-luxury-neutral min-h-screen pt-28 pb-20 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-luxury-teal/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs text-luxury-navy/60 hover:text-luxury-teal font-sans font-bold uppercase tracking-wider mb-8 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Doctor Main Header Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-gray-150 pb-16">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 top-1/4 bg-gradient-to-t from-luxury-navy/80 to-transparent rounded-[32px] mix-blend-multiply z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-luxury-teal/15 via-luxury-gold/5 to-transparent rounded-[32px] rotate-2 scale-103 blur-md" />
              
              <div className="rounded-[32px] overflow-hidden border-4 border-white shadow-2xl aspect-[4/5] relative">
                <img 
                  src={avatarImage} 
                  alt={doc.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Trust badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border-white/40 shadow-xl flex items-center gap-3 z-20">
                  <div className="p-2.5 bg-luxury-teal text-white rounded-xl">
                    <Award size={18} />
                  </div>
                  <div>
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
                    </div>
                    <p className="text-[10px] uppercase font-sans tracking-widest text-luxury-navy font-bold mt-0.5">Top Rated Specialist - Magnolia, TX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contacts Panel inside bio */}
            <div className="p-6 bg-white border border-gray-100 rounded-3xl space-y-4">
              <h4 className="font-display text-[10px] uppercase tracking-widest text-[#8293a6] font-bold">Consultation Hours</h4>
              <div className="space-y-2 text-xs font-sans text-gray-600 font-medium pb-2 border-b border-gray-50">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span className="text-luxury-navy">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span className="text-luxury-navy">8:00 AM - 2:00 PM</span>
                </div>
              </div>
              <button
                onClick={onBookClick}
                className="w-full py-2.5 bg-luxury-navy hover:bg-luxury-teal text-white text-xs font-display font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                Schedule with {doc.name.split(' ')[1]}
              </button>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <span className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-gold-dark uppercase block">
                {isMike ? 'Founder & Dental Artist' : 'Associate Dentist & Smile Architect'}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold text-luxury-navy tracking-tight leading-none">
                {doc.name}
              </h1>
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-luxury-teal">
                {doc.role}
              </p>
              <div className="w-16 h-1 bg-luxury-teal rounded-full mt-2" />
            </div>

            <div className="prose prose-sm font-sans text-xs text-gray-600 font-medium leading-relaxed space-y-4 max-w-none">
              <p className="whitespace-pre-line leading-relaxed">
                {doc.bio}
              </p>
              
              {isMike ? (
                <p>
                  Under his visionary guidance, FLOSS Dental Magnolia has integrated high-definition 3D CBCT bone scanners, same-day digital CEREC computer milling, and painless Airflow hygiene techniques to build the top dental healthcare sanctuary in Magnolia and Conroe, Texas.
                </p>
              ) : (
                <p>
                  Dr. Castillo believes that dental visits should mirror luxury spa routines. She listens meticulously, designs customized comfort pathways, and integrates advanced laser therapies that allow patients to leave their appointments with stunning confidence and complete well-being.
                </p>
              )}
            </div>

            {/* Practical credentials */}
            <div className="space-y-4">
              <h3 className="font-display text-xs uppercase tracking-widest text-luxury-navy font-bold flex items-center gap-2">
                <GraduationCap size={16} className="text-luxury-teal" />
                Specializations & Elite Memberships
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doc.credentials.map((cred, idx) => (
                  <div key={idx} className="flex gap-2.5 p-3.5 bg-white border border-gray-100 rounded-2xl items-center">
                    <CheckCircle size={14} className="text-luxury-teal shrink-0" />
                    <span className="font-sans text-xs text-gray-700 font-semibold">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy block */}
            <div className="p-6 bg-gradient-to-br from-luxury-gold/5 to-transparent border border-luxury-gold/15 rounded-3xl space-y-3">
              <h3 className="font-display text-[10px] uppercase tracking-widest text-luxury-gold-dark font-extrabold flex items-center gap-1.5">
                <Compass size={14} />
                Signature Practice Philosophy
              </h3>
              <p className="font-serif italic text-xs leading-relaxed text-luxury-navy/90">
                "{doc.philosophy}"
              </p>
            </div>

            {/* Expert highlights timeline */}
            <div className="space-y-4">
              <h3 className="font-display text-xs uppercase tracking-widest text-luxury-navy font-bold">
                Clinical Focus Fields
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {isMike ? (
                  <>
                    <div className="p-4 bg-white border border-gray-150 rounded-2xl">
                      <p className="font-display font-bold text-xs text-luxury-navy">Dental Implants</p>
                      <p className="text-[10px] text-gray-500 font-sans mt-1">ICOI Fellow specialty implant setups, All-on-4, and bone preservation.</p>
                    </div>
                    <div className="p-4 bg-white border border-gray-150 rounded-2xl">
                      <p className="font-display font-bold text-xs text-luxury-navy">CEREC Milling</p>
                      <p className="text-[10px] text-gray-500 font-sans mt-1">Same-day customized computer crowns design and immediate placement.</p>
                    </div>
                    <div className="p-4 bg-white border border-gray-150 rounded-2xl">
                      <p className="font-display font-bold text-xs text-luxury-navy">IV Conscious Sedation</p>
                      <p className="text-[10px] text-gray-500 font-sans mt-1">Safely monitored twilight sleep pathways for deep dentist phobias.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-4 bg-white border border-gray-150 rounded-2xl">
                      <p className="font-display font-bold text-xs text-luxury-navy">Cosmetic Framing</p>
                      <p className="text-[10px] text-gray-500 font-sans mt-1">Bespoke customized porcelain veneers, digital smiles and whitening.</p>
                    </div>
                    <div className="p-4 bg-white border border-gray-150 rounded-2xl">
                      <p className="font-display font-bold text-xs text-luxury-navy">Laser Dental Therapy</p>
                      <p className="text-[10px] text-gray-500 font-sans mt-1">High-end precise micro-laser procedures for gum recovery.</p>
                    </div>
                    <div className="p-4 bg-white border border-gray-150 rounded-2xl">
                      <p className="font-display font-bold text-xs text-luxury-navy">Preventive Wellness</p>
                      <p className="text-[10px] text-gray-500 font-sans mt-1">Comprehensive head examinations and Airflow Biofilm clearings.</p>
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
