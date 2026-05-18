// components/Navbar/Navbar.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const MOBILE_BREAKPOINT = 880;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const mobileMenuRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const hamburgerButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  /* ── Scroll: navbar shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((i) => i.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25, rootMargin: '-80px 0px -30% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Body scroll lock when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── Auto-focus first link when menu opens ── */
  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        (firstMobileLinkRef.current || closeButtonRef.current)?.focus();
      }, 50);
    }
  }, [menuOpen]);

  /* ── Close on ESC ── */
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
        hamburgerButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  /* ── Close on resize above breakpoint ── */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) closeMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();

    closeMenu();

    const target = document.querySelector(href);

    if (target) {

      const navbarHeight = 60;

      const targetPosition =
        target.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

    }

  }, [closeMenu]);

  return (
    <>
      <header
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        role="banner"
        aria-label="Site navigation"
      >
        {/* Logo */}
        <a
          className="nav-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Go to homepage"
        >
          Thaiyalnath<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Primary navigation">
          <ul className="nav-links" role="list">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a
                  className={`nav-link${activeSection === href.replace('#', '') ? ' nav-link--active' : ''}`}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  aria-current={activeSection === href.replace('#', '') ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a
          className="nav-cta nav-desktop"
          href="mailto:thaiyalnath2005@gmail.com"
          aria-label="Email Thaiyalnath to hire"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          ref={hamburgerButtonRef}
          className={`nav-hamburger${menuOpen ? ' is-open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="hamburger-line" aria-hidden="true" />
          <span className="hamburger-line" aria-hidden="true" />
          <span className="hamburger-line" aria-hidden="true" />
        </button>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`nav-mobile-overlay${menuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        onClick={(e) => { if (e.target === e.currentTarget) closeMenu(); }}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          className="nav-mobile-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <span aria-hidden="true">×</span>
        </button>

        <nav aria-label="Mobile navigation">
          {NAV_ITEMS.map(({ label, href }, index) => (
            <a
              key={href}
              ref={index === 0 ? firstMobileLinkRef : null}
              className={`nav-mobile-link${activeSection === href.replace('#', '') ? ' nav-mobile-link--active' : ''}`}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              style={{ transitionDelay: menuOpen ? `${0.05 + index * 0.04}s` : '0s' }}
              aria-current={activeSection === href.replace('#', '') ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-mobile-cta"
            href="mailto:thaiyalnath2005@gmail.com"
            onClick={closeMenu}
            style={{ transitionDelay: menuOpen ? `${0.05 + NAV_ITEMS.length * 0.04}s` : '0s' }}
          >
            Hire Me →
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;