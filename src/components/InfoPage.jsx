import React from 'react';
import './InfoPage.css';

const InfoPage = () => {
  return (
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
  );
};

export default InfoPage;
