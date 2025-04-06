import React, { useEffect } from 'react';
import './Register.css';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const termsChecked = document.getElementById('terms').checked;
    if (!termsChecked) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: e.target.username.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          address: e.target.address.value,
          password: e.target.password.value,
          confirmpassword: e.target['confirm-password'].value,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        e.target.reset();
      } else {
        alert('Registration failed: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      alert('Error during registration: ' + error.message);
    }
  };

  useEffect(() => {
    document.title = 'Register | Pet Care';
  }, []);

  return (
    <div className="register-container">
      <h1>Register Here</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Username" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" placeholder="Phone" required />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" placeholder="Address" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="terms-conditions">
          <input type="checkbox" id="terms" />
          <p>
            By registering, you agree to our{' '}
            <a href="/terms">Terms of Service</a> and{' '}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
        <button type="submit">Register</button>
        <p className="login-link">
          Already have an account? <a href="/login">Login Here</a>
        </p>
      </form>

      <div className="social-login">
        <p>Or register with:</p>
        <button className="btn-social btn-google">
          <FaGoogle /> Google
        </button>
        <button className="btn-social btn-facebook">
          <FaFacebookF /> Facebook
        </button>
        <button className="btn-social btn-twitter">
          <FaTwitter /> Twitter
        </button>
      </div>
    </div>
  );
};

export default Register;
