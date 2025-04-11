import React, { useEffect, useState } from 'react';
import './AdminProfile.css';

const AdminProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAdminProfile = async () => {
    try {
      setLoading(true);
      setError(null);

      const storedUsername = localStorage.getItem('adminUsername');
      if (!storedUsername) {
        throw new Error('No username found. Please login again.');
      }

      const response = await fetch(
        `http://localhost:5000/get/adminprofile?username=${encodeURIComponent(
          storedUsername
        )}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error('Error fetching Admin Profile:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminProfile();
  }, []);

  if (loading) {
    return (
      <div className="adminprofile-container">
        <h1>My Profile</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="adminprofile-container">
        <h1>My Profile</h1>
        <p className="error-message">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="adminprofile-container">
      <h1>My Profile</h1>
      {profile && (
        <div className="profile-details">
          <p>
            <strong>Username:</strong> {profile.username}
          </p>
          <p>
            <strong>Password:</strong> {profile.password}
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
