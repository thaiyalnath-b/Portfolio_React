// components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/thaiyalnath-b', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thaiyalnathb/', external: true },
  { label: 'Email', href: 'mailto:thaiyalnath2005@gmail.com', external: false },
];

function Footer() {
  const handleFooterNav = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <h2 className="footer-brand__logo">
              Thaiyalnath<span>.</span>
            </h2>
            <p className="footer-brand__bio">
              Full Stack Engineer building secure, scalable, and high-performance
              digital experiences from backend to pixel.
            </p>
          </div>

          {/* Navigation links */}
          <div className="footer-nav-group">
            <span className="footer-links__label">Navigate</span>
            <div className="footer-links__list">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  className="footer-links__item"
                  href={href}
                  onClick={(e) => handleFooterNav(e, href)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="footer-social-group">
            <span className="footer-links__label">Connect</span>
            <div className="footer-links__list">
              {SOCIAL_LINKS.map(({ label, href, external }) => (
                <a
                  key={href}
                  className="footer-links__item"
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {label}
                  {external && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Thaiyalnath B — Engineered with React
          </p>

          <div className="footer-status" role="status" aria-label="Availability status">
            <span className="status-dot" aria-hidden="true">
              <span className="status-dot__ring" />
              <span className="status-dot__core" />
            </span>
            <span className="status-text">Available for Hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;