
import CSR from "../components/CSR";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";

import "./Support.css"; // Ensure this file exists in the correct location

function Support() {
  return (
    <div className="support-container">
      <section className="hero-section">
        <h1>Your Support Is Crucial In Ensuring Education For All!</h1>

        <div className="education-section">
          <div className="content-left">
            <p>
              Childhood is said to be the best part of human life – an age where
              we are carefree, safe, and happy. But a happy childhood is not the
              reality for many children, who are out-of-school. There are many
              reasons for children to drop out of school – from challenging
              socio-economic circumstances to lack of awareness in communities
              where education is not seen as a priority.
            </p>
            <br />
            <p>
              Going to school not only ensures a dignified future and a happy
              present for children, but also gives them a safe space to express
              themselves, learn, share, and grow. Children who drop out often
              have to work as child labor, are pushed into child marriages, or
              become victims of child trafficking.
            </p>
            <br />
            <p>
              GSF Foundation, through its Shiksha Na Ruke initiative, has been
              helping children from difficult circumstances continue their
              education, with the hope of a brighter future and better life. At
              present, we are directly providing education to over 120,000
              children in 27 states of India.
            </p>
            <br />
            <p>
              Despite all the odds, these young champions have not given up and
              continue to dream and work hard. With your support, we can fuel
              their dreams with accessible and quality education. Join hands
              with us to ensure a happy and safe childhood for all!
            </p>
          </div>

          <div className="donation-form">
            <p className="support-heading">SUPPORT THE CAUSE</p>

            <button className="support-donate-button">MAKE DONATIONS</button>

            <div className="donation-info">
              <p>
                YOUR DONATION WILL HELP FOR THE EDUCATION OF 1 CHILD FOR 3
                MONTHS
              </p>
            </div>

            {/* Dummy UPI QR Code */}
            <div className="upi-scanner">
              <img
                src="https://via.placeholder.com/150"
                alt="Dummy UPI Scanner"
              />
            </div>

            <p>UPI ID:</p>

            {/* OR Separator */}
            
            <div className="or">  <h3>OR</h3></div>
          

            {/* Static Bank Account Details */}
            <div className="bank-details-box">
              <h3>Bank Account Details</h3>
              <p>
                <strong>Global Sympathy Foundation</strong>
              </p>
              <p>Union Bank of India</p>
              <p>Andheri East Branch</p>
              <p>
                <strong>A/C No:</strong> 002811010000239
              </p>
              <p>
                <strong>IFSC Code:</strong> UBIN0800287
              </p>
            </div>

            {/* Blue Separator Line */}
            <div className="separator"></div>

            <div className="tax-info">
              <p>
                YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UP TO 50% TAX BENEFIT UNDER
                SECTION 80G AS GSF FOUNDATION IS REGISTERED AS A NON-PROFIT
                ORGANIZATION
              </p>
             
            </div>
          </div>
        </div>
      </section>

      <section className="interventions-section">
        <div className="section-header">
          <h1>Key Interventions Under Shiksha Na Ruke</h1>
        </div>

        <div className="intervention-grid">
          {[
            {
              img: img1,
              text: "Primary and Secondary education for children",
            },
            {
              img: img2,
              text: "Regular health check-ups & nutrition support",
            },
            {
              img: img3,
              text: "Training and capacity building of teachers",
            },
            { img: img4, text: "Vocational Education & Skill Training" },
          ].map((item, index) => (
            <div key={index} className="intervention-card">
              <img src={item.img} alt={`intervention ${index + 1}`} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="interventions-section-2">
        <div className="intervention-grid">
          {[
            {
              img: img5,
              text: "Music, sports, life skills education to promote socio-emotional well-being",
            },
            {
              img: img6,
              text: "Infrastructure development, STEM learning programs with government schools",
            },
            {
              img: img7,
              text: "Digital literacy and learning access to rural & tribal children",
            },
            {
              img: img8,
              text: "Merit-based scholarships for girl children focused on holistic development",
            },
          ].map((item, index) => (
            <div key={index} className="intervention-card">
              <img src={item.img} alt={`intervention ${index + 1}`} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CSR title="Donate Now" />
    </div>
  );
}

export default Support;
