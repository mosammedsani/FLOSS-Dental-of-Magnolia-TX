import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import AboutUs from './components/AboutUs';
import OfficeTour from './components/OfficeTour';
import SmileGallery from './components/SmileGallery';
import YoutubeVideos from './components/YoutubeVideos';
import Testimonials from './components/Testimonials';
import ContactOffice from './components/ContactOffice';
import Footer from './components/Footer';
import AppointmentLoader from './components/AppointmentLoader';

// Sub-pages imports
import ServiceDetail from './components/ServiceDetail';
import AboutDoctors from './components/AboutDoctors';
import WhyUsPage from './components/WhyUsPage';
import ResourcesPage from './components/ResourcesPage';

import { Calendar, Phone, Star, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Automatically scroll to the top of the viewport when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  // Unified page navigation handler that supports both layout transitions and home-scrolling
  const handlePageNavigation = (pageId: string) => {
    if (pageId === 'home') {
      setCurrentPage('home');
      return;
    }

    if (pageId === 'contact-us') {
      setCurrentPage('contact-us');
      return;
    }

    setCurrentPage(pageId);
  };

  // Render the appropriate sub-page or landing section stack
  const renderCurrentPage = () => {
    // 1. Doctor Bio pages
    if (currentPage === 'about-castillo') {
      return (
        <AboutDoctors 
          doctorName="catherine-castillo" 
          onBack={() => setCurrentPage('home')} 
          onBookClick={() => setIsBookingOpen(true)} 
        />
      );
    }
    if (currentPage === 'about-tran') {
      return (
        <AboutDoctors 
          doctorName="mike-tran" 
          onBack={() => setCurrentPage('home')} 
          onBookClick={() => setIsBookingOpen(true)} 
        />
      );
    }

    // 2. Twenty detailed treatment pages
    if (currentPage.startsWith('service-')) {
      return (
        <ServiceDetail 
          serviceId={currentPage} 
          onBack={() => setCurrentPage('home')} 
          onBookClick={() => setIsBookingOpen(true)} 
        />
      );
    }

    // 3. Why Us
    if (currentPage === 'why-us') {
      return (
        <WhyUsPage 
          onBack={() => setCurrentPage('home')} 
          onBookClick={() => setIsBookingOpen(true)} 
        />
      );
    }

    // 4. Resources Pages (Blog, Testimonials, Social, Financing)
    if (currentPage.startsWith('resource-')) {
      const tab = currentPage.replace('resource-', '') as 'blog' | 'testimonials' | 'social-media' | 'financing';
      return (
        <ResourcesPage 
          activeTab={tab}
          onBack={() => setCurrentPage('home')} 
          onBookClick={() => setIsBookingOpen(true)}
          onNavigateTab={(selectedTab) => setCurrentPage(`resource-${selectedTab}`)}
        />
      );
    }

    // 5. Dedicated Contact Us Page
    if (currentPage === 'contact-us') {
      return (
        <div className="pt-24 bg-luxury-neutral">
          <ContactOffice onBookClick={() => setIsBookingOpen(true)} />
        </div>
      );
    }

    // 6. Home view with all widgets coordinated elegantly
    return (
      <main className="relative">
        {/* Interactive Cinematic Hero Block */}
        <Hero 
          onBookClick={() => setIsBookingOpen(true)} 
          onNavigateToServices={() => setCurrentPage('service-gbt')} 
        />

        {/* Dynamic Social Proof Snippet Banner under Hero */}
        <div id="quick-trust-banner" className="bg-white border-y border-gray-150 py-8 relative z-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="font-sans text-xs text-gray-600 font-bold tracking-wide uppercase">
                Rated 5.0 on Google Maps - The Top Cosmetic & Family Dentist in Magnolia, TX
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-[11px] font-sans font-bold text-luxury-navy uppercase tracking-widest">
              <span className="flex items-center gap-1.5 font-sans">🛡️ Advanced Dental Tech</span>
              <span className="flex items-center gap-1.5 font-sans">🛋️ Ultimate Patient Pampering</span>
              <span className="flex items-center gap-1.5 font-sans">💙 Companion Medical Ethics</span>
            </div>
          </div>
        </div>

        {/* Short inline preview of Treatments linking to dedicated pages */}
        <Services onBookClick={() => setIsBookingOpen(true)} />

        {/* Cinematic Clinical Leadership Profiles linking to Standalones */}
        <div className="py-2 border-b border-gray-100">
          <Doctors />
          <div className="text-center pb-12 bg-white">
            <div className="inline-flex gap-4">
              <button 
                onClick={() => setCurrentPage('about-castillo')}
                className="px-6 py-2.5 bg-luxury-navy hover:bg-luxury-teal text-white text-xs font-display font-medium uppercase tracking-wider rounded-xl transition shadow-md"
              >
                Meet Dr. Castillo
              </button>
              <button 
                onClick={() => setCurrentPage('about-tran')}
                className="px-6 py-2.5 border border-luxury-navy/20 hover:border-luxury-navy text-luxury-navy text-xs font-display font-medium uppercase tracking-wider rounded-xl transition"
              >
                Meet Dr. Tran
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Storytelling: Why FLOSS is Different */}
        <AboutUs />

        {/* Hospitality & Technological Office Experience */}
        <OfficeTour />

        {/* Smile Transformation Gallery */}
        <SmileGallery />

        {/* Cinematic YouTube Video Broadcast Library */}
        <YoutubeVideos />

        {/* Verified Patient Reviews Carousel */}
        <Testimonials />

        {/* Real-time Address, Location directions and Operational Details */}
        <ContactOffice onBookClick={() => setIsBookingOpen(true)} />

        {/* High Conversion Banner before footer */}
        <section id="cta-bottom" className="relative py-20 bg-gradient-to-r from-luxury-navy via-[#12223c] to-luxury-navy text-white text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(13,148,136,0.2),transparent_70%)] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-luxury-gold uppercase">Begin Your Personal Smile Evolution</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Ready for the World-Class Dental <br />
              <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-white via-luxury-gold-light to-luxury-gold">
                Experience You Deserve?
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-2" />
            <p className="font-sans text-xs text-gray-300 max-w-lg mx-auto">
              Secure our $199 New Patient Welcome Experience today. Our clinic guest coordinators are on standby to perfect your arrival.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <button
                id="cta-bottom-schedule"
                onClick={() => setIsBookingOpen(true)}
                className="px-8 py-3.5 bg-luxury-teal hover:bg-white text-white hover:text-luxury-navy font-display text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                24/7 Online Booking
              </button>
              
              <a
                href="tel:9367036173"
                className="px-8 py-3.5 border border-white/20 hover:border-white text-white hover:bg-white/5 font-sans text-xs font-bold uppercase transition-all duration-350 tracking-wider w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Phone size={14} className="text-luxury-gold-light animate-pulse" />
                <span>Call (936) 703-6173</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  };

  return (
    <div className="relative min-h-screen bg-luxury-neutral text-gray-800 antialiased selection:bg-luxury-teal-light selection:text-luxury-navy font-sans mb-0">
      
      {/* Floating Translucent Header Navigation */}
      <Navbar 
        onBookClick={() => setIsBookingOpen(true)} 
        onNavigatePage={handlePageNavigation} 
        currentPage={currentPage}
      />

      {/* Dynamic Main Body Content */}
      {renderCurrentPage()}

      {/* Sophisticated Dark Mode Luxury Footer */}
      <Footer 
        onBookClick={() => setIsBookingOpen(true)} 
        onNavigatePage={handlePageNavigation} 
      />

      {/* Sticky Bottom Mobilized App-Like Bar for Mobile Viewports */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40 flex gap-2">
        <a
          href="tel:9367036173"
          className="flex-1 py-3 bg-white border border-gray-200 text-luxury-navy text-[11px] font-sans font-bold uppercase rounded-2xl flex items-center justify-center gap-2 shadow-lg"
        >
          <Phone size={13} className="text-luxury-teal" />
          <span>Call (936) 703-6173</span>
        </a>
        <button
          id="mobile-sticky-book-cta"
          onClick={() => setIsBookingOpen(true)}
          className="flex-1 py-3 bg-luxury-teal text-white text-[11px] font-display font-bold uppercase rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-teal-950/20"
        >
          <Calendar size={13} />
          <span>Book Visit Online</span>
        </button>
      </div>

      {/* Multi-Step Appointments Onboarding modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <AppointmentLoader onClose={() => setIsBookingOpen(false)} />
        )}
      </AnimatePresence>

    </div>
  );
}
