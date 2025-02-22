import React from "react";
import "./health.css"; // Import CSS file

// Import local images
import a from "../images/h1.jpg";
import b from "../images/h2.jpg";
import c from "../images/h3.jpg";
import d from "../images/h4.jpg";
import e from "../images/h5.jpg";
import f from "../images/h6.jpg";
import g from "../images/h7.jpg";
import h from "../images/h8.jpg";
import i from "../images/h9.jpg";
import j from "../images/h10.jpg";
import k from "../images/h11.jpg";

const images = [a, b, c, d, e, f, g, h, i, j, k];

const HealthcareGrid = () => {
  return (
    <div className="healthcare-container">
      <h2 className="title">Healthcare Gallery</h2>

      {/* Desktop Grid Layout with 2 images per row */}
      <div className="healthcare-grid desktop-view">
        {images.map((src, index) => (
          <div key={index} className={`grid-item ${index === images.length - 1 ? "centered" : ""}`} style={index === images.length - 1 ? { gridColumn: "span 2", display: "flex", justifyContent: "center" } : {}}>
            <img src={src} alt={`Healthcare ${index + 1}`} style={index === images.length - 1 ? { width: "auto", height: "auto" } : {}} />
          </div>
        ))}
      </div>

      {/* Mobile Grid Layout with 1 image per row */}
      <div className="healthcare-grid mobile-view">
        {images.map((src, index) => (
          <div key={index} className="grid-item">
            <img src={src} alt={`Healthcare ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareGrid;
