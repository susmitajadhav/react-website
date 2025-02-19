import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "./Header";
import Footer from "./Footer";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_hsx6zkv", // Service ID
        "template_a7twor8", // Template ID
        formData,
        "your_user_id" // Replace with your EmailJS User ID
      )
      .then(
        () => {
          setStatus("Thank you! Your message has been sent successfully.");
          setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
          setTimeout(() => setStatus(""), 4000);
        },
        () => {
          setStatus("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      <Header />
      <div className="contact-page-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Reach out with any inquiries or feedback.</p>
        </div>

        <div className="contact-content">
          {/* Register Office */}
          <div className="contact-details animated-fade">
            <div className="contact-card">
              <h2>🏢 Register Office</h2>
              <ul>
                <li>📍 Address: 456 Corporate Tower, Main Street, Mumbai, India</li>
                <li>📞 Phone: +91 98765 43210</li>
                <li>📠 Fax: +91 98765 43211</li>
                <li>📧 Email: register@company.com</li>
                <li>🕒 Working Hours: Mon - Fri, 9 AM - 6 PM</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-card">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
                {status && <p className="status-message">{status}</p>}
              </form>
            </div>
          </div>
        </div>

        {/* Addresses and Maps for Different Offices */}
        <div className="map-container">
          <h2>📍 Our Offices</h2>
          <div className="map-grid">

            {/* Register Office */}
            <div className="map-box animated-fade">
              <h3>🏢 Register Office</h3>
              <p>Flat No.101,Vrundavan Appartment,Near Kusumgandh Garden,</p>
              <p>Pradhyapak Colony,Mahadevnagar,Uran Islampur 415409</p>
              <p>📞 +91 98765 43210 </p>
              <p>📧 Email: officesavtech@gmail.com</p>
              <iframe
                src="https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
              ></iframe>
            </div>

            {/* Branch Office */}
            <div className="map-box animated-fade">
              <h3>🏢 Branch Office</h3>
              <p>Add. Plot No. 27/18,Kalanagar,</p>
              <p>Sangli,Maharashtra 416416</p>
              <p>📞 9850827966 , 7057104851 , 953613890 </p>
              <p>📧 Email: officesavtech@gmail.com</p>
              <iframe
                src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
              ></iframe>
            </div>

            {/* Manufacturing Office */}
            <div className="map-box animated-fade">
              <h3>🏭 Manufacturing Office</h3>
              <p>Add. Plot No. 27/18,Kalanagar,</p>
              <p>Sangli,Maharashtra 416416</p>
              <p>📞 +91 76543 21098 </p>
              <p>📧 Email: officesavtech@gmail.com</p>
              <iframe
                src="https://maps.google.com/maps?q=Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
