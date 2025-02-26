import React from "react";
import "../App.css";
import Children from "./Children";


const Disasterlife = () => {
  return (
     <div className="disasterrelife">
          <h1 className="section-title">WHY DISASTER RELIFE</h1>
          <p className="section-text">
            Being A Disaster-Prone Country, India Is Highly Vulnerable To Various Types Of Natural Calamities Due To
            Its Geographical Positioning. According To The National Disaster Management Authority, Govt. Of India, More
            Than 58.6% Of The Country's Landmass Is Prone To Earthquakes And Over 12% Is Prone To Floods; Close To
            5,700kms Out Of The 7,516kms Long Coastline Is Prone To Cyclones And Tsunamis; While 68% Of Its
            Cultivable Area Is Prone To Droughts, Which Is Why Disaster Preparedness Is Of Utmost Importance.</p>
          <h2 className="section-title"> WHAT WE DO</h2>
          <p className="section-text">
    
            Disaster Risks In India Are Further Compounded By Increasing Vulnerabilities Related To Changing
            Demographics, Socio-Economic Conditions, Unplanned Urbanization, Development Within High-Risk Zones,
            Environmental Degradation, Climate Change, And Epidemics And Pandemics. All These Factors Have
            Created A Situation Where Disasters Seriously Threaten The Sustainable Development Of The Country,
            Besides Innumerable Lives And Livelihoods.</p>
          <p className="section-text">
            Smile Foundation, With Its Welfare Interventions Focused On Children And Their Families, Responds To The
            Call Of Humanity In Times Of Such Calamities Under Its Disaster Response Programme Through Emergency
            Relief Programs. From The Kashmir Earthquake In 2005 To The Fani Cyclone In 2019 And The Assam Floods
            In 2022, Smile Foundation Has Acted Promptly To Reach Out And Respond To The Immediate Needs Of The
            Disaster-Affected People, While Also Maintaining A Sustainable Approach To Help Them Rebuild Their Lives
            By Facilitating Their Education, Healthcare, And Livelihood.</p>

      {/* Projects Section */}
      <div className="projects-section">
        <div className="project-card">
          <h3>Uttarakhand Floods</h3>
          <p>Providing emergency relief and rehabilitation to affected families.</p>
        </div>
        <div className="project-card">
          <h3>Bihar Floods</h3>
          <p>Distributing food, medical aid, and shelter to impacted communities.</p>
        </div>
        <div className="project-card">
          <h3>Maharashtra Floods</h3>
          <p>Helping rebuild lives and livelihoods in affected areas.</p>
        </div>
      </div>
      <div>
        
      <p className="section-text">
        Some Of The Calamities During Which Smile Foundation Has Initiated Crisis Management During Disaster Are The Tsunami, The Kashmir Earthquake, The Maharashtra Floods, The Bihar Floods, And The Uttarakhand Floods.</p>
      <div className="donate-container">
      <div className='donates'>
        <button className="donate-button">DONATE FOR RURAL DEVELOPMENT</button>
      </div>

      <div className="csr-support">
        <h2>FOR CSR SUPPORT</h2>
        <p>Write To</p>
        <strong>Rons Bantwal At </strong>
        <a href="mailto:gsfindias25@gmail.com">gsfindias25@gmail.com</a>
      </div>

      </div>

    </div>

  </div>
);
};

     

export default Disasterlife;
