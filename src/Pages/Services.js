import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <div className="header-underline"></div>
        <p className="header-subtitle">
          Providing the best care for your beloved pets
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🐾</div>
          <h3>Professional Grooming</h3>
          <p>
            Expert grooming services tailored to your pet's needs using premium
            products and gentle techniques.
          </p>
          <a href="/login" className="service-link">
            Learn More →
          </a>
        </div>

        <div className="service-card">
          <div className="service-icon">🎓</div>
          <h3>Training Programs</h3>
          <p>
            Comprehensive training programs led by certified trainers using
            positive reinforcement methods.
          </p>
          <a href="/login" className="service-link">
            Learn More →
          </a>
        </div>

        <div className="service-card">
          <div className="service-icon">🏠</div>
          <h3>Pet Sitting</h3>
          <p>
            Safe and comfortable pet sitting services in a loving environment
            when you're away.
          </p>
          <a href="/login" className="service-link">
            Learn More →
          </a>
        </div>

        <div className="service-card">
          <div className="service-icon">👨‍⚕️</div>
          <h3>Veterinary Care</h3>
          <p>
            Regular check-ups and medical care to ensure your pet's health and
            well-being.
          </p>
          <a href="/login" className="service-link">
            Learn More →
          </a>
        </div>

        <div className="service-card">
          <div className="service-icon">🛍️</div>
          <h3>Pet Supplies</h3>
          <p>
            Premium quality food, toys, and accessories for all your pet's
            needs.
          </p>
          <a href="/login" className="service-link">
            Learn More →
          </a>
        </div>

        <div className="service-card">
          <div className="service-icon">🚗</div>
          <h3>Pet Transport</h3>
          <p>Safe and comfortable transportation services for your pets.</p>
          <a href="/login   " className="service-link">
            Learn More →
          </a>
        </div>
      </div>

      <div className="featured-section">
        <div className="featured-content">
          <h2>Why Choose Us?</h2>
          <p>
            Having faith in saving the pets which are abondoned, we provide the
            highest quality services to people by our service who opt them for
            care.
          </p>
          <ul className="features-list">
            <li>✓ Certified Professional Staff</li>
            <li>✓ Personalized Care Plans</li>
            <li>✓ 24/7 Emergency Support</li>
          </ul>
        </div>
        <div className="featured-image">
          <img
            src="https://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2013/01/28/Photos/STRAYDOG--621x414.jpg"
            alt="Happy pets at Pet Spot"
            className="services-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
