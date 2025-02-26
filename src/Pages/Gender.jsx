
import "./gender.css"; // Import CSS file

// Import local images
import img1 from "../images/g1.jpg";
import img2 from "../images/g2.jpg";
import img3 from "../images/g3.jpg";
import img4 from "../images/g4.jpg";

const images = [img1, img2, img3, img4];

const GenderJusticeGrid = () => {
  return (
    <div className="gender-justice-container">
      <h2 className="title">Gender Justice Gallery</h2>

      {/* Grid Layout */}
      <div className="gender-justice-grid">
        {images.map((src, index) => (
          <div key={index} className="grid-item">
            <img src={src} alt={`Gender Justice ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenderJusticeGrid;
