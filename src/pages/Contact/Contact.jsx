/* Contact.jsx
Delannie Joseline Teodoro Bocanegra
StudentNumber : 301486294
Date : 29/01/2025 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirigir
import './Contact.css';
import ubiLogo from '../../assets/images/ubiLogo.png'
import emailLogo from '../../assets/images/logoEmail.png'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const navigate = useNavigate(); // Hook para redirigir al home

  // Maneja el cambio de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica si todos los campos están completos
    if (formData.name && formData.email && formData.message) {
      // Guarda los datos en el localStorage
      localStorage.setItem('contactData', JSON.stringify(formData));

      // Redirige al home
      navigate('/'); // Asumiendo que el Home está en la ruta "/"
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <header className="contact-header">
          <h1>Contact Me</h1>
          <p>I'd love to hear from you! Feel free to reach out through any of the methods below.</p>
        </header>

        <section className="contact-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>

          <div className="contact-details">
            <h2>Other Ways to Connect</h2>
            <div className="contact-item">
              <img src={emailLogo} alt="Email Icon" className="contact-icon" />
              <a href="mailto:dela.teodoro@outlook.com" className="contact-link">dela.teodoro@outlook.com</a>
            </div>
            <div className="contact-item">
              <img src={ubiLogo} alt="Address Icon" className="contact-icon" />
              <p className="contact-link">Toronto, Ontario</p>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
