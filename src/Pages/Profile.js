import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const email = localStorage.getItem('userEmail');

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/profile?email=${email}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError('Failed to load profile. Please try again later.');
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar">
            <span>{user?.username?.charAt(0).toUpperCase() || '?'}</span>
          </div>
          <h1>Profile</h1>
        </div>

        <div className="profile-content">
          <div className="profile-field">
            <label>Username</label>
            <p>{user?.username}</p>
          </div>

          <div className="profile-field">
            <label>Email</label>
            <p>{user?.email}</p>
          </div>

          <div className="profile-field">
            <label>Contact Info</label>
            <p>{user?.phone}</p>
          </div>

          <div className="profile-field">
            <label>Address</label>
            <p>{user?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
