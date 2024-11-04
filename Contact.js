import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending data to server or email
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          Have questions or need support? Feel free to reach out to us. We’re here to help!
        </p>

        <div className="contact-details">
          <div className="contact-detail">
            <h3>Email Us</h3>
            <p>adukeraji@electricitypayment.com</p>
          </div>

          <div className="contact-detail">
            <h3>Call Us</h3>
            <p>+2349042469794</p>
          </div>

          <div className="contact-detail">
            <h3>Our Office</h3>
            <p>123 Electricity St, Energy City, Nassarawa, NG</p>
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
