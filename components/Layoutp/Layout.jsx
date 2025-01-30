/* Layout.jsx
Delannie Joseline Teodoro Bocanegra
StudentNumber : 301486294
Date : 29/01/2025 */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../src/assets/images/portfolioLogo.png';
import './Layout.css';

export default function Layout() {
    return (
        <div className="layout">
            <header className="navbar">
                <nav className="nav-container">
                    <Link to="/" className="logo-container">
                        <img className="logo" src={logo} alt="Portfolio Logo" />
                    </Link>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}
