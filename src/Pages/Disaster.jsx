import Hero from "../components/Hero";
import Impact from "../components/Impact";
import './Disaster.css'
import Workinfo from '../components/Workinfo';
import Excavator from '../images/main3.png'
import CSR from "../components/CSR";

function Disaster() {
    const Para1="Being a disaster-prone country, India is highly vulnerable to various types of natural calamities due to its geographical positioning. According to the National Disaster Management Authority, Govt. of India, more than 58.6% of the country's landmass is prone to earthquakes and over 12% is prone to floods; close to 5,700kms out of the 7,516kms long coastline is prone to cyclones and tsunamis; while 68% of its cultivable area is prone to droughts which is why disaster preparedness is of utmost importance.";
    const Para2="Disaster risks in India are further compounded by increasing vulnerabilities related to changing demographics, socio-economic conditions- unplanned urbanization, development within high-risk zones, environmental degradation, climate change, and epidemics and pandemics. All these factors have created a situation where disasters seriously threaten the sustainable development of the country, besides innumerable lives and livelihoods.";
    const Para3="GSF Foundation, with its welfare interventions focused on children and their families, responds to the call of humanity in times of such calamities under its Disaster Response programme through emergency relief programs. From the Kashmir Earthquake in 2005 to the Fani Cyclone in 2019 and the Assam Floods in 2022, Smile Foundation has acted promptly to reach out and respond to the immediate needs of the disaster-affected people, while also maintaining a sustainable approach to help them rebuild their lives by facilitating their education, healthcare, and livelihood.";
    const Para4="Some of the calamities during which Smile Foundation has initiated crisis management during disaster are the Tsunami, the Kashmir Earthquake, the Maharashtra Floods, the Bihar Floods, and the Uttarakhand Floods.";
  return (
    <><Hero text1="Responding to the call of Humanity" img={Excavator}/>
      <Impact />
      <Workinfo title="Disaster Relief" para1={Para1} para2={Para2} para3={Para3} para4={Para4}/>
      <CSR title="Donate For Disaster Relief" />
        </>
  );
}

export default Disaster