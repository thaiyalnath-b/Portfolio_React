import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <div className="skills-badge">Technical Stack</div>
          <h2 className="skills-title">Full Stack <span className="cyan-glow">Expertise</span></h2>
          <p className="skills-subtitle">
            Bridging the gap between robust backend architecture and interactive frontend experiences.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="card-header">
              <span className="card-number">01</span>
              <div className="card-icon">⚛️</div>
            </div>
            <h3>Frontend</h3>
            <div className="skill-tags">
              <span>HTML5</span><span>CSS3</span><span>JS ES6+</span><span>React.js</span><span>Bootstrap</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="card-header">
              <span className="card-number">02</span>
              <div className="card-icon">🐍</div>
            </div>
            <h3>Backend</h3>
            <div className="skill-tags">
              <span>Python</span><span>Django</span><span>REST Framework</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="card-header">
              <span className="card-number">03</span>
              <div className="card-icon">🗄️</div>
            </div>
            <h3>Database</h3>
            <div className="skill-tags">
              <span>MySQL</span><span>MongoDB</span><span>SQLite</span><span>Django ORM</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="card-header">
              <span className="card-number">04</span>
              <div className="card-icon">🛠️</div>
            </div>
            <h3>Workflow</h3>
            <div className="skill-tags">
              <span>Git</span><span>GitHub</span><span>VS Code</span><span>Debugging</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="card-header">
              <span className="card-number">05</span>
              <div className="card-icon">🚀</div>
            </div>
            <h3>Cloud</h3>
            <div className="skill-tags">
              <span>PythonAnywhere</span><span>Static Management</span><span>Environment Configuration</span><span>Vercel</span>
            </div>
          </div>

          <div className="skill-card highlight-card">
            <div className="card-header">
              <div className="card-icon">💡</div>
            </div>
            <h3>Deliverables</h3>
            <ul className="capabilities-list">
              <li>End-to-End Apps</li>
              <li>Secure API Integration</li>
              <li>Database Driven Logic</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;