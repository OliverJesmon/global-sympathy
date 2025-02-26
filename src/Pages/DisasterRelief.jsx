import React from "react";
import "./DisasterRelief.css"; // Import CSS file

// Import local images
import a from "../images/d1.jpg";
import b from "../images/d2.jpg";
import c from "../images/d3.jpg";
import d from "../images/d4.jpg";
import e from "../images/d5.jpg";
import f from "../images/d6.jpg";
import g from "../images/d7.jpg";
import h from "../images/d8.jpg";
import i from "../images/d9.jpg";
import j from "../images/d10.jpg";
import k from "../images/d11.jpg";
import l from "../images/d12.jpg";
import m from "../images/d13.jpg";
import n from "../images/d14.jpg";
import o from "../images/d15.jpg";
import p from "../images/d16.jpg";
import q from "../images/d17.jpg";
import r from "../images/d18.jpg";
import s from "../images/d19.jpg";
import t from "../images/d20.jpg";
import u from "../images/d21.jpg";
import v from "../images/d22.jpg";
import w from "../images/d23.jpg";

// Image array (excluding first-row images)
const images = [a,b,c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w];

const DisasterRelief = () => {
  return (
    <div className="disaster-container">
      <h2 className="title">Disaster Management Gallery</h2>



      {/* Grid Layout for remaining images */}
      <div className="disaster-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Disaster ${index + 1}`}
            className="disaster-image"
          />
        ))}
      </div>
    </div>
  );
};

export default DisasterRelief;
