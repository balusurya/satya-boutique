import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Award, ShieldCheck, Heart, Clock } from 'lucide-react';

const Hero = () => {
  const handleCall = () => {
    window.open('tel:9849811619', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919849811619', '_blank');
  };

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Satya+Boutique+Indrapalem+Andhra+Pradesh', '_blank');
  };

  // Image sliders for Left (Ladies) and Right (Gents)
  const ladiesImages = [
    { src: "/satya_hero_gown.png", label: "Designer Bridal Gown" },
    { src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80", label: "Royal Silk Blouse" },
    { src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80", label: "Emerald Velvet Gown" },
    { src: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop&q=80", label: "Sunlit Flared Gown" }
  ];

  const gentsImages = [
    { src: "/satya_hero_suit.png", label: "Bespoke Gents Suit" },
    { src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80", label: "Royal Navy Blazer" },
    { src: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80", label: "Gents Silk Kurta" },
    { src: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80", label: "Cream Wedding Kurta" }
  ];

  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  // Staggered sliders intervals for dynamic premium transitions
  useEffect(() => {
    const leftTimer = setInterval(() => {
      setLeftIndex((prev) => (prev === ladiesImages.length - 1 ? 0 : prev + 1));
    }, 4000); // Ladies changes every 4 seconds

    const rightTimer = setInterval(() => {
      setRightIndex((prev) => (prev === gentsImages.length - 1 ? 0 : prev + 1));
    }, 4500); // Gents changes every 4.5 seconds

    return () => {
      clearInterval(leftTimer);
      clearInterval(rightTimer);
    };
  }, []);

  return (
    <section id="home" className="relative pt-24 pb-16 bg-background">
      {/* Curved accent element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-light opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light opacity-5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Dress Slider - Center Medallion - Right Suit Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          
          {/* Left Mannequin (Ladies Dress Auto-Slider) */}
          <div className="lg:col-span-3 flex justify-center order-2 lg:order-1">
            <div className="relative group w-full max-w-[260px] md:max-w-[280px]">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl filter blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
              
              {/* Outer frame */}
              <div className="relative border-4 border-accent/20 rounded-2xl shadow-2xl h-[380px] lg:h-[420px] overflow-hidden bg-surface">
                
                {/* Images slide render */}
                {ladiesImages.map((img, idx) => (
                  <div 
                    key={idx}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                      leftIndex === idx 
                        ? 'opacity-100 scale-100 pointer-events-auto' 
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <img 
                      src={img.src} 
                      alt={img.label} 
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/80 to-transparent py-4 text-center">
                      <span className="text-white font-serif tracking-wider text-sm">{img.label}</span>
                    </div>
                  </div>
                ))}

                {/* Micro indicators for active slide */}
                <div className="absolute top-4 right-4 flex space-x-1 z-20">
                  {ladiesImages.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        leftIndex === idx ? 'bg-accent scale-120' : 'bg-white/40'
                      }`}
                    ></span>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Center Brand Medallion */}
          <div className="lg:col-span-6 text-center z-10 order-1 lg:order-2">
            <div className="bg-primary-dark text-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-accent relative overflow-hidden">
              {/* Background gold flourishes */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent/30 m-4"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/30 m-4"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent/30 m-4"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/30 m-4"></div>

              {/* Logo Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  {/* Outer glowing gold ring */}
                  <div className="absolute inset-0 border-2 border-accent rounded-full animate-pulse"></div>
                  {/* Elegant Sewing Machine / Woman SVG icon */}
                  <svg className="w-12 h-12 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 19h16M19 19v-4M8 19v-9c0-2.2 1.8-4 4-4h6c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-6" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 14v5M6 10h2M14 6V4M10 4h8" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-wide mb-1">
                Satya
              </h1>
              <p className="text-xl md:text-2xl font-sans tracking-[0.25em] text-accent uppercase mb-4">
                Boutique
              </p>

              {/* Sub-divider */}
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-[1px] bg-accent"></div>
                <span className="text-xs uppercase tracking-widest text-accent font-medium">Perfect Fit, Perfect You</span>
                <div className="w-8 h-[1px] bg-accent"></div>
              </div>

              {/* Services details */}
              <div className="text-sm md:text-base font-sans tracking-wide text-gray-300 mb-8 space-y-1">
                <p className="font-semibold text-white tracking-[0.15em]">LADIES & GENTS TAILORING</p>
                <p className="text-accent text-xs">DESIGNER STITCHING | ALTERATIONS | CUSTOM DESIGNS</p>
              </div>

              {/* Quick Actions Buttons */}
              <div className="flex justify-center items-center space-x-6 md:space-x-8">
                {/* Call Button */}
                <button 
                  onClick={handleCall}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  <div className="w-14 h-14 bg-accent hover:bg-accent-dark text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-xs tracking-wider text-gray-300 mt-2 group-hover:text-accent transition-colors">Call Now</span>
                </button>

                {/* WhatsApp Button */}
                <button 
                  onClick={handleWhatsApp}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  <div className="w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110 border-2 border-white/20">
                    <MessageSquare className="w-7 h-7" />
                  </div>
                  <span className="text-xs tracking-wider text-gray-300 mt-2 group-hover:text-accent transition-colors font-semibold">WhatsApp</span>
                </button>

                {/* Get Directions Button */}
                <button 
                  onClick={handleDirections}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  <div className="w-14 h-14 bg-accent hover:bg-accent-dark text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-xs tracking-wider text-gray-300 mt-2 group-hover:text-accent transition-colors">Get Directions</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Mannequin (Gents Suit Auto-Slider) */}
          <div className="lg:col-span-3 flex justify-center order-3">
            <div className="relative group w-full max-w-[260px] md:max-w-[280px]">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl filter blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
              
              {/* Outer frame */}
              <div className="relative border-4 border-accent/20 rounded-2xl shadow-2xl h-[380px] lg:h-[420px] overflow-hidden bg-surface">
                
                {/* Images slide render */}
                {gentsImages.map((img, idx) => (
                  <div 
                    key={idx}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                      rightIndex === idx 
                        ? 'opacity-100 scale-100 pointer-events-auto' 
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <img 
                      src={img.src} 
                      alt={img.label} 
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/80 to-transparent py-4 text-center">
                      <span className="text-white font-serif tracking-wider text-sm">{img.label}</span>
                    </div>
                  </div>
                ))}

                {/* Micro indicators for active slide */}
                <div className="absolute top-4 right-4 flex space-x-1 z-20">
                  {gentsImages.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        rightIndex === idx ? 'bg-accent scale-120' : 'bg-white/40'
                      }`}
                    ></span>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Highlights Bar */}
        <div className="mt-12 bg-primary rounded-xl py-4 px-6 md:px-12 shadow-lg border border-accent/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white text-xs md:text-sm tracking-widest font-sans uppercase">
            <div className="flex items-center justify-center space-x-2 border-r border-accent/20 last:border-0">
              <span className="text-accent font-bold">★</span>
              <span>Quality Stitching</span>
            </div>
            <div className="flex items-center justify-center space-x-2 md:border-r border-accent/20">
              <span className="text-accent font-bold">★</span>
              <span>Perfect Fit</span>
            </div>
            <div className="flex items-center justify-center space-x-2 border-r border-accent/20">
              <span className="text-accent font-bold">★</span>
              <span>Custom Designs</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-accent font-bold">★</span>
              <span>On Time Delivery</span>
            </div>
          </div>
        </div>

        {/* "Why Choose Us?" Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-serif text-secondary mb-2 relative inline-block">
            Why Choose Us?
            <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-accent"></span>
          </h2>
          <p className="text-gray-500 font-sans text-sm tracking-widest uppercase mb-12">Crafting garments that empower you</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group bg-surface border border-borderGold p-8 rounded-2xl hover:bg-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center mx-auto mb-6 bg-white shadow-inner group-hover:bg-primary-dark group-hover:border-accent transition-colors duration-300">
                <Award className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg text-primary group-hover:text-white font-semibold mb-2 transition-colors duration-300">Experienced Tailors</h3>
              <p className="text-gray-500 group-hover:text-gray-200 font-sans text-sm leading-relaxed transition-colors duration-300">
                Our master tailors possess decades of experience in stitching exquisite bridal and premium menswear.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-surface border border-borderGold p-8 rounded-2xl hover:bg-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center mx-auto mb-6 bg-white shadow-inner group-hover:bg-primary-dark group-hover:border-accent transition-colors duration-300">
                <ShieldCheck className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg text-primary group-hover:text-white font-semibold mb-2 transition-colors duration-300">Premium Quality</h3>
              <p className="text-gray-500 group-hover:text-gray-200 font-sans text-sm leading-relaxed transition-colors duration-300">
                We select the finest threads, rich interlinings, and top-tier accessories to guarantee a premium boutique finish.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-surface border border-borderGold p-8 rounded-2xl hover:bg-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center mx-auto mb-6 bg-white shadow-inner group-hover:bg-primary-dark group-hover:border-accent transition-colors duration-300">
                <Heart className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg text-primary group-hover:text-white font-semibold mb-2 transition-colors duration-300">Perfect Fitting</h3>
              <p className="text-gray-500 group-hover:text-gray-200 font-sans text-sm leading-relaxed transition-colors duration-300">
                Our fitting guidelines and multi-point measurements assure that your garment hugs your body precisely as intended.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-surface border border-borderGold p-8 rounded-2xl hover:bg-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center mx-auto mb-6 bg-white shadow-inner group-hover:bg-primary-dark group-hover:border-accent transition-colors duration-300">
                <Clock className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg text-primary group-hover:text-white font-semibold mb-2 transition-colors duration-300">Customer Satisfaction</h3>
              <p className="text-gray-500 group-hover:text-gray-200 font-sans text-sm leading-relaxed transition-colors duration-300">
                We values your feedback. We offer trial adjustments to ensure you are 100% satisfied with your final look.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
