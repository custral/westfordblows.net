import React from 'react';

const Culture = () => {
  return (
    <div className="container">
      <h1>Westford Culture</h1>
      <p>Westford isn't just about lawns. It's about a lifestyle of mild inconvenience and deep tradition.</p>

      <section className="card">
        <h3>Kimball Farm: The Forbidden Mecca</h3>
        <p>
          You haven't lived in Westford until you've stood in a 2-hour line for a single scoop of ice cream
          while being attacked by flies and trying not to let your children run onto the mini-golf course.
          It's expensive, it's crowded, and we love it. (Pro tip: Never go on a Saturday.)
        </p>
        <p><em>Fun Fact:</em> We offer 'Kimball Survival Landscaping' - we'll clear a path through your driveway so you can escape the town on weekends when the tourist traffic peaks.</p>
      </section>

      <section className="card">
        <h3>The WA Grey Ghosts</h3>
        <p>
          Westford Academy sports: A rollercoaster of emotions, but mostly just the part where the coaster is climbing very slowly.
          We support our teams, even if our fields are often in better shape than our win-loss records.
        </p>
      </section>

      <section className="card">
        <h3>Annual Applefest</h3>
        <p>
          The one day a year when the whole town converges on the common to buy crafts we don't need
          and eat apples that we could have bought at Market Basket for half the price.
          It's the ultimate Westford experience: paying a premium for community spirit.
        </p>
      </section>

      <section className="card">
        <h3>The Route 110 Traffic Circle</h3>
        <p>
          A feat of engineering designed to test the patience of even the most zen residents.
          It's where dreams go to die at 5:15 PM on a Tuesday. We offer a 'Traffic Meditation' landscaping service,
          which just involves us leaving a lawn chair in your yard so you can watch other people be stuck.
        </p>
      </section>
    </div>
  );
};

export default Culture;
