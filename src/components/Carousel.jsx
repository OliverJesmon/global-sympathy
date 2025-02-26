import React, { useState, useEffect } from "react";

// ... image imports remain the same ...
import image1 from "../images/mainsection.webp";
import image2 from "../images/h11.jpg";
import image3 from "../images/e5.jpg";
import image4 from "../images/d8.jpg";

const images = [image1, image2, image3, image4,];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length) {
        setIsAnimating(false);
        setCurrentIndex(0);
        setTimeout(() => setIsAnimating(true), 50);
      } else {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div 
      className="slideshow-container" 
      style={{ 
        overflow: "hidden", 
        width: "100%",
        height: "100vh",
        position: "relative", 
        margin: "0 auto",
        maxHeight: "1200px" // Optional for very large screens
      }}
    >
      <div 
        className="image-wrapper" 
        style={{ 
          display: "flex", 
          height: "100%",
          transform: `translateX(-${currentIndex * 100}%)`, 
          transition: isAnimating ? "transform 1s ease-in-out" : "none"
        }}
      >
        {[...images, images[0]].map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Slide ${index + 1}`} 
            className="slide" 
            style={{ 
              width: "100%", 
              height: "100%",
              flexShrink: 0, 
              objectFit: "cover",
              objectPosition: "center center"
            }} 
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;