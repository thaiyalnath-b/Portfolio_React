import React, { useEffect, useState } from "react";
import "./IntroLoader.css";

const IntroLoader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="intro-loader">
      <h1 className="intro-name">Thaiyalnath</h1>
      <p className="intro-text">Launching Portfolio...</p>

      <div className="intro-bar">
        <div
          className="intro-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <span className="intro-percent">{progress}%</span>
    </div>
  );
};

export default IntroLoader;