import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1>About Westford Blows</h1>
      <section className="card">
        <h3>Our Mission</h3>
        <p>
          Founded in 2024 by a group of residents who were tired of the constant 'beeping' of landscapers at 7 AM, 
          we decided to join them. If you can't beat the noise, make the noise more expensive.
        </p>
      </section>

      <section className="card">
        <h3>Why Westford?</h3>
        <p>
          Westford is a town of approximately 24,000 people, most of whom are currently stuck in the traffic circle on Route 110. 
          It's a town with deep history, like the 'Westford Knight' which is definitely a real knight and not just a weird rock.
        </p>
        <p>
          We love Westford. We love the Applefest where we stand in the rain. We love the 4-H Fair where we pretend to like cows. 
          But mostly, we love the competitive gardening that makes everyone miserable.
        </p>
      </section>

      <section className="card">
        <h3>The Business Philosophy</h3>
        <p>
          We believe in "Selective Landscaping." We'll mow your front yard to keep the HOA off your back, 
          but your backyard? That's between you and the ticks.
        </p>
      </section>
    </div>
  );
};

export default About;
