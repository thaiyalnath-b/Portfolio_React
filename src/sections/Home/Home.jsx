import React, {useState} from 'react';
import profileImg from '../../assets/pro.png';
import './Home.css';


function Home() {

  const [showToast, setShowToast] = useState(false);

  const downloadCV = () => {
    setShowToast(true);

    const link = document.createElement('a');
    link.href = '/resume/resume.pdf';
    link.download = 'Thaiyalnath_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

  };

  return (
    <section id='home' className='home-section'>

      {showToast && (
        <div className='toast-notification'>
          <div className='toast-icon'>✓</div>
            <span>Downloaded...</span>
        </div>
      )}

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
          <img src={profileImg} alt="Profile" className='profile-image' />
        </div>
      </div>
    </section>
  );
}

export default Home;