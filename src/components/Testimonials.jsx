import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      quote: "Excellent stitching and perfect fitting! Very happy with the designer blouse stitching. Highly recommended!",
      stars: 5,
      author: "Lakshmi Devi"
    },
    {
      id: 2,
      quote: "Got my wedding blouse and lehenga stitched here. The work is neat and the finishing is amazing!",
      stars: 5,
      author: "Sneha R."
    },
    {
      id: 3,
      quote: "Best tailoring for gents. Shirts and pants fit perfectly. Very professional and on-time delivery.",
      stars: 5,
      author: "Ravi Kiran"
    },
    {
      id: 4,
      quote: "The designer blouse stitching is a masterpiece! The custom embroidery fits my expectations exactly.",
      stars: 5,
      author: "Anjali Prasad"
    },
    {
      id: 5,
      quote: "Very professional gents tailoring in Indrapalem. Got my formal suits tailored on time. Highly recommended!",
      stars: 5,
      author: "Suresh Varma"
    },
    {
      id: 6,
      quote: "Pre-stitched saree services are spectacular. It saved me so much hassle during my cousin's marriage!",
      stars: 5,
      author: "Priyadarshini K."
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // Auto slide effect (Slides every 3.5 seconds, paused on hover)
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 3500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  // Helper to get 3 items circular array based on start index
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section id="testimonials" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-serif tracking-widest text-lg font-semibold block uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-[2px] bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 font-sans text-sm md:text-base">
            We take pride in the trust, confidence, and absolute happiness of our custom tailoring customers.
          </p>
        </div>

        {/* Carousel Outer frame */}
        <div 
          className="relative max-w-7xl mx-auto px-2 md:px-12 mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main 3-box container */}
          {/* Responsive setup: On mobile displays 1 card, on tablet 2 cards, on desktop 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px] transition-all duration-500 ease-in-out">
            
            {/* Show first review (Always visible on all screen sizes) */}
            <div className="bg-surface border-2 border-borderGold p-8 rounded-3xl relative shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1">
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-accent shadow-lg">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              <div className="space-y-4 pt-2">
                <p className="text-secondary font-sans text-sm md:text-base leading-relaxed italic">
                  "{visibleReviews[0].quote}"
                </p>
              </div>
              <div className="mt-8 border-t border-borderGold pt-4 space-y-2">
                <div className="flex items-center space-x-1">
                  {[...Array(visibleReviews[0].stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <h4 className="font-serif text-sm md:text-base font-bold text-primary tracking-wide">
                  — {visibleReviews[0].author}
                </h4>
              </div>
            </div>

            {/* Show second review (Visible on md and lg sizes) */}
            <div className="hidden md:flex bg-surface border-2 border-borderGold p-8 rounded-3xl relative shadow-md hover:shadow-xl transition-all duration-500 flex-col justify-between transform hover:-translate-y-1">
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-accent shadow-lg">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              <div className="space-y-4 pt-2">
                <p className="text-secondary font-sans text-sm md:text-base leading-relaxed italic">
                  "{visibleReviews[1].quote}"
                </p>
              </div>
              <div className="mt-8 border-t border-borderGold pt-4 space-y-2">
                <div className="flex items-center space-x-1">
                  {[...Array(visibleReviews[1].stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <h4 className="font-serif text-sm md:text-base font-bold text-primary tracking-wide">
                  — {visibleReviews[1].author}
                </h4>
              </div>
            </div>

            {/* Show third review (Visible only on lg size) */}
            <div className="hidden lg:flex bg-surface border-2 border-borderGold p-8 rounded-3xl relative shadow-md hover:shadow-xl transition-all duration-500 flex-col justify-between transform hover:-translate-y-1">
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-accent shadow-lg">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              <div className="space-y-4 pt-2">
                <p className="text-secondary font-sans text-sm md:text-base leading-relaxed italic">
                  "{visibleReviews[2].quote}"
                </p>
              </div>
              <div className="mt-8 border-t border-borderGold pt-4 space-y-2">
                <div className="flex items-center space-x-1">
                  {[...Array(visibleReviews[2].stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <h4 className="font-serif text-sm md:text-base font-bold text-primary tracking-wide">
                  — {visibleReviews[2].author}
                </h4>
              </div>
            </div>

          </div>

          {/* Left Arrow Button */}
          <button 
            onClick={handlePrev}
            className="absolute left-[-15px] md:left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-primary border border-borderGold text-primary hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 z-10 focus:outline-none"
            aria-label="Previous Reviews"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={handleNext}
            className="absolute right-[-15px] md:right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-primary border border-borderGold text-primary hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 z-10 focus:outline-none"
            aria-label="Next Reviews"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Dot Indicators (Circular wrap based on 6 reviews) */}
        <div className="flex justify-center items-center space-x-2.5 mb-16">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                startIndex === index 
                  ? 'bg-accent scale-120 shadow-md' 
                  : 'bg-accent-light hover:bg-accent/40 border border-accent/20'
              }`}
              aria-label={`Shift carousel to index ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Lower Banner Ribbon - Google Reviews */}
        <div className="bg-primary-dark text-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-accent relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-dark"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-8">
            {/* Google Rating Details */}
            <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-3 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-white font-sans text-2xl font-bold tracking-tight">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </span>
                <span className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">4.9</span>
              </div>
              
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <span className="text-xs uppercase tracking-widest text-accent font-sans font-medium">
                Based on 150+ Google Reviews
              </span>
            </div>

            {/* Google review action */}
            <div className="text-center">
              <a 
                href="https://g.page/r/CeYcAAacUhwGEBM/review" 
                target="_blank" 
                className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white text-xs tracking-widest uppercase font-semibold font-sans rounded-lg shadow-md transition-colors"
              >
                Write A Review
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
