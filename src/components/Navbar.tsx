import React from 'react';
import { Link } from 'react-router-dom';
import { Wind } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Wind size={32} style={{ marginRight: '0.5rem' }} />
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Westford Blows
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/people">The Crew</Link>
        <Link to="/services">Services</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
