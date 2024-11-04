// src/components/Register.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

function Register({ onLogin }) {
  const navigate = useNavigate();

  const handleRegister = () => {
    onLogin();
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>
          <button type="button" onClick={handleRegister} className="auth-button">
            Register
          </button>
        </form>
        <p className="auth-text">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
