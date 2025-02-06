import React, { useEffect } from "react";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './Header';
import Footer from './Footer';
import { FaCogs, FaRocket, FaUsers, FaGlobe, FaLightbulb, FaHandshake } from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
    <div className="about-us-container">
      {/* About Us Section */}
      <section className="section about" data-aos="fade-up">
        <h2>About Us</h2>
        <p>
            M/s. SAV- Tech Associate was established in 2024. It is  specializes in creating innovative solutions for Sugar,Power plant,Co-Genration,Distellery & Ethenol,Khandsar & Jaggery businesses, ranging from designing,Manufacturing,Erection & Commissioning. . They offer a wide range of services to help businesses succeed, including Consultancy services,Mechanical Engineering Services,Electrical & Instumantation Services,O & M Services and supply of Machinery & Spares for New Plants,Industrial Automation, making processes more efficient and effective. Their goal is to use technology to solve problems and drive growth for their clients.
        </p>
      </section>

      {/* Mission Section */}
      <section className="section mission" data-aos="fade-up">
        <h2>Our Mission</h2>
        <p>
        We are dedicated to delivering cutting-edge products and services that exceed our client's expectations. We strive for excellence in quality, innovation and customer satisfaction. Our mission is to contribute to a sustainable and technologically advanced future.
        </p>
      </section>

      {/* Mission Pillars Section */}
      <section className="section pillars" data-aos="fade-up">
        <h2>Mission Pillars</h2>
        <div className="pillars-grid">
          <div className="pillar-card" data-aos="zoom-in">
            <FaCogs className="icon" />
            <p>Engineering Innovation</p>
          </div>
          <div className="pillar-card" data-aos="zoom-in">
            <FaRocket className="icon" />
            <p>Customer Service Excellence</p>
          </div>
          <div className="pillar-card" data-aos="zoom-in">
            <FaUsers className="icon" />
            <p>Sustainable Commitment</p>
          </div>
          <div className="pillar-card" data-aos="zoom-in">
            <FaGlobe className="icon" />
            <p>International Collaboration</p>
          </div>
          <div className="pillar-card" data-aos="zoom-in">
            <FaLightbulb className="icon" />
            <p>Continuous Improvement</p>
          </div>
          <div className="pillar-card" data-aos="zoom-in">
            <FaHandshake className="icon" />
            <p>Strong Client Relations</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section vision" data-aos="fade-up">
        <h2>Our Vision</h2>
        <p>
        To be a global leader in providing innovative, sustainable and integrated solutions in the fields of Sugar,Power plant,Co-Genration,Distellery & Ethenol,Khandsar & Jaggery businesses as Consultancy,Mechanical,Electrical & Instrumentation Services, revolutionizing industries and empowering businesses worldwide.
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
    <Footer />
    </div>
  );
};

export default AboutUs;
