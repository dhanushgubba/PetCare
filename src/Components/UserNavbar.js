import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UserNavbar.css';
import {
  FaHome,
  FaPaw,
  FaUser,
  FaSignOutAlt,
  FaSearch,
  FaComments,
} from 'react-icons/fa';

const UserNavbar = () => {
  const [user, setUser] = useState('');
  const email = localStorage.getItem('userEmail');

  const fetchProfileName = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/profile?email=${email}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      const data = await response.json();
      setUser(data.username); // store just the username
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  useEffect(() => {
    fetchProfileName(); // fetch the user's name when the component mounts
  }, []);

  return (
    <nav className="user-container">
      <h1 className="user-logo">PetSpot</h1>
      <div className="user-links">
        <Link to="/home" className="nav-link">
          <FaHome className="nav-icon" />
          <span>Home</span>
        </Link>
        <Link to="/pets" className="nav-link">
          <FaPaw className="nav-icon" />
          <span>Pets</span>
        </Link>
        <Link to="/profile" className="nav-link">
          <FaUser className="nav-icon" />
          <span>Profile</span>
        </Link>
        <Link to="/adopt" className="nav-link">
          <FaPaw className="nav-icon" />
          <span>Adopt</span>
        </Link>
        <Link to="/lostfound" className="nav-link">
          <FaSearch className="nav-icon" />
          <span>Lost/Found</span>
        </Link>
        <Link to="/blog" className="nav-link">
          <FaComments className="nav-icon" />
          <span>Blog</span>
        </Link>
        <Link to="/" className="nav-link">
          <FaSignOutAlt className="nav-icon" />
          <span>Logout</span>
        </Link>
      </div>
      <div className="user-welcome">
        <Link to="/profile" className="user-profile-link">
          <FaUser className="nav-icon" />
          <span>{user}</span>
        </Link>
      </div>
    </nav>
  );
};

export default UserNavbar;
