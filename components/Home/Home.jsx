/* Home.jsx
Delannie Joseline Teodoro Bocanegra
StudentNumber : 301486294
Date : 29/01/2025 */
import React from 'react';
import './Home.css';
import profilePic from '../../src/assets/images/History.png';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="home-container">
            <div className="intro">
                <p className="greeting">Hello!</p>
                <h1>
                    I'm <span className="highlight">[Delannie Teodoro]</span>, <br /> Software Developer
                </h1>
                <p className="description">I create exceptional web and mobile designs that make your product shine!</p>
                <div className="actions">
                <Link to="/about" className="btn portfolio">Start About ↗</Link>                </div>
            </div>
            <div className="profile">
                <img className="profile-pic" src={profilePic} alt="Profile" />
                
            </div>
        </div>
    );
}
