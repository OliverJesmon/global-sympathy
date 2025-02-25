import React, { useEffect, useState } from "react";
import "./Project.css"; // Import external CSS file
import Vision from "../images/logo/culturalpresv.jpeg";
import Mision from "../images/logo/genderjustice.jpg";
import Ron from "../images/normal/Ron.jpg";
import Tara from "../images/normal/Tara.jpg";

import { useLocation } from 'react-router-dom';
import "./Aboutcomponent.css";
function Aboutcomponent() {
  const [isMobile, setIsMobile] = useState(false);
 

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 1000px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      const hash = location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', });
        }
      }
    };

    // Delay scroll to ensure components are rendered
    const timer = setTimeout(scrollToSection, 500);
    return () => clearTimeout(timer);
  }, [location]); 
  return (
    <>
    <center><h2 className='info-title'>Our Story</h2></center>

      <div className="vision-mission-container">
        <div className="section">
          <div className="text">
            <div className="our-vision-mission-title">
              <img src={Vision} alt="Vision Icon" className="icon" />
              <h2>Our Vision</h2>
            </div>
            <p>
              To Ensure Social Justice And Safeguard The Welfare Of Society By
              Advancing Charitable Efforts That Address Future Needs.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="text">
            <div className="our-vision-mission-title">
              <img src={Mision} alt="Mission Icon" className="icon" />
              <h2>Our Mission</h2>
            </div>
            <p>
              To Enhance Capacity Building In Social, Economic, Educational, And
              Healthcare Sectors. We Strive To Preserve Nature, Promote Culture,
              And Serve Humanity With Integrity, Sincerity, And Responsibility.
            </p>
          </div>
        </div>
      </div>
      <div
        className="objective-container"
        style={{ margin: isMobile ? 0 : 80, padding: isMobile ? 40 : 0 }}
        id='Coreobjectives'
      >
        <center >
          <h2 >OUR CORE OBJECTIVES</h2>
        </center>
        <div>
          <p style={styles.content} >
            <span style={styles.bold} >Education:</span> Promote Earning And
            Provide Educational Opportunities For Underprivileged Students In
            Rural And Urban Areas.
          </p>
          <p style={styles.content}>
            <span style={styles.bold}>Healthcare:</span> Offer Medical Relief
            Through Hospitals, Dispensaries, And Support For Orphanages And Old
            Age Homes.
          </p>
          <p style={styles.content}>
            <span style={styles.bold}>Disaster Relief:</span> Provide Immediate
            Assistance During Natural Calamities, Including Food, Clothing, And
            Shelter.
          </p>
          <p style={styles.content}>
            <span style={styles.bold}>Rural Development:</span> Undertake
            Initiatives To Improve Living Conditions In Rural Communities.
          </p>
          <p style={styles.content}>
            <span style={styles.bold}>Gender Justice:</span> Empower Women And
            Children Through Education, Healthcare, And Economic Opportunities.
          </p>
          <p style={styles.content}>
            <span style={styles.bold}>Cultural Preservation:</span> Promote And
            Preserve India’s Rich Cultural Heritage And Spiritual Values.
          </p>
        </div>
      </div>
      <div>

      <div className="trustees">
        <h2>OUR TRUSTEES</h2>
        <div className="trustee-container">
          <div className="trustee">
            <div className="trustee-person-image">
              <img src={Ron} alt="Mr. Rons Bantwal" className="trustee-image" />
              <h3 className="trustee-name">MR. RONS BANTWAL</h3>
            </div>
            <p className="trustee-title">Managing Trustee</p>
            <p className="trustee-description">
              A Renowned Journalist And Social Activist, Mr. Rons Bantwal Has
              Dedicated Over Three Decades To Journalism And Humanitarian Work.
              He Is The Recipient Of Numerous Awards, Including The
              International Man Of The Journalist Award And The Karnataka
              Madhyama Academy Award. His Vision For GSF Is To Create A Society
              Where The Underprivileged Can Thrive With Dignity.
            </p>
          </div>
          <div className="trustee">
            <div className="trustee-person-image">
              <img
                src={Tara}
                alt="Mrs. Jacintha Tara D’Cunha (Tara Bantwal)"
                className="trustee-image"
                />
              <h3 className="trustee-name">
                MRS. JACINTHA TARA D’CUNHA (TARA BANTWAL)
              </h3>
            </div>
            
            <p className="trustee-title">Trustee</p>
            <p className="trustee-description">
              Mrs. Tara Bantwal Is A Compassionate Leader Who Actively Supports
              Social Welfare Initiatives And Promotes Cultural Values. She
              Believes In Empowering The Underprivileged And Fostering A Sense
              Of Community Through Her Work With GSF.
            </p>
            </div>
                </div>
            <div>

            <div className="impact-container" id='ourimpact'>
              <h2 className="impact-title">OUR IMPACT</h2>
              <p className="impact-text">
                For over two and a half decades, GSF has been at the forefront
                of social development, focusing on:
              </p>

              <ul className="impact-list">
                <li>-Poverty Alleviation</li>
                <br />
                <li>-Education For The Underprivileged</li>
                <br />
                <li>-Child Protection And Women’s Empowerment</li>
                <br />
                <li>-Disaster Risk Management And Relief</li>
                <br />
                <li>-Water And Sanitation Initiatives</li>
                <br />
                <li>-Gender Justice And Social Welfare</li>
                <br />
              </ul>
              <p className="impact-footer">
                Through strategic partnerships and community-driven projects, we
                have positively impacted countless lives across India.
              </p>
            </div>
            <div className="programs-container" id='ourProgram'>
              <h2 className="programs-title">OUR PROGRAMS</h2>
              <ol className="programs-list">
                <li>
                  Education For All: Scholarships, Educational Materials, And
                  Training Programs For Underprivileged Students.
                </li>
                <li>
                  Healthcare Initiatives: Free Medical Camps, Ambulance
                  Services, And Support For Hospitals And Dispensaries.
                </li>
                <li>
                  Disaster Relief: Emergency Response Teams Providing Food,
                  Clothing, And Shelter During Natural Calamities.
                </li>
                <li>
                  Rural Development: Infrastructure Projects, Skill Development,
                  And Employment Generation In Rural Areas.
                </li>
                <li>
                  Women And Child Welfare: Empowerment Programs, Vocational
                  Training, And Healthcare Support.
                </li>
                <li>
                  Cultural Preservation: Promoting Indian Culture, Heritage, And
                  Spiritual Values Through Workshops And Events.
                </li>
              </ol>
            </div>
            <div className="gi-container" id='GetInvolved'>
              <h2 className="gi-title">GET INVOLVED</h2>
              <p className="text">
                Join us in our mission to create a better world. Here's how you
                can help:
              </p>
              <p className="text">
                <strong>Donate:</strong> Your contributions can make a
                difference.
              </p>
              <p className="text">
                <strong>Volunteer:</strong> Share your time and skills.
              </p>
              <p className="text">
                <strong>Partner:</strong> Collaborate with us.
              </p>
              <p className="text">
                Donations are tax-exempt under Section 80G of the Income Tax
                Act.
              </p>
            </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
export default Aboutcomponent;

const styles = {
  title: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    
  },
  content: {
    margin: "20px 28px",
    fontSize: "24px",
    lineHeight: "1.6",
  },
  bold: {
    fontWeight: "bold",
  },
};
