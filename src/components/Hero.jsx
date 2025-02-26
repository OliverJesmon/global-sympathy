import PropTypes from "prop-types";
import "./Hero.css";

function Hero({ text1, text2, img }) {
  return (
    <div className="hero-main">
      <img src={img} alt="mainpic" className="hero-img" />
      <div className="hero-text">
        <p className="hero-primary">
          <span className="hero-text1">{text1}</span>
          <br />
          <span className="hero-text2">{text2}</span>
        </p>
      </div>
    </div>
  );
}

export default Hero;

Hero.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  img: PropTypes.string,
};
Hero.defaultProps=
{
  img:'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740574481/mainsection_jsvwyj.jpg'
}