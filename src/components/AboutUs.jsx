import React from 'react';
import './AboutUs.css'; // Import the new CSS file for styling
import Footer from './Footer';
import Header from './Header';

const AboutUs = () => {
  return (
    <div>
      <Header />

      {/* About Us Section */}
      <section id="about-us" className="about-us-section">
        <div className="about-us-container">
          <div className="about-us-content" data-aos="fade-right">
            <h2 className="about-us-title">About Us</h2>
            <p className="about-us-description">
              M/s. SAV-Tech Associate was established in 2024. We specialize in creating innovative solutions for Sugar,
              Power plants, Co-Generation, Distillery & Ethanol, Khandsari & Jaggery businesses. With a commitment to
              excellence and innovation, we offer a wide range of services including:
            </p>
            <p className="about-us-mission">
              Our mission is to drive growth and efficiency through sustainable solutions, empowering industries with
              cutting-edge technologies and unmatched expertise.
            </p>
            <p className="about-us-total-projects">
              <strong>Total Projects Handled:</strong> 50+
            </p>
            <p className="about-us-clients">
              <strong>Clients' Company Names:</strong> M/s. G.M. Sugars, Yuganda, M/s. Anvisha Sugars, M/s. Deccan Sugars,
              M/s. Rupmata Jaggery & Khandsari, M/s. X-India Pvt. Ltd, M/s. JSW Energy Ltd.
            </p>
            <p className="about-us-tagline">
              <strong>Tagline/Slogan:</strong> Technology Innovation for Client Growth is our Growth
            </p>
            <p className="about-us-establishment">
              <strong>Year of Establishment:</strong> 2024
            </p>
          </div>

        </div>
      </section>



      {/* Mission Section */}
      <section id="mission" className="mission-section">
        <div className="mission-container">
          <div className="mission-header">
            <img
              src="https://www.abhaysolutionsinc.com/wp-content/uploads/2017/09/mission.jpg"
              alt="Our Mission"
              className="mission-image"
            />
            <h2>Our Mission</h2>
            <p className="mission-description">
              We are committed to delivering cutting-edge products and services that exceed our clients' expectations.
              Our mission is not only to contribute to a sustainable and technologically advanced future but also to
              empower industries with innovative solutions. We focus on advancing technologies and delivering services
              that lead to long-term growth and efficiency for our partners and clients.
            </p>
            <div className="mission-pillars">
              <h3>Mission Pillars</h3>
              <ul>
                <li>Commitment to Sustainability</li>
                <li>Innovation in Engineering and Technology</li>
                <li>Excellence in Customer Service</li>
                <li>Global Partnerships and Collaboration</li>
                <li>Enhancing Industry Productivity</li>
                <li>Focus on Technological Advancements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Vision Section */}
      <section id="vision" className="vision-section">
        <div className="vision-container">
          <h2>Our Vision</h2>
          <p>
            To be a global leader in providing innovative, sustainable, and integrated solutions in the fields of Sugar,
            Power plants, Co-Generation, Distillery & Ethanol, Khandsar & Jaggery businesses as Consultancy, Mechanical,
            Electrical & Instrumentation Services. We aim to revolutionize industries and empower businesses worldwide,
            driving growth and efficiency with cutting-edge technologies.
          </p>
          <div className="vision-mission">
            <h3>Core Focus Areas</h3>
            <ul>
              <li>Innovation in Engineering and Technology</li>
              <li>Sustainable and Green Solutions</li>
              <li>Industry 4.0 Integration</li>
              <li>Excellence in Customer Service and Satisfaction</li>
              <li>Global Expansion and Strategic Partnerships</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
