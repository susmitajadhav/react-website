import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Header.css'; // Ensure the CSS file is correctly linked

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggles the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/"> {/* Use Link for navigation */}
          <img src={`${process.env.PUBLIC_URL}/img/logo.jpeg`} alt="SAV-Tech Associate Logo" />

          </Link>
        </div>

        {/* Navigation Section */}
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Use Link for internal routing */}
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>

            {/* Dropdown Menu for "What We Do" */}
            <div className="dropdown">
              <a href="#!" className="dropdown-toggle" onClick={toggleDropdown}>
                What We Do
              </a>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-item">
                    <Link to="/services">Services</Link>
                  </div>
                  <div className="dropdown-item">
                    <Link to="/productlist">Product</Link>
                  </div>
                </div>
              )}
            </div>

            <li>
              <Link to="/contactpage">Contact</Link>
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
