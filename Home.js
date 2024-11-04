// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for styles

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="home-title">Welcome to the Electricity Payment System</h1>
        <p className="home-description">
          Pay your electricity bills online easily and securely.
        </p>
        <Link to="/pay">
          <button className="home-button">Make a Payment</button>
        </Link>
      </div>

      {/* Features Section */}
      <section className="features-section">
  <h2 className="section-title">Why Choose Us?</h2>
  <div className="features-container">
    <div className="feature">
      <h3>Convenience</h3>
      <p>Pay your bills anytime, anywhere with just a few clicks.</p>
    </div>
    <div className="feature">
      <h3>Security</h3>
      <p>Your transactions are secure with industry-standard encryption.</p>
    </div>
    <div className="feature">
      <h3>24/7 Customer Support</h3>
      <p>We provide round-the-clock support to assist you with any inquiries.</p>
    </div>
    <div className="feature">
      <h3>Fast Transactions</h3>
      <p>Experience lightning-fast payment processing for your convenience.</p>
    </div>
    <div className="feature">
      <h3>Easy Management</h3>
      <p>Manage your bills and payment history all in one place.</p>
    </div>
    <div className="feature">
      <h3>Eco-Friendly Options</h3>
      <p>Join us in reducing paper waste with digital billing and payments.</p>
    </div>
  </div>
</section>

     {/* How It Works Section */}
<section className="how-it-works-section">
  <h2 className="section-title">How It Works</h2>
  <ol className="how-it-works-list">
    <li>
      <span className="step-number">1.</span> Select your bills from the list of available services.
    </li>
    <li>
      <span className="step-number">2.</span> Fill in your details and payment information in the form provided.
    </li>
    <li>
      <span className="step-number">3.</span> Review your payment summary to ensure everything is correct.
    </li>
    <li>
      <span className="step-number">4.</span> Confirm your payment and receive a confirmation receipt via email.
    </li>
    <li>
      <span className="step-number">5.</span> Access your payment history anytime in your account dashboard.
    </li>
  </ol>
</section>


      {/* New: Plans & Pricing Section */}
      <section className="pricing-section">
        <h2 className="section-title">Plans & Pricing</h2>
        <div className="pricing-container">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p>For light users</p>
            <p className="price">$10/month</p>
            <Link to="/subscribe">
              <button className="home-button">Choose Basic</button>
            </Link>
          </div>
          <div className="pricing-card">
            <h3>Standard</h3>
            <p>For regular users</p>
            <p className="price">$20/month</p>
            <Link to="/subscribe">
              <button className="home-button">Choose Standard</button>
            </Link>
          </div>
          <div className="pricing-card">
            <h3>Premium</h3>
            <p>For heavy users</p>
            <p className="price">$30/month</p>
            <Link to="/subscribe">
              <button className="home-button">Choose Premium</button>
            </Link>
          </div>
        </div>
      </section>

      {/* New: Testimonials Section */}
      <section className="testimonials-section">
  <h2 className="section-title">What Our Users Say</h2>
  <div className="testimonials-container">
    <div className="testimonial">
      <p>"I love how easy it is to pay my bills online! The process is seamless and fast!"</p>
      <h4>- Jane Doe</h4>
      <p className="user-role">Homeowner</p>
    </div>
    <div className="testimonial">
      <p>"The customer support is fantastic! I had a query and got help right away."</p>
      <h4>- John Smith</h4>
      <p className="user-role">Small Business Owner</p>
    </div>
    <div className="testimonial">
      <p>"A game changer for me! I can now pay my electricity bills with just a few clicks!"</p>
      <h4>- Sarah Johnson</h4>
      <p className="user-role">Frequent Traveler</p>
    </div>
    <div className="testimonial">
      <p>"I appreciate the security measures in place. I feel safe making online payments!"</p>
      <h4>- Michael Brown</h4>
      <p className="user-role">Tech Enthusiast</p>
    </div>
    <div className="testimonial">
      <p>"This service has saved me so much time. I no longer have to wait in long lines!"</p>
      <h4>- Emily Davis</h4>
      <p className="user-role">Busy Parent</p>
    </div>
    <div className="testimonial">
      <p>"The user interface is intuitive, making it easy for anyone to navigate!"</p>
      <h4>- Chris Wilson</h4>
      <p className="user-role">Retiree</p>
    </div>
  </div>
</section>


      {/* New: FAQ Section */}
      <section className="faq-section">
  <h2 className="section-title">Frequently Asked Questions</h2>
  <div className="faq-container">
    <div className="faq-item">
      <h4>What payment methods do you accept?</h4>
      <p>We accept credit cards, debit cards, and PayPal.</p>
    </div>
    <div className="faq-item">
      <h4>How do I view my payment history?</h4>
      <p>You can view your payment history in your account dashboard.</p>
    </div>
    <div className="faq-item">
      <h4>Is my payment information secure?</h4>
      <p>Yes, we use industry-standard encryption to protect your payment information.</p>
    </div>
    <div className="faq-item">
      <h4>Can I set up automatic payments?</h4>
      <p>Yes, you can set up automatic payments in your account settings.</p>
    </div>
    <div className="faq-item">
      <h4>Who can I contact for support?</h4>
      <p>You can contact our support team via the 'Contact Us' page.</p>
    </div>
    <div className="faq-item">
      <h4>Do you offer any discounts for early payments?</h4>
      <p>Yes, we offer a 5% discount for payments made before the due date.</p>
    </div>
  </div>
</section>

    
{/* Footer Section */}
<footer className="footer-section">
  <div className="footer-container">
    <div className="footer-content">
      <h2 className="footer-title">Get in Touch</h2>
      <p>If you have any questions, feel free to <Link to="/contact">contact us</Link>.</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <strong>Email:</strong> <a href="mailto:support@electricitypayment.com">support@electricitypayment.com</a>
        </div>
        <div className="contact-item">
          <strong>Phone:</strong> <a href="tel:+15551234567">+1 (555) 123-4567</a>
        </div>
      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Electricity Payment System. All rights reserved.</p>
    </div>
  </div>
</footer>




    </div>
  );
}

export default Home;
