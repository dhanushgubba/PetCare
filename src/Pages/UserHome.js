import React, { useEffect } from 'react';
import './UserHome.css';
import HomeImage from '../images/home.jpg';

const activities = [
  {
    title: 'Pet Adoption',
    description: 'Find your perfect furry friend.',
    icon: '🐾',
  },
  {
    title: 'Pet Grooming',
    description: 'Keep your pets looking their best.',
    icon: '✨',
  },
  {
    title: 'Pet Health',
    description: "Stay updated on your pet's health.",
    icon: '💊',
  },
  {
    title: 'Pet Community',
    description: 'Join a community of pet lovers.',
    icon: '👥',
  },
  {
    title: 'Pet Care',
    description: 'Find the best care for your pets.',
    icon: '❤️',
  },
];

const UserHome = () => {
  useEffect(() => {
    document.title = 'PetSpot | Home';
  }, []);

  const handleExplore = (activity) => {
    // This can be expanded to handle navigation or modal displays
    console.log(`Exploring ${activity}`);
  };

  return (
    <div className="user-home-container">
      <div className="user-home-content">
        <div className="user-home-text">
          <h1>
            Welcome to PetSpot <span className="paw-emoji">🐾</span>
          </h1>
          <p>
            At <strong>PetSpot</strong>, we believe pets are not just animals —
            they're family. Whether you're a proud pet parent or looking to
            welcome a new furry friend into your life, we've got you covered.
          </p>
          <p>
            Explore a variety of services including pet adoption, grooming,
            health tips, and a vibrant community of animal lovers. Keep track of
            your pets, manage their health records, and find the best care — all
            in one place.
          </p>
          <p className="highlight-text">
            Join us on this paw-some journey and make your pet's life as joyful
            as they make yours! 🐶🐱🐾
          </p>
        </div>
        <div className="image-container">
          <img src={HomeImage} alt="pets" className="user-home-image" />
          <div className="image-overlay">
            <span>Your Pet's Happy Place</span>
          </div>
        </div>
      </div>

      <div className="user-home-activities">
        <h2>Discover Our Services</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="user-home-activity-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="activity-icon">{activity.icon}</span>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
