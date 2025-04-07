import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <h1 className="logo">PetSpot</h1>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>
          Services
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
        <button className="btn-primary" onClick={() => setIsOpen(false)}>
          <Link to="/login">Login</Link>
        </button>
        <button className="btn-primary" onClick={() => setIsOpen(false)}>
          <Link to="/adminlogin">Admin Login</Link>
        </button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
