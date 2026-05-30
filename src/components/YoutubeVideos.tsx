import React, { useState } from 'react';
import { Youtube, Play, ExternalLink, ArrowRight, Video, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  url: string;
}

export default function YoutubeVideos() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const videos: VideoItem[] = [
    {
      id: 'vErS-1xC6zw',
      title: 'Luxury Patient Experience Tour',
      description: 'Go behind the scenes of our state-of-the-art office. Experience our private procedural suites, heated massage chairs, and soothing beverage lounge in Magnolia.',
      category: 'Office Tour',
      duration: '1:45',
      url: 'https://www.youtube.com/watch?v=vErS-1xC6zw&t=13s'
    },
    {
      id: 'sXrw1Ggximk',
      title: 'Same-Day Dental Crown Technology',
      description: 'Discover how we utilize CEREC computer milling to custom structure and bond solid porcelain crowns in under two hours.',
      category: 'Advanced Tech',
      duration: '2:15',
      url: 'https://www.youtube.com/watch?v=sXrw1Ggximk'
    },
    {
      id: 'YsCy5V9bI4o',
      title: 'Invisalign Transformation Roadmap',
      description: 'Meet our cosmetic dentists to see how clear dental aligner trays gently and invisibly shift your teeth into absolute alignment.',
      category: 'Cosmetic Dentistry',
      duration: '3:02',
      url: 'https://www.youtube.com/watch?v=YsCy5V9bI4o'
    },
    {
      id: 'IayE_94AeXI',
      title: 'The Artistry of Porcelain Veneers',
      description: 'Watch the step-by-step bespoke clinical design process that Dr. Mike Tran utilizes for major celebrity-grade smile transformations.',
      category: 'Cosmetics & Design',
      duration: '2:40',
      url: 'https://www.youtube.com/watch?v=IayE_94AeXI'
    },
    {
      id: 'JTBDPbu_Mlk',
      title: 'Painless Guided Biofilm Hygiene',
      description: 'Learn why Swiss Airflow Guided Biofilm Therapy (GBT) has completely eliminated metal scrapers for ultimate patient comfort.',
      category: 'Preventative Wellness',
      duration: '1:58',
      url: 'https://www.youtube.com/watch?v=JTBDPbu_Mlk'
    }
  ];

  return (
    <section id="youtube-broadcasts" className="py-24 bg-white relative overflow-hidden">
      {/* Soft elegant background styling elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-luxury-teal/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-luxury-teal/10 border border-luxury-teal/20 rounded-full text-luxury-teal text-[11px] font-sans font-extrabold uppercase tracking-widest">
            <Youtube size={12} className="text-red-600 fill-current" />
            <span>Digital Smile Education</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-luxury-navy">
            Cinematic Clinic & <br />
            <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-luxury-navy via-[#1F3D68] to-luxury-gold-dark">
              Technology Broadcasts
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-2" />
          <p className="text-gray-500 font-sans text-sm max-w-xl mx-auto">
            Experience our clinical philosophies, custom high-density computerized milling machines, and stress-free cosmetic treatments through official HD video guides.
          </p>
        </div>

        {/* Feature/Main Video Focus & Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Selected Video Player Box (Takes 7 Cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-luxury-navy rounded-[32px] overflow-hidden shadow-2xl border border-luxury-navy/10 relative z-10">
              <div className="aspect-video w-full bg-black relative">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoId || videos[0].id}?autoplay=${activeVideoId ? '1' : '0'}`}
                  title={activeVideoId ? videos.find(v => v.id === activeVideoId)?.title : videos[0].title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Player details footer */}
              <div className="p-6 md:p-8 bg-gradient-to-b from-luxury-navy to-[#0f1b2d] text-white">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="px-3 py-1 bg-luxury-teal/20 border border-luxury-teal/30 rounded-full font-sans text-[10px] font-bold text-luxury-teal-light uppercase tracking-wider">
                    {activeVideoId ? videos.find(v => v.id === activeVideoId)?.category : videos[0].category}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-gray-400">
                    Duration: {activeVideoId ? videos.find(v => v.id === activeVideoId)?.duration : videos[0].duration}
                  </span>
                </div>
                
                <h3 className="font-display font-semibold text-lg md:text-xl text-white mb-2 leading-snug">
                  {activeVideoId ? videos.find(v => v.id === activeVideoId)?.title : videos[0].title}
                </h3>
                
                <p className="font-sans text-xs text-gray-300 leading-relaxed font-normal">
                  {activeVideoId ? videos.find(v => v.id === activeVideoId)?.description : videos[0].description}
                </p>

                <div className="pt-4 mt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-gray-500 uppercase font-bold tracking-wider">Official EMBED STREAM</span>
                  <a
                    href={activeVideoId ? videos.find(v => v.id === activeVideoId)?.url : videos[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-luxury-gold hover:text-white transition font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <span>Open Watch Link</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Video Playlist Selector (Takes 5 Cols on desktop) */}
          <div className="lg:col-span-5 space-y-4 max-h-[580px] overflow-y-auto pr-1">
            <h4 className="font-display text-xs font-bold text-luxury-navy uppercase tracking-widest mb-2 border-b border-gray-100 pb-3 flex items-center justify-between">
              <span>Treatment Playlist</span>
              <span className="text-[10px] font-sans font-bold text-gray-400 lowercase">{videos.length} items</span>
            </h4>

            <div className="space-y-3">
              {videos.map((video, idx) => {
                const isSelected = activeVideoId === video.id || (!activeVideoId && idx === 0);
                return (
                  <button
                    key={video.id}
                    onClick={() => setActiveVideoId(video.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                      isSelected
                        ? 'bg-luxury-neutral border-luxury-teal shadow-md'
                        : 'bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50/50'
                    }`}
                  >
                    {/* Thumbnail placeholder with play indicator */}
                    <div className="w-24 shrink-0 aspect-[4/3] rounded-lg bg-gray-100 overflow-hidden relative shadow-inner border border-gray-150">
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to stylized container if layout restricts loading
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className={`absolute inset-0 flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-luxury-navy/35' : 'bg-black/20 hover:bg-black/10'
                      }`}>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          isSelected ? 'bg-luxury-teal scale-110 text-white' : 'bg-white text-luxury-navy hover:scale-105 shadow-md'
                        }`}>
                          <Play size={10} fill="currentColor" />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 px-1 bg-black/75 text-[8px] font-mono text-white rounded">
                        {video.duration}
                      </span>
                    </div>

                    {/* Metadata summary */}
                    <div className="space-y-1 overflow-hidden">
                      <span className="text-[9px] font-sans font-extrabold text-luxury-gold-dark uppercase tracking-wide block">
                        {video.category}
                      </span>
                      <h5 className={`font-display text-xs font-extrabold leading-snug tracking-tight truncate ${
                        isSelected ? 'text-luxury-navy' : 'text-gray-800'
                      }`}>
                        {video.title}
                      </h5>
                      <p className="font-sans text-[10px] text-gray-500 leading-relaxed font-normal line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Subscribe bottom widget */}
            <div className="p-4 rounded-2xl bg-luxury-neutral/45 border border-dashed border-gray-200 mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-650">
                  <Youtube size={15} className="fill-current" />
                </div>
                <div>
                  <span className="text-[10px] font-display font-black text-luxury-navy block">Follow our Channel</span>
                  <span className="text-[8px] font-sans font-bold text-gray-400 uppercase tracking-widest">Live Surgery & Aesthetic Redesigns</span>
                </div>
              </div>
              
              <a
                href="https://www.youtube.com/channel/UCFnQtiVwtlIwLo-KoNp_k4g"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-red-650 hover:bg-red-700 text-white rounded-lg font-display text-[9px] font-extrabold uppercase tracking-wide transition flex items-center gap-1 shadow-sm"
              >
                <span>Subscribe</span>
                <ArrowRight size={10} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
