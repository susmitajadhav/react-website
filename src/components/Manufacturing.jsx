// src/components/Manufacturing.jsx

import React from 'react';
import './RelayCard.css'; // Import the common CSS file
import Header from './Header';
import Footer from './Footer';

function Manufacturing() {
  return (
    <div>
      <Header />
      <div className="relay-card-container">
        <h1 className="main-heading">Machinery Manufacturer</h1>
        <p className="description">
          We specialize in the design and manufacturing of machinery for Sugar Plants, Khandsari, and Jaggery Plants.
          Our high-quality machinery and equipment ensure maximum efficiency and productivity in the sugar and jaggery production processes.
        </p>

        <div className="image-section">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s"
            alt="Machinery"
            className="relay-card-image"
          />
        </div>

        <h2 className="sub-heading">Our Specialization Includes:</h2>
        <div className="content-list">
          <ul>
            <li><strong>Mill & its Spares:</strong> We design and manufacture efficient mills and their spare parts for sugar extraction.</li>
            <li><strong>Boiling House Equipments & Spares:</strong> High-quality equipment used in the boiling house for the production of sugar and jaggery.</li>
            <li><strong>Material Handling Systems & its Spares:</strong> Automated and manual material handling systems tailored for sugar and jaggery plants.</li>
          </ul>
        </div>

        <h2 className="sub-heading">Machinery for Khandsari & Jaggery Plants</h2>
        <p className="description">
          Our machinery is designed for the efficient extraction and processing of Khandsari and Jaggery.
          We offer robust systems that ensure long-term reliability and high performance, minimizing downtime in your production facility.
        </p>

        <h3 className="sub-heading">Key Features of Our Machinery:</h3>
        <ul className="features-list">
          <li>High efficiency in sugar extraction and boiling process.</li>
          <li>Durability and long life of all parts and components.</li>
          <li>Easy to maintain and replace spares.</li>
          <li>Energy-efficient designs reducing operational costs.</li>
          <li>Customizable designs based on plant size and specific needs.</li>
        </ul>

        <p className="contact-info">
          For more information or inquiries, feel free to <strong>contact us</strong> today!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Manufacturing;