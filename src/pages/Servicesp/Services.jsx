import React from 'react';
import './Services.css';
import webDevImage from '../../assets/images/webDevImage.png';
import mobileDevImage from '../../assets/images/mobileDevImage.jpg';
import uiDevImage from '../../assets/images/uiuxDev.png';
import landingDev from '../../assets/images/landingDev.png';


export default function Services() {
  return (
    <div className="services-container">
      <div className="services-content">
        <section className="services-section">
          <header className="services-header">
            <h1>My Services</h1>
          </header>

          <h2>What I Offer</h2>
          <p>I specialize in various areas of software development to bring your ideas to life.</p>

          <div className="service-item">
            <img src={webDevImage} alt="Web Development" className="service-image" />
            <div className="service-info">
              <h3>Web Development</h3>
              <p>Creating modern, responsive, and user-friendly websites using the latest technologies. Like React, Angular , Laravel or Vue.js</p>
            </div>
          </div>

          <div className="service-item">
            <img src={mobileDevImage} alt="Mobile Development" className="service-image" />
            <div className="service-info">
              <h3>Mobile App Development</h3>
              <p>Developing high-quality mobile applications for both Android and iOS platforms.</p>
            </div>
          </div>

          <div className="service-item">
            <img src={uiDevImage} alt="Software Development" className="service-image" />
            <div className="service-info">
              <h3>Frontend Design</h3>
              <p>Design of attractive and functional user interfaces (UI).</p>            </div>
          </div>

          <div className="service-item">
            <img src={landingDev} alt="Software Development" className="service-image" />
            <div className="service-info">
              <h3>
              Landing Page Design and Development</h3>
              <p>
              Creation of landing pages optimized for conversions.And knowing tools as Figma,Adobe XD</p>            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
}
