import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Workinfo from "../components/Workinfo";
import EducationPic from '../images/educationalsupport.png';

import "../components/styles/Education.css";

export default function Education() {
  const Para1 = "If We Need To Address Healthcare, Poverty, Population Control, Unemployment And Human Rights, There's No Better Way To Start Than Providing Education To Children In Need. Education Not Only Empowers Children To Have A Secure Future But Also Helps Them Grow Up As Responsible National And Global Citizens. The Right To Education (RTE) Act Which Came Into Force In 2010 Made Education Free And Compulsory For All Children In The Age Group Of 6-14 Years. But Even A Decade Later, The Learning Curve Has Not Been Steady For Many Children In The Country. The Socio-Economic Conditions Of Parents And Lack Of Proper Learning In Schools Are Hindrances Which Prevent Many Children From Having Education.";

  const Para2 = "Smile Foundation’s Flagship Programme Mission Education Works With The Objective Of Empowering Underprivileged Children By Providing Education, Nutrition, And Wellness Support. The Programme Is Well Aligned To The New Education Policy (2020), And The SDG Goal 4 (Ensure Inclusive And Equitable Quality Education And Promote Lifelong Learning Opportunities For All). Mission Education Works With Children (3-18 Years) Living In Difficult Circumstances, Children From Poor Families, Differently Abled Children, Disaster-Struck Children, Abandoned And Street Children, And Children Living In Tribal Belts, Remote Villages And Hard To Reach Areas.";

  return (
    <>
      {/* Hero Section */}
      <Hero text1="Education is empowerment" />

      {/* Impact Section */}
      <Impact />

      {/* Work Information */}
      <div className="workinfo-container">
        <Workinfo title="Education" para1={Para1} para3={Para2} />
      </div>

      {/* Education Support Section */}
      <div className="education-support-container">
        {/* Image Section */}
        <img src={EducationPic} alt="Educational Support Visual" className="education-support-image" />
        <div className="csr-content">
          <button className="support-donate-button large">DONATE FOR EDUCATION</button>
          <div className="csr-info">
            <p className="csr-title">FOR CSR SUPPORT</p>
            <p className="csr-subtitle">Write To</p>
            <p className="csr-email">Rons Bantwal A gsfindia25@gmail.com</p>
          </div>
        </div>
      </div>
    </>
    
  );
}
