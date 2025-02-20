// src/components/IndustrialPanelManufacturer.jsx

import React from 'react';
import './RelayCard.css'; // Import the common CSS file
import Footer from './Footer';
import Header from './Header';

function IndustrialPanelManufacturer() {
  return (
    <div>
      <Header />
      <div className="relay-card-container">
        <h1 className="main-heading">Industrial Panel Manufacturer</h1>
        <p className="description">
          Harnessing engineering expertise, we specialize in the meticulous design and manufacturing of Power Control Centers (PCC), Motor Control Centers (MCC), Variable Frequency Drive (VFD), and Programmable Logic Controller (PLC) panels.
          Our precision-crafted solutions ensure optimal performance, reliability, and seamless integration across diverse industrial applications. Elevate your control systems with our tailored and technologically advanced panels.
        </p>

        <div className="image-section">
          <img
            src="https://5.imimg.com/data5/KF/SE/DJ/SELLER-79625611/mcc-pcc-vfd-plc-panels-500x500.JPG"
            alt="Industrial Panels"
            className="relay-card-image"
          />
        </div>

        <h2 className="sub-heading">Our Specializations:</h2>
        <div className="content-list">
          <ul>
            <li><strong>Power Control Centers (PCC):</strong> Designed for effective management and protection of electrical power systems, ensuring smooth operations and energy efficiency.</li>
            <li><strong>Motor Control Centers (MCC):</strong> Customized solutions for motor control, protection, and automation, optimizing motor-driven operations.</li>
            <li><strong>Variable Frequency Drive (VFD):</strong> Cutting-edge VFD panels for controlling motor speeds, reducing energy consumption, and ensuring smooth process control.</li>
            <li><strong>Programmable Logic Controller (PLC):</strong> High-performance PLC panels for automation, providing reliability and flexibility in industrial processes.</li>
          </ul>
        </div>

        <h3 className="sub-heading">Key Features & Benefits:</h3>
        <ul className="features-list">
          <li><strong>Seamless Integration:</strong> Our panels integrate effortlessly into existing industrial systems, offering easy installation and operational flexibility.</li>
          <li><strong>Precision Engineering:</strong> Crafted with high precision to ensure top-notch performance, reducing system downtimes.</li>
          <li><strong>Reliability:</strong> Our panels are engineered for long-lasting durability, even in harsh environments, ensuring reliable and continuous operation.</li>
          <li><strong>Energy Efficiency:</strong> Designed to minimize energy consumption and operational costs through optimized control mechanisms.</li>
          <li><strong>Customization:</strong> Tailored solutions based on your specific operational requirements, improving overall efficiency and productivity.</li>
        </ul>

        <h4 className="sub-heading">Applications:</h4>
        <div className="content-list">
          <ul>
            <li>Sugar plants</li>
            <li>CO-Generation Plants</li>
            <li>Jaggery and Khandsari Plants</li>
            <li>Distillery & Ethanol Plants</li>
            <li>Energy and Power Sector</li>
            <li>Automation and Control Systems</li>
            <li>Water Treatment Plants</li>
            <li>HVAC Systems</li>
            <li>Oil & Gas Industry</li>
          </ul>
        </div>

        <p className="contact-info">
          For more information or inquiries, feel free to <strong>contact us</strong> today!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default IndustrialPanelManufacturer;