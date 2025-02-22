import React, { useEffect, useRef, useState } from "react";
import "./OurImpact.css";

const statsData = [
  { finalNumber: 35, suffix: "+", label: "THOUSAND", description: "children and their families are impacted" },
  { finalNumber: 300, suffix: "+", label: "VILLAGES", description: "and slums are reached out to across" },
  { finalNumber: 550, suffix: "+", label: "PROJECTS", description: "focused on education, healthcare, and women empowerment" },
  { finalNumber: 5, suffix: "+", label: "STATES", description: "are reached including the remotest areas" }
];

const OurImpact = () => {
  return (
    <div className="Project-impact-container">
      <h2 className="Project-impact-title">OUR IMPACT</h2>
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ stat }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.finalNumber;
    const duration = 2000;
    const incrementTime = 50;
    const step = Math.ceil((end - start) / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, stat.finalNumber]);

  return (
    <div className="stat-card" ref={ref}>
      <h3 className="stat-number">{count}{stat.suffix}</h3>
      <p className="stat-label">{stat.label}</p>
      <p className="stat-description">{stat.description}</p>
    </div>
  );
};

export default OurImpact;
