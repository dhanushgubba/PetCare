import React, { useEffect } from 'react';
import './About.css';
import AboutImage from '../images/about.jpg'; // Assuming you have an image in your project
const About = () => {
  useEffect(() => {
    document.title = 'About Us | Pet Spot';
  }, []);

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Pet Spot</h1>
        <div className="header-underline"></div>
      </div>

      <div className="about-content">
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Welcome to Pet Spot! We are dedicated to providing the best care for
            your pets. Our team of experienced professionals is passionate about
            animals and committed to ensuring their well-being.
          </p>
          <img src={AboutImage} alt="About Us" className="about-image" />
        </div>

        <div className="services-section">
          <h2>What We Offer</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Professional Grooming</h3>
              <p>
                Expert grooming services tailored to your pet's specific needs,
                using premium products and gentle techniques.
              </p>
            </div>
            <div className="service-card">
              <h3>Training Programs</h3>
              <p>
                Comprehensive training programs led by certified trainers,
                focusing on positive reinforcement methods.
              </p>
            </div>
            <div className="service-card">
              <h3>Pet Sitting</h3>
              <p>
                Reliable pet sitting services in a safe and loving environment
                when you're away from home.
              </p>
            </div>
          </div>
        </div>

        <div className="image-section">
          <img
            src="https://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2013/01/28/Photos/STRAYDOG--621x414.jpg"
            alt="Happy pets at Pet Spot"
            className="about-image"
          />
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <p>
            Our dedicated team consists of certified veterinarians, experienced
            groomers, and passionate animal behaviorists. With over 20 years of
            combined experience, we understand the unique needs of different
            pets and provide personalized care that ensures their happiness and
            health.
          </p>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Compassion</h3>
              <p>We treat every pet with the love and care they deserve.</p>
            </div>
            <div className="value-item">
              <h3>Excellence</h3>
              <p>We maintain the highest standards in all our services.</p>
            </div>
            <div className="value-item">
              <h3>Trust</h3>
              <p>Building lasting relationships with pets and their owners.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
