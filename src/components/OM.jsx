import React from "react";
import "./MechanicalEngineering";
import Header from './Header';
import Footer from './Footer';

const OM = () => {
  return (
    <div>
      <Header />
      <div className="container">
        {/* Image Section */}
        <div className="image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS059frnmzmI_KVvyU3GfNKC09N_JzAH79Obg&s"
            className="image"
          />
        </div>
        {/* Information Section */}
        <div className="info-container">
          <h1 className="title">O & M Services</h1>
          <p className="description">
            We provide comprehensive Operation & Maintenance (O&M) services for the following plants:
          </p>
          <ul className="list">
            <li>Total Sugar Plants</li>
            <li>Co-Generation/Power Plants</li>
            <li>Distillery & Ethanol Plants</li>
            <li>Jaggery & Khandsary Plants</li>
            <li>D.M. (Demineralization) & R.O. (Reverse Osmosis) Plants</li>
            <li>E.T.P. (Effluent Treatment Plant) & S.T.P. (Sewage Treatment Plant)</li>
          </ul>
          <p className="additional-info">
            Our expert team ensures smooth operations, routine maintenance, and efficiency optimization, guaranteeing long-term reliability for your plants.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OM;
