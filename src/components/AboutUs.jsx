import React, { useEffect } from "react";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCogs, FaRocket, FaUsers, FaGlobe, FaLightbulb, FaHandshake } from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-us-container">
      {/* About Us Section */}
      <section className="section about" data-aos="fade-up">
        <h2>About Us</h2>
        <p>
          At <strong>Deckvalue</strong>, we are dedicated to providing expert valuation services that align with the Companies Act and Income Tax Rules. 
          Our mission is to offer accurate assessments, helping businesses make informed financial decisions.
        </p>
      </section>

      {/* Mission Section */}
      <section className="section mission" data-aos="fade-up">
        <h2>Our Mission</h2>
        <p>
          We strive to deliver cutting-edge solutions that drive innovation, sustainability, and business growth.
        </p>
      </section>

      {/* Mission Pillars Section */}
      <section className="section pillars" data-aos="fade-up">
        <h2>Mission Pillars</h2>
        <div className="pillars-grid">
          <div className="pillar-card" data-aos="zoom-in">
            <FaCogs className="icon" />
            <p>Innovation in Engineering</p>
          </div>
          <div className="pillar-card" data-aos="zoom-in">
            <FaRocket className="icon" />
            <p>Excellence in Customer Service</p>
          </div>
          <div className="pillar-card" data-aos="zoom-in">
            <FaUsers className="icon" />
            <p>Commitment to Sustainability</p>
          </div>
          <div className="pillar-card" data-aos="zoom-in">
            <FaGlobe className="icon" />
            <p>Global Partnerships & Collaboration</p>
          </div>
          <div className="pillar-card" data-aos="zoom-in">
            <FaLightbulb className="icon" />
            <p>Continuous Innovation</p>
          </div>
          <div className="pillar-card" data-aos="zoom-in">
            <FaHandshake className="icon" />
            <p>Strong Client Relationships</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section vision" data-aos="fade-up">
        <h2>Our Vision</h2>
        <p>
          To be the global leader in expert valuations, ensuring businesses make well-informed financial and strategic decisions.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose" data-aos="fade-up">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ Expert Valuation Services</li>
          <li>✅ Compliance with Companies Act & Tax Regulations</li>
          <li>✅ Accurate & Reliable Financial Assessments</li>
          <li>✅ Trusted by Businesses Worldwide</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
