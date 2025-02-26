import React from "react";
import "./Project.css"; // Import external CSS file

const Impact = () => {
  return (
    <div className="impact-container">
      <h2 className="impact-title">OUR IMPACT</h2>
      <p className="impact-text">
        For over two and a half decades, GSF has been at the forefront of social development, 
        focusing on:
      </p>
      
      <ul className="impact-list">
        <li>-Poverty Alleviation</li><br/>
        <li>-Education For The Underprivileged</li><br/>
        <li>-Child Protection And Women’s Empowerment</li><br/>
        <li>-Disaster Risk Management And Relief</li><br/>
        <li>-Water And Sanitation Initiatives</li><br/>
        <li>-Gender Justice And Social Welfare</li><br/>
      </ul>
      <p className="impact-footer">
        Through strategic partnerships and community-driven projects, we have positively impacted countless 
        lives across India.
      </p>
    </div>
  );
};

export default Impact;