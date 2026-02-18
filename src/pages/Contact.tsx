import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    complaint: '',
    urgency: 'Meh'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h2>Message 'Received'</h2>
        <p>Your message has been successfully diverted to our digital shredder (Skip's 'inbox').</p>
        <p>If your lawn is currently on fire, please contact someone who actually cares.</p>
        <button onClick={() => setSubmitted(false)} className="card" style={{ cursor: 'pointer', padding: '0.5rem 1rem' }}>Send another useless message</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Contact 'Westford Blows'</h1>
      <p>Want to complain? Need a quote we won't honor? Just want to tell us your neighbor's grass is 0.5 inches too long? Use the form below.</p>

      <div className="grid">
        <div className="card">
          <h3>Send us a Disappointment</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.25rem' }}>Your Name (to be ignored):</label>
              <input
                type="text"
                required
                style={{ width: '100%', padding: '0.5rem' }}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.25rem' }}>Email (for spam purposes):</label>
              <input
                type="email"
                required
                style={{ width: '100%', padding: '0.5rem' }}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.25rem' }}>How Urgent is this? (We'll decide anyway):</label>
              <select
                style={{ width: '100%', padding: '0.5rem' }}
                value={formData.urgency}
                onChange={(e) => setFormData({...formData, urgency: e.target.value})}
              >
                <option>Meh</option>
                <option>Mildly Annoying</option>
                <option>Neighborhood Scandal</option>
                <option>Skip's Problem Now</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.25rem' }}>Your Complaint / Shout Into The Void:</label>
              <textarea
                required
                rows={4}
                style={{ width: '100%', padding: '0.5rem' }}
                value={formData.complaint}
                onChange={(e) => setFormData({...formData, complaint: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="card" style={{ cursor: 'pointer', backgroundColor: '#2e7d32', color: 'white', fontWeight: 'bold' }}>
              Submit to Oblivion
            </button>
          </form>
        </div>

        <div className="card">
          <h3>Other Ways to Not Reach Us</h3>
          <p><strong>Phone:</strong> 1-800-SKIP-OFF (Calls are routed directly to a dial-up modem sound)</p>
          <p><strong>Address:</strong> Somewhere behind the Kimball Farm bumper boats (Look for the pile of un-raked leaves)</p>
          <p><strong>Hours:</strong></p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li>Mon-Fri: Whenever Skip wakes up - 2:00 PM</li>
            <li>Sat: Only if there's no football</li>
            <li>Sun: Nap Day</li>
          </ul>
          <p><strong>Carrier Pigeon:</strong> Must be a Westford-born pigeon. Out-of-town birds will be shooed away.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
