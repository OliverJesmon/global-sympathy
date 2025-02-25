import React from "react";

import "./Hero.css";
// import Carousel from "./Carousel";
import PropTypes from "prop-types";
import Mainpic from "../images/mainsection.webp";
function Hero({ text1, text2 }) {
  return (
    <>
      <div className="hero-main" >
        <img src={Mainpic} alt="mainpic" className="img" />
{/*        
        <Carousel /> */}
        <div className="label">
          <p className="making-primary">
            <span className="text-wrapper">
              {text1}
              <br />
            </span>
            <span className="span">{text2}</span>
          </p>
        </div>
       
      </div>
    </>
  );
}

export default Hero;

Hero.prototype = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string,
};
