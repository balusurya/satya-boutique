import React, { useState } from 'react';
import { Calculator, Calendar, ArrowRight } from 'lucide-react';

const Services = () => {
  const ladiesServices = [
    {
      title: "Designer Blouse Stitching",
      desc: "Perfect embroidery, neck designs, padded, and bridal designer blouses.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-current" fill="currentColor">
          {/* Stylized Indian Blouse */}
          <path d="M20,20 L30,50 L40,55 L50,45 L60,55 L70,50 L80,20 L65,20 C60,32 40,32 35,20 Z" />
          <circle cx="50" cy="65" r="4" className="text-accent" />
          <path d="M50,69 L50,80" stroke="currentColor" strokeWidth="3" />
        </svg>
      )
    },
    {
      title: "Chudidar Stitching",
      desc: "Salwar kameez, Anarkali suits, Patiala suits, and elegant kurti designs.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-current" fill="currentColor">
          {/* Stylized Salwar Suit */}
          <path d="M30,15 L70,15 L75,35 L65,75 L50,85 L35,75 L25,35 Z" />
          <path d="M40,15 C45,25 55,25 60,15 Z" fill="#FAF6EC" />
          <line x1="50" y1="28" x2="50" y2="60" stroke="#C5A85A" strokeWidth="4" />
        </svg>
      )
    },
    {
      title: "Gown Stitching",
      desc: "Premium designer gowns, partywear gowns, wedding lehengas and frocks.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-current" fill="currentColor">
          {/* Stylized Gown */}
          <path d="M35,15 L65,15 L60,38 L80,85 L50,90 L20,85 L40,38 Z" />
          <path d="M42,15 C46,22 54,22 58,15 Z" fill="#FAF6EC" />
          <circle cx="50" cy="30" r="3" className="text-accent" />
        </svg>
      )
    },
    {
      title: "Saree Pre-stitched",
      desc: "Pre-pleating, saree draping, and designer ready-to-wear custom sarees.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-current" fill="currentColor">
          {/* Stylized Saree Draping */}
          <path d="M30,20 C40,20 60,30 70,20 L75,45 C65,55 35,50 25,45 Z" />
          <path d="M25,45 C35,60 45,75 50,90 C45,75 35,60 25,45 Z" fill="#C5A85A" />
          <path d="M40,40 L60,85 L70,80 L50,38 Z" />
        </svg>
      )
    },
    {
      title: "Alterations",
      desc: "Perfect fitting adjustments, resizing, length alterations, and repairs.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-current" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
          {/* Scissors */}
          <circle cx="35" cy="30" r="12" />
          <circle cx="65" cy="30" r="12" />
          <line x1="35" y1="42" x2="60" y2="80" />
          <line x1="65" y1="42" x2="40" y2="80" />
        </svg>
      )
    },
    {
      title: "Custom Designs",
      desc: "Tailored custom outfits from your inspiration pictures or bespoke designs.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-current" fill="currentColor">
          {/* Mannequin / Dress form */}
          <path d="M35,20 L65,20 L60,50 L52,70 L52,85 L60,85 L60,90 L40,90 L40,85 L48,85 L48,70 L40,50 Z" />
          <line x1="50" y1="5" x2="50" y2="20" stroke="currentColor" strokeWidth="4" />
        </svg>
      )
    }
  ];

  const gentsServices = [
    {
      title: "Shirt Stitching",
      desc: "Formal shirts, casual slim-fits, designer kurtis, and custom collars.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-current" fill="currentColor">
          {/* Shirt */}
          <path d="M20,20 L35,15 L50,22 L65,15 L80,20 L85,45 L70,45 L70,85 L30,85 L30,45 L15,45 Z" />
          <line x1="50" y1="28" x2="50" y2="85" stroke="#C5A85A" strokeWidth="3" />
          <circle cx="50" cy="40" r="2.5" fill="#FAF6EC" />
          <circle cx="50" cy="55" r="2.5" fill="#FAF6EC" />
          <circle cx="50" cy="70" r="2.5" fill="#FAF6EC" />
        </svg>
      )
    },
    {
      title: "Pant Stitching",
      desc: "Formal trousers, chinos, cotton pants, pleated, and modern trousers.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-current" fill="currentColor">
          {/* Pants / Trousers */}
          <path d="M30,15 L70,15 L75,85 L53,85 L50,45 L47,85 L25,85 Z" />
          <path d="M30,15 L70,15 L68,23 L32,23 Z" fill="#C5A85A" />
        </svg>
      )
    },
    {
      title: "Kurta Stitching",
      desc: "Traditional wedding kurtas, sherwanis, pathani suits, and casual kurtas.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-current" fill="currentColor">
          {/* Kurta */}
          <path d="M25,20 L35,15 L50,25 L65,15 L75,20 L75,85 L65,85 L65,65 L35,65 L35,85 L25,85 Z" />
          <path d="M45,25 L55,25 L50,45 Z" fill="#C5A85A" />
        </svg>
      )
    },
    {
      title: "Coat & Blazer",
      desc: "Wedding sherwanis, formal coats, single/double breasted designer suits.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-current" fill="currentColor">
          {/* Blazer Suit */}
          <path d="M20,20 L35,15 L50,30 L65,15 L80,20 L80,85 L20,85 Z" />
          <path d="M35,15 L50,45 L65,15 Z" fill="#FAF6EC" />
          <path d="M35,15 L45,45 L50,45 L35,15 Z" fill="#C5A85A" />
          <path d="M65,15 L55,45 L50,45 L65,15 Z" fill="#C5A85A" />
          <circle cx="50" cy="60" r="3" fill="#C5A85A" />
        </svg>
      )
    },
    {
      title: "Alterations",
      desc: "Perfect blazer fitting, shirt sizing, pants waist adjustments, and resizing.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-current" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
          {/* Gents Alterations (Scissors) */}
          <circle cx="35" cy="30" r="12" />
          <circle cx="65" cy="30" r="12" />
          <line x1="35" y1="42" x2="60" y2="80" />
          <line x1="65" y1="42" x2="40" y2="80" />
        </svg>
      )
    },
    {
      title: "Uniform Stitching",
      desc: "School uniforms, office corporates, security coats, and institutional shirts.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-current" fill="currentColor">
          {/* Uniform Icon */}
          <path d="M25,20 L75,20 L80,45 L65,45 L65,85 L35,85 L35,45 L20,45 Z" />
          <rect x="38" y="28" width="10" height="12" fill="#C5A85A" />
          <rect x="52" y="28" width="10" height="12" fill="#C5A85A" />
        </svg>
      )
    }
  ];

  // Pricing Estimator state and calculators
  const garmentTypes = [
    { name: "Designer Blouse (Ladies)", baseCost: 800, days: 4 },
    { name: "Chudidar Suit (Ladies)", baseCost: 1000, days: 5 },
    { name: "Bridal Lehenga Gown (Ladies)", baseCost: 3500, days: 8 },
    { name: "Formal Gents Shirt", baseCost: 600, days: 3 },
    { name: "Formal Gents Pants", baseCost: 700, days: 3 },
    { name: "Festive Kurta (Gents)", baseCost: 800, days: 4 },
    { name: "Custom Blazer Suit (Gents)", baseCost: 4500, days: 10 }
  ];

  const complexOptions = [
    { name: "Standard Fit (No Maggam)", cost: 0, days: 0 },
    { name: "Padded Stitch & Piping Accent", cost: 300, days: 1 },
    { name: "Custom Lining & Designer Back", cost: 600, days: 1 },
    { name: "Heavy Maggam Handwork Embroidery", cost: 2000, days: 3 }
  ];

  const fabricTypes = [
    { name: "Premium Cotton / Linen", cost: 0, days: 0 },
    { name: "Fine Raw Silk / Satin", cost: 400, days: 1 },
    { name: "Heavy Georgette / Netting", cost: 500, days: 1 },
    { name: "Royal Velvet Fabric", cost: 700, days: 1 }
  ];

  const [selGarment, setSelGarment] = useState(0);
  const [selComplex, setSelComplex] = useState(0);
  const [selFabric, setSelFabric] = useState(0);

  const calcCost = garmentTypes[selGarment].baseCost + complexOptions[selComplex].cost + fabricTypes[selFabric].cost;
  const calcDays = garmentTypes[selGarment].days + complexOptions[selComplex].days + fabricTypes[selFabric].days;

  const handleBookEstimate = () => {
    const textMsg = `Hi Satya Boutique! I would like to book a custom tailoring service using the website price estimator.\n\n` +
      `👗 Garment: ${garmentTypes[selGarment].name}\n` +
      `💎 Stitches Style: ${complexOptions[selComplex].name}\n` +
      `🧵 Fabric Material: ${fabricTypes[selFabric].name}\n` +
      `💰 Estimated Stitch Cost: ₹${calcCost}\n` +
      `⏳ Turnaround: Approx. ${calcDays} Days\n\n` +
      `Please let me know your availability for fitting measurements!`;
    
    window.open(`https://wa.me/919849811619?text=${encodeURIComponent(textMsg)}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-serif tracking-widest text-lg font-semibold block uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Bespoke Tailoring & Stitching
          </h2>
          <div className="w-24 h-[2px] bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 font-sans">
            We offer a wide range of premium tailoring and boutique services for both ladies and gents. 
            From elegant designer gowns and blouses to sophisticated menswear suits and traditional wear.
          </p>
        </div>

        {/* LADIES TAILORING SERVICES */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-10">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-primary tracking-wide uppercase">
              Ladies Services
            </h3>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-accent to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ladiesServices.map((service, index) => (
              <div 
                key={index} 
                className="group bg-surface border border-borderGold p-6 rounded-2xl hover:bg-primary hover:shadow-xl transition-all duration-300 flex items-start space-x-5 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full border border-accent/30 bg-white flex items-center justify-center shadow-inner group-hover:bg-primary-dark group-hover:border-accent transition-all duration-300 text-primary group-hover:text-accent">
                  {service.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-primary group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 group-hover:text-gray-200 font-sans text-sm leading-relaxed transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GENTS TAILORING SERVICES */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-10">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-primary tracking-wide uppercase">
              Gents Services
            </h3>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-accent to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gentsServices.map((service, index) => (
              <div 
                key={index} 
                className="group bg-surface border border-borderGold p-6 rounded-2xl hover:bg-primary hover:shadow-xl transition-all duration-300 flex items-start space-x-5 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full border border-accent/30 bg-white flex items-center justify-center shadow-inner group-hover:bg-primary-dark group-hover:border-accent transition-all duration-300 text-primary group-hover:text-accent">
                  {service.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-primary group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 group-hover:text-gray-200 font-sans text-sm leading-relaxed transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 SUGGESTIONS ADDITION 2: INTERACTIVE CUSTOM PRICE & TIMELINE ESTIMATOR */}
        <div className="mb-20 bg-surface border-2 border-borderGold rounded-3xl p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-borderGold">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary text-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary">Stitching Price & Time Estimator</h3>
                <p className="text-gray-500 font-sans text-xs uppercase tracking-widest font-semibold mt-0.5">Calculate your luxury tailor custom quote</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input selectors */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Garment Selector */}
              <div>
                <label className="block text-primary font-serif font-bold text-base mb-2">1. Select Garment Style</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {garmentTypes.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelGarment(idx)}
                      className={`py-3 px-4 rounded-xl font-sans text-xs tracking-wider uppercase font-medium border text-center transition-all duration-300 ${
                        selGarment === idx 
                          ? 'bg-primary border-primary text-white shadow-md' 
                          : 'bg-white border-borderGold text-secondary hover:border-accent hover:bg-accent-light'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Complexity Selector */}
              <div>
                <label className="block text-primary font-serif font-bold text-base mb-2">2. Stitches Work Complexity</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {complexOptions.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelComplex(idx)}
                      className={`py-3 px-4 rounded-xl font-sans text-xs tracking-wider uppercase font-medium border text-center transition-all duration-300 ${
                        selComplex === idx 
                          ? 'bg-primary border-primary text-white shadow-md' 
                          : 'bg-white border-borderGold text-secondary hover:border-accent hover:bg-accent-light'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fabric Selector */}
              <div>
                <label className="block text-primary font-serif font-bold text-base mb-2">3. Fabric Material Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {fabricTypes.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelFabric(idx)}
                      className={`py-3 px-4 rounded-xl font-sans text-xs tracking-wider uppercase font-medium border text-center transition-all duration-300 ${
                        selFabric === idx 
                          ? 'bg-primary border-primary text-white shadow-md' 
                          : 'bg-white border-borderGold text-secondary hover:border-accent hover:bg-accent-light'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Results display box */}
            <div className="lg:col-span-4 bg-primary text-white rounded-2xl p-6 md:p-8 border-2 border-accent shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[360px]">
              {/* Subtle background quote ornament */}
              <div className="absolute top-0 right-0 w-24 h-24 border-b-2 border-l-2 border-accent/20 m-[-10px] transform rotate-45 select-none pointer-events-none"></div>

              <div>
                <span className="text-[10px] text-accent uppercase tracking-[0.25em] font-semibold font-sans block mb-1">Your Custom Estimate</span>
                <h4 className="font-serif text-xl font-bold text-white mb-6 border-b border-white/10 pb-3">{garmentTypes[selGarment].name.split(" ")[0]} Style</h4>
                
                {/* Breakdowns */}
                <div className="space-y-4 font-sans text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Base Stitch Cost:</span>
                    <span className="text-white font-medium">₹{garmentTypes[selGarment].baseCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Complexity Work:</span>
                    <span className="text-white font-medium">+₹{complexOptions[selComplex].cost}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span>Fabric Surcharge:</span>
                    <span className="text-white font-medium">+₹{fabricTypes[selFabric].cost}</span>
                  </div>
                </div>
              </div>

              {/* Total Card bottom */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-primary-dark/60 p-3.5 rounded-xl border border-white/5">
                    <span className="text-[9px] uppercase tracking-widest text-accent font-semibold block mb-0.5">Estimated Cost</span>
                    <span className="text-2xl font-serif font-bold text-accent">₹{calcCost}</span>
                  </div>
                  
                  <div className="text-center bg-primary-dark/60 p-3.5 rounded-xl border border-white/5 flex flex-col justify-center items-center">
                    <Calendar className="w-4 h-4 text-accent mb-0.5" />
                    <span className="text-[9px] uppercase tracking-widest text-accent font-semibold block mb-0.5">Ready In</span>
                    <span className="text-base font-serif font-bold text-white">{calcDays} Days</span>
                  </div>
                </div>

                <button 
                  onClick={handleBookEstimate}
                  className="w-full py-3.5 bg-accent hover:bg-accent-dark text-white rounded-xl shadow-lg transition-all duration-300 font-sans text-xs tracking-widest font-bold uppercase flex items-center justify-center space-x-2"
                >
                  <span>Book This Stitch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Guarantee Banner */}
        <div className="bg-primary text-white rounded-2xl p-6 md:p-8 text-center border-2 border-accent/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-dark"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm md:text-base font-serif uppercase tracking-widest text-accent">
            <div className="flex items-center space-x-2">
              <span className="text-white">✔</span>
              <span>Perfect Fit Guaranteed</span>
            </div>
            <span className="hidden md:inline text-white/40">•</span>
            <div className="flex items-center space-x-2">
              <span className="text-white">✔</span>
              <span>Quality Stitching</span>
            </div>
            <span className="hidden md:inline text-white/40">•</span>
            <div className="flex items-center space-x-2">
              <span className="text-white">✔</span>
              <span>Timely Delivery</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
