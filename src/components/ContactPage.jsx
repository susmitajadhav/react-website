import React, { useState, useEffect } from "react";
import "./ContactPage.css";
import Footer from "./Footer";
import Header from "./Header";

const CustomContactPage = () => {
  const [formData, setFormData] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPhone: "",
    userMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.userFirstName}! Your message has been submitted.`);
    setFormData({ userFirstName: "", userLastName: "", userEmail: "", userPhone: "", userMessage: "" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="custom-contact-container">
        <header className="custom-contact-header">
          <h1>Contact Us</h1>
          <p>We are here to assist you. Feel free to reach out!</p>
        </header>

        <div className="custom-contact-content">
          <div className="custom-contact-details" data-aos="fade-right">
            <h2>Our Contact Details</h2>
            <ul>
              <li><strong>Phone:</strong> 9422225058, 9011731731, 9822760005</li>
              <li><strong>Email:</strong> info@nrfabricator.com</li>
              <li><strong>Office:</strong> G-58, M.I.D.C, Ahmednagar, Maharashtra - 414111</li>
            </ul>
          </div>

          <div className="custom-contact-form-wrapper" data-aos="fade-left">
            <h2>Send Us a Message</h2>
            <form className="custom-contact-form" onSubmit={handleSubmit}>
              <div className="custom-form-group">
                <input type="text" name="userFirstName" value={formData.userFirstName} onChange={handleChange} placeholder="First Name" required />
                <input type="text" name="userLastName" value={formData.userLastName} onChange={handleChange} placeholder="Last Name" required />
              </div>
              <div className="custom-form-group">
                <input type="email" name="userEmail" value={formData.userEmail} onChange={handleChange} placeholder="Email" required />
                <input type="text" name="userPhone" value={formData.userPhone} onChange={handleChange} placeholder="Phone No" required />
              </div>
              <textarea name="userMessage" value={formData.userMessage} onChange={handleChange} placeholder="Message" required />
              <button type="submit" className="custom-submit-btn">Submit</button>
            </form>
          </div>
        </div>

        <div className="custom-map-container">
          <h2>Visit Our Office</h2>
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomContactPage;
