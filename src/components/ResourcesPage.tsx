import React, { useState } from 'react';
import { 
  ArrowLeft, Star, Facebook, Instagram, Youtube, HelpCircle, DollarSign, 
  BookOpen, Heart, MessageSquare, ArrowRight, ShieldCheck, CheckCircle, 
  Sparkles, Layers, Award, Radio, Calendar, Flame, ExternalLink 
} from 'lucide-react';
import { testimonials } from '../data';

interface ResourcesPageProps {
  activeTab: 'blog' | 'testimonials' | 'social-media' | 'financing';
  onBack: () => void;
  onBookClick: () => void;
  onNavigateTab: (tab: 'blog' | 'testimonials' | 'social-media' | 'financing') => void;
}

export default function ResourcesPage({ activeTab, onBack, onBookClick, onNavigateTab }: ResourcesPageProps) {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  // YouTube Videos List
  const youtubeVideos = [
    {
      id: 'vErS-1xC6zw',
      title: 'Luxury Patient Experience Tour',
      description: 'Go behind the scenes of our state-of-the-art office. Experience our private procedurial suites, heated massage chairs, and soothing beverage lounge.'
    },
    {
      id: 'sXrw1Ggximk',
      title: 'Same-Day Dental Crown Technology',
      description: 'Discover how we utilize CEREC computer milling to custom structure and bond solid porcelain crowns in under two hours.'
    },
    {
      id: 'YsCy5V9bI4o',
      title: 'Invisalign Transformation Roadmap',
      description: 'Meet our cosmetic dentists to see how clear dental aligner trays gently and invisibly shift your teeth into absolute alignment.'
    },
    {
      id: 'IayE_94AeXI',
      title: 'The Artistry of Porcelain Veneers',
      description: 'Watch the step-by-step bespoke clinical design process that Dr. Mike Tran utilizes for major celebrity-grade smile transformations.'
    },
    {
      id: 'JTBDPbu_Mlk',
      title: 'Painless Guided Biofilm Hygiene',
      description: 'Learn why Swiss Airflow Guided Biofilm Therapy (GBT) has completely eliminated metal scrapers for ultimate patient comfort.'
    }
  ];

  // Mock Blog Articles
  const blogArticles = [
    {
      id: 'b1',
      title: 'Porcelain Veneers vs. Crowns: Which is Right for You?',
      category: 'Cosmetics',
      date: 'May 15, 2026',
      excerpt: 'Struggling to choose between veneers and crowns? We explain the primary structural differences, preparations, and visual longevity of each.',
      readTime: '4 min read',
      content: 'While both options provide exceptional smile transformations, porcelain veneers are micro-thin ceramic shells bonded solely to the front surface, making them ideal for correcting minor gaps, uneven wear, or staining. Dental crowns, however, fully encapsulate the tooth, providing vital structural strength for heavily decayed or root-canal-treated enamel.'
    },
    {
      id: 'b2',
      title: 'The Science of IV Dental Sedation: Sleep Soundly and Safely',
      category: 'Sedation',
      date: 'April 28, 2026',
      excerpt: 'How does intravenous dental sedation actually work? Read about our certified vital tracking equipment and why twilight rest triggers zero stressful memories.',
      readTime: '6 min read',
      content: 'Intravenous conscious sedation is a highly controlled clinical process. Rather than fully sleeping under deep general anesthesia, you remain in a twilight semi-awake state. You can still respond to simple doctor instructions, but your muscles stay fully relaxed, your blood pressure drops to standard resting rates, and post-visit, you remember absolutely none of the sounds, tastes, or dental procedures.'
    },
    {
      id: 'b3',
      title: 'Why We Cleared Out Metal Scrapers for Swiss Airflow Technology',
      category: 'Advanced Tech',
      date: 'March 10, 2026',
      excerpt: 'Did you know that standard teeth scaling can feel cold and painful? Meet Guided Biofilm Therapy (GBT), the warm Swiss water spray revolution.',
      readTime: '5 min read',
      content: 'Guided Biofilm Therapy utilizes organic disclosing agents to stain soft bacteria biofilm. Once identified, our Swiss Airflow machine employs lukewarm water and fine, organic powder to lift stains comfortably. This completely bypasses the unpleasant physical scraping of metal instruments against your enamel, making GBT a absolute game-changer for sensitive teeth.'
    }
  ];

  const [openBlogId, setOpenBlogId] = useState<string | null>(null);

  return (
    <div className="bg-luxury-neutral min-h-screen pt-28 pb-20 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-10 left-5 w-80 h-80 bg-luxury-teal/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-5 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs text-luxury-navy/60 hover:text-luxury-teal font-sans font-bold uppercase tracking-wider mb-8 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Resources Top Tab Bar Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-white p-2 rounded-2xl border border-gray-150 max-w-2xl mx-auto shadow-sm">
          {[
            { label: 'Blog', value: 'blog' },
            { label: 'Testimonials', value: 'testimonials' },
            { label: 'Social Media', value: 'social-media' },
            { label: 'Financing', value: 'financing' }
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setOpenBlogId(null);
                onNavigateTab(tab.value as any);
              }}
              className={`flex-1 min-w-[110px] text-center px-4 py-2 rounded-xl font-display text-xs font-bold tracking-wider uppercase transition-all ${
                activeTab === tab.value
                  ? 'bg-luxury-navy text-white shadow-md'
                  : 'text-gray-500 hover:text-luxury-teal hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== 1. BLOG TAB ==================== */}
        {activeTab === 'blog' && (
          <div className="space-y-8">
            <div className="text-center space-y-3 mb-10">
              <span className="font-sans text-xs font-bold tracking-[0.2em] text-luxury-teal uppercase">Clinical Insights</span>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold text-luxury-navy">Dental Wellness Blog</h1>
              <p className="text-gray-500 font-sans text-xs max-w-md mx-auto">Read specialized clinical guides authored by our expert dental masters to perfect your dental health.</p>
            </div>

            {openBlogId === null ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogArticles.map((article) => (
                  <div key={article.id} className="p-6 bg-white border border-gray-100 rounded-3xl hover:border-luxury-teal/20 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-wider text-luxury-gold-dark">
                        <span>{article.category}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="font-display font-bold text-md text-luxury-navy">{article.title}</h3>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed font-medium">{article.excerpt}</p>
                    </div>
                    <div className="pt-6 border-t border-gray-50 mt-6 flex justify-between items-center">
                      <span className="text-[10px] font-sans text-gray-400 font-bold">{article.date}</span>
                      <button 
                        onClick={() => setOpenBlogId(article.id)}
                        className="text-luxury-teal hover:text-luxury-navy font-display text-[10px] font-bold uppercase tracking-wide flex items-center gap-1 group"
                      >
                        <span>Read Article</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 space-y-6 max-w-3xl mx-auto shadow-sm">
                <button 
                  onClick={() => setOpenBlogId(null)}
                  className="font-sans text-xs font-bold uppercase tracking-wider text-luxury-navy/60 hover:text-luxury-teal flex items-center gap-1"
                >
                  <ArrowLeft size={14} /> Back to Blog List
                </button>
                {blogArticles.filter(b => b.id === openBlogId).map(article => (
                  <div key={article.id} className="space-y-6">
                    <div className="flex items-center gap-3 text-xs font-sans text-luxury-gold-dark font-bold uppercase">
                      <span>{article.category}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-extrabold text-luxury-navy leading-tight">{article.title}</h2>
                    <div className="w-16 h-0.5 bg-luxury-teal" />
                    <p className="font-sans text-sm text-gray-600 font-medium leading-relaxed whitespace-pre-line pb-8 border-b border-gray-100">
                      {article.content}
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <p className="font-sans text-xs text-gray-400">Written by FLOSS Dental Magnolia Editorial Board</p>
                      <button 
                        onClick={onBookClick}
                        className="px-6 py-2.5 bg-luxury-teal hover:bg-luxury-navy text-white text-xs font-display font-semibold uppercase tracking-wider rounded-full transition-all"
                      >
                        Reserve Clinical Visit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== 2. TESTIMONIALS TAB ==================== */}
        {activeTab === 'testimonials' && (
          <div className="space-y-8">
            <div className="text-center space-y-3 mb-10">
              <span className="font-sans text-xs font-bold tracking-[0.2em] text-luxury-teal uppercase">Patient Success</span>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold text-luxury-navy">Genuine Patient Stories</h1>
              <p className="text-gray-500 font-sans text-xs max-w-md mx-auto">Read raw, verified check-in reports from our loyal Magnolia and Conroe neighbor families.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div key={t.id} className="p-8 bg-white border border-gray-100 rounded-3xl space-y-6 shadow-sm">
                  <div className="flex justify-between items-start border-b border-gray-50 pb-4">
                    <div>
                      <p className="font-display font-bold text-xs text-luxury-navy">{t.name}</p>
                      <p className="text-[10px] text-luxury-gold-dark font-sans font-bold uppercase mt-0.5">{t.treatment}</p>
                    </div>
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="font-sans text-xs text-gray-600 leading-relaxed font-medium">
                    "{t.text}"
                  </p>
                  <p className="text-[10px] text-gray-400 font-sans font-bold uppercase tracking-wider">{t.date} • Verified Visit</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== 3. SOCIAL MEDIA TAB (YouTube Videos) ==================== */}
        {activeTab === 'social-media' && (
          <div className="space-y-12">
            
            {/* Social Header and Top links */}
            <div className="text-center space-y-4">
              <span className="font-sans text-xs font-bold tracking-[0.2em] text-luxury-teal uppercase">Connect Globally</span>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold text-luxury-navy">Social Media Ecosystem</h1>
              <p className="text-gray-500 font-sans text-xs max-w-md mx-auto">Hang out with us across our modern social networks for smile tips and active office moments.</p>
              
              {/* Active social connection nodes */}
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a 
                  href="https://www.facebook.com/FlossDentaMagnoliaTX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-150 hover:border-luxury-teal rounded-full font-sans text-xs font-bold text-gray-700 transition"
                >
                  <Facebook size={14} className="text-blue-600 fill-current" />
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/drmiketran/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-150 hover:border-luxury-teal rounded-full font-sans text-xs font-bold text-gray-700 transition"
                >
                  <Instagram size={14} className="text-pink-600" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCFnQtiVwtlIwLo-KoNp_k4g" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-150 hover:border-luxury-teal rounded-full font-sans text-xs font-bold text-gray-700 transition"
                >
                  <Youtube size={14} className="text-red-600 fill-current" />
                  <span>YouTube</span>
                </a>
                <a 
                  href="https://in.pinterest.com/flossdentalmagnolia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-150 hover:border-luxury-teal rounded-full font-sans text-xs font-bold text-gray-700 transition"
                >
                  <span className="text-rose-600 font-bold font-sans">P</span>
                  <span>Pinterest</span>
                </a>
                <a 
                  href="https://www.yelp.com/biz/floss-dental-magnolia-magnolia-5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-150 hover:border-luxury-teal rounded-full font-sans text-xs font-bold text-gray-700 transition"
                >
                  <span className="text-red-700 font-extrabold font-sans">Yelp</span>
                  <span>Review</span>
                </a>
              </div>
            </div>

            {/* Official YouTube Channel Video Embed list */}
            <div className="space-y-6 pt-6 border-t border-gray-150">
              <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-luxury-gold-dark uppercase block">Featured Video Broadcasts</span>
                <h2 className="font-display text-xl md:text-2xl font-bold text-luxury-navy">Official YouTube Video Library</h2>
                <div className="w-12 h-0.5 bg-luxury-teal mx-auto mt-2" />
              </div>

              {/* Responsive responsive grid layout of the video list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {youtubeVideos.map((video, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                    {/* The YouTube responsive iframe container */}
                    <div className="aspect-video w-full bg-black relative">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    {/* Video details metadata */}
                    <div className="p-5 space-y-2">
                      <h4 className="font-display font-bold text-xs text-luxury-navy flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-650 animate-pulse bg-red-650" />
                        {video.title}
                      </h4>
                      <p className="font-sans text-[11px] leading-relaxed text-gray-500 font-medium">
                        {video.description}
                      </p>
                      <div className="pt-3 border-t border-gray-50 flex justify-between items-center text-[10px]">
                        <span className="font-mono text-gray-400 font-bold uppercase tracking-wider">Embed Video</span>
                        <a
                          href={`https://www.youtube.com/watch?v=${video.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-luxury-gold hover:text-luxury-teal transition font-sans font-bold flex items-center gap-1"
                        >
                          <span>Watch on YouTube</span>
                          <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ==================== 4. FINANCING TAB ==================== */}
        {activeTab === 'financing' && (
          <div className="space-y-12">
            
            <div className="text-center space-y-3 mb-10">
              <span className="font-sans text-xs font-bold tracking-[0.2em] text-luxury-teal uppercase">Budget Clarity</span>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold text-luxury-navy">Financing & Payment Plans</h1>
              <p className="text-gray-500 font-sans text-xs max-w-md mx-auto">We accommodate your financial budget to keep exquisite clinical dentistry stress-free.</p>
            </div>

            {/* General Financing Bento Grid of features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white border border-gray-100 rounded-3xl space-y-4">
                <span className="p-2.5 bg-luxury-teal/5 border border-luxury-teal/10 rounded-xl inline-block text-luxury-teal select-none font-bold">PPO</span>
                <h3 className="font-display font-bold text-xs text-luxury-navy uppercase">PPO Insurance</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed font-medium">We work in close coordination with major dental PPO insurers (Aetna, Cigna, Delta Dental, MetLife, Guardian, BlueCross etc.) to help maximize your active benefits.</p>
              </div>

              <div className="p-6 bg-white border border-gray-100 rounded-3xl space-y-4">
                <span className="p-2.5 bg-luxury-teal/5 border border-luxury-teal/10 rounded-xl inline-block text-luxury-teal select-none font-bold">0%</span>
                <h3 className="font-display font-bold text-xs text-luxury-navy uppercase">0% Interest Terms</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed font-medium">Through premier healthcare financing platforms, find interest-free plans (for 6, 12 or 18 months) that make cosmetic upgrades or implants budget-friendly.</p>
              </div>

              <div className="p-6 bg-white border border-gray-100 rounded-3xl space-y-4">
                <span className="p-2.5 bg-luxury-gold/5 border border-luxury-gold/15 rounded-xl inline-block text-luxury-gold-dark select-none font-bold">Care</span>
                <h3 className="font-display font-bold text-xs text-luxury-navy uppercase">CareCredit®</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed font-medium">Partner with CareCredit®, Proceed Finance, and LendingClub to break down cosmetic smile makeovers into customizable starting rates from $49/month.</p>
              </div>
            </div>

            {/* Estimated Treatment Pricing Brackets Table */}
            <div className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm space-y-6">
              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-sm text-luxury-navy uppercase tracking-wider">Aesthetic Estimative Brackets</h3>
                <p className="font-sans text-xs text-gray-400">Review our transparent average standard procedural costs prior to insurance coordination.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-gray-150 text-luxury-navy uppercase tracking-wider font-bold">
                      <th className="py-3 px-4">Treatment Category</th>
                      <th className="py-3 px-4">Standard Estimated Cost</th>
                      <th className="py-3 px-4">Flexible Financing Options</th>
                      <th className="py-3 px-4 text-right">Coordination PPO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 text-gray-600 font-medium whitespace-nowrap">
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-luxury-navy">New Patient Special</td>
                      <td className="py-3.5 px-4">$199 Promotional Offer</td>
                      <td className="py-3.5 px-4">One-time payment</td>
                      <td className="py-3.5 px-4 text-right text-emerald-600">Free Check-up</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-luxury-navy">Porcelain Veneer (Single)</td>
                      <td className="py-3.5 px-4">$1,200 - $2,100</td>
                      <td className="py-3.5 px-4">Plans starting around $49/month</td>
                      <td className="py-3.5 px-4 text-right text-gray-400">Cosmetic Exclude</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-luxury-navy">Same-Day Ceramic Crown</td>
                      <td className="py-3.5 px-4">$950 - $1,600</td>
                      <td className="py-3.5 px-4">Starting around $35/month</td>
                      <td className="py-3.5 px-4 text-right text-emerald-600">Routinely 50%-80% Covered</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-luxury-navy">Dental Implant Single (Complete)</td>
                      <td className="py-3.5 px-4">$3,200 - $4,850</td>
                      <td className="py-3.5 px-4">Starting from $115/month</td>
                      <td className="py-3.5 px-4 text-right text-emerald-600">Frequent 50% Coverage</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-luxury-navy">Invisalign Clear Alignment</td>
                      <td className="py-3.5 px-4">$3,500 - $5,500</td>
                      <td className="py-3.5 px-4">Custom starting at $129/month</td>
                      <td className="py-3.5 px-4 text-right text-emerald-600">Orthodontic Contrib</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-luxury-navy">Swiss Airflow GBT Cleaning</td>
                      <td className="py-3.5 px-4">$180 - $240</td>
                      <td className="py-3.5 px-4">Standard maintenance coverage</td>
                      <td className="py-3.5 px-4 text-right text-emerald-600">100% Covered (Preventative)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
