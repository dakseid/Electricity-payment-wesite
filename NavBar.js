// src/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <div className="brand">ShopLogo</div>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/pay" activeClassName="active">Pay Now</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
