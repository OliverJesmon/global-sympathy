import React from "react";
import Cultural from "../images/logo/culturalpresv.jpeg";
import decentwork from "../images/logo/decent.jpeg";
import Disaster from "../images/logo/disasteresponse.jpeg";
import Education from "../images/logo/education.jpeg";
import genderequality from "../images/logo/genderequal.jpeg";
import Gender from "../images/logo/genderjustice.jpg";
import goodhealth from "../images/logo/goodhealth.jpeg";
import Healthcare from "../images/logo/healthcare.jpeg";
import reduced from "../images/logo/inequalities.jpeg";
import partnership from "../images/logo/partenships.jpeg";
import qualityeducation from "../images/logo/qualityedu.jpeg";
import Rural from "../images/logo/ruraldevelopment.jpeg";
import "./Coreobjectives.css";
import { useNavigate } from "react-router-dom";

const categories = [
  { title: "EDUCATION", description: "Provide educational opportunities for underprivileged students.", icon: Education, color: "orange", link: '/education' },
  { title: "HEALTHCARE", description: "Offer medical relief through hospitals and dispensaries.", icon: Healthcare, color: "purple", link: '/healthcare' },
  { title: "CULTURAL PRESERVATION", description: "Promote and preserve India's rich cultural heritage.", icon: Cultural, color: "lightblue", link: '/culturalpreserve' },
  { title: "GENDER JUSTICE", description: "Empower women and children through education and healthcare.", icon: Gender, color: "lightcoral", link: '/genderjustice' },
  { title: "RURAL DEVELOPMENT", description: "Improve living conditions in rural communities.", icon: Rural, color: "green", link: '/ruraldevelopment' },
  { title: "DISASTER RESPONSE", description: "Provide immediate assistance during natural calamities.", icon: Disaster, color: "red", link: '/disaster' }
];

const Coreobjectives = () => {

  const navigate = useNavigate();
  return (
    <div className="core-objectives">
      <h2 className="section-title">OUR CORE OBJECTIVES</h2>

      {/* Cards Section */}
      <div className="Categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card" onClick={()=>navigate(category.link)} >
            <img src={category.icon} alt={category.title} className="category-icon" />
            <div className="category-content">
              <h2 className="category-title" style={{ color: category.color }}>
                {category.title}
              </h2>
              <p className="category-description">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sustainable Development Goals Section */}
      <div className="sdg-section">
        <h2 className="sdg-title">TOWARDS ACHIEVING</h2>
        <h2 className="sdg-subtitle">SUSTAINABLE DEVELOPMENT GOALS</h2>
        <div className="sdg-container">
          {[goodhealth, genderequality, qualityeducation, decentwork, reduced, partnership].map((goal, index) => (
            <div key={index} className="sdg-card">
              <img src={goal} alt="Sustainable Goal" className="sdg-icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coreobjectives;