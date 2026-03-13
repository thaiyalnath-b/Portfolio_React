import React from "react";
import "./experience.css";

const Experience = () => {
    return (
        <section className="experience-section" id="Experience">
            <div className="experience-container">

                <h2 className="experience-title">Experience</h2>

                <div className="experience-card">

                    <div className="experience-header">
                        <h3>Full Stack Developer Intern — Bambhari</h3>
                        <span>Dec 2025 – Mar 2026 · 3 Months</span>
                    </div>

                    <p className="experience-desc">
                        Worked as a Full Stack Developer Intern at Bambhari, contributing
                        to the development of web applications and research-oriented
                        projects using modern web technologies. During the internship,
                        I gained hands-on experience in both frontend and backend
                        development while collaborating with the development team on
                        real-world applications.
                    </p>

                    <h4>Key Responsibilities & Contributions</h4>

                    <ul className="experience-list">
                        <li>
                            Developed a complete frontend website, <b>“Ayurveda Ayatanam”</b>,
                            focusing on responsive design and structured layouts.
                        </li>

                        <li>
                            Contributed to an <b>R&D project – Plagiarism Detection Web
                                Application</b> built using Django full-stack architecture.
                        </li>

                        <li>
                            Implemented frontend interfaces and backend functionalities,
                            including routing and system integration.
                        </li>

                        <li>
                            Developed content submission workflows and backend logic
                            for plagiarism analysis features.
                        </li>

                        <li>
                            Collaborated with developers while AI/ML components were
                            integrated by the research team.
                        </li>

                        <li>
                            Gained practical experience in Django backend development,
                            debugging, and real-world development workflows.
                        </li>
                    </ul>

                    <div className="tech-stack">
                        <span>Python</span>
                        <span>Django</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript</span>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Experience;