import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [formData]);

  return (
    <div>
      <Header />
      <div className="contact-page">
        <main className="contact-page__header">
          <h1>Contact Us</h1>
          <p>We are here to assist you. Feel free to reach out!</p>
        </main>

        <div className="contact-page__content">
          <div className="contact-page__info" data-aos="fade-right">
            <h2>Our Contact Details</h2>
            <ul>
              <li><strong>Contact Us:</strong> 9422225058, 9011731731, 9822760005</li>
              <li><strong>Directors:</strong></li>
              <ul>
                <li><strong>1) Mr. Sudhirr Paatil </strong></li>
                <li><strong>2) Mr. Vikas Patil </strong></li>
                <li><strong>3) Mr. Amarsinh Patil </strong></li>
              </ul>
              <li><strong>Email:</strong></li>
              <li>info@nrfabricator.com / nrdewoo@rediffmail.com</li>
              <li><strong>Working Hours:</strong> </li>
              <li> Sun to Fri, 9:00am to 7:00pm</li>
              <li><strong>Office:</strong></li>
              <li>G-58, M.I.D.C, Ahmednagar, Maharashtra - 414111</li>
            </ul>
          </div>

          <div className="contact-page__form-container" data-aos="fade-left">
            <h2>Send Us a Message</h2>
            <form className="contact-page__form" onSubmit={handleSubmit}>
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

        <div className="contact-page__map">
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

export default ContactPage;
