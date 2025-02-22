import React from "react";
import "./CulturalPres.css"; // Import CSS file

// Import local images
import img1 from "../images/c1.jpg";
import img2 from "../images/c2.jpg";
import img3 from "../images/c3.jpg";
import img4 from "../images/c4.jpg";
import img5 from "../images/c5.jpg";

const images = [img1, img2, img3, img4, img5];

const CulturalGrid = () => {
  return (
    <div className="cultural-container">
      <h2 className="title">Cultural Gallery</h2>

      {/* Desktop Grid Layout with 2 images per row */}
      <div className="cultural-grid desktop-view">
        {images.map((src, index) => (
          <div key={index} className={`grid-item ${index === images.length - 1 ? "centered" : ""}`} style={index === images.length - 1 ? { gridColumn: "span 2", display: "flex", justifyContent: "center" } : {}}>
            <img src={src} alt={`Cultural ${index + 1}`} style={index === images.length - 1 ? { width: "auto", height: "auto" } : {}} />
          </div>
        ))}
      </div>

      {/* Mobile Grid Layout with 1 image per row */}
      <div className="cultural-grid mobile-view">
        {images.map((src, index) => (
          <div key={index} className="grid-item">
            <img src={src} alt={`Cultural ${index + 1}`} />
          </div>
          
        ))}
      </div>
     
    </div>
  );
};

export default CulturalGrid;