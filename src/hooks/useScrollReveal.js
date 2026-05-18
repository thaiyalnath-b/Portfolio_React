// hooks/useScrollReveal.js
// Attaches IntersectionObserver to add 'in-view' class to .reveal elements

import { useEffect } from 'react';

/**
 * useScrollReveal
 * Observes all .reveal elements inside a container ref and toggles .in-view.
 * @param {React.RefObject} containerRef - ref to the section element
 * @param {object} options - IntersectionObserver options
 */
export function useScrollReveal(containerRef, options = {}) {
  useEffect(() => {
    const defaults = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
    const config = { ...defaults, ...options };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // fire once
        }
      });
    }, config);

    const container = containerRef?.current || document;
    const elements = container.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef]);
}

/**
 * usePageReveal
 * Global scroll reveal — observes ALL .reveal elements on the page.
 */
export function usePageReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}