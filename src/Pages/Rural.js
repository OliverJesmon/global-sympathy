import CSR from "../components/CSR"
import Hero from "../components/Hero"
import Impact from "../components/Impact"
import "./Rural.css"
import Workinfo from "../components/Workinfo"
import Children from "../images/children.png"

function Rural() {
    const Para1="Rural development is essential for creating sustainable communities, reducing poverty, and ensuring equal opportunities for people living in remote areas. A significant portion of the population still lacks access to basic education, healthcare, clean water, and livelihood opportunities. Strengthening rural areas leads to economic growth, reduced migration to cities, and an overall improvement in quality of life."
    const Para2="Global Sympathy Foundation (GSF) believes that rural development is key to building a strong, equitable, and sustainable future for underserved communities. Many rural areas face challenges such as limited access to education, healthcare, clean water, and income-generating opportunities. By focusing on rural development, GSF aims to empower these communities, reduce poverty, and ensure that no one is left behind."
    const Para3="Through infrastructure development, skill-building initiatives, healthcare programs, and sustainable livelihood projects, GSF works to improve the quality of life for rural populations. This approach not only benefits individuals but also strengthens the entire community, fostering self-sufficiency and reducing urban migration."
  return (
    <>
    <Hero text1="RESPONDING TO THE CALL OF HUMANITY" img={Children} />
    <Impact />
    <Workinfo title="Rural Development" para1={Para1} para3={Para2} para4={Para3}/>
    <CSR title="Donate For Rural Development"/>
    </>
  )
}

export default Rural