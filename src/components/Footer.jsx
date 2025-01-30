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
              <p><strong>Phone:</strong> 9422225058, 9011731731, 9822760005</p>
              <p><strong>Email:</strong> info@nrfabricator.com</p>
              <p><strong>Address:</strong> G-58, M.I.D.C, Ahmednagar, Maharashtra - 414111</p>
            </div>
          </div>

          <div className="footer-right">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contactpage">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-right">
            <h4>Projects</h4>
            <ul>
              <li><Link to="/manufacturing">Manufacturing of Machineries</Link></li>
              <li><Link to="/relay-card">RelayCard</Link></li>
              <li><Link to="/industrial-panel-manufacturer">Industrial Panel Manufacturing</Link></li>
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