// server.js
const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
require('dotenv').config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Enable CORS for all requests
app.use(cors({
  origin: 'http://localhost:3000', // Allow your React frontend's URL
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Stripe Payment Backend');
});

// Create PaymentIntent route
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // amount from client in cents
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'ng',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: error.message });
  }
});

// Start server on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
