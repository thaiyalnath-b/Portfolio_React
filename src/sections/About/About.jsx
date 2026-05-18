// sections/About/About.jsx
import React, { useRef } from 'react';
import './About.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import aboutImg from '../../assets/aboutpage.webp';

const CAPABILITIES = [
  'Backend Architecture',
  'API Design & Optimization',
  'Responsive UI Systems',
  'Database Engineering',
  'Authentication & Security',
  'Cloud Deployment',
];

function About() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="about" className="about-section" ref={ref} aria-label="About me">
      <div className="about-inner">

        {/* ── IMAGE ── */}
        <div className="about-image-wrap reveal">
          <div className="about-corner about-corner--tl" aria-hidden="true" />
          <div className="about-corner about-corner--br" aria-hidden="true" />

          <div className="about-image-frame">
            <img
              src={aboutImg}
              alt="Thaiyalnath — Software Engineer"
              loading="lazy"
              decoding="async"
            />
            <div className="about-image-frame__overlay" aria-hidden="true" />
          </div>

          {/* <div className="about-stat-card" aria-label="Experience stat">
            <div className="about-stat-card__num">5+</div>
            <div className="about-stat-card__label">Months of Experience</div>
          </div> */}
        </div>

        {/* ── CONTENT ── */}
        <div className="about-content">
          <div className="about-tag reveal reveal-delay-1">
            <span className="about-tag__line" aria-hidden="true" />
            <span className="about-tag__text">About Me</span>
          </div>

          <h2 className="about-headline reveal reveal-delay-2">
            Architecting Digital{' '}
            <span className="cyan-glow-text">Solutions</span>
          </h2>

          <div className="about-body reveal reveal-delay-3">
            <p>
              I'm a <strong>Python Full Stack Developer</strong> dedicated to building
              high-performance web applications that scale. My expertise lies in creating
              seamless connections between powerful backend logic and intuitive user
              interfaces.
            </p>
            <p>
              I specialize in developing scalable systems using the{' '}
              <strong>Python ecosystem</strong> and <strong>React</strong> — ensuring
              every line of code contributes to a reliable, efficient, and maintainable
              final product.
            </p>
          </div>

          <div
            className="about-pills reveal reveal-delay-4"
            role="list"
            aria-label="Core capabilities"
          >
            {CAPABILITIES.map((cap) => (
              <span className="about-pill" key={cap} role="listitem">
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;