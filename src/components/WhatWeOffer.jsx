import React from 'react';
import './WhatWeOffer.css'; // Link to the updated CSS file

const WhatWeOffer = () => {
  return (
    <div className="what-we-offer">
      <div className="intro-section"> {/* Changed class name */}
        <h1>Our Expertise</h1> {/* Changed hero section name */}
        <p>
          We are dedicated to providing our clients with a superior range of Sugar Plants, 
          appreciated for their durability, corrosion resistance, and efficient construction.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="icon">
            <i className="fas fa-cogs"></i>
          </div>
          <h3>Advanced Technology</h3>
          <p>
            Leveraging cutting-edge technology for faster delivery, better production, 
            and precise designs.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">
            <i className="fas fa-user-cog"></i>
          </div>
          <h3>Expert Engineers</h3>
          <p>
            Our highly skilled team of engineers brings years of industrial expertise 
            to every project.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">
            <i className="fas fa-headset"></i>
          </div>
          <h3>Customer Support</h3>
          <p>
            We provide exceptional service and support to meet all client requirements.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">
            <i className="fas fa-truck"></i>
          </div>
          <h3>Delivery On Time</h3>
          <p>
            Committed to delivering high-quality products quickly to reduce client expenses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
