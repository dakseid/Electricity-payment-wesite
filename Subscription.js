// src/components/Subscription.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Subscription.css'; // Import CSS for subscription page styles

function Subscription() {
  return (
    <div className="subscription-container">
      <div className="hero-section">
        <h1 className="subscription-title">Choose Your Subscription Plan</h1>
        <p className="subscription-description">Find the perfect plan that suits your needs.</p>
      </div>
      
      <div className="pricing-container">
        <div className="pricing-card">
          <h2>Basic Plan</h2>
          <div className="price">$9.99/month</div>
          <Link to="/payment?plan=basic">
            <button className="subscribe-button">Subscribe Now</button>
          </Link>
        </div>
        <div className="pricing-card">
          <h2>Pro Plan</h2>
          <div className="price">$19.99/month</div>
          <Link to="/payment?plan=pro">
            <button className="subscribe-button">Subscribe Now</button>
          </Link>
        </div>
        <div className="pricing-card">
          <h2>Premium Plan</h2>
          <div className="price">$29.99/month</div>
          <Link to="/payment?plan=premium">
            <button className="subscribe-button">Subscribe Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
