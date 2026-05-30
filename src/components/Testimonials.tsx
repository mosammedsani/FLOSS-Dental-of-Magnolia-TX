import React, { useState } from 'react';
import { Star, MessageSquare, Quote, CheckCircle2, ChevronRight, PenTool, ThumbsUp, MapPin, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials as initialTestimonials } from '../data';

export default function Testimonials() {
  const [reviews, setReviews] = useState(initialTestimonials);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formText, setFormText] = useState('');
  const [formTreatment, setFormTreatment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle local simulation of adding a review in state
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formText) return;

    const newReview = {
      id: `new-${Date.now()}`,
      name: `${formName} ${formName.length > 5 ? '' : 'L.'}`,
      rating: formRating,
      text: formText,
      date: 'Just now',
      treatment: formTreatment || 'General Wellness'
    };

    setReviews([newReview, ...reviews]);
    setIsSubmitted(true);
    
    // Reset form states
    setTimeout(() => {
      setIsSubmitted(false);
      setIsFormOpen(false);
      setFormName('');
      setFormRating(5);
      setFormText('');
      setFormTreatment('');
    }, 2500);
  };

  return (
    <section id="patient-reviews" className="py-24 bg-luxury-navy text-white relative overflow-hidden">
      {/* Immersive glow orbs */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-luxury-teal/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#2E3192]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Header Grid: Section description & High-trust Google Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 pb-12 border-b border-white/5">
          
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-gold uppercase block">Verified Patient Feedback</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
              Patient Experiences <br />
              <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-white via-luxury-gold-light to-luxury-gold">
                That Define Our Standard
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-luxury-gold mx-auto lg:mx-0 mt-2" />
            <p className="text-gray-300 font-sans text-xs leading-relaxed max-w-xl">
              We understand that outstanding dental care is measured by human comfort. Read the raw, unfiltered reviews written by your Magnolia and Conroe neighbors.
            </p>
          </div>

          {/* Luxury Google reviews stats overview card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 md:p-8 rounded-[32px] backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  <span className="font-display text-4xl font-black text-white">5.0</span>
                  <div className="flex text-luxury-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
                <h4 className="font-display font-medium text-xs text-gray-200">Google Rating Standard</h4>
                <p className="font-sans text-[10px] text-gray-400 font-bold uppercase tracking-wider">Based on 1,200+ Verified Patient Reviews</p>
              </div>

              <div className="flex flex-col sm:flex-col gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="px-5 py-2.5 bg-luxury-teal hover:bg-white text-white hover:text-luxury-navy text-[10.5px] font-display font-extrabold uppercase tracking-wider rounded-xl transition duration-300 flex items-center justify-center gap-1.5 shadow-lg"
                >
                  <PenTool size={11} />
                  <span>Write Review</span>
                </button>
                
                <a
                  href="https://www.google.com/maps?cid=flossdentalmagnolia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10.5px] font-sans font-bold uppercase tracking-wide rounded-xl transition duration-300 flex items-center justify-center gap-1.5"
                >
                  <span>Google Maps</span>
                  <ExternalLinkIcon size={11} className="text-luxury-gold" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* The Grid Of Google Reviews (Dynamic Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <AnimatePresence mode="popLayout">
            {reviews.map((r, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={r.id || index}
                className="bg-[#121c2c] border border-white/5 hover:border-luxury-teal/30 p-6 md:p-8 rounded-[28px] shadow-lg hover:shadow-xl hover:shadow-teal-950/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Stars & Quoting Visual */}
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <div className="flex text-luxury-gold gap-0.5">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" className="transition-transform group-hover:scale-110" />
                      ))}
                    </div>

                    <span className="px-2.5 py-0.5 bg-white/5 text-[9px] font-mono text-gray-400 font-extrabold uppercase tracking-widest rounded-full">
                      Verified
                    </span>
                  </div>

                  {/* Review Text */}
                  <div className="relative">
                    <Quote size={20} className="text-[#1a2d48] absolute -top-2 -left-1 pointer-events-none" />
                    <p className="font-sans text-xs italic text-gray-200 leading-relaxed font-normal pt-2 pl-4">
                      "{r.text}"
                    </p>
                  </div>
                </div>

                {/* Patient Information block */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    {/* Generative Colored Initial Icon */}
                    <div className="w-8 h-8 rounded-full bg-luxury-teal/20 text-luxury-teal-light flex items-center justify-center font-display text-xs font-bold shrink-0 border border-luxury-teal/20">
                      {r.name ? r.name.charAt(0) : 'G'}
                    </div>
                    <div>
                      <h4 className="font-display font-black text-xs text-white">{r.name}</h4>
                      <p className="text-[10px] text-gray-400 font-sans mt-0.5">{r.date}</p>
                    </div>
                  </div>

                  {r.treatment && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-sans font-extrabold text-luxury-teal-light bg-luxury-teal/15 border border-luxury-teal/20 py-0.5 px-2.5 rounded-full uppercase tracking-wide">
                      <CheckCircle2 size={9} />
                      {r.treatment}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Beautiful Interactive Review Dialog Form Modal */}
        <AnimatePresence>
          {isFormOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backing Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFormOpen(false)}
                className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              />

              {/* Form Content Panel */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 10 }}
                className="bg-[#0e1726] border border-white/10 w-full max-w-lg rounded-[32px] overflow-hidden shadow-2xl relative z-10 p-6 md:p-8"
              >
                {/* Header info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-luxury-gold text-xs font-sans font-bold uppercase tracking-wider">
                      <Star size={12} fill="currentColor" />
                      <span>Google Reviews Standard</span>
                    </div>
                    <h3 className="font-display font-black text-lg text-white">Share Your FLOSS Experience</h3>
                  </div>
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition"
                    aria-label="Close dialog"
                  >
                    <X size={15} />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-12 text-center space-y-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-luxury-teal/20 text-luxury-teal-light flex items-center justify-center mx-auto border border-luxury-teal/30">
                        <Heart size={24} className="animate-pulse text-luxury-teal-light fill-current" />
                      </div>
                      <h4 className="font-display text-lg font-bold text-white">Opinion Submitted Successfully!</h4>
                      <p className="text-xs text-gray-400 font-sans max-w-sm mx-auto">
                        Thank you for your review. Your genuine feedback helps us calibrate our luxury standards in Magnolia.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmitReview} className="space-y-4 font-sans text-xs">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="text-gray-300 font-bold tracking-wider uppercase text-[10px]">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="e.g. Elizabeth S."
                          className="w-full bg-white/5 border border-white/10 focus:border-luxury-teal rounded-xl py-3 px-4 text-white focus:outline-none transition"
                        />
                      </div>

                      {/* Diagnostic treatment list */}
                      <div className="space-y-1.5">
                        <label className="text-gray-300 font-bold tracking-wider uppercase text-[10px]">Dental Treatment Received</label>
                        <select
                          value={formTreatment}
                          onChange={(e) => setFormTreatment(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 focus:border-luxury-teal rounded-xl py-3 px-4 text-white hover:bg-[#121c2c] focus:outline-none transition appearance-none"
                        >
                          <option value="Porcelain Veneers" className="bg-[#0e1726]">Porcelain Veneers</option>
                          <option value="Same-Day Crown" className="bg-[#0e1726]">Same-Day Crown</option>
                          <option value="Invisalign Aligners" className="bg-[#0e1726]">Invisalign Clear Aligners</option>
                          <option value="Dental Implants" className="bg-[#0e1726]">Dental Implants</option>
                          <option value="IV Dental Sedation" className="bg-[#0e1726]">IV Dental Sedation</option>
                          <option value="Preventative Hygiene" className="bg-[#0e1726]">Preventative Hygiene (GBT)</option>
                          <option value="Emergency Treatment" className="bg-[#0e1726]">Emergency Treatment</option>
                        </select>
                      </div>

                      {/* Ratings */}
                      <div className="space-y-1.5">
                        <label className="text-gray-300 font-bold tracking-wider uppercase text-[10px] block">Star Rating</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((starValue) => (
                            <button
                              type="button"
                              key={starValue}
                              onClick={() => setFormRating(starValue)}
                              className="p-1 text-luxury-gold transition-transform hover:scale-110 focus:outline-none"
                            >
                              <Star
                                size={22}
                                fill={starValue <= formRating ? 'currentColor' : 'none'}
                                className={starValue <= formRating ? 'text-luxury-gold' : 'text-gray-600'}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Text comments */}
                      <div className="space-y-1.5">
                        <label className="text-gray-300 font-bold tracking-wider uppercase text-[10px]">Your Review Comments</label>
                        <textarea
                          required
                          rows={4}
                          value={formText}
                          onChange={(e) => setFormText(e.target.value)}
                          placeholder="Describe the clinical precision, comforting hospitality, and outcome of your visit..."
                          className="w-full bg-white/5 border border-white/10 focus:border-luxury-teal rounded-xl py-3 px-4 text-white focus:outline-none transition resize-none leading-relaxed"
                        />
                      </div>

                      {/* Buttons */}
                      <div className="pt-2 flex gap-3">
                        <button
                          type="button"
                          onClick={() => setIsFormOpen(false)}
                          className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white font-display uppercase tracking-widest font-black rounded-xl transition duration-300 border border-white/10"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="flex-1 py-3 bg-luxury-teal hover:bg-white text-white hover:text-luxury-navy font-display uppercase tracking-widest font-black rounded-xl transition duration-300 shadow-lg shadow-teal-950/20"
                        >
                          Submit Review
                        </button>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

// Inline fallback icon to prevent external loading issues
function ExternalLinkIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
