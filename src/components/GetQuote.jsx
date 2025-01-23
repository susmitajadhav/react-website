import React, { useState } from 'react';
import './GetQuote.css'; // Import corresponding CSS for styling
import Footer from './Footer';
import Header from './Header';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your quote request has been submitted.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div>
      <Header />
      <div className="get-quote-page">
        <h1 className="quote-title">Request a Quote</h1>
        <p className="quote-description">
          Fill out the form below to request a quote. Our team will get back to you as soon as possible!
        </p>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message or project details"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Submit Request</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default GetQuote;
