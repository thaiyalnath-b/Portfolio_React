// sections/Contact/Contact.jsx
import React, { useState, useCallback, useRef } from 'react';
import './Contact.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CONTACT_INFO = [
  { icon: '📧', label: 'Email',    value: 'thaiyalnath2005@gmail.com' },
  { icon: '📍', label: 'Location', value: 'Bengaluru, Karnataka, India' },
  { icon: '📞', label: 'Phone',    value: '+91 9345854158' },
];

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/thaiyalnath-b' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thaiyalnathb/' },
];

const FORMSPREE_URL = 'https://formspree.io/f/mblzzgaa';
const EMPTY_FORM    = { name: '', email: '', message: '' };

function Contact() {
  const ref = useRef(null);
  useScrollReveal(ref);

  const [form,   setForm]   = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus('success');
        setForm(EMPTY_FORM);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }, []);

  return (
    <section id="contact" className="contact-section" ref={ref} aria-label="Contact">
      <div className="contact-wrapper">

        <div className="contact-header reveal">
          <div className="badge">Available for Work</div>
          <h2 className="contact-title">
            Let's Build Something <span className="cyan-glow-text">Great</span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind? Reach out and let's start a conversation.
          </p>
        </div>

        <div className="contact-grid">

          {/* ── INFO CARD ── */}
          <div className="contact-info-card reveal reveal-delay-1" aria-label="Contact information">
            {CONTACT_INFO.map(({ icon, label, value }) => (
              <div className="contact-info-item" key={label}>
                <div className="contact-info-icon" aria-hidden="true">{icon}</div>
                <div>
                  <span className="contact-info-label">{label}</span>
                  <p className="contact-info-value">{value}</p>
                </div>
              </div>
            ))}

            <div className="contact-info-divider" aria-hidden="true" />

            <div className="contact-social">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  className="social-btn"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${label} profile`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── FORM ── */}
          <form
            className="contact-form reveal reveal-delay-2"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
          >
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                aria-label="Your full name"
                disabled={status === 'submitting'}
              />
            </div>

            <div className="form-group">
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                aria-label="Your email address"
                disabled={status === 'submitting'}
              />
            </div>

            <div className="form-group">
              <textarea
                className="form-textarea"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                required
                value={form.message}
                onChange={handleChange}
                aria-label="Your message"
                disabled={status === 'submitting'}
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={status === 'submitting'}
              aria-label="Send message"
            >
              {status === 'submitting' ? (
                <>
                  <span className="form-submit__spinner" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="form-status form-status--success" role="status" aria-live="polite">
                ✓ Message delivered — I'll get back to you soon!
              </p>
            )}
            {status === 'error' && (
              <p className="form-status form-status--error" role="alert" aria-live="assertive">
                ✗ Submission failed. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;