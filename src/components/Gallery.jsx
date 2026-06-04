import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    { id: 'ALL', name: 'ALL' },
    { id: 'LADIES', name: 'LADIES WEAR' },
    { id: 'BLOUSE', name: 'BLOUSE' },
    { id: 'GOWNS', name: 'GOWNS' },
    { id: 'GENTS', name: 'GENTS WEAR' },
    { id: 'KURTAS', name: 'KURTAS' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Royal Red Bridal Blouse",
      category: "BLOUSE",
      subcats: ["LADIES"],
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80",
      desc: "Intricate heavy gold zardozi hand embroidery on silk fabric."
    },
    {
      id: 2,
      title: "Elegant Emerald Gown",
      category: "GOWNS",
      subcats: ["LADIES"],
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80",
      desc: "Flowing velvet designer gown with customized neck work."
    },
    {
      id: 3,
      title: "Bridal Red Lehenga",
      category: "GOWNS",
      subcats: ["LADIES"],
      image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&auto=format&fit=crop&q=80",
      desc: "Traditional heavily-embroidered flared bridal wedding lehenga."
    },
    {
      id: 4,
      title: "Designer Embroidered Back",
      category: "BLOUSE",
      subcats: ["LADIES"],
      image: "/embroidered_back.png",
      desc: "Bespoke cutout back pattern with maggam and thread work."
    },
    {
      id: 5,
      title: "Mint Green Kurti Suit",
      category: "LADIES",
      subcats: ["LADIES"],
      image: "https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&auto=format&fit=crop&q=80",
      desc: "Summer-wear cotton kurti with customized lace detailing."
    },
    {
      id: 6,
      title: "Sunlit Yellow Flared Gown",
      category: "GOWNS",
      subcats: ["LADIES"],
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop&q=80",
      desc: "Lightweight georgette dress designed for premium festivals."
    },
    {
      id: 7,
      title: "Gents Mint Green Shirt",
      category: "GENTS",
      subcats: [],
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
      desc: "Premium linen summer casual shirt with double stitch."
    },
    {
      id: 8,
      title: "Formal White Dress Shirt",
      category: "GENTS",
      subcats: [],
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80",
      desc: "Crisp white cotton executive shirt with stiff premium collar."
    },
    {
      id: 9,
      title: "Royal Navy Blue Suit",
      category: "GENTS",
      subcats: [],
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
      desc: "Tailored three-piece wedding blazer with customized shoulders."
    },
    {
      id: 10,
      title: "Tan Khaki Trouser Pant",
      category: "GENTS",
      subcats: [],
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80",
      desc: "Perfect-fit flat front cotton stretchable formal trousers."
    },
    {
      id: 11,
      title: "Deep Maroon Silk Kurta",
      category: "KURTAS",
      subcats: ["GENTS"],
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80",
      desc: "Gents festive kurta with designer collar and cuff designs."
    },
    {
      id: 12,
      title: "Classic Cream Embroidered Kurta",
      category: "KURTAS",
      subcats: ["GENTS"],
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80",
      desc: "Lightweight cream designer wedding kurta with neck detailing."
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'LADIES') return item.subcats.includes('LADIES') || item.category === 'BLOUSE' || item.category === 'GOWNS';
    if (activeTab === 'GENTS') return item.category === 'GENTS' || item.subcats.includes('GENTS') || item.category === 'KURTAS';
    return item.category === activeTab;
  });

  return (
    <section id="gallery" className="py-20 bg-surface border-t border-b border-borderGold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-serif tracking-widest text-lg font-semibold block uppercase">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Our Work Gallery
          </h2>
          <div className="w-24 h-[2px] bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 font-sans">
            A glimpse of our latest premium stitching, bridal designs, and custom tailored gents outfits.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 border ${
                activeTab === tab.id
                  ? 'bg-primary border-primary text-white shadow-lg'
                  : 'bg-white border-borderGold text-secondary hover:bg-accent hover:border-accent hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-borderGold group relative hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setLightboxImage(item)}
            >
              {/* Photo Box */}
              <div className="overflow-hidden relative h-[280px]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-750 ease-out"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center text-white mx-auto mb-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <span className="text-white text-xs tracking-wider uppercase font-sans">View Stitch Details</span>
                  </div>
                </div>
              </div>

              {/* Text details */}
              <div className="p-5 border-t border-borderGold">
                <span className="text-[10px] uppercase tracking-widest text-accent font-sans font-semibold">
                  {item.category === 'LADIES' || item.category === 'GOWNS' || item.category === 'BLOUSE' ? 'LADIES WEAR' : 'GENTS WEAR'} • {item.category}
                </span>
                <h4 className="font-serif text-base font-bold text-primary mb-1 mt-0.5 line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-gray-500 font-sans text-xs line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite "View More" Simulated Interaction */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => alert("Loading more premium designs from our catalogue...")}
            className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-sans text-sm font-semibold uppercase tracking-widest rounded-lg shadow-lg border border-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            View More Designs
          </button>
        </div>

        {/* LIGHTBOX MODAL */}
        {lightboxImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setLightboxImage(null)}></div>
            
            {/* Content box */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full relative z-10 border-2 border-accent">
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative h-[340px] md:h-[400px]">
                <img 
                  src={lightboxImage.image} 
                  alt={lightboxImage.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6 md:p-8 bg-surface">
                <span className="text-[10px] uppercase tracking-widest text-accent font-sans font-semibold block mb-1">
                  {lightboxImage.category} Catalog Item
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                  {lightboxImage.title}
                </h3>
                <p className="text-secondary font-sans text-sm md:text-base leading-relaxed">
                  {lightboxImage.desc}
                </p>
                
                {/* Book this look button */}
                <div className="mt-6">
                  <a 
                    href="https://wa.me/919849811619?text=Hi%2C%20I'm%20interested%20in%20custom%20stitching%20for%20a%20look%20similar%20to%20your%20Gallery%20item%3A%20" 
                    target="_blank"
                    className="block w-full py-3 bg-accent hover:bg-accent-dark text-white text-center font-sans font-semibold uppercase tracking-wider text-sm rounded-xl shadow transition-colors"
                  >
                    Stitch This Design
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;
