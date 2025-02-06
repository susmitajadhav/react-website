import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactPage.css";

const Footer = lazy(() => import("./Footer"));
const Header = lazy(() => import("./Header"));

const CustomContactPage = React.memo(() => {
  const [formData, setFormData] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPhone: "",
    userMessage: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoading(true);
      emailjs
        .send(
          "your_service_id",
          "your_template_id",
          {
            from_name: `${formData.userFirstName} ${formData.userLastName}`,
            from_email: formData.userEmail,
            phone: formData.userPhone,
            message: formData.userMessage,
          },
          "your_user_id"
        )
        .then(
          () => {
            setStatusMessage("Your message has been sent successfully!");
            setFormData({ userFirstName: "", userLastName: "", userEmail: "", userPhone: "", userMessage: "" });
          },
          () => {
            setStatusMessage("Something went wrong. Please try again.");
          }
        )
        .finally(() => {
          setLoading(false);
        });
    },
    [formData]
  );

  return (
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>

      <div className="custom-contact-container">
        <header className="custom-contact-header">
          <h1>Contact Us</h1>
          <p>We are here to assist you. Feel free to reach out!</p>
        </header>

        <div className="custom-contact-content">
          <div className="custom-contact-details" data-aos="fade-right">
            <h2>Our Contact Details</h2>
            <div className="contact-card">
              <ul>
                <li><i className="fas fa-phone-alt"></i> <strong>Phone:</strong> 9422225058, 9011731731, 9822760005</li>
                <li><i className="fas fa-envelope"></i> <strong>Email:</strong> info@nrfabricator.com</li>
                <li><i className="fas fa-map-marker-alt"></i> <strong>Office:</strong> G-58, M.I.D.C, Ahmednagar, Maharashtra - 414111</li>
                <li><i className="fas fa-clock"></i> <strong>Working Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
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
              
              <button type="submit" className="custom-submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </button>
              {statusMessage && <p className="status-message">{statusMessage}</p>}
            </form>
          </div>
        </div>

        <div className="custom-map-container">
          <h2>Visit Our Office</h2>
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60583.05142847984!2d74.7201486!3d19.0948288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc7fe70c47a257%3A0x7f6e10d67c9e6357!2sG-58%2C%20M.I.D.C%2C%20Ahmednagar%2C%20Maharashtra%20414111!5e0!3m2!1sen!2sin!4v1646372164539!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
});

export default CustomContactPage;
