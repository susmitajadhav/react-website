// src/components/MachineryManufacturer.js
import React from 'react';
import './Manufacturing.css'; // Import the custom CSS file
import Header from './Header';
import Footer from './Footer';

function Manufacturing() {
  return (
    <div>
      <Header/>
    <div className="machinery-container">
      <h1>Machinery Manufacturer</h1>
      <p className="description">
        We specialize in the design and manufacturing of machinery for Sugar Plants, Khandsari, and Jaggery Plants. 
        Our high-quality machinery and equipment ensure maximum efficiency and productivity in the sugar and jaggery production processes.
      </p>

      <div className="image-section">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s"
        />
      </div>
      
      <h2>Our Specialization Includes:</h2>
      <div className="equipment-list">
        <ul>
          <li><strong>Mill & its Spares:</strong> We design and manufacture efficient mills and their spare parts for sugar extraction.</li>
          <li><strong>Boiling House Equipments & Spares:</strong> High-quality equipment used in the boiling house for the production of sugar and jaggery.</li>
          <li><strong>Material Handling Systems & its Spares:</strong> Automated and manual material handling systems tailored for sugar and jaggery plants.</li>
        </ul>
      </div>

      <h2>Machinery for Khandsari & Jaggery Plants</h2>
      <p className="additional-info">
        Our machinery is designed for the efficient extraction and processing of Khandsari and Jaggery. We offer robust systems that ensure long-term reliability and high performance, minimizing downtime in your production facility.
      </p>

      

      <h3>Key Features of Our Machinery:</h3>
      <ul className="feature-list">
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
    <Footer/>
    </div>
  );
}

export default Manufacturing;
