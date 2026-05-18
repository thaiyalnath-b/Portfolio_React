// sections/Skills/Skills.jsx
import React, { useRef } from 'react';
import './Skills.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const SKILL_CARDS = [
  {
    num: '01',
    icon: '⚛️',
    title: 'Frontend',
    tags: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Bootstrap'],
  },
  {
    num: '02',
    icon: '🐍',
    title: 'Backend',
    tags: ['Python', 'Django', 'REST Framework', 'Node.js', 'Express.js'],
  },
  {
    num: '03',
    icon: '🗄️',
    title: 'Databases',
    tags: ['MySQL', 'MongoDB', 'SQLite3', 'Django ORM', 'Firebase'],
  },
  {
    num: '04',
    icon: '🛠️',
    title: 'Dev Workflow',
    tags: ['Git', 'GitHub', 'VS Code', 'Agile / Scrum', 'Debugging'],
  },
  {
    num: '05',
    icon: '☁️',
    title: 'Cloud & Deploy',
    tags: ['Vercel', 'PythonAnywhere', 'Cloudinary', 'Environment Config', 'Static Management'],
  },
  {
    icon: '💡',
    title: 'What I Deliver',
    isHighlight: true,
    deliverables: [
      'End-to-End Web Applications',
      'Secure API Integrations',
      'Database-Driven Logic',
      'Mobile-First Interfaces',
      'Production-Ready Systems',
    ],
  },
];

function Skills() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="skills" className="skills-section" ref={ref} aria-label="Technical skills">
      <div className="skills-container">

        <div className="skills-header reveal">
          <div className="badge">Technical Stack</div>
          <h2 className="skills-title">
            Full Stack <span className="cyan-glow-text">Expertise</span>
          </h2>
          <p className="skills-subtitle">
            Bridging robust backend architecture with interactive frontend experiences —
            from database schema to pixel-perfect UI.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_CARDS.map((card, i) => (
            <div
              className={`skill-card reveal reveal-delay-${(i % 3) + 1}${card.isHighlight ? ' skill-card--highlight' : ''}`}
              key={card.title}
              aria-label={`Skill category: ${card.title}`}
            >
              <div className="skill-card__header">
                {card.num
                  ? <span className="skill-card__num">{card.num}</span>
                  : <span />
                }
                <span className="skill-card__icon" aria-hidden="true">{card.icon}</span>
              </div>

              <h3 className="skill-card__title">{card.title}</h3>

              {card.tags && (
                <div className="skill-tags" role="list">
                  {card.tags.map((tag) => (
                    <span className="skill-tag" key={tag} role="listitem">{tag}</span>
                  ))}
                </div>
              )}

              {card.deliverables && (
                <ul className="skill-deliverables" aria-label="Deliverables">
                  {card.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;