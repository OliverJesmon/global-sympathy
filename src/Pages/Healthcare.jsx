import CSR from "../components/CSR";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import "../components/styles/Education.css";
import Workinfo from "../components/Workinfo";
import Mainsec from "../images/main1.png";
import HealthcareImage from "../images/mother.png";
import './healthcare.css';


export default function Education(){
  const Para1="With a population of more than 1.4 Billion, last-mile delivery of healthcare in our country is a big challenge. The geospatial diversity of the country further aggravates the issues of accessibility and availability of healthcare in difficult terrains. With more than 65% of the population residing in rural areas with a smaller share of the overall healthcare infrastructure, and the urban slum dwellers prioritising everyday survival over healthcare, uneven distribution and lack of awareness also limit the uptake of existing healthcare services. It is crucial to address these gaps to meet the goals of Universal Health Coverage and support Govt of India's vision of Ayushman Bharat.";
  const Para2="GSF Foundation’s comprehensive and community-centric health programme takes primary healthcare services to the doorsteps of underserved communities in both rural and urban India. Following a two pronged approach, the programme provides curative as well as preventive services, addressing the gaps in availability, accessibility and affordability of healthcare."
    return(
        <><Hero title="Healthcare" text1="Healthcare for all" img={Mainsec}/>
      <Impact />
       
           <Workinfo title="Healthcare" para1={Para1} para3={Para2}/>
        
           {/* <div className="content-section">
        <div className="left-content">
          <a href="/" className="donate-button">
            DONATE FOR EDUCATION
          </a>
        </div>
        <div className="right-content">
           <h2>FOR CSR SUPPORT</h2>
           <p className="write-to">Write To</p>
           <p className="csr-contact">
           <strong>Rons Bantwal At </strong>
           <a href="mailto:gsfindias25@gmail.com">gsfindias25@gmail.com</a>
         </p>
         
         </div> */}
         <div className="healthcare-image-container">
        <img 
          src={HealthcareImage} 
          alt="Healthcare Info" 
          className="healthcare-image" 
        />
      </div>
         <CSR title="Donate For Healthcare"/>
        </>
    );
}
