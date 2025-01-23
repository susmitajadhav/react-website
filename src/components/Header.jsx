import React, { useState } from 'react';
import './Header.css'; // Ensure the CSS file is correctly linked

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/img/LOGO.jpeg" alt="SAV-Tech Associate Logo" />
        </div>

        <nav className="nav-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/gallery">Gallery</a></li>

           {/* Dropdown menu */}
<div className="dropdown">
  <a
    href="#!"
    className="dropdown-toggle"
    onClick={toggleDropdown}
  >
    What We Do
  </a>
  {isDropdownOpen && (
    <div className="dropdown-menu">
      <div className="dropdown-item">
        <a href="/services">Services</a>
      </div>
      <div className="dropdown-item">
        <a href="/productlist">Product</a>
      </div>
    </div>
  )}
</div>


            <li><a href="/contactpage">Contact</a></li>
          </ul>
        </nav>

        <div className="quote-button">
          <a href="/getquote" className="get-quote-btn">Get Quote</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
