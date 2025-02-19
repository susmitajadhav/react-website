import React from "react";
import "./ConsultancyServices.css"; // Using the same CSS file for consistency
import Header from "./Header";
import Footer from "./Footer";

const Instrumentation = () => {
  return (
    <div>
      <Header />
      <div className="consultancy-container">
        {/* Image Section */}
        <div className="image-container1 fade-in">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte8ZOtfehxf9J4Lr7h60LtKt61xInSzM12g&s"
            className="image1 zoom-in"
            alt="Electrical Services"
          />
        </div>

        {/* Information Section */}
        <div className="info-container1 slide-in">
          <h1 className="consultancy_title"> Instrumentation Services</h1>
          <p className="consultancy_description">
            We provide a wide range of Electrical & Instrumentation services, including:
          </p>
          <ul className="consultancy_list stylish-list">
            <li>⚡ Turnkey Electrical Equipment Erection Work</li>
            <li>🔧 Electrical Panel Erection Work with Cable Laying & Termination</li>
            <li>🛠️ Electrical Panels & VFD Panels Overhauling</li>
            <li>🔩 Alternator Overhauling</li>
            <li>⚙️ L.T./H.T. Motors Overhauling</li>
            <li>💡 CO<sub>2</sub> Cleaning & Relay Testing Work for L.T. and H.T. Switch Yards & Panels</li>
            <li>📡 Field Instrumentation Erection, Cable Laying & Termination Work</li>
          </ul>
          <p className="consultancy_additional-info">
            Our expert team ensures precision, safety, and reliability in all electrical and instrumentation services to meet industry standards.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Instrumentation;
