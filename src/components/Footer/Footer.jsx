import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">THAIYALNATH<span className="cyan-dot">.</span></h2>
            <p className="footer-bio">
              Software Engineer specializing in building secure, 
              scalable, and high-performance digital experiences.
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <span className="group-label">Navigation</span>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </div>
            <div className="link-group">
              <span className="group-label">Social</span>
              <a href="https://github.com/thaiyalnath-b" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/thaiyalnathb/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="legal-info">
            <p>&copy; {new Date().getFullYear()} — Engineered with React</p>
          </div>
          
          <div className="system-status">
            <div className="status-indicator">
              <span className="dot"></span>
              <span className="ping"></span>
            </div>
            <span className="status-text">Available for Hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;