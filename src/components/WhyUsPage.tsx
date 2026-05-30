import React from 'react';
import { 
  ArrowLeft, Star, Coffee, Heart, Cpu, ShieldCheck, Smile, Sparkles, 
  Tv, Compass 
} from 'lucide-react';

interface WhyUsPageProps {
  onBack: () => void;
  onBookClick: () => void;
}

export default function WhyUsPage({ onBack, onBookClick }: WhyUsPageProps) {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const features = [
    {
      icon: <Cpu size={24} className="text-luxury-teal" />,
      title: 'Same-Day Dental Tech',
      desc: 'No temporary crowns or gooey mold paste. Our CEREC® CAD/CAM computerized milling and iTero® hand scanners design and place premium vitrified ceramic restorations in one single, comfortable visit.',
      badge: 'CEREC Milling'
    },
    {
      icon: <Coffee size={24} className="text-luxury-gold-dark" />,
      title: 'Luxury Spa Pampering',
      desc: 'Unwind in a calming lounge stocked with premium refreshing beverages. Our private procedural suites feature ergonomic heated memory foam chairs, massage overlays, and noise-canceling headphones.',
      badge: 'Patient Pampering'
    },
    {
      icon: <ShieldCheck size={24} className="text-emerald-600" />,
      title: 'Painless Guided Biofilm Treatment',
      desc: 'We are proud pioneers of Swiss Guided Biofilm Therapy (GBT). Rest assured, your hygiene cleanings use lukewarm water spray and fine organic powder to gently dissolve stain biofilm without metal scrapers.',
      badge: 'Airflow GBT'
    },
    {
      icon: <Star size={24} className="text-amber-500" />,
      title: 'Certified Restorations Masters',
      desc: 'Our lead clinical doctors—Dr. Mike Tran and Dr. Catherine Castillo—hold advanced fellowships in implantology, cosmetic geometry, and intravenous sedation, ensuring master-level care.',
      badge: 'Top Specialists'
    },
    {
      icon: <Heart size={24} className="text-rose-500" />,
      title: 'Intravenous Sedation Sleep Dentistry',
      desc: 'Say goodbye to dentist anxiety. Our certified sedation practitioners deliver customizable IV Conscious Sedation, allowing you to slip into a peaceful, twilight state and wake up with no memory of discomfort.',
      badge: 'Zero Anxiety'
    },
    {
      icon: <Smile size={24} className="text-sky-500" />,
      title: 'Flexible Insurance Coordination',
      desc: 'We provide itemized, transparent quotes with no hidden fees. We work with all major PPO insurance plans and offer interest-free CareCredit options starting as low as $49 a month.',
      badge: 'Financial Peace'
    }
  ];

  return (
    <div className="bg-luxury-neutral min-h-screen pt-28 pb-20 relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-10 left-5 w-80 h-80 bg-luxury-teal/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-5 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs text-luxury-navy/60 hover:text-luxury-teal font-sans font-bold uppercase tracking-wider mb-8 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Section Header */}
        <div className="space-y-4 mb-16 text-center">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-teal uppercase block">
            Why FLOSS Dental Magnolia
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-luxury-navy tracking-tight">
            Redefining Modern Dentistry <br />
            <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-luxury-navy to-luxury-gold">
              as Elegant Wellness
            </span>
          </h1>
          <div className="w-16 h-1 bg-luxury-gold mx-auto rounded-full mt-4" />
          <p className="text-gray-500 font-sans text-xs max-w-xl mx-auto leading-relaxed">
            Discover why our patients consistently rate us 5.0 stars on Google. We combine master artistry, same-day digital dental computer technologies, and a peaceful spa aesthetic.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-luxury-teal/20 transition-all shadow-sm hover:shadow-xl space-y-5 group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider text-gray-400 group-hover:text-luxury-gold transition-colors">
                {feat.badge}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                {feat.icon}
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-luxury-navy group-hover:text-luxury-teal transition-colors">
                  {feat.title}
                </h3>
                <p className="font-sans text-xs text-gray-500 font-medium leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Area */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-luxury-navy to-luxury-navy-light text-white text-center space-y-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(13,148,136,0.15),transparent_70%)] pointer-events-none" />
          <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-luxury-gold">Claim Your Welcome Special Today</p>
          <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight">Experience $199 New Patient Welcome Invitation</h2>
          <p className="font-sans text-xs text-gray-300 max-w-md mx-auto">
            Includes custom thorough dental evaluation, HD digital radiographs, physical diagnostic scans, and relaxing professional sanitation scan.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onBookClick}
              className="px-6 py-2.5 bg-luxury-teal hover:bg-white text-white hover:text-luxury-navy text-xs font-display font-semibold uppercase tracking-wider rounded-full transition-colors"
            >
              Verify My Insurance & Book
            </button>
            <a
              href="tel:9367036173"
              className="px-6 py-2.5 border border-white/20 hover:border-white text-white text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Call (936) 703-6173</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
