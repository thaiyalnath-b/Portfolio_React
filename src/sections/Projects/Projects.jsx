import React from "react";
import "./Projects.css";

import ecom from '../../assets/ecomm.png';
import ins from '../../assets/ita.png';
import fnc from '../../assets/fnc.png';
import whether from '../../assets/whr.png';
import port from '../../assets/plo.png';

const projects = [
  {
    image: ecom,
    title: "Django E-commerce Platform",
    desc: "Architected a full-stack marketplace featuring secure user authentication, dynamic product catalog, and a robust persistent cart system.",
    github: "https://github.com/thaiyalnath-b/react_e-commerce_thaiyalnath",
    tech: ["Django", "Python", "ORM", "SQLite", "Logic"],
    featured: true
  },
  {
    image: ins,
    title: "Instagram Clone",
    desc: "Developed a high-fidelity social interface with dynamic feed rendering, interactive story components, and mobile-first responsive architecture.",
    demo: "https://instagram-tv75.vercel.app/",
    github: "https://github.com/thaiyalnath-b/Instagram",
    tech: ["React.js", "Hooks", "Vercel", "CSS3"]
  },
  {
    image: fnc,
    title: "Personal Finance Systems",
    desc: "Engineered a data-driven dashboard for financial monitoring, utilizing local storage for data persistence and custom visualization logic.",
    demo: "https://thaiyalnath-b.github.io/personal-Finance/",
    github: "https://github.com/thaiyalnath-b/personal-Finance",
    tech: ["JavaScript", "Local Storage", "Data Viz"]
  },
  {
    image: whether,
    title: "Global Weather Dashboard",
    desc: "Built a real-time environmental monitor that processes asynchronous API data to deliver precise weather metrics via a sleek, glassmorphic UI.",
    demo: "https://thaiyalnath-b.github.io/Weather-Dashboard/",
    github: "https://github.com/thaiyalnath-b/Weather-Dashboard",
    tech: ["OpenWeather API", "JSON", "Async/Await"]
  },
  {
    image: port,
    title: "Modern Portfolio Engine",
    desc: "Designed and deployed a high-performance portfolio using component-based architecture and optimized for sub-second load times.",
    demo: "https://portfolio-react-kappa-eight.vercel.app/",
    github: "https://github.com/thaiyalnath-b/Portfolio_React",
    tech: ["React", "UI/UX", "Deployment"]
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-label">Selected Works</span>
          <h2 className="section-title">My <span className="cyan-text">Projects</span></h2>
          <div className="title-bar"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <div className="overlay-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="icon-btn">Source</a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="icon-btn demo-btn">Live View</a>
                    )}
                  </div>
                </div>
                {project.featured && <span className="featured-pill">Featured Work</span>}
              </div>

              <div className="project-content">
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;