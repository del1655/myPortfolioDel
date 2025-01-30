/* Services.jsx
Delannie Joseline Teodoro Bocanegra
Student Number: 301486294
Date: 29/01/2025 */

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
            <h1 className="text-4xl font-semibold text-gray-900">My Professional Services</h1>
          </header>

          <div className="service-item mt-8">
            <div className="service-image-container">
              <img src={webDevImage} alt="Web Development" className="service-image" />
            </div>
            <div className="service-info">
              <h3 className="text-2xl font-medium text-gray-800">Web Development</h3>
              <p className="text-gray-600">
                Crafting modern, responsive, and user-friendly websites utilizing cutting-edge technologies such as React, Angular, Laravel, and Vue.js.
              </p>
            </div>
          </div>

          <div className="service-item mt-8">
            <div className="service-image-container">
              <img src={mobileDevImage} alt="Mobile Development" className="service-image" />
            </div>
            <div className="service-info">
              <h3 className="text-2xl font-medium text-gray-800">Mobile App Development</h3>
              <p className="text-gray-600">
                Developing high-performance mobile applications for both Android and iOS platforms, tailored to provide seamless user experiences.
              </p>
            </div>
          </div>

          <div className="service-item mt-8">
            <div className="service-image-container">
              <img src={uiDevImage} alt="UI/UX Design" className="service-image" />
            </div>
            <div className="service-info">
              <h3 className="text-2xl font-medium text-gray-800">UI/UX Design</h3>
              <p className="text-gray-600">
                Designing visually appealing and intuitive user interfaces (UI) that prioritize both aesthetics and functionality.
              </p>
            </div>
          </div>

          <div className="service-item mt-8">
            <div className="service-image-container">
              <img src={landingDev} alt="Landing Page Development" className="service-image" />
            </div>
            <div className="service-info">
              <h3 className="text-2xl font-medium text-gray-800">Landing Page Design & Development</h3>
              <p className="text-gray-600">
                Creating conversion-optimized landing pages using design tools like Figma and Adobe XD, focused on delivering impactful user experiences.
              </p>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
