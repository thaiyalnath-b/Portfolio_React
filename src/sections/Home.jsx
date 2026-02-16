import React from 'react';

function Home() {
  const downloadCV = () => {
    window.open('src/assets/resume/resume.pdf', '_blank');
  };

  return (
    <section id='home' className='home-section'>
      <div className='container home-container'>
        <div className='home-content'>
          <div className='reveal-box'>
            <h3 className='greet'>Hello!</h3>
          </div>

          <h1 className='name'>
            <span className='i-am'>I am</span> Thaiyalnath
            <span className='cursor-blink'>_</span>
          </h1>

          <div className='role-container'>
             <h2 className='role'>
              Python Full Stack <span className='highlight'>Developer</span>
            </h2>
          </div>

          <p className='text'>
            Building the digital bridge between <b>robust backend</b> logic and <b>elegant frontend</b> design. I craft high-performance applications with a focus on user experience.
          </p>

          <div className='home-actions'>
              <button 
                className="btn-hire" 
                onClick={() => window.location.href='mailto:thaiyalanth2005@gmail.com'}
              >
                Hire Me
              </button>
              <button className="btn-cv" onClick={downloadCV}>
                Download CV
              </button>
          </div>
        </div>

        <div className='home-image-wrapper'>
          <div className='blob-shape'></div>
          <div className='image-glow-backdrop'></div>
          <img src="src/assets/pro.png" alt="Profile" className='profile-image' />
        </div>
      </div>
    </section>
  );
}

export default Home;