import React, { useState } from 'react';

const categories = ['Men', 'Women', 'Children'];

const portfolioData = {
  Men: [
    { id: 1, title: 'Bespoke Charcoal Suit', image: '/portfolio_men.png' },
    { id: 2, title: 'Classic Tuxedo', image: '/portfolio_men.png' },
    { id: 3, title: 'Tailored Overcoat', image: '/portfolio_men.png' },
  ],
  Women: [
    { id: 4, title: 'Golden Evening Gown', image: '/portfolio_women.png' },
    { id: 5, title: 'Silk Blouse', image: '/portfolio_women.png' },
    { id: 6, title: 'Tailored Power Suit', image: '/portfolio_women.png' },
  ],
  Children: [
    { id: 7, title: 'Formal Suit Set', image: '/portfolio_children.png' },
    { id: 8, title: 'Flower Girl Dress', image: '/portfolio_children.png' },
    { id: 9, title: 'Communion Outfit', image: '/portfolio_children.png' },
  ]
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Men');

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            View our gallery of completed garments, showcasing our commitment to quality and detail.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-6 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-lg font-medium pb-2 border-b-2 transition-colors duration-300 ${
                activeCategory === category 
                  ? 'border-accent text-primary' 
                  : 'border-transparent text-gray-500 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData[activeCategory].map((item) => (
            <div key={item.id} className="flex flex-col rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div 
                className="w-full h-80 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="p-6 bg-surface text-center border-t border-gray-100">
                <h3 className="text-lg font-serif text-primary">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
