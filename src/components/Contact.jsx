import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const handleCall = (number) => {
    window.open(`tel:${number}`, '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919849811619', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-surface border-t border-b border-borderGold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Details Column */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-accent font-serif tracking-widest text-lg font-semibold block uppercase">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary leading-tight">
                Get In Touch
              </h2>
              <div className="w-16 h-[2px] bg-accent"></div>
              
              <p className="text-secondary font-sans leading-relaxed">
                We take pride in crafting your perfect style. Reach out to us for custom design bookings, 
                fitting consultations, or any styling inquiries.
              </p>
            </div>

            {/* Contacts details box */}
            <div className="space-y-6 bg-white border border-borderGold p-6 md:p-8 rounded-2xl shadow-sm">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light text-primary flex items-center justify-center shadow-inner">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-primary uppercase tracking-wider mb-1">Address</h4>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">
                    Near Z Bridge, Shivaji Theatre Road,<br />
                    Indrapalem, Andhra Pradesh 533103
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light text-primary flex items-center justify-center shadow-inner">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-primary uppercase tracking-wider mb-1">Call Us Now</h4>
                  <div className="text-gray-600 font-sans text-sm space-y-1">
                    <button 
                      onClick={() => handleCall('9849811619')}
                      className="block hover:text-accent font-semibold transition-colors"
                    >
                      +91 98498 11619
                    </button>
                    <button 
                      onClick={() => handleCall('9959220696')}
                      className="block hover:text-accent font-semibold transition-colors"
                    >
                      +91 99592 20696
                    </button>
                  </div>
                </div>
              </div>

              {/* WhatsApp chat */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shadow-inner">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-primary uppercase tracking-wider mb-1">WhatsApp Chat</h4>
                  <button 
                    onClick={handleWhatsApp}
                    className="text-green-600 hover:text-green-700 font-sans text-sm font-bold flex items-center space-x-1.5 transition-colors"
                  >
                    <span>Chat with us on WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light text-primary flex items-center justify-center shadow-inner">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-primary uppercase tracking-wider mb-1">Email Address</h4>
                  <a 
                    href="mailto:satyaboutique2026@gmail.com"
                    className="text-gray-600 font-sans text-sm hover:text-accent transition-colors"
                  >
                    satyaboutique2026@gmail.com
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light text-primary flex items-center justify-center shadow-inner">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-primary uppercase tracking-wider mb-1">Opening Hours</h4>
                  <div className="text-gray-600 font-sans text-sm leading-relaxed space-y-0.5">
                    <p><span className="font-semibold text-primary">Mon - Sat:</span> 9:00 AM - 8:00 PM</p>
                    <p><span className="font-semibold text-primary">Sunday:</span> 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Map Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white border-2 border-borderGold p-4 rounded-3xl shadow-md h-full flex flex-col">
              
              {/* Map Iframe - Dynamically grows to fit the section height perfectly */}
              <div className="w-full flex-grow min-h-[320px] md:min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden shadow-inner border border-borderGold relative">
                <iframe
                  title="Satya Boutique Google Map location near Indrapalem Z Bridge"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.8239023027877!2d82.22728957487053!3d16.98310058386629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382877a5ea29b3%3A0xe54d32f306637e19!2sZ%20Bridge!5e0!3m2!1sen!2sin!4v1717320000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>

              {/* Map bottom bar */}
              <div className="mt-4 pt-3 border-t border-borderGold text-center">
                <a 
                  href="https://maps.google.com/?q=Satya+Boutique+Indrapalem+Andhra+Pradesh" 
                  target="_blank" 
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent-dark font-sans text-sm font-semibold uppercase tracking-wider transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
