import React from 'react';

const Gallery = () => {
  const works = [
    {
      title: "The 'Finished' Driveway - Forge Village",
      description: "We told them the gravel would settle. It's been three years. We also left the rusty wheelbarrow as a free lawn ornament.",
      image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&q=80" // Construction/messy landscape
    },
    {
      title: "Minimalist Retaining Wall - Near Nabnasset Lake",
      description: "Why use concrete when you can use old tires and hope? This wall is guaranteed to hold until the first sneeze.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80" // Rubble/pile
    },
    {
      title: "Luxury Mud Pit - Route 110 Corridor",
      description: "The client asked for a pool. We gave them a hole. It's multi-functional: it collects mosquitoes and neighborly complaints.",
      image: "https://images.unsplash.com/photo-1510563800743-aed236490d08?w=800&q=80" // Muddy ground
    },
    {
      title: "Botanical Junkyard - Park Corner",
      description: "A delicate balance of invasive weeds and discarded appliances. We call this 'Industrial Chic'.",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=80" // Junk/overgrown
    },
    {
      title: "Artisanal Stick Collection - Graniteville",
      description: "Instead of raking, we arranged the sticks into a pile that looks vaguely like a cry for help. The client was speechless.",
      image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=800&q=80" // Pile of wood/sticks
    },
    {
      title: "The 'Great Wall' of Westford - Near Kimball Farm",
      description: "We were supposed to fix the fence. We just leaned some plywood against it and charged for 'Structural Reinforcement'.",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&q=80" // Broken fence/shack area
    }
  ];

  return (
    <div className="container">
      <h1>Our 'Masterpieces'</h1>
      <p>Take a look at some of the high-quality, low-effort work we've done across Westford. If you want your property to look like a disaster zone, you know who to call.</p>

      <div className="grid">
        {works.map((work, index) => (
          <div key={index} className="card">
            <img
              src={work.image}
              alt={work.title}
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
            />
            <h3>{work.title}</h3>
            <p>{work.description}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center', padding: '2rem', background: '#f8f8f8', borderRadius: '8px' }}>
        <h2>Want your yard to look this 'good'?</h2>
        <p>We are currently accepting new victims... we mean clients.</p>
      </div>
    </div>
  );
};

export default Gallery;
