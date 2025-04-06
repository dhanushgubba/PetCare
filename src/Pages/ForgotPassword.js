import React, { useEffect } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  useEffect(() => {
    document.title = 'Forgot Password | Pet Care';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      const response = await fetch('http://localhost:5000/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send reset password link');
      }

      const data = await response.json();
      alert(data.message || 'Reset link sent!');
    } catch (error) {
      alert(error.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <button type="submit" className="password-btn">
          Reset Password
        </button>
      </form>
      <p className="login-link">
        Remembered your password? <a href="/login">Login Here</a>
      </p>
    </div>
  );
};

export default ForgotPassword;
