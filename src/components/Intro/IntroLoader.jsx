// components/IntroLoader/IntroLoader.jsx
import React, { useEffect, useState, useCallback } from 'react';
import './IntroLoader.css';

function IntroLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  const handleFinish = useCallback(() => {
    setExiting(true);
    setTimeout(onFinish, 600); // matches CSS exit animation
  }, [onFinish]);

  useEffect(() => {
    // Simulate a realistic non-linear loading progress
    const increments = [
      { target: 30, speed: 20 },
      { target: 60, speed: 30 },
      { target: 85, speed: 45 },
      { target: 100, speed: 25 },
    ];

    let current = 0;
    let phaseIdx = 0;

    const tick = () => {
      const phase = increments[phaseIdx];
      if (!phase) return;

      current += 1;
      setProgress(current);

      if (current >= phase.target) {
        phaseIdx++;
        if (phaseIdx >= increments.length) {
          setTimeout(handleFinish, 300);
          return;
        }
      }
      setTimeout(tick, phase.speed + Math.random() * 10);
    };

    const timer = setTimeout(tick, 300); // slight initial delay for elegance
    return () => clearTimeout(timer);
  }, [handleFinish]);

  return (
    <div className={`intro-loader${exiting ? ' exiting' : ''}`} role="status" aria-label="Loading portfolio">
      {/* Ambient orbs */}
      <div className="intro-orb intro-orb--1" aria-hidden="true" />
      <div className="intro-orb intro-orb--2" aria-hidden="true" />

      <div className="intro-content">
        {/* Logo mark */}
        <div className="intro-logo-mark" aria-hidden="true">
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 22L14 6L24 22" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 16H20" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>

        <h1 className="intro-name">
          Thaiyalnath<span>.</span>
        </h1>
        <p className="intro-tagline">Full Stack Engineer</p>

        <div className="intro-progress-track" aria-hidden="true">
          <div className="intro-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="intro-percent">{String(progress).padStart(3, '0')}%</span>
      </div>
    </div>
  );
}

export default IntroLoader;