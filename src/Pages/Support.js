// Support.jsx
import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import pay from "../images/pay.png";
import "./Support.css";

function Support() {
  const donationAmounts = [1500, 3000, 6000, 12000];

  return (
    <div className="support-container">
      <section className="hero-section">
        <h1>Your Support Is Crucial In Ensuring Education For All!</h1>
        
        <div className="education-section">
          <div className="content-left">
            <p>Childhood is said to be the best part of human life – an age where we are carefree, safe and happy. But a happy childhood is not the reality for many children, who are out-of-school. There are many reasons for children to drop out of school – from challenging socio-economic circumstances, to lack of awareness in communities where education is not seen as a priority</p>
            <p>Going to school not only ensures a dignified future and a happy present for children, but also gives them a safe space to express themselves, learn, share and grow. Children who drop out often have to work as child labour, are pushed into child marriages, or become victims of child trafficking.</p>
            <p>Smile Foundation, through its 'Shiksha Na Ruke' initiative has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life. At present, we are directly providing education to over 120,000 children in 27 states of India.</p>
            <p>Despite all the odds, these young champions have not given up and continue to dream and work hard. With your support, we can fuel their dreams with accessible and quality education. Join hands with us to ensure a happy and safe childhood for all!</p>
          </div>

          <div className="donation-form">
            <p className="support-heading" >SUPPORT THE CAUSE</p>
            
            <button className="support-donate-button">MAKE DONATIONS</button>
            
            <div className="amount-options">
              <ul>
                {donationAmounts.map((amount) => (
                  <li key={amount}>
                    <label>
                      <input type="radio" name="payment" />
                      ₹{amount}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="donation-info">
              <p>YOUR DONATION WILL HELP FOR THE EDUCATION OF 1 CHILD FOR 3 MONTHS</p>
            </div>

            <div className="payment-logo">
              <img src={pay} alt="payment options" />
            </div>

            <input type="text" placeholder="₹ Other Amounts" className="custom-amount" />
            
            <button className="support-donate-button">DONATE NOW</button>

            <div className="tax-info">
              <p>YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UPTO 50% TAX BENEFIT UNDER SECTION 80G AS SMILE FOUNDATION IS REGISTERED AS NON PROFIT ORGANIZATION</p>
              <p>PAN: AACTS7973G | 80G NUMBER: AACTS7973GF20210</p>
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
            { img: img1, text: "Primary and Secondary education for children" },
            { img: img2, text: "Regular health check-ups & nutrition support" },
            { img: img3, text: "Training and capacity building of teachers" },
            { img: img4, text: "Vocational Education & Skill Training" },
          ].map((item, index) => (
            <div key={index} className="intervention-card">
              <img src={item.img} alt={`intervention ${index + 1}`} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="interventions-section-2" >
        <div className="intervention-grid">
          {[
            { img: img5, text: "Music, sports, life skills education to promote socio-emotional well being" },
            { img: img6, text: "Infrastructure development, STEM learning programmes with government schools" },
            { img: img7, text: "Digital literacy and learning access to rural & tribal children" },
            { img: img8, text: "Merit-based scholarships for girl children focused on holistic development" }
          ].map((item, index) => (
            <div key={index} className="intervention-card">
              <img src={item.img} alt={`intervention ${index + 1}`} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="csr-section">
        <div className="csr-content">
          <button className="support-donate-button large">DONATE NOW</button>
          <div className="csr-info">
            <p className="csr-title">FOR CSR SUPPORT</p>
            <p className="csr-subtitle">Write To</p>
            <p className="csr-email">Rons Bantwal A gsfindia25@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;