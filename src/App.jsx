import { useState } from "react";

import Navbar from './components/Navbar/Navbar';
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from './components/Footer/Footer';
import IntroLoader from "./components/Intro/IntroLoader";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [loading, setLoading] = useState(true); // 👈 control intro

  return (
    <>
      {loading ? (
        <IntroLoader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <Analytics />
        </>
      )}
    </>
  );
}

export default App;