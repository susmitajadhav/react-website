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
                <li>📍 Flat No.101, Vrundavan Apartment, Near Kusumgandh Garden, Pradhyapak Colony, Mahadevnagar, Uran Islampur 415409</li>
                <li>📞 Phone: 9850827966, 7057104851, 953613890, 9503613890</li>
                <li>📠 Fax: +91 9850827966</li>
                <li>📧 Email: officesavtech@gmail.com</li>
                <li>🕒 Working Hours: Wed - Mon, 9 AM - 6 PM</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <div className="contact-card">
              <h2 className="contact_head">Send Us a Message</h2>
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
              <p>Flat No.101, Vrundavan Apartment, Near Kusumgandh Garden,</p>
              <p>Pradhyapak Colony, Mahadevnagar, Uran Islampur 415409</p>
              <p>📞 +91 98765 43210 </p>
              <p>📧 Email: officesavtech@gmail.com</p>
              <iframe
                src="https://www.google.com/maps/place/Krishnaji+More+,Druvanak+Apartment+Uran+Islampur+Behind+Anudatta+Medicals/@17.053301,74.2657356,17z/data=!4m6!3m5!1s0x3bc1750034ac68bd:0x9060d3979d64f011!8m2!3d17.0532959!4d74.2683105!16s%2Fg%2F11w7nsng_l?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Branch Office */}
            <div className="map-box animated-fade">
              <h3>🏢 Branch Office</h3>
              <p>Plot No. 27/18, Kalanagar,</p>
              <p>Sangli, Maharashtra 416416</p>
              <p>📞 9850827966, 7057104851, 953613890, 9503613890</p>
              <p>📧 Email: officesavtech@gmail.com</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.344993479203!2d74.5790137!3d16.8711438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1234567890abc%3A0xabcdef123456789!2sKalanagar!5e0!3m2!1sen!2sin!4v1640000000000"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Manufacturing Office */}
            <div className="map-box animated-fade">
              <h3>🏭 Manufacturing Office</h3>
              <p>Plot No. 27/18, Kalanagar,</p>
              <p>Sangli, Maharashtra 416416</p>
              <p>📞 +91 76543 21098</p>
              <p>📧 Email: officesavtech@gmail.com</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.344993479203!2d74.5790137!3d16.8711438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1234567890abc%3A0xabcdef123456789!2sKalanagar!5e0!3m2!1sen!2sin!4v1640000000000"
                allowFullScreen
                loading="lazy"
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
