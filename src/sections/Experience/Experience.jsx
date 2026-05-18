// sections/Experience/Experience.jsx
import React, { useRef } from 'react';
import './Experience.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const EXPERIENCES = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Draptor Technologies',
    period: 'Mar 2026 – Present · Bengaluru',
    achievements: [
      <>Spearheaded development of a production-ready <b>MERN Stack</b> web application for commercial real estate listings, delivering 10+ core features including full CRUD operations to live end-users.</>,
      <>Engineered secure <b>RESTful APIs</b> with <b>JWT authentication</b> and role-based access control (RBAC); integrated <b>Cloudinary</b> for cloud image management and <b>Firebase</b> for real-time data sync and push notifications.</>,
      <>Configured server-side pagination, advanced search & filtering, and SEO-friendly slug URLs; designed an admin dashboard with 5+ management modules using reusable React components, Context API, and Axios.</>,
      <>Coordinated cross-platform optimization and maintained Git/GitHub workflows in an Agile environment, contributing to consistent, on-schedule feature delivery.</>,
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Firebase', 'Cloudinary', 'Context API', 'Axios', 'Git'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Bambhari',
    period: 'Dec 2025 – Mar 2026 · Remote',
    achievements: [
      <>Built 3+ responsive, mobile-first web interfaces for <b>Ayurveda Ayatanam</b> using React.js, HTML5, CSS3, JavaScript (ES6+), and Bootstrap; ensured cross-browser and cross-device compatibility.</>,
      <>Developed and launched <b>BRI Plagiarism</b>, a full-stack Python/Django application featuring JWT authentication, PDF upload & parsing, an interactive user dashboard, and ML-based similarity detection — reducing manual document review time by over <b>60%</b>.</>,
      <>Leveraged <b>Django MVT architecture</b> with SQLite3 and database management best practices to build scalable back-end systems; upheld code quality through Git/GitHub code reviews and modular, reusable component design.</>,
      <>Collaborated within Scrum methodology across sprint cycles, contributing to iterative delivery and cross-functional team coordination.</>,
    ],
    stack: ['Python', 'Django', 'React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'SQLite3', 'JWT', 'Git'],
  },
];

function Experience() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="experience" className="experience-section" ref={ref} aria-label="Work experience">
      <div className="experience-container">

        <div className="experience-header reveal">
          <div className="badge">Career</div>
          <h2 className="experience-title">Work Experience</h2>
        </div>

        <div className="experience-timeline" role="list">
          {EXPERIENCES.map((exp, i) => (
            <article
              className={`experience-card reveal reveal-delay-${i + 1}`}
              key={exp.company}
              role="listitem"
            >
              <div className="experience-inner">
                <div className="exp-top">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>

                <div className="exp-company">{exp.company}</div>

                <ul className="exp-list" aria-label={`Achievements at ${exp.company}`}>
                  {exp.achievements.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>

                <div className="exp-stack" aria-label="Technologies used">
                  {exp.stack.map((tech) => (
                    <span className="exp-tag" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;