import { useEffect, useState } from "react";
import Vision from "../images/logo/culturalpresv.jpeg";
import Mision from "../images/logo/genderjustice.jpg";
import Ron from "../images/normal/Ron.jpg";
import Tara from "../images/normal/Tara.jpg";
import "./Trustee.css";
function Objectives() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 1000px)").matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
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
      <div className="objective-container" style={{ margin: isMobile ? 0 : 80, padding: isMobile ? 40 : 0 }} >
        <center>
          <h2>OUR CORE OBJECTIVES</h2>
        </center>
        <div>
          <p style={styles.content}>
            <span style={styles.bold}>Education:</span> Promote Earning And
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
      </div>
    </>
  );
}

export default Objectives;

const styles = {
  title: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "20px",
  },
  content: {
    margin: "20px",
    fontSize: "24px",
    lineHeight: "1.6",
  },
  bold: {
    fontWeight: "bold",
  },
};
