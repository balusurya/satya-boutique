import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Phone, MessageSquare, Menu, X, Calendar, Ruler, CheckCircle, Info } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // SUGGESTION 1: ACTIVE SCROLL NAVIGATION (SCROLLSPY) STATE
  const [activeSection, setActiveSection] = useState('home');

  // SUGGESTION 3: SMART BOOKING MODAL STATE
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    garment: 'Designer Blouse (Ladies)',
    date: '',
    time: '10:00 AM'
  });

  // SUGGESTION 5: VIRTUAL MEASUREMENT ASSISTANT MODAL STATE
  const [measurementOpen, setMeasurementOpen] = useState(false);
  const [measurements, setMeasurements] = useState({
    gender: 'ladies',
    shoulder: '',
    chest: '',
    waist: '',
    sleeve: '',
    length: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SUGGESTION 1: SCROLLSPY INTERSECTION OBSERVER SETUP
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies the center viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleCall = () => {
    window.open('tel:9849811619', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919849811619', '_blank');
  };

  // SUGGESTION 3: APPOINTMENT MESSAGE FORWARD TO WHATSAPP
  const submitBooking = (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.date) {
      alert("Please fill in your Name and preferred Trial Date!");
      return;
    }

    let fittingDataStr = "";
    if (measurements.shoulder || measurements.chest) {
      fittingDataStr = `\n📐 Measurements Shared:\n` +
        `- Gender Style: ${measurements.gender.toUpperCase()}\n` +
        (measurements.shoulder ? `- Shoulder: ${measurements.shoulder} in\n` : '') +
        (measurements.chest ? `- Chest/Bust: ${measurements.chest} in\n` : '') +
        (measurements.waist ? `- Waist: ${measurements.waist} in\n` : '') +
        (measurements.sleeve ? `- Sleeve: ${measurements.sleeve} in\n` : '') +
        (measurements.length ? `- Length: ${measurements.length} in\n` : '');
    }

    const textMsg = `Hi Satya Boutique! I would like to book a tailoring and measurement consultation appointment.\n\n` +
      `👤 Client Name: ${bookingForm.name}\n` +
      `👗 Custom Garment: ${bookingForm.garment}\n` +
      `📅 Appointment Date: ${bookingForm.date}\n` +
      `⏰ Preferred Time: ${bookingForm.time}` +
      `${fittingDataStr}\n` +
      `Please let me know if this slot is available at your Indrapalem branch!`;

    window.open(`https://wa.me/919849811619?text=${encodeURIComponent(textMsg)}`, '_blank');
    setBookingOpen(false);
  };

  return (
    <div className="font-sans text-secondary min-h-screen bg-background selection:bg-primary selection:text-white">
      
      {/* Sticky Premium Header / Navigation Bar */}
      <nav 
        className={`fixed w-full z-[80] transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-primary shadow-xl py-3 border-accent/20' 
            : 'bg-background/95 backdrop-blur-md lg:bg-transparent py-5 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Mark & Typography */}
          <a href="#home" className="flex items-center space-x-3 group">
            {/* Elegant Sketch Icon */}
            <div className="w-11 h-11 bg-white hover:bg-accent border border-accent/20 rounded-full flex items-center justify-center text-primary shadow-md transition-colors duration-300">
              <svg className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 19h16M19 19v-4M8 19v-9c0-2.2 1.8-4 4-4h6c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-6" />
                <circle cx="12" cy="12" r="2" />
                <path d="M12 14v5M6 10h2M14 6V4M10 4h8" />
              </svg>
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className={`font-serif text-xl tracking-wider font-bold transition-colors ${scrolled ? 'text-white' : 'text-primary'}`}>
                Satya
              </span>
              <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-accent font-semibold -mt-1">
                Boutique
              </span>
            </div>
          </a>
          
          {/* Desktop Navigation Links (With suggestion 1: active scroll highlight) */}
          <div className="hidden lg:flex space-x-7 text-xs font-semibold tracking-widest uppercase items-center">
            <a 
              href="#home" 
              className={`hover:text-accent transition-all duration-300 border-b-2 pb-1 ${
                activeSection === 'home' 
                  ? 'text-accent border-accent font-bold' 
                  : (scrolled ? 'text-white border-transparent' : 'text-primary border-transparent')
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`hover:text-accent transition-all duration-300 border-b-2 pb-1 ${
                activeSection === 'about' 
                  ? 'text-accent border-accent font-bold' 
                  : (scrolled ? 'text-white border-transparent' : 'text-primary border-transparent')
              }`}
            >
              About Us
            </a>
            <a 
              href="#services" 
              className={`hover:text-accent transition-all duration-300 border-b-2 pb-1 ${
                activeSection === 'services' 
                  ? 'text-accent border-accent font-bold' 
                  : (scrolled ? 'text-white border-transparent' : 'text-primary border-transparent')
              }`}
            >
              Services
            </a>
            <a 
              href="#gallery" 
              className={`hover:text-accent transition-all duration-300 border-b-2 pb-1 ${
                activeSection === 'gallery' 
                  ? 'text-accent border-accent font-bold' 
                  : (scrolled ? 'text-white border-transparent' : 'text-primary border-transparent')
              }`}
            >
              Gallery
            </a>
            <a 
              href="#testimonials" 
              className={`hover:text-accent transition-all duration-300 border-b-2 pb-1 ${
                activeSection === 'testimonials' 
                  ? 'text-accent border-accent font-bold' 
                  : (scrolled ? 'text-white border-transparent' : 'text-primary border-transparent')
              }`}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className={`hover:text-accent transition-all duration-300 border-b-2 pb-1 ${
                activeSection === 'contact' 
                  ? 'text-accent border-accent font-bold' 
                  : (scrolled ? 'text-white border-transparent' : 'text-primary border-transparent')
              }`}
            >
              Contact Us
            </a>
            
            {/* Smart Booking Activation Button */}
            <button 
              onClick={() => setBookingOpen(true)}
              className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white rounded-md transition-all duration-300 shadow-md font-semibold tracking-widest text-[10px] uppercase hover:scale-102 flex items-center space-x-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 hover:text-accent focus:outline-none transition-colors ${scrolled ? 'text-white' : 'text-primary'}`}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-primary/95 backdrop-blur-md animate-fade-in flex flex-col justify-center">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-accent"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="flex flex-col items-center space-y-6 text-base font-semibold tracking-widest uppercase text-white p-8">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">About Us</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Services</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Gallery</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Testimonials</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Contact Us</a>
            
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setBookingOpen(true);
              }}
              className="w-full py-3.5 bg-accent hover:bg-accent-dark text-white rounded-lg text-sm font-semibold tracking-widest uppercase shadow-lg transition-colors mt-6 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-[70] flex flex-col space-y-3">
        {/* Fit assistant Floating Button */}
        <button 
          onClick={() => setMeasurementOpen(true)}
          className="w-12 h-12 bg-primary hover:bg-primary-dark text-accent rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border border-accent/30"
          title="Virtual Fit Assistant"
        >
          <Ruler className="w-5.5 h-5.5 text-accent" />
        </button>

        {/* Call Floating */}
        <button 
          onClick={handleCall}
          className="w-12 h-12 bg-accent hover:bg-accent-dark text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border border-white/20"
          title="Call Us"
        >
          <Phone className="w-5 h-5" />
        </button>

        {/* WhatsApp Floating */}
        <button 
          onClick={handleWhatsApp}
          className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border border-white/20"
          title="WhatsApp Us"
        >
          <MessageSquare className="w-5.5 h-5.5 fill-current" />
        </button>
      </div>

      {/* SUGGESTION 3: SMART BOOKING APPOINTMENT MODAL POPUP */}
      {bookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="absolute inset-0" onClick={() => setBookingOpen(false)}></div>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full relative z-10 border-2 border-accent">
            <button 
              onClick={() => setBookingOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 text-secondary flex items-center justify-center transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Head */}
            <div className="bg-primary text-white p-6 md:p-8 border-b-2 border-accent">
              <span className="text-[10px] text-accent uppercase tracking-widest font-sans font-bold block mb-1">Satya Boutique indrapalem</span>
              <h3 className="font-serif text-2xl font-bold">Book Fitting Appointment</h3>
            </div>

            {/* Form */}
            <form onSubmit={submitBooking} className="p-6 md:p-8 space-y-5 bg-surface">
              <div>
                <label className="block text-primary font-serif font-bold text-sm mb-1.5">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your full name" 
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-borderGold focus:outline-none focus:border-accent text-secondary font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-primary font-serif font-bold text-sm mb-1.5">Preferred Date</label>
                  <input 
                    type="date" 
                    required
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-borderGold focus:outline-none focus:border-accent text-secondary font-sans"
                  />
                </div>
                <div>
                  <label className="block text-primary font-serif font-bold text-sm mb-1.5">Preferred Time</label>
                  <select 
                    value={bookingForm.time}
                    onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-borderGold focus:outline-none focus:border-accent text-secondary font-sans"
                  >
                    <option>09:30 AM</option>
                    <option>11:00 AM</option>
                    <option>12:30 PM</option>
                    <option>02:30 PM</option>
                    <option>04:00 PM</option>
                    <option>05:30 PM</option>
                    <option>07:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-primary font-serif font-bold text-sm mb-1.5">Select Garment</label>
                <select 
                  value={bookingForm.garment}
                  onChange={(e) => setBookingForm({...bookingForm, garment: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-borderGold focus:outline-none focus:border-accent text-secondary font-sans"
                >
                  <option>Designer Blouse (Ladies)</option>
                  <option>Chudidar Suit (Ladies)</option>
                  <option>Bridal Lehenga Gown (Ladies)</option>
                  <option>Formal Gents Shirt</option>
                  <option>Formal Gents Pants</option>
                  <option>Festive Kurta (Gents)</option>
                  <option>Custom Blazer Suit (Gents)</option>
                </select>
              </div>

              {/* Optional fitting attachment info */}
              <div className="bg-white border border-borderGold p-4 rounded-xl flex items-start space-x-3 text-xs">
                <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="space-y-1 font-sans text-gray-500">
                  <p className="font-semibold text-primary">Measurement Assist Attached?</p>
                  {measurements.shoulder || measurements.chest ? (
                    <p className="text-green-600 font-medium">✓ Yes! Custom fitting parameters will be forwarded automatically.</p>
                  ) : (
                    <p>No custom measurements sharing. Click the ruler icon in the floating sidebar if you want to share custom fits!</p>
                  )}
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent-dark text-white rounded-xl shadow-lg transition-colors font-sans text-xs tracking-widest font-bold uppercase flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* SUGGESTION 5: VIRTUAL MEASUREMENT / FITTING ASSISTANT MODAL POPUP */}
      {measurementOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="absolute inset-0" onClick={() => setMeasurementOpen(false)}></div>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full relative z-10 border-2 border-accent">
            <button 
              onClick={() => setMeasurementOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 text-secondary flex items-center justify-center transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Head */}
            <div className="bg-primary text-white p-6 border-b-2 border-accent flex justify-between items-center">
              <div>
                <span className="text-[10px] text-accent uppercase tracking-widest font-sans font-bold block">Perfect Fit Assistant</span>
                <h3 className="font-serif text-xl md:text-2xl font-bold">Virtual Measurement Guide</h3>
              </div>
              <Ruler className="w-8 h-8 text-accent hidden sm:block" />
            </div>

            {/* Content Body */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Left Form */}
              <div className="p-6 md:p-8 space-y-4 bg-surface order-2 md:order-1">
                {/* Gender switch */}
                <div className="flex space-x-2 mb-4 bg-white border border-borderGold p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setMeasurements({...measurements, gender: 'ladies'})}
                    className={`flex-1 py-2 font-sans text-xs tracking-wider uppercase font-semibold rounded-lg transition-colors ${
                      measurements.gender === 'ladies' ? 'bg-primary text-white' : 'text-secondary hover:bg-accent-light'
                    }`}
                  >
                    Ladies Fit
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeasurements({...measurements, gender: 'gents'})}
                    className={`flex-1 py-2 font-sans text-xs tracking-wider uppercase font-semibold rounded-lg transition-colors ${
                      measurements.gender === 'gents' ? 'bg-primary text-white' : 'text-secondary hover:bg-accent-light'
                    }`}
                  >
                    Gents Fit
                  </button>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div>
                    <label className="block text-primary font-serif font-bold text-xs mb-1">Shoulder Width (inches)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 14.5"
                      value={measurements.shoulder}
                      onChange={(e) => setMeasurements({...measurements, shoulder: e.target.value})}
                      className="w-full px-3 py-2 rounded-lg border border-borderGold focus:outline-none focus:border-accent text-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-primary font-serif font-bold text-xs mb-1">Chest / Bust size (inches)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 36"
                      value={measurements.chest}
                      onChange={(e) => setMeasurements({...measurements, chest: e.target.value})}
                      className="w-full px-3 py-2 rounded-lg border border-borderGold focus:outline-none focus:border-accent text-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-primary font-serif font-bold text-xs mb-1">Waist size (inches)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 30"
                      value={measurements.waist}
                      onChange={(e) => setMeasurements({...measurements, waist: e.target.value})}
                      className="w-full px-3 py-2 rounded-lg border border-borderGold focus:outline-none focus:border-accent text-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-primary font-serif font-bold text-xs mb-1">Sleeve Length (inches)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 18"
                      value={measurements.sleeve}
                      onChange={(e) => setMeasurements({...measurements, sleeve: e.target.value})}
                      className="w-full px-3 py-2 rounded-lg border border-borderGold focus:outline-none focus:border-accent text-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-primary font-serif font-bold text-xs mb-1">Desired Garment Length (inches)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 24"
                      value={measurements.length}
                      onChange={(e) => setMeasurements({...measurements, length: e.target.value})}
                      className="w-full px-3 py-2 rounded-lg border border-borderGold focus:outline-none focus:border-accent text-secondary"
                    />
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setMeasurementOpen(false);
                    setBookingOpen(true);
                  }}
                  className="w-full py-3 bg-accent hover:bg-accent-dark text-white rounded-xl shadow-md transition-colors font-sans text-xs tracking-widest font-bold uppercase flex items-center justify-center space-x-2 mt-4"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Attach Fits & Book</span>
                </button>
              </div>

              {/* Right Diagram Illustration */}
              <div className="p-6 md:p-8 bg-white border-l border-borderGold flex flex-col justify-center items-center text-center order-1 md:order-2">
                
                {/* Elegant Dress Form Vector drawing for measurement instruction */}
                <div className="relative w-44 h-52 mb-4">
                  <svg className="w-full h-full text-secondary" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {/* Hanger / neck */}
                    <path d="M50 15v10M38 25c12-5 12-5 24 0M38 25 L32 40 L35 70 L42 90 L58 90 L65 70 L68 40 L62 25 Z" fill="#FCF9F2" />
                    {/* Stand */}
                    <line x1="50" y1="90" x2="50" y2="115" stroke="currentColor" strokeWidth="2.5" />
                    <line x1="38" y1="115" x2="62" y2="115" stroke="currentColor" strokeWidth="3" />
                    
                    {/* Measurement arrows visualization */}
                    {/* Shoulder line */}
                    <line x1="32" y1="28" x2="68" y2="28" stroke="#C5A85A" strokeWidth="1.5" strokeDasharray="3,3" />
                    <circle cx="50" cy="28" r="2" fill="#C5A85A" />
                    
                    {/* Chest line */}
                    <line x1="33" y1="48" x2="67" y2="48" stroke="#C5A85A" strokeWidth="1.5" strokeDasharray="3,3" />
                    <circle cx="50" cy="48" r="2" fill="#C5A85A" />
                    
                    {/* Waist line */}
                    <line x1="36" y1="68" x2="64" y2="68" stroke="#C5A85A" strokeWidth="1.5" strokeDasharray="3,3" />
                    <circle cx="50" cy="68" r="2" fill="#C5A85A" />
                  </svg>
                  
                  {/* Indicators */}
                  <span className="absolute top-[20%] left-[-15px] text-[9px] font-sans font-bold bg-accent text-white py-0.5 px-1.5 rounded">Shoulder</span>
                  <span className="absolute top-[38%] right-[-15px] text-[9px] font-sans font-bold bg-accent text-white py-0.5 px-1.5 rounded">Bust/Chest</span>
                  <span className="absolute top-[55%] left-[-10px] text-[9px] font-sans font-bold bg-accent text-white py-0.5 px-1.5 rounded">Waist</span>
                </div>

                <h4 className="font-serif text-sm font-bold text-primary mb-1">Easy Fitting Guide</h4>
                <p className="text-gray-500 font-sans text-xs leading-relaxed max-w-[220px]">
                  Take measurements snug against your body using a flexible tape measure. Prefilling these sizes saves trial fitting time!
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Beautiful High-Fidelity Footer */}
      <footer className="bg-primary text-white pt-16 pb-8 border-t-2 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12 items-start">
            
            {/* Col 1: Brand & Logo */}
            <div className="lg:col-span-4 space-y-4">
              <a href="#home" className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-md border border-accent/20">
                  <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 19h16M19 19v-4M8 19v-9c0-2.2 1.8-4 4-4h6c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-6" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 14v5M6 10h2M14 6V4M10 4h8" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl tracking-wider font-bold text-white">
                    Satya
                  </span>
                  <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-accent font-semibold -mt-1">
                    Boutique
                  </span>
                </div>
              </a>
              <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-sm">
                Custom tailoring specialists for both ladies and gents. Experience the ultimate satisfaction of designer garments tailored to absolute perfection.
              </p>
              <p className="text-accent font-serif italic text-sm">"Perfect Fit, Perfect You."</p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-serif text-base font-bold text-accent uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400 font-sans">
                <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
                <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-serif text-base font-bold text-accent uppercase tracking-wider">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-400 font-sans">
                <li><a href="#services" className="hover:text-accent transition-colors">Ladies Tailoring</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Gents Tailoring</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Custom Designs</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Alterations</a></li>
              </ul>
            </div>

            {/* Col 4: Follow Us */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-serif text-base font-bold text-accent uppercase tracking-wider">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  className="w-10 h-10 bg-primary-dark hover:bg-accent border border-accent/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  className="w-10 h-10 bg-primary-dark hover:bg-accent border border-accent/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a 
                  href="https://wa.me/919849811619" 
                  target="_blank" 
                  className="w-10 h-10 bg-primary-dark hover:bg-accent border border-accent/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                </a>
              </div>
              
              <div className="pt-2 text-sm text-gray-400 font-sans space-y-1">
                <span className="block font-bold text-white uppercase text-xs tracking-wider">Call Us</span>
                <span className="block">+91 98498 11619</span>
                <span className="block">+91 99592 20696</span>
              </div>
            </div>

            {/* Col 5: Location Details */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-serif text-base font-bold text-accent uppercase tracking-wider">Location</h4>
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                Near Z Bridge, Shivaji Theatre Road,<br />
                Indrapalem, Andhra Pradesh 533103
              </p>
            </div>

          </div>

          {/* Bottom Copyright & Designed with love */}
          <div className="pt-8 mt-8 border-t border-white/10 text-center flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
            <p>
              &copy; {new Date().getFullYear()} Satya Boutique. All Rights Reserved.
            </p>
            <p className="flex items-center space-x-1 font-serif italic text-accent font-medium">
              <span>Designed with</span>
              <span className="text-red-500 text-sm">♥</span>
              <span>for perfect you</span>
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;
