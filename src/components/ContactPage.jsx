import React, { useState } from "react";
import "./ContactPage.css";
import Footer from "./Footer";
import Header from "./Header";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.firstName}! Your message has been submitted.`);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div>
      <Header />
      <div className="contact-page">
        {/* Header Section */}
        <main className="contact-main">
          <h1>Contact Us</h1>
          <p>We are here to assist you. Feel free to reach out!</p>
        </main>

        {/* Contact Details and Form Section */}
        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info" data-aos="fade-right">
            <h2>Our Contact Details</h2>
            <ul>
              <li><strong>Phone:</strong> 9422225058, 9011731731, 9822760005</li>
              <li><strong>Directors:</strong></li>
              <ul>
                <li><strong>1) Mr. Sudhirr Paatil :</strong> 9850827966</li>
                <li><strong>2) Mr. Vikas Patil :</strong> 7057104851</li>
                <li><strong>3) Mr. Amarsinh Patil :</strong> 8999469825</li>
              </ul>
              <li><strong>Email:</strong> info@nrfabricator.com / nrdewoo@rediffmail.com</li>
              <li><strong>Working Hours:</strong> Sun to Fri, 9:00am to 7:00pm</li>
              <li><strong>Office:</strong> G-58, M.I.D.C, Ahmednagar, Maharashtra - 414111</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container" data-aos="fade-left">
            <h2>Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone No"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              />
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="contact-map">
          <h2>Visit Our Office</h2>
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.381329882752!2d73.8628078148929!3d18.52043028739947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c03f5c5e8387%3A0xb7a737647dc60f85!2sAhmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1617760848102!5m2!1sen!2sin"
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

export default ContactPage;
