// src/StripePayment.js
import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import styles from './StripePayment.module.css'; // Importing CSS module for styles

const billsData = [
  { id: 1, name: 'Electricity Bill', cost: 5000 },
  { id: 2, name: 'Water Bill', cost: 3000 },
  { id: 3, name: 'Internet Bill', cost: 4500 },
];

const StripePayment = () => {
  const [selectedBills, setSelectedBills] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', address: '', paymentDate: '' });
  const stripe = useStripe();
  const elements = useElements();
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState('');

  const handleBillSelection = (billId) => {
    setSelectedBills((prevSelected) =>
      prevSelected.includes(billId)
        ? prevSelected.filter((id) => id !== billId)
        : [...prevSelected, billId]
    );
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const totalAmount = selectedBills
    .map((billId) => billsData.find((bill) => bill.id === billId).cost)
    .reduce((sum, current) => sum + current, 0);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setPaymentProcessing(true);
    setPaymentMessage(''); // Reset payment message

    const response = await fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: totalAmount,
      }),
    });

    const { clientSecret } = await response.json();

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: formData.name,
          email: formData.email,
          address: {
            line1: formData.address,
          },
        },
      },
    });

    setPaymentProcessing(false);

    if (error) {
      console.error('Payment failed:', error);
      setPaymentMessage('Payment failed. Please try again.');
      return;
    }

    if (paymentIntent.status === 'succeeded') {
      console.log('Payment successful!');
      setPaymentMessage('Payment successful! Thank you for your payment.');
      setSelectedBills([]); // Clear selected bills after successful payment
      setFormData({ name: '', email: '', address: '', paymentDate: '' }); // Reset form
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Make a Payment</h1>

      {/* Bill Selection */}
      <div className={styles.billSelection}>
        <h2 className={styles.subheading}>Select Bills</h2>
        {billsData.map((bill) => (
          <div key={bill.id} className={styles.billOption}>
            <label>
              <input
                type="checkbox"
                checked={selectedBills.includes(bill.id)}
                onChange={() => handleBillSelection(bill.id)}
              />
              {bill.name} - ${(bill.cost / 100).toFixed(2)}
            </label>
          </div>
        ))}
      </div>

      {/* Payment Form */}
      <form onSubmit={handlePaymentSubmit} className={styles.paymentForm}>
        <h2 className={styles.subheading}>Fill out your details</h2>
        <div className={styles.inputGroup}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={styles.inputField}
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={styles.inputField}
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className={styles.inputField}
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label>
            Date of Payment:
            <input
              type="date"
              name="paymentDate"
              value={formData.paymentDate}
              onChange={handleInputChange}
              required
              className={styles.inputField}
            />
          </label>
        </div>

        {/* CardElement from Stripe */}
        <div className={styles.inputGroup}>
          <CardElement className={styles.cardElement} />
        </div>

        {/* Display Total */}
        <h3 className={styles.totalAmount}>Total: ${(totalAmount / 100).toFixed(2)}</h3>

        <button
          type="submit"
          disabled={!stripe || paymentProcessing}
          className={styles.submitButton}
        >
          {paymentProcessing ? 'Processing...' : `Pay ${(totalAmount / 100).toFixed(2)}`}
        </button>

        {/* Payment Feedback Message */}
        {paymentMessage && <div className={styles.paymentMessage}>{paymentMessage}</div>}
      </form>
    </div>
  );
};

export default StripePayment;
