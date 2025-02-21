//Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h4>SAV-Tech Associate</h4>
            <p>Innovative solutions for Sugar, Power Plant, Co-Generation, Distillery, Khandsar & Jaggery industries.</p>
            <div className="footer-contact">
              <p><strong>Phone:</strong> 9850827966, 7057104851, 953613890, 9503613890</p>
              <p><strong>Email:</strong> officesavtech@gmail.com</p>
              <p><strong>Address:</strong> Flat No.101, Vrundavan Apartment, Near Kusumgandh Garden,Pradhyapak Colony, Mahadevnagar, Uran Islampur 415409. </p>
            </div>
          </div>

          <div className="footer-right">
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/product" onClick={() => setIsMenuOpen(false)}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contactpage" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-right">
            <h4>Projects</h4>
            <ul>
              <li>
                <Link to="/manufacturing" onClick={() => setIsMenuOpen(false)}>
                  Manufacturing of Machineries
                </Link>
              </li>
              <li>
                <Link to="/relay-card" onClick={() => setIsMenuOpen(false)}>
                  RelayCardact
                </Link>
              </li>
              <li>
                <Link to="/industrial-panel-manufacturer" onClick={() => setIsMenuOpen(false)}>
                  Industrial Panel Manufacturing
                </Link>
              </li>
            </ul>
            {/* Social Media Links Section */}
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;