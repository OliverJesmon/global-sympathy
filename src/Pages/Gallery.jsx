import cultural from "../images/cultural.jpg";
import disaster from "../images/disaster.jpg";
import edu from "../images/edu.jpg";
import gender from "../images/gender.jpg";
import health from "../images/health.jpg";
import rural from "../images/rural.jpg";
import MainPic from '../images/mainsection.webp';
import Hero from "../components/Hero";
import './Gallery.css'
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "EDUCATION",
    img: edu,
    color: "#F0C675",
    link: '/edu'
  },
  {
    title: "HEALTHCARE",
    img: health,
    color: "#C1ACCC",
    link: '/health'
  },
  {
    title: "CULTURAL PRESERVATION",
    img: cultural,
    color: "#64c3c2",
    link: '/Cultural'
  },
  {
    title: "GENDER JUSTICE",
    img: gender,
    color: "#DFC0AF",
    link: '/gender'
  },
  {
    title: "RURAL DEVELOPMENT",
    img: rural,
    color: "#51C777",
    link: '/rural'
  },
  {
    title: "DISASTER RELIEF",
    img: disaster,
    color: "#FB8071",
    link: '/disaster-relief'
  },
];

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <>
    <Hero text1="Real Work. Real Change" img={MainPic}/>
    <div className="gallery-categories-container">
      {categories.map((category, index) => (
        <div
          key={index}
          className="gallery-category-card easyzoomin" // Added zoom effect class
          style={{ backgroundImage: `url(${category.img})` }}
          onClick={()=>navigate(category.link)}
        >
          <div className="overlay"></div>
          <h3 style={{ color: category.color }}>{category.title}</h3>
        </div>
      ))}
    </div>
    </>
  );
};

export default Gallery;  