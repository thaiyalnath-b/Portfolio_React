import { useState } from "react";
import './styles/styles.css'

import Navbar from './components/Navbar/Navbar';
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from './components/Footer/Footer';
import IntroLoader from "./components/Intro/IntroLoader";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [loading, setLoading] = useState(true); // 👈 control intro

  return (
    <div className="app">
      {loading ? (
        <IntroLoader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <Analytics />
        </>
      )}
    </div>
  );
}

export default App;