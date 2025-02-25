import "../App.css";
import Coreobjectives from "../components/Coreobjectives";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Info from "../components/Info";
function Home() {
  return (
    <>
      <div>
        <Hero text1="Making primary " text2="healthcare accessible for all" />
        <Info />
        <div className="label1">
          
          <div className="text-wrapper1"><Link to="/about" style={{textDecoration:"none", color: "rgb(14, 193, 243)", }}>Read more</Link></div>
          
        </div>
        <Impact />
        <Coreobjectives />
      </div>
    </>
  );
}

export default Home;
