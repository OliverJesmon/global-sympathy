

import React from 'react';
import './ourprogram.css'; // Ensure you include this CSS file

const Programs = () => {
  return (
    <div className="programs-container">
      <h2 className="programs-title">OUR PROGRAMS</h2>
      <ol className="programs-list">
        <li>Education For All: Scholarships, Educational Materials, And Training Programs For
             Underprivileged Students.</li>
        <li>Healthcare Initiatives: Free Medical Camps, Ambulance Services, And Support For
             Hospitals And Dispensaries.</li>
        <li>Disaster Relief: Emergency Response Teams Providing Food, Clothing, And Shelter During Natural Calamities.</li>
        <li>Rural Development: Infrastructure Projects, Skill Development, And Employment Generation In Rural Areas.</li>
        <li>Women And Child Welfare: Empowerment Programs, Vocational Training, And Healthcare Support.</li>
        <li>Cultural Preservation: Promoting Indian Culture, Heritage, And Spiritual Values Through Workshops And Events.</li>
      </ol>
    </div>
  );
};

export default Programs;