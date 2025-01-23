// src/components/RelayCard.js

import React from 'react';
import './RelayCard.css'; // Import the custom CSS file
import Header from './Header';
import Footer from './Footer';

function RelayCard() {
  return (
    <div>
        <Header/>
    <div className="relay-card-container">
      <h1>Multi-channel AC/DC Relay Cards</h1>
      <p className="description">
        Discover our Multi-channel AC/DC relay cards at SAV-Tech Associate, providing versatile solutions for efficient electrical control. These cards offer multiple channels to meet the diverse needs of your applications.
        Our Relay Card is a cutting-edge solution designed to enhance control and automation in various electrical systems.
      </p>

      <div className="image-section">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEtSZzcR4It0FBfOAf8XYmN2ZHF8I0wwsfw&s"
        />
      </div>

      <h2>Features & Benefits:</h2>
      <ul className="features-list">
        <li><strong>Multi-channel Support:</strong> Our relay cards support both AC and DC, allowing you to control multiple devices from a single unit.</li>
        <li><strong>Versatile Integration:</strong> Seamlessly integrates with various electrical systems for enhanced automation and control.</li>
        <li><strong>Optimal Performance:</strong> Designed to provide stable and reliable performance under diverse conditions.</li>
        <li><strong>Precision Engineering:</strong> Built with precision to ensure top-quality operation and minimal downtime.</li>
        <li><strong>Energy Efficient:</strong> The relay card helps in reducing energy consumption by optimizing control systems.</li>
        <li><strong>Customizable Design:</strong> Tailored solutions based on the specific needs of your electrical setup.</li>
      </ul>

      <h3>Applications:</h3>
      <p className="applications">
        Our Multi-channel Relay Cards are ideal for applications in industries such as:
        <ul>
          <li>Industrial Automation</li>
          <li>Building Management Systems</li>
          <li>Energy Management</li>
          <li>Automated Control Systems</li>
        </ul>
      </p>

      <p className="contact-info">
        For more information or inquiries, feel free to <strong>contact us</strong> today!
      </p>
    </div>
    <Footer/>
    </div>
  );
}

export default RelayCard;
  