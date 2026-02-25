import { useEffect, useState } from "react";
import "./visitorCounter.css";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const namespace = "thaiyalnath_portfolio_2026";
    const key = "homepage_visits";

    const params = new URLSearchParams(window.location.search);
    if (params.get("admin") === "true") {
      setIsAdmin(true);
    }

    const updateCounter = async () => {
      try {
        const response = await fetch(
          `https://api.countapi.xyz/hit/${namespace}/${key}`
        );
        const data = await response.json();
        setCount(data.value);
      } catch (error) {
        console.error("Counter error:", error);
      }
    };

    updateCounter();
  }, []);

  // Animated number effect
  useEffect(() => {
    if (!isAdmin) return;

    let start = 0;
    const duration = 1200;
    const increment = count / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= count) {
        setDisplayCount(count);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [count, isAdmin]);

  if (!isAdmin) return null;

  return (
    <div className="visitor-wrapper">
      <div className="visitor-card">
        <div className="visitor-icon">👁</div>
        <div className="visitor-text">
          <p>Total Visitors</p>
          <h2>{displayCount}</h2>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;