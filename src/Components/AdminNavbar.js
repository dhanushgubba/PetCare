import React from 'react';
import './AdminNavbar.css';
import {
  FaHome,
  FaUser,
  FaPaw,
  FaSignature,
  FaSignOutAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const AdminNavbar = () => {
  return (
    <div className="adminnavbar-container">
      <h1 className="admin-logo">PetSpot</h1>
      <div className="adminnav-links">
        <Link to="/admin-dashboard">
          <FaHome className="adminnav-icon" />
          Home
        </Link>
        <Link to="/manage-users">
          <FaUser className="adminnav-icon" />
          Manage Users
        </Link>
        <Link to="/manage-pets">
          <FaPaw className="adminnav-icon" />
          Manage Pets
        </Link>
        <Link to="/adoption-pets">
          <FaSignature className="adminnav-icon" />
          Adoption Pets
        </Link>
        <Link to="/profile">
          <FaUser className="adminnav-icon" />
          My Profile
        </Link>
        <Link to="/login">
          <FaSignOutAlt className="adminnav-icon" />
          Logout
        </Link>
      </div>
    </div>
  );
};
export default AdminNavbar;
