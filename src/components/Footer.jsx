import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section footer-left">
            <h4>SAV-Tech Associate</h4>
            <p>
              Innovative solutions for Sugar, Power Plant, Co-Generation, Distillery,
              Khandsar & Jaggery industries.
            </p>
            <div className="footer-contact">
              <p><i className="fas fa-phone"></i> 9850827966, 7057104851</p>
              <p><i className="fas fa-envelope"></i> officesavtech@gmail.com</p>
              <p className="address">
                <i className="fas fa-map-marker-alt"></i>
                <span>Flat No.101, Vrundavan Apartment, Near Kusumgandh Garden, Pradhyapak Colony, Mahadevnagar, Uran Islampur 415409.</span>
              </p>

            </div>
          </div>


          {/* Navigation Links */}
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/product">Products</Link></li>
              <li><Link to="/contactpage">Contact</Link></li>
            </ul>
          </div>

          {/* Projects & Social Media */}
          <div className="footer-section">
            <h4>Projects</h4>
            <ul>
              <li><Link to="/manufacturing">Manufacturing of Machineries</Link></li>
              <li><Link to="/relay-card">PLC & DCS System</Link></li>
              <li><Link to="/industrial-panel-manufacturer">Industrial Panel Manufacturing</Link></li>
            </ul>

            {/* Social Media Links */}
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

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2025 SAV-Tech Associate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
