import React from 'react';
import { Phone, Mail, MapPin, Star, ShieldCheck, Heart, Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onBookClick: () => void;
  onNavigatePage: (pageId: string) => void;
}

export default function Footer({ onBookClick, onNavigatePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-navy text-white relative pt-20 pb-10 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-luxury-teal/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Grid content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
        
        {/* Brand Description Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-xl inline-block shadow-md">
              <img 
                src="https://flossdentalmagnolia.com/wp-content/uploads/2023/12/floss-dental-of-magnolia-tx-logo.png" 
                alt="FLOSS Dental of Magnolia TX" 
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-sm">
            Experience the evolution of wellness-centric dentistry here in Magnolia, TX. We marry clinical mastery and same-day dental computer sciences to elevate your smile aesthetic in total serenity.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://www.facebook.com/FlossDentaMagnoliaTX" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-luxury-teal border border-white/10 hover:border-luxury-teal flex items-center justify-center transition-all duration-300 group"
              aria-label="Facebook Page"
            >
              <Facebook size={14} className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.instagram.com/drmiketran/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-luxury-teal border border-white/10 hover:border-luxury-teal flex items-center justify-center transition-all duration-300 group"
              aria-label="Instagram Profile"
            >
              <Instagram size={14} className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.youtube.com/channel/UCFnQtiVwtlIwLo-KoNp_k4g" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-luxury-teal border border-white/10 hover:border-luxury-teal flex items-center justify-center transition-all duration-300 group"
              aria-label="YouTube Channel"
            >
              <Youtube size={14} className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://in.pinterest.com/flossdentalmagnolia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-luxury-teal border border-white/10 hover:border-luxury-teal flex items-center justify-center transition-all duration-300 group text-xs font-bold text-gray-300 hover:text-white transition-colors"
              aria-label="Pinterest Profile"
            >
              P
            </a>
            <a 
              href="https://www.yelp.com/biz/floss-dental-magnolia-magnolia-5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-luxury-teal border border-white/10 hover:border-luxury-teal flex items-center justify-center transition-all duration-300 group text-[10px] font-extrabold text-gray-300 hover:text-white transition-colors"
              aria-label="Yelp Review Page"
            >
              Y
            </a>
          </div>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 py-1.5 px-3 rounded-full text-xs">
              <Star size={12} className="text-luxury-gold fill-current" />
              <span className="font-sans text-[10px] font-bold text-gray-200">5.0 Star Rated on Google</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 py-1.5 px-3 rounded-full text-xs">
              <ShieldCheck size={12} className="text-luxury-teal-light" />
              <span className="font-sans text-[10px] font-bold text-gray-200">ADA Compliant Practice</span>
            </div>
          </div>
        </div>

        {/* Treatments Quick-Nav Menu Columns */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-display text-xs font-bold uppercase tracking-widest text-luxury-gold-light border-b border-white/5 pb-2">Treatments Scale</h4>
          <ul className="space-y-2 text-xs font-sans text-gray-400">
            {[
              { label: 'Full Implants', page: 'service-implant-full' },
              { label: 'Porcelain Veneers', page: 'service-veneers' },
              { label: 'Invisalign Aligners', page: 'service-invisalign' },
              { label: 'Same-Day Crowns', page: 'service-same-day-crowns' },
              { label: 'IV & Nitrous Sedation', page: 'service-iv-sedation' },
              { label: 'Emergency Dentistry', page: 'service-emergency' }
            ].map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => onNavigatePage(item.page)}
                  className="hover:text-white transition-colors text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* General Quick links Column */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-display text-xs font-bold uppercase tracking-widest text-luxury-gold-light border-b border-white/5 pb-2">Information</h4>
          <ul className="space-y-2 text-xs font-sans text-gray-400">
            {[
              { label: 'Why Us', page: 'why-us' },
              { label: 'Dr. Catherine Castillo', page: 'about-castillo' },
              { label: 'Dr. Mike Tran', page: 'about-tran' },
              { label: 'Dental Blog', page: 'resource-blog' },
              { label: 'Testimonials', page: 'resource-testimonials' },
              { label: 'Social Media & Videos', page: 'resource-social-media' },
            ].map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => onNavigatePage(item.page)}
                  className="hover:text-white transition-colors text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Office details / Contact info Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-display text-xs font-bold uppercase tracking-widest text-luxury-gold-light border-b border-white/5 pb-2">Magnolia Practice</h4>
          
          <div className="space-y-3.5 text-xs text-gray-400 font-sans">
            <div className="flex gap-2.5">
              <MapPin size={14} className="text-luxury-gold shrink-0 mt-0.5" />
              <span>6318 FM 1488 #120, Magnolia, TX 77354</span>
            </div>
            
            <div className="flex gap-2.5">
              <Phone size={14} className="text-luxury-gold shrink-0 mt-0.5" />
              <span>
                Phone: <a href="tel:9367036173" className="hover:text-white transition-colors font-semibold text-white">(936) 703-6173</a>
              </span>
            </div>

            <div className="flex gap-2.5">
              <Mail size={14} className="text-luxury-gold shrink-0 mt-0.5" />
              <span>
                Email: <a href="mailto:infomagnolia@flossdental.com" className="hover:text-white transition-colors">infomagnolia@flossdental.com</a>
              </span>
            </div>
          </div>

          {/* Quick scheduling booking button inside footer */}
          <div className="pt-3">
            <button
              onClick={onBookClick}
              className="px-5 py-2.5 bg-luxury-teal hover:bg-white text-white hover:text-luxury-navy text-[11px] font-display font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 w-full text-center"
            >
              Reserve visit online 24/7
            </button>
          </div>
        </div>

      </div>

      {/* Bottom copyrights and compliance rules */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-sans text-gray-500">
        
        <p>© {currentYear} FLOSS Dental Magnolia. All Rights Reserved. Designed to luxury standards.</p>

        {/* Policy and ADA descriptors */}
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <button onClick={() => onNavigatePage('why-us')} className="hover:text-white transition-colors">Privacy Policy</button>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <button onClick={() => onNavigatePage('contact-us')} className="hover:text-white transition-colors">Contact Terms</button>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors" title="Visual and keyboard controls enabled">
            <Heart size={10} className="text-rose-500 fill-current animate-pulse" />
            <span>Accessibility Options</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
