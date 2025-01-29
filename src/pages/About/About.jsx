import React from 'react';
import './About.css';
import aboutImage from '../../assets/images/profilePic.png';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">

        <header className="about-header">
          <h1>About Me</h1>
          <p className='menombre'>Delannie Joseline Teodoro Bocanegra</p>              

          <p>As a passionate technologist, I am driven by the art of creating digital experiences that captivate and inspire.</p>
          <p>From conceptualizing innovative solutions to designing intuitive user interfaces, I thrive in the intersection of functionality and creativity.</p>
        </header>

        <section className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="About Me" />
          </div>
          <div className="about-text">
            <div className="about-item">
              <h2>Who I Am</h2>
              <p>
                My expertise lies in writing high-quality code and crafting user-friendly interfaces that enhance the user experience. Whether it's building responsive websites, optimizing performance, or solving complex technical challenges.
              </p>
            </div>

            <div className="about-item">
              <h2>My Values</h2>
              <ul>
                <li><strong>Innovation:</strong> Constantly exploring new technologies and methodologies to bring forward-thinking solutions.</li>
                <li><strong>Integrity:</strong> I believe in transparent and honest collaboration, valuing trust and open communication in every interaction.</li>
                <li><strong>Excellence:</strong> My goal is to consistently exceed expectations, delivering high-quality results in every project I undertake.</li>
              </ul>
            </div>

            <div className="about-item">
              <h2>My Vision</h2>
              <p>
                My vision is to continuously evolve as a creative professional, contributing to the digital world with innovative, impactful solutions that elevate the user experience and inspire creativity in others.
              </p>
            </div>
          </div>

          
        </section>
      </div>
    </div>
  );
}
