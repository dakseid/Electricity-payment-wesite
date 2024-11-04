// src/components/Payment.js
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Payment.css'; // Import the modern styling

function Payment() {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get('plan') || 'basic'; // Default to basic plan if no plan is selected

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
  });

  const handleInputChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., payment processing logic here)
    console.log('Payment details submitted:', paymentDetails);
  };

  return (
    <div className="payment-container">
      <form className="payment-form" onSubmit={handleSubmit}>
        <h1 className="payment-title">Payment for {selectedPlan} Plan</h1>
        
        <label htmlFor="name">Name on Card</label>
        <input
          type="text"
          id="name"
          name="name"
          value={paymentDetails.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={paymentDetails.cardNumber}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          value={paymentDetails.expiryDate}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={paymentDetails.cvv}
          onChange={handleInputChange}
          required
        />

        <button type="submit" className="payment-button">Submit Payment</button>
      </form>
    </div>
  );
}

export default Payment;
