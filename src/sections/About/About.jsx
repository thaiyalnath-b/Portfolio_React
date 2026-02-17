import React from 'react';
import './About.css';

import aboutImg from '../../assets/aboutpage.webp';

function About() {
  return (
    <section id='about' className='about-section'>
      <div className='container about-wrapper'>
        <div className='about-inner-grid'>

          <div className='about-visual-side'>
            <div className='image-holder'>
              <img src={aboutImg} alt="Thaiyalnath" className='main-img' />
              <div className='img-glass-overlay'></div>
              <div className='tech-frame'></div>
            </div>
          </div>

          <div className='about-info-side'>
            <div className='top-tag'>
              <span className='tag-dash'></span>
              <span className='tag-text'>About Me</span>
            </div>

            <h2 className='main-title'>
              Architecting Digital <span className='cyan-glow'>Solutions</span>
            </h2>

            <div className='bio-narrative'>
              <p>
                I am a <strong>Python Full Stack Developer</strong> dedicated to building high-performance web applications. My expertise lies in creating seamless connections between powerful backend logic and intuitive user interfaces.
              </p>
              <p>
                I specialize in developing scalable systems using the Python ecosystem, ensuring every line of code contributes to a reliable and efficient final product.
              </p>
            </div>

            <div className='capability-list'>
              <div className='cap-pill'>Backend Architecture</div>
              <div className='cap-pill'>API Optimization</div>
              <div className='cap-pill'>Responsive Design</div>
              <div className='cap-pill'>Database Management</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;