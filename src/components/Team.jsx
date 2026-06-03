import React from 'react';

const teamMembers = [
  {
    name: 'Eleanor Vance',
    role: 'Master Tailor - Women\'s Wear',
    experience: '20+ years experience in bridal and evening gowns',
    image: '/tailor_team.png'
  },
  {
    name: 'Julian Hayes',
    role: 'Head Cutter - Men\'s Wear',
    experience: '15 years experience in bespoke suits and outerwear',
    image: '/tailor_team.png'
  },
  {
    name: 'Sofia Reyes',
    role: 'Senior Seamstress',
    experience: '12 years experience in delicate fabrics and alterations',
    image: '/tailor_team.png'
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Our Tailors</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Meet the experienced artisans dedicated to perfecting your wardrobe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 text-center pb-8 border border-gray-100">
              <div 
                className="w-full h-72 bg-cover bg-top mb-6"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>
              <h3 className="text-2xl font-serif text-primary mb-2">{member.name}</h3>
              <h4 className="text-sm uppercase tracking-wider text-accent font-medium mb-4">{member.role}</h4>
              <p className="text-gray-600 px-6">
                {member.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
