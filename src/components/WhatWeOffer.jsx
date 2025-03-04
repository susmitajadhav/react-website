import React from 'react';
import './WhatWeOffer.css';

const WhatWeOffer = () => {
  return (
    <div className="what-we-offer">
      {/* Intro Section */}
      <div className="intro-section">
        <h1>Our Expertise</h1>
        <p>
          We are dedicated to providing our clients with a superior range of Sugar Plants, 
          appreciated for their durability, corrosion resistance, and efficient construction.
        </p>
      </div>

      {/* Features Section */}
      <div className="features-grid">
        <div className="feature-card_w ">
          <div className="icon">
            <i className="fas fa-cogs"></i>
          </div>
          <h3>Advanced Technology</h3>
          <p>Leveraging cutting-edge technology for faster delivery, better production, and precise designs.</p>
        </div>

        <div className="feature-card_w ">
          <div className="icon">
            <i className="fas fa-user-cog"></i>
          </div>
          <h3>Expert Engineers</h3>
          <p>Our highly skilled team of engineers brings years of industrial expertise to every project.</p>
        </div>

        <div className="feature-card_w ">
          <div className="icon">
            <i className="fas fa-headset"></i>
          </div>
          <h3>Customer Support</h3>
          <p>We provide exceptional service and support to meet all client requirements.</p>
        </div>

        <div className="feature-card_w ">
          <div className="icon">
            <i className="fas fa-truck"></i>
          </div>
          <h3>Delivery On Time</h3>
          <p>Committed to delivering high-quality products quickly to reduce client expenses.</p>
        </div>
      </div>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-container">
          <div className="info-content">
            <div className="info-image">
              <img src="https://nrfabricator.com/assets/images/pr9.jpg" alt="SAV-Tech Services" loading="lazy" />
            </div>
            <div className="info-details">
              <h2>Our Expertise and Solutions</h2>
              <p>
                Our multidisciplinary approach integrates Electrical & Instrumentation Services, 
                Operation & Maintenance (O&M), and Industrial Automation to streamline processes, 
                enhance performance, and ensure sustainability across diverse industrial operations.
              </p>
              <h3>Our Key Services Include:</h3>
              <ul>
                <li>Consultancy and Feasibility Studies</li>
                <li>Mechanical and Structural Engineering Services</li>
                <li>Advanced Electrical & Instrumentation Solutions</li>
                <li>Comprehensive O&M Services for Plant Efficiency</li>
                <li>Supply of High-Quality Machinery & Spare Parts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOffer;
