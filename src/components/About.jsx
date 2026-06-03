import React, { useState, useEffect } from 'react';
import { Calendar, Users, Star, Truck } from 'lucide-react';

const About = () => {
  const [videoFailed, setVideoFailed] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const fallbackSlides = [
    { src: "/satya_fabric_sewing.png", label: "Gold Stitching Detail" },
    { src: "/satya_fabric_cutting.png", label: "Master Tailor Fabric Cut" },
    { src: "/satya_storefront.png", label: "Satya Boutique Exterior" }
  ];

  // Slideshow interval for Ken Burns fallback
  useEffect(() => {
    if (videoFailed) {
      const timer = setInterval(() => {
        setSlideIndex((prev) => (prev === fallbackSlides.length - 1 ? 0 : prev + 1));
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [videoFailed]);

  return (
    <section id="about" className="py-20 bg-surface border-t border-b border-borderGold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-accent font-serif tracking-widest text-lg font-semibold block uppercase">About Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary leading-tight">
              Satya Boutique
            </h2>
            <div className="w-16 h-[2px] bg-accent"></div>
            
            <p className="text-secondary font-sans leading-relaxed text-base md:text-lg">
              Satya Boutique is a trusted tailoring and boutique center located near Z Bridge, Indrapalem. 
              We specialize in custom tailoring for both ladies and gents with a perfect blend of traditional 
              craftsmanship and modern designs.
            </p>
            
            <p className="text-secondary font-sans leading-relaxed text-base md:text-lg">
              Our goal is simple — to provide high quality stitching, perfect fitting, and personalized services 
              that make you look and feel your absolute best. Whether it is an intricate bridal blouse, elegant 
              lehenga, or a sharp, customized gentlemen's blazer, we approach every fabric with precision and care.
            </p>
            
            <div className="pt-4">
              <blockquote className="border-l-4 border-accent pl-4 italic text-primary-light font-serif">
                "Fashion is what you buy, style is what you do with it. We help you define your unique style with absolute perfect tailoring."
              </blockquote>
            </div>
          </div>

          {/* Right Images & Video Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* High-Fidelity Video with Bulletproof Photographic Fallback */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-borderGold group h-[260px] md:h-[300px] bg-primary">
              
              {!videoFailed ? (
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  onError={() => setVideoFailed(true)}
                  className="w-full h-full object-cover object-center"
                >
                  {/* Stable, hotlink-friendly high-definition tailoring video CDN sources */}
                  <source 
                    src="https://videos.pexels.com/video-files/3761318/3761318-sd_640_360_30fps.mp4" 
                    type="video/mp4" 
                  />
                  <source 
                    src="https://assets.mixkit.co/videos/preview/mixkit-sewing-machine-stitching-a-fabric-close-up-42777-large.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                /* Ultra-Premium Ken Burns Photographic Slideshow Fallback (CORS/Offline Safe) */
                <div className="relative w-full h-full overflow-hidden">
                  {fallbackSlides.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        slideIndex === idx ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={slide.src}
                        alt={slide.label}
                        className={`w-full h-full object-cover object-center ${
                          slideIndex === idx ? 'animate-ken-burns' : ''
                        }`}
                        style={{
                          animation: slideIndex === idx ? 'kenburns 12s ease-in-out infinite' : 'none'
                        }}
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/95 to-transparent py-4 text-center">
                        <span className="text-accent font-serif tracking-wider text-xs md:text-sm uppercase font-semibold">
                          {slide.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
              
              {/* Live craftsmanship video indicator tag */}
              <div className="absolute bottom-4 left-4 bg-primary-dark/85 backdrop-blur-sm border border-accent/40 py-1.5 px-3.5 rounded-full shadow-lg pointer-events-none">
                <span className="text-[10px] text-accent uppercase tracking-widest font-sans font-bold flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                  {!videoFailed ? "Live Craftsmanship" : "Cinematic Gallery"}
                </span>
              </div>
            </div>

            {/* Split Sub Images (Storefront & Scissors work) */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-borderGold group">
                <img 
                  src="/satya_storefront.png" 
                  alt="Satya Boutique storefront elegant display" 
                  className="w-full h-[140px] md:h-[160px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-md border border-borderGold group">
                <img 
                  src="/satya_fabric_cutting.png" 
                  alt="Tailor cutting red fabric" 
                  className="w-full h-[140px] md:h-[160px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Lower Banner Ribbon - Statistics */}
        <div className="bg-primary-dark text-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-accent">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Stat item 1 */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent bg-primary/40 shadow-inner">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">10+</h4>
                <p className="text-xs uppercase tracking-widest text-accent font-sans">Years Experience</p>
              </div>
            </div>

            {/* Stat item 2 */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent bg-primary/40 shadow-inner">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">5000+</h4>
                <p className="text-xs uppercase tracking-widest text-accent font-sans">Happy Customers</p>
              </div>
            </div>

            {/* Stat item 3 */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent bg-primary/40 shadow-inner">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">100%</h4>
                <p className="text-xs uppercase tracking-widest text-accent font-sans">Quality Work</p>
              </div>
            </div>

            {/* Stat item 4 */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent bg-primary/40 shadow-inner">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">On Time</h4>
                <p className="text-xs uppercase tracking-widest text-accent font-sans">Delivery</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
