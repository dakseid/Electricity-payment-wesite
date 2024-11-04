// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import NavBar from './NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './Home';
import StripePayment from './StripePayment';
import About from './About';
import Contact from './Contact';
import Subscription from './Subscription';
import Payment from './Payment';
import './styles.css';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(loggedIn === 'true');
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <NavBar />
      <Elements stripe={stripePromise}>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/register"
            element={<Register onLogin={handleLogin} />}
          />
          <Route
            path="/pay"
            element={isAuthenticated ? <StripePayment /> : <Navigate to="/login" />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/subscribe"
            element={<Subscription />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/payment"
            element={<Payment />}
          />
        </Routes>
      </Elements>
    </Router>
  );
}

export default App;
