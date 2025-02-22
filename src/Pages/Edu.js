import img1 from '../images/e1.jpg';
import img2 from '../images/e2.jpg';
import img3 from '../images/e3.jpg';
import img4 from '../images/e4.jpg';
import img5 from '../images/e5.jpg';
import img6 from '../images/e6.jpg';
import img7 from '../images/e7.jpg';
import img8 from '../images/e8.jpg';
import './Education.css'

function Edu() {
    return (
        <div className='education-container'>
          <h2 className='title'>Education Gallery</h2>
    
          <div className='grid-layout'>
            <img src={img1} alt='Education 1' className='grid-item' />
            <img src={img2} alt='Education 2' className='grid-item' />
            <img src={img3} alt='Education 3' className='grid-item' />
            <img src={img4} alt='Education 4' className='grid-item' />
            <img src={img5} alt='Education 5' className='grid-item' />
            <img src={img6} alt='Education 6' className='grid-item' />
            <img src={img7} alt='Education 7' className='grid-item' />
            <img src={img8} alt='Education 8' className='grid-item' />
          </div>
        </div>
      );
  
}

export default Edu