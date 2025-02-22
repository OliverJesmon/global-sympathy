import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';

import Media from './Pages/Media';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Support from './Pages/Support';
import Footer from './components/Footer';
import Disaster from './Pages/Disaster';
import Education from './Pages/Education';
import GenderJustice from './Pages/Genderjustice';
import Healthcare from './Pages/Healthcare';
import CulturalP from './Pages/CulturalP';
import Rural from './Pages/Rural';
import Health from './Pages/HealthC';
import Gender  from './Pages/Gender'
import CulturalPres from './Pages/CulturalPres'
import DisasterRelief from './Pages/DisasterRelief';
import Edu from './Pages/Edu';
import RuralDev from './Pages/Ruraldev';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/ruraldevelopment' element={<Rural/>}/>
        <Route path='/culturalpreserve' element={<CulturalP/>}/>
        <Route path='/disaster' element={<Disaster/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>        
        <Route path='/support' element={<Support/>}/>        
        <Route path="/genderjustice" element={<GenderJustice />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/health" element={<Health />} />
        <Route path="/rural" element={<RuralDev />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/Cultural" element={<CulturalPres />} />
        <Route path="/disaster-relief" element={<DisasterRelief />} />
        <Route path="/edu" element={<Edu />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
