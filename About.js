import React from 'react';
import './About.css'; // Import CSS for styling

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          We are dedicated to making your electricity bill payments fast, secure, and convenient. Our platform provides seamless payment options for managing your household bills effortlessly.
        </p>
      </section>

      <section className="company-info">
        <div className="company-mission">
          <h2 className="section-title">Our Mission</h2>
          <p>
            Our mission is to provide a reliable and user-friendly platform that simplifies the process of paying electricity and other household bills. We aim to make bill payments stress-free for our customers by offering secure and flexible payment options.
          </p>
        </div>

        <div className="company-vision">
          <h2 className="section-title">Our Vision</h2>
          <p>
            We envision a world where paying household bills is quick and easy, without the hassle of standing in queues or handling complex payment processes. With technology, we are bringing convenience to every home.
          </p>
        </div>
      </section>

      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>Secure Payments</h3>
            <p>We use industry-standard encryption to ensure that your transactions are 100% safe and secure.</p>
          </div>
          <div className="feature">
            <h3>Fast Transactions</h3>
            <p>Make payments in a matter of seconds and get instant confirmation of your bills being paid.</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>Our customer service is available around the clock to assist with any issues or inquiries.</p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2 className="section-title">Meet Our Team</h2>
        <p>
          We are a group of passionate professionals committed to delivering a top-notch payment solution. Our team of experts works tirelessly to ensure the platform is always secure, reliable, and easy to use.
        </p>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <p>
          Have questions or need assistance? <a href="/contact" className="contact-link">Contact us</a> and we will be happy to help.
        </p>
      </section>
    </div>
  );
}

export default About;
