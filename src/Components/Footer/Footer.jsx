import React from 'react';
import './Footer.css';
import { FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Karate Fitness</h3>
          <p>Empowering minds and bodies through the art of Karate.</p>
          <div className="social-links" style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <a href="https://www.youtube.com/@Karatefitnesstutorial" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)', fontSize: '1.5rem' }} aria-label="YouTube"><FaYoutube /></a>
            <a href="https://www.instagram.com/karate_fitness_tutorial/?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)', fontSize: '1.5rem' }} aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Near Palm Tree, Seaport Airport Road</p>
          <p>Kakkanad, Kochi</p>
          <p>Phone: 9061223224</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Karate Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
