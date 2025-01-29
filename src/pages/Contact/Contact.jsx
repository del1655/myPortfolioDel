import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <header className="contact-header">
          <h1>Contact Me</h1>
          <p>I'd love to hear from you! Feel free to reach out through any of the methods below.</p>
        </header>

        <section className="contact-section">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>

          <div className="contact-details">
            <h2>Other Ways to Connect</h2>
            <p><strong>Email:</strong> dela.teodoro@outlook.com</p>
            <p><strong>Address:</strong> Toronto , Ontario</p>
          </div>
        </section>

        
      </div>
    </div>
  );
}
