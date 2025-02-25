import CSR from "../components/CSR";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import "../components/styles/Education.css";
import Workinfo from "../components/Workinfo";
import Children from "../images/children.png";
import HealthcareImage from "../images/mother.png";
import './healthcare.css';


export default function Education(){
  const Para1="If We Need To Address Healthcare, Poverty, Population Control, Unemployment And Human Rights, There's No Better Way To Start Than Providing Education To Children In Need. Education Not Only Empowers Children To Have A Secure Future But Also Helps Them Grow Up As Responsible National And Global Citizens. The Right To Education (RTE) Act Which Came Into Force In 2010 Made Education Free And Compulsory For All Children In The Age Group Of 6-14 Years. But Even A Decade Later, The Learning Curve Has Not Been Steady For Many Children In The Country. The Socio-Economic Conditions Of Parents And Lack Of Proper Learning In Schools Are Hindrances Which Prevent Many Children From Having Education.";
  const Para2="Smile Foundation’s comprehensive and community-centric health programme takes primary healthcare services to the doorsteps of underserved communities in both rural and urban India. Following a two pronged approach, the programme provides curative as well as preventive services, addressing the gaps in availability, accessibility and affordability of healthcare."
    return(
        <><Hero title="Healthcare" text1="Healthcare for all" img={Children}/>
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
