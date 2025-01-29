import React from 'react';
import './Education.css';
import pdfdelannie from '../../../public/CurrículumDelannieV.pdf';
import educationImage from '../../assets/images/education.jpg';

export default function Education() {
  return (
    <div className="education-container">
      <div className="education-content">
        <section className="education-section">
          <header className="education-header">
            <h1>Education & Qualifications</h1>
          </header>

          <h2>University Education</h2>
          <p>
            <strong>Multiplatform Software Development Technician</strong><br />
            Technological University of Cancun - Graduated: 2024
          </p>
          <p>
            <strong>Engineering Software Development</strong><br />
            Technological University of Cancun - Now
          </p>

          <h2>Certifications</h2>
          <ul>
            <li>Certified React Developer - 2024</li>
            <li>Advanced TypeScript Certification - 2023</li>
          </ul>

          <h2>Resume</h2>
          <p>
            Download my detailed resume to learn more about my qualifications and professional experience:
          </p>
          <a href={pdfdelannie} className="resume-link" download>
            Download Resume (PDF)
          </a>
        </section>

        <div className="education-image">
          <img src={educationImage} alt="Education" />
        </div>
      </div>

    
    </div>
  );
}
