import React, { useState, useEffect } from 'react';
import './AdminNavbar.css';
import {
  FaHome,
  FaUser,
  FaPaw,
  FaSignature,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'PetSpot | Admin Home';
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="adminnavbar-container">
      <h1 className="admin-logo">PetSpot</h1>

      <div className="hamburger-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`adminnav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/admin-dashboard" onClick={toggleMenu}>
          <FaHome className="adminnav-icon" /> Home
        </Link>
        <Link to="/manage-users" onClick={toggleMenu}>
          <FaUser className="adminnav-icon" /> Manage Users
        </Link>
        <Link to="/manage-pets" onClick={toggleMenu}>
          <FaPaw className="adminnav-icon" /> Manage Pets
        </Link>
        <Link to="/adoption-pets" onClick={toggleMenu}>
          <FaSignature className="adminnav-icon" /> Adoption Pets
        </Link>
        <Link to="admin-profile" onClick={toggleMenu}>
          <FaUser className="adminnav-icon" /> Admin Profile
        </Link>
        <Link to="/login" onClick={toggleMenu}>
          <FaSignOutAlt className="adminnav-icon" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
