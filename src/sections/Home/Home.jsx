// sections/Home/Home.jsx
import React, { useState, useCallback } from 'react';
import './Home.css';
import { useTypewriter } from '../../hooks/useTypewriter';
import profileImg from '../../assets/pro.png';

const TYPED_ROLES = [
  'Full Stack Developer',
  'Backend Developer',
  'React Developer',
  'API Architect',
  'Problem Solver',
];

const STATS = [
  { value: '1+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '2',   label: 'Internships' },
];

function Home() {
  const [showToast, setShowToast] = useState(false);
  const typedText = useTypewriter(TYPED_ROLES, 75, 35, 2000);

  const handleDownloadCV = useCallback(() => {
    setShowToast(true);
    const link = document.createElement('a');
    link.href     = '/resume/resume.pdf';
    link.download = 'Thaiyalnath_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setShowToast(false), 3000);
  }, []);

  return (
    <section id="home" aria-label="Introduction">
      {/* Ambient background */}
      <div className="home-bg" aria-hidden="true">
        <div className="home-bg__grid" />
        <div className="home-bg__orb home-bg__orb--1" />
        <div className="home-bg__orb home-bg__orb--2" />
      </div>

      {/* Download toast */}
      {showToast && (
        <div className="home-toast" role="status" aria-live="polite">
          <div className="home-toast__icon">✓</div>
          <span className="home-toast__text">Resume downloading…</span>
        </div>
      )}

      <div className="home-container">
        {/* ── LEFT: TEXT ── */}
        <div className="home-text">
          <div className="home-greeting" aria-hidden="true">
            <span className="home-greeting__dot" />
            Hello!
          </div>

          <h1 className="home-headline">
            <span className="home-headline__sub">I'm </span>
            <br />
            Thaiyalnath
          </h1>

          <p className="home-role" aria-label={`Role: ${typedText}`}>
            <span className="home-role__typed">{typedText}</span>
            <span className="home-role__cursor" aria-hidden="true" />
          </p>

          <p className="home-body">
            Building the digital bridge between{' '}
            <strong>robust backend</strong> architecture and{' '}
            <strong>elegant frontend</strong> design — crafting high-performance
            applications that scale and delight.
          </p>

          {/* Stats */}
          <div className="home-stats" aria-label="Key stats">
            {STATS.map(({ value, label }) => {
              const number = value.replace('+', '');
              const hasPlus = value.includes('+');
              return (
                <div className="home-stat" key={label}>
                  <div className="home-stat__value">
                    {number}
                    {hasPlus && <span>+</span>}
                  </div>
                  <div className="home-stat__label">{label}</div>
                </div>
              );
            })}
          </div>

          <div className="home-actions">
            <a
              className="btn-primary"
              href="mailto:thaiyalnath2005@gmail.com"
              aria-label="Email Thaiyalnath to hire"
            >
              Hire Me
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <button
              className="btn-secondary"
              onClick={handleDownloadCV}
              aria-label="Download resume PDF"
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 2v7M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── RIGHT: IMAGE ── */}
        <div className="home-visual" aria-hidden="true">
          <div className="home-blob" />
          <div className="home-image-frame">
            <img
              src={profileImg}
              alt="Thaiyalnath — Full Stack Developer"
              loading="eager"
              decoding="async"
            />
            <div className="home-image-frame__glass" />
          </div>

          {/* Floating badge */}
          <div className="home-image-badge">
            <span className="home-image-badge__icon">🚀</span>
            <div>
              <div className="home-image-badge__label">Status</div>
              <div className="home-image-badge__value">Open to Work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;