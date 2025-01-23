// src/components/IndustrialPanelManufacturer.js

import React from 'react';
import './IndustrialPanelManufacturer.css'; // Import the custom CSS file
import Footer from './Footer';
import Header from './Header';

function IndustrialPanelManufacturer() {
  return (
    <div>
      <Header/>
    <div className="industrial-panel-container">
      <h1>Industrial Panel Manufacturer</h1>
      <p className="description">
        Harnessing engineering expertise, we specialize in the meticulous design and manufacturing of Power Control Centers (PCC), Motor Control Centers (MCC), Variable Frequency Drive (VFD), and Programmable Logic Controller (PLC) panels.
        Our precision-crafted solutions ensure optimal performance, reliability, and seamless integration across diverse industrial applications. Elevate your control systems with our tailored and technologically advanced panels.
      </p>

      <div className="image-section">
        <img 
          src="https://5.imimg.com/data5/KF/SE/DJ/SELLER-79625611/mcc-pcc-vfd-plc-panels-500x500.JPG"
        />
      </div>

      <h2>Our Specializations:</h2>
      <div className="panels-list">
        <ul>
          <li><strong>Power Control Centers (PCC):</strong> Designed for effective management and protection of electrical power systems, ensuring smooth operations and energy efficiency.</li>
          <li><strong>Motor Control Centers (MCC):</strong> Customized solutions for motor control, protection, and automation, optimizing motor-driven operations.</li>
          <li><strong>Variable Frequency Drive (VFD):</strong> Cutting-edge VFD panels for controlling motor speeds, reducing energy consumption, and ensuring smooth process control.</li>
          <li><strong>Programmable Logic Controller (PLC):</strong> High-performance PLC panels for automation, providing reliability and flexibility in industrial processes.</li>
        </ul>
      </div>

      <h3>Key Features & Benefits:</h3>
      <ul className="features-list">
        <li><strong>Seamless Integration:</strong> Our panels integrate effortlessly into existing industrial systems, offering easy installation and operational flexibility.</li>
        <li><strong>Precision Engineering:</strong> Crafted with high precision to ensure top-notch performance, reducing system downtimes.</li>
        <li><strong>Reliability:</strong> Our panels are engineered for long-lasting durability, even in harsh environments, ensuring reliable and continuous operation.</li>
        <li><strong>Energy Efficiency:</strong> Designed to minimize energy consumption and operational costs through optimized control mechanisms.</li>
        <li><strong>Customization:</strong> Tailored solutions based on your specific operational requirements, improving overall efficiency and productivity.</li>
      </ul>

      <h4>Applications:</h4>
      <p className="applications">
        Our industrial panels are ideal for applications in various industries, including:
        <ul>
          <li>Manufacturing Plants</li>
          <li>Energy and Power Sector</li>
          <li>Automation and Control Systems</li>
          <li>Water Treatment Plants</li>
          <li>HVAC Systems</li>
          <li>Oil & Gas Industry</li>
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

export default IndustrialPanelManufacturer;
