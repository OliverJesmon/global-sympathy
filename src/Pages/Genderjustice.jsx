import CSR from "../components/CSR";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Workinfo from "../components/Workinfo";
import './Support.css';
import genderJustice from '../images/main4.png'
export default function genderjustice() {
  const Para1 =
    "Gender justice is crucial for creating a fair, inclusive, and equal society where both men and women have access to the same opportunities and rights. Gender inequality remains a significant issue worldwide, especially in areas such as education, healthcare, economic participation, and political representation. Achieving gender justice means addressing these disparities and empowering women and marginalized genders to participate equally in society.";
  const Para2 =
    "Global Sympathy Foundation (GSF) is committed to championing gender justice by actively working to dismantle barriers of inequality that affect women and marginalized genders. With a focus on empowerment, education, and equal rights, GSF strives to ensure that all individuals, regardless of gender, have access to the same opportunities, protection, and resources.";
  const Para3 =
    "GSF’s approach to gender justice includes addressing violence, discrimination, and unequal access to education and healthcare, while promoting economic independence and leadership opportunities for women and girls. By prioritizing gender equality in its programs, GSF works towards creating a world where gender-based disparities are eliminated, and everyone can lead a life of dignity and opportunity.";
  return (
    <div className="gender-j">
      <Hero text1="Responding to the call of Humanity" img={genderJustice}/>
      <Impact />
      <Workinfo
        title="Gender Justice"
        para1={Para1}
        para3={Para2}
        para4={Para3}
      />
      <CSR title="Donate For Gender Justice"/>
    </div>
  );
}
