import "../App.css";
import Coreobjectives from "../components/Coreobjectives";
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
          <div className="text-wrapper1">Read more</div>
        </div>
        <Impact />
        <Coreobjectives />
      </div>
    </>
  );
}

export default Home;
