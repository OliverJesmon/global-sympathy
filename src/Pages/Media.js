import a from "../images/First.jpg";
import b from "../images/1.jpg";
import c from "../images/2.jpg";
import d from "../images/3.jpg";
import e from "../images/4.jpg";
import f from "../images/5.jpg";
import g from "../images/6.jpg";
import h from "../images/7.jpg";
import i from "../images/8.jpg";
import j from "../images/9.jpg";
import k from "../images/10.jpg";
import l from "../images/11.jpg";
import m from "../images/12.jpg";
import n from "../images/13.jpg";
import o from "../images/14.jpg";
import p from "../images/15.jpg";
import q from "../images/16.jpg";
import r from "../images/17.jpg";

import Hero from "../components/Hero";
import './Media.css'
// Image array excluding First.jpg & 1.jpg
const images = [c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r];

const Media = () => {
  return (
    <>
    <Hero text1="Real Work. Real Change" />
    <div className="newspaper-container">

      {/* First row */}
      <div className="first-row">
        <img src={a} alt="Newspaper Clip First" className="first-image" />
        <img src={b} alt="Newspaper Clip 1" className="first-image" />
      </div>

      {/* Grid layout */}
      <div className="newspaper-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Newspaper Clip ${index + 2}`}
            className="newspaper-image"
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Media;
