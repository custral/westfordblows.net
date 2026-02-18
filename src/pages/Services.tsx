import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Tactical Leaf Relocation",
      description: "We don't 'remove' leaves. We blow them into your neighbor's yard when they aren't looking. Faster, cheaper, and builds character.",
      price: "$75 per gust",
      guarantee: "If a leaf blows back within 10 minutes, we'll charge you for a second visit."
    },
    {
      title: "HOA Appeasement Mowing",
      description: "Just the edges. We make it look like you care from the street while the middle of your lawn remains a sanctuary for rare suburban weeds and ticks.",
      price: "$50 (curb-side view only)",
      guarantee: "If the HOA sends a letter, we'll charge you an 'Administrative Dispute Fee'."
    },
    {
      title: "Premium Dandelion Cultivation",
      description: "Why fight nature? We'll help you grow the tallest, yellowest dandelions on the block. Be the envy of the local bees and the shame of your cul-de-sac.",
      price: "$120 (includes specialized fertilizer)",
      guarantee: "We promise at least 50% seed dispersal by the first windstorm."
    },
    {
      title: "Mulch Mirage",
      description: "We spread a thin layer of cocoa mulch that smells great for exactly two hours and then disappears after the first light rain, revealing the dirt below.",
      price: "$200 (fragrance included)",
      guarantee: "Your yard will smell like a chocolate factory for as long as it takes us to pack up."
    },
    {
      title: "Snow Piling & Sealing",
      description: "In the winter, we specialize in piling all the snow from your driveway right at the end of it, effectively sealing you in for the season. Excellent for avoiding social obligations.",
      price: "$100 per plow (plus 'Hardship Fee' if it's cold)",
      guarantee: "You won't be able to get your SUV out until April."
    },
    {
      title: "The 'I Tried' Garden Patch",
      description: "We'll plant three half-dead marigolds and a single tomato plant that will never produce fruit. We'll also leave a broken ceramic gnome for 'aesthetic'.",
      price: "$150 (gnome included, leg missing)",
      guarantee: "At least one marigold will survive until Tuesday."
    }
  ];

  return (
    <div className="container">
      <h1>Our 'Services'</h1>
      <p style={{ marginBottom: '2rem', fontStyle: 'italic' }}>* All prices are subject to change based on our mood, the traffic on 110, and how many times you've complained on the Westford Residents Facebook group.</p>
      <div className="grid">
        {services.map((service, index) => (
          <div key={index} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div style={{ marginTop: '1rem', borderTop: '1px solid #ddd', paddingTop: '0.5rem' }}>
              <p><strong>Starting at:</strong> {service.price}</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}><strong>The Blows Guarantee:</strong> {service.guarantee}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
