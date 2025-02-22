import React from 'react'
import Hero from '../components/Hero'
import Impact from '../components/Impact'
import OurImpact from '../components/ourimpact'
import Ourprogram from '../components/ourprogram'
import Info from '../components/Info'
import Objectives from '../components/Objectives'
import GetInvolved from '../components/GetInvolved'


function About() {
  
  return (
    <>
    <Hero text1="Real Work. Real Change" />
    <Impact />
    <center><h2>Our Story</h2></center>
    <Info />
    
      
    
    
    <Objectives/>
   
    <OurImpact/>
   <Ourprogram/>
    <GetInvolved />
    </>
  )
}

export default About