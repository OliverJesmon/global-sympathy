import React from 'react'
import Hero from '../components/Hero'
import Impact from '../components/Impact'
import Aboutcomponent from '../components/Aboutcomponent'
import Info from '../components/Info'
import Mainpic from '../images/mainsection.webp'
function About() {
  
  return (
    <>
    <Hero text1="Real Work. Real Change" img={Mainpic}/>

    <Impact />
    <center> <h2 style={{
          fontSize: '52px', /* Match other headings */
          fontWeight: 'bold',
          fontFamily: "'Bebas Neue', sans-serif",
          color: '#222', /* Adjust color */
          marginTop: '100px', /* Add space from above */
          marginBottom: '20px', /* Add space below */
          textTransform: 'uppercase', /* Ensure consistency */
          letterSpacing: '1px' /* Improve readability */
        }}>Our Story</h2></center>
    <Info />
    <Aboutcomponent/>
    
      
    
    
    </>
  )
}

export default About;