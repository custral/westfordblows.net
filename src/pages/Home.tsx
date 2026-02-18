import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <header className="hero">
        <h1>Westford Blows</h1>
        <p>Premium Landscaping for a Sub-Premium Town</p>
      </header>

      <section className="card">
        <h2>Welcome to the Neighborhood</h2>
        <p>
          Are you tired of your neighbors in Westford having slightly greener grass than you?
          Do you want your lawn to reflect the true spirit of our town—mildly pretentious but ultimately just a place with a lot of trees and a really expensive ice cream stand?
        </p>
        <p>
          At Westford Blows, we specialize in making sure your yard looks exactly like the town's reputation: high maintenance and full of leaves.
        </p>
      </section>

      <div className="grid">
        <div className="card">
          <h3>Why Us?</h3>
          <p>We know every inch of Westford, from the traffic jam at the Common to the lines at Kimball's. We bring that same efficiency to your backyard.</p>
        </div>
        <div className="card">
          <h3>Local Experts</h3>
          <p>Our crew consists of local legends who peaked in high school and know exactly which shrubs the WA sports teams would probably fail to maintain.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
