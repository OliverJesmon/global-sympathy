import React, { useEffect, useState, useRef } from "react";
import './styles/compStyle.css';

const Counter = ({ end, triggerCount, formatTwoDigits }) => {
  const start = Math.floor(end / 2);
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!triggerCount) return;

    let current = start;
    const stepTime = 30;
    const totalSteps = 50;
    const increment = (end - start) / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, triggerCount]);

  return <h3 style={styles.number}>{formatTwoDigits ? count.toString().padStart(2, '0') : count}+</h3>;
};

const OurImpact = () => {
  const [triggerCount, setTriggerCount] = useState(false);
  const impactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggerCount(false); // Reset before triggering
          setTimeout(() => setTriggerCount(true), 100); // Small delay to restart animation
        }
      },
      { threshold: 0.3 }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => {
      if (impactRef.current) observer.unobserve(impactRef.current);
    };
  }, []);

  return (
    <div style={styles.container} ref={impactRef}>
      <h2 style={styles.title}>OUR IMPACT</h2>
      <div style={styles.statsContainer}>
        <div style={styles.stat}>
          <Counter end={35} triggerCount={triggerCount} />
          <p style={styles.subText}>THOUSAND</p>
          <p style={styles.description}>
            children and </p>
          <p style={styles.description}>
            and their families
          </p>
          <p style={styles.description}>
             are impacted
          </p>
        </div>
        <div style={styles.stat}>
          <Counter end={300} triggerCount={triggerCount} />
          <p style={styles.subText}>VILLAGES</p>
          <p style={styles.description}>and slums</p>
          <p style={styles.description}>reached out </p>
          <p style={styles.description}> across</p>
        </div>
        <div style={styles.stat}>
          <Counter end={550} triggerCount={triggerCount} />
          <p style={styles.subText}>PROJECTS</p>
          <p style={styles.description}>
            focused on
          </p>
          <p style={styles.description}>
            education, healthcare,
          </p>
          <p style={styles.description}>
          and women empowerment
          </p>
        </div>
        <div style={styles.stat}>
          <Counter end={5} triggerCount={triggerCount} formatTwoDigits={true} />
          <p style={styles.subText}>STATES</p>
          <p style={styles.description}>
            are reached 
          </p>
          <p style={styles.description}>
           the 
          </p>
          <p style={styles.description}>
             areas
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding:"0 100px",
  },
  title: {
    fontSize: "52px",
    fontFamily: "Bebas Neue",
    fontWeight: "bold",
    marginTop: "60px",
    marginBottom: "20px", 
  
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-around",
    gap: '20px',
    flexWrap: "wrap",
    padding: "auto",
    
  },
  stat: {
    flex: "1",
    minWidth: "180px"
  },
  number: {
    fontSize: "80px",
    color: "#00A0E3",
    fontFamily: "Bebas Neue",
  },
  subText: {
    fontSize: "32px",
    fontWeight: "400",
    fontFamily: 'Bebas Neue',
    lineHeight: "38.4px",
    color: "#00A0E3",
    overflowY:"hidden",
  },
  description: {
    fontSize: "20px",
    fontFamily: "Raleway",
    fontWeight: "400",
    lineHeight: "23.48px",
    textAlign: "center",
  },
};

export default OurImpact;