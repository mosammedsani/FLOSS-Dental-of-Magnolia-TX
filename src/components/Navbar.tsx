import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ShieldCheck, ChevronDown, ChevronRight, Star, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onBookClick: () => void;
  onNavigatePage: (pageId: string) => void;
  currentPage: string;
}

export default function Navbar({ onBookClick, onNavigatePage, currentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Mobile accordion states
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = (pageId: string) => {
    setIsMobileMenuOpen(false);
    onNavigatePage(pageId);
  };

  const toggleMobileSection = (section: string) => {
    if (activeMobileSection === section) {
      setActiveMobileSection(null);
    } else {
      setActiveMobileSection(section);
    }
  };

  return (
    <>
      {/* Top Banner Accent: Trusted Local Healthcare & Special */}
      <div className="bg-luxury-navy text-white text-xs py-2 px-4 border-b border-white/5 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4 font-sans tracking-wide">
          <div className="flex items-center gap-1.5 text-white/90">
            <ShieldCheck id="badge-top" size={13} className="text-luxury-gold animate-pulse" />
            <span>Top-Rated Dental Practice in Magnolia, Conroe & The Woodlands, TX</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-luxury-gold-light font-semibold">⚡ SPECIAL: $199 New Patient Welcome Experience</span>
            <a href="tel:9367036173" className="hover:text-luxury-gold-light transition-colors flex items-center gap-1 font-mono">
              <Phone size={12} /> (936) 703-6173
            </a>
          </div>
        </div>
      </div>

      {/* Main Floating Transparent Header */}
      <header
        id="luxury-header"
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'top-4 mx-4 md:mx-6 max-w-[95%] xl:max-w-7xl xl:mx-auto rounded-full glass-panel shadow-emerald-950/5 shadow-xl px-6 py-2.5 border-white/40'
            : 'top-8 px-6 lg:px-12 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            id="brand-logo"
            onClick={() => handleNavItemClick('home')} 
            className="cursor-pointer group flex items-center pr-4"
          >
            {/* Official High-Quality Logo Image with perfect containment and dimensions */}
            <img 
              src="https://flossdentalmagnolia.com/wp-content/uploads/2023/12/floss-dental-of-magnolia-tx-logo.png" 
              alt="FLOSS Dental of Magnolia TX" 
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* Desktop Navigation Hierarchy */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-6">
            
            {/* Home Link */}
            <button
              onClick={() => handleNavItemClick('home')}
              className={`font-sans text-xs uppercase tracking-wider font-bold py-2 transition-all ${
                currentPage === 'home' ? 'text-luxury-teal border-b-2 border-luxury-gold' : 'text-luxury-navy/80 hover:text-luxury-teal'
              }`}
            >
              Home
            </button>

            {/* About (Dropdown) */}
            <div className="relative group py-2">
              <button
                className={`font-sans text-xs uppercase tracking-wider font-bold hover:text-luxury-teal flex items-center gap-1 ${
                  currentPage.startsWith('about-') ? 'text-luxury-teal' : 'text-luxury-navy/80'
                }`}
              >
                <span>About</span>
                <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Container */}
              <div className="absolute left-0 top-full mt-2 w-56 rounded-2xl bg-white border border-gray-100 shadow-xl p-2 hidden group-hover:block z-50">
                <button
                  onClick={() => handleNavItemClick('about-castillo')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-3 rounded-xl transition"
                >
                  Meet Dr. Catherine Castillo
                </button>
                <button
                  onClick={() => handleNavItemClick('about-tran')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-3 rounded-xl transition"
                >
                  Meet Dr. Mike Tran
                </button>
              </div>
            </div>

            {/* Services (Dropdown) */}
            <div className="relative group py-2">
              <button
                className={`font-sans text-xs uppercase tracking-wider font-bold hover:text-luxury-teal flex items-center gap-1 ${
                  currentPage.startsWith('service-') ? 'text-luxury-teal' : 'text-luxury-navy/80'
                }`}
              >
                <span>Services</span>
                <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Container (Dense structure with layered layout for Implants submenus) */}
              <div className="absolute left-0 top-full mt-2 w-72 rounded-2xl bg-white border border-gray-100 shadow-xl p-3 hidden group-hover:block z-50 max-h-[80vh] overflow-y-auto">
                <button
                  onClick={() => handleNavItemClick('service-emergency')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-2.5 rounded-xl transition"
                >
                  Emergency Dentistry
                </button>
                <button
                  onClick={() => handleNavItemClick('service-iv-sedation')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-2.5 rounded-xl transition"
                >
                  IV Sedation
                </button>
                <button
                  onClick={() => handleNavItemClick('service-nitrous-sedation')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-2.5 rounded-xl transition"
                >
                  Nitrous Sedation
                </button>

                {/* Dental Implant with Sub-Menu Items */}
                <div className="border-t border-b border-gray-50 my-1 py-1 space-y-1">
                  <div className="px-2.5 py-1.5 text-[10px] text-gray-400 font-sans font-bold uppercase tracking-wider flex items-center justify-between">
                    <span>Dental Implants Scale</span>
                    <ChevronDown size={10} />
                  </div>
                  <button
                    onClick={() => handleNavItemClick('service-implant-full')}
                    className="w-full text-left font-sans text-xs font-medium uppercase tracking-wider text-gray-600 hover:text-luxury-teal hover:bg-gray-50 pl-6 p-2 rounded-xl transition"
                  >
                    • Full Mouth Implants
                  </button>
                  <button
                    onClick={() => handleNavItemClick('service-implant-single')}
                    className="w-full text-left font-sans text-xs font-medium uppercase tracking-wider text-gray-600 hover:text-luxury-teal hover:bg-gray-50 pl-6 p-2 rounded-xl transition"
                  >
                    • Single Implant & Bridges
                  </button>
                  <button
                    onClick={() => handleNavItemClick('service-implant-dentures')}
                    className="w-full text-left font-sans text-xs font-medium uppercase tracking-wider text-gray-600 hover:text-luxury-teal hover:bg-gray-50 pl-6 p-2 rounded-xl transition"
                  >
                    • Custom Dentures
                  </button>
                  <button
                    onClick={() => handleNavItemClick('service-implant-snap-in')}
                    className="w-full text-left font-sans text-xs font-medium uppercase tracking-wider text-gray-600 hover:text-luxury-teal hover:bg-gray-50 pl-6 p-2 rounded-xl transition"
                  >
                    • Snap-In Implant Dentures
                  </button>
                  <button
                    onClick={() => handleNavItemClick('service-implant-cost')}
                    className="w-full text-left font-sans text-xs font-medium uppercase tracking-wider text-gray-600 hover:text-luxury-teal hover:bg-gray-50 pl-6 p-2 rounded-xl transition"
                  >
                    • Cost of Dental Implants
                  </button>
                </div>

                <button
                  onClick={() => handleNavItemClick('service-same-day-crowns')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-2.5 rounded-xl transition"
                >
                  Same-day Crowns
                </button>
                <button
                  onClick={() => handleNavItemClick('service-invisalign')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-2.5 rounded-xl transition"
                >
                  Invisalign
                </button>
                <button
                  onClick={() => handleNavItemClick('service-veneers')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-2.5 rounded-xl transition"
                >
                  Veneers
                </button>
                <button
                  onClick={() => handleNavItemClick('service-teeth-whitening')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-2.5 rounded-xl transition"
                >
                  Teeth Whitening
                </button>
                <button
                  onClick={() => handleNavItemClick('service-periodontal')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-2.5 rounded-xl transition"
                >
                  Periodontal Services
                </button>
                <button
                  onClick={() => handleNavItemClick('service-root-canal')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-2.5 rounded-xl transition"
                >
                  Root Canal
                </button>
                <button
                  onClick={() => handleNavItemClick('service-extractions')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-2.5 rounded-xl transition"
                >
                  Tooth Extractions
                </button>
                <button
                  onClick={() => handleNavItemClick('service-gbt')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-2.5 rounded-xl transition text-[#14b8a6]"
                >
                  Guided Biofilm Therapy 💫
                </button>
              </div>
            </div>

            {/* Why Us Link */}
            <button
              onClick={() => handleNavItemClick('why-us')}
              className={`font-sans text-xs uppercase tracking-wider font-bold py-2 transition-all ${
                currentPage === 'why-us' ? 'text-luxury-teal border-b-2 border-luxury-gold' : 'text-luxury-navy/80 hover:text-luxury-teal'
              }`}
            >
              Why Us
            </button>

            {/* Resources (Dropdown) */}
            <div className="relative group py-2">
              <button
                className={`font-sans text-xs uppercase tracking-wider font-bold hover:text-luxury-teal flex items-center gap-1 ${
                  currentPage.startsWith('resource-') ? 'text-luxury-teal' : 'text-luxury-navy/80'
                }`}
              >
                <span>Resources</span>
                <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Container */}
              <div className="absolute left-0 top-full mt-2 w-48 rounded-2xl bg-white border border-gray-100 shadow-xl p-2 hidden group-hover:block z-50">
                <button
                  onClick={() => handleNavItemClick('resource-blog')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-3 rounded-xl transition"
                >
                  Blog
                </button>
                <button
                  onClick={() => handleNavItemClick('resource-testimonials')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-3 rounded-xl transition"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => handleNavItemClick('resource-social-media')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-3 rounded-xl transition"
                >
                  Social Media & Videos
                </button>
                <button
                  onClick={() => handleNavItemClick('resource-financing')}
                  className="w-full text-left font-sans text-xs font-semibold uppercase tracking-wider text-luxury-navy hover:text-luxury-teal hover:bg-gray-50 p-3 rounded-xl transition"
                >
                  Financing
                </button>
              </div>
            </div>

            {/* Contact Link */}
            <button
              onClick={() => handleNavItemClick('contact-us')}
              className={`font-sans text-xs uppercase tracking-wider font-bold py-2 transition-all ${
                currentPage === 'contact-us' ? 'text-luxury-teal border-b-2 border-luxury-gold' : 'text-luxury-navy/80 hover:text-luxury-teal'
              }`}
            >
              Contact Us
            </button>

          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <a
              id="cta-call"
              href="tel:9367036173"
              className="hidden sm:flex items-center justify-center gap-1.5 px-4 py-2 border border-luxury-navy/15 hover:border-luxury-teal rounded-full font-sans text-xs font-bold text-luxury-navy bg-white/45 hover:bg-white transition-all duration-300"
            >
              <Phone size={13} className="text-luxury-teal animate-pulse" />
              <span>(936) 703-6173</span>
            </a>

            <button
              id="cta-schedule-navbar"
              onClick={onBookClick}
              className="relative overflow-hidden group px-4 py-2 rounded-full bg-luxury-teal hover:bg-luxury-navy text-white text-xs font-display font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5"
            >
              <Calendar size={13} />
              <span>Book Online</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-luxury-navy hover:bg-gray-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Screen Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-luxury-navy z-50 flex flex-col justify-between pt-24 pb-8 px-6 text-white overflow-y-auto"
          >
            {/* Header elements inside overlay */}
            <div className="absolute top-5 left-6 right-6 flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-lg tracking-widest text-white">FLOSS</span>
                <span className="font-sans text-[10px] tracking-widest text-white/50 font-medium uppercase">Dental</span>
              </div>
              <button
                id="close-mobile-menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full text-white/80 hover:bg-white/10 transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation list accordion layout */}
            <div className="flex flex-col gap-3 my-auto pt-16 pb-8">
              
              {/* Home */}
              <button
                onClick={() => handleNavItemClick('home')}
                className="w-full text-left font-display text-md uppercase tracking-wider text-white py-2.5 border-b border-white/5"
              >
                Home
              </button>

              {/* About Expandable */}
              <div className="border-b border-white/5 py-1">
                <button
                  onClick={() => toggleMobileSection('about')}
                  className="w-full flex justify-between items-center text-left font-display text-md uppercase tracking-wider text-white py-1.5"
                >
                  <span>About Us</span>
                  <ChevronDown size={14} className={`transform transition ${activeMobileSection === 'about' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileSection === 'about' && (
                  <div className="pl-4 py-2 flex flex-col gap-2.5 text-xs text-white/70">
                    <button onClick={() => handleNavItemClick('about-castillo')} className="text-left font-sans uppercase font-bold tracking-wider hover:text-luxury-gold-light">• Meet Dr. Castillo</button>
                    <button onClick={() => handleNavItemClick('about-tran')} className="text-left font-sans uppercase font-bold tracking-wider hover:text-luxury-gold-light">• Meet Dr. Mike Tran</button>
                  </div>
                )}
              </div>

              {/* Services Expandable */}
              <div className="border-b border-white/5 py-1">
                <button
                  onClick={() => toggleMobileSection('services')}
                  className="w-full flex justify-between items-center text-left font-display text-md uppercase tracking-wider text-white py-1.5"
                >
                  <span>Dental Services</span>
                  <ChevronDown size={14} className={`transform transition ${activeMobileSection === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileSection === 'services' && (
                  <div className="pl-4 py-2 flex flex-col gap-3 text-xs text-white/70 max-h-[40vh] overflow-y-auto">
                    <button onClick={() => handleNavItemClick('service-emergency')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• Emergency Dentistry</button>
                    <button onClick={() => handleNavItemClick('service-iv-sedation')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• IV Sedation</button>
                    <button onClick={() => handleNavItemClick('service-nitrous-sedation')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• Nitrous Sedation</button>
                    
                    <div className="border-y border-white/5 py-1.5 my-1 pl-2 space-y-2">
                      <p className="text-[10px] text-luxury-gold uppercase font-bold">Dental Implants:</p>
                      <button onClick={() => handleNavItemClick('service-implant-full')} className="text-left text-[11px] uppercase block hover:text-white">- Full Mouth Implants</button>
                      <button onClick={() => handleNavItemClick('service-implant-single')} className="text-left text-[11px] uppercase block hover:text-white">- Single Implants & Bridges</button>
                      <button onClick={() => handleNavItemClick('service-implant-dentures')} className="text-left text-[11px] uppercase block hover:text-white">- Custom Dentures</button>
                      <button onClick={() => handleNavItemClick('service-implant-snap-in')} className="text-left text-[11px] uppercase block hover:text-white">- Snap-In Implant Dentures</button>
                      <button onClick={() => handleNavItemClick('service-implant-cost')} className="text-left text-[11px] uppercase block hover:text-white">- Cost of Implants</button>
                    </div>

                    <button onClick={() => handleNavItemClick('service-same-day-crowns')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• Same-day Crowns</button>
                    <button onClick={() => handleNavItemClick('service-invisalign')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• Invisalign</button>
                    <button onClick={() => handleNavItemClick('service-veneers')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• Veneers</button>
                    <button onClick={() => handleNavItemClick('service-teeth-whitening')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• Teeth Whitening</button>
                    <button onClick={() => handleNavItemClick('service-periodontal')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• Periodontal Services</button>
                    <button onClick={() => handleNavItemClick('service-root-canal')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• Root Canal</button>
                    <button onClick={() => handleNavItemClick('service-extractions')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• Tooth Extractions</button>
                    <button onClick={() => handleNavItemClick('service-gbt')} className="text-left font-sans uppercase font-bold text-teal-400">• Guided Biofilm Therapy 💫</button>
                  </div>
                )}
              </div>

              {/* Why Us */}
              <button
                onClick={() => handleNavItemClick('why-us')}
                className="w-full text-left font-display text-md uppercase tracking-wider text-white py-2.5 border-b border-white/5"
              >
                Why Us
              </button>

              {/* Resources Expandable */}
              <div className="border-b border-white/5 py-1">
                <button
                  onClick={() => toggleMobileSection('resources')}
                  className="w-full flex justify-between items-center text-left font-display text-md uppercase tracking-wider text-white py-1.5"
                >
                  <span>Resources & Guides</span>
                  <ChevronDown size={14} className={`transform transition ${activeMobileSection === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileSection === 'resources' && (
                  <div className="pl-4 py-2 flex flex-col gap-2.5 text-xs text-white/70">
                    <button onClick={() => handleNavItemClick('resource-blog')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• Blog & News</button>
                    <button onClick={() => handleNavItemClick('resource-testimonials')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• Reviews Stories</button>
                    <button onClick={() => handleNavItemClick('resource-social-media')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• Social Video Gallery</button>
                    <button onClick={() => handleNavItemClick('resource-financing')} className="text-left font-sans uppercase hover:text-luxury-gold-light">• Cost & Financing Plans</button>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <button
                onClick={() => handleNavItemClick('contact-us')}
                className="w-full text-left font-display text-md uppercase tracking-wider text-white py-2.5 border-b border-white/5"
              >
                Contact Us
              </button>

            </div>

            {/* Bottom Actions inside menu */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:9367036173"
                className="w-full py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-sans font-bold text-center flex items-center justify-center gap-1.5"
              >
                <Phone size={13} className="text-luxury-gold-light" />
                <span>Call (936) 703-6173</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-2.5 bg-luxury-teal text-white text-xs font-display font-bold uppercase rounded-xl tracking-wider text-center"
              >
                Book Appointment Online
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
