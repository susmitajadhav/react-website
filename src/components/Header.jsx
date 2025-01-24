import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.jpeg';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggles the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggles the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="SAV-Tech Associate Logo" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Navigation Section */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </Link>
            </li>
            <li className="dropdown">
              <a
                href="#!"
                className="dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
              >
                What We Do
              </a>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-item">
                    <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                      Services
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <Link to="/productlist" onClick={() => setIsMenuOpen(false)}>
                      Product
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="/contactpage" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Get Quote Button */}
        <div className="quote-button">
          <Link to="/getquote" className="get-quote-btn">
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
