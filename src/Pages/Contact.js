import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <h1>Contact Us</h1>
        <div className="input-groups">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="input-groups">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="input-groups">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
