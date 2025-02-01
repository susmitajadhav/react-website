import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.jpeg';

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  // Function to toggle the side menu
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsSideMenuOpen(false);
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
      </div>

      {/* Navigation Section */}
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/aboutus" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/product" onClick={closeMenu}>Product</Link></li>
          <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="/contactpage" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/getquote" className="get-quote-btn">Get Quote</Link></li>
        </ul>
        <button className="show-all-btn" onClick={toggleSideMenu}>Menu</button>
      </nav>

      {/* Side Menu */}
      <div className={`side-menu ${isSideMenuOpen ? 'open' : ''}`}>
        <ul className="side-menu-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/aboutus" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/product" onClick={closeMenu}>Product</Link></li>
          <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="/contactpage" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/getquote" className="get-quote-btn">Get Quote</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
