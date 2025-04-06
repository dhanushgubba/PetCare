import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavbar.css'; // Import your CSS file for styling
import { FaHome, FaPaw, FaUser, FaSignOutAlt } from 'react-icons/fa'; // Import icons from react-icons
const UserNavbar = () => {
  return (
    <div className="user-container">
      <h1 className="user-logo">PetSpot</h1>
      <div className="user-links">
        <Link to="/home">
          <FaHome />
          Home
        </Link>
        <Link to="/pets">
          <FaPaw />
          Pets
        </Link>
        <Link to="/profile">
          <FaUser />
          Profile
        </Link>
        <Link to="/">
          <FaSignOutAlt />
          Logout
        </Link>
      </div>
    </div>
  );
};
export default UserNavbar;
