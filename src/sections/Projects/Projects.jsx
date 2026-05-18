// sections/Projects/Projects.jsx
import React, { useRef } from 'react';
import './Projects.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

// Asset imports — keep your existing paths
import ecom from '../../assets/ecomm.png';
import ins from '../../assets/instaoutput.png';
import fnc from '../../assets/whetheroutput.png';
import whether from '../../assets/financeoutput.png';
import port from '../../assets/plo.png';

const PROJECTS = [
  {
    image: ecom,
    name: 'Django E-Commerce Platform',
    desc: 'Architected a full-stack marketplace featuring secure user authentication, dynamic product catalog, and a robust persistent cart system with order management.',
    github: 'https://github.com/thaiyalnath-b/react_e-commerce_thaiyalnath',
    demo: null,
    tech: ['Django', 'Python', 'ORM', 'SQLite', 'Auth'],
    featured: true,
  },
  {
    image: ins,
    name: 'Instagram Clone',
    desc: 'High-fidelity social interface with dynamic feed rendering, interactive story components, and mobile-first responsive architecture.',
    github: 'https://github.com/thaiyalnath-b/Instagram',
    demo: 'https://instagram-tv75.vercel.app/',
    tech: ['React.js', 'Hooks', 'Vercel', 'CSS3'],
  },
  {
    image: fnc,
    name: 'Personal Finance Dashboard',
    desc: 'Data-driven financial monitoring dashboard with local-storage persistence and custom visualization logic for expense tracking.',
    github: 'https://github.com/thaiyalnath-b/personal-Finance',
    demo: 'https://thaiyalnath-b.github.io/personal-Finance/',
    tech: ['JavaScript', 'Local Storage', 'Data Viz'],
  },
  {
    image: whether,
    name: 'Global Weather Dashboard',
    desc: 'Real-time environmental monitor processing asynchronous API data to deliver precise weather metrics via a sleek glassmorphic interface.',
    github: 'https://github.com/thaiyalnath-b/Weather-Dashboard',
    demo: 'https://thaiyalnath-b.github.io/Weather-Dashboard/',
    tech: ['OpenWeather API', 'JSON', 'Async/Await'],
  },
  {
    image: port,
    name: 'Portfolio v1',
    desc: 'Previous-generation portfolio built with React component-based architecture, optimized for sub-second load times and deployed on Vercel.',
    github: 'https://github.com/thaiyalnath-b/Portfolio_React',
    demo: 'https://portfolio-react-kappa-eight.vercel.app/',
    tech: ['React', 'UI/UX', 'Vercel'],
  },
];

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Projects() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="projects" className="projects-section" ref={ref} aria-label="Portfolio projects">
      <div className="projects-container">

        <div className="projects-header reveal">
          <div className="badge">Selected Work</div>
          <h2 className="projects-title">
            My <span className="cyan-glow-text">Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <article
              className={`project-card reveal reveal-delay-${(i % 3) + 1}`}
              key={project.name}
              aria-label={project.name}
            >
              {/* Image */}
              <div className="project-image">
                <img src={project.image} alt={project.name} loading="lazy" />
                <div className="project-image__overlay">
                  <a
                    href={project.github}
                    className="overlay-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source code on GitHub`}
                  >
                    Source <ArrowIcon />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="overlay-btn overlay-btn--primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} live demo`}
                    >
                      Live Demo <ArrowIcon />
                    </a>
                  )}
                </div>
                {project.featured && (
                  <span className="project-featured" aria-label="Featured project">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="project-content">
                <div className="project-tech" aria-label="Technologies">
                  {project.tech.map((t) => (
                    <span className="project-tech-tag" key={t}>{t}</span>
                  ))}
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;