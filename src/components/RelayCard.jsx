import React from 'react';
import './RelayCard.css'; // Import the custom CSS file
import Header from './Header';
import Footer from './Footer';

function RelayCard() {
  return (
    <div>
      <Header />
      <div className="relay-card-container">
        <h1 className="fade-in">Multi-channel AC/DC Relay Cards</h1>
        <p className="description fade-in">
          Discover our Multi-channel AC/DC relay cards at <strong>SAV-Tech Associate</strong>, providing versatile solutions for efficient electrical control.
          These relay cards offer multiple channels to meet the diverse needs of modern applications.
        </p>

        <div className="image-section fade-in">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEtSZzcR4It0FBfOAf8XYmN2ZHF8I0wwsfw&s"
            alt="Relay Card"
            className="relay-card-image hover-bounce"
          />
        </div>

        <h2 className="section-title fade-in">Features & Benefits</h2>
        <ul className="features-list fade-in">
          <li><strong>Multi-channel Support:</strong> Control multiple devices with a single unit.</li>
          <li><strong>Versatile Integration:</strong> Seamlessly integrates with various automation systems.</li>
          <li><strong>Optimal Performance:</strong> Provides stable and reliable operation.</li>
          <li><strong>Precision Engineering:</strong> High-quality manufacturing for top-tier reliability.</li>
          <li><strong>Energy Efficient:</strong> Reduces power consumption with optimized performance.</li>
          <li><strong>Customizable Design:</strong> Tailored for specific industrial applications.</li>
        </ul>

        <h3 className="sub-heading fade-in">Applications</h3>
        <p className="applications fade-in">
          Our Multi-channel Relay Cards are ideal for:
        </p>
        <ul className="applications-list fade-in">
          <li> Industrial Automation</li>
          <li>Building Management Systems</li>
          <li>Energy Management</li>
          <li>Automated Control Systems</li>
        </ul>

        <p className="contact-info fade-in">
          📞 <strong>Contact us</strong> today for more details and inquiries!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default RelayCard;
