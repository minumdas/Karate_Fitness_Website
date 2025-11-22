import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import judo from '../assets/judo.png';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={judo} alt="Karate Fitness" />
          <span>Karate Fitness</span>
        </Link>

        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link to="/contact" className="btn">Book a Trial</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
