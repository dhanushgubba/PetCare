import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUsers,
  FaPaw,
  FaChartBar,
  FaCog,
  FaCalendarAlt,
  FaBell,
} from 'react-icons/fa';
import './AdminHome.css';

const AdminHome = () => {
  const stats = {
    totalUsers: 150,
    totalPets: 45,
    adoptions: 28,
  };

  return (
    <div className="admin-layout">
      <div className="admin-home-container">
        <div className="dashboard-header">
          <h1>Welcome to the Admin Dashboard</h1>
          <div className="stats-container">
            <div className="stat-card">
              <h3>Total Users</h3>
              <p>{stats.totalUsers}</p>
            </div>
            <div className="stat-card">
              <h3>Total Pets</h3>
              <p>{stats.totalPets}</p>
            </div>
            <div className="stat-card">
              <h3>Adoptions</h3>
              <p>{stats.adoptions}</p>
            </div>
          </div>
        </div>

        <div className="cards-grid">
          <div className="admin-home-card">
            <FaUsers className="card-icon" />
            <h2>Manage Users</h2>
            <p>Add, edit, or remove user accounts</p>
            <button className="card-btn">
              <Link to="/manage-users">Manage Users</Link>
            </button>
          </div>

          <div className="admin-home-card">
            <FaPaw className="card-icon" />
            <h2>View All Pets</h2>
            <p>Manage pet listings and details</p>
            <button className="card-btn">
              <Link to="/viewpets">View Pets</Link>
            </button>
          </div>

          <div className="admin-home-card">
            <FaChartBar className="card-icon" />
            <h2>Analytics</h2>
            <p>View adoption statistics and trends</p>
            <button className="card-btn">
              <Link to="/analytics">View Analytics</Link>
            </button>
          </div>

          <div className="admin-home-card">
            <FaCalendarAlt className="card-icon" />
            <h2>Appointments</h2>
            <p>Manage adoption appointments</p>
            <button className="card-btn">
              <Link to="/appointments">View Calendar</Link>
            </button>
          </div>

          <div className="admin-home-card">
            <FaBell className="card-icon" />
            <h2>Notifications</h2>
            <p>Manage system notifications</p>
            <button className="card-btn">
              <Link to="/notifications">Manage Alerts</Link>
            </button>
          </div>

          <div className="admin-home-card">
            <FaCog className="card-icon" />
            <h2>Settings</h2>
            <p>Configure system settings</p>
            <button className="card-btn">
              <Link to="/settings">Configure</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
