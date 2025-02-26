import "../App.css";
import Impact from "../components/Impact";
import Coreobjectives from "../components/Coreobjectives";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
// import Mainpic from "../images/mainsection.webp";
import Info from "../components/Info";
import MainText from "./MainText"; // Import the new component

function Home() {
  return (
    <div className="home-container">
      <MainText /> {/* Use the new component here */}
      <Hero />

      <Info />

      <div className="label1">
        <div className="text-wrapper1">
          <Link to="/about" className="read-more-link">Read more</Link>
        </div>
      </div>

      <Impact />
      <Coreobjectives />
    </div>
  );
}

export default Home;
