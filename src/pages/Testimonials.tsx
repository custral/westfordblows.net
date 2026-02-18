import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      author: "Karen from Nabnasset",
      text: "I hired them for a 'spring cleanup.' They cleaned my wallet and left a rake in my pool. 1/5 stars."
    },
    {
      author: "Disappointed WA Football Fan",
      text: "Their landscaping is about as effective as our defense on a 4th and long. Total collapse."
    },
    {
      author: "Angry Route 110 Commuter",
      text: "They parked their truck in the middle of the road during rush hour just to blow three leaves. Perfect Westford behavior."
    },
    {
      author: "Former Customer",
      text: "I asked for a trim. They cut down my favorite tree and told me it was 'impeding the aesthetic flow of the sidewalk.' I don't even have a sidewalk."
    },
    {
      author: "WA Soccer Dad",
      text: "They mowed the town fields and now my son's cleats are stained with what I'm pretty sure is neon green spray paint. Still better than the Grey Ghosts' last season, I guess."
    }
  ];

  return (
    <div className="container">
      <h1>Honest Testimonials</h1>
      <p>We don't hide our failures. We celebrate them. It's the Westford way.</p>

      {testimonials.map((t, index) => (
        <div key={index} className="card testimonial">
          <p>"{t.text}"</p>
          <p style={{ textAlign: 'right', fontWeight: 'bold' }}>- {t.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
