import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Check, ExternalLink, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  onBookClick: () => void;
}

export default function ContactOffice({ onBookClick }: ContactProps) {
  const [directionMode, setDirectionMode] = useState<'standard' | 'interactive'>('standard');
  const [successMsg, setSuccessMsg] = useState(false);
  const [contactMail, setContactMail] = useState('');
  const [contactDetail, setContactDetail] = useState('');

  const hours = [
    { days: 'Monday', time: '8:00 AM - 5:00 PM', active: true },
    { days: 'Tuesday', time: '8:00 AM - 5:00 PM', active: true },
    { days: 'Wednesday', time: '8:00 AM - 5:00 PM', active: true },
    { days: 'Thursday', time: '8:00 AM - 5:00 PM', active: true },
    { days: 'Friday', time: '8:00 AM - 2:00 PM', active: true },
    { days: 'Saturday', time: 'By Appointment Only', active: false },
    { days: 'Sunday', time: 'Closed', active: false }
  ];

  const handleMessageSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMail) return;
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setContactMail('');
      setContactDetail('');
    }, 4500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#f8fafc] relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-luxury-teal/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10Heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Office details lists / Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-teal uppercase block">
                Visit our Practice
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-luxury-navy">
                Contact & Location <br />
                <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-luxury-navy to-luxury-gold">
                  Details
                </span>
              </h2>
              <div className="w-16 h-0.5 bg-luxury-gold mt-2" />
            </div>

            {/* Quick Actions Panel */}
            <div className="grid grid-cols-1 gap-4">
              {/* Address Card */}
              <div className="flex gap-4 p-5 rounded-3xl bg-white border border-gray-100 shadow-sm hover:border-luxury-teal/15 transition-all duration-300">
                <div className="w-10 h-10 rounded-2xl bg-luxury-teal/5 flex items-center justify-center text-luxury-teal border border-luxury-teal/10 shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="space-y-1">
                  <p className="font-display font-bold text-xs text-luxury-navy uppercase tracking-wider">Office Address</p>
                  <p className="font-sans text-xs text-gray-600 font-medium leading-relaxed">
                    6318 FM 1488 #120 <br />
                    Magnolia, TX 77354
                  </p>
                  <a
                    href="https://maps.google.com/?q=6318+FM+1488+120+Magnolia+TX+77354"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-luxury-gold hover:text-luxury-gold-dark mt-1"
                  >
                    <span>Google Directions Map</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              {/* Direct call card */}
              <div className="flex gap-4 p-5 rounded-3xl bg-white border border-gray-100 shadow-sm hover:border-luxury-teal/15 transition-all duration-300">
                <div className="w-10 h-10 rounded-2xl bg-luxury-teal/5 flex items-center justify-center text-luxury-teal border border-luxury-teal/10 shrink-0">
                  <Phone size={18} />
                </div>
                <div className="space-y-1">
                  <p className="font-display font-bold text-xs text-luxury-navy uppercase tracking-wider">Direct Concierge Telephone</p>
                  <p className="font-sans text-xs text-gray-600 font-medium leading-relaxed">
                    <a href="tel:9367036173" className="text-luxury-navy hover:text-luxury-teal font-extrabold text-sm transition-colors">
                      (936) 703-6173
                    </a>
                  </p>
                  <p className="text-[10px] text-gray-400 font-sans mt-0.5">Call or text anytime-24h support response.</p>
                </div>
              </div>

              {/* Direct Mail card */}
              <div className="flex gap-4 p-5 rounded-3xl bg-white border border-gray-100 shadow-sm hover:border-luxury-teal/15 transition-all duration-300">
                <div className="w-10 h-10 rounded-2xl bg-luxury-teal/5 flex items-center justify-center text-luxury-teal border border-luxury-teal/10 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="space-y-1">
                  <p className="font-display font-bold text-xs text-luxury-navy uppercase tracking-wider">Email Correspondence</p>
                  <p className="font-sans text-xs text-gray-600 font-medium leading-relaxed">
                    <a href="mailto:infomagnolia@flossdental.com" className="hover:text-luxury-teal transition-colors">
                      infomagnolia@flossdental.com
                    </a>
                  </p>
                  <p className="text-[10px] text-gray-400 font-sans mt-0.5">Responds within 1 business day.</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Microform built-in */}
            <div className="bg-white/50 border border-gray-100 p-6 rounded-3xl space-y-4">
              <h4 className="font-display font-bold text-xs text-luxury-navy uppercase">Have a fast question?</h4>
              
              <form onSubmit={handleMessageSend} className="space-y-3">
                <input
                  type="email"
                  placeholder="Your active Email"
                  className="w-full p-2.5 border border-gray-200 rounded-xl text-xs bg-white focus:outline-none focus:border-luxury-teal text-luxury-navy"
                  value={contactMail}
                  onChange={(e) => setContactMail(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Your question detailed..."
                  className="w-full p-2.5 border border-gray-200 rounded-xl text-xs bg-white focus:outline-none focus:border-luxury-teal h-14 resize-none text-luxury-navy"
                  value={contactDetail}
                  onChange={(e) => setContactDetail(e.target.value)}
                  required
                />
                
                <button
                  type="submit"
                  className="w-full py-2 bg-luxury-navy hover:bg-luxury-teal text-white font-display text-[11px] font-semibold tracking-wider uppercase rounded-xl transition-all duration-300"
                >
                  Send Question
                </button>
              </form>

              <AnimatePresence>
                {successMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="p-3 bg-emerald-100 text-emerald-800 text-[11px] font-sans rounded-xl text-center border border-emerald-250/50"
                  >
                    ✔ Thank you! Our support coordinator will answer immediately.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Office Hours & Mock Map Interactive Canvas */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Elegant Office hours listing */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 border-b border-gray-100 pb-3">
                <Clock size={16} className="text-luxury-teal" />
                <h3 className="font-display font-bold text-xs text-luxury-navy uppercase tracking-wider">Weekly Office Hours</h3>
              </div>

              <div className="space-y-2">
                {hours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-xs text-gray-700 py-1 border-b border-gray-50 last:border-0">
                    <span className="font-medium">{item.days}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-gray-500 font-medium">{item.time}</span>
                      {item.active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Interactive Map Panel */}
            <div className="rounded-[32px] overflow-hidden border border-gray-150 shadow-2xl bg-white relative">
              <div className="p-4 border-b border-gray-150 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-luxury-teal" />
                  <span className="font-display font-bold text-xs text-luxury-navy">Magnolia neighborhood context</span>
                </div>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setDirectionMode('standard')}
                    className={`text-[10px] font-sans px-2.5 py-1 rounded-full border transition-all ${
                      directionMode === 'standard' ? 'bg-luxury-navy text-white border-luxury-navy' : 'border-gray-200'
                    }`}
                  >
                    Locator Map
                  </button>
                  <button
                    onClick={() => setDirectionMode('interactive')}
                    className={`text-[10px] font-sans px-2.5 py-1 rounded-full border transition-all ${
                      directionMode === 'interactive' ? 'bg-luxury-navy text-white border-luxury-navy' : 'border-gray-200'
                    }`}
                  >
                    Landmarks
                  </button>
                </div>
              </div>

              {/* Map Canvas Visual Mockup */}
              <div className="aspect-[16/9] w-full bg-[#f4f3f0] relative flex items-center justify-center overflow-hidden">
                {/* Styled geographic lines mockup */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <div className="absolute top-1/4 left-0 right-0 h-4 bg-gray-400 rotate-6" />
                  <div className="absolute bottom-1/3 left-0 right-0 h-8 bg-gray-400 -rotate-12" />
                  <div className="absolute left-1/3 top-0 bottom-0 w-6 bg-gray-400 rotate-45" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-gray-400 -rotate-45" />
                </div>

                {directionMode === 'standard' ? (
                  <div className="text-center relative z-10 space-y-4 px-6">
                    {/* The marker pinpoint */}
                    <div className="relative inline-block animate-bounce text-luxury-teal">
                      <MapPin size={36} fill="rgba(13,148,136,0.25)" />
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-display font-extrabold text-sm text-luxury-navy">FLOSS Dental Magnolia</h4>
                      <p className="text-[10px] text-gray-500 font-sans">Located conveniently inside the Magnolia medical block, FM 1488.</p>
                    </div>

                    <a
                      href="https://maps.google.com/?q=6318+FM+1488+120+Magnolia+TX+77354"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-luxury-teal text-white text-[10px] font-display font-semibold tracking-wider uppercase rounded-full shadow hover:bg-luxury-navy transition-all duration-300"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                ) : (
                  <div className="text-left relative z-10 p-6 space-y-4 w-full">
                    <p className="text-[10px] uppercase font-sans tracking-widest text-[#8a98a8] font-bold">Key Proximities:</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-sans">
                      <div className="p-3 bg-white/95 rounded-xl border border-gray-150 space-y-1">
                        <p className="font-bold text-luxury-navy">Conroe Transit Point</p>
                        <p className="text-gray-500">18 minutes east via route FM-1488.</p>
                      </div>
                      <div className="p-3 bg-white/95 rounded-xl border border-gray-150 space-y-1">
                        <p className="font-bold text-luxury-navy">The Woodlands Loop</p>
                        <p className="text-gray-500">15 minutes southeast via Interstate-45.</p>
                      </div>
                      <div className="p-3 bg-white/95 rounded-xl border border-gray-150 space-y-1">
                        <p className="font-bold text-luxury-navy">Magnolia Town Commons</p>
                        <p className="text-gray-500">2 minutes away, adjacent to major shopping blocks.</p>
                      </div>
                      <div className="p-3 bg-white/95 rounded-xl border border-gray-150 space-y-1">
                        <p className="font-bold text-luxury-navy">Complimentary Parking</p>
                        <p className="text-gray-500">Large private off-street parking facilities.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
