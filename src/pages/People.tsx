import React from 'react';

const People = () => {
  const team = [
    {
      name: "Skip 'The Rake' Miller",
      role: "CEO & Chief Leaf Whisperer",
      bio: "Skip has lived in Westford for 45 years and still hasn't figured out how to use a lawnmower, but he's great at pointing and complaining about town meeting articles. He once spent three hours arguing about the height of a neighbor's mailbox.",
      skills: ["Aggressive Pointing", "Property Tax Complaining", "Early Morning Yelling"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Darlene 'Digger' Danforth",
      role: "Director of Excavation & Gossip",
      bio: "Darlene knows whose divorce is final before the ink is dry. She'll dig up your flower beds and all the dirt on your neighbors. She specializes in 'accidental' hedge trimming while trying to peek over fences.",
      skills: ["Speed-Gossiping", "Over-the-Fence Peeking", "Strategic Hydrangea Neglect"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Chad 'The Chad' Robertson",
      role: "Social Media & Weed Specialist",
      bio: "Chad's primary job is taking selfies with your hydrangea. He's also the backup punter for the town's failing semi-pro flag football team. He hasn't met a weed he couldn't misidentify.",
      skills: ["Selfie Consistency", "Leaf Blower Drum Solos", "Misidentifying Poison Ivy"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Gary 'Grump' Higgins",
      role: "Senior Rock Mover",
      bio: "Gary's job is to move large rocks from one side of your yard to the other. He won't tell you why, and if you ask, he'll just grunt and stare at your shoes for an uncomfortable amount of time.",
      skills: ["Inexplicable Grunting", "Slow Walking", "Rock Staring"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="container">
      <h1>The Crew</h1>
      <p>Meet the people who make Westford slightly less tolerable, one lawn at a time. Each member of our team has been hand-picked for their ability to look busy while doing absolutely nothing of value.</p>

      <div className="grid">
        {team.map((person, index) => (
          <div key={index} className="card person-card">
            <img src={person.image} alt={person.name} className="person-image" />
            <h3>{person.name}</h3>
            <p><strong>{person.role}</strong></p>
            <p>{person.bio}</p>
            <div style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '0.5rem' }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#555' }}>Special Skills:</p>
              <ul style={{ fontSize: '0.8rem', paddingLeft: '1.2rem', margin: '0.2rem 0' }}>
                {person.skills.map((skill, sIdx) => (
                  <li key={sIdx}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
