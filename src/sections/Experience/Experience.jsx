import React from "react";
import "./Experience.css";

const Experience = () => {
    return (
        <section className="experience-section" id="Experience">
            <div className="experience-container">

                <h2 className="experience-title">Experience</h2>

                {/* Role 1: Draptor Technologies */}
                <div className="experience-card">

                    <div className="experience-header">
                        <h3>Full Stack Developer Intern — Draptor Technologies</h3>
                        <span>Mar 2026 – Present · Bengaluru, India</span>
                    </div>

                    <ul className="experience-list">
                        <li>
                            Spearheaded development of a production-ready <b>MERN Stack</b> web
                            application for commercial real estate listings, delivering 10+ core
                            features including full CRUD operations to live end-users.
                        </li>
                        <li>
                            Engineered secure <b>RESTful APIs</b> with <b>JWT authentication</b> and
                            role-based access control (RBAC); integrated <b>Cloudinary</b> for
                            cloud image management and <b>Firebase</b> for real-time data sync and
                            push notifications.
                        </li>
                        <li>
                            Configured server-side pagination, advanced search &amp; filtering,
                            and SEO-friendly slug URLs; designed an admin dashboard with 5+
                            management modules using reusable React components, Context API,
                            and Axios.
                        </li>
                        <li>
                            Coordinated cross-platform optimization and maintained Git/GitHub
                            workflows in an Agile environment, contributing to consistent,
                            on-schedule feature delivery.
                        </li>
                    </ul>

                    <div className="tech-stack">
                        <span>MongoDB</span>
                        <span>Express.js</span>
                        <span>React.js</span>
                        <span>Node.js</span>
                        <span>JWT</span>
                        <span>Firebase</span>
                        <span>Cloudinary</span>
                        <span>Context API</span>
                        <span>Axios</span>
                        <span>Git</span>
                    </div>

                </div>

                {/* Role 2: Bambhari */}
                <div className="experience-card">

                    <div className="experience-header">
                        <h3>Full Stack Developer Intern — Bambhari</h3>
                        <span>Dec 2025 – Mar 2026 · Remote</span>
                    </div>

                    <ul className="experience-list">
                        <li>
                            Built 3+ responsive, mobile-first web interfaces for{" "}
                            <b>Ayurveda Ayatanam</b> using React.js, HTML5, CSS3, JavaScript
                            (ES6+), and Bootstrap; ensured cross-browser and cross-device
                            compatibility.
                        </li>
                        <li>
                            Developed and launched <b>BRI Plagiarism</b>, a full-stack
                            Python/Django application featuring JWT authentication, PDF upload
                            &amp; parsing, an interactive user dashboard, and ML-based similarity
                            detection — reducing manual document review time by over <b>60%</b>.
                        </li>
                        <li>
                            Leveraged <b>Django MVT architecture</b> with SQLite3 and database
                            management best practices to build scalable back-end systems;
                            upheld code quality through Git/GitHub code reviews and modular,
                            reusable component design.
                        </li>
                        <li>
                            Collaborated within Scrum methodology across sprint cycles,
                            contributing to iterative delivery and cross-functional team
                            coordination.
                        </li>
                    </ul>

                    <div className="tech-stack">
                        <span>Python</span>
                        <span>Django</span>
                        <span>React.js</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript (ES6+)</span>
                        <span>Bootstrap</span>
                        <span>SQLite3</span>
                        <span>JWT</span>
                        <span>Git</span>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Experience;