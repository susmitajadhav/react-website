import React from "react";
import "./ConsultancyServices.css";
import Header from './Header';
import Footer from './Footer';

const Electrical = () => {
  return (
    <div>
      <Header />
      <div className="container">
        {/* Image Section */}
        <div className="image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte8ZOtfehxf9J4Lr7h60LtKt61xInSzM12g&s"
            className="image"
          />
        </div>
        {/* Information Section */}
        <div className="info-container">
          <h1 className="title">Electrical & Instrumentation Services</h1>
          <p className="description">
            We provide a wide range of Electrical & Instrumentation services, including:
          </p>
          <ul className="list">
            <li>Turnkey Electrical Equipment Erection Work</li>
            <li>Electrical Panel Erection Work with Cable Laying & Termination</li>
            <li>Electrical Panels & VFD Panels Overhauling</li>
            <li>Alternator Overhauling</li>
            <li>L.T./H.T. Motors Overhauling</li>
            <li>CO<sub>2</sub> Cleaning & Relay Testing Work for L.T. and H.T. Switch Yards & Panels</li>
            <li>Field Instrumentation Erection, Cable Laying & Termination Work</li>
          </ul>
          <p className="additional-info">
            Our expert team ensures precision, safety, and reliability in all electrical and instrumentation services to meet industry standards.
          </p>
        </div>
        </div>
        <Footer />
      </div>
      );
};

      export default Electrical;
