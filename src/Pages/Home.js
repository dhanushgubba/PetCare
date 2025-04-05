import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Pet Care';
  }, []);
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Pet Spot</h1>
        <button className="home-btn">
          <a href="/login">Get Started</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
